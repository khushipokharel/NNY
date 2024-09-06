
let details = "Lorem ipsum dolor sit amet consectetur adipisicing elit.   Commodi numquam vero sed beatae nam, ipsam itaque cumque quisquam. Saepe reiciendis quasi aperiam quidem voluptatum similique id ad beatae ut fugit?";
let details2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.   Commodi numquam vero sed beatae nam, ipsam itaqu";
// Arrays of box sets

const boxSets = [
    [details, details, details],
    [details, details, details2],
    [details, details2, details],
];

let currentSet = 0;
let isTransitioning = false; // Flag to prevent overlapping transitions

// Function to display boxes based on the current set index
function displayBoxes() {
    const container = document.getElementById('boxContainer');
    container.innerHTML = ''; // Clear previous boxes

    boxSets[currentSet].forEach(boxText => {
        const box = document.createElement('div');
        box.classList.add('patient-box');
        box.textContent = boxText;
        container.appendChild(box);
    });

    // Disable Previous button if on the first set
    document.getElementById('prevBtn').disabled = currentSet === 0;

    // Disable Next button if on the last set
    document.getElementById('nextBtn').disabled = currentSet === boxSets.length - 1;
}

// Function to show the next set of boxes
function showNext() {
    if (currentSet < boxSets.length - 1) {
        currentSet++;
        displayBoxes();
    }
}

// Function to show the previous set of boxes
function showPrevious() {
    if (currentSet > 0) {
        currentSet--;
        displayBoxes();
    }
}

// Initial display of boxes
displayBoxes();
