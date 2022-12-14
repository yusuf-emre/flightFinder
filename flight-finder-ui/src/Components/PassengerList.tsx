import PassengerCard from './PassengerCard';

interface PassengerListProps {
  isOneWayTrip: boolean;
  outboundTrip: Trip;
  returnTrip: Trip;
  passengerList: Passenger[];
  setPassengerList: (passengerList: Passenger[]) => void;
  setShowConfirmBook: (showConfirmBook: boolean) => void;
}


const PassengerList = ({
  isOneWayTrip,
  outboundTrip,
  returnTrip,
  passengerList,
  setPassengerList,
  setShowConfirmBook
}: PassengerListProps) => {

  return (
    <>
      {((isOneWayTrip && outboundTrip.isBooked) || (!isOneWayTrip && outboundTrip.isBooked && returnTrip.isBooked)) &&
        <div id="passengerList">
          <div className="list-header rounded shadow-lg">
            <p className="h-dark-title">Passenger List</p>
          </div>
          <div className="list-header rounded shadow-lg">
            {passengerList
              .map((passenger, idx) =>
                <PassengerCard
                  idx={idx}
                  passenger={passenger}
                  passengerList={passengerList}
                  setPassengerList={setPassengerList}
                  setShowConfirmBook={setShowConfirmBook}
                />
              )}
          </div>
        </div>
      }
    </>
  )
}

export default PassengerList