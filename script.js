document.getElementById('payNowBtn').addEventListener('click', function() {
    // UPI payment deep link
    const upiUrl = 'upi://pay?pa=shareanything8-1@okicici&pn=Dan&mc=YOUR_MERCHANT_CODE&tid=TRANSACTION_ID&tn=Payment%20for%20download&am=1&cu=INR&url=';

    // Open UPI app for payment
    window.location.href = upiUrl;

    // Simulate payment success after a delay
    setTimeout(() => {
        // In a real application, you would verify the payment status here
        // For this demo, we will assume payment is successful

        // Show the download link after "successful payment"
        document.getElementById('downloadLink').style.display = 'block';
    }, 5000); // Simulating a 5-second wait for payment processing
});
