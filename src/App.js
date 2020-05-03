import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Search from './components/search';
import Card from './components/cards';
import Filter from './components/filter';

import {data} from './mock/mock-data.json';

import './App.css';

function App() {

  const [celebData, setData] = React.useState(data);

  const searchHandler= (val) => {
    if(val) {
        let searchedCelebList = celebData.filter((value) => {
            return value.title.toLowerCase().includes(val.toLowerCase());
         });
        if(searchedCelebList.length) {
            setData(searchedCelebList);
        } else {
            setData(data);
        }
    } else {
        setData(data);
    }
}


const letterFilterHandler = (val) => {
  if(val) {
      let filteredCelebList = data.filter((item) => {
        return item.title.toUpperCase().startsWith(val);
      });
      if (filteredCelebList.length) {
          setData(filteredCelebList);
      } else {
        setData(filteredCelebList);
      }
  } else {
    setData(data);
  }
}

  return (
    <div className="app">
      <Header />
      <main>
        <section className="app-title">
            <h1>
              Celebrities
            </h1>
            <Search isSearchCallbackFn={searchHandler}/>
        </section>
        <Filter letterFilterCallBackFn={letterFilterHandler}/>
        {celebData && celebData.length > 0  ? <Card data={celebData}/> : <p className="no-data">
          No Data found
        </p>
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;