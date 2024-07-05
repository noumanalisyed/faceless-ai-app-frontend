import { Routes, Route } from 'react-router-dom';
import {Homepage} from './components/homepage/homepage'; // Adjust the import path as necessary
import {Login} from './components/login/login'; // Adjust the import path as necessary
import resets from './resets.module.css'; // Import the resets.css file
import { Dashboard } from './components/dashboard/Dashboard';
import { FakeText } from './components/fake text promt/FakeText';
import { AIstory } from './components/AI story/AIstory';
interface Props {
  className?: string;
}
function App() {
  return (
    <div className={`${resets.clapyResets}`}>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/FakeText" element={<FakeText/>} />
      <Route path="/AIstory" element={<AIstory/>} />
      {/* Define other routes here */}
    </Routes>
    </div>
  );
}

export default App;