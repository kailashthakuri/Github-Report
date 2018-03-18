"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var service = new GithubApiService_1.GithubApiService();
if (process.argv.length < 3) {
    console.log("Please pass the username!!!");
}
else {
    var userName = process.argv[2];
    service.getUserInfo(userName, function (user) {
        service.getRepoInfo(userName, function (repos) {
            user.repos = repos;
            console.log(user);
        });
    });
}
