from django.db import models

# Create your models here.
class Form(models.Model):
    firstname = models.CharField(max_length=100, null=False, blank=False, verbose_name="First Name")
    lastname = models.CharField(max_length=100, null=False, blank=False, verbose_name="Last Name")
    phone = models.CharField(max_length=13, null=False, blank=False, verbose_name="Phone")
    email = models.EmailField(verbose_name="Email")
    linkResume = models.URLField(null=False, blank=False, verbose_name="Link Resume")
    linkedin_url = models.URLField(max_length=500, null=True, blank=True, verbose_name="LinkedIn Resume")
    OtherWebsite = models.CharField(max_length=1000, null=True, blank=True, verbose_name="Other Website")
    additionalComments = models.CharField(max_length=1000, null=True, blank=True, verbose_name="Additional Comments")

    def __str__(self):
        return f"{self.firstname} {self.lastname}"

# class Resume(models.Models):
#     form = models.ForeignKey(Form, on_delete=models.CASCADE, default='')
#     resume_upload = models.FileField(upload_to="/")

#phone number field

# // To handle sensitive data https://www.geeksforgeeks.org/protecting-sensitive-information-while-deploying-django-project/