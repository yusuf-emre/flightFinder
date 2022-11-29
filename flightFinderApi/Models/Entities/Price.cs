using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace flightFinderApi.Models
{
    public class Price
    {
        [Key]
        [JsonIgnore]
        public int PriceId { get; set; }
        [JsonProperty("currency")]
        public string Currency { get; set; }
        [JsonProperty("adult")]
        public int AdultPrice { get; set; }
        [JsonProperty("child")]
        public int ChildPrice { get; set; }

        // public Price(int id, string currency, int adultPrice, int childPrice)
        // {
        //     Id = id;
        //     Currency = currency;
        //     AdultPrice = adultPrice;
        //     ChildPrice = childPrice;
        // }

    }
}