import React from 'react';
import '../index.css';
import Section from '../components/Section.js'
import ContentBox from '../components/ContentBox.js'


const MusicContents1 = () => {
  return (
    <div>
      <h3>My Musical Activities</h3>
      <h4>1. DJ</h4>
      <h4>2. Music Production</h4>

    </div>
  )
}

const MusicContents2 = () => {
  return (
    <div>
      <h3>My Musical Activities</h3>
      <h4>1. DJ</h4>
      <h4>2. Music Production</h4>

    </div>
  )
}

const MusicContents3 = () => {
  return (
    <div>
      <h3>My Musical Activities</h3>
      <h4>1. DJ</h4>
      <h4>2. Music Production</h4>

    </div>
  )
}

function Music() {
    return (
      <div className="contents">
        <Section name="Music"/>
        <ContentBox>
          <MusicContents1 />
        </ContentBox>
        <ContentBox>
          <MusicContents2 />
        </ContentBox>
        <ContentBox>
          <MusicContents3 />
        </ContentBox>
      </div>
      );
  }
  export default Music;