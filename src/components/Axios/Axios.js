import React, {Component} from 'react';
import axios from 'axios';

class Axios extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            const dataFromServer = response.data.slice(0,4);
            const updatedDataFromServer = dataFromServer.map(post => {
                return {
                    ...post,
                    author : 'Obed'
                }
            });
            console.log(updatedDataFromServer);
            this.setState({posts: updatedDataFromServer});
        });
    }

    render() {
        const posts = this.state.posts.map(post => {
            return (<div>{post.title}</div>)
        });
        return (posts);
    }
}
export default Axios;