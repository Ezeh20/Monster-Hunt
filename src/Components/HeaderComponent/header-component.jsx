import SearchBar from "../SearchBarComponent/searchbar-component";

const Header = ({ search }) => (
    <div>
      <header className="header">
        <nav className="nav-nav">
          <h1 className="logo">
            <span className="fir">M</span>on-<span className="fir">H</span>unt
          </h1>
          <div className="nav-list">
            <ul className="nav-li">
              <li className="list">some-nav</li>
              <li className="list">some-nav</li>
              <li className="list">some-nav</li>
              <li className="list">some-nav</li>
            </ul>
          </div>
          <SearchBar searchBar={search} holdplace={`search monsters`} />
        </nav>
      </header>
    </div>
  );

export default Header;
