// baseUrl.js
export function getBaseUrl() {
    if (process.env.NODE_ENV === 'production') {
      return process.env.NEXT_PUBLIC_PROD_BASE_URL;
    } else {
      return process.env.NEXT_PUBLIC_DEV_BASE_URL;
    }
  }
  