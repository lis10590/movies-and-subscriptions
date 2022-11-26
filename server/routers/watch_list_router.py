from flask import Blueprint, jsonify, request
from BL.watch_list_bl import WatchListBL
from Sub_WS_BL.watch_list_bl import SubWSWatchListBL

watchList = Blueprint('watchList', __name__)

watch_list_bl = WatchListBL()
subs_ws_watchlist_bl = SubWSWatchListBL()

# Create Subscriptions


@watchList.route("/createsubs", methods=['POST'])
def create_subscriptions():
    member = request.json
    result = subs_ws_watchlist_bl.create_subs(member)
    # result = watch_list_bl.create_subscriptions(member)
    return jsonify(result)

# Get All


@watchList.route("/", methods=['GET'])
def get_all_subscriptions():
    subs = subs_ws_watchlist_bl.get_subscriptions()
    # subs = watch_list_bl.get_subscriptions()
    return jsonify(subs)


# Add New Subscription

@watchList.route("/addToList", methods=['PUT'])
def add_subscription():
    sub = request.json
    result = subs_ws_watchlist_bl.add_subscription(sub)
    # result = watch_list_bl.add_subscription(sub)
    return jsonify(result)


# Delete Subscriptions
@watchList.route("/delete/<id>", methods=['DELETE'])
def delete_subscriptions(id):
    result = subs_ws_watchlist_bl.delete_watchlist(id)
    # result = watch_list_bl.delete_watchlist(id)
    return jsonify(result)
