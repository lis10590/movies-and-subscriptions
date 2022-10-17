import json
import os
import sys

with open(os.path.join(sys.path[0],"Users.json"),'r') as f:
        data = json.load(f)

class UsersFileDal:
    def __init__(self):
        self.__data = data

    def get_users_from_file(self):
        users = self.__data["users"]
        return users





       