import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '../../media/icons/search2.png';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width: "100%",
    color: "#4d4d4d"
  },
}));

export default function InputWithIcon() {
  const classes = useStyles();

  return (
    <div className={classes.margin + " fullinput"}>
        <Grid container spacing={1} alignItems="flex-end" fullWidth={true}>
            <Grid item>
              <img src={SearchIcon} />
            </Grid>
            <Grid item style={{flexGrow: "1"}}>
              <TextField InputProps={{ disableUnderline: true }} id="input-with-icon-grid" placeholder="Quick Search Your Links" fullWidth={true}/>
            </Grid>
        </Grid>
    </div>
  );
}