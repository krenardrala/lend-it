import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IntroScreen from './screen/IntroScreen';

import { Provider } from 'react-redux';
import store from './store'

ReactDOM.render(<Provider store={store}><IntroScreen /></Provider>, document.getElementById('root'));

