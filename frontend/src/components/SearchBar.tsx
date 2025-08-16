import React from "react";
import { Input } from "./ui/input";

type SearchBarProps = {
  searchType: string;
  placeHolder: string;
};

const SearchBar = ({ searchType, placeHolder }: SearchBarProps) => {
  return (
    <div className="mb-3 h-12 w-full">
      <Input className="h-12 w-full" placeholder={placeHolder} />
    </div>
  );
};

export default SearchBar;
