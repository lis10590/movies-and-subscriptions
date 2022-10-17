import requests
from pymongo import MongoClient
from bson import ObjectId

class MoviesDal:
     def __init__(self):
       self.__url = "https://api.tvmaze.com/shows"
       self.__client = MongoClient(port=27017)
       self.__db = self.__client["SubscriptionsDB"]
       self.__collection = self.__db["Movies"]

     def get_all_movies(self):
        resp = requests.get(self.__url)
        return resp.json()

     def get_movies_from_db(self):
        movies = list(self.__collection.find({}))
        return movies

     def get_one_movie(self,id):
         movie = self.__collection.find_one({"_id" : ObjectId(id) })
         return movie

     def add_new_movie(self,movie):
         self.__collection.insert_one(movie)
         return 'Created with ID' + str(movie["_id"])

     def update_movie(self,id,movie):
        self.__collection.update_one({"_id" : ObjectId(id)}, {"$set" : movie})
        return 'Updated!' 

     def delete_movie(self,id):
        self.__collection.delete_one({"_id" : ObjectId(id)})
        return 'Deleted!'    