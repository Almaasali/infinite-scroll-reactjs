import { Wrapper } from "../components/Wrapper/Wrapper";
import { Title } from "../components/Wrapper/Title";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Loading from "../commons/Loading";

const CardList = lazy(() => import("../components/CardList"));

const Home = ({ characterStore }) => {
  useEffect(() => {
    // using this  for detected the bottom of page and fetch more data from server
    window.onscroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        const currentPage = characterStore.currentPage;
        characterStore.setPage(currentPage + 1);
        characterStore.setIsFetching(true);
      }
    };
  });

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Wrapper>
          <Title>The Rick and Morty API</Title>
          <CardList cards={characterStore.allCharacters}></CardList>
        </Wrapper>
        {characterStore.fetching && <Loading />}
      </Suspense>
    </>
  );
};

export default inject("characterStore")(withRouter(observer(Home)));
