export const oktaConfig = {
    clientId: '0oaafgqvw962MOBqw5d7',
    issuer: 'https://dev-11004217.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true, 
}