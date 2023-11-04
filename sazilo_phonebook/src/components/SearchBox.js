import { useState } from "react";
import { Searchbar } from "react-native-paper";

const SearchBox = ({ text,placeholder }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    console.log(query);
  };

  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{ borderRadius: 10 }}
    />
  );
};

export default SearchBox;
