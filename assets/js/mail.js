const myContactForm = document.getElementById('myContactForm');

myContactForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    
    // Add your access key here
    const accessKey = '9a98cd55-b20c-4b11-882c-2ca3ea03a495';

    // Append access_key to the form data
    const formData = new FormData(myContactForm);
    console.log("Check", JSON.stringify(Object.fromEntries(formData)));
    formData.append('access_key', accessKey);
    
    // Log form data for debugging
    console.log("Form Data", JSON.stringify(Object.fromEntries(formData)));

    // Send form data to Web3Forms API
    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    console.log(result);
});
