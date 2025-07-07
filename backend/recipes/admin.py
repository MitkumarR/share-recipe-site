from django.contrib import admin
from .models import Recipe, Ingredient, Region, Session, Category, RecipeStep

class RecipeStepInline(admin.TabularInline):
    model = RecipeStep
    extra = 1

@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'type', 'created_at', 'is_published')
    list_filter = ('type', 'is_published', 'regions', 'sessions', 'categories')
    search_fields = ('title', 'description', 'author__username')
    inlines = [RecipeStepInline]
    filter_horizontal = ('ingredients', 'regions', 'sessions', 'categories', 'likes')


admin.site.register(Ingredient)
admin.site.register(Region)
admin.site.register(Session)
admin.site.register(Category)
admin.site.register(RecipeStep)