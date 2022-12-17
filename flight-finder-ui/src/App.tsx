import './App.css';
import ItineraryList from './Components/ItineraryList';
import SearchBox from "./Components/SearchBox";
import { useState } from 'react';
import PassengerList from './Components/PassengerList';
import ConfirmBook from './Components/ConfirmBook';

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

  const [outboundTrip, setOutboundTrip] = useState<Trip>({
    departureDestination: "",
    arrivalDestination: "",
    departureAt: new Date(),
    arriveAt: new Date(),
    durationHours: 0,
    adultPrice: 0,
    childPrice: 0,
    availableSeats: 0,
    isBooked: false,
  });
  const [returnTrip, setReturnTrip] = useState<Trip>({
    departureDestination: "",
    arrivalDestination: "",
    departureAt: new Date(),
    arriveAt: new Date(),
    durationHours: 0,
    adultPrice: 0,
    childPrice: 0,
    availableSeats: 0,
    isBooked: false,
  })

  const [passengerList, setPassengerList] = useState<Passenger[]>([]);
  const [showConfirmBook, setShowConfirmBook] = useState<boolean>(false);



  return (
    <div className="App">
      <SearchBox
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
        passengerList={passengerList}
        setPassengerList={setPassengerList}
      />
      <ItineraryList
        flightList={flightList}
        isOneWayTrip={isOneWayTrip}
        departureAt={departureAt}
        returnAt={returnAt}
        isSearched={isSearched}
        departureDestination={departureDestination}
        arrivalDestination={arrivalDestination}
        outboundTrip={outboundTrip}
        setOutboundTrip={setOutboundTrip}
        returnTrip={returnTrip}
        setReturnTrip={setReturnTrip}
      />
      <PassengerList
        isOneWayTrip={isOneWayTrip}
        outboundTrip={outboundTrip}
        returnTrip={returnTrip}
        passengerList={passengerList}
        setPassengerList={setPassengerList}
        setShowConfirmBook={setShowConfirmBook}
      />
      <ConfirmBook
        passengerList={passengerList}
        outboundTrip={outboundTrip}
        returnTrip={returnTrip}
        showConfirmBook={showConfirmBook}
        numberOfAdults={numberOfAdults}
        numberOfChildren={numberOfChildren}
        isOneWayTrip={isOneWayTrip}
      />
    </div>
  );
}

export default App;
