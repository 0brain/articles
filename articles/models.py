
from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=150, verbose_name='Назва статті')
    content = models.TextField(blank=True, verbose_name='Контент')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Час публікації')
    author_name = models.CharField(max_length=150, verbose_name='Ім’я автора')
    vote = models.IntegerField(auto_created=True, default=0, verbose_name='Кількість голосів')

    def __str__(self):
        return f"id {self.id}: {self.title}"

    class Meta:
        ordering = ['-created_at', 'title']


class Comment(models.Model):
    article = models.ForeignKey(Article, related_name='comments', on_delete=models.CASCADE)
    content = models.TextField(blank=True, verbose_name='Контент')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Час публікації')
    author_name = models.CharField(max_length=150, verbose_name='Ім’я автора')

    def __str__(self):
        return f"id {self.id}: {self.author_name}"