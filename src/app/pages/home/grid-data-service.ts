import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GridDataService {

    constructor(private http: HttpClient) {
    }

    public getData() {
        return this.http.get("http://localhost:4200/assets/JSON/userData.json");

    }
}