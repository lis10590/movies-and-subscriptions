import requests


class SubWSMoviesBL:
    def __init__(self):
        self.__url = "http://localhost:5001/movies"

    def get_movies(self):
        resp = requests.get(self.__url + "/getMovies")
        return resp.json()

    def get_one_movie(self, id):
        resp = requests.get(self.__url + "/getOneMovie/" + id)
        return resp.json()

    def add_movie(self, movie):
        resp = requests.post(self.__url + "/newMovie", json=movie)
        return resp.json()

    def update_movie(self, movie):
        resp = requests.put(self.__url + "/updateMovie",
                            json=movie)
        return resp.json()

    def delete_movie(self, id):
        resp = requests.delete(self.__url + "/deleteMovie", json=id)
        return resp.json()
