import React, { Component } from "react";
import styles from "../css/NextHeader.module.css";

const NextHeader = ({ headerInfo, overview }) => {
    const optins = overview.map((value) => {
        return <div key={value.id}>{value.name}</div>;
    });

    return (
        <div className={styles.rows}>
            <div className={styles.content}>
                <div className={styles.cols}>
                    <div className={styles.dropdown}>
                        <p>Overview &nbsp;</p>
                        <select>
                            {overview.map((value) => (
                                <option key={value.id} value={value.name}>
                                    {value.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={styles.cols}>
                    <h6>Total signups</h6>
                    <h4 className={styles.green}>{headerInfo.totalSignups}</h4>
                </div>
                <div className={styles.cols}>
                    <h6>Last Week</h6>
                    <p className={styles.purple}>{headerInfo.lastWeek}</p>
                </div>
                <div className={styles.cols}>
                    <h6>Total investments</h6>
                    <h4 className={styles.blue}>{headerInfo.totalInvestments}</h4>
                </div>
                <div className={styles.cols}>
                    <h6>Average investment</h6>
                    <h4>
                        <span className={styles.currency}>{headerInfo.currency}</span>
                        <span className={styles.investmentValue}>{headerInfo.value}</span>
                    </h4>
                </div>
                <div className={styles.cols}>
                    <h6>Total exits</h6>
                    <h4 className={styles.purple}>23</h4>
                </div>
            </div>
        </div>
    );
};

export default NextHeader;
