import styled from "styled-components";

const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  margin: 0px;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  object-fit: cover;
  // background-image: url(${(props) => (props.image ? props.image : "")});
`;

const Image = (props) => {
  return <ImageContainer alt="" src={props.image} {...props} />;
};

export default Image;
