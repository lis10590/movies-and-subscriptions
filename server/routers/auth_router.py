from flask import Blueprint,jsonify, request,make_response
from BL.auth_bl import AuthBL

auth = Blueprint('auth', __name__)


auth_bl = AuthBL()

@auth.route("/register",methods=['POST'])
def register():
    username = request.json["username"]
    password = request.json["password"]
    user = auth_bl.register_user(username,password)
    return jsonify(user)

@auth.route("/login", methods=['POST'])
def login():
    username = request.json["username"]
    password = request.json["password"]

    token = auth_bl.get_token(username,password)
    if token is not None:
        return make_response({"token" : token },200)
    else:
        return make_response({"error" : "You're not authorized" },401)