block('page').content()(function () {

    var data = require('./../../data/data.json');

    this.data = data;

    return {
        block: 'article'
    };
});
