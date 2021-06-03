from rest_framework import viewsets
from .serials import TaskSerial
from  .models import *

class index(viewsets.ModelViewSet):
	serializer_class = TaskSerial
	queryset = Task.objects.all()