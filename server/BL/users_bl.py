from DAL.users_dal import *
from DAL.permissions_dal import *
from DAL.users_file_dal import *


class UsersBL:
    def __init__(self):
        self.__users_dal = UsersDal()
        self.__users_file_dal = UsersFileDal()
        self.__permissions_dal = PermissionsDal()

    def get_users(self):
        users = self.__users_dal.get_all_users()
        return users

    def get_user(self, id):
        user = self.__users_dal.get_one_user(id)
        return user

    def get_user_by_username(self, username):
        user = self.__users_dal.get_one_user_by_username(username)
        return user

    def add_new_user(self, user):
        new_user = self.__users_dal.add_new_user(user)
        return new_user

    def update_user(self, id, user):
        updated_user = self.__users_dal.update_user(id, user)
        updated_users_file = self.__users_file_dal.update_user_from_file(user)
        updated_permissions = self.__permissions_dal.update_permissions(user)
        return {"users": updated_user, "users_file": updated_users_file, "permissions": updated_permissions}

    def delete_user(self, id):
        deleted_user = self.__users_dal.delete_user(id)
        deleted_user_from_file = self.__users_file_dal.delete_user_from_file(
            id)
        deleted_permissions = self.__permissions_dal.delete_permissions(id)
        return {"users": deleted_user, "users_file": deleted_user_from_file, "permissions": deleted_permissions}

    def add_user_and_permissions(self, user):
        users = self.__users_dal.add_new_user(user)
        for item in users:
            if item["username"] == user["username"]:
                id = str(item["_id"])

        users_file = self.__users_file_dal.add_new_user(id, user)
        permissions = self.__permissions_dal.add_permissions(id, user)
        return {"users": users, "users_file": users_file, "permissions": permissions}
