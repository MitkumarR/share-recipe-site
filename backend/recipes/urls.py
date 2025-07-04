# recipe/urls.py

from django.urls import path
from .views import RecipeListCreateView, RecipeDetailView

urlpatterns = [
    path('', RecipeListCreateView.as_view(), name='recipe-list'),
    path('<int:pk>/', RecipeDetailView.as_view(), name='recipe-detail'),
]
