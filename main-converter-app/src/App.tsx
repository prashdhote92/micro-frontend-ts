import React, { Suspense } from 'react';
import './App.css';

const LengthConverter = React.lazy(() => import("length_pack/LengthConverter"));
//const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));

const App = () => (
    <div className="App">
      <h1>Hello</h1>
      <div>
        <div>
          <Suspense>
            <LengthConverter />
          </Suspense>
        </div>
        <div>
          <Suspense>
            {/* <AreaConverter /> */}
          </Suspense>
        </div>
      </div>
    </div>
  )

export default App;
