# Generated by Django 4.0.3 on 2023-06-06 00:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0002_alter_appointment_is_deleted'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='is_deleted',
        ),
    ]
