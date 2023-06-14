import { Component } from "react";

class Message extends Component {
    render() {
        return <h3>Message: {this.props.messageContent} to {this.props.name}</ h3>
    }
}

export default Message;