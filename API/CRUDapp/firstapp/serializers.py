from rest_framework import serializers
from firstapp.models import ImgurModel,User

class ImgurModelSerializer(serializers.ModelSerializer):
    class Meta:
        model=ImgurModel 
        fields=('ImageId','ImageName','ImageDescription','ImageURL','ImageFav')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('UserId','Username','UserUsername','UserPassword','ClientID','ClientSecret','RefreshToken','DateOfJoining')