const React = require("react");
import { Link } from 'react-router-dom';
class Nav extends React.Component{
    render(){
        return (
            <ul>
                <li><Link to="/" activestyle={{
                    fontWeight: 'bold',
                    color: 'red'
                }}   >Home Page</Link></li>
                <li><Link to="/transaction" activestyle={{
                    fontWeight: 'bold',
                    color: 'red'
                }}>Transaction</Link></li>
                <li><Link to="/account" activestyle={{
                    fontWeight: 'bold',
                    color: 'red'
                }}>Account</Link></li>
            </ul>
        )
    }
}

module.exports = Nav;