# Generated by Django 5.1.7 on 2025-03-15 12:46

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Inventario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_product', models.CharField(max_length=100, verbose_name='nombre del producto')),
                ('decription_product', models.CharField(max_length=300, verbose_name='Descripción del producto')),
                ('price', models.BigIntegerField(verbose_name='Precio del producto')),
                ('cant', models.IntegerField(default=0, verbose_name='cantidad en stok')),
                ('category', models.CharField(max_length=50, verbose_name='Categoria')),
                ('mark', models.CharField(max_length=50, verbose_name='Marca del producto')),
                ('sku', models.CharField(max_length=50, verbose_name='Codigo del producto')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Conversation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('role', models.CharField(max_length=10, verbose_name='Es el rol utilizado por la ia para mantener la conversación')),
                ('content', models.TextField(verbose_name='Contenido de la respuesta')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
