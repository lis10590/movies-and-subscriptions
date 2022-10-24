from flask import Blueprint, jsonify, request
from BL.watch_list_bl import WatchListBL

watchList = Blueprint('watchList', __name__)

watch_list_bl = WatchListBL()

# Create Subscriptions


@watchList.route("/createsubs", methods=['POST'])
def create_subscriptions():
    members = request.json
    result = watch_list_bl.create_subscriptions(members)
    return jsonify(result)

# Get All


@watchList.route("/", methods=['GET'])
def get_all_subscriptions():
    subs = watch_list_bl.get_subscriptions()
    return jsonify(subs)


# Add New Subscription

@watchList.route("/addToList", methods=['POST'])
def add_subscription():
    sub = request.json
    result = watch_list_bl.add_subscription(sub)
    return jsonify(result)


# Delete Subscriptions
@watchList.route("/delete/<id>", methods=['DELETE'])
def delete_subscriptions(id):
    result = watch_list_bl.delete_watchlist(id)
    return jsonify(result)
