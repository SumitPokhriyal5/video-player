import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <AllRoutes />
    </div>
  )
}

export default App