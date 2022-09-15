# LucyInstitue
building a simple CRUD app using VueJS and the Imgur API.

This uses a Django back-end connected to my Azure DB in the Settings.py file with VueJs as the frontend.

# Required Packages
Django==3.2.15

django-cors-headers==3.13.0

djangorestframework==3.13.1

psycopg2==2.9.3

requests==2.22.0

virtualenv==20.16.5

Running 'pip freeze' will reveal all the used packages, however, since this was from my home computer there were multiples of packages that were not used. The ones listed above were the main ones need in the python backend.

# To Run The Code (Run the main branch)

You need the packages above. They will also be in the requirements.txt file. You need to run 'python manage.py migrate'. I already created the migration files and now we just need to run the migrations. Then you need to run 'python manage.py runserver'. After that, you can use the HTML file, located in API/UI, to navigate the VueJS files I created. 

You may need to run 'set PYTHONPATH=%PYTHONPATH%;C:\path\to\your\project\' to get your interpreters right, but if you are running from venv, you should be good.

# The other branch

There is another branch and that is without any API connections. It is just the barebones of the website.

# Personal Notes (to-dos)
  
There is SOOO much more I want to accomplish, but I kept getting blocked by my 3 different installation of python. This exercise truly revealed how important a virtual environment is. 

There is also many functionality things that I wish I would've accomplished in a more timely manner. I got the AUTHENTICATION, and GETs to work for Imgur, however I did not fully complete the PUTs and POSTs as requested by the assignment. I would love to discuss what all I learned and what I would've done differently from the beginning, like using a virtual environment from the start. There are also a bunch of basic things I did not do like lock a file with the Client ID, Client Secrets. In the interest of time I hardcoded the values in.
