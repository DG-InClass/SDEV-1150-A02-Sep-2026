const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

/**
 * Examine the form for the user's input and return it as an object
 * @param {HTMLFormElement} formEl - The `<form>` whose data we're extracting
 */
function serializeForm(formEl) {
  // TODO: Access the form controls from formEl.elements.
  const plan = formEl.elements.plan; // Happens to be a RadioNodeList object
  //                          \___/ <input type="radio" name="plan" value="Junior" />
  //                             <input type="radio" name="plan" value="Intermediate"
  const skillLevel = plan.value; // Selected radio button's value

  // I can also use Object Destructuring syntax to "unpack" my form controls
  const { fullName, email, bio, topics } = formEl.elements; // name="fullName", "email", ..
  // const topics = formEl.elements.topics; // an alternate way to get named input
  // Since topics is a RadioNodeList (of 3 input controls), I need to loop through
  // these to see which ones are checked.
  const selectedTopics = [];
  for (let index = 0; index < topics.length; index++) {
    const inputCheckbox = topics[index];
    if(inputCheckbox.checked) {
      selectedTopics.push(inputCheckbox.value);
    }
  }

  // TODO: Collect the checked topic checkboxes into an array.
  // TODO: Return an object with the trimmed form values.
  return {
    fullName: fullName.value.trim(), // All .value data is as strings
    email: email.value.trim(),
    plan: skillLevel,
    bio: bio.value.trim(),
    topics: selectedTopics.join(', '), 
    submittedAt: new Date().toLocaleString(), // timestamp
  }
}

function formatSubmission(data) {
  return `Submission received:
  - Name: ${data.fullName || '(none)'}
  - Email: ${data.email || '(none)'}
  - Skill: ${data.plan || '(none)'}
  - Bio: ${data.bio || '(none)'}
  - Stengths: ${data.topics.length > 0 ? data.topics : '(none)'}
  - Time: ${data.submittedAt}
  `;
}

/**
 * Validate that there is at least two name parts
 * @param {HTMLInputElement} inputEl - The input for the person's full name
 */
function validateFullName(inputEl) {
  // Capture the text and "split" it based on whitespace
  const text = inputEl.value.trim(); 
  const stringArray = text.split(' '); // split on single space
  if(stringArray.length < 2) {
    inputEl.setCustomValidity('Full Name must contain at least two part/words');
  } else {
    inputEl.setCustomValidity = ''; // Empty string means no "error message"
  }
}

function validateEmail(inputEl) {
  const text = inputEl.value.trim();
  if(!text.includes('@')) {
    inputEl.setCustomValidity('Email must contain an "@" symbol.');
  } else {
    inputEl.setCustomValidity('');
  }
}

function validateBio(textArea) {
  if (textArea.value.trim().length < 40) {
    textArea.setCustomValidity('Bio must be at least 40 characters long');
  } else {
    textArea.setCustomValidity('');
  }
}


function validateField(field) {
  // TODO: Use setCustomValidity() for fullName, email, and bio.
  // <input name="??">    <textarea name="??">
  switch(field.name) {
    case 'fullName':
      validateFullName(field);
      break;
    case 'email':
      validateEmail(field);
      break;
    case 'bio':
      validateBio(field);
      break;
  }
}

function validateForm() {
  // TODO: Validate each field that has custom validation rules.
  validateField(form.elements.fullName);
  validateField(form.elements.email);
  validateField(form.elements.bio);
}

function clearCustomValidity() {
  // TODO: Clear custom validity messages when the form resets.
}

form.addEventListener('input', (event) => {
  // 'input' events occur when the user has finished typing in a <input> control
  // TODO: Validate the field that triggered the input event.
  validateField(event.target);

  // TODO: Use reportValidity() to show dynamic browser feedback.
  event.target.reportValidity();
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); // 📍 Remember this line of code so that the browser does NOT submit and refresh the page!
  const theForm= event.target; // The target of any submit event is the <form>
  console.log(theForm);
  const controls= theForm.elements; // Look a lot like a Dictionary
  console.log(controls);  

  // TODO: Validate the form before processing the submission.
  validateForm();
  // TODO: If the form is valid, serialize it and echo the result.
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Extract the data that the user entered into our form
  const data = serializeForm(theForm);
  console.log(data);


  result.textContent = formatSubmission(data);
});

form.addEventListener('reset', () => {
  // TODO: Clear the output area and custom validation messages.
});
