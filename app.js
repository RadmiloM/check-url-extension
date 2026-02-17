function getCurrentURL() {
    return window.location.href;
}

function validateURL() {
    try {
        const url = new URL(getCurrentURL());
        return url.protocol === "http:" || url.protocol === "https:";
    }
    catch(error) {
        console.log("🚀 ~ validateURL ~ error:", error)
        const errorMessage = document.querySelector("#error-message");
        errorMessage.textContent = error.message;
        errorMessage.style.display = 'block';
        errorMessage.style.border= '1px solid red';
        errorMessage.style.padding = '20px';
        errorMessage.style.backgroundColor = 'lightgray';
        errorMessage.style.textAlign = 'center';
        errorMessage.style.margin = '300px auto';   
        errorMessage.style.width = '40%';
        errorMessage.style.color = 'red';
        document.querySelector("#error-message").textContent = error.message;
        document.querySelector("#error-message").style.display = 'block';
        return false;
    }
}

console.log(validateURL());