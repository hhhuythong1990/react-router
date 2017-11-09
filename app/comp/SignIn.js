const React = require("react");
const { connect } = require("react-redux");
const axios = require("axios");

class SignIn extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
        let { dispatch } = this.props;
        let { username, password } = this.refs;
        // if(username.value === "thong" && password.value === "1234"){
        //     dispatch({type: "LOG_IN", username: username.value});
        // }

        axios.post("/signIn", { username: username.value, password: password.value })
        .then(res => {
            if(res.data === "DANG_NHAP_THANH_CONG"){
                dispatch({type: "LOG_IN", username: username.value});
            }else{
                dispatch({type: "SHOW_NOTIFICATION", notification: "Sai ten va mat khau"});
            }
        })
        .catch(err => console.log(err))
    }
    render(){
        return (
            <div>
                <form onSubmit={ this.handleSubmit.bind(this) }>
                    <input type="text" ref="username" placeholder="input user name" />
                    <br/><br/>
                    <input type="password" ref="password" placeholder="input your password" />
                    <br/><br/>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        )
    }
}

module.exports = connect()(SignIn);