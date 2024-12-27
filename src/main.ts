import 'lenis/dist/lenis.css'
import './style.css'
import Lenis from 'lenis'

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
export default lenis;