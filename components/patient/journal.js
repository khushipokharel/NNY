// Sample data for demonstration
const journals = [
  {
    id: 1,
    title: "Productive day at work",
    date: "24/3/2024",
    content: "This is my first journal entry.",
  },
  {
    id: 2,
    title: "Why me?",
    date: "23/3/2024",
    content: "Today was a great day!",
  },
  {
    id: 3,
    title: "Does my dog know how to talk?",
    date: "22/3/2024",
    content: " ",
  },
  {
    id: 4,
    title: "Falling in love or is it just alcohol?",
    date: "22/3/2024",
    content: " ",
  },
];

// Function to populate journal list
function populateJournalList() {
  const journalList = document.getElementById("journalList");
  journalList.innerHTML = ""; // Clear the list before repopulating
  journals.forEach((journal) => {
    const li = document.createElement("li");
    li.textContent = journal.title;
    li.dataset.id = journal.id;
    li.addEventListener("click", () => showJournalDetails(journal));
    journalList.appendChild(li);
  });
}

// Function to show journal details
function showJournalDetails(journal) {
  const journalDetails = document.getElementById("journalDetails");
  journalDetails.innerHTML = `<h3>${journal.title}</h3><p>${journal.content}</p>`;
}

// Function to handle "Add New Post" button click
document.addEventListener("DOMContentLoaded", (event) => {
  var modal = document.getElementById("newJournalModal");
  var btn = document.getElementById("addNewPostBtn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  document.getElementById("journalForm").onsubmit = function (event) {
    event.preventDefault();
    var goal = document.getElementById("goalInput").value;
    console.log("New Goal:", goal);
    document.getElementById("weeklyGoalText").textContent = goal;
    modal.style.display = "none";
  };
});

// Function to save the new journal entry
function saveJournalEntry(event) {
  event.preventDefault();

  const title = document.getElementById("journalTitle").value;
  const content = document.getElementById("journalContent").value;

  // Add new journal to the list (for now, we'll just append it)
  const newJournal = { id: journals.length + 1, title, content };
  journals.push(newJournal);

  // Update the journal list and show the new entry
  populateJournalList();
  showJournalDetails(newJournal);
}

// Function to filter journal list based on search input
function filterJournals() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const journalListItems = document.querySelectorAll("#journalList li");

  journalListItems.forEach((item) => {
    const title = item.textContent.toLowerCase();
    if (title.includes(searchInput)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  populateJournalList();
});
document.getElementById("addNewPostBtn").addEventListener("click", addNewPost);
document
  .getElementById("searchInput")
  .addEventListener("input", filterJournals);
