# LucyInstitue
building a simple CRUD app using VueJS and the Imgur API.

This uses a Django back-end connected to my Azure DB in the Settings.py file.

# Required Packages
Django==3.2.15

django-cors-headers==3.13.0

djangorestframework==3.13.1

psycopg2==2.9.3

requests==2.22.0

virtualenv==20.16.5

Running <pip freeze> will reveal all the used packages, however, since this was from my home computer there are number packages that were not used. The ones listed above were the main ones need in the python backend.

# Personal Notes
  
There is SOOO much more I want to accomplish, but I kept getting blocked by my 3 different installation of python. This exercise truly revealed how important a virtual environment is. 

There is also many functionality things that I wish I would've accomplished in a more timely manner. I got the AUTHENTICATION, and GETs to work for Imgur, however I did not fully complete the PUTs and POSTs as requested by the assignment. I would love to discuss what all I learned and what I would've done differently from the beginning, like using a virtual environment from the start. There are also a bunch of basic things I did not do like lock a file with the Client ID, Client Secrets. In the interest of time I hardcoded the values in.
