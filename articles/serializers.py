from rest_framework.serializers import ModelSerializer

from articles.models import Article, Comment



class ArticleSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', 'content']


class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'author_name', 'content']