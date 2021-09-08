from django.contrib import admin
from django.contrib.admin import ModelAdmin

from articles.models import Article, Comment


@admin.register(Article)
class ArticleAdmin(ModelAdmin):
    list_display = ('id', 'title', 'created_at', 'author_name')


@admin.register(Comment)
class CommentAdmin(ModelAdmin):
    list_display = ('id', 'author_name')
    list_display_links = ('id',)