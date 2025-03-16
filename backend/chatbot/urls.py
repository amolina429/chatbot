#django
from django.urls import path
#external imports
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
#local imports
from .views.chatbot import ChatbotView

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('chat/', ChatbotView.as_view(), name='chatbot'),
]
