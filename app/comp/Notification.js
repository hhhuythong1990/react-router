const React = require("react");
const { connect } = require("react-redux");
class Notification extends React.Component{
    render(){
        return (
            <div>
                <p> { this.props.notification }</p>
            </div>
        )
    }

    componentDidMount(){
        let { dispatch } = this.props;
        setTimeout(()=>{
            dispatch({type: "HIDE_NOTIFICATION"});
        }, 3000);
    }
}


const mapStateToProps = state => {
    return {
        notification: state.notification
    }
}

module.exports = connect(mapStateToProps)(Notification);