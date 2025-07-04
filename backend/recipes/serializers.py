
from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.username', read_only=True)
    total_likes = serializers.IntegerField(source='total_likes', read_only=True)

    class Meta:
        model = Recipe
        fields = ['id', 'title', 'description', 'instructions', 'image', 'author_name', 'total_likes', 'servings', 'prep_time', 'cook_time', 'created_at']
