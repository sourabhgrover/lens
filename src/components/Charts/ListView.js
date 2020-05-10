import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled(({ bg, border, ...rest }) => <div {...rest} />)`
  width: 100%;
  background-color: ${(props) => props.bg};
  border: 2px solid ${(props) => props.border};
  border-radius: 5px;
  margin-right: 1rem;
`;

const List = styled.div`
  margin-left: 1.5rem;
`;

const ListView = ({ title, bg, border, children }) => {
  return (
    <Container bg={bg} border={border}>
      <h4 className="text-center pt-3">{title}</h4>
      <hr />
      <List>{children}</List>
    </Container>
  );
};

ListView.propTypes = {
  title: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ListView;
