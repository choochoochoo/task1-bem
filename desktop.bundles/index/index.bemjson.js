module.exports = {
    block: 'page',
    title: 'ФАРЕРЫ',
    favicon: '/favicon1.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'meta', attrs: { name: 'robots', content='noindex' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }]
};
