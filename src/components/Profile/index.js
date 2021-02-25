import NavLink from "../../commons/NavLink";
import Content from "../CardList/Content";
import { ContentWrapper } from "../CardList/ContentWrapper";
import Image from "../CardList/Image";
import { SectionContent } from "../CardList/SectionContent";
import { Title } from "../Wrapper/Title";
import { Wrapper } from "../Wrapper/Wrapper";

const ProfileContainer = ({ currentCharacter }) => {
  return (
    <Wrapper>
      <Image
        style={{ borderRadius: "5px", width: "auto" }}
        image={currentCharacter.image}
      />
      <ContentWrapper>
        <SectionContent header>
          <NavLink
            isExternal
            to={currentCharacter.url}
            text={currentCharacter.name}
            header="true"
          />
          <Content
            hasIcon
            header
            text={`${currentCharacter.status} - ${currentCharacter.species}`}
            isalive={currentCharacter.status}
          />
        </SectionContent>
        <SectionContent location>
          <Content location text="Last known location:" />
          <NavLink
            isExternal
            to={
              currentCharacter.location.name !== "unknown"
                ? currentCharacter.location.url
                : undefined
            }
            unknown={
              currentCharacter.location.name === "unknown" ? true : false
            }
            text={currentCharacter.location.name}
          />
        </SectionContent>
        <SectionContent location>
          <Content location text="First seen in:" />
          <NavLink
            isExternal
            to={
              currentCharacter.origin.name !== "unknown"
                ? currentCharacter.origin.url
                : undefined
            }
            unknown={currentCharacter.origin.name === "unknown" ? true : false}
            text={currentCharacter.origin.name}
          />
        </SectionContent>
      </ContentWrapper>
      <SectionContent>
        <Title>Eposides: </Title>
        {currentCharacter.episode.map((u, i) => (
          // <a key={i} href={u}>
          //   <h2>{`episode - ${i + 1}`}</h2>
          // </a>
          <NavLink key={i} isExternal text={`episode - ${i + 1}`} />
        ))}
      </SectionContent>
    </Wrapper>
  );
};

export default ProfileContainer;
