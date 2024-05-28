document.getElementById('order_form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
    };

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Email sent successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending the email.');
    });
});