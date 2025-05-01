from django.db import models

class Guide(models.Model):
    content_text = models.TextField(blank=True, null=True)
    content_image = models.ImageField(upload_to='chat_images/', blank=True, null=True)