import react, { memo } from "react";
import {
  Container,
  DropdownButton,
  Navbar,
  Dropdown,
  Nav,
  ButtonToolbar,
  InputGroup,
  Form,
} from "react-bootstrap";
import arrowdownshort from "./../../Images/svgs/arrowdownshort.svg";
import arrowupshort from "./../../Images/svgs/arrowupshort.svg";
const Navigationbar = ({
  colleges,
  set_Selected_Clg_Id,
  selected_Clg_Id,
  set_Selected_Clg_Name,
  selected_Clg_Name,
  set_Selected_Clg_Data,
  selected_Clg_Data,
  searchItems,
  setIsSortAsc,
  isSortAsc,
}) => {
  console.log(colleges);
  return (
    <Navbar bg="light" expand="lg" className="shadow border sticky-top">
      <Container fluid>
        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          menuVariant="dark"
          title={`${
            selected_Clg_Id === 0 ? "Select College" : selected_Clg_Name
          }`}
          className="mt-0"
        >
          {colleges.map((clg, index) => {
            return (
              <Dropdown.Item
                href="#"
                key={index}
                onClick={() => {
                  set_Selected_Clg_Id(clg.collegeId);
                  set_Selected_Clg_Name(clg.collegeName);
                  set_Selected_Clg_Data(clg);
                  localStorage.setItem('collegeId',clg.collegeId)
                }}
              >
                {clg.collegeName}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <ButtonToolbar
            className="m-2"
            aria-label="Toolbar with Button groups"
          >
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search Events..."
                aria-label="Search Events..."
                aria-describedby="btnGroupAddon"
                className="border-end-0"
                onChange={(e) => searchItems(e.target.value)}
                disabled={Boolean(+`${selected_Clg_Id === 0 ? 1 : 0}`)}
              />
              <InputGroup.Text
                id="btnGroupAddon"
                className="bg-white border-start-0 outline-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </InputGroup.Text>
            </InputGroup>
          </ButtonToolbar>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="light"
              className="btn btn-secondary m-2"
              disabled={Boolean(+`${selected_Clg_Id === 0 ? 1 : 0}`)}
            >
              Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu
              variant="light"
              style={{ minWidth: "0", marginTop: "-2px" }}
            >
              {["Name "].map((e, index) => {
                return (
                  <Dropdown.Item
                    href="#"
                    onClick={() => setIsSortAsc(!isSortAsc)}
                    value={e}
                    key={index}
                  >
                    {e}
                    {isSortAsc ? (
                      <img src={arrowdownshort} />
                    ) : (
                      <img src={arrowupshort} />
                    )}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default memo(Navigationbar);
