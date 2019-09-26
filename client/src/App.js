import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Books from "./pages/SavedBooks";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import About from "./pages/About";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
    <div>
    <Wrapper>
      <Navbar />
      <Route exact path="/" component={About} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/about" component={About} />
      {/* <Route exact path="/saved" component={Books} /> */}
      <Footer />
      </Wrapper>
    </div>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
