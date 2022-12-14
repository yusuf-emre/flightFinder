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

  interface Trip{
    departureDestination: string;
    arrivalDestination: string;    
    departureAt: Date;
    arriveAt: Date;
    durationHours: number;
    adultPrice: number;
    childPrice: number;
    availableSeats: number;
    isBooked: boolean;
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
