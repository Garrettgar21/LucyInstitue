import requests
import json

from firstapp.models import ImgurModel

'''
This is to get the access token
url = "https://api.imgur.com/oauth2/token"

payload={'refresh_token': '8943e89e7c203b0f260ea9aba8ced7c24962ab75',
'client_id': '8483aace5b29319',
'client_secret': '4ec186fc50ddc75b69dd5b5bacefc9af92733194',
'grant_type': 'refresh_token'}
files=[
]
headers = {}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
'''

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
    image = ImgurModel.objects.create(
        ImageName = image['name'], 
        ImageDescription=image['description'], 
        ImageURL=image['link'], 
        ImageFav=image['favorite'])
    image.save()
