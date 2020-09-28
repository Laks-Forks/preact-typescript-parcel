import {FunctionalComponent,h} from 'preact';
import './style.css';

const Navbar: FunctionalComponent = () =>{
    return(
        <div>
            <ul class="navbar">
                <li>
                    <a href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/profile">
                        Profile
                    </a>
                </li>
                <li>
                    <a href="/profile/John Doe">
                        Profile John Doe
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;