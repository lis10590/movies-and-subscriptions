from flask import Blueprint,jsonify, request
from BL.permissions_bl import PermissionsBL

permissions = Blueprint('permissions', __name__)
permissions_bl = PermissionsBL()


@permissions.route("/",methods=['GET'])
def get_all_permissions():
    permissions = permissions_bl.get_permissions()
    return jsonify(permissions)