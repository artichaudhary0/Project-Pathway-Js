const passwordInput = document.getElementById("password-input");
    const strengthBar = document.getElementById("strength-bar");
    const showPasswordCheckbox = document.getElementById("show-password");

    passwordInput.oninput = function () {
        let score = 0;
        const passwordValue = passwordInput.value;
        const strengthWidths = ["1%", "25%", "50%", "75%", "100%"];
        const strengthColors = ["#ff4c4c", "#ffb74d", "#ffd54f", "#aed581", "#66bb6a"];

        if (passwordValue.length >= 6) {
            const strengthTests = [
                /[0-9]/,         // Numeric characters
                /[a-z]/,         // Lowercase letters
                /[A-Z]/,         // Uppercase letters
                /[^0-9a-zA-Z]/   // Special characters
            ];
            strengthTests.forEach((test) => {
                if (test.test(passwordValue)) {
                    score += 1;
                }
            });
        }

        strengthBar.style.width = strengthWidths[score];
        strengthBar.style.backgroundColor = strengthColors[score];
    };

  showPasswordCheckbox.onchange = function () {
      passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
  };