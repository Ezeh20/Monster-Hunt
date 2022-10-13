import { Component } from "react";
import SearchBar from "../SearchBarComponent/searchbar-component";

class Header extends Component{

    render(){
        return(
            <div>
                <header className="header">
                    <nav className="nav-nav">
                      <h1 className="logo"><span className="fir">M</span>on-<span className="fir">H</span>unt</h1>
                      <div className="nav-list">
                        <ul className="nav-li">
                            <li className="list">some-nav</li>
                            <li className="list">some-nav</li>
                            <li className="list">some-nav</li>
                            <li className="list">some-nav</li>
                        </ul>
                      </div>
                      <SearchBar />
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header