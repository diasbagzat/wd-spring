import json

from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.views import APIView

from api.models import Category, Product
from api.serializers import CategorySerializer, ProductModelSerializer, CategoryProductsSerializer


@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        request_body = json.loads(request.body)
        serializer = CategorySerializer(data=request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})


@api_view(['GET', 'POST'])
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'PUT':
        request_body = json.loads(request.body)
        serializer = CategorySerializer(instance=category, data=request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})


class ProductsList(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductModelSerializer(products, many=True)
        return JsonResponse(serializer.data)

    def post(self, request):
        serializer = ProductModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})


class ProductDetail(APIView):
    def get_product(self, product_id):
        try:
            return Product.objects.get(id=product_id)
        except Exception as e:
            return JsonResponse({'error': str(e)})

    def get(self, request, product_id):
        try:
            serializer = ProductModelSerializer(self.get_product(product_id))
            return JsonResponse(serializer.data)
        except Exception as e:
            return JsonResponse({'error': str(e)})

    def put(self, request, product_id):
        serializer = ProductModelSerializer(instance=self.get_product(product_id), data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})

    def delete(self, request, product_id):
        try:
            self.get_product(product_id).delete()
            return JsonResponse({'delete': True})
        except Exception as e:
            return JsonResponse({'error': str(e)})


class CategoryProducts(APIView):
    def get(self, request, category_id):
        try:
            category = Category.objects.get(id=category_id)
            products = category.products.all()
            serializer = ProductModelSerializer(products, many=True)
            return JsonResponse(serializer.data)
        except Exception as e:
            return JsonResponse({'error': str(e)})


# def category_products(request, category_id):
#     try:
#         category = Category.objects.get(id=category_id)
#     except Category.DoesNotExist as e:
#         return JsonResponse({'error': str(e)})
#
#     products = category.products.all()
#     products_json = [p.to_json() for p in products]
#
#     return JsonResponse(products_json, safe=False)
