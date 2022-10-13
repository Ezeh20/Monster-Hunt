import { Component } from "react";
import './cards-component.css'

class Card extends Component{

    render(){
        const {monster} = this.props
        const {name, email} = monster
       
        return(
            <div className="cards">
                <img  alt={`monsters`} src={`https://robohash.org/${monster.id}?set=set2&size=200x200`}/>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card