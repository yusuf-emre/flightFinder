export { };

declare global {
  type Flight = {
    flightId: string;
    departureDestination: string;
    arrivalDestination: string;
    itineraries: Itinerary[];
  };

  type Itinerary = {
    itineraryId: number;
    departureAt: Date;
    arriveAt: Date;
    availableSeats: number;
    prices: Price[];
  };

  type Price = {
    priceId: number;
    currency: string;
    adultPrice: number;
    childPrice: number;
  };
  
  interface UserSearchInfo{
    isOneWayTrip: boolean;
    departureDestination: string;
    arrivalDestination: string;
    departureAt: Date;
    returnAt: Date;
    numberOfAdults: number;
    numberOfChildren: number;
  }
  interface UserFlightInfo{
    outboundDepartureAt: Date;
    outboundArriveAt: Date;
    outBoundAdultPrice: number;
    outBoundChildPrice: number;
    outBoundAvailableSeats: number;
    returnDepartureAt: Date;
    returnArriveAt: Date;
    returnAdultPrice: number;
    returnChildPrice: number;
    returnAvailableSeats: number;    
  }
  interface PassengerInfo{
    isChild: boolean;
    firstName: string;
    lastName: string;
    isMale: boolean;
    mobile: number;
    email: string;
  }
}
