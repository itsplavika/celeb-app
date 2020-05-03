import React from 'react';
import './filter.css';

const setLetters = () => {
    const letterArray = [];
    for (let idx = 1; idx < 27; idx++) {
        letterArray.push(String.fromCharCode(idx + 64));
    }
    return letterArray;
}

const Filter = (props) => {
    const letterArray = setLetters();
    const filterHandler = (e) => {
        const { letterFilterCallBackFn } = props;
        const { target } = e;

        if (target.id === "all") {
            letterFilterCallBackFn("");
        } else {
            letterFilterCallBackFn(target.innerText);
        }
    }

    return (
        <section className="filter-section">
            <button value="all" className="all-filter" id="all" onClick={(e) => filterHandler(e)}>
                All Celebrities
                </button>
            <div className="list-filter">
                {
                    letterArray && letterArray.length > 0 && letterArray.map((value, idx) => {
                        return ( <button 
                                key={idx} 
                                className="letters"
                                onClick={(e) => filterHandler(e)}
                                value={value}
                            >
                                {value}
                            </button>
                        )
                    })
                }
            </div>
        </section>
    );


}

export default Filter;
