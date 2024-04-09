
document.getElementById("login").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission
    checkUser();
});

function checkUser() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if(name === "admin" && password === "admin")
    {
        location.href = "admin.html";
    }

    else if(name === "user" && password === "user")
    {
        location.href = "user.html";
    }

    else 
    {
        alert("Invalid credentials"); // Show alert for invalid credentials
    }
    
}
