import React from 'react';
import { Card } from 'antd';

const style = { width: '30%', margin: '1em', cursor: 'pointer' };

const CardInfo = ({ data, onClick }) => (
  <Card
    title={data.name}
    size="small"
    style={style}
    onClick={() => onClick(data)}
  >
    <p>Class: {data.class}</p>
    <p>Roll Number: {data.rollNo}</p>
    <p>Marks: {data.marks}</p>
  </Card>
);

export default CardInfo;
