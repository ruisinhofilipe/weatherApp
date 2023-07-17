const Header = ({ inputRef, changeLocationValue }) => {
  return (
    <header>
      <input type="text" placeholder="Search location" ref={inputRef} />
      <button onClick={changeLocationValue}>Search</button>
    </header>
  );
};

export default Header;
