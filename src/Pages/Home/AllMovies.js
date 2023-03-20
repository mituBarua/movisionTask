import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Movie from "../../Component/Movie";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const itemsPerPage = 10;

const AllMovies = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    axios
      .request(
        `${process.env.REACT_APP_MOVIE_API}&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const handleSearch = () => {
    navigate(`/search/${searchItem}`);
  };
  const totalPages = Math.ceil(movies.length / itemsPerPage);
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = movies.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <>
      <div className="bg">
        <div className="container">
          <div className="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onInput={(e) => {
                setSearchItem(e.target.value);
              }}
            />
            <button
              className="submit-search"
              type="button"
              onClick={handleSearch}
            >
              <BsSearch className="icon" />
            </button>
          </div>
          <Row className="py-3 my-2">
            {displayedItems?.map((movie) => (
              <Col md="3" sm="6" className="my-2">
                <Movie key={movie.id} movie={movie}></Movie>
              </Col>
            ))}
          </Row>

          <Pagination
            className="justify-content-center"
            size="lg"
            onClick={(e) => e.preventDefault()}
          >
            {Array.from({ length: totalPages }).map((_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === activePage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default AllMovies;
