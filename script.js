function search() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let cards = document.getElementsByClassName('card');
    Array.from(cards).forEach(function(card) {
        let title = card.getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}
function filterGenre(genre) {
    let cards = document.getElementsByClassName('card');
    Array.from(cards).forEach(function(card) {
        let cardGenre = card.getAttribute('data-genre');
        if (cardGenre === genre || genre === 'all') {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}
function showDetails(movieTitle) {
    document.getElementById('movieTitle').innerText = movieTitle;
    document.getElementById('bookingSection').style.display = 'block';
}
let selectedSeats = [];
const totalAmountDisplay = document.getElementById("totalAmount");
let totalAmount = 0;
function updateTotalAmount() {
    totalAmount = selectedSeats.reduce((total, seat) => {
        return total + parseInt(seat.dataset.price);
    }, 0);
    totalAmountDisplay.textContent = totalAmount;
}

document.addEventListener("DOMContentLoaded", () => {
    const seats = document.querySelectorAll(".seat");

    seats.forEach(seat => {
        seat.addEventListener("click", () => {
            if (!seat.classList.contains("selected")) {
                seat.classList.add("selected");
                selectedSeats.push(seat);
            } else {
                seat.classList.remove("selected");
                selectedSeats = selectedSeats.filter(s => s !== seat);
            }
            updateTotalAmount();
        });
    });
    document.getElementById("confirmSelection").addEventListener("click", () => {
        if (selectedSeats.length > 0) {
            alert(`You have selected ${selectedSeats.length} seats. Total: $${totalAmount}`);
        } else {
            alert("Please select at least one seat.");
        }
    });
    document.getElementById('makePayment').addEventListener('click', makePayment);
});
function makePayment() {
    alert('Payment Successful! Your tickets are booked.');
}
function updateLocation() {
    const location = document.getElementById("locationSelect").value;
    alert("Location selected: " + location);
}
