import requests


class SubWSMembersBL:
    def __init__(self):
        self.__url = "http://localhost:5001/members"

    def get_members(self):
        resp = requests.get(self.__url + "/getMembers")
        return resp.json()

    def get_one_member(self, id):
        resp = requests.get(self.__url + "/getOneMember/" + id)
        return resp.json()

    def add_member(self, member):
        resp = requests.post(self.__url + "/newMember", json=member)
        return resp.json()

    def update_member(self, member):
        resp = requests.put(self.__url + "/updateMember",
                            json=member)
        return resp.json()

    def delete_member(self, id):
        resp = requests.delete(self.__url + "/deleteMember", json=id)
        return resp.json()
