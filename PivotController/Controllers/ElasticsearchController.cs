using Microsoft.AspNetCore.Mvc;
using Nest;
using Newtonsoft.Json;

namespace PivotController.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ElasticsearchController : ControllerBase
    {
        [HttpGet(Name = "GetElasticSearchData")]
        public object Get()
        {
            return JsonConvert.SerializeObject(FetchElasticsearchData());
        }

        private static object FetchElasticsearchData()
        {
            var connectionString = "https://olap.flexmonster.com:9200";
            var uri = new Uri(connectionString);
            var connectionSettings = new ConnectionSettings(uri);
            var client = new ElasticClient(connectionSettings);            
            var searchResponse = client.Search<object>(s => s
                .Index("australian_weather")
                .Size(100)
            );
            return searchResponse.Documents;
        }
    }
}