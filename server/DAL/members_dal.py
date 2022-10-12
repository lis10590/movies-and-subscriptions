from pymongo import MongoClient
import requests
from bson import ObjectId

class MembersDal:
     def __init__(self):
       self.__url = "https://jsonplaceholder.typicode.com/users"
       self.__client = MongoClient(port=27017)
       self.__db = self.__client["SubscriptionsDB"]
       self.__collection = self.__db["Members"]

     def get_all_members(self):
        resp = requests.get(self.__url)
        return resp.json()

     def get_members_from_db(self):
        members = list(self.__collection.find({}))
        return members  

     def get_one_member(self,id):
        member = list(self.__collection.find_one({"_id" : ObjectId(id) }))
        return member   

     def add_new_member(self,member):
         list(self.__collection.insert_one(member))
         return 'Created with ID' + str(member["_id"])

     def update_member(self,id,member):
        self.__collection.update_one({"_id" : ObjectId(id)}, {"$set" : member})
        return 'Updated!' 

     def delete_member(self,id):
        self.__collection.delete_one({"_id" : ObjectId(id)})
        return 'Deleted!'  
        
        