from .models import AboutUs
from rest_framework import viewsets, permissions
from .serializers import AboutUsSerializer

class AboutUsViewSet(viewsets.ModelViewSet):
    queryset = AboutUs.objects.all()
    permission_classes = [permissions.AllowAny] #Totally allowed by now - to change later
    serializer_class = AboutUsSerializer