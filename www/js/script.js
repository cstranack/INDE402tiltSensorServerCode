
//initalising an empty array
let sensorState = [];
let sensorTime = [];
let count = 0;
let waterInTake = 0;
let onTable = 0;


const url = "/getData";
fetch(url)
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
        //extracting the 2 values in sensorState
        while (count < sensorState.length){
            count ++;
            if (sensorState[count-1] == "Drinking"){
                waterInTake ++;
                value = waterInTake;
            }
            else{
               onTable ++;
            }
        }
    
        
            console.log(sensorState);
            console.log(sensorTime);
            console.log("Water: " + value);
            console.log("length: " + sensorState.length);


        //creating the chart
    var ctx = document.getElementById('myChart').getContext('2d');
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['On Table', 'Drinking'],
            datasets: [{
                label:  '# of votes',
                //putting data from database into the graph
                data: [onTable, waterInTake],

            
                    //colours of the graph
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

  //close the fetch url here so data can be put into a graph  
});


            