from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from .models import Product, OpUser, UserTextUI, TextUi

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'password']
        read_only_fields = ['url', 'id', ]
        extra_kwargs = {
            'password':{'write_only': True}
        }
        
class OpUserSerializers(serializers.ModelSerializer):

    product_id = serializers.SlugRelatedField(source='product', read_only=True, slug_field='name_product')
    user_id = serializers.SlugRelatedField(source='user', read_only=True, slug_field='username')
    
    class Meta:
        model = OpUser
        fields = '__all__'
        read_only_fields = ['id', 'type_op_user', 'date_op_user']
        
class ProductSerializers(serializers.ModelSerializer):
    def validate_price_product(self, atrib):
        if atrib <= 0:
            raise serializers.ValidationError('El precio debe ser mayor a cero')
        return atrib
        
    def validate_price_unit_product(self, atrib):
        if atrib <= 0:
            raise serializers.ValidationError('El precio debe ser mayor a cero')
        return atrib
        
    code_product = serializers.CharField(validators = [UniqueValidator(queryset=Product.objects.all())])
    price_product = serializers.DecimalField(max_digits=14, decimal_places=2, coerce_to_string=False)
    price_unit_product = serializers.DecimalField(max_digits=14, decimal_places=2, coerce_to_string=False)
    
    class Meta:
        model = Product
        fields = '__all__'
        
class TextUiSerializers(serializers.ModelSerializer):
    class Meta:
        model = TextUi
        fields = '__all__'
        
class UserTextUiSerializers(serializers.ModelSerializer):
    class Meta:
        model = UserTextUI
        fields = '__all__'