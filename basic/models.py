from django.db import models


class Task(models.Model):
	name = models.CharField(max_length=100 , null=True , blank=True)
	status = models.BooleanField(default=True)
	date = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.name
