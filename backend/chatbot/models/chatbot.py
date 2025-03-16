#Django
from django.db import models
from django.contrib.auth.models import User

class Conversation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.CharField("Es el rol utilizado por la ia para mantener la conversación",max_length=10)
    content = models.TextField("Contenido de la respuesta")
    timestamp = models.DateTimeField(auto_now_add=True)