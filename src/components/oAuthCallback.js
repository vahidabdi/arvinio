import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import 'url-search-params-polyfill';
import mutation from 'src/graphql/mutations/oAuthLogin.gql';


@graphql(mutation)
class OAuthCallback extends Component {
  constructor(props) {
    super(props);
    this.doLogin = this.doLogin.bind(this);
  }

  componentWillMount() {
    this.doLogin();
  }

  doLogin() {
    const provider = this.props.match.params.provider;
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const code = params.get('code');

    this.props.mutate({
      variables: {
        provider,
        code
      },
    })
      .then(({ data }) => {
        localStorage.setItem('jwt', data.login.jwt);
        this.props.history.push('/dashboard');
      })
      .catch(error => {
        this.props.history.push('/');
      });
  }

  render() {
    return null;
  }
}
export default OAuthCallback;
