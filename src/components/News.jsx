import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;

const News = ({ simplified }) => {
  const limit = simplified ? 10 : 100;
  const { data: cryptoNews } = useGetCryptoNewsQuery({ page: '1', limit, time_frame: '24h' });

  if (!cryptoNews) return <Loader />;

  return (
    <>
      <Row gutter={[24, 24]}>
        {cryptoNews.map((newsItem, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={newsItem.link} target="_blank" rel="noreferrer">
                <div className="news-image-container" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                  <Title className="news-title" level={4} style={{ width: '70%' }}>{newsItem.title}</Title>
                  <img 
                    src={newsItem.media[0] || demoImage} 
                    alt="News" 
                    style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover', padding: '5px' }} 
                  />
                </div>
                <p>{newsItem.summary.length > 100 ? `${newsItem.summary.substring(0, 100)}...` : newsItem.summary}</p>
                <div className="provider-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
                  <Text className="provider-name" style={{ marginLeft: '10px' }}>
                    <strong>Author: </strong>
                    {newsItem.authors && newsItem.authors.length > 0 ? newsItem.authors[0].name : 'Unknown Author'}
                  </Text>
                  <Text>
                    <strong>Published: </strong>
                    {moment(newsItem.published).startOf('ss').fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
