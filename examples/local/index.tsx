import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CursorChat from '../../dist';
import '../../dist/dracula.css';

const App = () => {
    return (
        <div className="main">
            <p className="tips">
                Press <span>/</span> to bring up the input box <br /> Press{' '}
                <span>ESC</span> to close the input box
            </p>
            <CursorChat
                showLatency
                presenceURL="https://prsc.yomo.dev"
                presenceAuthEndpoint="/.netlify/functions/presence-auth"
                avatar="https://cursor-chat-example.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75"
                room="cursor-chat-example"
                name="name"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
