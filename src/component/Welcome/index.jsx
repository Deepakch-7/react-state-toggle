import './index.css'
import { Component } from 'react'

class Welcome extends Component{

    state={isClicked : false}

    onClickSubscribe = () =>{
        this.setState((prevState)=>({isClicked : !prevState.isClicked}));
    }

    render(){
        const {isClicked}=this.state
        const ContainerClass= isClicked ? 'bg-2 container' : 'bg-1 container'
        return (
            <div className={ContainerClass}>
                <h1>Welcome</h1>
                <p>Thank you! happy learning.</p>
                {isClicked && (
                    <button type='button' onClick={this.onClickSubscribe}>Subscribe</button>
                )}
                {!isClicked && (
                    <button type='button' onClick={this.onClickSubscribe}>unSubscribe</button>
                )}

            </div>
        )
    }
}

export default Welcome;