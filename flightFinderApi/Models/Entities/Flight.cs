using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace flightFinderApi.Models;

public class Flight
{
    [Key]
    [JsonProperty("flight_id")]
    public string FlightId { get; set; }
    [JsonProperty("depatureDestination")]
    public string DepartureDestination { get; set; }
    [JsonProperty("arrivalDestination")]
    public string ArrivalDestination { get; set; }
    [JsonProperty("itineraries")]
    public List<Itinerary> Itineraries { get; set; }

    // public Flight(string id, string departure, string arrival)
    // {
    //     FlightId = id;
    //     DepartureDestination = departure;
    //     ArrivalDestination = arrival;
    // }

}
