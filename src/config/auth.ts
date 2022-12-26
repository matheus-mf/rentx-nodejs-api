export default {
  secret_token: process.env.SECRET_TOKEN,
  expires_in_token: process.env.EXPIRES_TOKEN,
  secret_refresh_token: process.env.SECRET_REFRESH_TOKEN,
  expires_in_refresh_token: process.env.EXPIRES_REFRESH_TOKEN,
  expires_in_refresh_token_days: Number(process.env.EXPIRES_REFRESH_TOKEN_DAYS),
};
