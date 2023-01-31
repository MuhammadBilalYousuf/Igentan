import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';

export class PostItems extends Component {
   state = {
       imgUrl: '',
       author: '',
       isLoaded: false
   }
   static propTypes = {
       post: PropTypes.object.isRequired
   }
   componentDidMount () {
       const {featured_media, author} = this.props.post;
       const getImageUrl = axios.get(`https://www.asiatopinvestigation.com/wp-json/wp/v2/media/${featured_media}`);
       const getAuthor = axios.get(`https://www.asiatopinvestigation.com/wp-json/wp/v2/users/${author}`);
      
       Promise.all([getImageUrl, getAuthor]).then(res => {
           console.log(res);
           this.setState({
               imgUrl: res[0].data.guid.rendered,
               author: res[1].data.name,
               isLoaded: true
           });
       });
    }
 
   render() {
       const { title, excerpt } = this.props.post;
       const {author, imgUrl, isLoaded} = this.state;
       return (
            <div className="blog-box">
                <img className="blog-img" src={this.state.imgUrl} alt={title.rendered} referrerpolicy="no-referrer" />
                <div className="project-content">
                <h3 className="project-name">{title.rendered}</h3>
                <p className="project-desc" dangerouslySetInnerHTML={{__html: excerpt.rendered}}></p>
                <div className="project-link-wrapper"> 
                <h4 className="project-link project-link-one">Written by: {this.state.author}</h4>
                </div>
                </div>
            </div>
       )
   }
}
export default PostItems