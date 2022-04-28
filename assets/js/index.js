let moistureGraph;
let xValues = [];
let yValues = [];
window.onload = function () {
    // getData();
    drawGraph();
};

function drawGraph() {
    moistureGraph = new Chart("moisture-graph", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                label: "Moisture level",
                fill: false,
                pointRadius: 1,
                borderColor: "rgba(255,0,0,0.5)",
                data: xValues
            }]
        },
        options: {
            responsive: true,
            plugins: {
                // title: {
                //     display: true,
                //     text: "Soil Moisture Level",
                //     fontSize: 54
                // }
            },
            scales: {
                y: {
                    min: 0,
                    max: 100,
                }
            }
        }
    });
}

function getData() {

}

function addValue() {
    xValues.push(getRandomIntInclusive(0, 100));
    moistureGraph.update();
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included 
}
