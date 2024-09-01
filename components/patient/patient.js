function loadHeader() {
    fetch('/components/shared/patient/header.html')
         .then(response => response.text())
         .then(data => {
            document.getElementById('header').innerHTML = data;
         });
}
loadHeader();

function loadfooter() {
    fetch('/components/shared/patient/footer.html')
         .then(response => response.text())
         .then(data => {
            document.getElementById('footer').innerHTML = data;
         });
}
loadfooter();