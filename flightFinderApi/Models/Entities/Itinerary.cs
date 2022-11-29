using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace flightFinderApi.Models
{
    public class Itinerary
    {
        [Key]
        [JsonIgnore]
        public int ItineraryId { get; set; }
        [JsonProperty("depatureAt")]
        public DateTime DepartureAt { get; set; }
        [JsonProperty("arriveAt")]
        public DateTime ArriveAt { get; set; }
        [JsonProperty("avaliableSeats")]
        public int AvailableSeats { get; set; }
        [JsonProperty("prices")]
        public List<Price> Prices { get; set; }

        // public Itinerary(int id, DateTime departureAt, DateTime arriveAt, int seats)
        // {
        //     Id = id;
        //     DepartureAt = departureAt;
        //     ArriveAt = arriveAt;
        //     AvailableSeats = seats;
        // }
    }
}