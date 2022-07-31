# """
# Test for bird API
# """
# from decimal import Decimal
#
# from django.test import TestCase
# from django.urls import reverse
#
# from rest_framework import status
# from rest_framework.test import APIClient
#
# from core.models import Bird
#
# from bird.serializers import BirdSerializer
#
# BIRD_URL = reverse('bird:bird-list')
#
#
# def create_bird(**params):
#     """Create and return a sample bird"""
#     defaults = {
#         'hebrew_name': "בולבול מצוי",
#         'image_url': 'https://storage.googleapis.com/bird_images_bird_quiz/Anserfabalis/images7.jpg'
#     }
#
#     defaults.update(params)
#
#     bird = Bird.objects.create(**defaults)
#
#     return bird
#
#
# class BirdApiTests(TestCase):
#     """Test API requests"""
#
#     def setUp(self):
#         self.client = APIClient()
#
#     def test_retrieve_birds(self):
#         """Test retrieve birds"""
#
#         create_bird()
#         create_bird()
#
#         res = self.client.get(BIRD_URL)
#
#         birds = Bird.objects.all().order_by('-id')
#         serializer = BirdSerializer(birds, many=True)
#         self.assertEqual(res.status_code, status.HTTP_200_OK)
#         self.assertEqual(res.data, serializer.data)
