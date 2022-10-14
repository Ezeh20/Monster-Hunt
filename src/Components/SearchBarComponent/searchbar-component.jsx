import { Component } from "react";

import "./searchbar-component.css"

class SearchBar extends Component{

    render(){
        const {searchBar, holdplace} = this.props
        
        return(
            <div>
                <input className="input"
                type={`search`}
                onChange={(searchBar)}
                placeholder={holdplace}
                />
            </div>
        )
        
    }
}

export default SearchBar