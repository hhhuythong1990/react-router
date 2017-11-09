const React = require("react");
class Note extends React.Component{
    constructor(props){
        super(props);
        // this.del = this.del.bind(this);
    }

    del = () => {
        this.props.remove(this.props.index);
    }
    render(){
        return (
            <div>
                <p>
                    { this.props.children }
                    <button onClick={ this.del }>Delete</button>
                </p>
            </div>
        )
    }
}

module.exports = Note;