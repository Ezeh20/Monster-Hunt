import { Component } from "react";
import Card from "../Cards/cards-component";


class CardList extends Component{
   
    render(){
        const {monsters} = this.props 
        return(
            <div>
                {monsters.map((monster) => { return( 
                 <Card />
                )})}
            </div>
            
        )
    }
}

export default CardList