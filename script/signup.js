// Initialize EmailJS
emailjs.init({
    publicKey: "TX4WGJKWRNDEoFbue"
})

// Get form and input elements
const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("emailAddress");
const phone = document.getElementById("phoneNo");
const terms = document.getElementById("terms");
const error = document.getElementById("error");

// Hide the message when the page loads
error.style.display = "none";

// Listen for form submission
form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Hide previous messages
    error.style.display = "none";

    // Check if all fields are filled
    if (
        fullName.value.trim() === "" ||
        email.value.trim() === "" ||
        phone.value.trim() === ""
    ) {
        error.textContent = "Please fill in all fields.";
        error.style.color = "red";
        error.style.display = "block";
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        error.textContent = "Please enter a valid email address.";
        error.style.color = "red";
        error.style.display = "block";
        return;
    }

    // Validate phone number
    const phonePattern = /^[0-9]{10,15}$/;

    if (!phonePattern.test(phone.value.trim())) {
        error.textContent = "Please enter a valid phone number.";
        error.style.color = "red";
        error.style.display = "block";
        return;
    }

    // Check Terms & Conditions
    if (!terms.checked) {
        error.textContent = "Please accept the Terms & Conditions.";
        error.style.color = "red";
        error.style.display = "block";
        return;
    }

    // Check internet connection before sending
    if (!navigator.onLine) {
        error.textContent = "No internet connection. Please check your connection and try again.";
        error.style.color = "red";
        error.style.display = "block";
        return;
    }

    // Send the form using EmailJS
    emailjs.sendForm(
    "service_n08ctgh",
    "template_va8setp", // Admin template
    form
    )
    .then(function () {

        return emailjs.sendForm(
            "service_n08ctgh",
            "template_ev9mbgq", // User template
            form
        );

    })
    .then(function () {

        error.textContent = "Registration Successful!";
        error.style.color = "green";
        error.style.display = "block";

        form.reset();

    })
    .catch(function (err) {

        error.textContent = "Failed to send registration. Please try again later";
        error.style.color = "red";
        error.style.display = "block";

        console.log(err);

    });

});























// const form = document.getElementById("form")

// const name = document.getElementById("fullName")
// const email = document.getElementById("emailAddress")
// const phoneNo = document.getElementById("phoneNo")
// const error = document.getElementById("error")
// error.hidden = true;

// form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     register()
// })

// function register(){
//     const nameValue = name.value;
//     const emailValue = email.value;
//     const phoneNoValue = phoneNo.value;

//     if(!nameValue || !emailValue || !phoneNoValue){
//         error.innerHTML = "Fill all input fields"
//         error.hidden = false;
//     }

//     else{
//         alert("requent sent")
//         error.hidden = true;

//         name.value =""
//         email.value =""
//         phoneNo.value = ""
//     }

// }

// const Fname = document.getElementById("name")

// // function firstFocus(){
// //     Fname.style.transform = "translateY(-20px)"
// //     Fname.style.transition = ".3s ease"
// // }


