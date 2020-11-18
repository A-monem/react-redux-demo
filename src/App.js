import './App.css'
import CakeContainer from './components/CakeContainer'
import HooksCakeConatiner from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'
import Users from './components/Users'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeConatiner />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake/>
        <ItemContainer /> */}
        <Users />
      </div>
    </Provider>
  );
}

export default App
