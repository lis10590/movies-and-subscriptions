from DAL.movies_dal import *
from pymongo import MongoClient
import os
from dotenv import load_dotenv
load_dotenv()


class MoviesBL:
    def __init__(self):
        self.__movies_dal = MoviesDal()
        self.__client = MongoClient(os.environ.get("MONGO_DB_URI"))
        self.__db = self.__client["SubscriptionsDB"]
        self.__collection = self.__db["Movies"]

    def get_movies(self):
        movies = self.__movies_dal.get_all_movies()

        for movie in movies:
            newMovie = {}
            newMovie["name"] = movie["name"]
            newMovie["genres"] = movie["genres"]
            newMovie["image"] = movie["image"]
            newMovie["premiered"] = movie["premiered"]
            self.__collection.insert_one(newMovie) 
        return "Created Movies!" 

    def get_movies_from_db(self):
        movies = self.__movies_dal.get_movies_from_db()
        return movies
    def get_movie(self,id):
        movie = self.__movies_dal.get_one_movie(id)
        return movie   

    def add_new_movie(self,movie):
        new_movie = self.__movies_dal.add_new_movie(movie)
        return new_movie

    def update_movie(self,id,movie):
        updated_movie = self.__movies_dal.update_movie(id,movie)
        return updated_movie

    def delete_movie(self,id):
        deleted_movie = self.__movies_dal.delete_movie(id)
        return deleted_movie      