document.getElementById('reservationForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
  
    if (!name || !email || !date || !time || !guests) {
      alert('Please fill in all required fields.');
      return;
    }
  
    // Optionally, send data to server here
  
    // Show confirmation
    document.getElementById('reservationForm').reset();
    const confirmation = document.getElementById('confirmation');
    confirmation.style.display = 'block';
  
    // Hide after 5 seconds
    setTimeout(() => {
      confirmation.style.display = 'none';
    }, 5000);
  });
  