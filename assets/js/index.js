let moistureGraph;
let xValues = [];
let yValues = [];
let timeArray = [];

window.onload = function () {
    // getData();
    drawGraph();
};

function drawGraph() {
    moistureGraph = new Chart("moisture-graph", {
        type: "line",
        data: {
            labels: timeArray,
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
                x: {
                    title: {
                        display: true,
                        text: "Time",
                    }
                },
                y: {
                    min: 0,
                    max: 100,
                    title: {
                        display: true,
                        text: "Unit"
                    }
                }
            }
        }
    });
}

function getData() {

}

function addValue(val) {
    xValues.push(val ? val : getRandomIntInclusive(0, 100));
    timeArray.push(getCurrentTime());
    moistureGraph.update();
}

function getCurrentTime() {
    var time = new Date();
    return (
        time.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        })
    );
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included 
}
