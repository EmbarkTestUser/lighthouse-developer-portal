import { createApiRef } from '@backstage/core-plugin-api';
import { DiscoveryApi } from '@backstage/core-plugin-api';

export interface API {
  name: string;
}

export interface DocServerApi {
  listApis: () => Promise<API[]>;
}

export const docServerApiRef = createApiRef<DocServerApi>({
  id: 'plugin.docserver-api.service',
});

export class DocServerApiClient implements DocServerApi {
  discoveryApi: DiscoveryApi;

  constructor({ discoveryApi }: { discoveryApi: DiscoveryApi }) {
    this.discoveryApi = discoveryApi;
  }

  private async fetch<T = any>(input: string, init?: RequestInit): Promise<T> {
    const proxyUri = `${await this.discoveryApi.getBaseUrl('proxy')}`;
    const resp = await fetch(`${proxyUri}${input}`, init);
    if (!resp.ok) throw new Error(resp.statusText);
    const data = await resp.json();
    return data;
  }

  async listApis(): Promise<any> {
    const docServerPath = '/docserver/apis/';
    return await this.fetch<API[]>(docServerPath);
  }
}