from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, generics, viewsets

from api.models import Category
from api.serializers import CategorySerializer, CategoryProductSerializer, ProductSerializer


class CategoryListAPIView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CategoryDetailAPIView(APIView):
    def get_object(self, category_id):
        try:
            return Category.objects.get(id=category_id)
        except Category.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, category_id):
        category = self.get_object(category_id)
        serializer = CategoryProductSerializer(category)
        return Response(serializer.data)

    def put(self, request, category_id):
        category = self.get_object(category_id)
        serializer = CategoryProductSerializer(instance=category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    def delete(self, request, category_id):
        category = self.get_object(category_id)
        category.delete()

        return Response({'deleted': True})


# class CategoryProductList(generics.ListCreateAPIView):
#     serializer_class = ProductSerializer
#
#     def get_queryset(self):
#         try:
#             category = Category.objects.get(id=self.kwargs.get('pk'))
#         except Category.DoesNotExist as e:
#             return Response({'Error': str(e)})
#         queryset = category.products.all()
#         return queryset