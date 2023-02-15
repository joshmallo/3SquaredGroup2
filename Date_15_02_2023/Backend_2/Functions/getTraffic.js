function findPassingJourneys(name, dateStart, dateEnd, headers, fs)
{
    fetch(`https://traindata-stag-api.railsmart.io/api/trains/tiploc/${name}/${dateStart} 00:00:00/${dateEnd} 23:59:59`, { headers: headers })
     .then(res => res.json())
     .then(data => {
     if (data.length == 0)
     {
         console.log(`${name} is empty`)
     }
     else
     {
         //fs.writeFileSync(`${name}.json`, JSON.stringify(data, null, 2), 'utf-8', {});
         for(let i = 0; i < data.length; i++)
         {
            console.log(data[i].originLocation)
            console.log(data[i].destinationLocation)
            console.log(data[i].originTiploc)
            console.log(data[i].destinationTiploc)
            console.log(data[i].activationId)
            console.log(data[i].scheduleId)
         }
         
     }


     })
 .catch(error => {
 console.error('Error fetching data:', error);
 });
}

module.exports = {findPassingJourneys};