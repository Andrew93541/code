document.getElementById('forgetForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate phone number (must be 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    alert('Verification link sent to your email!');
});