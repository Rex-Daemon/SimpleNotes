import { Component, OnInit } from "@angular/core";
import { NotesService } from "../../services/notes.service";
import { Note } from "../../interfaces/Note";

@Component({
  selector: "app-note-list",
  templateUrl: "./note-list.component.html",
  styleUrls: ["./note-list.component.css"]
})
export class NoteListComponent implements OnInit {
  notes: Note[];

  constructor(private _notesService: NotesService) {}

  ngOnInit() {
    this._notesService.getNotes().subscribe(data => this.notes = data)
  }

  deleteNote(note: Note) {
    this.notes = this.notes.filter(t => t.id !== note.id);
  }

  addNote(newNote: Note) {
    try {
      if (newNote.title.trim() !== undefined) {
        this.notes.push(newNote);
      }
    }
    catch(error) {
      
    }
  }
  
}
