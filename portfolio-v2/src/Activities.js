import React from 'react';
import './index.css';
import Section from './components/Section.js'
import ContentBox from './components/ContentBox.js'

const Development = () => {
  return (
    <div>
      <h3>開発 Development</h3>
      <p>aaa</p>
      <ul>
        <li>Golang</li>
        <li></li>
      </ul>
      <h3>ビジュアルデザイン Visual Designing</h3>
      <p>分かりやすく、見て楽しいモダンなデザインを目標に、視覚的デザインを勉強中です</p>
      <p>＜使用ソフト＞<br />Adobe Illustrator / Adobe Photoshop / Microsoft Powerpoint 他</p>
      <ul>
        <li>学生アルバイトとしての大学構内掲示用ポスターの作成（毎月一回程度）</li>
        <li>会津大学2021年度オンライン学園祭のYouTubeサムネイル作成</li>
        <li>Microsoft Powerpointでの会議資料作成</li>
        </ul>
      <h3>言語習得 Linguistic (Mainly English)</h3>
      <p>大学2年ごろから「英語を毎日話す」を目標に言語の習得に励んでいます。</p>
      <ul>
        <li>会津大学 "Global Lounge" Student Assistant (SA) での学生アルバイト</li>
        <li>毎週月曜日の</li>
        <li>Latest TOEIC Score: 800 (Highest)</li>
        <li>英検 2級</li>
      </ul>
    </div>
  );
}


function Activities() {
    return (
      <div className="contents">
        <Section name="Current Activities" />
        <ContentBox>
          <Development />
        </ContentBox>
      </div>
      );
  }
  export default Activities;