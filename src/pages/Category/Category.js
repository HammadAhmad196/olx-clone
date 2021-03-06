import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { listFilterAds } from "../../store/actions/adActions";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import Meta from "../../components/Meta/Meta";
import Ad from "../../components/Ad/Ad";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Category = ({ match }) => {
  const category = match.params.cat;
  const filter = `cat=${category}`;
  const dispatch = useDispatch();
  const adFilter = useSelector((state) => state.adFilter);
  const { loading, error, ads } = adFilter;
  useEffect(() => {
    dispatch(listFilterAds(filter));
  }, [dispatch, category, filter]);
  return (
    <>
      <Header />
      <Container fluid>
        <h1 className="text-center"> Showing Results for {category}</h1>
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
            <Meta title={filter.split("=")[1].toLocaleUpperCase()} />
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

export default Category;
