import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './fortest';
import { devToolsEnhancer } from 'redux-devtools-extension';



const store = createStore(reducer,devToolsEnhancer({trace:true}));
export default store;
// export default function(){
//     return configureStore({reducer});

// }
