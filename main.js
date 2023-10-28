const brg = document.getElementById("right");
const brg1 = document.querySelector('.burger'); 

brg.addEventListener('click', function() {
    brg1.classList.toggle('active'); 
});