// const spans = document.querySelectorAll("span");
// spans.forEach((span) => {
//   span.style.display = "none";
// });

const contactForm = document.getElementById("contactForm");
const contactFirstNameInput = document.getElementById("contactFirstName");
const contactLastNameInput = document.getElementById("contactLastName");
const contactEmailInput = document.getElementById("contactEmail");
const contactGeneralEnquiryRadio = document.getElementById(
  "contactGeneralEnquiry"
);
const contactSupportRequestRadio = document.getElementById(
  "contactSupportRequest"
);

const radioButtons = document.querySelectorAll(
  'input[name="contactQueryType"]'
);

const contactMessageInput = document.getElementById("contactMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const contactFirstName = contactFirstNameInput.value.trim();
  const contactLastName = contactLastNameInput.value.trim();
  const contactEmail = contactEmailInput.value.trim();
  const querySelected =
    contactGeneralEnquiryRadio.checked || contactSupportRequestRadio.checked;
  const contactMessage = contactMessageInput.value.trim();

  if (contactFirstName === "") {
    document.querySelector(".error-firstName").style.display = "block";
  } else {
    document.querySelector(".error-firstName").style.display = "none";
  }
  if (contactLastName === "") {
    document.querySelector(".error-lastName").style.display = "block";
  } else {
    document.querySelector(".error-lastName").style.display = "none";
  }
  if (contactEmail === "") {
    document.querySelector(".error-email").style.display = "block";
  } else {
    document.querySelector(".error-email").style.display = "none";
  }

  if (!querySelected) {
    document.querySelector(".error-query").style.display = "block";
  } else {
    document.querySelector(".error-query").style.display = "none";
  }

  if (contactMessage === "") {
    document.querySelector(".error-message").style.display = "block";
  } else {
    document.querySelector(".error-message").style.display = "none";
  }
});

// removed the error message once when the user input a data
contactFirstNameInput.addEventListener("input", (e) => {
  e.preventDefault();
  if (contactFirstNameInput.value.trim() !== "") {
    document.querySelector(".error-firstName").style.display = "none";
  }
});

contactLastNameInput.addEventListener("input", (e) => {
  e.preventDefault();
  if (contactLastNameInput.value.trim() !== "") {
    document.querySelector(".error-lastName").style.display = "none";
  }
});

radioButtons.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    e.preventDefault();
    document.querySelector(".error-query").style.display = "none";
  });
});

contactMessageInput.addEventListener("input", (e) => {
  e.preventDefault();
  if (contactMessageInput.value.trim() !== "") {
    document.querySelector(".error-message").style.display = "none";
  }
});
