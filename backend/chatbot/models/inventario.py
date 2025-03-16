from django.db import models

class Inventario(models.Model):
    name_product = models.CharField("nombre del producto", max_length=100, blank=False)
    decription_product = models.CharField("Descripción del producto", max_length=300, blank=False)
    price = models.DecimalField("Precio del producto", max_digits=12, decimal_places=2)
    cant = models.IntegerField("cantidad en stok", null=False, default=0)
    category = models.CharField("Categoria", max_length=50, blank=False)
    mark = models.CharField("Marca del producto", max_length=50, blank=False)
    sku = models.CharField("Codigo del producto", max_length=50, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
