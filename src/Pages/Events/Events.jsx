import axios from "axios";
import react, { Fragment, useEffect, useState } from "react";
import Eventcard from "../../Components/Events/Eventcard";
import Navigationbar from "../../Components/General/Navigationbar";
import Sort from "../../Components/General/Sort";

const Events = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/colleges")
      .then((response) => {
        console.log(response);
        set_Colleges(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => console.log("events component unmounted");
  }, []);
  const [selected_Clg_Id, set_Selected_Clg_Id] = useState(0);
  const [selected_Clg_Name, set_Selected_Clg_Name] = useState("");
  const [selected_Clg_Data, set_Selected_Clg_Data] = useState({});
  const [colleges, set_Colleges] = useState([]);
  const [isSortAsc, setIsSortAsc] = useState(true);

  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  console.log(selected_Clg_Id);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput.trim() !== "") {
      const filteredData = selected_Clg_Data.eventDetails.filter((item) => {
        return item.eventName
          .toLowerCase()
          .includes(searchInput.trim().toLowerCase());
      });
      setFilteredEvents(filteredData);
    } else {
      setFilteredEvents(selected_Clg_Data.eventDetails);
    }
  };
  return (
        <Fragment  >
      <Navigationbar
        colleges=  {colleges}
        selected_Clg_Id={selected_Clg_Id}
        selected_Clg_Name={selected_Clg_Name}
        set_Selected_Clg_Name={set_Selected_Clg_Name}
        set_Selected_Clg_Id={set_Selected_Clg_Id}
        set_Selected_Clg_Data={set_Selected_Clg_Data}
        selected_Clg_Data={selected_Clg_Data}
        searchItems={searchItems}
        setIsSortAsc={setIsSortAsc}
        isSortAsc={isSortAsc}
            />
      <div>
        {selected_Clg_Id != 0
          ? searchInput.length === 0
            ? Sort(selected_Clg_Data.eventDetails, isSortAsc).map(
                (Event, index) => (
                  <div key={index}>
                    <Eventcard Event={Event} />
                  </div>
                )
              )
            : Sort(filteredEvents, isSortAsc).map((Event, index) => (
                <div key={index}>
                  <Eventcard Event={Event} />
                </div>
              ))
          : ""}
      </div>
      <div>
        {selected_Clg_Id === 0 ? (
          <h1 style={{ textAlign: "center", marginTop: "5%", color: "green" }}>
            Please select a college
          </h1>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};
export default Events;
