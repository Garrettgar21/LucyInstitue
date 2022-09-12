from operator import mod
from django.db import models

# Create your models here.

class ImgurModel(models.Model):
    ImageId = models.AutoField(primary_key=True)
    ImageName= models.CharField(max_length=50)
    ImageDescription = models.CharField(max_length=50)

class User(models.Model):
    UserId = models.AutoField
    UserUsername = models.CharField(max_length=50)
    UserPassword = models.CharField(max_length=50)