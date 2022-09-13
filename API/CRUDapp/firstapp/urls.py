from django.conf.urls import url
from firstapp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^imgur$', views.imgurmodelApi),
    url(r'^imgur/([0-9]+)$', views.imgurmodelApi),

    url(r'^user$', views.userApi),
    url(r'^user/([0-9]+)$', views.userApi),

    url(r'^imgur/savefile',views.SaveFile)
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)