// More button 

const dots = document.querySelector('.dots').childNodes[1];
const filterBox = document.querySelector('.filter-box');

dots.addEventListener('click', revealFilter);

let dotsClicks = 1;
function revealFilter(e) {
    dotsClicks++;
    if (dotsClicks % 2 == 0) {
        filterBox.style.visibility = 'visible';
    }
    else {
        filterBox.style.visibility = 'hidden';
    }
}





// CREATE NEW NOTE
//////////////////
const createNoteBtn = document.querySelector('.create-btn');
const noteTitleInput = document.querySelector('#note-title');
const noteSubtextInput = document.querySelector('#note-subtext')

createNoteBtn.addEventListener('click', createNote);

function createNote(e) {
    if (noteTitleInput.value != '') {
        //create li
        const li = document.createElement('li');
        //add 'notes-list-item' class
        li.className = 'notes-list-item';
        //create X button
        const xBtn = document.createElement('div')
        xBtn.className = 'notes-list-close';
        //create icon
        const xIcon = document.createElement('i');
        xIcon.className = 'fas fa-times notes-list-close-icon';
        //create edit button
        const editIcon = document.createElement('i');
        editIcon.className = 'fas fa-edit notes-list-edit-icon';
        //append to xBtn
        xBtn.appendChild(xIcon);
        xBtn.appendChild(editIcon);
        //append to li
        li.appendChild(xBtn);

        //create 'edit menu' box
        const editMenuDiv = document.createElement('div');
        editMenuDiv.className = 'notes-list-item-edit';
        //ceate edit form
        const editForm = document.createElement('form');
        editForm.id = 'edit-form';
        //create edit form title
        const editFormTitle = document.createElement('div');
        editFormTitle.className = 'edit-form-title';
        editFormTitle.appendChild(document.createTextNode('Edit Note'));
        //append to edit form
        editForm.appendChild(editFormTitle);

        //create edit form title container div
        const editFormTitleContainer = document.createElement('div');
        editFormTitleContainer.className = 'note-edit-title-container';
        //make input
        const noteNewTitle = document.createElement('input');
        noteNewTitle.id = 'note-edit-title';
        noteNewTitle.setAttribute('type', 'text');
        noteNewTitle.setAttribute('name', 'note-edit-title');
        noteNewTitle.setAttribute('placeholder', 'New Title');
        //append input to title container
        editFormTitleContainer.appendChild(noteNewTitle);
        //create label for new title
        const newTitleLabel = document.createElement('label');
        newTitleLabel.setAttribute('for', 'note-edit-title');
        //append label to title container
        editFormTitleContainer.appendChild(newTitleLabel);
        //append title container to form
        editForm.appendChild(editFormTitleContainer);

        //create edit form SUBTEXT container div
        const editFormSubtextContainer = document.createElement('div');
        editFormSubtextContainer.className = 'note-edit-subtext-container';
        //make input
        const noteNewSubtext = document.createElement('input');
        noteNewSubtext.id = 'note-edit-subtext';
        noteNewSubtext.setAttribute('type', 'text');
        noteNewSubtext.setAttribute('name', 'note-edit-subtext');
        noteNewSubtext.setAttribute('placeholder', 'New Subtitle');
        //append input to subtext container
        editFormSubtextContainer.appendChild(noteNewSubtext);
        //create label for new subtext
        const newSubtextLabel = document.createElement('label');
        newSubtextLabel.setAttribute('for', 'note-edit-subtext');
        //append label to subtext container
        editFormSubtextContainer.appendChild(newSubtextLabel);
        //append subtext container to form
        editForm.appendChild(editFormSubtextContainer);

        //create edit buttons container
        const editButtons = document.createElement('div');
        editButtons.className = 'note-edit-button-container';
        //create edit save div
        const editSaveBtn = document.createElement('div');
        editSaveBtn.className = 'edit-save';
        editSaveBtn.appendChild(document.createTextNode('Save'));
        //append save button to container
        editButtons.appendChild(editSaveBtn);

        //create edit discard div
        const editDiscardBtn = document.createElement('div');
        editDiscardBtn.className = 'edit-discard';
        editDiscardBtn.appendChild(document.createTextNode('Discard'));
        //append discard button to container
        editButtons.appendChild(editDiscardBtn);

        //append edit buttons to form
        editForm.appendChild(editButtons);

        //append form to editMenuDiv
        editMenuDiv.appendChild(editForm);
        //append editMenuDiv to li
        li.appendChild(editMenuDiv);

        //create 'are you sure box'
        const deleteBox = document.createElement('div');
        deleteBox.className = 'notes-list-item-delete';
        const deleteTitle = document.createElement('div');
        deleteTitle.className = 'notes-list-item-delete-title';
        deleteTitle.appendChild(document.createTextNode('Are you sure?'));
        //append title to box
        deleteBox.appendChild(deleteTitle);

        //create delete options
        const deleteOptions = document.createElement('div');
        deleteOptions.className = 'notes-list-item-delete-options';
        const yesOption = document.createElement('div');
        yesOption.className = 'notes-list-item-delete-yes';
        yesOption.appendChild(document.createTextNode('Yes'));
        //append yes option
        deleteOptions.appendChild(yesOption);
        //create no option
        const noOption = document.createElement('div');
        noOption.className = 'notes-list-item-delete-no';
        noOption.appendChild(document.createTextNode('No'));
        //append no option
        deleteOptions.appendChild(noOption);
        //append deleteOptions to deleteBox
        deleteBox.appendChild(deleteOptions);

        //Create Note text
        const noteText = document.createElement('div');
        noteText.id = 'notes-list-item-text';
        //create note title
        const noteTitle = document.createElement('div');
        noteTitle.className = 'notes-list-item-title';
        //append user input title
        noteTitle.appendChild(document.createTextNode(noteTitleInput.value));
        //append title box to Note text box
        noteText.append(noteTitle);

        //create note subtext
        const noteSubtext = document.createElement('div');
        noteSubtext.className = 'notes-list-item-subtext';
        noteSubtext.appendChild(document.createTextNode(noteSubtextInput.value));
        //append subtext box to Note text box
        noteText.append(noteSubtext);

        //Create notes footer
        //create date
        const dateOfNote = new Date();
        const dateArr = dateOfNote.toDateString().split(' ');
        const dateInWords = dateArr[2] + ' ' + dateArr[1] + ' ' + dateArr[3];
        
        const notesFooter = document.createElement('div');
        notesFooter.id = 'notes-list-item-footer';
        //create date div
        const dateDiv = document.createElement('div');
        dateDiv.className = 'date';
        dateDiv.appendChild(document.createTextNode(dateInWords));
        //append date div
        notesFooter.append(dateDiv);
        //create time div
        const timeDiv = document.createElement('div');
        timeDiv.className = 'time';
        //append time div
        notesFooter.append(timeDiv); 

        //append deletebox to li
        li.appendChild(deleteBox);
        //append noteText to li
        li.appendChild(noteText);
        //append notesFooter to li
        li.appendChild(notesFooter);

        //APPEND LI TO UL
        //get UL in target
        let myTarget = e.target.parentElement.parentElement.parentElement.parentElement;

        const ul = myTarget.querySelector('#notes-list');

        ul.appendChild(li);

       
        // get list of li elements
        let notesList = document.querySelectorAll('.notes-list-item');

        //taget the new note
        myTarget = notesList[notesList.length - 1];

        // delete btn event listener
        let deleteBtn = myTarget.querySelector('.notes-list-close-icon');

        // edit btn event listener
        let editBtn = myTarget.querySelector('.notes-list-edit-icon');

        deleteBtn.addEventListener('click', showDelete);
        editBtn.addEventListener('click', showEdit);

        //store input in Local Storage
        storeInputInLocalStorage(noteTitleInput.value, noteSubtextInput.value);

         //clear input
         noteTitleInput.value = '';
         noteSubtextInput.value = '';
 
    }

    e.preventDefault();
}

