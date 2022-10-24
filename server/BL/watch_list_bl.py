from DAL.watch_list_dal import *


class WatchListBL:
    def __init__(self):
        self.__watchlist_dal = WatchListDal()

    def create_subscriptions(self, members):
        subs = self.__watchlist_dal.create_subscriptions(members)
        return subs

    def get_subscriptions(self):
        watch_list = self.__watchlist_dal.get_all_watchlist()
        return watch_list

    def add_subscription(self, movie):
        new_sub = self.__watchlist_dal.add_new_subscription(movie)
        return new_sub

    def delete_watchlist(self, id):
        deleted_user = self.__watchlist_dal.delete_all_subscriptions(id)
        return deleted_user
