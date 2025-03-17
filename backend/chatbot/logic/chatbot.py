#django
#external imports
import google.generativeai as genai
from decouple import config
#locals import
from chatbot.models.inventario import Inventario
from chatbot.models.chatbot import Conversation

#vars
genai.configure(api_key=config('API_KEY'))

class ChatbotLogic():
    def chatbot(self,data):
        user_question = data['message']
        user = data['user']
        #consultamos el inventario en nuestra base de datos, o consumimos un api del cliente o leemos archivos json, excels, u otra consulta.
        inventario = Inventario.objects.values().all()
        inventario = list(inventario)
        print (inventario)
        history = []
        #creamos un propmt inicial para que tome el rol de chatbot
        prompt = f"""
            Eres un chatbot especializado en comercio electrónico, representando a la empresa 'Buy n Large'. 
            Tu función es ayudar a los usuarios a obtener información precisa y útil sobre el inventario, marcas, productos y cualquier otra consulta relacionada con la empresa. 
            Para ello, utilizarás la siguiente lista que contiene datos detallados sobre el inventario:
            {inventario}
            El usuario ha hecho la siguiente pregunta: '{user_question}'. 
            Por favor, responde de manera clara y concisa basándote en la información la lista.
            """
        #consultamos el historial para no perder la linea de nuestra consulta
        query_history = Conversation.objects.values().filter(user_id=user)
        if query_history:
            for registro in query_history:
                history.append({'role': registro['role'], 'parts': [registro['content']]})
            #si existe un historial pasamos como prompt la ultima pregunta del usuario
            prompt = user_question
        #guardamos el historial de la converación
        save = Conversation.objects.create(
            user_id=user,
            role='user',
            content=prompt
        )
        '''consulta de la api de gemini'''
        model = genai.GenerativeModel('gemini-2.0-flash-lite')
        conversation = model.start_chat(history=history)
        response = conversation.send_message(prompt)
        '''consulta de la api de gemini'''
        #guardamos el historial de la converación
        save = Conversation.objects.create(
            user_id=user,
            role='model',
            content=response.text
        )
        return {'message': response.text} 