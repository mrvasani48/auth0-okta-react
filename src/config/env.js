// config auth0

export const auth0Config = {
  domain: 'dev-05mfl0bcrjhqjj20.us.auth0.com',
  clientId: 'jhUBGMvMoepMM83Pf8QbXCH80A8xhagY',
  redirect_uri: window.location.origin + '/auth0/callback',
  scope: "read:current_user update:current_user_metadata"
};

// Okta config
export const oktaConfig = {
  clientId: 'YOUR_OKTA_CLIENT_ID',
  issuer: 'https://YOUR_OKTA_DOMAIN/oauth2/default',
  redirectUri: window.location.origin + '/okta/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
};

