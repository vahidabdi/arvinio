import React from 'react';
import {
  Segment,
  Container,
  Menu,
  Item,
  Button,
  Header,
  Icon
} from 'semantic-ui-react';

const Landing = () => (
    <div>
      <Segment
        textAlign='center'
        style={{ minHeight: '100vh', padding: '1em 0em' }}
        vertical>
        <Container>
          <Menu pointing secondary size='large'>
            <Menu.Item as='a' active>آروینیو</Menu.Item>
            <Menu.Item position='right'>
            <Button as='a' href='/login' style={{ marginLeft: '0.5em' }}>ورود</Button>
            <Button as='a' href='/login'>ثبت نام</Button>
            </Menu.Item>
          </Menu>
        </Container>

        <Container text>
          <Header
            as='h1'
            content='آروینیو'
            style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }} />
          <Header
            as='h2'
            content='طراحی و ساخت پرسشنامه'
            style={{ fontSize: '1.7em', fontWeight: 'normal' }} />
          <Button primary size='huge'>
            شروع کنید
          </Button>
        </Container>

      </Segment>
    </div>
);

export default Landing;
