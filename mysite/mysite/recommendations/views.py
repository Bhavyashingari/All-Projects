from django.shortcuts import render
from django.db.models import Count
from .models import Search, Product
from django.shortcuts import render, redirect

def get_recommendations(request):
    top_searches = Search.objects.values('query').annotate(count=Count('query')).order_by('-count')[:5]

    recommended_products = []
    for search in top_searches:
        query = search['query']
        products = Product.objects.filter(name__icontains=query) | Product.objects.filter(category__icontains=query)
        recommended_products.extend(products)

    recommended_products = list({p.id: p for p in recommended_products}.values())
    return render(request, 'recommendations.html', {'products': recommended_products})


def searchView(request):
    if request.method == "POST":
        searched = request.POST['searched']
        product = Product.objects.filter(name__contains=searched)

        search_obj = Search(query=searched)
        search_obj.save()

        return render(request, 'search.html', {'searched':searched, 'product':product})
    else:
        return render(request, 'search.html')
