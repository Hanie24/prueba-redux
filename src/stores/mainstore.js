import { createStore } from 'redux';
import mainReducer from '../reducer/mainreducer';

export default createStore(mainReducer);