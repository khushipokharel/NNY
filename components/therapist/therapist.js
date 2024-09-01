function loadHeader() {
    fetch('../components/shared/therapist/header.html')
         .then(response => response.text())
         .then(data => {
            document.getElementById('header').innerHTML = data;
         });
}
loadHeader();

function loadfooter() {
    fetch('../components/shared/therapist/footer.html')
         .then(response => response.text())
         .then(data => {
            document.getElementById('footer').innerHTML = data;
         });
}
loadfooter();