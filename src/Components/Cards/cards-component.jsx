import { Component } from "react";


class Card extends Component{

    render(){
        const {monster} = this.props
        const {name, email} = monster 
        return(
            <div>
                <img  alt={`monsters`} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card