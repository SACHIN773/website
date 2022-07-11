import axios from "axios";
import react, { Fragment, useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Date from "../../Components/General/Date";
import Navigationbar from "../../Components/General/Navigationbar";
const Activites = () => {
  const [collegeData, setCollegeData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [activitesData, setActivitiesData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [DisplayTable, setDisplayTable] = useState(false);
  const [actyId, setActyId] = useState(0);
  const [attndycnt, setAttndycnt] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/colleges?collegeId=${collegeId}`)
      .then((response) => {
        console.log(response.data[0].eventDetails);
        console.log(response.data[0].eventDetails);
        setCollegeData(response.data);
        setEventsData(response.data[0].eventDetails);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log("sunil",eventId);
  }, []);
  let collegeId = localStorage.getItem("collegeId");
  let eventId = localStorage.getItem("eventId");

  // setActivitiesData(
  //   eventsData
  //     .filter((e) => e.eventId == eventId)
  //     .map((e) =>e.activites)
  // );
  // console.log(activitesData);
  return (
    <Fragment>
      {/* <Navigationbar/> */}
      {/* {isLoaded &&
        eventsData
          .filter((e) => e.eventId == eventId)[0]
          .activities.map((e) => (
            <p>
              {e.activityName} {e.attendeesCount} {Date(e.dateOfActivity)}
            </p>
          ))} */}
      {/* // .map((e) => <p>ll</p>) */}
      {/* {isLoaded && <p>hello</p>} */}
      {isLoaded &&
        eventsData
          .filter((e) => e.eventId == eventId)
          .map((e, index) => (
            <h3 key={index} className="text-center text-success my-3">
              <u>{e.eventName}</u>
            </h3>
          ))}
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Activity Name</th>
            <th>Date</th>
            <th>No. of attendees</th>
          </tr>
        </thead>
        <tbody>
          {isLoaded &&
            eventsData
              .filter((e) => e.eventId == eventId)[0]
              .activities.map((e, index) => (
                <tr key={index}>
                  <td>{e.activityId}</td>
                  <td
                    onClick={() => {
                      setDisplayTable(true);
                      setActyId(e.activityId);
                      setAttndycnt(e.attendeesCount);
                    }}
                    style={{ cursor: "pointer" }}
                    className="text-capitalize"
                  >
                    {e.activityName}
                  </td>
                  <td>{Date(e.dateOfActivity)}</td>
                  <td>{e.attendeesCount}</td>
                </tr>
              ))}
          {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
      {DisplayTable && (
        <Table
          striped
          bordered
          hover
          variant="success"
          className="text-center mt-5 w-75 mx-auto"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Attendees Names</th>
              <th>Attendee assosoiates Names</th>
              <th>Total participants count</th>
            </tr>
          </thead>
          <tbody>
            {isLoaded &&
              eventsData
                .filter((e) => e.eventId == eventId)[0]
                .activities[actyId - 1].attendees.map((e, index) => {
                  return (
                    <tr key={index} className="text-capitalize">
                      <td>{e.attendeeId}</td>
                      <td>{e.attendeeName}</td>
                      <td>
                        {e.attendeeAssociate.map((e, index1) => (
                          <Fragment
                            key={index1}
                          >{`${e.associateName}, `}</Fragment>
                        ))}
                      </td>
                      <td>{e.attendeeAssociateCount + 1}</td>
                    </tr>
                  );
                })}
            {/* <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </Table>
      )}
    </Fragment>
  );
};
export default Activites;
