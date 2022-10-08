from DAL.movies_dal import *
from pymongo import MongoClient


class MoviesBL:
    def __init__(self):
        self.__members_dal = MoviesDal()
        self.__client = MongoClient(port=27017)
        self.__db = self.__client["SubscriptionsDB"]
        self.__collection = self.__db["Movies"]

    def get_movies(self):
        movies = self.__members_dal.get_all_movies()

        for movie in movies:
            newMovie = {}
            newMovie["name"] = movie["name"]
            newMovie["genres"] = movie["genres"]
            newMovie["image"] = movie["image"]
            self.__collection.insert_one(newMovie) 
        return "Created Movies!" 