from rest_framework import routers
from .api import ProductViewSet, TextUiViewSet

router = routers.DefaultRouter()

#url products/all/
router.register(r'products', ProductViewSet, 'product')

#url api/lang/
router.register(r'api', TextUiViewSet, 'lang')

urlpatterns = router.urls