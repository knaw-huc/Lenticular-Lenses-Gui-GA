import React, { Component } from 'react';
import list from './test';


const nameList = list;


export class TestA extends React.Component {
  //const socialMediaList = list;

  render() {
    return (
      <ul>
          {projectList.map(project => (<li>{item.prName}</li>))}
      </ul>

      );
    }
  }
