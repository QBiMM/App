using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelApp.Favorites
{
    public class CreateUpdateFavoriteDTO
    {
        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        public string Country { get; set; } = string.Empty;

        public string? ImageURL { get; set; } = string.Empty;

        public string Latitude { get; set; } = string.Empty;

        public string Longitude { get; set; } = string.Empty;

}
}
