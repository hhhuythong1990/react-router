// document.write("Hello webpack");
// var say = require('./comp/hello');
// say();

const React = require("react");
const ReactDOM = require("react-dom");
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const HomePage = require("./comp/HomePage");
const Nav = require("./comp/Nav");
const Transaction = require("./comp/Transaction");
const Account = require("./comp/Account");
const Notification = require("./comp/Notification");

const redux = require('redux');
const { Provider } = require("react-redux");
const username = (state = null, action) => {
    switch(action.type){
        case "LOG_IN":
            return action.username;
        case "LOG_OUT":
            return null;
        default:
            return state;
    }
}

const notification = (state = null, action) => {
    switch(action.type){
        case "SHOW_NOTIFICATION":
            return action.notification;
        case "HIDE_NOTIFICATION":
            return null;
        default:
            return state;
    }
}

let reducer = redux.combineReducers({username, notification});
let store = redux.createStore(reducer);



const PrivateRoute  = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (        
        (store.getState().username !== null)?( <Component {...props}/>) : (<Redirect to={{ pathname: '/account' }}/>)
    )}/>
)

ReactDOM.render(
    // React.createElement("a", {href: "http://google.com.vn"}, "Hello react code test"),
    // <a href="http://google.com.vn">Hello</a>,
        
    <Provider store={ store }>
        <Router>        
            <div>
                <Nav />
                <Notification />
                <Route exact path="/" component={ HomePage }/> 
                <PrivateRoute  path="/transaction" component={ Transaction }/>
                <Route path="/account" component={ Account }/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)