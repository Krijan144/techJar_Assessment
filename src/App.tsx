import { Login } from "./page/login";
import { Provider } from 'react-redux';
import { initializeStore } from './store';

const store = initializeStore();

function App() {
  return (
    <>
       <Provider store={store}>
 
      {/* <h2>Tech Bar Assignment</h2> */}
      <Login />
      </Provider>

    </>
  );
}

export default App;
