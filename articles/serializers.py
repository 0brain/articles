from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from articles.models import Article, Comment


class ArticleSerializer(ModelSerializer):
    comments = serializers.StringRelatedField(many=True)

    class Meta:
        model = Article
        fields = ['id', 'title', 'url', 'created_at', 'vote', 'author_name', 'comments']


class CommentSerializer(ModelSerializer):

    class Meta:
        model = Comment
        fields = ['id', 'author_name', 'content']
