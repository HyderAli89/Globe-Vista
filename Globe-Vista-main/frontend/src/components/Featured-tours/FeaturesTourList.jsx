import React from 'react';
import TourCard from '../../shared/TourCard.jsx';
import { Col, Row } from 'reactstrap';
import useFetch from './../../hooks/useFetch.js';
import { BASE_URL } from '../../utils/config.js';

const FeaturesTourList = () => {
  // Fetching featured tours from the API
  const { data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  // Logging the fetched data for debugging purposes
  console.log(featuredTours);


  return (
    <div>
      <Row>
       {
        loading && <h4>Loading...</h4>
       }
       {
        error && <h4>{error}</h4>
       }
          {!loading && !error  && featuredTours?.map((tour) => (
            <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
              <TourCard tour={tour} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default FeaturesTourList;
