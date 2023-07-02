from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Form(models.Model):
    firstname = models.CharField(max_length=100, null=False, blank=False)
    lastname = models.CharField(max_length=100, null=False, blank=False)
    phone = PhoneNumberField(null=False, blank=False)
    email = models.EmailField()
    linkResume = models.URLField(null=False, blank=False)
    linkedin_url = models.URLField(max_length=500, null=True, blank=True)
    OtherWebsite = models.CharField(max_length=1000, null=True, blank=True)
    additionalComments = models.CharField(max_length=1000, null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

# class Resume(models.Models):
#     form = models.ForeignKey(Form, on_delete=models.CASCADE, default='')
#     resume_upload = models.FileField(upload_to="/")