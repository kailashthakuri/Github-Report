export class Repo {
    id: number;
    description: string;
    forkCount: number;
    constructor(repo:any) {
        this.id = repo.id;
        this.description = repo.description;
        this.forkCount = repo.forks_count;
    }
}