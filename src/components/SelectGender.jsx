import React, { useState, useEffect } from "react";
import styles from "../css/SelectGender.module.css";
import GenderDropDown from "./GenderDropDown";
import SelectTypeDropDown from "./SelectTypeDropDown";
import { individualsData } from "../services/individuals";
import { companiesData } from "../services/companies";

const SelectGender = () => {
//     handleClickGender = (displayedGender, displayedId) => {
    
//     };

    // handleClickType = (displayedType, displayedId) => {
    //     this.props.onClickType(displayedType, displayedId);
    // };

    //     const {
    //         selectGender,
    //         selectType,
    //         displayedGender,
    //         displayedType,
    //         displayedValue,
    //     } = this.props;



    const [selectGender, setGender] = useState("Gender");
    const [selectType, setType] = useState("Type");
    const [value, setValue] = useState();
    const [anti_loop, setAnti_loop] = useState(false);

    const genderList = [
        { id: 1, name: "Male" },
        { id: 2, name: "Female" },
    ];

    const typeList = [
        { id: 1, name: "Individuals" },
        { id: 2, name: "Companies" },
    ];

    const sort_handleDisplayedValue = () => {
        let displayedGender = selectGender;
        var displayedType = typeList;
        let antiLoop = anti_loop;
        const companies = {...companiesData};
        const individuals = {...individualsData};

        if (displayedGender && displayedType && antiLoop) {
            setAnti_loop(false);
            if (displayedType === "Companies") {
                let filtered = companies.filter(
                    (c) =>
                        c.gender.toUpperCase() ===
                        displayedGender.toUpperCase()
                );
                let output = filtered.length;

                setValue(output);
            } else if (displayedType === "Individuals") {
                let filtered = individuals.filter(
                    (c) =>
                        c.gender.toUpperCase() ===
                        displayedGender.toUpperCase()
                );
                let output = filtered.length;

                setValue(output);
            }
        }
    };

    useEffect(() => {
        sort_handleDisplayedValue();
    }, []);


    const handleClickGender = (
        displayedGender,
        displayedId
    ) => {
        setGender(displayedGender);
        setAnti_loop(true);
    };

    const handleClickType = (
        displayedType,
        displayedId
    ) => {
        setType(displayedType);
        setAnti_loop(true);
    };

        return (
            <div className={styles.wrapper}>
                <div className={styles.nameWrapper}>
                    <h2 className={styles.name}>By Gender</h2>
                </div>
                <div className={styles.dropdownWrapper}>
                    <GenderDropDown
                        dropdownData={genderList}
                        displayed={selectGender}
                        className={styles.gederDropdown}
                        onClickGender={(displayedGender, displayedId) =>
                            handleClickGender(
                                displayedGender,
                                displayedId
                            )
                        }
                    />
                </div>
                <div className={styles.dropdownWrapper}>
                    <SelectTypeDropDown
                        dropdownData={typeList}
                        displayed={selectType}
                        className={styles.typeDropdown}
                        onClickType={(displayedType, displayedId) =>
                                handleClickType(
                                displayedType,
                                displayedId
                            )
                        }
                    />
                </div>
                <div className={styles.valueWrapper}>
                    <h2>{value}</h2>
                </div>
            </div>
        );
    }

export default SelectGender;
