using flightFinderApi.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace flightFinderApi.Data;

public static class SeedData
{
    public static void Initialize(IServiceProvider provider)
    {
        using (var context = new FlightContext(
                provider.GetRequiredService<DbContextOptions<FlightContext>>()))
        {
            // Look for any flights.
            if (context.Flights.Any())
            {
                return;
            }

            //get the json file from the wwwroot folder.
            var env = provider.GetRequiredService<IWebHostEnvironment>();
            var path = Path.Combine(env.ContentRootPath, "data.json");
            //read the json content and then deserialize it to object,
            var jsonString = System.IO.File.ReadAllText(path);
            if (jsonString != null)
            {
                var jsonFlights = JsonConvert.DeserializeObject<List<Flight>>(jsonString);
                
                if (jsonFlights != null)
                {
                    foreach(var flight in jsonFlights)
                    {
                        context.Flights.Add(flight); //insert the data to the database.
                        context.SaveChanges();
                    }
                }
            }

        }
    }
}