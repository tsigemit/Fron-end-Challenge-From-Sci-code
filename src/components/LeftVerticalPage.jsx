import React, { Component, useState } from "react";
import Icons from "../services/icons.js"
import styles from "../css/LeftVerticalPage.module.css";

const LeftVerticalPage =() => {

        const [v_current, setV_current] = useState(1);
        const v_icons = [
            { id: 1, url: Icons.group },
            { id: 2, url: Icons.funds },
            { id: 3, url: Icons.icon },
            { id: 4, url: Icons.history },
            { id: 5, url: Icons.verification },
            { id: 6, url: Icons.locked },
        ];

        const onPageChange = (id) => {
            setV_current(id);
        }
        return (
            <div className={styles.wrapper}>
                {v_icons.map((icon) => {
                    return (
                        <div
                            key={icon.id}
                            onClick={() => onPageChange(icon.id)}
                            className={v_current === icon.id ? styles.active : null}
                        >
                            <img src={icon.url} alt={"icon"} />
                            <br />
                        </div>
                    );
                })}
            </div>
        );
    }

export default LeftVerticalPage;
