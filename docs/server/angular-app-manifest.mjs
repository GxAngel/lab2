
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/lab2',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/lab2"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24697, hash: '6b6172fcf5d3be90cc865e393a117b760b11ae43e2b1564ff38da357be026a78', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25222, hash: '67619e8a7b00138210461e3aee1ead090d4758b29edc33bfdcb6b2681a19ba3a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 32519, hash: '08805ba89a8a85039bf2794494b3c1d86c7a8b035729a235fbe968155f92714c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
