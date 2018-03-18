import * as request from "request";
import * as _ from "lodash";
import { User } from "./User";
import { Repo } from "./Repo";

const options = {
    headers: {
        'User-Agent': 'request'
    }
    ,
    // json:true
};

export class GithubApiService {

    getUserInfo(userName: string, cb: (user: User) => any) {
        let url = "https://api.github.com/users/" + userName;
        request.get(url, options, function (error, response, body) {
            let jsonObject = JSON.parse(body);
            var user: User = new User(jsonObject.id, jsonObject.url);
            cb(user);
        });
    }
    getRepoInfo(userName: string, cb: (repos: Repo[]) => any) {
        let url = "https://api.github.com/users/" + userName + "/repos";
        request.get(url, options, function (error, response, body) {
            let jsonArray = JSON.parse(body);
            var repos = jsonArray.map((repo: any) => new Repo(repo));
            cb(repos);

        });
    }
}