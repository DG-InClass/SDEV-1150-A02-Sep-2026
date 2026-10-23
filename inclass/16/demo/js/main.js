const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

function serializeForm(formEl) {
  // TODO: Access the form controls from formEl.elements.
  // TODO: Collect the checked topic checkboxes into an array.
  // TODO: Return an object with the trimmed form values.
}

function validateField(field) {
  // TODO: Use setCustomValidity() for fullName, email, and bio.
}

function validateForm() {
  // TODO: Validate each field that has custom validation rules.
}

function clearCustomValidity() {
  // TODO: Clear custom validity messages when the form resets.
}

form.addEventListener('input', (event) => {
  // TODO: Validate the field that triggered the input event.
  // TODO: Use reportValidity() to show dynamic browser feedback.
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); // 📍 Remember this line of code so that the browser does NOT submit and refresh the page!
  const theForm= event.target; // The target of any submit event is the <form>
  console.log(theForm);
  const controls= theForm.elements; // Look a lot like a Dictionary
  console.log(controls);  

  // TODO: Validate the form before processing the submission.
  // TODO: If the form is valid, serialize it and echo the result.
});

form.addEventListener('reset', () => {
  // TODO: Clear the output area and custom validation messages.
});
