from rest_framework import serializers
from .models import AboutUs

class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = ('id', 'title', 'description', 'left_image',
                'right_image', 'center_image', 'created_at')
        read_only_fields = ('id', 'created_at')