function fetchTrainMovenents(schedule, activation, headers, fs)
{
    fetch(`https://traindata-stag-api.railsmart.io/api/ifmtrains/movement/${activation}/${schedule}`, { headers: headers })
        .then(res => res.json())
        .then(data => {
            fs.writeFileSync(`M${activation}-${schedule}.json`, JSON.stringify(data, null, 2), 'utf-8');
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


module.exports = {fetchTrainMovenents};