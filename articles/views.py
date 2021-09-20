from django.http import JsonResponse
from django.shortcuts import redirect
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from articles.models import Article, Comment
from articles.serializers import ArticleSerializer, CommentSerializer


class VoteView(APIView):
    def patch(self, request, pk):
        article_object = Article.objects.get(pk=pk)
        article_object.vote = article_object.vote+1
        article_object.save()
        return redirect('/articles/' + str(article_object.id) + '/')


class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        return Comment.objects.filter(article=self.kwargs['article_pk'])

