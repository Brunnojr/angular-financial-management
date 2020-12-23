import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Revenue } from '../core/models/revenue';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {

  constructor(
    public http: HttpClient
  ) { }

  baseUrl = 'http://localhost:3000/';

  getRevenues(): Observable<Revenue[]> {
    return this.http.get<Revenue[]>(`${this.baseUrl}revenues`);
  }

  getRevenuesById(revenueId): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}revenues/${revenueId}`)
  }

  createRevenue(payload: Revenue): Observable<Revenue> {
    return this.http.post<Revenue>(this.baseUrl + 'revenues', payload);
  }

  deleteRevenue(revenueId: Revenue): Observable<Revenue>{
    return this.http.delete<Revenue>(`${this.baseUrl}revenues/${revenueId}`);
  }

  editRevenue(revenueId, payload: Revenue): Observable<Revenue>{
    return this.http.put<Revenue>(`${this.baseUrl}revenues/${revenueId}`, payload);
  }
}
