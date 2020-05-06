import React, { useRef } from "react";
import PropTypes from "prop-types";
import { FormGroup, Input, Form, Button } from "reactstrap";

const Search = ({ onClear, onSearch }) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputRef.current.value);
  };
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormGroup className="d-flex w-100 justify-space-between">
        <Input innerRef={inputRef} type="text" placeholder="Search..." />{" "}
        <Button color="primary">Search</Button>
        <Button
          color="danger"
          onClick={() => {
            onClear();
            inputRef.current.value = "";
          }}
        >
          Clear
        </Button>
      </FormGroup>
    </Form>
  );
};

Search.propTypes = {
  searchCall: PropTypes.func.isRequired,
  onClear: PropTypes.func,
};

export default Search;
