import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllRoutes from './routes/AllRoutes';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <AllRoutes />
    </div>
  )
}

export default App