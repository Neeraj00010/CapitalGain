import React, { useState } from 'react';
import { Input, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;

const News = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const [newsCategory, setSearchTerm] = useState('Cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({ q: newsCategory, count });

  if (!cryptoNews?.news?.news) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
      <Row gutter={[24, 24]}>
        {cryptoNews.news.news.map((newsItem, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={newsItem.link} target="_blank" rel="noreferrer">
                <div className="news-image-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Title className="news-title" level={4} style={{ width: '70%' }}>{newsItem.title}</Title>
                  <img src={newsItem.props.image || demoImage} alt={newsItem.props["image:alt"] || "News"} style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }} />
                </div>
                <p>{newsItem.description.length > 100 ? `${newsItem.description.substring(0, 100)}...` : newsItem.description}</p>
                <div className="provider-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text className="provider-name" style={{ marginLeft: '10px' }}>{newsItem.source}</Text>
                  {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={demoImage} alt="" />
                  </div> */}
                  <Text>{moment(newsItem.date).startOf('ss').fromNow()}</Text>
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
