from rest_framework import routers
from .api import ProductViewSet

router = routers.DefaultRouter()

#url products/all/
router.register(r'products', ProductViewSet, 'product')

urlpatterns = router.urls