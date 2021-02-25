import { inject, observer } from "mobx-react";
import { useEffect } from "react";
import Loading from "../commons/Loading";
import ProfileContainer from "../components/Profile";

const Character = ({ match, characterStore }) => {
  useEffect(() => {
    const id =
      Number(match.params.characterId) ||
      Number(localStorage.getItem("characterId"));
    // set the new id in localStorage
    localStorage.setItem("characterId", id);
    if (id !== null) {
      characterStore.loadCharacterById(id);
    }
  });
  return characterStore.currentCharacter ? (
    <ProfileContainer
      currentCharacter={characterStore.currentCharacter}
      match={match}
    />
  ) : (
    <Loading />
  );
};
export default inject("characterStore")(observer(Character));
