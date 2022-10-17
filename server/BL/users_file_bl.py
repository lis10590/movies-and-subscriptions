from DAL.users_file_dal import *

class UsersFromFileBL:
    def __init__(self):
        self.__users_from_file_dal = UsersFileDal()

    def get_users_from_file(self):
        users = self.__users_from_file_dal.get_users_from_file()
        return users

