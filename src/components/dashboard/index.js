import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Grid, Card, Button, Header, Divider } from 'semantic-ui-react';

import query from 'src/graphql/queries/listSurvey.gql';

@graphql(query)
class Dashboard extends Component {
  render() {
    const { data } = this.props;
    if (data.loading) {
      return null;
    }

    return (
      <div>
        <Header as="h1">
          پرسشنامه ها
          <Button as={Link} to="/dashboard/survey/new" primary>+</Button>
        </Header>
        <Divider />
        <Grid columns={4} stretched>
          {data.surveys.map(survey => {
              return (
              <Grid.Column key={survey.id}>
                <Card color="purple" centered as={Link} to={`/dashboard/survey/${survey.id}/edit`} header={survey.name} />
              </Grid.Column>
              )
          })}
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
