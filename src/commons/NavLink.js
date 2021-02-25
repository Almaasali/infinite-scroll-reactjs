import styled from "styled-components";
import { Link } from "react-router-dom";

const Anchor = styled.a`
  text-decoration: none;
  cursor: ${(props) => !props.unknown && "pointer"};
`;

const RouterLink = styled(Link)`
  text-decoration: none;
  cursor: ${(props) => !props.unknown && "pointer"};
`;

const LinkText = styled.h2`
  font-size: ${(props) => (props.header ? "1.5rem" : "20px")};
  font-weight:${(props) => (props.header ? "bold" : "lighter")}
  color: rgb(245, 245, 245);
  text-decoration: none;
  
  ${(props) => !props.unknown && "&:hover{color:rgb(255, 152, 0)}"}
`;

const NavLink = (props) => {
  return props.isExternal ? (
    <Anchor href={props.to} target="_blank" {...props}>
      <LinkText
        header={props.header}
        unknown={props.unknown}
        onClick={props.onClick}
      >
        {props.text}
      </LinkText>
      {/* <Content status={props.status}>
        {props.hasIcon && <StatusIcon isalive={props.isalive}></StatusIcon>}
      </Content> */}
    </Anchor>
  ) : (
    <RouterLink to={props.to} target="_blank" {...props}>
      <LinkText status={props.status} onClick={props.onClick}>
        {props.text}
      </LinkText>
      {/* <Content status={props.status}>
        {props.hasIcon && <StatusIcon isalive={props.isalive}></StatusIcon>}
      </Content> */}
    </RouterLink>
  );
};

export default NavLink;
