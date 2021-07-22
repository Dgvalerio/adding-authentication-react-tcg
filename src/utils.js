export const baseUrl = 'https://identitytoolkit.googleapis.com/v1/accounts';

export const key = 'AIzaSyDV9fIBoyYqKtg_uYaKU7enOIosIK7uTAI';

export const url = (fnName) => `${baseUrl}:${fnName}?key=${key}`;
