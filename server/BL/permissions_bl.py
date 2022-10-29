from DAL.permissions_dal import *


class PermissionsBL:
    def __init__(self):
        self.__permissions_dal = PermissionsDal()

    def get_permissions(self):
        permissions = self.__permissions_dal.get_permissions()
        return permissions

    def get_permission(self, id):
        permission = self.__permissions_dal.get_one_permission(id)
        return permission

    def update_permissions(self,obj):
        permissions = self.__permissions_dal.update_permissions(obj)
        return permissions  

    def add_permissions(self,user):
        permissions = self.__permissions_dal.add_permissions(user)
        return permissions      
