import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { listSearchAds } from "../../store/actions/adActions";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import Ad from "../../components/Ad/Ad";
import Meta from "../../components/Meta/Meta";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Search = ({ match }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();
  const adSearch = useSelector((state) => state.adSearch);

  const { loading, error, ads } = adSearch;
  useEffect(() => {
    dispatch(listSearchAds(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <Header />
      <Container fluid>
        <Meta title={`Search for ${keyword}`} />
        {/* <h1 className="text-center"> Showing Results for {keyword}</h1> */}
        <Link to="/" className="btn btn-info py-3">
          Go Back
        </Link>
      </Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varaint="danger">{error}</Message>
      ) : (
        <>
          <Container>
            <Row>
              {ads.length > 0
                ? ads.map((ad) => (
                  <Col
                    className="mt-3"
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    key={ad.id}
                  >
                    <Ad ad={ad} />
                  </Col>
                ))
                : "no result found"}
            </Row>
          </Container>
        </>
      )}
      <Footer />
    </>
  );
};

export default Search;
