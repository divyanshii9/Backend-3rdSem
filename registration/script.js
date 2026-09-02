let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {

    let name = document.getElementById("name").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let contact = document.getElementById("contact").value;

    if (name == "") {
        alert("Please enter first name");
        event.preventDefault();
        return;
    }

    if (lname == "") {
        alert("Please enter last name");
        event.preventDefault();
        return;
    }

    if (email == "") {
        alert("Please enter email");
        event.preventDefault();
        return;
    }

    if (pass.length < 6) {
        alert("Password must contain at least 6 characters");
        event.preventDefault();
        return;
    }

    if (contact.length != 10) {
        alert("Contact number must contain 10 digits");
        event.preventDefault();
        return;
    }

    let gender = document.querySelector('input[name="gender"]:checked');

    if (gender == null) {
        alert("Please select gender");
        event.preventDefault();
        return;
    }

    alert("Form submitted successfully!");
});