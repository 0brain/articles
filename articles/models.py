from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=150, verbose_name='Назва статті')
    content = models.TextField(blank=True, verbose_name='Контент')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Час публікації')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Час оновлення')
    author_name = models.CharField(max_length=150, verbose_name='Ім’я автора')

    def __str__(self):
        return f"id {self.id}: {self.title}"


class Comment(models.Model):
    author_name = models.CharField(max_length=150, verbose_name='Ім’я автора')
    content = models.TextField(blank=True, verbose_name='Контент')

    def __str__(self):
        return f"id {self.id}: {self.author_name}"