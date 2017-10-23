import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Grid, Header, Divider, Segment, Label } from 'semantic-ui-react';

import SurveyForm from 'components/forms/surveyForm';
import mutation from 'src/graphql/mutations/createSurvey.gql';

@graphql(mutation)
class SurveyNew extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ name }) {
    this.props.mutate({
      variables: { input: { name } },
    })
    .then(({ data }) => this.props.history.push(`/dashboard/survey/${data.createSurvey.id}/edit`))
    .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        <Header as="h1">تعریف پرسشنامه</Header>
        <Divider />
        <Grid centered columns={2}>
          <Grid.Column>
            <Segment raised>
              <Label color="red" ribbon>مشخصات پرسشنامه</Label>
              <Divider />
              <SurveyForm handleSubmit={this.handleSubmit} />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SurveyNew;
