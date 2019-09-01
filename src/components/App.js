import React from 'react';
import Search from './Search';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    state={
        videos:[],
        selectedVideo: null
    }

    componentDidMount =()=>{
        this.onTermSubmit('React Native');
    }
    
    onTermSubmit = async(term) => {
       const response = await youtube.get('/search',{
            params:{
            q: term
            }
        });
            this.setState({
                videos : response.data.items,
                selectedVideo: response.data.items[0]
            })
    };

    onVideoSelect = video =>{
        this.setState({
            selectedVideo: video
        })
    };

    render(){
        return (
        <div style={{backgroundColor:'#000'}}>
            <div className="ui container body">
                <Search onFormSubmit={this.onTermSubmit}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className='five wide column'>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;