import "./searchbar-component.css";

const SearchBar = ({ searchBar, holdplace }) => (
  <div>
    <input
      className="input"
      type={`search`}
      onChange={searchBar}
      placeholder={holdplace}
    />
  </div>
);

export default SearchBar;
