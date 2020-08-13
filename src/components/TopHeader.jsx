import React, { useState } from "react";
import Images from "../services/images";
import styles from "../css/TopHeader.module.css";
import { getCurrentTime } from "../utils/getTime";
import { getCurrentDate } from "../utils/getDate";

const TopHeader = ({ user }) => {
    const { year, month, day } = getCurrentDate();
    const { hours, minutes, format } = getCurrentTime();
    const [date, setDate] = useState(`${day}-${month}-${year}`);
    const [time, setTime] = useState(`${hours}:${minutes} ${format}`);
    const setValues = () => {
        setDate(undefined);
        setTime(undefined);
    };
    window.onbeforeunload = (e) => {
        setValues();
    };
    return (
        <top>
            <div className={styles.fullHeader}>
                <img className={styles.logo} src={Images.logo} alt={"logo"} />
            </div>
            <div className={styles.list}>
                <div className={styles.content}>
                    <h1>Account</h1>
                    <h1>Charts</h1>
                    <h1>Help</h1>
                </div>
                <div className={styles.user}>
                    <img
                        src={Images.avatar}
                        className={styles.profilePicture}
                        alt={"avatar"}
                    />
                    <h5> {user} </h5>
                    <div className={styles.date}>
                        <h6>{date}</h6>
                        <p>{time}</p>
                    </div>
                </div>
            </div>
        </top>
    );
};
export default TopHeader;
