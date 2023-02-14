var container = document.getElementById('menu')

let gettiplocs = fetch("tiplocs.json")
    .then(r => r.json())
    .then(data => {
        for (const item of data) {
                var p = document.createElement('p');
                p.innerHTML = item.Location;
                p.id = item.TIPLOC;
                p.addEventListener("click", expandMenu)
                p.classList.add('menuOptions')
                container.append(p);
            }
        }
    )