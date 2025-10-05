import { Environment } from '@abp/ng.core';

const baseUrl = 'https://nicolasrodriguezdev.com.ar';

const oAuthConfig = {
  issuer: 'https://nicolasrodriguezdev.com.ar/api/',
  redirectUri: baseUrl,
  clientId: 'TravelApp_App',
  responseType: 'code',
  scope: 'offline_access openid profile email phone TravelApp',
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
      url: 'https://nicolasrodriguezdev.com.ar/api/',
      rootNamespace: 'TravelApp',
    },
    AbpAccountPublic: {
      url: 'https://nicolasrodriguezdev.com.ar/api/',
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;