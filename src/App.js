import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from "./router";
import { toast } from 'react-toastify';

toast.configure()
function App() {
  return (
    <AppRouter />
  );
}

export default App;
