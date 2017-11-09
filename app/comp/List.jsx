const React = require("react");
const Form = require("./Form.jsx");
const Note = require("./Note.jsx");

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mang:[
                "Android",
                "IOS",
                "React Native"
            ]               
            
        };
    }

    del = (index) => {
        this.state.mang.splice(index, 1);
        this.setState(this.state);
    }

    add = (str) => {
        this.state.mang.push(str);
        this.setState(this.state);
    }
    render(){
        return (
            <div>
                <Form addNote={ this.add }/>
                {                    
                    this.state.mang.map((e, i) => {
                        return <Note key={ i } remove={ this.del } index={ i } > { e }</Note>
                    })
                }
            </div>
        )
    }
}

module.exports = List;