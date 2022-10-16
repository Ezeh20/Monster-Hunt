import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/HeaderComponent/header-component';
import CardList from './Components/CardListComponent/cardlist-component';



const App = () =>{
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => { setMonsters(users) })
  },[])

  useEffect(() =>{
    const newFilteredMonsters = monsters.filter((filtered) => filtered.name.toLowerCase().includes(searchField.toLowerCase()))
    setFilteredMonsters(newFilteredMonsters)
  },[monsters, searchField])
  
  const searchChange = (e) =>{
    let searchString = e.target.value.toLowerCase()
    setSearchField(searchString)
  }

  return(
      <div className="App">
        <Header search={searchChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
  ); 
}
/**class App extends Component{
  constructor(){
    super();

    this.state ={
      monsters : [],
      searchField : ''
    }
  }

  searchChange = e =>{
    this.setState(() => {return (
     {searchField : e.target.value}
    )})
 }

  // This will return when the page is rendered
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => { this.setState(() => { return({ monsters : users})})})
  }

  render(){
    const {monsters, searchField} = this.state
    const filtered = monsters.filter((filter) => filter.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <Header search={this.searchChange}/>
        <CardList monsters = {filtered}/>
      </div>
    );
  }
}
**/
export default App;
