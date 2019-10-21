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

// Notes List delete button
let deleteBtns = document.querySelectorAll('.notes-list-close-icon');

for (let i=0;i<deleteBtns.length;i++) {
    deleteBtns[i].addEventListener('click', showDelete);
}

// Show the note list delete menu
function showDelete(e) {
    let deleteOption = e.target.parentElement.parentElement.querySelector('.notes-list-item-delete');
    let myTarget = e.target.parentElement.parentElement.parentElement.parentElement; 
    
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
