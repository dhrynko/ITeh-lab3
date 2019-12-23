const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const render = () => {
    const tableHolder = document.querySelector('#table-holder');

    const minValue = parseInt(document.querySelector('#min').value);
    const maxValue = parseInt(document.querySelector('#max').value);

    let table = document.createElement("table");
    let row = null;

    for (let i = 0; i < 10; i++) {
        row = table.insertRow();
        for (let j = 0; j < 10; j++) {
            row.insertCell().textContent = getRandomInt(minValue, maxValue);
        }
    }

    tableHolder.appendChild(table);
};
