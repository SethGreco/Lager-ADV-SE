import datetime
from django.db import models
from django.utils import timezone

# create the model of the fields the users will need to be editing for there project
#Who, What, How is it, When

class ProjectStatus(models.Model):
    who = models.CharField(max_length=20, default='')
    when = models.DateTimeField(auto_now_add=True)
    what = models.CharField(max_length=200, default='')
    how = models.CharField(max_length=200, default='')

    def __str__(self):
        return self.who