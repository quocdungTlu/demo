function validateForm() {
    let isValid = true;

    // Clear previous errors
    clearErrors();

    // Validate Họ
    const ho = document.getElementById('ho').value.trim();
    if (ho === "") {
        showError('hoError', 'Vui lòng nhập vào Họ');
        markRequired('ho');
        isValid = false;
    }

    // Validate Tên
    const ten = document.getElementById('ten').value.trim();
    if (ten === "") {
        showError('tenError', 'Vui lòng nhập vào Tên');
        markRequired('ten');
        isValid = false;
    }

    // Validate Tên đăng nhập
    const username = document.getElementById('username').value.trim();
    if (username === "" || username.length < 6 || username.length > 25) {
        showError('usernameError', 'Vui lòng nhập Tên đăng nhập hợp lệ (6-25 ký tự)');
        markRequired('username');
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    if (email === "") {
        showError('emailError', 'Vui lòng nhập địa chỉ email hợp lệ');
        markRequired('email');
        isValid = false;
    }

    // Validate Số điện thoại
    const phone = document.getElementById('phone').value.trim();
    if (phone === "" || !/^\d{10,15}$/.test(phone)) {
        showError('phoneError', 'Vui lòng nhập số điện thoại hợp lệ (10-15 số)');
        markRequired('phone');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.style.display = 'none';
    });

    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        label.classList.remove('required');
    });
}

function markRequired(fieldId) {
    const label = document.querySelector(`label[for="${fieldId}"]`);
    label.classList.add('required');
}

function resetForm() {
    document.getElementById('registrationForm').reset();
    clearErrors();
}
