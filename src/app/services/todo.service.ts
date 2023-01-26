import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoUrl = `${environment.apiUrl}/todos`;

  constructor(private http: HttpClient) {}

  getTodos(userId: string | undefined): Observable<any> {
    return this.http.get(`${this.todoUrl}/${userId}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  addItem(todo: any, userId: string | undefined): Observable<any> {
    return this.http.post(`${this.todoUrl}/${userId}`, todo).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateItem(id: string, todo: any): Observable<any> {
    return this.http.put(`${this.todoUrl}/${id}`, todo);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.todoUrl}/${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
