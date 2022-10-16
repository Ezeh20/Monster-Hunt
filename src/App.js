import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/HeaderComponent/header-component";
import CardList from "./Components/CardListComponent/cardlist-component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((filtered) =>
      filtered.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const searchChange = (e) => {
    let searchString = e.target.value.toLowerCase();
    setSearchField(searchString);
  };

  return (
    <div className="App">
      <Header search={searchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
