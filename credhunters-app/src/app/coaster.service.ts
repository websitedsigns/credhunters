import { Injectible } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
export class CoasterService {
  private url = '';
  constructor(private http: HttpClient) { }
}
})
export class CoasterServiceComponent {
  getCoasters() {
    return this.http.get(this.url);
  }

  addCoaster(coaster) {
    return this.http.post(this.url, coaster);
  }

  deleteCoaster(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
}
