import React, { Component } from 'react';
import Select from './renderPropsSelect';

const countresUrl = 'https://it-blog-posts.herokuapp.com/api/countries'
const airlinesUrl = 'https://it-blog-posts.herokuapp.com/api/airline'

class Main extends Component {
  render() {
    return (
      <div>
        <Select url={countresUrl} renderProps={
          (data) => {
            return data.map((item) => {
              return (
                <option key={item.id} value={`${item.country}/${item.abbr}`}>
                  {`${item.country}/${item.abbr}`}
                </option>
              )
            })}}
        />
        <br />
        <Select url={airlinesUrl} renderProps={
          (data) => {
            return data.map((item) => {
              return (
                <option key={item.id} value={`${item.airline}`}>
                  {`${item.airline}: ${item.country}`}
                </option>
              )
            })}}
        />
      </div>
    );
  }
}

export default Main;