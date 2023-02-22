from rest_framework import routers
from .api import AboutUsViewSet

router = routers.DefaultRouter()

router.register('api/about', AboutUsViewSet, 'about')

urlpatterns = router.urls