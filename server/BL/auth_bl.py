from DAL.auth_dal import *


class AuthBL:
    def __init__(self):
        self.__auth_dal = AuthDal()

    def register_user(self, username, password):
        user = self.__auth_dal.register_user(username, password)
        return user

    def get_token(self, username, password):
        token = self.__auth_dal.get_token(username, password)
        return token

    def verify_token(self):
        result = self.__auth_dal.verify_token()
        return result

    def get_token_details(self, token):
        result = self.__auth_dal.get_token_details(token)
        return result
