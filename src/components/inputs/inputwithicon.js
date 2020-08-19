import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '../../media/icons/search2.png';
import useDebounce from './use-debounce';
import { submitSearch } from '../../calls/index';
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width: "100%",
    color: "#4d4d4d"
  },
}));

export default function InputWithIcon(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const classes = useStyles();

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        submitSearch(debouncedSearchTerm).then(results => {
          console.log(results)
          setIsSearching(false);
          setResults(results);
        });
      } else {
        setResults([]);
      }
    },
    [debouncedSearchTerm]
  );

  return (
    <div className={classes.margin + " fullinput"}>
        <Grid container spacing={1} alignItems="flex-end" fullWidth={true}>
            <Grid item>
              <img src={SearchIcon} />
            </Grid>
            <Grid item style={{flexGrow: "1"}}>
              <TextField InputProps={{ disableUnderline: true }} id="input-with-icon-grid" placeholder="Quick Search Your Links" fullWidth={true} onChange={e => setSearchTerm(e.target.value)}/>
            </Grid>
        </Grid>
    </div>
  );
}