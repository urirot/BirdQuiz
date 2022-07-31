"""
Serializers for bird APIs
"""
from rest_framework import serializers

from core.models import Bird


class BirdSerializer(serializers.ModelSerializer):
    """Serializers for bird"""

    class Meta:
        model = Bird
        fields = ['id', 'hebrew_name', 'image_url']
        read_only_fields = ['id']
