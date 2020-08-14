import React, { useState } from "react";
import styles from "../css/LowerHeaderPage.module.css";

const LowerHeaderPage = () => {
    const [L_currentPage, setL_currentPage] = useState(1);
    const lower_pages = [
        { id: 1, name: "Signups" },
        { id: 2, name: "Investment" },
        { id: 3, name: "Revenue" },
        { id: 4, name: "Exits" },
        { id: 5, name: "Trades" },
    ];
    const onPageChange =(id) => {
        setL_currentPage(id);
    }
        return (
            <React.Fragment>
                <div className={styles.wrapper}>
                    {lower_pages.map((page) => {
                        return (
                            <h3
                                key={page.id}
                                onClick={() => onPageChange(page.id)}
                                className={
                                    L_currentPage === page.id
                                        ? styles.active
                                        : null
                                }>
                                {page.name}
                            </h3>
                        );
                    })}
                </div>
            </React.Fragment>
        );
    }
export default LowerHeaderPage;
