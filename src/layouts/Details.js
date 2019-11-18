import React from 'react';
import Card from '../components/Card';

const Details = ({ history }) => <Card data={history.location.state} />;

export default Details;
