from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from profiler import views
from profiler.views import profile


urlpatterns = [
    path("profile", views.profile, name="profile" )

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
