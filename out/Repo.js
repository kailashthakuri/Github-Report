"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(repo) {
        this.id = repo.id;
        this.description = repo.description;
        this.forkCount = repo.forks_count;
    }
    return Repo;
}());
exports.Repo = Repo;
