import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import './blog.styles.scss';

class BlogPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.createMarkup = this.createMarkup.bind();
    }

    componentDidMount() {
        axios.get("https://xdn.xfq.mybluehost.me/wp-json/wp/v2/posts").then(posts => {
            this.setState({
                posts: posts.data
            });
        });
    }

    createMarkup(html) {
        return { __html: html };
    }

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 mv6 shadow-5 center">
                <div>
                    {this.state.posts.map(post => (
                        <Link to={`/${post.slug}`} key={post.id}>
                            <div className="card" key={post.id}>
                                <div className="card-content">
                                    <h3>{post.title.rendered}</h3>
                                    <div
                                        dangerouslySetInnerHTML={this.createMarkup(
                                            post.excerpt.rendered
                                        )}
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </article>
        )
    }
}

export default BlogPage;