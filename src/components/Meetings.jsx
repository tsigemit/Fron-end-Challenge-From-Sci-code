import React, {useState } from "react";
import styles from "../css/Meetings.module.css";
import { individualsData } from "../services/individuals";
import { companiesData } from "../services/companies";
import { getTime } from "../utils/getTime";
import { getDate } from "../utils/getDate";

const Meetings = () => {
    const [individuals] = useState(individualsData());
    const [companies] = useState(companiesData());
    console.log(companies);
   const handleData = () => {
        const allData = [...individuals, ...companies];
        const currentData = allData.filter(
            (c) => c.meetingDate > new Date()
        );
        const sortedData = currentData.sort(
            (a, b) => a.meetingDate - b.meetingDate
        );

        const shownData = sortedData.slice(0, 3);
        return shownData;
    };
        const shownData = handleData();
        return (
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h2>Latest Signups</h2>
                    <div className={styles.headerMenu}>
                        <div className={styles.innerWrapper}>
                            <p className={styles.nameMenu}>Name</p>
                        </div>
                        <div className={styles.innerWrapper}>
                            <p>Scheduled Meeting</p>
                        </div>
                    </div>
                </div>
                
                <div className={styles.table}>
                    {shownData.map((element, index) => {
                        return (
                            <div
                                className={styles.TablesAreWeird}
                                key={index}>
                                <div className={styles.innerWrapper}>
                                    <p
                                        className={styles.name}
                                        style={
                                            element.surname
                                                ? {
                                                    borderColor:
                                                        "rgb(78, 255, 207)",
                                                }
                                                : {
                                                    borderColor:
                                                        "rgb(255, 86, 238)",
                                                }
                                        }>
                                        {element.surname
                                            ? element.name + " " + element.surname
                                            : element.name}
                                    </p>
                                </div>

                                <div className={styles.innerWrapper}>
                                    <p>
                                        {getDate(element.meetingDate).day +
                                            "-" +
                                            getDate(element.meetingDate).month +
                                            "-" +
                                            getDate(element.meetingDate).year +
                                            " "}
                                        {" - "}

                                        {getTime(element.meetingDate).hours +
                                            ":" +
                                            getTime(element.meetingDate).minutes +
                                            getTime(element.meetingDate).format}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
}

export default Meetings;
