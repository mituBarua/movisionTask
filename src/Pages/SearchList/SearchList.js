import React, { useState, useEffect } from "react";
import { Row, Col, Pagination } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import Movie from "../../Component/Movie";
import Loading from "../../Component/Loading";

const itemsPerPage = 10;
export default function SearchList() {
  const { searchItem } = useParams();
  const [searchResult, setSearchResult] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(true);
  const getMoviesByTitle = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_SEARCH_API}`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        query: searchItem,
      },
    });
    setSearchResult(data.results);
    setLoading(false);
  };
  useEffect(() => {
    getMoviesByTitle();
  });
  const totalPages = Math.ceil(searchResult.length / itemsPerPage);
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = searchResult.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  if (loading) {
    return (
     <Loading/>
    );
  }
  return (
    <div className="bg">
      <div className="container">
        <Row className="py-3">
          {displayedItems?.map((movie) => (
            <Col md="3" sm="6" className="my-2">
              <Movie key={movie.id} movie={movie}></Movie>
            </Col>
          ))}
        </Row>
        <Pagination
          className="justify-content-center pagination"
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
  );
}
