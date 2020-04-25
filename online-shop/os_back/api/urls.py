from django.urls import path

from api.views import category_list, CategoryProducts, ProductDetail

urlpatterns = [
    path('main/', category_list),
    path('categories/', category_list),
    path('categoryList/<int:category_id>/', CategoryProducts.as_view()),
    path('products/<int:product_id>/', ProductDetail.as_view())
]