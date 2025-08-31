import './app-header.js';
import './note-form.js';
import './note-card.js';
import { notesData } from './sample-notes.js';

const notesList = document.getElementById("notesList");

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

notesData.forEach(note => {
  const el = document.createElement("note-card");
  el.setAttribute("note-id", note.id);
  el.setAttribute("title", note.title);
  el.setAttribute("body", note.body);
  el.setAttribute("date", formatDate(note.createdAt));
  el.setAttribute("archived", note.archived);
  notesList.appendChild(el);
});
