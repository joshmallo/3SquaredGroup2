/* 
this function checks all the tiplocs and returns the ones that are active
*/


//for this example, we'll use CREWEMD

// function getActiveTiplocs(name, dateStart, dateEnd, headers) 
// {
//     fetch(`https://traindata-stag-api.railsmart.io/api/trains/tiploc/${name}/${dateStart} 00:00:00/${dateEnd} 23:59:59`, { headers: headers })
//      .then(res => res.json())
//      .then(data => {
//      if (data.length == 0)
//      {
//          console.log(`${name} is empty`)
//      }
//      else
//      {
//         console.log('active');

//      }
//      })
//  .catch(error => {
//  console.error('Error fetching data:', error);
//  });
// }

function getActiveTiplocs(file ,dateStart, dateEnd, headers) 
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
        console.log('active');

     }
     })
 .catch(error => {
 console.error('Error fetching data:', error);
 });
}

function returnWhatServicesPass(file ,dateStart, dateEnd, headers) 
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
        console.log('active');

     }
     })
 .catch(error => {
 console.error('Error fetching data:', error);
 });
}




module.exports =  {getActiveTiplocs}