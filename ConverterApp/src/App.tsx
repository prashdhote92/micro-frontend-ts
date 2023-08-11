import { Suspense } from 'react';
import './App.css';

// const LengthConverter = React.lazy(() => import('length/LengthConverter'));
// const AreaConverter = React.lazy(() => import('area/AreaConverter'));

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        <div>
          <Suspense>
            {/* <LengthConverter /> */}
          </Suspense>
        </div>
        <div>
          <Suspense>
            {/* <AreaConverter /> */}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
