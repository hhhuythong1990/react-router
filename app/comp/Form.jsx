const React = require("react");
class Form extends React.Component{
    add = () => {
        let v = this.refs.txt.value;
        this.refs.txt.value = "";
        this.props.addNote(v);
    }
    render(){
        return (
            <div>
                <input type="text" ref="txt" placeholder="Enter subject" />
                <br/> <br/>
                <button onClick={ this.add }>Add</button>
            </div>
        )
    }
}

module.exports = Form;