// ++++++++++++++++ Elements
// Form elements
const form = document.getElementById('form');
const formFirstname = document.getElementById('firstname');
const formLastname = document.getElementById('lastname');
const formEmail = document.getElementById('email');
const formCity = document.getElementById('city');
const formProv = document.getElementById('prov');
const btn = document.getElementById('btn');
// Contact Details Elements
const contactDetails = document.querySelector('.contact-details');
const contactFullname = document.querySelector('.details-fullname');
const contactEmail = document.querySelector('.details-email');
const contactAddress = document.querySelector('.details-address');
const contactClose = document.getElementById('contact-details-close');
// Other elements
const list = document.getElementById('list');

// Variables
let contactString = [
  {
    fullname: ['Max', 'Steel'],
    email: 'steel@gmail.com',
    city: 'Toronto',
    prov: 'Ontario',
  },
  {
    fullname: ['Gin', 'King'],
    email: 'king@gmail.com',
    city: 'Toronto',
    prov: 'Ontario',
  },
  {
    fullname: ['Ben', 'Kenobi'],
    email: 'Find_me@gmail.com',
    city: 'Toronto',
    prov: 'Ontario',
  },
];
let contacts = JSON.parse(localStorage.getItem('localContacts')) || contactString;

// Functions
function buildList() {
  let html = [];
  for (let i = 0; i < contacts.length; i++) {
    html.push(
      `<li class="list-group-item" data-contact-index="${i}">${contacts[i].fullname.join(
        ' '
      )} </li>`
    );
  }
  list.innerHTML = html.join('');
}

// Event Listeners
list.addEventListener('click', function (event) {
  // console.log(event.target.dataset.contactIndex);
  const clickIndex = event.target.dataset.contactIndex;
  // Change contact details
  contactFullname.innerHTML = contacts[clickIndex].fullname.join(' ');
  contactEmail.innerHTML = contacts[clickIndex].email;
  contactAddress.innerHTML = contacts[clickIndex].city + ', ' + contacts[clickIndex].prov;
  // Make Contact Details Appear
  contactDetails.style.display = 'flex';
});

contactClose.addEventListener('click', function () {
  contactDetails.style.display = 'none';
});

btn.addEventListener('click', function (e) {
  e.preventDefault();
  const newContact = {
    fullname: [formFirstname.value, formLastname.value],
    email: formEmail.value,
    city: formCity.value,
    prov: formProv.value,
  };
  contacts.push(newContact);
  form.reset();
  buildList();
  // Setting local storage (practice for assignment 3)
  localStorage.setItem('localContacts', JSON.stringify(contacts));
});

// Main
buildList();
