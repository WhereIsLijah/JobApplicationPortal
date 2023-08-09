from django.contrib import admin
from .models import Form

# Register your models here.

class FormAdmin(admin.ModelAdmin):
    model = Form
    ordering = ['firstname']

admin.site.register(Form, FormAdmin)