"""
Views for the bird APIs
"""
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from core.models import Bird
from bird import serializers


class BirdViewSet(viewsets.ModelViewSet):
    """View for manage bird APIs"""
    serializer_class = serializers.BirdSerializer
    queryset = Bird.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Retrieve birds for authenticated users"""
        return self.queryset.order_by('-id')
