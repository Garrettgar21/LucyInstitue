from django.conf.urls import url
from firstapp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^imagurmodel$',views.firstappApi),
    url(r'^imagurmodel/([0-9]+)$',views.firstappApi)
]