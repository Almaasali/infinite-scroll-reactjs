import styled from "styled-components";

export const SectionContent = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: ${(props) =>
      props.first
        ? "flex-start"
        : (props) => (props.second ? "center" : "flex-end")}
    center;
`;
