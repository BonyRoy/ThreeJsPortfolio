import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Footer, Navbar } from "./components";
                  <Route path="/Books" element={<Books/>}/>
import { About, Contact, Home, Projects} from "./pages";
import Books from "../src/pages/Books";
import HandWritten from "../src/pages/HandWritten";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path="/Books" element={<Books/>}/>
                  <Route path="/HandWritten" element={<HandWritten/>}/>
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
