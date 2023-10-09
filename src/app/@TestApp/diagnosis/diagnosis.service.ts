import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'any'
})
export class DiagnosisService {
  constructor(private http: HttpClient) { }

  getFilteredList(params: {Search: string}): Observable<any[]> {
    return this.http.get<any[]>('api/Dictionaries/icpc2?IsPublic=true', {params, withCredentials: true})
  }
}
