// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/syncAutoStorageKeys?api-version=2017-05-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'request-id': '2bab4e3d-5ab5-40f5-9c92-5186d2e120f7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': 'c9efcb42-501b-43fa-9fd6-5041e8e6d07e',
  'x-ms-correlation-request-id': 'c9efcb42-501b-43fa-9fd6-5041e8e6d07e',
  'x-ms-routing-request-id': 'WESTUS2:20170526T160334Z:c9efcb42-501b-43fa-9fd6-5041e8e6d07e',
  date: 'Fri, 26 May 2017 16:03:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/syncAutoStorageKeys?api-version=2017-05-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'request-id': '2bab4e3d-5ab5-40f5-9c92-5186d2e120f7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': 'c9efcb42-501b-43fa-9fd6-5041e8e6d07e',
  'x-ms-correlation-request-id': 'c9efcb42-501b-43fa-9fd6-5041e8e6d07e',
  'x-ms-routing-request-id': 'WESTUS2:20170526T160334Z:c9efcb42-501b-43fa-9fd6-5041e8e6d07e',
  date: 'Fri, 26 May 2017 16:03:34 GMT',
  connection: 'close' });
 return result; }]];