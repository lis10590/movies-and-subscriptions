from DAL.members_dal import *
from pymongo import MongoClient


class MembersBL:
    def __init__(self):
        self.__members_dal = MembersDal()
        self.__client = MongoClient(port=27017)
        self.__db = self.__client["SubscriptionsDB"]
        self.__collection = self.__db["Members"]

    def get_members(self):
        members = self.__members_dal.get_all_members()

        for member in members:
            user = {}
            user["name"] = member["name"]
            user["email"] = member["email"]
            user["city"] = member["address"]["city"]
            self.__collection.insert_one(user) 
        return "Created Members!"       