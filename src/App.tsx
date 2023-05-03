import { useEffect, useState } from 'react';
import './App.css';
import LoadTempLinks from './tempData';

function App() {
  const [groups, setGroups] = useState(LoadTempLinks());

  return (
    <div className="App">
      <main>
        {
          Object.keys(groups).map(name=>{
            return (
              <div key={Math.random()}>
                <div>{name}</div>
                <div>{
                  groups[name].links.map(l=>{
                    return (
                      <div key={Math.random()}>
                        <img src={l.faviconsrc} alt="favicon" />
                        <a href={l.href}>LINK</a>
                      </div>
                    );
                  })
                }</div>
              </div>
            );
          })
        }
      </main>
    </div>
  );
}

export default App;
