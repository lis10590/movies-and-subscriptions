from flask import Blueprint, jsonify, request
from BL.movies_bl import MoviesBL
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt
from Sub_WS_BL.movies_bl import SubWSMoviesBL
import requests

movies = Blueprint('movies', __name__)

movies_bl = MoviesBL()
sub_movies_bl = SubWSMoviesBL()
url = "http://localhost:5001/movies"

# Get All


@movies.route("/", methods=['GET'])
def get_all_movies():
    movies = movies_bl.get_movies()
    return jsonify(movies)

# Get All from DB


@movies.route("/getMovies", methods=['GET'])
@jwt_required()
def get_all_movies_from_db():
    data = get_jwt()
    resp = sub_movies_bl.get_movies()
    return jsonify({"data": data, "movies": resp})
    # data = get_jwt()
    # movies = movies_bl.get_movies_from_db()
    # result = {"data": data, "movies": movies}
    # return jsonify(result)

# Get One Movie


@movies.route("/getOneMovie/<movie_id>", methods=['GET'])
def get_one_movie(movie_id):
    result = sub_movies_bl.get_one_movie(movie_id)
    # result = movies_bl.get_movie(movie_id)
    return jsonify(result)

# Add New Movie


@movies.route("/newMovie", methods=['POST'])
def add_movie():
    movie = request.json
    result = sub_movies_bl.add_movie(movie)
    # result = movies_bl.add_new_movie(movie)
    return jsonify(result)

# Update Movie


@movies.route("/updateMovie", methods=['PUT'])
def update_movie():
    movie = request.json
    id = movie["id"]
    result = sub_movies_bl.update_movie(movie)
    # result = movies_bl.update_movie(id, movie)
    return jsonify(result)


# Delete Movie
@movies.route("/deleteMovie", methods=['DELETE'])
def delete_movie():
    id = request.json["movieId"]
    result = sub_movies_bl.delete_movie(id)
    # result = movies_bl.delete_movie(id)
    return jsonify(result)
