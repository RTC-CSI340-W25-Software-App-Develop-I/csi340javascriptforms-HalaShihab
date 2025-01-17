const form = document.querySelector('form');

//add eventlistener

form.addEventListener('submit', (e)=>{
  //prevent the form's default submission behavior
  e.preventDefault();

  //capture the form data

  const formData ={
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    reason: e.target.reason.value,
    message: e.target.message.value,
  };

  //render the form data to the dom
  renderConfirmation(formData);

});

function renderConfirmation(formData){
  const ConfirmationSection = document.querySelector('.confirmation');

  //clear previous confirmation message
  ConfirmationSection.innerHTML = '';

  //create the heading element
  const heading = document.createElement('h2');
  heading.textContent  = 'Submission Confirmation';

  //create paragraph elements for each form data field

  const name = document.createElement('p');
  name.textContent = `Name: ${formData.name}`;

  const email = document.createElement('p');
  email.textContent = `Email: ${formData.email}`;
  
  const phone = document.createElement('p');
  phone.textContent = `Phone Number: ${formData.phone}`

  const reason = document.createElement('p');
  reason.textContent = `Reason for Contact: ${formData.reason}`;

  const message = document.createElement('p');
  message.textContent = `Message: ${formData.message}`;

  //Append the created elements to the confirmation section

  ConfirmationSection.appendChild(heading);
  ConfirmationSection.appendChild(name);
  ConfirmationSection.appendChild(email);
  ConfirmationSection.appendChild(phone);
  ConfirmationSection.appendChild(reason);
  ConfirmationSection.appendChild(message);




  



}
