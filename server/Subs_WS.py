from flask import Flask
import json
from flask_cors import CORS
from bson import ObjectId
from Sub_WS_routers.movies_router import movies
from Sub_WS_routers.members_router import members
from Sub_WS_routers.watch_list_router import watchList


class JSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return json.JSONEncoder.default(self, obj)


subs_ws = Flask(__name__)
CORS(subs_ws, origins="https://movies-client-v224.onrender.com")

subs_ws.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!


subs_ws.json_encoder = JSONEncoder

subs_ws.register_blueprint(movies, url_prefix="/movies")
subs_ws.register_blueprint(members, url_prefix="/members")
subs_ws.register_blueprint(watchList, url_prefix="/watchList")


# serve(subs_ws,host="127.0.0.1",port=5001)
# subs_ws.run(port=5001)
