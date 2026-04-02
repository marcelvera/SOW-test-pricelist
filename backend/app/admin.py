from django.contrib import admin
from .models import Product,TextUi, UserTextUI, OpUser
# Register your models here.

admin.site.register(Product)
admin.site.register(TextUi)
admin.site.register(UserTextUI)
admin.site.register(OpUser)