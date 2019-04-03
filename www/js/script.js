
//initalising an empty array
let sensorState = [];
let sensorTime = [];
let count = 0;
let waterInTake = 0;
let value;


const url = '/getData';
fetch (url)
    .then(res => res.json())
    .then((data) => {
        var sensorData = data;

        //.map used to split up the different types of data
        sensorData.map((sensorData) => {
            //.push populates array with the data
            sensorState.push(sensorData.state);
            sensorTime.push(sensorData.time);
        });

        console.log("state array length: " + sensorState.length);

        while (count < sensorState.length){
            count ++;
            if (sensorState[count-1] == "Drinking"){
                waterInTake ++;
                value = waterInTake;
            }
        }
    

            console.log(sensorState);
            console.log(sensorTime);
            console.log("Water: " + value);
            console.log("length: " + sensorState.length);



    var ctx = document.getElementById('myChart').getContext('2d');
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['On Table', 'Drinking'],
            datasets: [{
                label:  '# of votes',
                data: [120, waterInTake],

            

                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

    /*

        console.log(waterInTake);

        const waterData = document.querySelector('.waterData');
        let dataFeed = data.map((WaterInTake) => {
            return `<p>I had many sips in 1 hour${waterInTake}</p>`
        }).join('');
        waterData.innerHTML = dataFeed;*/
        });


            //.catch(err => { throw err });


        //closing data collection t the end of the program
    
//});