using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PivotTable.Models
{
    public class PivotData
    {
        public int Sold { get; set; }
        public double Amount { get; set; }
        public string Country { get; set; }
        public string Products { get; set; }
        public string Year { get; set; }
        public string Quarter { get; set; }
    }
}