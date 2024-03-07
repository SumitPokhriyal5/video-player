import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App