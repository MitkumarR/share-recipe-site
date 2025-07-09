from rest_framework import viewsets, permissions, generics, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Recipe, Ingredient, Region, Session, Category, RecipeStep
from .serializers import (
    RecipeSerializer, IngredientSerializer,
    RegionSerializer, SessionSerializer, CategorySerializer, RecipeListSerializer, RecipeDetailSerializer,
    RecipeStepSerializer
)

from django_filters.rest_framework import DjangoFilterBackend

class RecipeListView(generics.ListAPIView):
    queryset = Recipe.objects.filter(is_published=True).order_by("-created_at")
    serializer_class = RecipeListSerializer

class RecipeDetailView(generics.RetrieveAPIView):
    queryset = Recipe.objects.filter(is_published=True)
    serializer_class = RecipeDetailSerializer

class FilterOptionsView(APIView):
    def get(self, request):
        data = {
            "types": ["veg", "non_veg", "jain"],
            "categories": list(Category.objects.values_list("name", flat=True)),
            "regions": list(Region.objects.values_list("name", flat=True)),
            "sessions": list(Session.objects.values_list("name", flat=True)),
        }
        return Response(data, status=status.HTTP_200_OK)


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all().order_by('-created_at')
    serializer_class = RecipeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['type', 'regions', 'sessions', 'categories', 'ingredients']
    search_fields = ['title', 'description']
    ordering_fields = ['created_at', 'likes']

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class IngredientViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class RegionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer


class SessionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class StepsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = RecipeStep.objects.all()
    serializer_class = RecipeStepSerializer

