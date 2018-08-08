import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

    constructor(private http: HttpClient) { }

    getList() {
        return this.http.get('json/list.json');
    }

    getItem(id: number) {
        return this.http.get('json/' + id + '.json');
    }
}
