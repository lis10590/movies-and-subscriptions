from flask import Blueprint, jsonify, request
from BL.members_bl import MembersBL
from BL.watch_list_bl import WatchListBL


members = Blueprint('members', __name__)


members_bl = MembersBL()
watchlist_bl = WatchListBL()

# Get All


@members.route("/", methods=['GET'])
def get_all_members():
    members = members_bl.get_members()
    return jsonify(members)

# Get All from DB


@members.route("/getMembers", methods=['GET'])
def get_all_members_from_db():

    members = members_bl.get_members_from_db()
    return jsonify(members)

# Get One Member


@members.route("/getOneMember/<member_id>", methods=['GET'])
def get_one_member(member_id):
    member = members_bl.get_member(member_id)
    return jsonify(member)

# Add New Member


@members.route("/newMember", methods=['POST'])
def add_member():
    member = request.json
    result = members_bl.add_new_member(member)
    id = result["id"]
    member = {}
    member["_id"] = id
    sub = watchlist_bl.create_subscriptions(member)
    res = {"members": result["members"], "watchlist": sub}
    return jsonify(res)

# Update Member


@members.route("/updateMember", methods=['PUT'])
def update_member():
    print(request.json)
    member = request.json
    id = member["id"]
    result = members_bl.update_member(id, member)
    return jsonify(result)


# Delete Member
@members.route("/deleteMember", methods=['DELETE'])
def delete_member():
    id = request.json["memberId"]
    member_id = members_bl.delete_member(id)
    subs = watchlist_bl.delete_watchlist(id)
    result = {"id": member_id, "subscriptions": subs}
    return jsonify(result)
