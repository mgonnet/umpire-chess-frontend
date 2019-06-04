import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import UmpireClient from '@mgonnet/umpire-client'
import Chess from 'chess.js'

const FakeChess = new Proxy(Chess, {
    construct: function (Target, args) {
        const myFake = new Target(...args)
        // @ts-ignore
        myFake.state = () => myFake.ascii()
        console.log('bablbalbla')
        return myFake
    }
})

let client = UmpireClient({url: 'wss://umpire-chess.herokuapp.com/', WSConstructor: WebSocket, Game: FakeChess})

ReactDOM.render(<App client={client}/>, document.getElementById('root'));