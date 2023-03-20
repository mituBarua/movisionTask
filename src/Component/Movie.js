import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Movie({movie}) {
    const {id,title,poster_path,year} = movie
  return (
    <div>
        <Card className='movie-card' >
                <Card.Img variant="top" className="campaign-img" src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} />
                <Card.Body>
                    <Card.Title className='movie-title'>{title.slice(0,30)}</Card.Title>
                    <Card.Text>
                      {year}
                    </Card.Text>
                    <Link to={`/movie/${id}`}>
                        <Button className="more-btn" >More</Button>
                    </Link>
                   
                </Card.Body>
            </Card>
    </div>
  )
}
