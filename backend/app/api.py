from django.contrib.auth import authenticate
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import UserSerializers, ProductSerializers, TextUiSerializers
from django.contrib.auth.models import User
from .models import Product, TextUi
from django.shortcuts import get_object_or_404

class TextUiViewSet(viewsets.ViewSet):
    
    permission_classes = [AllowAny]
    
    @action(detail=False, methods=['get'], url_path='lang')
    def get_text(self, request):
        
        queryset = TextUi.objects.all()
        serializer = TextUiSerializers(queryset, many=True)
        return Response(serializer.data)
        
        
class ProductViewSet(viewsets.ViewSet):
    
    @action(detail=False, methods=['get'], url_path='all')
    def get_all(self, request):
        
        queryset = Product.objects.all()
        serializer = ProductSerializers(queryset, many=True, context={'request': request})
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'], url_path='search')
    def get_filter_name(self, request):
        
        name_value = request.query_params.get('name_product')
        
        queryset = Product.objects.filter(name_product__icontains = name_value)
        serializer = ProductSerializers(queryset, many=True, context={'request': request})
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'], url_path='search')
    def get_filter_code(self, request):
        
        code_value = request.query_params.get('code_product')
        
        queryset = Product.objects.filter(code_product__icontains = code_value)
        serializer = ProductSerializers(queryset, many=True, context={'request': request})
        return Response(serializer.data)
    
    @action(detail=False, methods=['post'], url_path='save')
    def create_product(self, request):
            
        serializer = ProductSerializers(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'save':'save data correct!'})
        else:
            return Response(serializer.errors)
        
        
    #url product/(id)/delete/
    @action(detail=True, methods=['delete'], url_path='delete')
    def delete_product(self, pk):
        
        product = get_object_or_404(Product, id=pk)
        product.delete()
        
        return Response({'confirm':'delete data correct!'}, status=status.HTTP_204_NO_CONTENT)
    
    #url product/(id)/modify/
    @action(detail=True, methods=['patch'], url_path='modify')
    def modify_product(self, request, pk):
        
        product = get_object_or_404(Product, id=pk)
        serializer = ProductSerializers(product, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            
        return Response({'confirm':'Modify data correct!'})
            
        
        
    
    
        
                
    
    