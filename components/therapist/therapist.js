// document.addEventListener('DOMContentLoaded', function () {
//     const createGroupBtn = document.getElementById('createGroupBtn');
//     const groupFormModal = document.getElementById('groupFormModal');
//     const closeBtn = document.querySelector('.close');
//     const groupForm = document.getElementById('groupForm');
//     const participantsField = document.getElementById('participants');
  
//     // Open modal
//     createGroupBtn.addEventListener('click', function () {
//       const selectedPatients = Array.from(document.querySelectorAll('.select-patient:checked'))
//         .map(checkbox => checkbox.closest('tr').querySelector('td:nth-child(3)').textContent)
//         .join(', ');
  
//       if (selectedPatients.length === 0) {
//         alert('Please select at least one patient.');
//         return;
//       }
  
//       participantsField.value = selectedPatients;
//       groupFormModal.style.display = 'block';
//     });
  
//     // Close modal
//     closeBtn.addEventListener('click', function () {
//       groupFormModal.style.display = 'none';
//     });
  
//     // Handle form submission
//     groupForm.addEventListener('submit', function (e) {
//       e.preventDefault();
  
//       // Get form data (you can save or send this data to a server)
//       const groupName = document.getElementById('groupName').value;
//       const participants = participantsField.value;
//       const availableSpace = document.getElementById('availableSpace').value;
//       const time = document.getElementById('time').value;
//       const date = document.getElementById('date').value;
//       const location = document.getElementById('location').value;
  
//       console.log('Group Created:', { groupName, participants, availableSpace, time, date, location });
  
//       // Redirect to the group page (this could be a dynamic URL or a specific page)
//       window.location.href = '/components/therapist/group-page.html';
//     });
  
//     // Close modal if clicking outside of it
//     window.addEventListener('click', function (event) {
//       if (event.target === groupFormModal) {
//         groupFormModal.style.display = 'none';
//       }
//     });
//   }); 
  
  
//pop-up form

const popupForm = document.getElementById("popupForm");
const openPopupBtn = document.getElementById("createGroupBtn");
const closePopupBtn = document.getElementById("closePopup");

// Function to open the popup and pre-fill the form
function openPopup() {
    // Capture data from the page
    // const name = document.getElementById("data-name").textContent;
    // const email = document.getElementById("data-email").textContent;
    // const phone = document.getElementById("data-phone").textContent;
    const name = "Shadin";
    const email = "shadin@gmail.com";
    const phone = "01234";

    // Pre-fill the form with captured data
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("phone").value = phone;

    // Show the popup
    popupForm.style.display = "flex";
}

// Function to close the popup
function closePopup() {
    popupForm.style.display = "none";
}

// Open the popup when the button is clicked
openPopupBtn.addEventListener("click", openPopup);

// Close the popup when the close button is clicked
closePopupBtn.addEventListener("click", closePopup);

// Optional: Close the popup when clicking outside the form
window.addEventListener("click", function(event) {
    if (event.target === popupForm) {
        closePopup();
    }
});
