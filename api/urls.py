from django.urls import path

from . import views


urlpatterns = [
    path(' ',views.getRoutes,name='routes' ),
    path('notes/',views.getNotes,name='notes'),
    path('note/<str:pk>/',views.getNote,name='note'),    
    path('note/update/<str:pk>/',views.updateNote,name='update'),
    path('note/delete/<str:pk>',views.deleteNote,name='delete'),
    path('note/add/',views.createNote,name='create'),    

]
