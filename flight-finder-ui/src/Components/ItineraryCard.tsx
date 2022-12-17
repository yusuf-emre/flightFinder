import moment from 'moment';
import { useState } from 'react'

interface FlightListProps {
  flight: Flight;
  itinerary: Itinerary;
  isOneWayTrip: boolean;
  outboundTrip: Trip;
  setOutboundTrip: (outboundTrip: Trip) => void;
  returnTrip: Trip;
  setReturnTrip: (returnTrip: Trip) => void;
  departureDestination: string;
}

const ItineraryCard = ({
  flight,
  itinerary,
  isOneWayTrip,
  outboundTrip,
  setOutboundTrip,
  returnTrip,
  setReturnTrip,
  departureDestination,
}: FlightListProps) => {

  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const trip = {
    departureDestination: flight.departureDestination,
    arrivalDestination: flight.arrivalDestination,
    departureAt: itinerary.departureAt,
    arriveAt: itinerary.arriveAt,
    durationHours: (new Date(itinerary.arriveAt).getTime() - new Date(itinerary.departureAt).getTime()) / (1000 * 60 * 60),
    adultPrice: itinerary.prices[0].adultPrice,
    childPrice: itinerary.prices[0].childPrice,
    availableSeats: itinerary.availableSeats,
    isBooked: true,
  }

  const handleBookClick = () => {
    if (flight.departureDestination === departureDestination) {
      setOutboundTrip(trip);
      setTimeout(() => {
        window.location.href = isOneWayTrip || returnTrip.isBooked ? "#passengerList" : "#returnTrip";
      }, 100);
    }
    else {
      setReturnTrip(trip);
      setTimeout(() => {
        window.location.href = outboundTrip.isBooked ? "#passengerList" : "#outboundTrip";
      }, 100);
    }
  }

  return (
    <>
      <div className="Card-Flight">
        <div className="container rounded shadow-lg">
          <div className="row">
            <div className={showMore ? "col-md-2" : "col-md-3"}>
              <div id="departureDestination" className="input-height form-control d-flex flex-column">
                <p className="h-dark">Departure</p>
                <p className="h-dark-text">
                  {moment(itinerary.departureAt).format('LLL')}
                </p>
                <p className="h-dark-text">
                {flight.departureDestination}
                </p>
              </div>
            </div>
            <div className={showMore ? "col-md-2" : "col-md-3"}>
              <div className="input-height form-control d-flex flex-column">
                <p className="h-dark">Arrival</p>
                <p className="h-dark-text">
                  {moment(itinerary.arriveAt).format('LLL')}
                </p>
                <p className="h-dark-text">
                  {flight.arrivalDestination}
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="input-height form-control d-flex flex-column">
                <p className="h-dark">Duration</p>
                <p className="h-dark-text">{(new Date(itinerary.arriveAt).getTime() - new Date(itinerary.departureAt).getTime()) / (1000 * 60 * 60)} hours</p>
              </div>
            </div>
            <div className={showMore ? "col-md-1" : "col-md-2"}>
              <div className="input-height form-control d-flex flex-column">
                <p className="h-dark">Adult</p>
                <p className="h-dark-text">{itinerary.prices[0].adultPrice} SEK</p>
              </div>
            </div>
            <div
              className="col-md-1"
              style={{
                display: showMore ? "block" : "none",
              }}
            >
              <div className="input-height form-control d-flex flex-column">
                <p className="h-dark">Child</p>
                <p className="h-dark-text">{itinerary.prices[0].childPrice} SEK</p>
              </div>
            </div>
            <div
              className="col-md-2"
              style={{
                display: showMore ? "block" : "none",
              }}
            >
              <div className="input-height form-control d-flex flex-column">
                <p className="h-dark">Available Seats</p>
                <p className="h-dark-text">{itinerary.availableSeats}</p>
              </div>
            </div>
            <div
              className="col-md-2 me-auto align-items-center"
              style={{
                display: showMore ? "none" : "block",
              }}
            >
              <div
                className="input-height btn btn-submit form-control text-center "
                onClick={handleShowMore}
              >
                More
              </div>
            </div>
            <div
              className="col-md-2 me-auto align-items-center"
              style={{
                display: showMore ? "block" : "none"
              }}
              onClick={handleBookClick}
            >
              <div
                className="input-height btn btn-submit form-control text-center "
              >
                Book
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItineraryCard