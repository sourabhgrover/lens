import React, { useMemo, Fragment } from "react";
import { useHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import "./table.css";

import Search from "./Search";

const IntentTable = ({ title, data, showSearch }) => {
  const history = useHistory();

  let columns = useMemo(() => {
    let header = [];
    data.headings.map((x) =>
      header.push({
        text: x.title,
        dataField: x.id,
        sort: true,
      })
    );
    return header;
  });
  let rows = useMemo(() => {
    let tableData = [];
    data.data.map((x) => {
      let tempObj = {};
      for (let y in x) {
        // Data manipulation using type of
        switch (typeof x[y]) {
          // Can be array/object
          case "object":
            switch (typeof x[y][0]) {
              // If nested object
              case "object":
                let temp = [];
                // Iterate over the array of objects
                x[y].map((i) => {
                  for (let j in i) {
                    // Return `key - value` pair
                    temp.push(`${j} - ${i[j]}\n`);
                  }
                });
                tempObj[y] = temp.join("\n");
                break;
              // Just an array of strings
              case "string":
                tempObj[y] = x[y].join("\n");
                break;
              default:
            }
            break;
          // Simple String
          case "string":
            tempObj[y] = x[y];
            break;
          default:
        }
      }
      return tableData.push(tempObj);
    });
    return tableData;
  });

  const defaultSorted = [
    {
      dataField: "col1",
      order: "asc",
    },
  ];

  const pagination = paginationFactory({
    sizePerPage: 10,
    hideSizePerPage: true,
    showTotal: true,
  });

  return (
    <Fragment>
      {showSearch ? (
        <h2 className="text-center mb-3">{title}</h2>
      ) : (
        <Link
          to={{
            pathname: "/table",
            state: {
              title,
              data,
              showSearch: true,
            },
          }}
          className="float-right my-1 p-1"
        >
          Read More
        </Link>
      )}
      <div className="table-responsive">
        <ToolkitProvider keyField="ID" data={rows} columns={columns} search>
          {(props) => {
            return (
              <Fragment>
                {showSearch ? <Search {...props.searchProps} /> : null}
                <BootstrapTable
                  {...props.baseProps}
                  bootstrap4
                  defaultSorted={defaultSorted}
                  pagination={pagination}
                  headerWrapperClasses="thead-style"
                  bodyClasses="tbody-style"
                />
              </Fragment>
            );
          }}
        </ToolkitProvider>
      </div>
    </Fragment>
  );
};

IntentTable.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
  showSearch: PropTypes.bool.isRequired,
};

IntentTable.defaultProps = {
  showSearch: false,
};

export default React.memo(IntentTable);
