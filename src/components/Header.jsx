const Header = ({ inputRef, displayInformation }) => {
  return (
    <header>
      <input
        type="text"
        placeholder="Enter the name of the city"
        ref={inputRef}
      />
      <button onClick={displayInformation}>Search</button>
    </header>
  );
};

export default Header;
