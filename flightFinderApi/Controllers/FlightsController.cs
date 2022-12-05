using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using flightFinderApi.Models;

namespace flightFinderApi.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class FlightsController : ControllerBase
    {
        private readonly FlightContext _context;

        public FlightsController(FlightContext context)
        {
            _context = context;
        }

        // GET: Flights
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var flights = await _context.Flights
                .Include(f => f.Itineraries)
                .ThenInclude(i => i.Prices)
                .ToListAsync();
            return Ok(flights);
        }

        // GET: Flights/GetById/5
        [HttpGet]
        public async Task<IActionResult> GetById(string id)
        {
            if (id == null || _context.Flights == null)
            {
                return NotFound();
            }

            var flight = await _context.Flights
                .Include(f => f.Itineraries)
                .ThenInclude(i => i.Prices)
                .FirstOrDefaultAsync(m => m.FlightId == id);
            if (flight == null)
            {
                return NotFound();
            }

            return Ok(flight);
        }

        // GET: Flights/Details/5
        [HttpGet]
        public async Task<IActionResult> GetFilteredList(string departureDestination, string arrivalDestination, string departureAt, string? returnAt, int numberOfAdults, int numberOfChildren)
        {
            if (departureDestination == null ||
                arrivalDestination == null ||
                departureAt == null ||
                numberOfAdults == 0 ||
                numberOfChildren == 0 ||
                _context.Flights == null)
            {
                return NotFound();
            }

            var flight = await _context.Flights
                .Where(f => f.DepartureDestination == departureDestination)
                .Where(f => f.ArrivalDestination == arrivalDestination)
                .Include(f => f.Itineraries
                    .Where(i => DateTime.Parse(departureAt) == i.DepartureAt.Date ||
                                DateTime.Parse(returnAt) == i.DepartureAt.Date)
                    .Where(i => i.AvailableSeats >= numberOfAdults + numberOfChildren))
                .ThenInclude(i => i.Prices)
                .ToListAsync();
            if (flight == null)
            {
                return NotFound();
            }

            return Ok(flight);
        }

        // POST: Flights/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("FlightsId,DepartureDestination,ArrivalDestination")] Flight flight)
        {
            if (ModelState.IsValid)
            {
                _context.Add(flight);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return Ok(flight);
        }

        // POST: Flights/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPut]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("FlightsId,DepartureDestination,ArrivalDestination")] Flight flight)
        {
            if (id != flight.FlightId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(flight);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!FlightsExists(flight.FlightId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return Ok(flight);
        }

        // GET: Flights/Delete/5
        [HttpDelete]
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null || _context.Flights == null)
            {
                return NotFound();
            }

            var flight = await _context.Flights
                .FirstOrDefaultAsync(m => m.FlightId == id);
            if (flight == null)
            {
                return NotFound();
            }

            return Ok(flight);
        }

        // POST: Flights/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            if (_context.Flights == null)
            {
                return Problem("Entity set 'FlightsContext.Flights'  is null.");
            }
            var flight = await _context.Flights.FindAsync(id);
            if (flight != null)
            {
                _context.Flights.Remove(flight);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool FlightsExists(string id)
        {
          return _context.Flights.Any(e => e.FlightId == id);
        }
    }
}
