import React, { useMemo, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import "./table.css";

import Search from "./Search";

const ResponsiveContainer = styled.div`
  overflow-y: ${(props) => (props.allowOverflow ? "auto" : "scroll")};
  height: ${(props) => (props.allowOverflow ? "auto" : "90vh")};
`;

const IntentTable = ({
  title,
  data,
  showSearch,
  perPage = 5,
  allowOverflow = true,
}) => {
  let whitespaceRows = [];

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
                whitespaceRows.push(y);
                let temp = [];
                // Iterate over the array of objects
                x[y].map((i) => {
                  for (let j in i) {
                    // Return `key - value` pair
                    temp.push(`${j} - ${i[j]}\n`);
                  }
                  temp.push("\n");
                });
                tempObj[y] = temp.slice(0, -1).join("");
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

  let columns = useMemo(() => {
    let header = [];
    data.headings.map((x) => {
      header.push({
        text: x.title,
        dataField: x.id,
        sort: true,
        style: whitespaceRows.includes(x.id)
          ? {
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              width: "25%",
            }
          : "",
        sortFunc: (a, b, order, dataField) => {
          if (dataField === "col1") {
            return order === "asc" ? a - b : b - a;
          } else {
            return a.localeCompare(b);
          }
        },
      });
    });
    return header;
  });

  const defaultSorted = [
    {
      dataField: "col1",
      order: "asc",
    },
  ];

  const pagination = paginationFactory({
    sizePerPage: perPage,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true,
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
          className="btn btn-primary float-right my-1 p-2"
        >
          Maximize
        </Link>
      )}
      <ResponsiveContainer
        className="table-responsive"
        allowOverflow={allowOverflow ? true : false}
      >
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
      </ResponsiveContainer>
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
