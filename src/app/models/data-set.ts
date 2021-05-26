import { Filter } from "./filter";

export class DataSet {
    name: string;
    filters: Filter[] = [];
    

    constructor(name: string, filters: Filter[]) {
        this.name = name;
        this.filters = filters;
        
    }
}
