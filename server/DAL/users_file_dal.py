import json
import os
import sys

with open(os.path.join(sys.path[0], "Users.json"), 'r') as f:
    data = json.load(f)


class UsersFileDal:
    def __init__(self):
        self.__data = data

    def get_users_from_file(self):
        users = self.__data["users"]
        return users

    def get_one_user_from_file(self, id):
        users = self.__data["users"]
        for user in users:
            if user["_id"] == id:
                return user

    def update_user_from_file(self, obj):
        users = self.__data["users"]
        for user in users:
            if user["_id"] == obj["_id"]:
                user["first_name"] = obj["first_name"]
                user["last_name"] = obj["last_name"]
                user["session_time_out"] = obj["session_time_out"]
        f.close()
        with open(os.path.join(sys.path[0], "Users.json"), 'w') as f2:
            json.dump(data, f2)
        return "Updated!"
