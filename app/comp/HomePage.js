const React = require("react");
const axios = require("axios");
const { connect } = require("react-redux");
class HomePage extends React.Component{
    handleRequest = () =>{
        // axios.get("/try")
        // .then(res => console.log(res.data))
        // .catch(err => console.log(err));

        // axios.post("/axios", { username: "Thong" })
        // .then(res => console.log(res.data))
        // .catch(err => console.log(err))

        axios.post("/axios", { username: "Thong" })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
    render(){
        return (
            <div>
                <h1>This is HomePage</h1>
                <button onClick={ this.handleRequest }>Request</button>
            </div>
        )
    }

    componentDidMount(){
        let { dispatch } = this.props;
        axios.get("/getInfo")
        .then(res => {
            if(res.data !== "CHUA_DANG_NHAP"){
                dispatch({type:"LOG_IN", username: res.data});
            }
        })
        .catch(err => console.log(err))
    }
}

module.exports = connect()(HomePage);