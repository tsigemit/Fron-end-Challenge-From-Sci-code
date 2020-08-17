import React, { useState } from 'react';
import { Line } from "react-chartjs-2";

const CompaniesChart = () => {

    const [companies, setCompanies] = useState({
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
                data: [0, 5, 3, 8, 6, 2, 7, 8, 4],
                fill: true,
                backgroundColor: ["rgb(255, 86, 238)"],
            },
        ],
    });

    return (
        <React.Fragment>
            <Line
                data={companies}
                options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: "Companies",
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
                                gridLines: {
                                    display: false,
                                }
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
export default CompaniesChart