document.getElementById("payment-button").addEventListener("click", function() {
    // Replace this with your Cashfree payment link or API call to initiate payment
    fetch('YOUR_BACKEND_URL/start_payment') // Backend URL where you handle payment initiation
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                // Assuming the payment was successful and you received a success response
                document.getElementById("download-link").style.display = "block";
            } else {
                alert("Payment failed or not completed.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
});
