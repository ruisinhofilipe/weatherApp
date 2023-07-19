const Header = ({ inputRef, changeLocationValue }) => {
  return (
    <header>
      <h1>Weather App</h1>
      <article>
        <input type="text" placeholder="Search location" ref={inputRef} />
        <button onClick={changeLocationValue}>Search</button>
      </article>
    </header>
  );
};

export default Header;
