import React from "react";
import { SocialIcon } from "react-social-icons";

const Team = () => {
  const sourav = <SocialIcon url="https://www.linkedin.com/in/dipkumardas/" />;
  const madhurima = <SocialIcon url="https://www.linkedin.com/in/dipkumardas" />;

  return (
    <div className="teamContainer">
      <h1>...Our Team Members...</h1>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Social Media</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vishal</td>
              <td>132324</td>
              <td>linkedin</td>
            </tr>
            <tr>
              <td>Dip</td>
              <td>7602975908</td>
              <td>{sourav}</td>
            </tr>
            <tr>
              <td>Abhishek</td>
              <td>132324</td>
              <td>linkedin</td>
            </tr>
            <tr>
              <td>Hritesh</td>
              <td>132324</td>
              <td>{madhurima}</td>
            </tr>
            <tr>
              <td>Ayan</td>
              <td>132324</td>
              <td>linkedin</td>
            </tr>
            <tr>
              <td>Rohan</td>
              <td>132324</td>
              <td>linkedin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Team;
