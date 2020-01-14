// Chart.js
let ctx = document.getElementById('donught').getContext('2d');
let abc = document.getElementById('donught2').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
    labels: ['red', 'green', 'blue', 'yellow'],
    datasets: [{
        label: 'My First dataset',
        backgroundColor: ["#f00", '#0f0', '#00f', '#ff0'],
        borderColor: 'rgb(222, 212, 200)',
        data: [40, 25, 20, 15]
    }]
},

// Configuration options go here
options: {}
});