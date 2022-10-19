
from unittest import result
from flask import Blueprint, jsonify, request
from BL.users_file_bl import UsersFromFileBL

users_from_file = Blueprint('users_from_file', __name__)
users_from_file_bl = UsersFromFileBL()


@users_from_file.route("/", methods=['GET'])
def get_all_users_from_file():
    users = users_from_file_bl.get_users_from_file()
    return jsonify(users)


@users_from_file.route("/getOneUser/<user_id>", methods=['GET'])
def get_one_user(user_id):
    result = users_from_file_bl.get_user_from_file(user_id)
    return jsonify(result)


@users_from_file.route("/updateUser", methods=['PUT'])
def update_one_user():
    obj = request.json
    result = users_from_file_bl.update_user_from_file(obj)
    return jsonify(result)
