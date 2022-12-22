
from flask import Blueprint, jsonify, request
from BL.permissions_bl import PermissionsBL
from flask_cors import cross_origin

permissions = Blueprint('permissions', __name__)
permissions_bl = PermissionsBL()


@permissions.route("/", methods=['GET'])
@cross_origin()
def get_all_permissions():
    permissions = permissions_bl.get_permissions()
    return jsonify(permissions)


@permissions.route("/getOnePermission/<permission_id>", methods=['GET'])
@cross_origin()
def get_one_permission(permission_id):
    result = permissions_bl.get_permission(permission_id)
    return jsonify(result)


@permissions.route("/updatePermissions", methods=['PUT'])
@cross_origin()
def update_permissions():
    obj = request.json
    result = permissions_bl.update_permissions(obj)
    return jsonify(result)


@permissions.route("/addPermissions", methods=['POST'])
@cross_origin()
def add_permissions():
    user = request.json
    result = permissions_bl.add_permissions(user)
    return jsonify(result)
