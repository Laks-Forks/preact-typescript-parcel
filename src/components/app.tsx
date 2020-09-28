import { Router,Route} from 'preact-router';

import Navbar from './navbar';
import Home from '../pages/home';
import Profile from '../pages/profile';
import NotFound from '../pages/notfound';
import { FunctionalComponent,h} from 'preact';
import "./style.css";

const App: FunctionalComponent = () =>{
    return(
        <div>
            <Navbar />
            <div class="content">
                <Router>
                    <Route path="/" component={Home} />
                    <Route path="/profile/" component={Profile} name="No Name" />
                    <Route path="/profile/:name" component={Profile} />
                    <NotFound default />
                </Router>
            </div>
        </div>
    );    
}

export default App;