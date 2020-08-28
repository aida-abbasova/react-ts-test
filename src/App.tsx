import React from 'react';
import styles from './App.module.scss';
import Products from './main/Products';
import Filter from './main/Filter';

console.log("styles", styles);
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <div className={styles.container}>
        <Products />
        <Filter />
      </div>
    </div>
  );
}

export default App;
