document.addEventListener('DOMContentLoaded', function () {
  const createGroupBtn = document.getElementById('createGroupBtn');
  const groupFormModal = document.getElementById('groupFormModal');
  const closeModalBtn = document.querySelector('.close');
  const groupForm = document.getElementById('groupForm');

  // Function to handle Create Group button click
  createGroupBtn.addEventListener('click', function () {
      const selectedPatients = Array.from(document.querySelectorAll('.checkbox:checked'));

      // Check if any patients have been selected
      if (selectedPatients.length === 0) {
          alert('Please select at least one patient to create a group.');
          return;
      }

      // Show the modal if patients are selected
      groupFormModal.style.display = 'block';

      // Populate the participants field with the selected patients' names
      const participants = selectedPatients.map(checkbox => {
          const row = checkbox.closest('tr');
          return row.querySelector('td:nth-child(3)').textContent; // Assuming the name is in the 3rd column
      }).join(', ');
      document.getElementById('participants').value = participants;
  });

  // Close the modal when the close button is clicked
  closeModalBtn.addEventListener('click', function () {
      groupFormModal.style.display = 'none';
  });

  // Handle form submission
  groupForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission behavior

      // After form submission, redirect to the group page
      window.location.href = '/components/therapist/group-page.html';
  });

  // Close the modal if clicking outside of it
  window.addEventListener('click', function (event) {
      if (event.target === groupFormModal) {
          groupFormModal.style.display = 'none';
      }
  });
});
