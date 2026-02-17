console.log("APP JS WORks");
// Steps to solve this problem
// 1. get the current URL

function getCurrentURL() {
    return 'ss';
}

function validateURL() {
    try {
        const url = new URL(getCurrentURL());
        console.log("🚀 ~ validateURL ~ url:", url)
        console.log(url.protocol);
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