import React, { Component } from 'react'
import './posts.css'
import axios from 'axios';
import PostItems from './PostItems';

export class Posts extends Component {
   state = {
       posts: [],
       isLoaded: false
   }

 componentDidMount () {
   axios.get('https://www.asiatopinvestigation.com/wp-json/wp/v2/posts/')
       .then(res => this.setState({
        posts: res.data,
           isLoaded: true
       }))
       .catch(err => console.log(err))
   }

   render() {
    const {posts, isLoaded} = this.state;
    return (
        <section className="archives section" id="archives">
            {/* <div className="projects-title-wrapper container">
                <h1 className="projects-title">BLOGS</h1>
            </div>
            <div className="projects-container-blogs container grid">
            {posts.map(post =>
            <PostItems key={post.id} post={post}/>
            )}
            </div> */}
            
        </section>
       
        );
    }
}

export default Posts