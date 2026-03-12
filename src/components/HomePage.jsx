import '../index.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Pbody from './Pbody';
import Footer from './Footer';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Pbody />
      <Footer />
    </div>
  );
};

export default App;   
