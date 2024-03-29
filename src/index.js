import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {firebaseContext} from './store/Context' 
import firebaseApp from './firebase/config';
import Context from './store/Context';


ReactDOM.render(
<firebaseContext.Provider value={{firebase:firebaseApp}}>

<Context>
<App />
</Context>

</firebaseContext.Provider>,
 document.getElementById('root'));
