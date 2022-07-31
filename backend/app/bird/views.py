"""
Views for the bird APIs
"""
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from core.models import Bird
from bird import serializers


class BirdViewSet(viewsets.ModelViewSet):
    """View for manage bird APIs"""
    serializers_class = serializers.BirdSerializer
    queryset = Bird.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Retrieve birds"""
        return self.queryset.order_by('-id')
