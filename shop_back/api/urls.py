from django.contrib import admin
from django.urls import path
from api.view_fbv import product_list, product_detail
from api.view_cbv import CategoryListAPIView, CategoryDetailAPIView

urlpatterns = [
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    path('products/', product_list),
    path('products/<int:id>', product_detail),
]