// store in local storage function
function storeInputInLocalStorage(myTitle, mySubtext) {
    let noteObj = {
        title: myTitle,
        subtext: mySubtext
    };

    let notes;
    if (localStorage.getItem('notes') === null) {
        notes = [];
    } else {
        notes = JSON.parse(localStorage.getItem('notes'));
    }

    notes.push(noteObj);

    localStorage.setItem('notes', JSON.stringify(notes));
}

//load notes from local storage
function loadFromLocalStorage() {
    
}

// Show the edit note menu
function showEdit(e) {
    let myTarget= e.target.parentElement.parentElement;

    const editMenu = myTarget.querySelector('.notes-list-item-edit');
    const saveBtn = myTarget.querySelector('.edit-save');
    const discardBtn = myTarget.querySelector('.edit-discard');

    let newTitleInput = myTarget.querySelector('#note-edit-title');
    let newSubtextInput = myTarget.querySelector('#note-edit-subtext');

    let oldTitleInput = myTarget.querySelector('.notes-list-item-title');
    let oldSubtextInput = myTarget.querySelector('.notes-list-item-subtext');

    //display old values to edit
    newTitleInput.value = oldTitleInput.textContent;
    newSubtextInput.value = oldSubtextInput.textContent;

    console.log(oldTitleInput);

    //show menu
    editMenu.style.display = 'flex';

    //btn event listeners and functions
    discardBtn.addEventListener('click', function() {
        editMenu.style.display = 'none';
        //clear incase of input
        newTitleInput.value = '';
        newSubtextInput.value = '';
    });

    saveBtn.addEventListener('click', function() {
        // dont do anything if no input
        if (newTitleInput.value) {
            ('#note-edit-subtext');
            //replace title if new entered
            if (newTitleInput.value != '') {
                oldTitleInput.innerHTML = newTitleInput.value;
            } 
            
            oldSubtextInput.innerHTML = newSubtextInput.value;


            //hide menu
            editMenu.style.display = 'none';
        }

        //clear incase of input
        newTitleInput.value = '';
        newSubtextInput.value = '';
        
    });

    e.preventDefault();

}

