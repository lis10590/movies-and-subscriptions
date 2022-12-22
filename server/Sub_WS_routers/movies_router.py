from flask import Blueprint, jsonify, request
from BL.movies_bl import MoviesBL
from flask_cors import cross_origin


movies = Blueprint('movies', __name__)

movies_bl = MoviesBL()

# Get All


@movies.route("/", methods=['GET'])
@cross_origin()
def get_all_movies():
    movies = movies_bl.get_movies()
    return jsonify(movies)

# Get All from DB


@movies.route("/getMovies", methods=['GET'])
@cross_origin()
def get_all_movies_from_db():
    movies = movies_bl.get_movies_from_db()
    return jsonify(movies)

# Get One Movie


@movies.route("/getOneMovie/<movie_id>", methods=['GET'])
@cross_origin()
def get_one_movie(movie_id):
    result = movies_bl.get_movie(movie_id)
    return jsonify(result)

# Add New Movie


@movies.route("/newMovie", methods=['POST'])
@cross_origin()
def add_movie():
    print(request.json)
    movie = request.json
    result = movies_bl.add_new_movie(movie)
    return jsonify(result)

# Update Movie


@movies.route("/updateMovie", methods=['PUT'])
@cross_origin()
def update_movie():
    print(request.json)
    movie = request.json
    id = movie["id"]
    result = movies_bl.update_movie(id, movie)
    return jsonify(result)


# Delete Movie
@movies.route("/deleteMovie", methods=['DELETE'])
@cross_origin()
def delete_movie():
    # id = request.json["movieId"]
    id = request.json
    result = movies_bl.delete_movie(id)
    return jsonify(result)
