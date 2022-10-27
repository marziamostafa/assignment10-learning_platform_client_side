
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div id="Download">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
