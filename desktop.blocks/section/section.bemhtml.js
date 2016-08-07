block('section')(
    tag()('section'),

    elem('dropcap').tag()('span'),

    elem('quote').tag()('blockquote'),

    elem('paragraph').tag()('p'),

    elem('title').tag()('h1')
);

block('section').content()(function () {

    var section = this.ctx.section;

    var main = {
        elem: 'main',
        content: {
            elem: 'layout-text',
            content: []
        }
    };

    if (section.quotes && section.quotes.length > 0) {
        main.content.content.push(
            {
                elem: 'quote',
                elemMods: {important: true},
                content: {
                    elem: 'quote-content',
                    content: section.quotes[0]
                }
            }
        );
    }

    if (section.paragraphs) {
        section.paragraphs.map(function (paragraph) {
            main.content.content.push(
                {
                    elem: 'paragraph',
                    content: paragraph
                }
            );
        });
    }

    if (section.quotes && section.quotes.length > 1) {
        main.content.content.push(
            {
                elem: 'quote',
                elemMods: {
                    important: true,
                    bottom: true
                },
                content: {
                    elem: 'quote-content',
                    content: section.quotes[1]
                }
            }
        );
    }

    return [
        {
            elem: 'header',
            elemMods: {picture: section.section},
            content: [
                {
                    elem: 'layout',
                    content: [
                        {
                            elem: 'top-row',
                            content: [
                                {
                                    elem: 'vcenter',
                                    content: [
                                        {
                                            elem: 'title',
                                            content: section.title
                                        },
                                        {
                                            elem: 'subtitle',
                                            content: section.subtitle
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'bottom-row',
                            content: {
                                elem: 'vcenter',
                                content: [
                                    {
                                        elem: 'subscription1',
                                        content: [
                                            section.subscription1,
                                            {
                                                block: 'link',
                                                url: section.subscriptionLink,
                                                content: section.subscriptionLink,
                                                target: '_blank'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'subscription2',
                                        content: section.subscription2
                                    }
                                ]
                            }
                        }
                    ]
                },
            ]
        },

        main
    ]
});
