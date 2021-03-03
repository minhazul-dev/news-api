import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Jumbotron className="bg-secondary mt-5">
        <h1 className=" text-white font-weight-bold">Top News</h1>
        <p className="text-white text-monospace ">
        Top headlines from TechCrunch right now !
        </p>
        <p>
          <Button variant="outline-warning">Learn more</Button>
        </p>
      </Jumbotron>
    );
};

export default Header;

// 9ab298fd9ed848eabd2edcca718b6421  news api key