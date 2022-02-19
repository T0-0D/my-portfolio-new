import React from 'react';
import Iframe from 'react-iframe';
import ReactPlayer from 'react-player';
import '../index.css';
import Section from '../components/Section.js';
import ContentBox from '../components/ContentBox.js';


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
      <h3>Recent Release</h3>
      <div>
        <Iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/940645393&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
      </div>
    </div>
  )
}

const MusicContents3 = () => {
  return (
    <div>
      <h3>Favorite Music Genres (& Artists)</h3>
      <p>
        DJをやっているくらいなのでエレクトロニックを主に聴いてます<br />
        その中でも最近お気に入りの音楽ジャンルとアーティストを抜粋してみました
      </p>
      <h4>Melodic Dubstep🪐</h4>
      <p>
        - 2020年の終わりくらいから聴き始めて、多分今一番聴いているジャンル<br />
        - Dubstepから派生して、いろんなジャンルのいいとこどりをしてる
      </p>
      <ul>
        <li>Illenium</li>
        <li>Seven Lions</li>
        <li>Blanke</li>
        <li>Said The Sky</li>
        <li>ROY KNOX</li>
      </ul>

      <h4>Dubstep🔨</h4>
      <p>
        - 「格好良さ」と「ノリ」を追求した音楽だと思っている（好みは出る）<br />
        - 最近流行りのRiddimとかColor BassはASMRみたいで耳が楽しい<br />
        - コロナ明けたらBass Music系のフェスに行きたい
      </p>
      <ul>
        <li>Excision</li>
        <li>Wooli</li>
        <li>Ray Volpe</li>
        <li>Rezz</li>
      </ul>

      <h4>Tech House⛱
      </h4>
      <p>
        - DJするときのメインジャンル<br />
        - 抜けた雰囲気が好き（プールサイドとかで流したい）
      </p>
      <ul>
        <li>Mr. Belt & Wezol (My Best DJ👑)</li>
        <li>Guz</li>
        <li>Low Steppa</li>
      </ul>

      <h4>Drum & Bass🌼</h4>
      <p>
        - 最近作業用のBGMとして聴いいている、特にLiquid Drum & Bassは雰囲気がとても良い<br />
        - まだ聴き始めたばかりなのでもっと深掘りしていきたい        
      </p>
      <ul>
        <li>Fred V (UKFのDJ setがとても良い)</li>
      </ul>

      
      <h4>Progressive House✨</h4>
      <p>
        - 数年前をピークで聴いていた（最近あまり聴いていない）<br />
        - イベントで流すとみんなで盛り上がれるから良いね！
      </p>
      <ul>
        <li>Avicii (RIP)</li>
        <li>Vicetone</li>
        <li>Kygo</li>
      </ul>

      <h4>Psychedelic Trance🍄</h4>
      <p>
        - エレクトロニック音楽界の危険因子<br />
        - 高校の時は聴いていることを誰にも言いませんでした
      </p>
      <ul>
        <li>Blastoyz</li>
        <li>Astorix</li>
      </ul>

      <h4>Punk Rock🎸</h4>
      <p>
        - Rockも一時期たくさん聴いていた<br />
        - Punk全盛期の2000年代は独特なノスタルジックな雰囲気があるので好き
      </p>
      <ul>
        <li>My Chemical Romance</li>
        <li>Fall Out Boy</li>
        <li>Taking Back Sunday</li>
        <li>Reliant K</li>
      </ul>
      
      <h4>Other Favorite Artists (Any Genre)</h4>
      <ul>
        <li>Porter Robinson</li>
        <li>Madeon</li>
        <li>Lemaitre</li>
        <li>Billie Eilish</li>
        <li>Coldplay</li>
        <li>Oasis</li>
      </ul>
      <p>I really love various kind of music even if it's not listed here!</p>
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