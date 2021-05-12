const SearchInput = () => (
  <form role="search">
    <input
      id="search"
      type="search"
      placeholder="Search"
      aria-label="search text"
      size={20}
    />
    <input type="submit" value="Search" />
  </form>
)

export default SearchInput
