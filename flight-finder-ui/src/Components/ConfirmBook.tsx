import moment from "moment";
import Swal from "sweetalert2";

interface ConfirmBookProps {
  passengerList: Passenger[];
  showConfirmBook: boolean;
  outboundTrip: Trip;
  returnTrip: Trip;
  numberOfAdults: number;
  numberOfChildren: number;
  isOneWayTrip: boolean;
}

const ConfirmBook = ({
  passengerList,
  outboundTrip,
  returnTrip,
  showConfirmBook,
  numberOfAdults,
  numberOfChildren,
  isOneWayTrip
}: ConfirmBookProps) => {

  const handleClick = () => {
    Swal.fire({
      icon: "success",
      title:
        "Your booking is successful!",
      showConfirmButton: true,
    })
  }

  return (
    <>
      {showConfirmBook &&
        <div id="confirmBook">
          <div className="list-header rounded shadow-lg">
            <p className="h-dark-title">Booking information</p>
          </div>
          <div className="list-header rounded shadow-lg">
            <div className="mx-4 mb-4 fw-bold">
              Flight information
            </div>
            <div className="mx-4 h-flex row">
              <div className="col-md-4 mb-4">
                <p className="h-dark">Outbound</p>
                <p className="h-dark-text">
                  {outboundTrip.departureDestination} -&gt; {outboundTrip.arrivalDestination}
                </p>
                <p className="h-dark-text">
                  {moment(outboundTrip.departureAt).format('LLL')}
                </p>
                <p className="h-dark-text">
                  Duration: {outboundTrip.durationHours} hours
                </p>
                <p className="h-dark-text">
                  {numberOfAdults} Adults, {numberOfChildren} Children
                </p>
                <p className="h-dark-text">
                  SEK {outboundTrip.adultPrice * numberOfAdults + outboundTrip.childPrice * numberOfChildren}
                </p>
              </div>
              {!isOneWayTrip &&
                <div className="col-md-4 mb-4">
                  <p className="h-dark">Return</p>
                  <p className="h-dark-text">
                    {returnTrip.departureDestination} -&gt; {returnTrip.arrivalDestination}
                  </p>
                  <p className="h-dark-text">
                    {moment(returnTrip.departureAt).format('LLL')}
                  </p>
                  <p className="h-dark-text">
                    Duration: {outboundTrip.durationHours} hours
                  </p>
                  <p className="h-dark-text">
                    {numberOfAdults} Adults, {numberOfChildren} Children
                  </p>
                  <p className="h-dark-text">
                    SEK {returnTrip.adultPrice * numberOfAdults + returnTrip.childPrice * numberOfChildren}
                  </p>
                </div>
              }
            </div>
            <div className="mx-4 mb-4 fw-bold">
              Passenger information
            </div>
            <div className="mx-4 h-flex row">
              {passengerList.map(p =>
                <div className="col-md-4 mb-4">
                  <p className="h-dark">
                    {p.firstName} {p.lastName}
                  </p>
                  <p className="h-dark-text">
                    {p.mobile}
                  </p>
                  <p className="h-dark-text">
                    {p.email}
                  </p>
                  <p className="h-dark-text">
                    {p.guest}
                  </p>
                </div>
              )}
            </div>
            <div
							className="col-md-11 mb-2 ms-5 btn btn-submit text-center"
							onClick={handleClick}
						>
							Confirm your booking (Total payment: SEK {
                (outboundTrip.adultPrice * numberOfAdults 
                + outboundTrip.childPrice * numberOfChildren)
                + (!isOneWayTrip ? 
                  returnTrip.adultPrice * numberOfAdults 
                + returnTrip.childPrice * numberOfChildren : 0)
              })
						</div>
          </div>
        </div>
      }
    </>
  )
}

export default ConfirmBook