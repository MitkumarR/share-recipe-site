# recipe/models.py

from django.db import models
from django.conf import settings

class Recipe(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="recipes")
    title = models.CharField(max_length=200)
    description = models.TextField()
    instructions = models.TextField()
    image = models.ImageField(upload_to='recipe_images/', blank=True, null=True)
    likes = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='liked_recipes', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Optional extras
    is_published = models.BooleanField(default=True)
    servings = models.IntegerField(default=1)
    prep_time = models.IntegerField(help_text="Prep time in minutes", default=0)
    cook_time = models.IntegerField(help_text="Cook time in minutes", default=0)

    def __str__(self):
        return self.title

    def total_likes(self):
        return self.likes.count()
