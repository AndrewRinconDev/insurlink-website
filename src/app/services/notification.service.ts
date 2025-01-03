import { Injectable } from '@angular/core';
import { BASE_API_ROUTE } from '../../constants/environment/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = BASE_API_ROUTE;
  constructor(private http: HttpClient) { }

  saveNotification(notificationData: any): Observable<any> {    
    // const headers = this.headers;
    return this.http.post<any>(`${this.apiUrl}/notification/`, notificationData);
  }
}
