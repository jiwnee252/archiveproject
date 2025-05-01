from django.shortcuts import render, redirect

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Guide
from .serializers import GuideSerializer

@api_view(['GET'])
def guide_index(request):
    guides = Guide.objects.all()
    serializer = GuideSerializer(guides, many=True)
    return Response(serializer.data)