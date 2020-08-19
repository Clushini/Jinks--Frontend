import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import useDebounce from '../../inputs/use-debounce';
import { getLinkPreview, saveLink } from '../../../calls/index';
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import Lottie from 'react-lottie';
import animationData from '../../../animations/success.json';
import failedanimationData from '../../../animations/error.json';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const QuickSave = (props) => {
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
            let strippedTerm;
            if (String(debouncedSearchTerm).startsWith("http://") || String(debouncedSearchTerm).startsWith("https://")) {
                strippedTerm = String(debouncedSearchTerm).replace('http://', '');
                strippedTerm = strippedTerm.replace('https://', '');
            }
            else {
                strippedTerm = debouncedSearchTerm;
            }
            getLinkPreview(strippedTerm).then(results => {
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

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const faildefaultOptions = {
        loop: false,
        autoplay: true,
        failedanimationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    
    return(
        <div className="pagewrap quicksave">
            <div className="header">
                <h1>Quick Save</h1>
                <p>Type in or copy/paste a link into the box below to save a link to your database.</p>
            </div>
            <div className="inputwrap">
                <input placeholder="Link to save" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
                <Button variant="text" color="primary" onClick={sendSaveLink}>
                    Save
                </Button>
            </div>

            {
                isSaving && <div className="lottiewrap">
                                <Lottie options={defaultOptions}
                                    height={400}
                                    width={400}
                                    isStopped={false}
                                    isPaused={false}
                                />
                            </div>
            }

            {
                isFailing && <div className="lottiewrap">
                                <Lottie options={faildefaultOptions}
                                    height={400}
                                    width={400}
                                    isStopped={false}
                                    isPaused={false}
                                />
                            </div>
            }

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
                (results.link && !isSearching) &&  
                <>
                    <div className="previewwrap">
                        <div className="title">Result Found!</div>
                        <div className="results">
                            <img src={results.image} />
                            <div>
                                <h1>{results.title}</h1>
                                <h3><a href={results.link} target="_blank">{results.link}</a></h3>
                            </div>
                        </div>
                    </div>
                    <Button variant="text" color="primary" className="bigasssave" onClick={sendSaveLink}>
                        Save Link
                    </Button>
                </>
            }
        </div>
    );
}

export default QuickSave;