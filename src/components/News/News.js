import React from "react";
import { Button, Card,CardDeck } from "react-bootstrap";
import Moment from 'react-moment';
import 'moment-timezone';

const News = (props) => {
  // console.log(props.article);
  const { title, description, url, urlToImage, publishedAt } = props.article;

  return (
    <CardDeck  >
    <Card border="info" className="mt-5">
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title className="font-weight-bold">{title}</Card.Title>
        <Card.Text>
          {description}
          
        </Card.Text>
        <Button href={url} target="_blank" variant="info">Read More</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"> Published At {publishedAt}</small>
      </Card.Footer>
  
    </Card>
  </CardDeck>
  

    // <Card className="mt-5">
    //   <Card.Header>Featured</Card.Header>
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text> {description} </Card.Text>
    //     {/* <Button  variant="primary">Read More</Button> */}
    //     <Button href={url} target="_blank">Read More</Button>
    //   </Card.Body>
    // </Card>
  );
};

export default News;
