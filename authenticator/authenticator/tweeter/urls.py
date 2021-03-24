from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from tweeter import views
from tweeter.views import tweet


urlpatterns = [
    path("tweets", views.tweet, name="tweet" )

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
