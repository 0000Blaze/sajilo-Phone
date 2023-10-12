import { useState } from "react";
import { Searchbar } from "react-native-paper";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    console.log(query);
  };

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{ borderRadius: 10 }}
    />
  );
};

export default SearchBox;
