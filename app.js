function getCurrentURL() {
    return window.location.href;
}

function validateURL() {
    try {
        const url = new URL(getCurrentURL());
        return url.protocol === "http:" || url.protocol === "https:";
    }
    catch(error) {
        const errorMessage = document.querySelector("#error-message");
        console.log("🚀 ~ validateURL ~ errorMessage:", errorMessage)
        errorMessage.textContent = error?.message || 'Invalid URL';
        errorMessage.style.display = 'block';
        errorMessage.style.border= '1px solid red';
        errorMessage.style.padding = '20px';
        errorMessage.style.backgroundColor = 'lightgray';
        errorMessage.style.textAlign = 'center';
        errorMessage.style.margin = '300px auto';   
        errorMessage.style.width = '40%';
        errorMessage.style.color = 'red';
        return false;
    }
}

validateURL();