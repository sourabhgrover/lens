import React, { Fragment, useEffect } from "react";
import { Container } from "reactstrap";
import Layout from "../Summary/Layout";
import IntentTable from "./IntentTable";

const Table = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Layout>
      <Container className="mt-4 pb-3" fluid>
        {props.location.state ? (
          <IntentTable
            {...props.location.state}
            perPage={50}
            allowOverflow={true}
          />
        ) : (
          <Fragment>
            <h3>
              Looks like you came to this page directly. Please use the `Read
              More` button above any table to return to this page with proper
              parameters
            </h3>
          </Fragment>
        )}
      </Container>
    </Layout>
  );
};

export default Table;
