from flask import Blueprint,jsonify, request
from BL.members_bl import MembersBL

members = Blueprint('members', __name__)

members_bl = MembersBL()

#Get All
@members.route("/", methods=['GET'])
def get_all_members():
    members = members_bl.get_members()
    return jsonify(members)

#Add New Member
@members.route("/newMember",methods=['POST'])
def add_member():
    member = request.json
    result = members_bl.add_new_member(member)
    return jsonify(result)

#Update Member
@members.route("/updateMember", methods=['PUT'])
def update_member(id):
    member = request.json
    result = members_bl.update_member(id,member)
    return jsonify(result)


#Delete Member
@members.route("/deleteMember", methods=['DELETE'])
def delete_member(id):
    result = members_bl.delete_member(id)
    return jsonify(result)