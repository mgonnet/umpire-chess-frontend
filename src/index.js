import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import UmpireClient from '@mgonnet/umpire-client'
import Chess from 'chess.js'

let client = UmpireClient({url: 'wss://umpire-chess.herokuapp.com/', WSConstructor: WebSocket, Game: Chess})

ReactDOM.render(<App client={client}/>, document.getElementById('root'));