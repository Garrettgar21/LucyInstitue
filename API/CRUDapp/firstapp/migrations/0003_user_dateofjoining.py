# Generated by Django 3.2.15 on 2022-09-14 08:06

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('firstapp', '0002_user_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='DateOfJoining',
            field=models.DateField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
