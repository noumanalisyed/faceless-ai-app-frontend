import { Routes, Route } from 'react-router-dom';
import {Homepage} from './components/homepage/homepage'; // Adjust the import path as necessary
import {Login} from './components/login/login'; // Adjust the import path as necessary
// Import other components you want to route to
import resets from './resets.module.css'; // Import the resets.css file
interface Props {
  className?: string;
}
function App() {
  return (
    <div className={`${resets.clapyResets}`}>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/login" element={<Login/>} />
      {/* Define other routes here */}
    </Routes>
    </div>
  );
}

export default App;