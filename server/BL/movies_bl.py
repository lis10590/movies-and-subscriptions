from DAL.movies_dal import *
from pymongo import MongoClient


class MoviesBL:
    def __init__(self):
        self.__movies_dal = MoviesDal()
        self.__client = MongoClient(port=27017)
        self.__db = self.__client["SubscriptionsDB"]
        self.__collection = self.__db["Movies"]

    def get_movies(self):
        movies = self.__movies_dal.get_all_movies()

        for movie in movies:
            newMovie = {}
            newMovie["name"] = movie["name"]
            newMovie["genres"] = movie["genres"]
            newMovie["image"] = movie["image"]
            self.__collection.insert_one(newMovie) 
        return "Created Movies!" 
        
    def add_new_movie(self,movie):
        new_movie = self.__movies_dal.add_new_movie(movie)
        return new_movie

    def update_movie(self,id,movie):
        updated_movie = self.__movies_dal.update_movie(id,movie)
        return updated_movie

    def delete_movie(self,id):
        deleted_movie = self.__movies_dal.delete_movie(id)
        return deleted_movie      