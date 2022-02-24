import { createApiRef } from '@backstage/core-plugin-api';
// import { List } from '@material-ui/core';

export interface Api {
    name: string;
    // description: string;
    // owner: string;
    // health: string;
}

export interface DocServerApi {
    // listApis: () => Promise<List<Api>>;
    listApis: () => Promise<any>;
}

export const docServerApiRef = createApiRef<DocServerApi>({
    id: 'plugin.docserver-api.service',
});

import { DiscoveryApi } from '@backstage/core-plugin-api';

export class docServerApiClient implements DocServerApi {
    discoveryApi: DiscoveryApi;

    constructor({discoveryApi}: { discoveryApi: DiscoveryApi }) {
        this.discoveryApi = discoveryApi;
    }

    private async fetch<T = any>(input: string, init?: RequestInit): Promise<T> {
        const proxyPath = '/api/proxy';
        const proxyUri = `${await this.discoveryApi.getBaseUrl('proxy')}${proxyPath}`;
        const resp = await fetch(`${proxyUri}${input}`, init);
        if (!resp.ok) throw new Error(resp.statusText);
        const data = await resp.json();
        console.log('data:');
        console.log(data);
        return data;
    }

    // async listApis(): Promise<List<Api>> {
    //     return await this.fetch<List<Api>>('/apis');
    async listApis(): Promise<any> {
        const docServerPath = '/docserver/apis/';
        return await this.fetch<any>(docServerPath);
    }
}
