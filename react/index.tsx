import React from 'react';
import ReactDOM from 'react-dom';

import Application from './Application';
import { currentScript } from './functions';

// @ts-ignore
ReactDOM.render(<Application />, currentScript().parentNode);