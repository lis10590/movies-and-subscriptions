import jwt
from pymongo import MongoClient
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import decode_token
from flask_jwt_extended import get_jwt
from datetime import timedelta
from DAL.users_file_dal import UsersFileDal
from DAL.permissions_dal import PermissionsDal
from DAL.users_dal import UsersDal
import os
from dotenv import load_dotenv
load_dotenv()

users_file_dal = UsersFileDal()
permissions_dal = PermissionsDal()
users_dal = UsersDal()


class AuthDal:
    def __init__(self):

        self.__client = MongoClient(os.environ.get("MONGO_DB_URI"))
        self.__db = self.__client["UsersDB"]
        self.__collection = self.__db["Users"]

    def register_user(self, username, password):
        self.__collection.insert_one(
            {"username": username, "password": password})
        new_user = self.__collection.find_one({"username": username})
        return new_user

    def get_token(self, username, password):
        user_id = self.__check_user(username, password)
        print(user_id)
        user = users_file_dal.get_one_user_from_file(user_id)
        session = int(user["session_time_out"])
        user_db = users_dal.get_one_user_by_username("Admin")
        admin_id = str(user_db["_id"])
        user_permissions = permissions_dal.get_one_permission(user_id)
        permissions = user_permissions["permissions"]
        additional_data = {"View Movies": False, "Create Movies": False, "Delete Movies": False, "Update Movies": False,
                           "Create Subscriptions": False, "View Subscriptions": False, "Update Subscriptions": False, "Delete Subscriptions": False, "Admin":False}

        if user_id == admin_id:
            additional_data["Admin"] = True
        for per in permissions:
            if per == "Create Movies":
                additional_data["Create Movies"] = True
            elif per == "View Movies":
                additional_data["View Movies"] = True
            elif per == "Delete Movies":
                additional_data["Delete Movies"] = True
            elif per == "Update Movies":
                additional_data["Update Movies"] = True
            elif per == "Create Subscriptions":
                additional_data["Create Subscriptions"] = True
            elif per == "View Subscriptions":
                additional_data["View Subscriptions"] = True
            elif per == "Update Subscriptions":
                additional_data["Update Subscriptions"] = True
            elif per == "Delete Subscriptions":
                additional_data["Delete Subscriptions"] = True
            else:
                continue

        token = None
        if user_id is not None:
            token = create_access_token(
                identity=user_id, expires_delta=timedelta(minutes=session), additional_claims=additional_data)

        return token

    def verify_token(self):

        user_id = get_jwt_identity()
        if user_id:
            return {"boolean": True, "id": user_id}
        else:
            return False

    def __check_user(self, username, password):

        user = self.__collection.find_one({"username": username})
        if user and user["password"] == password:
            return str(user["_id"])
        else:
            return None

    def get_token_details(self, token):
        token_details = decode_token(token)
        return token_details

    def get_additional_data(self):
        data = get_jwt()
        return data
