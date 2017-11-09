const React = require("react");
const { connect } = require("react-redux");
const SignIn = require("./SignIn");
const AccountInfo = require("./AccountInfo");
class Account extends React.Component{
    render(){
        let { username } = this.props;
        let xhtml = username === null ? <SignIn /> : <AccountInfo />
        return (
            <div>
                <h1>This is Account</h1>
                { xhtml }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.username
    }
}

module.exports = connect(mapStateToProps)(Account);