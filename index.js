import './app-header.js';
import './note-form.js';
import './note-card.js';

import { notesData } from './sample-notes.js';

const notesListElement = document.querySelector('#notesList');

function createNoteItemElement({ id, title, body, createdAt, archived }) {
  return `
    <note-card 
      note-id="${id}" 
      title="${title}" 
      body="${body}" 
      date="${new Date(createdAt).toLocaleDateString("id-ID", { 
        year: "numeric", 
        month: "long", 
        day: "numeric" 
      })}" 
      archived="${archived}">
    </note-card>
  `;
}

const listOfNoteItem = notesData.map((note) => createNoteItemElement(note));

notesListElement.innerHTML = listOfNoteItem.join('');
