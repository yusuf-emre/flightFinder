export { };

declare global {
  interface Flight{
    flightId: string;
    departureDestination: string;
    arrivalDestination: string;
    itineraries: Itinerary[];
  };

  interface Itinerary{
    itineraryId: number;
    departureAt: Date;
    arriveAt: Date;
    availableSeats: number;
    prices: Price[];
  };

  interface Price{
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
    itineraryId: number;
    priceId: number;
    availableSeats: number;
    isBooked: boolean;
  }

  interface Passenger{
    guest: string;
    firstName: string;
    lastName: string;
    gender: string;
    mobile: number;
    email: string;
  }
}
