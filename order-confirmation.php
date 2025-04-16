<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f9;
        }
        h1 {
            color: #4c794d;
        }
        p {
            font-size: 1.2em;
            margin: 20px 0;
        }
        .payment-details {
            font-size: 1.5em;
            font-weight: bold;
            color: #4c794d;
            margin: 20px 0;
        }
        button {
            background-color: #4c794d;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
        }
        button:hover {
            background-color: #3a5f3d;
        }
    </style>
</head>
<body>
    <h1>Thank You for Your Order!</h1>
    <p>Your order has been successfully placed.</p>
    <p>Please use the following details to complete your payment:</p>
    <div class="payment-details">
        <?php
        // Retrieve the short code, total amount, and owner's MoMo number from the query parameters
        $shortCode = $_GET['shortcode'] ?? '*170#';
        $total = $_GET['total'] ?? '0.00';
        $ownerMoMoNumber = $_GET['ownerMoMoNumber'] ?? '0540421082';

        // Display the payment instructions
        echo "Dial <strong>$shortCode</strong> and send <strong>GHS $total</strong> to <strong>$ownerMoMoNumber</strong>";
        ?>
    </div>
    <p>Once payment is confirmed, we will process your order.</p>
    <button onclick="window.location.href='index.html'">Return to Home</button>
</body>
</html>