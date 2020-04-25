from django.db import models


class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.CharField(max_length=150)

    def to_json(self):
        return {
            'id': self.id,
            'username': self.username,
            'password': self.password,
            'email': self.email
        }


def upload_path(instance, filename):
    return '/'.join(['images'], str(instance.name), filename)


class Category(models.Model):
    name = models.CharField(max_length=300)
    imageUrl = models.CharField(max_length=200, default="")

    # image = models.ImageField(blank=True, null=True, upload_to=upload_path)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField(default=1000)
    description = models.TextField(default='')
    category = models.ForeignKey(Category, on_delete=models.CASCADE,
                                 related_name='products')

    class Meta:
        unique_together = ['name', 'price', 'description']
        ordering = ['id']

    def __str__(self):
        return '%d: %s' % (self.name, self.price, self.description)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description
        }


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    price = models.FloatField(default='0.0')
    orderDate = models.DateField()
    discount = models.FloatField()
    address = models.TextField()
