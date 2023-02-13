var container = document.getElementById('menu')

let gettiplocs = fetch("tiplocs.json")
    .then(r => r.json())
    .then(data => {
        for (const item of data) {
                var p = document.createElement('p');
                p.innerHTML = item.Location;
                container.append(p);
            }
        }
    )