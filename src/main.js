document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#order_form');

    form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault(); 

        const name = form.elements.name.value;
        const phone = form.elements.phone.value;
        if (name === '' || phone === '') {
            alert('Будь ласка заповніть всі поля');
            return;
        }
        const formData = new FormData(form);

        fetch('send.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data); 
            window.location.href = 'thankyou.html';
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    window.validateForm = function() {
        if (form.elements.name.value === '') {
            alert('Please enter your name.');
            return false;
        }
        if (form.elements.phone.value === '') {
            alert('Please enter your phone.');
            return false;
        }
        return true;
    }
});