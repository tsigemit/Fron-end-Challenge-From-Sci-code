import React, { useState } from 'react';
import { Line } from "react-chartjs-2";

const IndividualsChart = () => {

    const [individuals, setIndividuals] = useState({
        labels: [
            "",
            "Jun'19",
            "Jul'19",
            "Aug'19",
            "Sep'19",
            "Oct'19",
            "Nov'19",
            "Dec'19",
            "",
        ],
        datasets: [
            {
                label: "Signups",
                data: [0, 9, 3, 6, 4, 4, 3, 9, 8],
                fill: true,
                backgroundColor: "#00fbe4",
            },
        ],
    });

    return (
        <React.Fragment>
            <Line
                data={individuals}
                options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: "Individuals",
                        fontSize: 20,
                        fontColor: "#849fb1",
                    },
                    legend: {
                        display: false,
                    },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    max: 12,
                                    min: 0,
                                    stepSize: 3,
                                },
                            },
                        ],
                    },
                    elements: {
                        point: {
                            radius: 0
                        }
                    }
                }}
            />
        </React.Fragment>
    )
}

export default IndividualsChart