from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from mini import views

from mini.views import register, home, contact


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home.as_view(), name="home"),
    path('contact', views.contact, name="contact"),
  
    path('register/', register.as_view(), name="register"),
    path('', include("django.contrib.auth.urls")),
    path('', include("tweeter.urls")),
    path('', include("profiler.urls")),
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
