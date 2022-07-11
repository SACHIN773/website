import react, { Fragment } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Date from "../General/Date";
import banner2 from "./../../Images/banner2.jpg";
const Eventcard = ({ Event }) => {
  return (
    <Fragment>
      <Col className="mt-4 w-50 mx-auto shadow rounded bg-white">
        <Card>
          <Card.Img variant="top" className=" mx-auto" src={banner2} />
          <Card.Body className="text-center pb-0">
            <Link
              to="/activities"
              className="text-decoration-none text-capitalize"
              onClick={() => {
                localStorage.setItem(`eventId`,Event.eventId)
              }}
            >
              <Card.Title>{Event.eventName}</Card.Title>
            </Link>
            <Card.Text>{Event.eventDescription}</Card.Text>
            <Card.Body className="text-center d-flex justify-content-center pb-0">
              <p className="mx-2">
                Number of Activities: {Event.activitiesCount}
              </p>
              <p className="mx-2">Number of Attendee: {Event.attendeeCount}</p>
              <p className="mx-2">
                Event Date: <strong>{Date(Event.dateOfEvent)}</strong>
              </p>
            </Card.Body>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};
export default Eventcard;
