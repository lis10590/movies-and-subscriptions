import requests
from pymongo import MongoClient
from bson import ObjectId
import os
from dotenv import load_dotenv
load_dotenv()

class MoviesDal:
     def __init__(self):
       self.__url = "https://api.tvmaze.com/shows"
       self.__client = MongoClient(os.environ.get("MONGO_DB_URI"))
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
         movies = list(self.__collection.find({}))
         return movies

     def update_movie(self,id,movie):
        self.__collection.update_one({"_id" : ObjectId(id)}, {"$set" : {
         "name":movie["name"],"genres":movie["genres"],"image":{"medium":movie["image"]},
         "premiered":movie["premiered"]
        }})
        movies = list(self.__collection.find({}))
        return movies 

     def delete_movie(self,id):
        self.__collection.delete_one({"_id" : ObjectId(id)})
        return id  