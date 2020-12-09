// pages/_app.js
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function DocsDummy({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default DocsDummy;
