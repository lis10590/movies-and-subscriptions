from flask import Blueprint,jsonify, request
from BL.members_bl import MembersBL

members = Blueprint('members', __name__)

members_bl = MembersBL()

#Get All
@members.route("/", methods=['GET'])
def get_all_members():
    members = members_bl.get_members()
    return jsonify(members)
