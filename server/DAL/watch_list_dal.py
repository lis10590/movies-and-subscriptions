from pymongo import MongoClient
from bson import ObjectId


class WatchListDal:
    def __init__(self):
        self.__client = MongoClient(port=27017)
        self.__db = self.__client["SubscriptionsDB"]
        self.__collection = self.__db["Subscriptions"]

    def create_subscriptions(self, member):

        obj = {}
        obj["member_id"] = member["_id"]
        obj["movies"] = []
        self.__collection.insert_one(obj)
        users = list(self.__collection.find({}))
        return users

    def get_all_watchlist(self):
        users = list(self.__collection.find({}))
        return users

    def add_new_subscription(self, movie):
        self.__collection.update_one({"_id": ObjectId(movie["_id"])}, {
            "$push": {"movies": {"movie": movie["movie"], "date": movie["date"]}}})
        users = list(self.__collection.find({}))
        return users

    def delete_all_subscriptions(self, id):
        self.__collection.delete_one({"member_id": id})
        users = list(self.__collection.find({}))
        return users
