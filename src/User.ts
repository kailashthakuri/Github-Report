import { Repo } from "./Repo";

export class User {
    id: number;
    url: string;
    repos?: Repo[];
    constructor(id: number, url: string) {
        this.id = id;
        this.url = url;  
    }
    

}