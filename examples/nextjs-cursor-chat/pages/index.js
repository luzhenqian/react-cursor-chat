import CursorChat from '../lib/dist';

export default function App() {
    return (
        <div className="main">
            <p className="tips">
                Press <span>/</span> to bring up the input box <br /> Press{' '}
                <span>ESC</span> to close the input box
            </p>
            
            <CursorChat
                showLatency
                presenceURL="https://prsc.yomo.dev"
                presenceAuthEndpoint="/api/presence-auth"
                avatar="https://cursor-chat-example.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75"
                room="cursor-chat-example1"
                name="name"
            />
        </div>
    );
}
