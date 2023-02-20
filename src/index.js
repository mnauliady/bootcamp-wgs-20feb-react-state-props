import React from "react";
import ReactDOM from "react-dom/client";
import { faker } from "@faker-js/faker";
import moment from "moment/moment";
import "semantic-ui-css/semantic.min.css";
import FeedExampleBasic from "./feed";

// data
const dataComment = [
  {
    // faker tanggal
    // menggunakan moment untuk selisih data sekarang dan data post dibuat
    date: moment(faker.date.recent()).fromNow(),
    // faker image (avatar)
    image: faker.image.avatar(),
    // faker nama
    name: faker.name.firstName(),
    // faker paragraf
    comment: faker.lorem.lines(),
    like: 3,
  },
  {
    date: moment(faker.date.recent()).fromNow(),
    image: faker.image.avatar(),
    name: faker.name.firstName(),
    comment: faker.lorem.lines(),
    like: 4,
  },
  {
    date: moment(faker.date.recent()).fromNow(),
    image: faker.image.avatar(),
    name: faker.name.firstName(),
    comment: faker.lorem.lines(),
    like: 0,
  },
];

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="ui feed">
        <div className="event">
          <div className="label">
            {/* <img src={element.image} /> */}
            <img src={this.props.image} />
          </div>
          <div className="content">
            <div className="summary">
              {/* <a className="user">{element.name}</a> */}
              <a className="user">{this.props.name}</a>
              {/* <div className="date">{element.date.toString()}</div> */}
              <div className="date">{this.props.date}</div>
              <div className="like">Liked : {this.props.like + this.state.count}</div>
              {/* <div className="like">{this.state.count}</div> */}
            </div>
            <div className="meta">
              {/* <div>{element.comment}</div> */}
              <div>{this.props.comment}</div>
            </div>
            <div>
              <button onClick={() => this.setState({ count: this.state.count + 1 })}>click me!</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return this.props.data.map((dataComment, index) => (
      <div className="commentContainer" key={index}>
        <CommentContainer
          image={dataComment.image}
          name={dataComment.name}
          date={dataComment.date}
          comment={dataComment.comment}
          like={dataComment.like}
        />
      </div>
    ));
  }
}

const root = ReactDOM.createRoot(document.getElementById("feed"));

// render data dari fungsi FeedExampleBasic pada file feed.js
root.render(<Comments data={dataComment} />);

class Counting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>you clicked {this.state.count} times</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>click on me!</button>
      </div>
    );
  }
}

const count = ReactDOM.createRoot(document.getElementById("count"));

// render data dari fungsi FeedExampleBasic pada file feed.js
// count.render(<Counting />);
