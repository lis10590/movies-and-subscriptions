from DAL.users_dal import *


class UsersBL:
        def __init__(self):
            self.__users_dal = UsersDal()
          

        def get_users(self):
            users = self.__users_dal.get_all_users()
            return users
        def get_user(self,id):
            user = self.__users_dal.get_one_user(id)
            return user 

        def get_user_by_username(self,username):
            user = self.__users_dal.get_one_user_by_username(username)
            return user      

        def add_new_user(self,user):
            new_user = self.__users_dal.add_new_user(user)
            return new_user

        def update_user(self,id,user):
            updated_user = self.__users_dal.update_user(id,user)
            return updated_user

        def delete_movie(self,id):
            deleted_movie = self.__movies_dal.delete_movie(id)
            return deleted_movie      