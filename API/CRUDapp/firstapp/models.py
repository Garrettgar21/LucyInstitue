from pyexpat import model
from django.db import models
import requests
import json
import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "CRUDapp.settings")
django.setup()

# Create your models here.

class ImgurModel(models.Model):
    ImageId = models.AutoField(primary_key=True)
    ImageName = models.CharField(max_length=100, default='Untitled')
    ImageDescription = models.CharField(max_length=100, null=True)
    ImageURL = models.CharField(max_length=500)
    ImageFav = models.BooleanField(default=False)
    #ImageField=models.ImageField()

class User(models.Model):
    UserId = models.AutoField(primary_key=True)
    Username = models.CharField(max_length=100)
    UserUsername = models.CharField(max_length=100)
    UserPassword = models.CharField(max_length=100)
    ClientID = models.CharField(max_length=100)
    ClientSecret = models.CharField(max_length=100)
    RefreshToken = models.CharField(max_length=100)
    DateOfJoining = models.DateField(null=True)

def imgur_api_images():
    url = "https://api.imgur.com/3/account/me/images"

    payload={}
    files={}
    headers = {
    'Authorization': 'Bearer 1088b5bc7f804397707c3e79aab4e42f317c6b79'
    }

    response = requests.request("GET", url, headers=headers, data=payload, files=files)

    print(response.text)


    data = json.loads(response.text)
    for image in data['data']:
        print(image['id'])
        print(image['link'])
        image = ImgurModel.objects.create(
                                ImageName=image['id'],
                                ImageDescription=image['Description'],
                                ImageURL=image['link'],
                                ImageFav=image['favorite'])
        image.save()

