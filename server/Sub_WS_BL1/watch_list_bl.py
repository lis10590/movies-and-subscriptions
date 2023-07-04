import requests
import os
from dotenv import load_dotenv
load_dotenv()


class SubWSWatchListBL:
    def __init__(self):
        self.__url = os.environ.get("SUBS_WS_URI") + "/watchList"

    def create_subs(self, member):
        resp = requests.post(self.__url + "/createsubs", json=member)
        return resp.json()

    def get_subscriptions(self):
        resp = requests.get(self.__url)
        return resp.json()

    def add_subscription(self, sub):
        resp = requests.put(self.__url + "/addToList", json=sub)
        return resp.json()

    def delete_watchlist(self, id):
        resp = requests.delete(self.__url + "/delete/" + id)
        return resp.json()