// Show the note list delete menu
function showDelete(e) {
    let deleteOption = e.target.parentElement.parentElement.querySelector('.notes-list-item-delete');
    let myTarget = e.target.parentElement.parentElement; 

    
    // make sure clicking the icon
    if (myTarget.classList.contains('notes-list-item')) {
        let deleteOption = myTarget.querySelector('.notes-list-item-delete');
        deleteOption.style.display = 'flex';

        // yes and no option
        let yesOption = myTarget.querySelector('.notes-list-item-delete-yes');
        let noOption = myTarget.querySelector('.notes-list-item-delete-no');
        
        // option event listeners
        noOption.addEventListener('click', hideDelete);
        yesOption.addEventListener('click', deleteListItem);
    }
}

// Hide the note list delete menu
function hideDelete(e) {
    let myTarget = e.target.parentElement.parentElement.parentElement;
    let deleteOption = myTarget.querySelector('.notes-list-item-delete');
    deleteOption.style.display = 'none';
}

// Delete List Item (Note)
function deleteListItem(e) {
    let myTarget = e.target.parentElement.parentElement.parentElement;
    myTarget.remove();
}

//Clear all Button
const clearAllBtn = document.querySelector('.clear-all');
const clearPopup = document.querySelector('.clear-all-popup');

clearAllBtn.addEventListener('click', revealClearPopup);

function revealClearPopup(e) {
    let myTarget = e.target.parentElement;
    let clearYes = myTarget.querySelector('.clear-all-popup-yes');

    let clearNo = myTarget.querySelector('.clear-all-popup-no');


    clearPopup.style.display = 'block';
    clearYes.addEventListener('click', clearAll);

    clearNo.addEventListener('click', function(){
        clearPopup.style.display = 'none';
    });

    e.preventDefault();
}

function clearAll(e) {
    //get list of note
    let myTarget = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    const notes =  myTarget.querySelectorAll('.notes-list-item');

    //loop through notes list
    for(let i = 0; i < notes.length; i++) {
        notes[i].remove();
    }

    clearPopup.style.display = 'none';

    e.preventDefault();
}

//Filter Notes
const filterInput = document.getElementById('filter');

filterInput.addEventListener('keyup', filterNotes);

function filterNotes(e) {
    const filterUserInput = e.target.value;
    
    //loop through lists
    const notesList = document.querySelectorAll('.notes-list-item');

    for (let i = 0; i < notesList.length; i++) {
       let notesTitle = notesList[i].querySelector('.notes-list-item-title');

       if (notesTitle.textContent.toLowerCase().indexOf(filterUserInput.toLowerCase()) != -1) {
            notesList[i].style.display='block';
       } else {
           notesList[i].style.display='none';
       }
    }
}
