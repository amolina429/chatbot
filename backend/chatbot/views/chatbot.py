#Django
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
#External imports
import json
#locals  import
from ..logic.chatbot import ChatbotLogic

class ChatbotView(APIView,ChatbotLogic):
    #validamos que el usuario esté autenticado
    permission_classes = [IsAuthenticated]
    def post(self, request):
        return Response(self.get_contex_data(request), status=status.HTTP_200_OK)
    
    #utilizamos una función en views para organizar la información, el objetivo es separar la parte logica de la parte de validación de datos
    def get_contex_data(self,request):
        body = json.loads(self.request.body)
        data = {
            'user' : request.user.id,
            'message': body['message']
        }
        return self.chatbot(data)
        
