"""
Test for bird API
"""
from decimal import Decimal

from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse

from rest_framework import status
from rest_framework.test import APIClient

from core.models import Bird

from bird.serializers import BirdSerializer

BIRD_URL = reverse('bird:bird-list')


def create_bird(user, **params):
    """Create and return a sample bird"""
    defaults = {
        'hebrew_name': "בולבול מצוי",
        'image_url': 'https://storage.googleapis.com/bird_images_bird_quiz/Anserfabalis/images7.jpg'
    }

    defaults.update(params)

    bird = Bird.objects.create(user=user, **defaults)

    return bird


class PublicBirdAPITests(TestCase):
    """Test API requests"""

    def setUp(self):
        self.client = APIClient()

    def test_auth_required(self):
        """Test auth is required to call API"""
        res = self.client.get(BIRD_URL)

        self.assertEqual(res.status_code, status.HTTP_401_UNAUTHORIZED)


class PrivateBirdAPITests(TestCase):
    """Test authenticated API requests"""

    def setUp(self):
        self.client = APIClient()
        self.user = get_user_model().objects.create_user(
            'user@example.com',
            'testpass123'
        )
        self.client.force_authenticate(self.user)

    def test_retrieve_birds(self):
        """Test retrieve a list of birds"""
        create_bird(user=self.user)
        create_bird(user=self.user)

        res = self.client.get(BIRD_URL)

        birds = Bird.objects.all().order_by('-id')
        serializer = BirdSerializer(birds, many=True)
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)
