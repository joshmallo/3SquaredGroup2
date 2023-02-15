function movements(activation, schedule, headers)
{
    fetch(`https://traindata-stag-api.railsmart.io/api/ifmtrains/movement/${activation}/${schedule}`, { headers: headers })
                .then(res => res.json())
                .then(data => {
                  console.log(data);
                  var results = data;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
}

module.exports = { movements }