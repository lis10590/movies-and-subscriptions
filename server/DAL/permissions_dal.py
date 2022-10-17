import json
import os
import sys

with open(os.path.join(sys.path[0],"Permissions.json"),'r') as f:
        data = json.load(f)

class PermissionsDal:
    def __init__(self):
        self.__data = data

    def get_permissions(self):
        permissions = self.__data["permissions"]
        return permissions