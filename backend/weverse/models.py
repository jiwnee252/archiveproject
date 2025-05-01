from django.db import models

# Create your models here.
class Weverse(models.Model):
    name = models.CharField(max_length=100)
    nickname = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    content_text = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.nickname} ({self.name}) - {self.date} {self.time}"


class WeverseImage(models.Model):
    weverse = models.ForeignKey(Weverse, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='weverse_images/')

    def __str__(self):
        return f"Image for {self.weverse}"
    

class Other(models.Model):
    weverse = models.ForeignKey(Weverse, related_name='comments', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    nickname = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    other_content_text = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Reply by {self.name} on {self.date} {self.time}"


class OtherImage(models.Model):
    other = models.ForeignKey(Other, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='other_images/')

    def __str__(self):
        return f"Image for comment {self.other}"
