using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using flightFinderApi.Models;
using Newtonsoft.Json;

public class FlightContext : DbContext
{
    public FlightContext(DbContextOptions<FlightContext> options)
        : base(options)
    {
    }

    public DbSet<Flight> Flights { get; set; }
    public DbSet<Itinerary> Itineraries { get; set; }
    public DbSet<Price> Prices { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Flight>()
            .HasKey(f => f.FlightId);
        modelBuilder.Entity<Itinerary>()
            .HasKey(i => i.ItineraryId);
        modelBuilder.Entity<Price>()
            .HasKey(p => p.PriceId);
    }
}
