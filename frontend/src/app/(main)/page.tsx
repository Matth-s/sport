import MainContainer from "@/components/MainContainer";
import SearchBar from "@/components/SearchBar";
import GroupList from "@/features/groups/GroupList";
import React from "react";

const HomePage = () => {
  return (
    <MainContainer>
      <SearchBar placeHolder="Rechercher des groupes ..." searchType="group" />
      <GroupList />
    </MainContainer>
  );
};

export default HomePage;
