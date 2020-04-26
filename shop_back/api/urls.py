from django.contrib import admin
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from api.view_fbv import product_list, product_detail
from api.view_cbv import CategoryListAPIView, CategoryDetailAPIView, CategoryProductAPIView

urlpatterns = [
    path('login/', obtain_jwt_token),

    path('categories/', CategoryListAPIView.as_view()),
    path('categoryList/<int:category_id>/', CategoryDetailAPIView.as_view()),
    # ??? path('categoryList/<int:category_id>/products/', CategoryProductAPIView.as_view()),
    path('products/<int:id>', product_detail),
]