let $contactName = $('#contact_name');
let $contactEmail = $('#contact_email');
let $contactSubject = $('#contact_subject');
let $contactMessage = $('#contact_message');

function getContactInfo() {
  
  let name = $contactName.val();
  let email = $contactEmail.val();
  let subject = $contactSubject.val();
  let message = $contactMessage.val();
  
  console.log(name, email, subject, message);
  
}

getContactInfo();