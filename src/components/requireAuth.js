import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {
  Segment,
  Container
} from 'semantic-ui-react';

import Header from 'components/dashboard/header.js';
import query from 'src/graphql/queries/currentUser.gql';

export default WrappedComponent => {
  @graphql(query)
  class RequireAuth extends Component {
    componentWillUpdate(nextprops) {
      if (!nextprops.data.loading && !nextprops.data.currentUser) {
        nextprops.history.push('/login');
      }
    }

    render() {
      if (this.props.data.loading) {
        return null;
      }
      const { currentUser } = this.props.data;
      return (
        <div>
          <Header currentUser={currentUser} />
            <Segment
              vertical
              style={{ margin: '5em 0em 0em', padding: '5em 0em' }} >
              <Container>
                <WrappedComponent {...this.props} />
              </Container>
            </Segment>
        </div>
      )
    }
  }
  return RequireAuth;
}
