from DAL.permissions_dal import *

class PermissionsBL:
    def __init__(self):
        self.__permissions_dal = PermissionsDal()

    def get_permissions(self):
        permissions = self.__permissions_dal.get_permissions()
        return permissions