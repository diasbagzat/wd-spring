# Generated by Django 3.0.5 on 2020-04-25 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20200425_1528'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='imageUrl',
            field=models.CharField(default='', max_length=100),
        ),
    ]