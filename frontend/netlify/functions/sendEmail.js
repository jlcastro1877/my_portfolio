const nodemailer = require("nodemailer");

// The handler function for the Netlify serverless function
exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: "Method Not Allowed" }),
    };
  }

  // Parse the request body
  const { name, email, message } = JSON.parse(event.body);

  // Create a reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER, // Sender email address from environment variables
      pass: process.env.APP_PASSWORD, // App password from environment variables
    },
  });

  // Define the mail options
  const mailOptions = {
    from: {
      name: name,
      address: email,
    },
    to: "gohirejorge@gmail.com", // Replace with your destination email
    subject: "Contact Form Submission",
    text: message,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully",
      }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "Failed to send email" }),
    };
  }
};
