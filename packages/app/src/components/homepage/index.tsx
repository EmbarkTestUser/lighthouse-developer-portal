import { Grid } from '@material-ui/core';
import React, { PropsWithChildren } from 'react';
import {
  Content,
  ContentHeader,
  Header,
  InfoCard,
  Page,
} from '@backstage/core';
import { useFeatureFlags } from '@internal/plugin-feature-flags';

const homepage: any = {
  title: 'DVP Portal Homepage',
  component: InfoCard,
};

export default homepage;

const Wrapper = ({ children }: PropsWithChildren<{}>) => (
  <Grid container spacing={4}>
    <Grid item xs={4}>
      {children}
    </Grid>
  </Grid>
);

export const HomePage = () => {
  const { isActive } = useFeatureFlags();

  return (
    <Page themeId="home">
      <Header title="DVP Developer Portal Homepage" />
      <Content>
        {'cool stuff' && <ContentHeader title="more cool stuff" />}
        <Wrapper>
          <InfoCard title="Information Card" subheader="Subheader">
            'This is the home page'
          </InfoCard>
        </Wrapper>
        <Wrapper>
          {isActive('home-feature') ? (
            <InfoCard title="Home Feature" subheader="Some cool new feature!">
              'This component was shown because the Home Feature is enabled!'
            </InfoCard>
          ) : (
            <InfoCard title="Home Feature" subheader="A safe expected feature.">
              'This component was shown because the Home Feature is disabled!'
            </InfoCard>
          )}
        </Wrapper>
      </Content>
    </Page>
  );
};