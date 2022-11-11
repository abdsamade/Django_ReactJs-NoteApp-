from .models import Note
from rest_framework.serializers import ModelSerializer



class NoteSerializer(ModelSerializer):
    class Meta:
        ### here we specify our model
        model = Note
        ###__all__ ==> means serialize all elements in our model from ObjectFormat to JsonFormat <=== ####
        fields = '__all__'