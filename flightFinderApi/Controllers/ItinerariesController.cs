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
    public class ItinerariesController : ControllerBase
    {
        private readonly FlightContext _context;

        public ItinerariesController(FlightContext context)
        {
            _context = context;
        }

        // GET: Itineraries
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var itineraries = await _context.Itineraries
                .Include(i => i.Prices)
                .ToListAsync();
            return Ok(itineraries);
        }

        // GET: Itineraries/GetById/5
        [HttpGet]
        public async Task<IActionResult> GetById(int id)
        {
            if (id == null || _context.Itineraries == null)
            {
                return NotFound();
            }

            var itinerary = await _context.Itineraries
                .Include(i => i.Prices)
                .FirstOrDefaultAsync(i => i.ItineraryId == id);
            if (itinerary == null)
            {
                return NotFound();
            }

            return Ok(itinerary);
        }

        // POST: Itineraries/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<IActionResult> Create(Itinerary itinerary)
        {
            if (ModelState.IsValid)
            {
                _context.Add(itinerary);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return Ok(itinerary);
        }

        // POST: Itineraries/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPut]
        public async Task<IActionResult> Edit(Itinerary itinerary)
        {
            if (!ItineraryExists(itinerary.ItineraryId))
            {
                return NotFound();
            }

            _context.Itineraries.Update(itinerary);
            await _context.SaveChangesAsync();

            return Ok(itinerary);
        }

        // GET: Itineraries/Delete/5
        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            if (id == null || _context.Itineraries == null)
            {
                return NotFound();
            }

            var itinerary = await _context.Itineraries
                .FirstOrDefaultAsync(i => i.ItineraryId == id);
            if (itinerary == null)
            {
                return NotFound();
            }

            return Ok(itinerary);
        }

        // POST: Itineraries/Delete/5
        [HttpPost, ActionName("Delete")]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Itineraries == null)
            {
                return Problem("Entity set 'FlightContext.Itineraries' is null.");
            }
            var itinerary = await _context.Itineraries.FindAsync(id);
            if (itinerary != null)
            {
                _context.Itineraries.Remove(itinerary);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ItineraryExists(int id)
        {
            return _context.Itineraries.Any(i => i.ItineraryId == id);
        }
    }
}
