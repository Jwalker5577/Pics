import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';



class App extends React.Component{
    state={images: [] }; //connected to OnSearchSubmit

//getting the api
onSearchSubmit= async term => {
    const response = await unsplash.get('https://api.unsplash.com/search/photos', {
        params: {query: term}
    });
    this.setState({images: response.data.results});  //this is us taking the videos and adding it to the webpage
    }

    
    render(){
    return( <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
         </div>
    );
    }
}

export default App;