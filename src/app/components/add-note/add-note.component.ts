import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { v4 as uuid } from "uuid";

@Component({
  selector: "app-add-note",
  templateUrl: "./add-note.component.html",
  styleUrls: ["./add-note.component.css"]
})
export class AddNoteComponent implements OnInit {
  @Output() addNote: EventEmitter<any> = new EventEmitter();
  title: string;
  text: string;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    let newNote = {
      id: uuid.v4(),
      title: this.title,
      text: this.text
    };
    this.addNote.emit(newNote);
  }
}
