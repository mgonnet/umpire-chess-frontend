import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import { UmpireClient } from '@mgonnet/umpire-client'

let client = UmpireClient({url: 'ws://localhost:3000', WSConstructor: WebSocket})

ReactDOM.render(<App client={client}/>, document.getElementById('root'));