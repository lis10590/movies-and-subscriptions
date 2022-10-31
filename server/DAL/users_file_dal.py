import json
import os
import sys


class UsersFileDal:
    def __init__(self):
        self.__path = os.path.join(sys.path[0], "Users.json")

    def get_users_from_file(self):
        with open(self.__path, 'r') as f:
            data = json.load(f)
            users = data["users"]
            return users

    def get_one_user_from_file(self, id):
        with open(self.__path, 'r') as f:
            data = json.load(f)
            users = data["users"]
            for user in users:
                if user["_id"] == id:
                    return user

    def update_user_from_file(self, obj):
        with open(self.__path, 'r') as f:
            data = json.load(f)
        users = data["users"]
        for user in users:
            if user["_id"] == obj["_id"]:
                user["first_name"] = obj["first_name"]
                user["last_name"] = obj["last_name"]
                user["session_time_out"] = obj["session_time_out"]
        f.close()
        with open(self.__path, 'w') as f2:
            json.dump(data, f2)
        return data["users"]

    def delete_user_from_file(self, id):
        with open(self.__path, 'r') as f:
            data = json.load(f)
        users = data["users"]
        new_users = list(filter(lambda x: x["_id"] != id, users))
        data["users"] = new_users
        f.close()
        with open(self.__path, 'w') as f2:
            json.dump(data, f2)
        return id

    def add_new_user(self, id, user):
        with open(self.__path, 'r') as f:
            data = json.load(f)
            users = data["users"]
            new_user = {}
            new_user["_id"] = id
            new_user["first_name"] = user["first_name"]
            new_user["last_name"] = user["last_name"]
            new_user["session_time_out"] = user["session_time_out"]
            new_user["created_date"] = user["created_date"]
            users.append(new_user)
            f.close()
        with open(self.__path, 'w') as f2:
            json.dump(data, f2)
        return data["users"]
