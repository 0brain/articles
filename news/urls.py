"""news URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter

from articles.views import ArticleViewSet, CommentViewSet, index
from rest_framework_nested import routers

router = SimpleRouter()
router.register('articles', ArticleViewSet)

articles_router = routers.NestedSimpleRouter(router, r'articles', lookup='article')
articles_router.register(r'comments', CommentViewSet, basename='article-comments')


urlpatterns = [
    path('', index),
    path('admin/', admin.site.urls),
    path(r'', include(router.urls)),
    path(r'', include(articles_router.urls)),
]

urlpatterns += router.urls
