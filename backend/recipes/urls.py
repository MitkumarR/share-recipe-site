from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .models import RecipeStep
from .views import ( RecipeViewSet, IngredientViewSet, RegionViewSet, SessionViewSet, CategoryViewSet, RecipeListView,
    RecipeDetailView, StepsViewSet )

router = DefaultRouter()
router.register(r'recipe', RecipeViewSet)
router.register(r'ingredients', IngredientViewSet)
router.register(r'regions', RegionViewSet)
router.register(r'sessions', SessionViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'steps', StepsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('recipes/', RecipeListView.as_view(), name='recipe-list'),
    path('recipes/<int:pk>/', RecipeDetailView.as_view(), name='recipe-detail'),
]
