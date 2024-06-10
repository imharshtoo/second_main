// src/components/Reviews.js
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const reviewsData = [
    { title: "High Base", count: 934, percentage: 34, score: 0.78 },
    { title: "Affordable", count: 811, percentage: 28, score: 0.78 },
    { title: "Quality", count: 456, percentage: 21, score: 0.78 },
    { title: "Expensive", count: 245, percentage: 15, score: 0.78 },
    { title: "Effective", count: 111, percentage: 9, score: 0.78 },
    { title: "Packaging", count: 19, percentage: 3, score: 0.78 },
];

const Reviews = () => {
    return (
        <div>
            <h1>Reviews</h1>
            <Row>
                {reviewsData.map((review, index) => (
                    <Col key={index} xs={12} md={6} lg={4}>
                        <Card style={{ marginBottom: '20px' }}>
                            <Card.Body>
                                <Card.Title>{review.title}</Card.Title>
                                <div style={{ width: '100px', margin: '0 auto' }}>
                                    <CircularProgressbar
                                        value={review.score * 100}
                                        text={review.score.toFixed(2)}
                                        styles={buildStyles({
                                            textColor: 'black',
                                            pathColor: 'green',
                                            trailColor: 'red',
                                        })}
                                    />
                                </div>
                                <p>{review.count} ({review.percentage}%)</p>
                                <p>reviews</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Reviews;
