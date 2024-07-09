// Add this script to your JavaScript file or inside a <script> tag in HTML
var options = {
    "key": "YOUR_RAZORPAY_KEY_ID", // Replace with your actual Razorpay API key
    "amount": 1000, // Amount in paise (₹10 = 1000 paise)
    "currency": "INR",
    "name": "Your Website Name",
    "description": "Payment for Product/Service",
    "image": "https://your-website.com/logo.png",
    "handler": function (response){
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        // You can handle payment success here
    },
    "prefill": {
        "name": "Customer Name",
        "email": "customer@example.com",
        "contact": "9999999999"
    },
    "theme": {
        "color": "#528FF0"
    }
};

var rzp1 = new Razorpay(options);

document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}
