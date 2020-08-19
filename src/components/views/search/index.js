import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import useDebounce from '../../inputs/use-debounce';
import { getLinkPreview, saveLink, submitSearch } from '../../../calls/index';
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import Logo from '../../../media/smalllogoo.png';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [isFailing, setIsFailing] = useState(false);
    
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);

    const sendSaveLink = () => {
        if (results.link) {
            saveLink(results.link).then((response) => {
                setResults([]);
                setSearchTerm('');
                if (response.data == "OK") {
                    setIsSaving(true);
                    setTimeout(function() {
                        setIsSaving(false);
                    }, 1200)
                } else {
                    setIsFailing(true);
                    setTimeout(function() {
                        setIsFailing(false);
                    }, 1000)
                }
            })
        }
        else {
            setIsFailing(true);
            setTimeout(function() {
                setIsFailing(false);
            }, 1000)
        }
    }

    useEffect(
        () => {
          if (debouncedSearchTerm) {
            setIsSearching(true);
            submitSearch(debouncedSearchTerm).then(results => {
              console.log(results)
              setResults(results.data);
              setIsSearching(false);
            });
          } else {
            setResults([]);
          }
        },
        [debouncedSearchTerm]
    );
    
    return(
        <div className="pagewrap quicksave">
            <div className="header">
                <h1>Quick Search</h1>
                <p>Perform a quick search across all saved media</p>
            </div>
            <div className="inputwrap">
                <input placeholder="Search for..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
            </div>

            {
                isSearching &&
                <div className="previewwrap">
                    <PuffLoader
                        css={override}
                        size={150}
                        color={"#123abc"}
                        loading={isSearching}
                    />
                </div>
            }

            {
                (results.hits && results.hits.hits.length > 0) &&  
                <>
                    <div className="previewwrap">
                        <div className="title">
                            <strong>{results.hits.hits.length}</strong> Results Found in {results.took}ms!
                        </div>
                        {
                            results.hits.hits.map(hit => {
                                return  <div className="results" onClick={() => window.open(hit._source.link)}>
                                            <img src={hit._source.image} />
                                            <div>
                                                <h1>{hit._source.title}</h1>
                                                <h3><a href={(hit._source.link) ? hit._source.link : Logo} target="_blank">{hit._source.link}</a></h3>
                                                <p>{hit._source.description}</p>
                                                <h4>Saved On {hit._source.date}</h4>
                                            </div>
                                        </div>
                            })
                        }
                    </div>
                </>
            }
        </div>
    );
}

export default Search;