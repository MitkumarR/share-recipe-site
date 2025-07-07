from rest_framework import serializers
from .models import Recipe, Ingredient, Region, Session, Category, RecipeStep

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['id', 'name']


class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = ['id', 'name']


class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = ['id', 'name']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class RecipeStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeStep
        fields = ['step_no', 'instruction', 'timer', 'image']


class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True)
    regions = RegionSerializer(many=True)
    sessions = SessionSerializer(many=True)
    categories = CategorySerializer(many=True)
    steps = RecipeStepSerializer(many=True, read_only=True)
    total_likes = serializers.ReadOnlyField()

    class Meta:
        model = Recipe
        fields = [
            'id', 'author', 'title', 'description', 'type', 'image',
            'ingredients', 'regions', 'sessions', 'categories',
            'steps', 'servings', 'prep_time', 'cook_time',
            'created_at', 'updated_at', 'total_likes'
        ]

class RecipeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'image', 'type', 'prep_time', 'cook_time']

class RecipeDetailSerializer(serializers.ModelSerializer):
    ingredients = serializers.StringRelatedField(many=True)
    regions = serializers.StringRelatedField(many=True)
    sessions = serializers.StringRelatedField(many=True)
    categories = serializers.StringRelatedField(many=True)
    steps = serializers.SerializerMethodField()

    class Meta:
        model = Recipe
        fields = ['id', 'title', 'description', 'image', 'type', 'ingredients', 'regions', 'sessions', 'categories', 'servings', 'prep_time', 'cook_time', 'steps', 'created_at', 'updated_at']

    def get_steps(self, obj):
        return [{"step_no": step.step_no, "instruction": step.instruction, "timer": step.timer} for step in obj.steps.all()]
