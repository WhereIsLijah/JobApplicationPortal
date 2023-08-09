from rest_framework.response import Response
#response object takes in any python/serialized data and renders it as JSON
from rest_framework.decorators import api_view
#importing this because it is a function based view
from .serializers import FormSerializer
from ..Job_form.models import Form


@api_view(['GET'])
def getData(request):
    # Implement your logic to retrieve data
    data = {"message": "Data retrieved successfully"}
    return Response(data)

@api_view(['POST'])
def postData(request):
    response_data = {"message": "Data posted successfully"}
    return Response(response_data)

@api_view(['DELETE'])
def deleteData(request):
    # Implement your logic to process posted data
    received_data = request.data
    # Perform necessary operations with received_data
    response_data = {"message": "Data deleted successfully"}
    return Response(response_data)


@api_view(['GET'])
def formList(request):
    forms = Form.object.all()
    serializer = FormSerializer(forms, many=True)
    return Response(serializer.data)