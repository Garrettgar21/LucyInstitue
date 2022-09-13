from django.conf.urls import url
from firstapp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^imgurmodel$', views.imgurmodelApi),
    url(r'^imgurmodel/([0-9]+)$', views.imgurmodelApi),

    url(r'^user$', views.userApi),
    url(r'^user/([0-9]+)$', views.userApi)
]