import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateTableObjService {
  constructor(private HttpClientObj: HttpClient) { }

  getPageObject(url: string, sort: string, order: string, page: number, pageSize: number): Observable<PageObj> {
    const href = url;
    const requestUrl =
        `${href}?sort=${sort}&order=${order}&pageNo=${page}&pageSize=${pageSize}`;

    return this.HttpClientObj.get<PageObj>(requestUrl);
  }
}

/** Interface for page objct */
export interface PageObj {
  data: any[];
  totalItems: any;
  totalPages: any;
  sort: any;
  currentPage: any;
}
