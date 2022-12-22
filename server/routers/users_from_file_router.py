

from flask import Blueprint, jsonify, request
from BL.users_file_bl import UsersFromFileBL
from flask_cors import cross_origin

users_from_file = Blueprint('users_from_file', __name__)
users_from_file_bl = UsersFromFileBL()


@users_from_file.route("/", methods=['GET'])
@cross_origin()
def get_all_users_from_file():
    users = users_from_file_bl.get_users_from_file()
    return jsonify(users)


@users_from_file.route("/getOneUser/<user_id>", methods=['GET'])
@cross_origin()
def get_one_user(user_id):
    result = users_from_file_bl.get_user_from_file(user_id)
    return jsonify(result)


@users_from_file.route("/updateUser", methods=['PUT'])
@cross_origin()
def update_one_user():
    obj = request.json
    result = users_from_file_bl.update_user_from_file(obj)
    return jsonify(result)


@users_from_file.route("/deleteUser/<id>", methods=['DELETE'])
@cross_origin()
def delete_one_user(id):
    result = users_from_file_bl.delete_user_from_file(id)
    return jsonify(result)


@users_from_file.route("/addUser", methods=['POST'])
@cross_origin()
def add_user():
    user = request.json
    result = users_from_file_bl.add_new_user(user)
    return jsonify(result)
