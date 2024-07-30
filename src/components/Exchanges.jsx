import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import { useGetExchangesQuery } from '../services/cryptoExchangesApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;
const demoImage = 'https://media.licdn.com/dms/image/D4D12AQFSxA0f9XMSeQ/article-cover_image-shrink_720_1280/0/1683356340795?e=2147483647&v=beta&t=2XoCzxtydyVx2hObvKrz6cXxuTF_b9sc-kDW6aSRNr4';

const Exchanges = () => {
  const { data: exchangesList, isFetching } = useGetExchangesQuery();

  if (isFetching) return <Loader />;

  if (!exchangesList) return <div>No data available</div>;

  return (
    <>
      <Row>
        <Col span={6}><strong>Exchanges</strong></Col>
        <Col span={6}><strong>API Status</strong></Col>
        <Col span={6}><strong>24h Trade Volume</strong></Col>
        <Col span={6}><strong>Sessions per Month</strong></Col>
      </Row>
      <Row>
        {exchangesList.map((exchange, index) => (
          <Col span={24} key={exchange.id}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={(
                  <Row key={exchange.id}>
                    <Col span={6}>
                      <Text><strong>{index + 1}. </strong></Text>
                      <Avatar className="exchange-image" src={demoImage} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>{exchange.api_status ? 'Active' : 'Inactive'}</Col>
                    <Col span={6}>${millify(exchange.quotes.USD.reported_volume_24h)}</Col>
                    <Col span={6}>{millify(exchange.sessions_per_month)}</Col>
                  </Row>
                )}
              >
                <p>{exchange.description}</p>
                <a href={exchange.links?.website[0]} target="_blank" rel="noopener noreferrer">
                  {exchange.links?.website[0]}
                </a>
                <p>{exchange.message}</p>
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
