// Function to get the user's current location
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Function to display the latitude and longitude
function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    document.getElementById("latitude").textContent = latitude;
    document.getElementById("longitude").textContent = longitude;
}

// Attach the function to the button click event
var getLocationButton = document.getElementById("getLocationButton");
getLocationButton.addEventListener("click", getCurrentLocation);