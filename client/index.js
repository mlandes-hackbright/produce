const produceListElement = document.querySelector('#produce-list');

function insertProduceItemIntoDom(item) {
    // do all the HTML stuff
    const li = document.createElement('li');
    li.innerHTML = `${item}`;

    produceListElement.appendChild(li);
}

function loadProduceItems() {
    produceListElement.innerHTML = '';

    axios.get('http://localhost:7890/produceitems')
    .then(httpResult => {
            const data = httpResult.data;
            
            for (const item of data) {
                insertProduceItemIntoDom(item);
            }
        });
}

loadProduceItems();
