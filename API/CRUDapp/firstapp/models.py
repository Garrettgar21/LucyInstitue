from django.db import models

# Create your models here.

class ImgurModel(models.Model):
    ImageId = models.AutoField(primary_key=True)
    ImageName = models.CharField(max_length=100)
    ImageDescription = models.CharField(max_length=100)
    ImageURL = models.CharField(max_length=500)
    ImageFav = models.BooleanField(default=False)

class User(models.Model):
    UserId = models.AutoField(primary_key=True)
    Username = models.CharField(max_length=100)
    UserUsername = models.CharField(max_length=100)
    UserPassword = models.CharField(max_length=100)
    DateOfJoining = models.DateField()