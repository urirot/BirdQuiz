"""
URL mappings for the bird app
"""
from django.urls import (
    path,
    include
)

from rest_framework.routers import DefaultRouter

from bird import views

router = DefaultRouter()
router.register('birds', views.BirdViewSet)

app_name = 'bird'

urlpatterns = [
    path('', include(router.urls))
]
