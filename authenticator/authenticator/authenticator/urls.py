from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include


from mini.views import register, home


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home.as_view(), name="home"),
    path('register/', register.as_view(), name="register"),
    path('', include("django.contrib.auth.urls")),
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
