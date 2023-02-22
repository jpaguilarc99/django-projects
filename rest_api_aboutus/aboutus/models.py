from django.db import models

# Create your models here.
class AboutUs(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()    
    left_image = models.CharField(max_length=200, default="left_image")
    right_image = models.CharField(max_length=200, default="right_image")
    center_image = models.CharField(max_length=200, default="center_image")
    created_at = models.DateTimeField(auto_now_add=True, null=True)