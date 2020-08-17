import React, { useState } from "react";
import "chartjs-plugin-annotation";
import TopHeader from "./TopHeader.jsx";
import NextHeader from "./NextHeader.jsx";
import LowerHeaderPage from "./LowerHeaderPage";
import MainComponent from "./MainComponent.jsx"
import styles from "../css/Home.module.css";

const Home = () => {
    //const [individualsData] = useState(fakeData());
    //const [companiesData] = useState(fakeCompanies());
    const [profile] = useState("Elsa Andersen");
    const [header_content] = useState({
        totalSignups: 648,
        lastWeek: 12,
        totalInvestments: 102,
        currency: "NOK",
        value: "345,565",
        totalExits: 23,
    });
    const [overview] = useState([
        { id: 1, name: " " },
        { id: 3, name: "V1" },
        { id: 3, name: "V2" },
    ]);

    return (
        <div className={styles.home_layout}>
            <TopHeader user={profile} />
            <NextHeader headerInfo={header_content} overview={overview} />
            <LowerHeaderPage />
            <div className={styles.smallHeader}>
            </div>
            
            <MainComponent />
        </div>
    );
};

export default Home;
