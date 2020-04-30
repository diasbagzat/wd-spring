from django.contrib import admin
from django.urls import path
from api.view_fbv import product_list, product_detail, products_by_category
from api.view_cbv import CategoryListAPIView, CategoryDetailAPIView
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('categories/', CategoryListAPIView.as_view()),
   # path('categories/<int:category_id>/products', CategoryDetailAPIView.as_view()),
    path('login/', obtain_jwt_token),
    path('products/', product_list),
    path('products/<int:id>', product_detail),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products', products_by_category),
]