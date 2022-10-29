import json
import os
import sys

class PermissionsDal:
    def __init__(self):
        self.__path = os.path.join(sys.path[0], "Permissions.json")

    def get_permissions(self):
        with open(self.__path,'r') as f:
            data = json.load(f)
        permissions = data["permissions"]
        return permissions

    def get_one_permission(self, id):
         with open(self.__path,'r') as f:
            data = json.load(f)
         permissions = data["permissions"]
         for per in permissions:
            if per["_id"] == id:
                return per

    def update_permissions(self,obj):
        with open(self.__path,'r') as f:
            data = json.load(f) 
        permissions = data["permissions"]
        for per in permissions:
            if per["_id"] == obj["_id"]:
                per["permissions"] = obj["permissions"]
        f.close()
        with open(self.__path, 'w') as f2:
            json.dump(data, f2)  
        return data["permissions"]          

    def add_permissions(self,user):
        with open(self.__path,'r') as f:
            data = json.load(f) 
        permissions = data["permissions"]
        permissions["_id"] = user["_id"]
        permissions["permissions"] = user["permissions"]
        f.close()
        with open(self.__path, 'a') as f2:
            json.dump(data, f2)  
        return data["permissions"]