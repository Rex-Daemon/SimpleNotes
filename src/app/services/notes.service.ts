import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Note } from '../interfaces/Note'
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes:Note[] = [
    {
      id: uuid.v4(),
      title: 'Title 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: uuid.v4(),
      title: 'Title 2',
      text: 'Quisque at leo fringilla, sagittis turpis ultricies, viverra arcu.'
    },
    {
      id: uuid.v4(),
      title: 'Title 3',
      text: 'Aenean semper urna eu odio malesuada, at auctor dui egestas.'
    }
  ]
  
  constructor() { }

  getNotes() {
    return this.notes
  }
}
