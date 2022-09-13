from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from firstapp.models import ImgurModel,User
from firstapp.serializers import ImgurModelSerializer, UserSerializer

from django.core.files.storage import default_storage

# Create your views here.

@csrf_exempt
def imgurmodelApi(request,id=0):
    if request.method=='GET':
        imgurmodel = ImgurModel.objects.all()
        imgurmodel_serializer=ImgurModelSerializer(imgurmodel, many=True)
        return JsonResponse(imgurmodel_serializer.data, safe=False)
    elif request.method=='POST':
        imgurmodel_data=JSONParser().parse(request)
        imgurmodel_serializer=ImgurModelSerializer(data=imgurmodel_data)
        if imgurmodel_serializer.is_valid():
            imgurmodel_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        imgurmodel_data=JSONParser().parse(request)
        imgurmodel=imgurmodel.objects.get(ImageId=imgurmodel_data['ImageId'])
        imgurmodel_serializer=ImgurModelSerializer(imgurmodel, data=imgurmodel_data)
        if imgurmodel_serializer.is_valid():
            imgurmodel_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        imgurmodel=ImgurModel.objects.get(ImageId=id)
        imgurmodel.delete()
        return JsonResponse("Deleted Successfully", safe=False)

@csrf_exempt
def userApi(request,id=0):
    if request.method=='GET':
        user = User.objects.all()
        user_serializer=UserSerializer(user, many=True)
        return JsonResponse(user_serializer.data, safe=False)
    elif request.method=='POST':
        user_data=JSONParser().parse(request)
        user_serializer=UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        user_data=JSONParser().parse(request)
        user=User.objects.get(UserId=user_data['UserId'])
        user_serializer=UserSerializer(user,data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        user=User.objects.get(UserId=id)
        user.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def SaveFile(request):
    file=request.FILES['file']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)