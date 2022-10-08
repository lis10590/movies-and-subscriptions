from flask import Flask
import json
from bson import ObjectId
from routers.members_router import members
from routers.movies_router import movies


class JSONEncoder(json.JSONEncoder):
    def default(self, obj) :
        if isinstance(obj, ObjectId):
            return str(obj)
        return json.JSONEncoder.default(self,obj)

app = Flask(__name__)


app.json_encoder = JSONEncoder

app.register_blueprint(members, url_prefix="/members")
app.register_blueprint(movies, url_prefix="/movies")


app.run()