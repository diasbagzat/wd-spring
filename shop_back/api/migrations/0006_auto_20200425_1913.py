# Generated by Django 3.0.5 on 2020-04-25 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_category_imageurl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='imageUrl',
            field=models.CharField(default='', max_length=200),
        ),
    ]