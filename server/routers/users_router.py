from flask import Blueprint, jsonify, request
from BL.users_bl import UsersBL
from BL.auth_bl import AuthBL
from BL.permissions_bl import PermissionsBL
from BL.users_file_bl import UsersFromFileBL
from flask_jwt_extended import jwt_required

users = Blueprint('users', __name__)

users_bl = UsersBL()
auth_bl = AuthBL()
permissions_bl = PermissionsBL()
users_file_bl = UsersFromFileBL()

# Get All


@users.route("/getUsers", methods=['GET'])
def get_all_users():
    users = users_bl.get_users()
    result = {"users": users}
    return jsonify(result)


@users.route("/allUsers", methods=['GET'])
@jwt_required()
def get_all_users_and_permissions():
    current_user = auth_bl.verify_token()
    token = request.headers["Authorization"].split()[1]
    token_details = auth_bl.get_token_details(token)
    users = users_bl.get_users()
    permissions = permissions_bl.get_permissions()
    users_from_file = users_file_bl.get_users_from_file()
    result = {"users": users, "permissions": permissions,
              "usersFromFile": users_from_file, "currentUser": current_user, "tokenDetails": token_details}

    return jsonify(result)


# Get One User by Id


@users.route("/getOneUser/<user_id>", methods=['GET'])
def get_one_user(user_id):
    result = users_bl.get_user(user_id)
    return jsonify(result)

# Get One User by username


@users.route("/getByUsername/<username>", methods=['GET'])
def get_user_by_username(username):
    result = users_bl.get_user_by_username(username)
    return jsonify(result)

# Add New User


@users.route("/newUser", methods=['POST'])
def add_user():
    user = request.json
    result = users_bl.add_new_user(user)
    return jsonify(result)

# Update User


@users.route("/updateUser", methods=['PUT'])
def update_user():
    user = request.json
    id = user["_id"]
    result = users_bl.update_user(id, user)
    return jsonify(result)


# Delete User
@users.route("/deleteUser", methods=['DELETE'])
def delete_user():
    id = request.json["userId"]
    result = users_bl.delete_user(id)
    return jsonify(result)


@users.route("/addUserAndPermissions", methods=['POST'])
def add_user_and_permissions():
    user = request.json
    result = users_bl.add_user_and_permissions(user)
    return jsonify(result)
