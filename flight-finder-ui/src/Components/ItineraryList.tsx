import moment from 'moment';
import ItineraryCard from './ItineraryCard';

interface ItineraryListProps {
  flightList: Flight[];
  isOneWayTrip: boolean;
  departureAt: Date;
  returnAt: Date;
  isSearched: boolean;
}


const ItineraryList = ({ flightList, isOneWayTrip, departureAt, returnAt, isSearched }: ItineraryListProps) => {

  return (
    <>
      {isSearched &&
        <div>
          <div className="list-header rounded shadow-lg">
            <p className="h-dark-title">Outbound: {moment(departureAt).format('LL')}</p>
          </div>
          <div className="list-header rounded shadow-lg">
            {flightList
              .map(flight => (flight.itineraries
                // .filter(i => i.departureAt == departureAt)
                .map(itinerary =>
                  <ItineraryCard flight={flight} itinerary={itinerary} />
                )))}
          </div>
        </div>
      }
      {isSearched && !isOneWayTrip &&
        <div>
          <div className="list-header rounded shadow-lg">
            <p className="h-dark-title">Return: {moment(returnAt).format('LL')}</p>
          </div>
          <div className="list-header rounded shadow-lg">
            {flightList.map(flight => (flight.itineraries.map(itinerary =>
              <ItineraryCard flight={flight} itinerary={itinerary} />
            )))}
          </div>
        </div>
      }
    </>
  )
}

export default ItineraryList