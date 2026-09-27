// Dropdown Interaction
const skillSelect = document.getElementById("skillSelect");
const skillOutput = document.getElementById("skillOutput");

skillSelect.addEventListener("change", function() {
    if (skillSelect.value === "") {
        skillOutput.textContent = "";
    } else {
        skillOutput.textContent = "You selected: " + skillSelect.value;
    }
});

// Modal Functionality
const modal = document.getElementById("profileModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Form Validation
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "yellow";
        formMessage.textContent = "Please fill all fields before submitting.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        formMessage.style.color = "yellow";
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    formMessage.style.color = "lightgreen";
    formMessage.textContent = "Form submitted successfully!";
});