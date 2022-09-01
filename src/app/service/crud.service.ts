import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseUrl = "http://localhost:3001/tarefas";

  constructor(private http: HttpClient) { }
    
}
