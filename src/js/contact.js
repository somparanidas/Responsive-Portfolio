import { config } from "../config.js";

// Initialize EmailJS
emailjs.init(config.emailjs.publicKey);

// Function to handle form submission
const handleSubmit = async (event) => {
  event.preventDefault();
  const submitButton = document.querySelector(".contact__button");
  submitButton.value = "Sending...";
  submitButton.disabled = true;

  try {
    // Execute reCAPTCHA
    const recaptchaResponse = await grecaptcha.execute(
      config.recaptcha.siteKey,
      { action: "submit" }
    );

    // Get form data
    const form = event.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      "g-recaptcha-response": recaptchaResponse,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      config.emailjs.serviceId,
      config.emailjs.templateId,
      formData
    );

    if (response.status === 200) {
      form.reset();
      window.location.href = "/src/js/pages/thanks.html";
    } else {
      throw new Error("Failed to send message");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Sorry, there was an error sending your message. Please try again.");
  } finally {
    submitButton.value = "Send";
    submitButton.disabled = false;
  }
};

// Add form submit event listener
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact__form");
  if (form) {
    form.addEventListener("submit", handleSubmit);
  }

  // Add reCAPTCHA script
  const script = document.createElement("script");
  script.src = `https://www.google.com/recaptcha/api.js?render=${config.recaptcha.siteKey}`;
  document.head.appendChild(script);

  // Add EmailJS script
  const emailJsScript = document.createElement("script");
  emailJsScript.src =
    "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
  document.head.appendChild(emailJsScript);
});
