type pluginManifestTypes = {
  title: string;
  description: string;
  url: string;
  image: string;
  tags: Array<string>;
};

/**
 * Add any plugins/tools to the pluginManifest that should be found within the
 * plugins page.
 */
export const pluginManifest: pluginManifestTypes[] = [
  {
    title: 'Starter Guide',
    description: 'Start here if your new to embark!',
    url: '/starter-guide',
    image: '',
    tags: ['getting-started', 'doc'],
  },
  {
    title: 'Feature-Flags',
    description: 'Allows users to toggle client-side features on Embark',
    url: '/feature-flags',
    image: '',
    tags: ['feature-flag'],
  },
  {
    title: 'Datadog Dashboard',
    description:
      'Provides build-time overviews, errors, and other information for Embark',
    url: '/datadog',
    image: '',
    tags: ['datadog', 'logs', 'errors', 'dashboard'],
  },
  {
    title: 'Provider Dashboard',
    description: '',
    url: '/provider-dashboard',
    image: '',
    tags: ['dashboard'],
  },
  {
    title: 'Tech Radar',
    description:
      'Tech Radar is a list of technologies, complemented by an assessment result, called ring assignment.',
    url: '/tech-radar',
    image:
      'https://storage.googleapis.com/wf-blogs-engineering-media/2018/09/fe13bb32-wf-tech-radar-hero-1024x597.png',
    tags: ['standards', 'landscape'],
  },
];