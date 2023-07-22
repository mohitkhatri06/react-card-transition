import { useState } from 'react'
import Card from './card/card'
import './flipable-card.css'
import { CSSTransition } from 'react-transition-group'



function FlipableCard() {
    const [showFront, setShowFront] = useState(true);
    return(
        <div className="flippable-card-container">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <Card onClick={() => {
                    setShowFront((v) => !v);
                }}/>
            </CSSTransition>
        </div>
    );
}

export default FlipableCard