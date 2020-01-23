import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Note } from '../interfaces/Note'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes:Note[]
  
  private _url = '/assets/data/notes.json'
  constructor(private http:HttpClient) { }

  getNotes():Observable<Note[]> {
    return this.http.get<Note[]>(this._url)
  }
}
