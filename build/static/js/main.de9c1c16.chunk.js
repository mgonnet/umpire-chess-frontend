(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/king.c69f5f50.svg"},12:function(e,t,a){e.exports=a.p+"static/media/king_w.fef8c091.svg"},16:function(e,t,a){e.exports=a(31)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(9),o=a(15),l=a(0),r=a.n(l),i=a(10),c=a.n(i),s=(a(22),a(2)),u=a(3),b=a(6),h=a(4),d=a(1),m=a(5),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(b.a)(this,Object(h.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){this.props.onRegister(this.state.value),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",{id:"registration"},r.a.createElement("form",{class:"smallForm loginForm",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",class:"inputText",value:this.state.value,onChange:this.handleChange,placeholder:"Player Name"}),r.a.createElement("input",{type:"submit",class:"boton",value:"Join Server"})))}}]),t}(r.a.Component),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(b.a)(this,Object(h.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleCreateLobby=a.handleCreateLobby.bind(Object(d.a)(a)),a.handleJoinLobby=a.handleJoinLobby.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleCreateLobby",value:function(e){this.props.onCreateLobby(this.state.value),e.preventDefault()}},{key:"handleJoinLobby",value:function(e){this.props.onJoinLobby(this.state.value),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Lobby Browser"),r.a.createElement("div",{class:"smallForm"},r.a.createElement("input",{type:"text",class:"inputText",placeholder:"lobby name",value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",{class:"boton",onClick:this.handleCreateLobby},"Create "),r.a.createElement("button",{class:"boton",onClick:this.handleJoinLobby},"Join ")))}}]),t}(r.a.Component);a(23);var f=a(11),y=a.n(f),g=a(12),C=a.n(g),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(b.a)(this,Object(h.a)(t).call(this,e))).client=a.props.client,a.state={players:a.props.lobbyInfo.players,creator:a.props.lobbyInfo.creator},a.chooseRolHandler=a.chooseRolHandler.bind(Object(d.a)(a)),a.startGameHandler=a.startGameHandler.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"chooseRolHandler",value:function(e){var t=this;this.client.chooseRol(e).then(function(e){var a=e.lobbyInfo.players;t.setState({players:a})})}},{key:"startGameHandler",value:function(){var e=this;this.client.startGame().then(function(t){e.props.onGameStart(t)})}},{key:"componentDidMount",value:function(){var e=this;this.client.addEventListener("LOBBY-UPDATE",function(t){var a=t.lobbyInfo;e.setState({players:a.players})}),this.client.addEventListener("GAME-START",function(t){e.props.onGameStart(t)})}},{key:"render",value:function(){var e=this.state.players.filter(function(e){return"b"===e.rol}).map(function(e){return r.a.createElement("h2",null,e.name)}),t=this.state.players.filter(function(e){return"w"===e.rol}).map(function(e){return r.a.createElement("h2",null,e.name)}),a=this.state.players.filter(function(e){return!e.rol}).map(function(e){return r.a.createElement("h2",null,e.name)});return r.a.createElement("div",{id:"lobby"},r.a.createElement("div",{class:"lobby-side"},r.a.createElement("img",{class:"lobby-piece",src:y.a,onClick:this.chooseRolHandler.bind(null,"b")}),r.a.createElement("div",{class:"lobby-player-list"},e)),r.a.createElement("div",{id:"lobby-middle"},this.props.IamCreator&&r.a.createElement("button",{id:"start-game",class:"boton",onClick:this.startGameHandler},"Start Game!"),r.a.createElement("div",{class:"lobby-player-list"},a)),r.a.createElement("div",{class:"lobby-side"},r.a.createElement("img",{class:"lobby-piece",src:C.a,onClick:this.chooseRolHandler.bind(null,"w")}),r.a.createElement("div",{class:"lobby-player-list"},t)))}}]),t}(r.a.Component),j=(a(24),{r:"\u265c",n:"\u265e",b:"\u265d",q:"\u265b",k:"\u265a",p:"\u265f"});var O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(b.a)(this,Object(h.a)(t).call(this,e))).handleCheckMoves=a.handleCheckMoves.bind(Object(d.a)(a)),a.handleMove=a.handleMove.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleCheckMoves",value:function(e){this.props.onCheckMoves(e)}},{key:"handleMove",value:function(e){this.props.onMove(e)}},{key:"render",value:function(){for(var e=this,t=new Array(64),a=0;a<8;a++)for(var n=0;n<8;n++){var o="cell "+((n%2+a%2)%2?"cellWhite":"cellBlack");t[8*a+n]=r.a.createElement("div",{class:o,style:{gridColumn:"".concat(n+1,"/").concat(n+1),gridRow:"".concat(a+1,"/").concat(a+1)}})}var l=this.props.pieces.map(function(t){var a=t.square.charCodeAt(0)-"a".charCodeAt(0)+1,n="9".charCodeAt(0)-t.square.charCodeAt(1),o="b"===t.piece.color?"blackPiece":"whitePiece";return r.a.createElement("div",{class:o,style:{gridColumn:"".concat(a,"/").concat(a),gridRow:"".concat(n,"/").concat(n)},onClick:e.handleCheckMoves.bind(null,{square:t.square,verbose:!0})},j[t.piece.type])}),i=null;return this.props.moves&&(i=this.props.moves.map(function(t){var a,n={column:(a=t.to).charCodeAt(0)-"a".charCodeAt(0)+1,row:"9".charCodeAt(0)-a.charCodeAt(1)};return r.a.createElement("div",{class:"move",style:{zIndex:100,gridColumn:"".concat(n.column,"/").concat(n.column),gridRow:"".concat(n.row,"/").concat(n.row)},onClick:e.handleMove.bind(null,t.to),key:"move-".concat(t.to)})})),r.a.createElement("div",{class:"chessBoard"},t,l,null!==i&&i)}}]),t}(r.a.Component),E=(a(25),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(b.a)(this,Object(h.a)(t).call(this,e))).client=a.props.client,a.state={gameState:a.props.gameInfo.gameState,moves:null},a.handleMove=a.handleMove.bind(Object(d.a)(a)),a.handleCheckMoves=a.handleCheckMoves.bind(Object(d.a)(a)),console.log("gameInfo",a.props.gameInfo,"lobbyInfo",a.props.lobbyInfo),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleMove",value:function(e){var t=this;console.log("voy a mover",e,this.state.selected),this.client.move({from:this.state.selected.square,to:e}).then(function(e){var a=e.gameInfo;t.setState({gameState:a.gameState,moves:null,selected:null})})}},{key:"handleCheckMoves",value:function(e){console.log("voy a chequear",e);var t=this.client.moves(e).moves;this.setState({moves:t,selected:e})}},{key:"componentDidMount",value:function(){var e=this;this.client.addEventListener("MOVE",function(t){var a=t.gameInfo;e.setState({gameState:a.gameState,moves:null,selected:null})})}},{key:"render",value:function(){return r.a.createElement("div",{id:"gameRoom"},r.a.createElement("div",{id:"boardContainer"},r.a.createElement(O,{pieces:this.state.gameState,moves:this.state.moves,onCheckMoves:this.handleCheckMoves,onMove:this.handleMove})),r.a.createElement("div",{id:"infoContainer"}))}}]),t}(r.a.Component)),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(b.a)(this,Object(h.a)(t).call(this,e))).state={value:"",status:"registering"},a.handleRegister=a.handleRegister.bind(Object(d.a)(a)),a.handleCreateLobby=a.handleCreateLobby.bind(Object(d.a)(a)),a.handleJoinLobby=a.handleJoinLobby.bind(Object(d.a)(a)),a.handleGameStart=a.handleGameStart.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleRegister",value:function(e){var t=this;this.props.client.register(e).then(function(e){window.addEventListener("beforeunload",t.props.client.leave),"OK"===e&&t.setState({status:"looking"})}).catch(function(){})}},{key:"handleCreateLobby",value:function(e){var t=this;this.props.client.createLobby(e).then(function(a){var n=a.lobbyInfo;t.setState({status:"hosting",lobbyName:e,lobbyInfo:n})}).catch(function(){})}},{key:"handleJoinLobby",value:function(e){var t=this;this.props.client.joinLobby(e).then(function(a){var n=a.lobbyInfo;t.setState({status:"joined",lobbyName:e,lobbyInfo:n})}).catch(function(){})}},{key:"handleGameStart",value:function(e){var t=e.lobbyInfo,a=e.gameInfo;this.setState({status:"playing",lobbyInfo:t,gameInfo:a})}},{key:"render",value:function(){switch(this.state.status){case"registering":return r.a.createElement(v,{onRegister:this.handleRegister});case"looking":return r.a.createElement(p,{onCreateLobby:this.handleCreateLobby,onJoinLobby:this.handleJoinLobby});case"hosting":return r.a.createElement(k,{onGameStart:this.handleGameStart,IamCreator:!0,client:this.props.client,name:this.state.lobbyName,lobbyInfo:this.state.lobbyInfo});case"joined":return r.a.createElement(k,{onGameStart:this.handleGameStart,IamCreator:!1,client:this.props.client,name:this.state.lobbyName,lobbyInfo:this.state.lobbyInfo});case"playing":return r.a.createElement(E,{client:this.props.client,lobbyInfo:this.state.lobbyInfo,gameInfo:this.state.gameInfo});default:return r.a.createElement("div",null,r.a.createElement("p",null,"Algo se rompio"))}}}]),t}(r.a.Component),I=a(13),L=a.n(I),M=a(14),w=new Proxy(a.n(M).a,{construct:function(e,t){var a=Object(n.a)(e,Object(o.a)(t));return a.state=function(){return a.SQUARES.map(function(e){return{square:e,piece:a.get(e)}}).filter(function(e){return null!==e.piece})},a}}),R=L()({url:"wss://umpire-chess.herokuapp.com/",WSConstructor:WebSocket,Game:w});c.a.render(r.a.createElement(S,{client:R}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.de9c1c16.chunk.js.map