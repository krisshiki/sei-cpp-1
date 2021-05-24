import React from 'react';
import { Link } from 'gatsby';
import { Header } from 'components/theme';
import { Container, Button, Card } from 'components/common';
import { Wrapper, IntroWrapper, Details, Cover } from './styles';
import agile from 'assets/illustrations/agile.png'
import ba from 'assets/illustrations/ba.png'
import la from 'assets/illustrations/la.jpg'
import cp from 'assets/bg/connection-pattern.svg'
import ap from 'assets/bg/advantages-bottom-pattern.svg'
import at from 'assets/bg/advantages-top-pattern.svg'


export const Intro = () => {

  return (
    <Wrapper >
      <Header />
      {/* <img src={ap} style={{ marginTop: '9rem', marginBottom: '-2rem' }} /> */}
      {/* <div style={{ background: 'white' }}> */}
      <IntroWrapper as={Container}>
        <Details>
          <Cover>
            <div className='cov'>
              <img src={la} width='1000rem' />
              <h2>Make Your Business Faster</h2>
            </div>
          </Cover>
          <Card pad='3rem 0 0 0'>
            <h3>我々は<span style={{ color: '#2196f3', fontSize: '2rem' }}>Global</span>で<span style={{ color: '#00acc1', fontSize: '2rem' }}>Creative</span>な人材の育成をサポートしています。</h3>
            <ul className='top-banner'>
              <li><img src={agile} /></li>
              <li><img src={ba} /></li>
            </ul>
            <h3>カルフォルニアでBAやAgileを学んでみませんか？</h3>
            <Link to={'/contact'}><Button>お問い合わせ</Button></Link>
          </Card>
        </Details>
      </IntroWrapper>
      {/* </div> */}
      {/* <img src={at} style={{ marginTop: '0rem' }} /> */}
    </Wrapper>
  );
};
