from django.contrib import admin
from django.contrib.admin import ModelAdmin

from articles.models import Article, Comment


@admin.register(Article)
class ArticleAdmin(ModelAdmin):
    pass


@admin.register(Comment)
class CommentAdmin(ModelAdmin):
    pass