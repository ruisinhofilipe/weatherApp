const Header = ({ inputRef, changeLocationValue }) => {
  return (
    <header>
      <input
        type="text"
        placeholder="Enter the name of the city"
        ref={inputRef}
      />
      <button onClick={changeLocationValue}>Search</button>
    </header>
  );
};

export default Header;
