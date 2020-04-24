from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=300)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField()
    description = models.TextField(default='')
    category = models.ForeignKey(Category, on_delete=models.CASCADE,
                                 related_name='products')

    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'price': self.price,
            'description': self.description
        }
