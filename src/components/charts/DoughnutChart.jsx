import React, { useState } from 'react';
import { Doughnut, Chart } from "react-chartjs-2";

const DoughnutChart = () => {

    const [doughnut, setDoughnut] = useState({
        response:true,
        labels: ["Companies", "Individuals"],
        type: "doughnut",
        datasets: [
            {
                data: [364, 284],
                backgroundColor: ["rgb(255, 86, 238)", "rgb(78, 255, 207)"],
                borderColor:'1bfbe4',
                borderRadius:1
            },
        ],
    });

    var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
    Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
        draw: function () {
            originalDoughnutDraw.apply(this, arguments);
            var chart = this.chart;
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;

            var fontSize = 1.4;
            ctx.font = fontSize + "em sans-serif";
            ctx.fontColor ='#FFFFFF';
            ctx.textBaseline = "middle";

            var sum = 0;
            for (let i = 0; i < doughnut.datasets[0].data.length; i++) {
                sum += chart.config.data.datasets[0].data[i];
            }

            var text = sum,
                textX = Math.round((width - ctx.measureText(text).width)/2.6),
                textY = height / 2;

            ctx.fillText(text, textX, textY);

            //To Display individuals and companies signup values
            fontSize = 0.8;
            ctx.font = fontSize + "em sans-serif";
            const len = doughnut.datasets[0].data.length;
            for (let i = 0; i < len; i++) {
                var value = doughnut.datasets[0].data[i];
                if(i===1){
                    ctx.fillText(value, textX +290, textY-15);
                }
                else if (i===0) {
                    ctx.fillText(value, textX +290 , textY+20);
                }
            }
        }
    });


    

    const [options] = useState({

        title: {
            display: true,
            text: "Total Signups",
            position: "top",
            fontSize: 20,
            fontColor:'#d1ffff',
            padding: 10
        },
        legend: {
            position: "right",
            labels: {
                fontColor: '#849fb1',
                fontSize:15,
                boxWidth: 8,
                padding: 20,
            },
            animation: {
                animateScale: true,
                animateRotate: true
            },
            rtl: true,
            reverse:true,
        },
        maintainAspectRatio:true,
        cutoutPercentage: 85,
        layout: {
            padding:{
                right:90,
                bottom:50,
                bottom:50,
                top:10,
            }
        },
    })
    return (
        <div>
            <Doughnut
                data={doughnut}
                options={options}
            />
        </div>
    )
}
export default DoughnutChart;