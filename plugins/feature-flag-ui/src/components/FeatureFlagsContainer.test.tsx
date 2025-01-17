import React from 'react';
import { FeatureFlagsContainer } from './FeatureFlagsContainer';
import { ThemeProvider } from '@material-ui/core';
import { lightTheme } from '@backstage/theme';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { setupRequestMockHandlers, renderInTestApp } from '@backstage/test-utils';

describe('FeatureFlagsContainer', () => {
  const server = setupServer();
  // Enable sane handlers for network requests
  setupRequestMockHandlers(server);

  // setup mock response
  beforeEach(() => {
    server.use(
      rest.get('/*', (_, res, ctx) => res(ctx.status(200), ctx.json({}))),
    );
  });

  it('should render', async () => {
    const rendered = await renderInTestApp(
      <ThemeProvider theme={lightTheme}>
        <FeatureFlagsContainer />
      </ThemeProvider>,
    );
    expect(rendered.getByText('Feature Flags')).toBeInTheDocument();
  });
});
