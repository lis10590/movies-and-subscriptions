import jwt
from pymongo import MongoClient
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import decode_token
from datetime import datetime, timedelta


class AuthDal:
    def __init__(self):
        self.__key = "server_key"
        self.__algorithm = "HS256"
        self.__client = MongoClient(port=27017)
        self.__db = self.__client["UsersDB"]
        self.__collection = self.__db["Users"]

    def register_user(self, username, password):
        self.__collection.insert_one(
            {"username": username, "password": password})
        new_user = self.__collection.find_one({"username": username})
        return new_user

    def get_token(self, username, password):
        user_id = self.__check_user(username, password)
        token = None
        if user_id is not None:
            token = create_access_token(
                identity=user_id, expires_delta=timedelta(minutes=30))
            # jwt.encode({"user_id" : user_id}, self.__key, self.__algorithm)
        return token

    def verify_token(self):
        # data = jwt.decode(token, self.__key, self.__algorithm)
        user_id = get_jwt_identity()
        # data["user_id"]
        if user_id:
            return {"boolean": True, "id": user_id}
        else:
            return False

    def __check_user(self, username, password):
        # Check existance of that user in data base....
        user = self.__collection.find_one({"username": username})
        if user and user["password"] == password:
            return str(user["_id"])
        else:
            return None

    def get_token_details(self, token):
        token_details = decode_token(token)
        return token_details
