import { createSignal } from 'solid-js';
import { Router, Route, Routes } from '@solidjs/router';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </Router>
  );
};

export default App;