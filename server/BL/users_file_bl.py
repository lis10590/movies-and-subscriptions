from DAL.users_file_dal import *


class UsersFromFileBL:
    def __init__(self):
        self.__users_from_file_dal = UsersFileDal()

    def get_users_from_file(self):
        users = self.__users_from_file_dal.get_users_from_file()
        return users

    def get_user_from_file(self, id):
        user = self.__users_from_file_dal.get_one_user_from_file(id)
        return user

    def update_user_from_file(self, obj):
        user = self.__users_from_file_dal.update_user_from_file(obj)
        return user
