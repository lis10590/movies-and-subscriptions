from flask import Blueprint,jsonify, request
from BL.users_file_bl import UsersFromFileBL

users_from_file = Blueprint('users_from_file', __name__)
users_from_file_bl = UsersFromFileBL()


@users_from_file.route("/",methods=['GET'])
def get_all_users_from_file():
    users = users_from_file_bl.get_users_from_file()
    return jsonify(users)