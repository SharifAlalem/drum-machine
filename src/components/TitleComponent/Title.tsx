import { Component } from "react";
import { TitleProps,TitleState } from "../../types";
import './Title.scss';

class Title extends Component<TitleProps, TitleState> {
    constructor(props: TitleProps) {
        super(props);
        this.state = { glow:false };
    }

    handleHover = () => {
        this.setState({glow:!this.state.glow})
    }

    render() { 
        return ( 
            <header onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className="row title">
                <h1 className={this.state.glow === true ? 'active' : ''}>{this.props.text}</h1>
                <p className={this.state.glow === true ? 'active' : ''}>{this.props.subText}</p>
            </header>
         );
    }
}
 
export default Title;