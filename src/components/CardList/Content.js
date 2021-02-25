import styled from "styled-components";
import { BsCircle } from "react-icons/bs";

const StatusIcon = styled(BsCircle)`
  background-color: ${(props) =>
    props.isalive === "Dead"
      ? "rgb(214, 61, 46)"
      : props.isalive === "Alive"
      ? "rgb(85, 204, 68)"
      : "rgb(158, 158, 158)"};
  height: 1rem;
  width: 1rem;
  margin-right: 0.375rem;
  border-radius: 50%;
`;

const ContentContainer = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-transform: ${(props) => (props.header ? "capitalize" : "normal")};
  color: ${(props) =>
    props.location ? "rgb(158, 158, 158) " : "rgb(245, 245, 245)"};
`;

const Content = (props) => {
  return (
    <ContentContainer>
      {props.hasIcon && (
        <StatusIcon isalive={props.isalive} location={props.location} />
      )}
      {props.text}
    </ContentContainer>
  );
};
export default Content;
