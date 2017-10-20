import React from 'react';
import {
  Grid,
  Column,
  Header,
  Button,
  Icon
} from 'semantic-ui-react';

const GOOGLE_REDIRECT = 'https://accounts.google.com/o/oauth2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&client_id=668531569847-6fu5bilrdgn0k977tfppho5s45b4dfp9.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Fgoogle%2Fcallback&response_type=code';

const Login = () => (
    <div>
      <Grid
        textAlign='center'
        style={{ height: '100vh' }}
        verticalAlign='middle' >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            ورود
          </Header>
          <Button fluid size='large' as='a' href={GOOGLE_REDIRECT} color='google plus'>
            <Icon name='google' /> Google
          </Button>
        </Grid.Column>
      </Grid>
    </div>
);

export default Login;
