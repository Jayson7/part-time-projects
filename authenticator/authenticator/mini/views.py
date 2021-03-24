from django.shortcuts import render
from django.views.generic import ListView, CreateView, DeleteView, UpdateView
# Create your views here.
from django.contrib.auth.models import User
from django.urls import reverse_lazy
from .forms import SignUpForm


class register(CreateView):
    form_class =SignUpForm
    template_name = "registration/register.html"
    success_url = reverse_lazy("login")


class home(ListView):
    model = User
    template_name = "index.html"
    