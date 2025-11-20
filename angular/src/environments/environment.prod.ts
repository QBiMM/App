import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44319/',
  redirectUri: baseUrl,
  clientId: 'TravelApp_App',
  responseType: 'code',
  scope: 'offline_access TravelApp',
  requireHttps: true,
};

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'TravelApp',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44319',
      rootNamespace: 'TravelApp',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
  remoteEnv: {
    url: '/getEnvConfig',
    mergeStrategy: 'deepmerge'
  }
} as Environment;
