from tkinter import N
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

    def add_new_member(self,member):
        new_member = self.__members_dal.add_new_member(member)
        return new_member

    def update_member(self,id,member):
        updated_member = self.__members_dal.update_member(id,member)
        return updated_member

    def delete_member(self,id):
        deleted_member = self.__members_dal.delete_member(id)
        return deleted_member               