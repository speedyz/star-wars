import React from 'react';
import {Link} from "react-router-dom";
import styles from './PeopleNavigation.module.css'
import UiButton from "../../UI/UiButton";

type Props = {
    getResource: any,
    prevPage: any,
    nextPage: any;
    counterPage: number,
}

const PeopleNavigation = ({getResource, prevPage, nextPage, counterPage}: Props) => {

    const handeChangeNext = () => {
        getResource(nextPage)
    }
    const handeChangePrev = () => {
        getResource(prevPage)
    }

    return (
        <div className={styles.root}>
            <Link className={styles.link} to={`/people/?page=${counterPage - 1}`}>
                <UiButton text="Previous" onClick={handeChangePrev} disabled={!prevPage} theme="dark" classes=""/>
            </Link>
            <Link className={styles.link} to={`/people/?page=${counterPage + 1}`}>
                <UiButton text="Next" onClick={handeChangeNext} disabled={!nextPage} theme="dark" classes=""/>
            </Link>
        </div>
    );
};

export default PeopleNavigation;