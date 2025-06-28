// Load environment variables from .env file
const loadEnvVariables = () => {
  const envVars = {};
  try {
    const envFile = localStorage.getItem("envVariables") || "";
    const vars = envFile.split("\n");

    vars.forEach((line) => {
      if (line && !line.startsWith("#")) {
        const [key, value] = line.split("=");
        if (key && value) {
          envVars[key.trim()] = value.trim();
        }
      }
    });
  } catch (error) {
    console.error("Error loading environment variables:", error);
  }
  return envVars;
};

// Fetch and load the .env file
fetch("/.env")
  .then((response) => response.text())
  .then((data) => {
    localStorage.setItem("envVariables", data);
  })
  .catch((error) => console.error("Error loading .env file:", error));

const env = loadEnvVariables();

export const config = {
  recaptcha: {
    siteKey: env.RECAPTCHA_SITE_KEY || "",
    secretKey: env.RECAPTCHA_SECRET_KEY || "",
  },
  emailjs: {
    publicKey: env.EMAILJS_PUBLIC_KEY || "",
    serviceId: env.EMAILJS_SERVICE_ID || "",
    templateId: env.EMAILJS_TEMPLATE_ID || "",
  },
};
