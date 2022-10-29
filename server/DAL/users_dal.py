import requests
from pymongo import MongoClient
from bson import ObjectId


class UsersDal:
    def __init__(self):
       self.__client = MongoClient(port=27017)
       self.__db = self.__client["UsersDB"]
       self.__collection = self.__db["Users"]

    def get_all_users(self):
        users = list(self.__collection.find({}))
        return users 

    def get_one_user(self,id):
         user = self.__collection.find_one({"_id" : ObjectId(id) })
         return user

    def get_one_user_by_username(self,username):
        user = self.__collection.find_one({"username" : username })
        return user     

    def add_new_user(self,user):
        self.__collection.insert_one(user)
        users = list(self.__collection.find({}))
        return users 

    def update_user(self,id,user):
        self.__collection.update_one({"_id" : ObjectId(id)}, {"$set" : user})
        return 'Updated!' 

    def delete_user(self,id):
        self.__collection.delete_one({"_id" : ObjectId(id)})
        return 'Deleted!'            