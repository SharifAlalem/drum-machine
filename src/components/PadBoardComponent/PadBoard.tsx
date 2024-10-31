import { Component , createRef } from "react";
import './PadBoard.scss';
import {SoundsArr} from './SoundsLib.ts';

class PadBoard extends Component <{showOnDisplayEvent:(text: string) => void}>{
    QBtnRef: any;
    WBtnRef: any;
    EBtnRef: any;
    ABtnRef: any;
    DBtnRef: any;
    SBtnRef: any;
    ZBtnRef: any;
    XBtnRef: any;
    CBtnRef: any;
    state:any;

    constructor(props: any) {   
        super(props);
        this.QBtnRef = createRef();
        this.WBtnRef = createRef();
        this.EBtnRef = createRef();
        this.ABtnRef = createRef();
        this.SBtnRef = createRef();
        this.DBtnRef = createRef();
        this.ZBtnRef = createRef();
        this.XBtnRef = createRef();
        this.CBtnRef = createRef();
        this.state = SoundsArr;
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }

    componenetWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }
    
    handleKeyDown = (e:any) => {
        switch (e.keyCode){
            case 81: {
                this.props.showOnDisplayEvent(this.state._81.text);
                this.QBtnRef.current.classList.add('glow');
                this.QBtnRef.current.currentTime = 0;
                this.QBtnRef.current.play();
                break;
            }
            case 87:{
                this.props.showOnDisplayEvent(this.state._87.text);
                this.WBtnRef.current.classList.add('glow');
                this.WBtnRef.current.currentTime = 0;
                this.WBtnRef.current.play();
                break;
            }
            case 69:{
                this.props.showOnDisplayEvent(this.state._69.text);
                this.EBtnRef.current.classList.add('glow');
                this.EBtnRef.current.currentTime = 0;
                this.EBtnRef.current.play();
                break;
            }
            case 65:{
                this.props.showOnDisplayEvent(this.state._65.text);
                this.ABtnRef.current.classList.add('glow');
                this.ABtnRef.current.currentTime = 0;
                this.ABtnRef.current.play();
                break;
            }
            case 83:{
                this.props.showOnDisplayEvent(this.state._83.text);
                this.SBtnRef.current.classList.add('glow');
                this.SBtnRef.current.currentTime = 0;
                this.SBtnRef.current.play();
                break;
            }
            case 68:{
                this.props.showOnDisplayEvent(this.state._68.text);
                this.DBtnRef.current.classList.add('glow');
                this.DBtnRef.current.currentTime = 0;
                this.DBtnRef.current.play();
                break;
            }
            case 90:{
                this.props.showOnDisplayEvent(this.state._90.text);
                this.ZBtnRef.current.classList.add('glow');
                this.ZBtnRef.current.currentTime = 0;
                this.ZBtnRef.current.play();
                break;
            }
            case 88:{
                this.props.showOnDisplayEvent(this.state._88.text);
                this.XBtnRef.current.classList.add('glow');
                this.XBtnRef.current.currentTime = 0;
                this.XBtnRef.current.play();
                break;
            }
            case 67:{
                this.props.showOnDisplayEvent(this.state._67.text);
                this.CBtnRef.current.classList.add('glow');
                this.CBtnRef.current.currentTime = 0;
                this.CBtnRef.current.play();
                break;
            }
        }
    }

    handleKeyUp = (e:any) => {
        switch (e.keyCode){
            case 81: {
                this.QBtnRef.current.classList.remove('glow');
                break;
            }
            case 87:{
                this.WBtnRef.current.classList.remove('glow');
                break;
            }
            case 69:{
                this.EBtnRef.current.classList.remove('glow');
                break;
            }
            case 65:{
                this.ABtnRef.current.classList.remove('glow');
                break;
            }
            case 83:{
                this.SBtnRef.current.classList.remove('glow');
                break;
            }
            case 68:{
                this.DBtnRef.current.classList.remove('glow');
                break;
            }
            case 90:{
                this.ZBtnRef.current.classList.remove('glow');
                break;
            }
            case 88:{
                this.XBtnRef.current.classList.remove('glow');
                break;
            }
            case 67:{
                this.CBtnRef.current.classList.remove('glow');
                break;
            }
        }
    }
     
    handleClick = (e:any) => {
        this.props.showOnDisplayEvent(e.target.id);
        e.target.firstChild.currentTime = 0;
        e.target.firstChild.play();
        e.target.firstChild.classList.add('glow');
        setTimeout(()=>{
            e.target.firstChild.classList.remove('glow');
        },100)
    }

    render() { 
        return ( 
            <div className="pads">
                <div className="btn drum-pad" id={this.state._81.text} onClick={this.handleClick}>
                    <audio id="Q" className="clip" src={this.state._81.src}  ref={this.QBtnRef}></audio>
                    <p>Q</p>
                </div>
                <div className="btn drum-pad" id={this.state._87.text} onClick={this.handleClick}><audio  id="W" className="clip" src={this.state._87.src}  ref={this.WBtnRef}></audio><p>W</p></div>
                <div className="btn drum-pad" id={this.state._69.text} onClick={this.handleClick}><audio  id="E" className="clip" src={this.state._69.src}  ref={this.EBtnRef}></audio><p>E</p></div>
                <div className="btn drum-pad" id={this.state._65.text} onClick={this.handleClick}><audio  id="A" className="clip" src={this.state._65.src}  ref={this.ABtnRef}></audio><p>A</p></div>
                <div className="btn drum-pad" id={this.state._83.text} onClick={this.handleClick}><audio  id="S" className="clip" src={this.state._83.src}  ref={this.SBtnRef}></audio><p>S</p></div>
                <div className="btn drum-pad" id={this.state._68.text} onClick={this.handleClick}><audio  id="D" className="clip" src={this.state._68.src}  ref={this.DBtnRef}></audio><p>D</p></div>
                <div className="btn drum-pad" id={this.state._90.text} onClick={this.handleClick}><audio  id="Z" className="clip" src={this.state._90.src}  ref={this.ZBtnRef}></audio><p>Z</p></div>
                <div className="btn drum-pad" id={this.state._88.text} onClick={this.handleClick}><audio  id="X" className="clip" src={this.state._88.src}  ref={this.XBtnRef}></audio><p>X</p></div>
                <div className="btn drum-pad" id={this.state._67.text} onClick={this.handleClick}><audio  id="C" className="clip" src={this.state._67.src}  ref={this.CBtnRef}></audio><p>C</p></div>
            </div>
         );
    }
}
 
export default PadBoard;