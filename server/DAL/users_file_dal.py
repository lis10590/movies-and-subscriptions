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
        return {"message": "Deleted", "id": id}

    def add_new_user(self, user):
        with open(self.__path, 'r') as f:
            data = json.load(f)
            users = data["users"]
            users.append(user)
            f.close()
<<<<<<< HEAD
        with open(self.__path, 'w') as f2:
            json.dump(data, f2)
        return data["users"]
=======
         with open(self.__path, 'w') as f2:
            json.dump(data, f2) 
         return data["users"]         
>>>>>>> 9b28330bf77649597089d3782a608972a2a199ed
