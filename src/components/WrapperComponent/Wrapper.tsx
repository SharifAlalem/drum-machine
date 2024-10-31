import { Component } from "react";
import "./Wrapper.scss";
import Title from "../TitleComponent/Title";
import PadBoard from "../PadBoardComponent/PadBoard";
import Control from "../ControlComponent/Control";

class Wrapper extends Component<{},{displayText:any}>{
    constructor(props:any) {
        super(props);
        this.state = {
            displayText:'Let\s play some music'
        }
    }

    showOnDisplay = (text:string) => {
        this.setState({
            displayText: text
        })
    }

    render() { 
        return (
            <main className='main-wrapper'>
                <div className="drum-kit">
                    <Title text="Drum Machine" subText="Made By Sharif Alalem"/>
                    <div id="drum-machine" className="box">
                        <PadBoard showOnDisplayEvent={this.showOnDisplay}/>
                        <Control display={this.state.displayText}/>
                    </div>
                </div>
            </main>
          );
    }
}
 
export default Wrapper;