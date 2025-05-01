from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Bubble
from .serializers import BubbleSerializer
from datetime import date

@api_view(['GET'])
def bubble_day(request, year, month, day):
    try:
        target_date = date(year, month, day)
        bubbles = Bubble.objects.filter(date=target_date).order_by('time')
        serializer = BubbleSerializer(bubbles, many=True)
        return Response(serializer.data)
    except ValueError:
        return Response({'error': 'Invalid date'}, status=400)
