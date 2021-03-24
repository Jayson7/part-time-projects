from django.shortcuts import render

# Create your views here.

def tweet(request):

    return render(request, "tweeter/tweet.html")
    
