import { Component } from "react";
import './Control.scss';

class Control extends Component<{display:any}> {
    constructor(props: any) {
        super(props);
    }
    render() { 
        return (
            <div className="options">
                <div id="display" className="display">{this.props.display}</div>
                {/* <div className="volume-control-bar">volume</div>
                <div className="row">
                    <div className="toggle theme">themeToggle</div>
                    <div className="toggle instrument">InstrumentToggle</div>
                </div> */}
            </div>
          );
    }
}
 
export default Control;