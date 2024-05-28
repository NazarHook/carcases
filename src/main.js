import axios from 'axios';

const form = document.querySelector('#order_form');

async function handleSubmit(event) {
    event.preventDefault();

    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();

    if (!name || !phone) {
        alert('Заповніть всі поля');
        return;
    }

    const user = { name, phone };
    const url = 'https://66557fae3c1d3b602939bfe4.mockapi.io/carcases/carcases';

    try {
        const response = await axios.post(url, user);
        window.location.href = 'thankyou.html'
        form.reset(); 
        return response.data;
    } catch (error) {
        alert('There was an error submitting the data: ' + error.message);
    }
}

form.addEventListener('submit', handleSubmit);
