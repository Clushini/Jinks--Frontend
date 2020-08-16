import React, { useRef, useEffect } from "react";

const Drop = (props) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    function useOutsideAlerter(ref) {
        useEffect(() => {
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              props.clickedOutside()
            }
          }
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
    }

    return(
        <div className="dropmodal" style={{marginTop: props.margintop}} ref={wrapperRef}>
            test
        </div>
    )
}

export default Drop;