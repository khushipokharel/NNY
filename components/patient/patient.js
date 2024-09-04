let quotes = document.querySelectorAll('.affirmation-slider .quote');
let dots = document.querySelectorAll('.dots .dot');
let currentQuote = 0;

function showQuote(index) {
    quotes[currentQuote].classList.remove('active');
    dots[currentQuote].classList.remove('active');
    currentQuote = index;
    quotes[currentQuote].classList.add('active');
    dots[currentQuote].classList.add('active');
}

setInterval(function() {
    let nextQuote = (currentQuote + 1) % quotes.length;
    showQuote(nextQuote);
}, 3000);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showQuote(index);
    });
});

document.addEventListener('DOMContentLoaded', function() {
   const monthNames = [
       "January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December"
   ];

   const currentMonthElement = document.getElementById('currentMonth');
   const calendarDatesElement = document.getElementById('calendarDates');
   const prevMonthButton = document.getElementById('prevMonth');
   const nextMonthButton = document.getElementById('nextMonth');

   let currentDate = new Date();

   function renderCalendar(date) {
       const year = date.getFullYear();
       const month = date.getMonth();
       const today = new Date();

       currentMonthElement.textContent = `${monthNames[month]} ${year}`;

       calendarDatesElement.innerHTML = '';

       const firstDay = new Date(year, month, 1).getDay();

       const daysInMonth = new Date(year, month + 1, 0).getDate();

       const offset = firstDay === 0 ? 6 : firstDay - 1; 
       for (let i = 0; i < offset; i++) {
           const emptySpan = document.createElement('span');
           emptySpan.textContent = ''; 
           calendarDatesElement.appendChild(emptySpan);
       }

       for (let day = 1; day <= daysInMonth; day++) {
           const dateElement = document.createElement('span');
           dateElement.textContent = day;
           if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
               dateElement.classList.add('selected');
           }

           calendarDatesElement.appendChild(dateElement);
       }
   }

   prevMonthButton.addEventListener('click', function() {
       currentDate.setMonth(currentDate.getMonth() - 1);
       renderCalendar(currentDate);
   });

   nextMonthButton.addEventListener('click', function() {
       currentDate.setMonth(currentDate.getMonth() + 1);
       renderCalendar(currentDate);
   });

   renderCalendar(currentDate);
});

document.addEventListener('DOMContentLoaded', function() {
   const goalLink = document.getElementById('goalLink');
   const goalModal = document.getElementById('goalModal');
   const closeModal = document.querySelector('.modal .close');
   const completeGoalButton = document.getElementById('completeGoal');
   const congratsMessage = document.getElementById('congratsMessage');

   goalLink.addEventListener('click', function(event) {
       event.preventDefault();
       goalModal.style.display = 'block';
   });

   closeModal.addEventListener('click', function() {
       goalModal.style.display = 'none';
   });

   completeGoalButton.addEventListener('click', function() {
       goalModal.style.display = 'none';
       showCongratulations();
   });

   function showCongratulations() {
       congratsMessage.style.display = 'flex';
       startConfetti();

       setTimeout(function() {
           congratsMessage.style.display = 'none';
       }, 3000);
   }

function startConfetti() {
       const confettiContainer = document.getElementById('confetti');
       const colors = ['#FFC700', '#FF0000', '#2E3192', '#00A651', '#FF6600'];
       const confettiCount = 100;

       for (let i = 0; i < confettiCount; i++) {
           let confetti = document.createElement('div');
           confetti.className = 'confetti';
           confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
           confetti.style.left = Math.random() * 100 + 'vw';
           confetti.style.animationDelay = Math.random() * 2 + 's';
           confettiContainer.appendChild(confetti);

           setTimeout(function() {
               confetti.remove();
           }, 4000);
       }
   }
});

document.addEventListener('DOMContentLoaded', (event) => {
   var modal = document.getElementById("newGoalModal");
   var btn = document.getElementById("setGoalButton");
   var span = document.getElementsByClassName("close")[0];
 
   btn.onclick = function() {
     modal.style.display = "block";
   }
 
   span.onclick = function() {
     modal.style.display = "none";
   }
 
   window.onclick = function(event) {
     if (event.target == modal) {
       modal.style.display = "none";
     }
   }
   document.getElementById('goalForm').onsubmit = function(event) {
     event.preventDefault();
     var goal = document.getElementById('goalInput').value;
     console.log('New Goal:', goal);
     document.getElementById('weeklyGoalText').textContent = goal;
     modal.style.display = "none";
   }
 });

 document.addEventListener('DOMContentLoaded', function() {
    const dailyAffirmation = localStorage.getItem('dailyAffirmation');

    if (dailyAffirmation) {
        const sliderQuotes = document.querySelectorAll('.affirmation-slider .quote');
        sliderQuotes.forEach((quote, index) => {
            if (index === 0) {
                quote.textContent = `“${dailyAffirmation}”`;
            }
        });
    }
});

// JavaScript to render a simple mood chart using Canvas
const canvas = document.getElementById('moodChart');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(0, 150);
ctx.lineTo(50, 140);
ctx.lineTo(100, 130);
ctx.lineTo(150, 160);
ctx.lineTo(200, 120);
ctx.lineTo(250, 180);
ctx.strokeStyle = '#A685E2';
ctx.lineWidth = 3;
ctx.stroke();

ctx.beginPath();
ctx.arc(0, 150, 5, 0, Math.PI * 2);
ctx.arc(50, 140, 5, 0, Math.PI * 2);
ctx.arc(100, 130, 5, 0, Math.PI * 2);
ctx.arc(150, 160, 5, 0, Math.PI * 2);
ctx.arc(200, 120, 5, 0, Math.PI * 2);
ctx.arc(250, 180, 5, 0, Math.PI * 2);
ctx.fillStyle = '#A685E2';
ctx.fill();