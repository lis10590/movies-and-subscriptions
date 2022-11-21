from flask import Blueprint, jsonify, request
from BL.movies_bl import MoviesBL
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt

movies = Blueprint('movies', __name__)

movies_bl = MoviesBL()

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
    movies = movies_bl.get_movies_from_db()
    result = {"data": data, "movies": movies}
    return jsonify(result)

# Get One Movie


@movies.route("/getOneMovie/<movie_id>", methods=['GET'])
def get_one_movie(movie_id):
    result = movies_bl.get_movie(movie_id)
    return jsonify(result)

# Add New Movie


@movies.route("/newMovie", methods=['POST'])
def add_movie():
    movie = request.json
    result = movies_bl.add_new_movie(movie)
    return jsonify(result)

# Update Movie


@movies.route("/updateMovie", methods=['PUT'])
def update_movie():
    movie = request.json
    id = movie["id"]
    result = movies_bl.update_movie(id, movie)
    return jsonify(result)


# Delete Movie
@movies.route("/deleteMovie", methods=['DELETE'])
def delete_movie():
    id = request.json["movieId"]
    result = movies_bl.delete_movie(id)
    return jsonify(result)
