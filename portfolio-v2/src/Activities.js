import React from 'react';
import './index.css';
import Section from './components/Section.js'
import ContentBox from './components/ContentBox.js'

const Development = () => {
  return (
    <div>
      <h3>開発 Development</h3>
      <p>フロントでReact.jsを、バックでGolangを使用した開発することが目標です<br />GitやShell Scriptも勉強しています</p>
      <p>＜勉強中・興味のある言語＞</p>
      <ul>
        <li>JavaScript 特に React.js</li>
        <li>HTML / CSS</li>
        <li>Golang</li>
        <li>Git / GitHub</li>
        <li>Shell Script</li>
      </ul><br />
      <h3>ビジュアルデザイン Visual Designing</h3>
      <p>情報が伝わりやすいミニマルデザインの仕組みを勉強中です</p>
      <p>＜使用ソフト＞<br />Adobe Illustrator / Adobe Photoshop / Microsoft Powerpoint 他</p>
      <ul>
        <li>学生アルバイトとしての大学構内掲示用ポスターの作成（毎月一回程度）</li>
        <li>会津大学2021年度オンライン学園祭のYouTubeサムネイル作成</li>
        <li>Microsoft Powerpointでの会議資料作成</li>
        </ul><br />
      <h3>言語習得（英語） Linguistic (English)</h3>
      <p>大学2年ごろから「英語を毎日話す」を目標に英語の習得に励んでいます</p>
      <ul>
        <li>2021年4月〜 会津大学 "Global Lounge" Student Assistant (学生アルバイト）</li>
        <li>2021年7月 TOEIC Score: 800 (Highest)</li>
      </ul><br />
      <h3>音声信号処理 Audio Signal Processing </h3>
      <p>3年次から配属になる研究室では、音声信号を機械学習を用いて処理する研究を行う予定です</p>
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