import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Table } from "reactstrap";

const TableHeadContainer = styled.thead`
  background-color: #462a50;
  color: #fff;
`;

const TableHead = styled.div`
  padding-top: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableHeadText = styled.p`
  text-align: center;
  margin-top: 0.25rem;
`;

const TableBodyContainer = styled.tbody`
  background-color: #4f355a;
  color: #fff;
`;

const IntentTable = (props) => {
  const { headings, data } = props.data;
  // console.log(headings, data);
  return (
    <div className="table-responsive-md mt-4">
      <Table bordered>
        <TableHeadContainer>
          <tr>
            {headings.map((heading) => {
              // Destructure the keys from object
              const { id, title, icon } = heading;
              // Check if icon exists.
              let image, isAvaiable;
              try {
                image = require(`../../images/${icon}`);
                isAvaiable = true;
              } catch {
                isAvaiable = false;
              }
              return (
                <th key={id}>
                  <TableHead>
                    {isAvaiable ? (
                      <img src={image} width="32px" alt="table head icon" />
                    ) : null}
                    <TableHeadText>{title}</TableHeadText>
                  </TableHead>
                </th>
              );
            })}
          </tr>
        </TableHeadContainer>
        <TableBodyContainer>
          {data.map((entry) => {
            // Iterate over the headings
            return (
              <tr key={entry["ID"]}>
                {Object.values(headings).map((heading) => {
                  // Extract title from heading

                  const { title } = heading;
                  // Using a switch statement for different
                  // heading types
                  switch (title) {
                    case "ID":
                      return (
                        <td style={{ width: "10px", textAlign: "center" }}>
                          {entry[title]}
                        </td>
                      );
                    case "Review":
                      return <td style={{ width: "360px" }}>{entry[title]}</td>;
                    case "Emotion":
                    case "Persona":
                      return <td style={{ width: "120px" }}>{entry[title]}</td>;
                    case "Tones":
                    case "Key Phrases":
                      return <td>{entry[title].join("\n")}</td>;
                    case "Intent By Sentences":
                      return (
                        <td
                          style={{
                            whiteSpace: "pre-line",
                            width: "320px",
                          }}
                        >
                          {entry[title].map((intent) => {
                            let intentData = [];
                            for (let prop in intent) {
                              intentData.push(`${prop} - ${intent[prop]}`);
                            }
                            intentData.push("\n");
                            return intentData.join("\n");
                          })}
                        </td>
                      );
                    case "Key Words":
                      return (
                        <td
                          style={{
                            whiteSpace: "pre-line",
                            width: "240px",
                          }}
                        >
                          {entry[title].map((keyword) => {
                            const { Keyword, score } = keyword;
                            return `${Keyword} - ${score}\n`;
                          })}
                        </td>
                      );
                    default:
                      return null;
                  }
                })}
              </tr>
            );
          })}
        </TableBodyContainer>
      </Table>
    </div>
  );
};

IntentTable.propTypes = {
  headings: PropTypes.object.isRequired,
  data: PropTypes.object,
};

export default IntentTable;
