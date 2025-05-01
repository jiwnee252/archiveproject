from django.db import models

class Bubble(models.Model):
    name = models.CharField(max_length=100, null=False)
    date = models.DateField(null=False)
    time = models.TimeField(null=False)
    profile_image = models.ImageField(upload_to='bubble_profile_images/', blank=True, null=True)
    content_text = models.TextField(blank=True, null=True)
    content_image = models.ImageField(upload_to='chat_images/', blank=True, null=True)

    def __str__(self):
        return f'{self.date} {self.time} - {self.name}'
