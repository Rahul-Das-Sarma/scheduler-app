import React, { useState } from "react";
import "./addschedules.css";

function AddSchedules() {
  const [task, setTask] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
    const [EndDate, setEndDate] = useState("");
  const [EndTime, setEndTime] = useState("");

  const gapi = window.gapi;
  const ClientID = process.env.REACT_APP_CLIENT_ID;
  const ApiKey = process.env.RREACT_APP_API_KEY;
  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  const SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const handleTaskChange = (e) => {
    setTask(e.target.value);
    console.log(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    console.log(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
    console.log(e.target.value);
  };
    const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    console.log(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    setTask("");
    setStartDate("");
    setEndDate("");
    setStartTime("");
    setEndTime("");
    gapi.load("client:auth2", () => {
      console.log("loaded client");

      gapi.client.init({
        apiKey: ApiKey,
        clientId: ClientID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3", () => console.log("working!"));

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          const event = {
            summary: task,
            location: "India",
            description: task,
            start: {
              dateTime: startDate+"T"+startTime,
              timeZone: "Indian/Chagos",
            },
            end: {
              dateTime: EndDate+"T"+EndTime,
              timeZone: "Indian/Chagos",
            },
            recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
            attendees: [
              { email: "lpage@example.com" },
              { email: "sbrin@example.com" },
            ],
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "popup", minutes: 10 },
              ],
            },
          };

          const request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });

          request.execute((event) => {
            console.log(event);
            window.open(event.htmlLink);
          });

        });
    });
  };
  return (
    <div className="Schedule_container">
      <div className="card-container">
        <h2> Your Important Tasks </h2>
        <input
          type="text"
          className="inp"
          onChange={handleTaskChange}
          value={task}
          placeholder="Enter your Task"
        />
        <label>Start Date</label>
        <input
          type="text"
          className="inp"
          onChange={handleStartDateChange}
          value={startDate}
          placeholder="Enter date 2021-1-1 "
        />
        <input
          type="text"
          className="inp"
          onChange={handleStartTimeChange}
          value={startTime}
          placeholder="Enter time 24hr format i.e 9:00:00"
        />
          <label>End Date</label>
        <input
          type="text"
          className="inp"
          onChange={handleEndDateChange}
          value={EndDate}
          placeholder="Enter date 2021-1-1 "
        />
        <input
          type="text"
          className="inp"
          onChange={handleEndTimeChange}
          value={EndTime}
          placeholder="Enter time 24hr format i.e 9:00:00"
        />
        <button className="btn btn_primary" onClick={handleClick}>
          {" "}
          Submit{" "}
        </button>
      </div>
    </div>
  );
}

export default AddSchedules;
