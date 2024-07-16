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

const contactConsentCheck = document.getElementById("contactConsent");

const myModal = document.getElementById("myModal");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const contactFirstName = contactFirstNameInput.value.trim();
  const contactLastName = contactLastNameInput.value.trim();
  const contactEmail = contactEmailInput.value.trim();
  const querySelected =
    contactGeneralEnquiryRadio.checked || contactSupportRequestRadio.checked;
  const contactMessage = contactMessageInput.value.trim();

  const contactConsent = contactConsentCheck.checked;
  let formIsValid = true;

  if (contactFirstName === "") {
    document.querySelector(".error-firstName").style.display = "block";
    document.querySelector(".error-firstName").style.color = "hsl(0, 66%, 54%)";
    contactFirstNameInput.style.border = "1px solid hsl(0, 66%, 54%)";
    formIsValid = false;
  } else {
    document.querySelector(".error-firstName").style.display = "none";
  }
  if (contactLastName === "") {
    document.querySelector(".error-lastName").style.display = "block";
    document.querySelector(".error-lastName").style.color = "hsl(0, 66%, 54%)";
    contactLastNameInput.style.border = "1px solid hsl(0, 66%, 54%)";
    formIsValid = false;
  } else {
    document.querySelector(".error-lastName").style.display = "none";
  }
  if (contactEmail === "") {
    document.querySelector(".error-email").style.display = "block";
    document.querySelector(".error-email").style.color = "hsl(0, 66%, 54%)";
    contactEmailInput.style.border = "1px solid hsl(0, 66%, 54%)";
    formIsValid = false;
  } else {
    document.querySelector(".error-email").style.display = "none";
  }

  if (!querySelected) {
    document.querySelector(".error-query").style.display = "block";
    document.querySelector(".error-query").style.color = "hsl(0, 66%, 54%)";
    formIsValid = false;
  } else {
    document.querySelector(".error-query").style.display = "none";
  }

  if (contactMessage === "") {
    document.querySelector(".error-message").style.display = "block";
    document.querySelector(".error-message").style.color = "hsl(0, 66%, 54%)";
    contactMessageInput.style.border = "1px solid hsl(0, 66%, 54%)";
    formIsValid = false;
  } else {
    document.querySelector(".error-message").style.display = "none";
  }
  if (!contactConsent) {
    document.querySelector(".error-consent").style.display = "block";
    document.querySelector(".error-consent").style.color = "hsl(0, 66%, 54%)";
    formIsValid = false;
  } else {
    document.querySelector(".error-consent").style.display = "none";
  }

  if (formIsValid) {
    myModal.style.display = "block";
    setTimeout(() => {
      myModal.style.display = "none";
      contactForm.reset();
      radioButtons.forEach((btnRadio) => {
        btnRadio.parentElement.classList.remove("selected");
      });
    }, 2000);
  }
});

// removed the error message once when the user input a data
contactFirstNameInput.addEventListener("input", (e) => {
  e.preventDefault();
  if (contactFirstNameInput.value.trim() !== "") {
    document.querySelector(".error-firstName").style.display = "none";
    contactFirstNameInput.style.border = "1px solid hsl(186, 15%, 59%)";
  }
});

contactLastNameInput.addEventListener("input", (e) => {
  e.preventDefault();
  if (contactLastNameInput.value.trim() !== "") {
    document.querySelector(".error-lastName").style.display = "none";
    contactLastNameInput.style.border = "1px solid hsl(186, 15%, 59%)";
  }
});

contactEmailInput.addEventListener("input", (e) => {
  e.preventDefault();
  if (contactEmailInput.value.trim() !== "") {
    document.querySelector(".error-email").style.display = "none";
    contactEmailInput.style.border = "1px solid hsl(186, 15%, 59%)";
  }
});

radioButtons.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    e.preventDefault();
    radioButtons.forEach((btnRadio) => {
      btnRadio.parentElement.classList.remove("selected");
    });

    radio.parentElement.classList.add("selected");
    document.querySelector(".error-query").style.display = "none";
  });
});

contactMessageInput.addEventListener("input", (e) => {
  e.preventDefault();
  if (contactMessageInput.value.trim() !== "") {
    document.querySelector(".error-message").style.display = "none";
    contactMessageInput.style.border = "1px solid hsl(186, 15%, 59%)";
  }
});

contactConsentCheck.addEventListener("change", (e) => {
  e.preventDefault();
  document.querySelector(".error-consent").style.display = "none";
});
