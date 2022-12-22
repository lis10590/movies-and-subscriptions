from flask import Blueprint, jsonify, request
from BL.members_bl import MembersBL
from BL.watch_list_bl import WatchListBL
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt
from Sub_WS_BL.members_bl import SubWSMembersBL
from Sub_WS_BL.watch_list_bl import SubWSWatchListBL
from flask_cors import cross_origin

members = Blueprint('members', __name__)


members_bl = MembersBL()
watchlist_bl = WatchListBL()
sub_ws_members_bl = SubWSMembersBL()
sub_ws_watchlist_bl = SubWSWatchListBL()

# Get All


@members.route("/", methods=['GET'])
@cross_origin()
def get_all_members():
    members = members_bl.get_members()
    return jsonify(members)

# Get All from DB


@members.route("/getMembers", methods=['GET'])
@cross_origin()
@jwt_required()
def get_all_members_from_db():
    data = get_jwt()
    members = sub_ws_members_bl.get_members()
    #  members = members_bl.get_members_from_db()
    result = {"members": members, "data": data}
    return jsonify(result)

# Get One Member


@members.route("/getOneMember/<member_id>", methods=['GET'])
@cross_origin()
def get_one_member(member_id):
    # member = members_bl.get_member(member_id)
    member = sub_ws_members_bl.get_one_member(member_id)
    return jsonify(member)

# Add New Member


@members.route("/newMember", methods=['POST'])
@cross_origin()
def add_member():
    member = request.json
    result = sub_ws_members_bl.add_member(member)
    # result = members_bl.add_new_member(member)
    # id = result["id"]
    # member = {}
    # member["_id"] = id
    # sub = sub_ws_watchlist_bl.create_subs(member)
    # sub = watchlist_bl.create_subscriptions(member)
    # res = {"members": result["members"], "watchlist": sub}
    return jsonify(result)

# Update Member


@members.route("/updateMember", methods=['PUT'])
@cross_origin()
def update_member():
    member = request.json
    # id = member["id"]
    result = sub_ws_members_bl.update_member(member)
    # result = members_bl.update_member(id, member)
    return jsonify(result)


# Delete Member
@members.route("/deleteMember", methods=['DELETE'])
@cross_origin()
def delete_member():
    id = request.json["memberId"]
    member_id = sub_ws_members_bl.delete_member(id)
    # member_id = members_bl.delete_member(id)
    # subs = sub_ws_watchlist_bl.delete_watchlist(id)
    # subs = watchlist_bl.delete_watchlist(id)
    # result = {"id": member_id, "subscriptions": subs}
    return jsonify(member_id)
