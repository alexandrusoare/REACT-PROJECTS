import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import flv from 'flv.js';
import './StreamShow.css';

class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream)
      return;

    const id = this.props.match.params.id;

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8005/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();

  }

  render(){
    if (!this.props.stream){
return <div>Loading...</div>
}
const {title,description} = this.props.stream;

return (<div className='ui grid'>
        <div className='ui row'>
        <div className='eleven wide column'>
    
    <video ref={this.videoRef} style={{width: '100%'}} controls={true} />
    

    <div className="ui segment">
       <h4 className="ui header">{title}</h4> 
<p>{description}</p></div></div>


        <div className='five wide column'>

            <div id='comment-section' className='ui card'>
                <div className='content'>
                    <div className='header'>Comments</div>
            </div>

            <div className='content' style= {{height:'80%'}}>
                <div id='chat'></div>
            </div>

            <div className='content'>
            <div className="ui action input" style={{width: '100%'}}>
<input type="text" placeholder="Message..." />
<button className="ui primary button">Send</button>
            </div>
            </div>
            </div>
        </div>
        
        </div>
        </div>
    )}}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);
