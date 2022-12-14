// import { Navigate } from "react-router-dom";

interface SearchBoxProps {
  isOneWayTrip: boolean;
  setIsOneWayTrip: (isOneWayTrip: boolean) => void;
  departureDestination: string;
  setDepartureDestination: (departureDestination: string) => void;
  arrivalDestination: string;
  setArrivalDestination: (arrivalDestination: string) => void;
  departureAt: Date;
  setDepartureAt: (departureAt: Date) => void;
  returnAt: Date;
  setReturnAt: (returnAt: Date) => void;
  numberOfAdults: number;
  setNumberOfAdults: (numberOfAdults: number) => void;
  numberOfChildren: number
  setNumberOfChildren: (numberOfChildren: number) => void;
  setFlightList: (flightList: Flight[]) => void;
  isSearched: boolean;
  setIsSearched: (isSearched: boolean) => void;
}

const SearchBox = ({
  isOneWayTrip,
  setIsOneWayTrip,
  departureDestination,
  setDepartureDestination,
  arrivalDestination,
  setArrivalDestination,
  departureAt,
  setDepartureAt,
  returnAt,
  setReturnAt,
  numberOfAdults,
  setNumberOfAdults,
  numberOfChildren,
  setNumberOfChildren,
  setFlightList,
  isSearched,
  setIsSearched
}: SearchBoxProps) => {

  const handleClick = () => {
    setIsSearched(true);
    const api = async () => {
      const data = await fetch(`https://localhost:7188/api/Flights/GetFilteredList?departureDestination=${departureDestination}&arrivalDestination=${arrivalDestination}&departureAt=${departureAt.toDateString()}&returnAt=${returnAt.toDateString()}&numberOfAdults=${numberOfAdults}&numberOfChildren=${numberOfChildren}`, {
        method: "GET"
      });
      const jsonData = await data.json();
      setFlightList(jsonData);
      window.location.href = "#outboundTrip"
    };
    api()
  }

  return (
    <>
      <div className="App">
        <div className="container rounded shadow-lg">
          <form action="">
            <div className="row">
              <div className={isOneWayTrip ? "col-md-3 mb-4" : "col-md-2 mb-4"} >
                <div className="form-control h-flex flex-row">
                  <p className="h-dark">From</p>
                  <select className="col-md-12 border-0 outline-none" onChange={(e) => setDepartureDestination(e.target.value)}>
                    <option value="" hidden selected>
                      {departureDestination}
                    </option>
                    <option value="Stockholm">Stockholm</option>
                    <option value="Oslo">Oslo</option>
                    <option value="Amsterdam">Amsterdam</option>
                  </select>
                </div>
              </div>
              <div className={isOneWayTrip ? "col-md-3 mb-4" : "col-md-2 mb-4"}>
                <div className="form-control h-flex flex-row">
                  <p className="h-dark">To</p>
                  <select className="col-md-12 border-0 outline-none" onChange={(e) => setArrivalDestination(e.target.value)}>
                    <option value="" hidden selected>
                      {arrivalDestination}
                    </option>
                    <option value="Stockholm">Stockholm</option>
                    <option value="Oslo">Oslo</option>
                    <option value="Amsterdam">Amsterdam</option>
                  </select>
                </div>
              </div>
              <div className="col-md-2 mb-4">
                <div className="form-control d-flex flex-column">
                  <p className="h-dark">Departure Date</p>
                  <input className="inputbox textmuted" type="date" onChange={(e) => setDepartureAt(new Date(e.target.value))} />
                </div>
              </div>
              <div className="col-md-2 mb-4" style={{
                display: isOneWayTrip ? "none" : "block",
              }}>
                <div className="form-control d-flex flex-column">
                  <p className="h-dark">Return Date</p>
                  <input className="inputbox textmuted " type="date" onChange={(e) => setReturnAt(new Date(e.target.value))} />
                </div>
              </div>
              <div className="col-md-2 mb-4">
                <div className="form-control d-flex flex-column">
                  <p className="h-dark">Adult(18+)</p>
                  <select className="border-0 outline-none" onChange={(e) => setNumberOfAdults(Number(e.target.value))}>
                    <option value="" hidden selected>
                      0
                    </option>
                    <option value="1">1</option> <option value="2">2</option>
                    <option value="3">3</option> <option value="3">4</option>
                  </select>
                </div>
              </div>
              <div className="col-md-2 mb-4">
                <div className="form-control d-flex flex-column">
                  <p className="h-dark">Children(0-17)</p>
                  <select className="border-0 outline-none" onChange={(e) => setNumberOfChildren(Number(e.target.value))}>
                    <option value="" hidden selected>
                      0
                    </option>
                    <option value="1">1</option> <option value="2">2</option>
                    <option value="3">3</option> <option value="4">4</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 pe-0 col-sm-12">
                  <div className="btn radio-btn mb-3">
                    <label className="radio">
                      <input type="radio" checked={isOneWayTrip} onClick={() => setIsOneWayTrip(true)} />
                      One way
                      <span></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-2 pe-0 col-sm-12">
                  <div className="btn radio-btn mb-3">
                    <label className="radio">
                      <input type="radio" checked={!isOneWayTrip} onClick={() => setIsOneWayTrip(false)} />
                      Return
                      <span></span>
                    </label>
                  </div>
                </div>
                <div
                  className="col-md-8 mb-2 btn btn-submit text-center"
                  onClick={handleClick}
                >
                  Find Flights
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBox;