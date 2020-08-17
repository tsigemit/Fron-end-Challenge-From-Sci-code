import React from "react";
import LeftVerticalPage from "./LeftVerticalPage";
import IndividualsChart from "./charts/IndividualChart"
import CompaniesChart from "./charts/CompaniesChart"
import SelectGender from "./SelectGender"
import DoughnutChart from "./charts/DoughnutChart"
import Meetings from "./Meetings"
import "chartjs-plugin-annotation";
import styles from "../css/MainComponent.module.css";

const MainComponent = () => {
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
                    <LeftVerticalPage />
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
                <div className={styles.displayRightSide}>
                    <div className={styles.displayDoughnut}>
                        <DoughnutChart />
                    </div>      
                    <div className={styles.addSpace} ></div>                                    
                    <div className={styles.selectOptions} >
                        <div><SelectGender /></div> 
                    </div>
                    <div className={styles.addSpace} ></div> 
                    <div className={styles.meetings}>
                        <Meetings />
                    </div>
                </div>
            </div>
            </div>
    );
};

export default MainComponent;
