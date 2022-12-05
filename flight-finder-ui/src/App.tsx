import './App.css';
import ItineraryList from './Components/ItineraryList';
import Search from "./Components/SearchBox";
import React, { useState } from 'react';


function App() {
  const [flightList, setFlightList] = useState<Flight[]>([]);
  const [isSearched, setIsSearched] = useState(false)
  const [isOneWayTrip, setIsOneWayTrip] = useState<boolean>(true);
  const [departureDestination, setDepartureDestination] = useState<string>("Stockholm");
  const [arrivalDestination, setArrivalDestination] = useState<string>("Oslo");
  const [departureAt, setDepartureAt] = useState<Date>(new Date());
  const [returnAt, setReturnAt] = useState<Date>(new Date());
  const [numberOfAdults, setNumberOfAdults] = useState<number>(0);
  const [numberOfChildren, setNumberOfChildren] = useState<number>(0);
  // const [outboundDepartureAt, setOutboundDepartureAt] = useState<Date>();
  // const [outboundArriveAt, setOutboundArriveAt] = useState<Date>();
  // const [outboundAdultPrice, setOutboundAdultPrice] = useState<number>(0);
  // const [outboundChildPrice, setOutboundChildPrice] = useState<number>(0);
  // const [outboundAvailableSeats, setOutboundAvailableSeats] = useState<number>(0);
  // const [returnDepartureAt, setReturnDepartureAt] = useState<Date>();
  // const [returnArriveAt, setReturnArriveAt] = useState<Date>();
  // const [returnAdultPrice, setReturnAdultPrice] = useState<number>(0);
  // const [returnChildPrice, setReturnChildPrice] = useState<number>(0);
  // const [returnAvailableSeats, setReturnAvailableSeats] = useState<number>(0);
  // const [isChild, setIsChild] = useState<boolean>(false);
  // const [firstName, setFirstName] = useState<string>("");
  // const [lastName, setLastName] = useState<string>("");
  // const [isMale, setIsMale] = useState<boolean>();
  // const [mobile, setMobile] = useState<number>(0);
  // const [email, setEmail] = useState<string>("");

  return (
    <div className="App">
      <Search
        isOneWayTrip={isOneWayTrip}
        setIsOneWayTrip={setIsOneWayTrip}
        setDepartureDestination={setDepartureDestination}
        departureDestination={departureDestination}
        arrivalDestination={arrivalDestination}
        setArrivalDestination={setArrivalDestination}
        departureAt={departureAt}
        setDepartureAt={setDepartureAt}
        returnAt={returnAt}
        setReturnAt={setReturnAt}
        numberOfAdults={numberOfAdults}
        setNumberOfAdults={setNumberOfAdults}
        numberOfChildren={numberOfChildren}
        setNumberOfChildren={setNumberOfChildren}
        setFlightList={setFlightList}
        setIsSearched={setIsSearched}
      />
      <ItineraryList
        flightList={flightList}
        isOneWayTrip={isOneWayTrip}
        departureAt={departureAt}
        returnAt={returnAt}
        isSearched={isSearched}
      />
    </div>
  );
}

export default App;
