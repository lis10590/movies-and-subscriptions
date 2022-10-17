from flask import Blueprint,jsonify, request
from BL.permissions_bl import PermissionsBL

permissions = Blueprint('permissions', __name__)
permissions_bl = PermissionsBL()


@permissions.route("/",methods=['GET'])
def get_all_permissions():
    permissions = permissions_bl.get_permissions()
    return jsonify(permissions)

@permissions.route("/getOnePermission/<permission_id>",methods=['GET'])
def get_one_permission(permission_id):
    result = permissions_bl.get_permission(permission_id)
    return jsonify(result)
