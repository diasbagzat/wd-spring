from rest_framework import serializers

from .models import Category, Product


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data.get('name'))
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


class ProductModelSerializer(serializers.ModelSerializer):
    category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'price', 'category_id')


class CategoryProductsSerializer(serializers.ModelSerializer):
    products = ProductModelSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'products')