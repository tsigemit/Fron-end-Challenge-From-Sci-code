import React, { Component } from "react";
import styles from "../css/VerticalPage.module.css";

class VerticalPage extends Component {
    render() {
        const { pages, currentPage, onPageChange } = this.props;
        return (
            <div className={styles.wrapper}>
                {pages.map((icon) => {
                    return (
                        <div
                            key={icon.id}
                            onClick={() => onPageChange(icon.id)}
                            className={currentPage === icon.id ? styles.active : null}
                        >
                            <img src={icon.url} alt={"icon"} />
                            <br />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default VerticalPage;
