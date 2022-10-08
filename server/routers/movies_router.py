from flask import Blueprint,jsonify, request
from BL.movies_bl import MoviesBL

movies = Blueprint('movies', __name__)

movies_bl = MoviesBL()

#Get All
@movies.route("/", methods=['GET'])
def get_all_movies():
    movies = movies_bl.get_movies()
    return jsonify(movies)