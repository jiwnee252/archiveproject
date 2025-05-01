from rest_framework import serializers
from .models import Bubble

class BubbleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bubble
        fields = '__all__'
