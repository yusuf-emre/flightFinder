import moment from 'moment';
import ItineraryCard from './ItineraryCard';

interface ItineraryListProps {
  flightList: Flight[];
  isOneWayTrip: boolean;
  departureAt: Date;
  returnAt: Date;
  isSearched: boolean;
  departureDestination: string;
  arrivalDestination: string;
}


const ItineraryList = ({ flightList, isOneWayTrip, departureAt, returnAt, isSearched, departureDestination, arrivalDestination }: ItineraryListProps) => {

  return (
    <>
      {isSearched &&
        <div>
          <div className="list-header rounded shadow-lg">
            <p className="h-dark-title">Outbound: {moment(departureAt).format('LL')}</p>
          </div>
          <div className="list-header rounded shadow-lg">
            {flightList
              .filter(f => f.departureDestination === departureDestination)
              .map(flight => flight.itineraries
                .filter(i => new Date(i.departureAt).toDateString() === new Date(departureAt).toDateString())
                .map(itinerary =>
                  <ItineraryCard flight={flight} itinerary={itinerary} />
                ))}
          </div>
        </div>
      }
      {isSearched && !isOneWayTrip &&
        <div>
          <div className="list-header rounded shadow-lg">
            <p className="h-dark-title">Return: {moment(returnAt).format('LL')}</p>
          </div>
          <div className="list-header rounded shadow-lg">
            {flightList
              .filter(f => f.departureDestination === arrivalDestination)
              .map(flight => flight.itineraries
                .filter(i => new Date(i.departureAt).toDateString() === new Date(returnAt).toDateString())
                .map(itinerary =>
                  <ItineraryCard flight={flight} itinerary={itinerary} />
                ))}
          </div>
        </div>
      }
    </>
  )
}

export default ItineraryList