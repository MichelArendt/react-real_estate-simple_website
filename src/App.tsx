import Header from './components/global/Header'
import Footer from '@/components/global/Footer'
import './App.css';
import Homepage from "./pages/Homepage";

// Update the App component to accept children
function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
