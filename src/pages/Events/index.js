// import logo from './logo.svg';
// import "./App.css";
import SideNavBar from "./components/SideNavBar";
import Events from "./components/Events";
import { useState } from "react";
import eventsData from "../../data/eventsData.json";
import "../../css/events.css";
function EventPage() {
  const countryEvents = eventsData;
  const [pageEvents, setPageEvnets] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const countries = Object.keys(countryEvents);
  const sideNavElements = [];

  for (let i in countries) {
    let temp = {
      data: countries[i],
      text:
        countryEvents[countries[i]].length > 0
          ? countries[i] + ` (${countryEvents[countries[i]].length})`
          : countries[i],
      // items: pageEvents[countries[i]].length,
    };
    sideNavElements.push(temp);
  }

  function selectCountry(e) {
    setSelectedCountry((prev) => e.target.getAttribute("data"));
    setPageEvnets(countryEvents[e.target.getAttribute("data")]);
    console.log("selected", pageEvents);
  }
  console.log(process.env.PUBLIC_URL);
  return (
    <div>
      <header>
        <div class="logo">
          <img src="/logo.png" alt="" />
        </div>
      </header>
      <h1>Explore our events</h1>
      <div class="page">
        <div class="sidebar sidebar-section">
          <ul class="nav">
            <SideNavBar
              countries={sideNavElements}
              selectCountry={selectCountry}
              selectedCountry={selectedCountry}
            ></SideNavBar>
          </ul>
        </div>
        <div class="event-section">
          <Events pageEvents={pageEvents}></Events>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
