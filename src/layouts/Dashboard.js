import React from 'react';
import { Card, Skeleton, Avatar } from 'antd';
import Header from './Header';
import styles from './styles.module.css';
import CardInfo from '../components/Card';

const { Meta } = Card;

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentInfo: []
    };
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/1dlper')
      .then(response => response.json())
      .then(response => {
        let obj = Object.values(response);
        let newObject = obj.map(value => ({
          ...value,
          marks: Object.values(value.marks).reduce((a, b) => a + b)
        }));
        this.setState(
          {
            studentInfo: newObject,
            filteredInfo: newObject
          },
          () => {
            this.alphaFilter(false);
            this.marksFilter(false);
          }
        );
      });
  }

  filterResults = value => {
    let Value = value.toLowerCase();
    const { studentInfo } = this.state;
    let filteredInfo = [];
    filteredInfo = studentInfo.filter(info =>
      info.name.toLowerCase().includes(Value)
    );
    this.setState({ filteredInfo, filteredValue: Value });
  };

  alphaFilter = value => {
    const { filteredInfo } = this.state;
    let improvedFilter = filteredInfo.sort(function(a, b) {
      var nameA = value ? a.name.toUpperCase() : b.name.toUpperCase(); // ignore upper and lowercase
      var nameB = value ? b.name.toUpperCase() : a.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    this.setState({ filteredInfo: improvedFilter });
  };

  marksFilter = value => {
    const { filteredInfo } = this.state;
    let improvedFilter = filteredInfo.sort(
      (a, b) =>
        parseFloat(value ? a.marks : b.marks) -
        parseFloat(value ? b.marks : a.marks)
    );
    this.setState({ filteredInfo: improvedFilter });
  };

  cardClick = value => {
    this.props.history.push(`/${value.rollNo}`, value);
  };

  render() {
    const { studentInfo, filteredInfo } = this.state;
    return (
      <div>
        <Header
          filterResults={this.filterResults}
          alphaFilter={this.alphaFilter}
          marksFilter={this.marksFilter}
        />
        {studentInfo.length > 0 ? (
          <div className={styles.cards_container}>
            {filteredInfo.map(value => (
              <CardInfo data={value} onClick={this.cardClick} />
            ))}
          </div>
        ) : (
          <div className={styles.loading_container}>
            {[...Array(8).keys()].map(key => (
              <Card style={{ width: 300, marginTop: 16 }}>
                <Skeleton loading avatar active>
                  <Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                  />
                </Skeleton>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }
}
