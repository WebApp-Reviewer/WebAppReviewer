import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';

function MainDemo() {
  const isLoggedIn = true; // Replace with your authentication logic
  const isAdmin = true; // Replace with your admin authentication logic

  return (
    <div>
      <Routes>
        {/* Guest Routes */}
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default MainDemo;