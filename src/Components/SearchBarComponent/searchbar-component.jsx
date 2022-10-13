import { Component } from "react";

import "./searchbar-component.css"

class SearchBar extends Component{

    render(){
        return(
            <div>
                <input className="input"
                type={`search`}
                />
            </div>
        )
    }
}

export default SearchBar