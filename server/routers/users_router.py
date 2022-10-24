from flask import Blueprint, jsonify, request
from BL.users_bl import UsersBL

users = Blueprint('users', __name__)

users_bl = UsersBL()

# Get All


@users.route("/getUsers", methods=['GET'])
def get_all_users():
    users = users_bl.get_users()
    return jsonify(users)

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
def delete_user(id):
    result = users_bl.delete_user(id)
    return jsonify(result)
