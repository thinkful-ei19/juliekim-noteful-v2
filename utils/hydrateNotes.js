'use strict';

function hydrateNotes(input) {
  //input is an array of objects
  const hydrated = [], lookup = {};
  for (let note of input) {
    if (!lookup[note.id]) {
      //console.log('lookup obj', lookup);
      //console.log('hydrated array', hydrated);
      //{100: NoteObject, 102: NoteObject}
      //hydrated = [ NoteObject, NoteObject, NoteObject ]
      lookup[note.id] = note;
      lookup[note.id].tags = [];
      hydrated.push(lookup[note.id]);
    }
  
    if (note.tagId && note.tagName) {
      lookup[note.id].tags.push({
        id: note.tagId,
        name: note.tagName
      });
    }
    delete lookup[note.id].tagId;
    delete lookup[note.id].tagName;
  }
  return hydrated;
}

module.exports = hydrateNotes;