import { Component } from "react";
import Card from "../Cards/cards-component";
import './cardlist-component.css'


class CardList extends Component{
   
    render(){
        const {monsters} = this.props 
        return(
            <div className="cad">
                <h1 className="heading">Monster Hunt</h1>
                <div className="cardList">
                   {monsters.map((monster) => { return( 
                   <Card  key={monster.id} monster={monster}/>
                   )})}
                </div>
            </div>
        )
    }
}

export default CardList