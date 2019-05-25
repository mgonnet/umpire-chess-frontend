import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NameForm from './NameForm'
import { UmpireClient } from '@mgonnet/umpire-client'

let client = UmpireClient({url: 'ws://localhost:3000', WSConstructor: WebSocket})

ReactDOM.render(<NameForm handleRegister={client.register}/>, document.getElementById('root'));