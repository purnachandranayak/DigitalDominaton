import "../styles/index.scss"; 
import { ThemeProvider } from 'next-themes';  // Import the ThemeProvider
// import '../styles/globals.css';  // Use relative path for styles

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
