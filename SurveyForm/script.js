// Function to show the popup
function showPopup(data) {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    const closeButton = document.getElementById("close-button");
    const popupContentElement = document.getElementById("popup-content");

    popup.style.display = "block";
    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
        popupContentElement.innerHTML = "";
    });

    popupContent.innerHTML = data;
}

document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit-button");
    const resetButton = document.getElementById("reset-button");
    const form = document.getElementById("survey-form");

    submitButton.addEventListener("click", function() {
        // Validate the form and collect data
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;

        const genderElements = document.querySelectorAll('input[name="gender"]:checked');
        const gender = Array.from(genderElements).map(element => element.value).join(', ');

        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        

        // Create a string with the collected data
        const data = `
            First Name: ${firstName}
            Last Name: ${lastName}
            Date of Birth: ${dob}
            Country: ${country}
            Gender: ${gender}
            Profession: ${profession}
            Email: ${email}
            Mobile Number: ${mobile}
        `;

        // Showing the popup with the collected data
        showPopup(data);

        // Reset the form
        form.reset();
    });

    resetButton.addEventListener("click", function() {
        form.reset();
    });
});
