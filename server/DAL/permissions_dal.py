import json
import os
import sys

with open(os.path.join(sys.path[0], "Permissions.json"), 'r') as f:
    data = json.load(f)


class PermissionsDal:
    def __init__(self):
        self.__data = data

    def get_permissions(self):
        permissions = self.__data["permissions"]
        return permissions

    def get_one_permission(self, id):
        permissions = self.__data["permissions"]
        for per in permissions:
            if per["_id"] == id:
                return per
