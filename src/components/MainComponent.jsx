import React from "react";
import VerticalPage from "./VerticalPage";
import IndividualsChart from "./charts/IndividualChart"
import CompaniesChart from "./charts/CompaniesChart"
import DoughnutChart from "./charts/DoughnutChart"
import Icons from "../services/icons.js"
import "chartjs-plugin-annotation";
import styles from "../css/MainComponent.module.css";
console.log(`${Icons.group}`);
const MainComponent = () => {
    const c_icons = [
        { id: 1, url: Icons.group},
        { id: 2, url: Icons.funds },
        { id: 3, url: Icons.icon },
        { id: 4, url: Icons.history },
        { id: 5, url: Icons.verification},
        { id: 6, url: Icons.locked},
    ];

    const row = [
        { id: 1, name: "Signups" },
        { id: 2, name: "Investment" },
        { id: 3, name: "Revenue" },
        { id: 4, name: "Exits" },
        { id: 5, name: "Trades" },
    ];
    return (
            <div className={styles.mainPage}>
                <div className={styles.verticalIcons}>
                    <VerticalPage pages={c_icons} />
                </div>
                <div className={styles.board}>
                        <div className={styles.displayCharts}>
                            <div className={styles.individuals}>
                                <IndividualsChart />
                            </div>
                            <div className={styles.companies}>
                                <CompaniesChart />
                            </div>
                        </div>
                    <div className={styles.displayDoughnut}>
                            <DoughnutChart />
                    </div>
                </div>
            </div>
    );
};

export default MainComponent;
