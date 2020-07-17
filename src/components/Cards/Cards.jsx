import React from 'react';
import {Card, CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUP from 'react-countup';
import cx from 'classnames';






const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    // console.log(props);
    if (!confirmed) {
        return 'Loading...';  
    }



    return (
        <div className={styles.container} >
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography varient="h5"><CountUP start={0} end={confirmed.value} duration={2.5}separator=","/></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography varient='body2'>Active Cases</Typography>
                        </CardContent>
                        
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovery</Typography>
                            <Typography varient="h5"><CountUP start={0} end={recovered.value} duration={2.5}separator=","/></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography varient='body2'>Recovered Cases</Typography>
                        </CardContent>
                        
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography varient="h5"><CountUP start={0} end={deaths.value} duration={2.5}separator=","/></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography varient='body2'>Total Deaths</Typography>
                        </CardContent>
                        
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;
