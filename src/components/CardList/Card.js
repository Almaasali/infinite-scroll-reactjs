import { CharacterCardWrapper } from "./CharacterCardWrapper";
import { ContentWrapper } from "./ContentWrapper";
import { ImageWrapper } from "./ImageWrapper";
import NavLink from "../../commons/NavLink";
import { SectionContent } from "./SectionContent";
import { inject, observer } from "mobx-react";
import { Suspense, lazy } from "react";
import { VscLoading } from "react-icons/vsc";
import Content from "./Content";

const Image = lazy(() => import("./Image"));

const Card = ({ card, characterStore }) => {
  const handleOnClickCharacter = (e, id) => {
    localStorage.setItem("characterId", card.id);
  };

  return (
    <CharacterCardWrapper>
      <ImageWrapper>
        <Suspense fallback={<VscLoading style={{ margin: "0 auto" }} />}>
          <Image image={card.image} />
        </Suspense>
      </ImageWrapper>
      <ContentWrapper>
        <SectionContent header>
          <NavLink
            to={`/${card.id}`}
            onClick={(e) => handleOnClickCharacter(e, card.id)}
            text={card.name}
            header="true"
          />
          <Content
            hasIcon
            header
            text={`${card.status} - ${card.species}`}
            isalive={card.status}
          />
        </SectionContent>

        <SectionContent location>
          <Content location text="Last known location:" />
          <NavLink
            isExternal
            to={
              card.location.name !== "unknown" ? card.location.url : undefined
            }
            unknown={card.location.name === "unknown" ? true : false}
            text={card.location.name}
          />
        </SectionContent>
        <SectionContent location>
          <Content location text="First seen in:" />
          <NavLink
            isExternal
            to={card.origin.name !== "unknown" ? card.origin.url : undefined}
            unknown={card.origin.name === "unknown" ? true : false}
            text={card.origin.name}
          />
        </SectionContent>
      </ContentWrapper>
    </CharacterCardWrapper>
  );
};

export default inject("characterStore")(observer(Card));
