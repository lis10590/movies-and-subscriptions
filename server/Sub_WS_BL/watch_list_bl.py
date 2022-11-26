import requests

class SubWSWatchListBL:
    def __init__(self):
        self.__url = "http://localhost:5001/watchList"
    
    def create_subs(self,member):
        resp = requests.post(self.__url + "/createsubs", data=member)
        return resp.json()


    def get_subscriptions(self):
        resp = requests.get(self.__url)
        return resp.json() 

    def add_subscription(self,sub):
        resp = requests.put(self.__url + "/addToList", data=sub)
        return resp.json()  


    def delete_watchlist(self,id):
        resp = requests.delete(self.__url + "/delete/" + id)
        return resp.json() 