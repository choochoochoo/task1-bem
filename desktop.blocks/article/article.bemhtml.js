block('article')(
    tag()('article')
);

block('article').content()(function () {
    return this.data.map(function (section) {
        return {
            block: 'section',
            section: section
        }
    })
});
