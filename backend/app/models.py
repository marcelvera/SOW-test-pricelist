from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    email = models.EmailField(unique=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

class Product(models.Model):
    name_product = models.CharField(max_length=50)
    desc_product = models.TextField()
    code_product = models.CharField(max_length=8, unique=True)
    price_product = models.DecimalField(max_digits=14, decimal_places=2, null=False)
    price_unit_product = models.DecimalField(max_digits=14, decimal_places=2,  null=False)
    unit_product = models.CharField(max_length=32,  null=False)
    stock_product = models.CharField(max_length=12,  null=False)
    
    def __str__(self):
        return self.name_product
    
class OpUser(models.Model):
    
    type_op = [
        ("ADD", "Add"),
        ("DELETE", "Delete"),
        ("MODIFY", "Modify"),
    ]
    
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    type_op_user = models.CharField(max_length=12, choices=type_op)
    date_op_user = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.type_op_user
       
class TextUi(models.Model):
    key_text_ui = models.CharField(max_length=25, unique=True)
    content_en = models.TextField()
    content_sw = models.TextField()
    
    def __str__(self):
        return self.key_text_ui
    
class UserTextUI(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text_ui = models.ForeignKey(TextUi, on_delete=models.CASCADE)
    