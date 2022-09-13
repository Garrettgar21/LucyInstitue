from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from firstapp.models import ImgurModel,User
from firstapp.serializers import ImgurModelSerializer,UserSerializer

from django.core.files.storage import default_storage

# Create your views here.

@csrf_exempt
def firstappApi(request,id=0):
    if request.method=='GET':
        imgurmodel = ImgurModel.objects.all()
        imagurmodel_serializer=ImgurModelSerializer(imgurmodel,many=True)
        return JsonResponse(imagurmodel_serializer.data,safe=False)
    elif request.method=='POST':
        imagurmodel_data=JSONParser().parse(request)
        imagurmodel_serializer=ImgurModelSerializer(data=department_data)
        if imagurmodel_serializer.is_valid():
            imagurmodel_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        imagurmodel_data=JSONParser().parse(request)
        imagurmodel=imagurmodel.objects.get(ImageId=imagurmodel_data['ImageId'])
        imagurmodel_serializer=ImgurModelSerializer(imagurmodel,data=imagurmodel_data)
        if imagurmodel_serializer.is_valid():
            imagurmodel_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        department=ImgurModel.objects.get(DepartmentId=id)
        department.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def UserApi(request,id=0):
    if request.method=='GET':
        user = User.objects.all()
        user_serializer=UserSerializer(user,many=True)
        return JsonResponse(user_serializer.data,safe=False)
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
        user=User.objects.get(user_data=id)
        user.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def SaveFile(request):
    file=request.FILES['file']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)