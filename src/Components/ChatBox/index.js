import React, { Component } from 'react';
import Clock from 'react-live-clock';
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import './index.css'

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
const initialRandomText = [
    {
        name: "Alan",
        text: "Welcome to chat."
    },
    {
        name: "Bob",
        text: "Hey everyone!"
    },
    {
        name: "Carol",
        text: "Oh hi, Gregory! Rolande is around, too..."
    }
];

const userColorMap = {
    Alan: 'orangered',
    Bob: 'royalblue',
    Carol: 'forestgreen',
    Dean: 'darkorchid',
    Elin: 'goldenrod'
};

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: user_list[Math.floor(Math.random() * user_list.length)],
            text: '',
            randomText: initialRandomText
        };
    }

    displayText = (event) => {
        if (event.key === "Enter") {
            const { text, randomText } = this.state;
            const newText = event.target.value;
            const updatedRandomText = [...randomText, { name: user_list[Math.floor(Math.random() * user_list.length)], text: newText }];
            this.setState({
                text: '',
                randomText: updatedRandomText
            });
            event.target.value = ''
        }
    }

    render() {
        const { randomText } = this.state;
        return (
            <div className='chatbox-container'>
                <div className='heading-container'>
                    <div>
                        <p className='name'>Introductions</p>
                        <p className='profession'>This Channel is for Company Wide Chatter</p>
                    </div>
                    <div className='member-container'>
                        <p className='profession'>{randomText.length}/100</p>
                        <IoPeopleOutline className='members-icon' />
                    </div>
                </div>
                <hr />
                <div className='content'>
                    <ul className='chat'>
                        {randomText.map((eachText, index) => (
                            <div key={index}>
                                <div className='person-details'>
                                    <div className='profile-name-letter' style={{ backgroundColor: userColorMap[eachText.name] }}>
                                        <p>{eachText.name[0]}</p>
                                    </div>
                                    <p className='name'>{eachText.name}</p>
                                    <Clock format={'HH:mm'} className='time' />
                                </div>
                                <div className='text-container'>
                                    <p>{eachText.text}</p>
                                </div>
                            </div>
                        ))}
                    </ul>
                    <div className='textbox'>
                        <textarea type='text' placeholder='Type Message' onKeyDown={this.displayText} />
                        <MdOutlineEmojiEmotions />
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatBox;
