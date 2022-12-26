from flask import Flask
import json
from flask_cors import CORS
from bson import ObjectId
from routers.members_router import members
from routers.movies_router import movies
from routers.users_from_file_router import users_from_file
from routers.permissions_router import permissions
from routers.users_router import users
from routers.watch_list_router import watchList
from routers.auth_router import auth
from routers.main_page_router import main_page
from flask_jwt_extended import JWTManager
import os
from dotenv import load_dotenv
load_dotenv()


class JSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return json.JSONEncoder.default(self, obj)


app = Flask(__name__)
CORS(app, origins=os.environ.get("CLIENT_ORIGIN"))

app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
jwt = JWTManager(app)


app.json_encoder = JSONEncoder

app.register_blueprint(members, url_prefix="/members")
app.register_blueprint(movies, url_prefix="/movies")
app.register_blueprint(users_from_file, url_prefix="/usersfromfile")
app.register_blueprint(permissions, url_prefix="/permissions")
app.register_blueprint(users, url_prefix="/users")
app.register_blueprint(watchList, url_prefix="/watchList")
app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(main_page, url_prefix="/mainpage")

# app.run()
