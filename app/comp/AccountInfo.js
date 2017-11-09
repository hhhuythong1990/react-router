const React = require("react");
const { connect } = require("react-redux");
const axios = require("axios");
class AccountInfo extends React.Component{
    logOut(e) {
        e.preventDefault();
        let { dispatch } = this.props;
        axios.get("/logout")
        .then(res => {
            if(res.data !== "CHUA_DANG_NHAP"){
                dispatch({type: "LOG_OUT"})
            }
        })
        .catch(err => console.log(err))
    }
    render(){
        return (
            <div>
                <p>Username: { this.props.username }</p>
                <button onClick={ this.logOut.bind(this) }>Log out</button>        
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.username
    }
}

module.exports = connect(mapStateToProps)(AccountInfo);