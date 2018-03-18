"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var options = {
    headers: {
        'User-Agent': 'request'
    },
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (userName, cb) {
        var url = "https://api.github.com/users/" + userName;
        request.get(url, options, function (error, response, body) {
            var jsonObject = JSON.parse(body);
            var user = new User_1.User(jsonObject.id, jsonObject.url);
            cb(user);
        });
    };
    GithubApiService.prototype.getRepoInfo = function (userName, cb) {
        var url = "https://api.github.com/users/" + userName + "/repos";
        request.get(url, options, function (error, response, body) {
            var jsonArray = JSON.parse(body);
            var repos = jsonArray.map(function (repo) { return new Repo_1.Repo(repo); });
            cb(repos);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
