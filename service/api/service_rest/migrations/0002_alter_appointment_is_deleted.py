# Generated by Django 4.0.3 on 2023-06-06 00:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='is_deleted',
            field=models.BooleanField(default=False),
        ),
    ]
