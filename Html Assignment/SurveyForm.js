const form = document.getElementById("surveyForm");
    const submitButton = document.getElementById("submitButton");
    const resetButton = document.getElementById("resetButton");
    const popup = document.getElementById("popup");
    const popupData = document.getElementById("popupData");
    const closePopup = document.getElementById("closePopup");

    // Function to display the popup
    function showPopup(data) {
        popupData.innerText = data;
        popup.style.display = "block";
    }

    // Function to reset the form
    function resetForm() {
        form.reset();
    }

    submitButton.addEventListener("click", function () {
        if (form.checkValidity()) {
            // Form is valid, gather data and display in the popup
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const dob = document.getElementById("dob").value;
            const country = document.getElementById("country").value;
            const genderElements = document.querySelectorAll("input[name='gender']:checked");
            const gender = Array.from(genderElements).map(element => element.value).join(", ");
            const profession = document.getElementById("profession").value;
            const email = document.getElementById("email").value;
            const mobile = document.getElementById("mobile").value;

            const data = `
            First Name:${firstName}
            Last Name: ${lastName}
            Date of Birth: ${dob}
            Country: ${country}
            Gender: ${gender}
            Profession: ${profession}
            Email: ${email}
            Mobile Number: ${mobile}
            `;

            showPopup(data);
        } else {
            alert(" fill in all the required fields.");
        }
    });

    resetButton.addEventListener("click", resetForm);
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        resetForm();
    });