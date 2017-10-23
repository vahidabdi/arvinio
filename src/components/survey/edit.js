import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Divider, Grid, Segment } from 'semantic-ui-react';

import query from 'src/graphql/queries/getSurvey.gql';


@graphql(query, { options: props => ({ variables: { id: props.match.params.survey_id }})})
class SurveyEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  render() {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <Divider horizontal>
          {data.survey.name}
        </Divider>
        <Grid centered columns={2}>
          <Segment padded>
          </Segment>
        </Grid>
      </div>
    )
  }
}

export default SurveyEdit;
