import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <p className={styles.update}>Last update: {new Date(lastUpdate).toDateString()} {new Date(lastUpdate).toTimeString()}</p>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected, styles.cardsize)}>
                    <CardContent className="cardsize">
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={0} end={confirmed.value} duration={1} separator=","/>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered, styles.cardsize)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={0} end={recovered.value} duration={1} separator=","/>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths, styles.cardsize)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" gutterBottom>
                            <CountUp start={0} end={deaths.value} duration={1} separator=","/>
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;