from flask import Blueprint, jsonify, request, make_response
from BL.auth_bl import AuthBL
from flask_cors import cross_origin

main_page = Blueprint('main_page', __name__)
auth_bl = AuthBL()


@main_page.route("/", methods=['GET'])
@cross_origin()
def get_main_page():

    if request.headers and request.headers.get('x-access-token'):
        token = request.headers.get('x-access-token')
        id = auth_bl.verify_token(token)
        if id:
            return make_response(200)
        else:
            return make_response({"error": "Not authorized"}, 401)
    else:
        return make_response({"error": "No token provided"}, 401)
