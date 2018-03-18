import { GithubApiService } from "./GithubApiService";
import { User } from "./User";
import { Repo } from "./Repo";


var service = new GithubApiService();
if (process.argv.length < 3) {
    console.log("Please pass the username!!!");
} else {
    var userName = process.argv[2];
    service.getUserInfo(userName, (user: User) => {
        service.getRepoInfo(userName, (repos: Repo[]) => {
            user.repos = repos;
            console.log(user);
        });

    });
}

