import { Provider } from 'react-redux';
import Home  from './page/Home'
import  {store}  from './store/store';

const App =()=>{
return (
    <div className='bg-gray-400'>
      <Provider store={store}>
  <Home/>
  </Provider>
    </div>

)
}

export default App ;