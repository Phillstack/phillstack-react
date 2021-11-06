import React from "react";
import Card from "react-bootstrap/Card";
import Skeleton from 'react-loading-skeleton';

import './blog.styles.scss';
import { CardDeck, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class BlogPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: null
        };
        this.fetchPostsError = false;
        this.createMarkup = this.createMarkup.bind();
    }

    componentDidMount() {
        fetch("https://blog.phillstack.com/wp-json/wp/v2/posts?per_page=100", {
            method: "GET"
        })
            .then((response) => response.json())
            .catch((error) => {
                this.fetchPostsError = true;
            })
            .then(posts => {
                this.setState({
                    posts: posts
                });
            });
    }

    createMarkup(html) {
        return { __html: html };
    }

    render() {
        return (
            <Container className='postsContainer'>
                <CardDeck className="row">
                    {this.fetchPostsError && <h1>Error fetching posts</h1>}
                    {!this.fetchPostsError && !this.state.posts && this.getskeletonCards(2)}
                    {!this.fetchPostsError && this.state.posts?.map(post => (this.getBlogPost(post)))}
                </CardDeck>
            </Container>
        )
    }

    getskeletonCards(count) {
        var skeletonCards = [];
        for (var i = 0; i < count; i++) {
            skeletonCards.push(
                <Link className="col-sm-4 disabled-link" to='/' key={i}>
                    <Card className="p-1 card col-sm-4">
                        <Skeleton className="card-image" variant="rectangular" />
                        <Card.Body className="card-body">
                            <Card.Title>{<Skeleton />}</Card.Title>
                        </Card.Body>
                        <Card.Footer>{<Skeleton />}</Card.Footer>
                    </Card>
                </Link>
            );
        }
        return skeletonCards;
    }

    getBlogPost(post) {
        return (
            <Link to={post.slug} className="col-sm-4" key={post.id}>
                <Card className="p-1 card col-sm-4">
                    <Card.Img className="card-image" variant="top" src={post.jetpack_featured_media_url} />
                    <Card.Body className="card-body">
                        <Card.Title>{post.title.rendered}</Card.Title>
                    </Card.Body>
                    <Card.Footer>Last Updated {new Date(post.modified).toLocaleDateString(
                        'en-US',
                        {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }
                    )}</Card.Footer>
                </Card>
            </Link>
        )
    }
}

export default BlogPage;