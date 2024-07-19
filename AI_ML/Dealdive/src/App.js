import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Cetogery from './components/Cetogery';
import Navbar from './components/Navbar';
import Suggestion from './components/Suggestion';
import Dproduct from './components/dproduct';
import Cproduct from './components/cproduct';
import Footer from './components/footer';
import Product from './components/Product';
import Items from './components/Items';
import Buynow from './components/Buynow';
import Orders from './components/Orders';
import Chatarea from './components/Chatarea.js';
import Scan from './components/Scan.js';
import SearchResults from './components/SearchResults.js';


function App() {
  return (
    
    <Router>

        <Switch>
            <Route exact path="/">
                <Navbar name="dealdive"/>
                <Cetogery/>
                <Suggestion/>
                <Dproduct/>
                <Cproduct/>
                <Footer/>
            </Route>
            <Route exact path="/productpage/:slug" render={({match})=>{
              return(
                <>
                    <Navbar name="dealdive"/>
                    <Product slug={match.params.slug}/>
                    <Footer/>
                </>
              )
            }}
            />
            <Route exact path="/cart">
                <Navbar name="dealdive"/>
                <Items/>
                <Buynow/>
            </Route>

            <Route exact path="/orders">
                <Navbar name="dealdive"/>
                <Orders/>
            </Route>

            <Route exact path="/chatbot">
                <Chatarea/>
            </Route>

            <Route exact path="/scan">
                <Scan/>
            </Route>

            <Route exact path="/search">
              <Navbar name="dealdive" />
              <SearchResults />
            </Route>
            
            <Route exact path="/recommended">
              <Navbar name="dealdive" />
              <RecommendedProducts />
            </Route>

        </Switch>
    </Router>

    
  );
}

export default App;
