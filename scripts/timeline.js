

//Json Object
var sources = {
    theguardian: "The Guardian",
    channel4: "Channel 4",
    independent: "Independent",
    bbcnews: "BBC News",
    thetimes:"The Times",
    cnn: "CNN"
}

var stories = [

    {
        date: '2021-01-25',
        image: 'https://i.guim.co.uk/img/media/e53cf59263f8e0499ac8c014c69aa5544d2456b2/0_172_6720_4031/master/6720.jpg?width=1020&quality=85&auto=format&fit=max&s=2c2a33bfcfcbe73d1494efa5749eb3a5',
        title: "Mastercard to raise fees by at least 400% for EU firms selling to UK customers",
        url: 'https://www.theguardian.com/money/2021/jan/25/mastercard-to-raise-fees-to-eu-firms-by-500-percent-for-online-sales-to-uk-shoppers?CMP=Share_AndroidApp_Other',
        source: 'theguardian'
    },
    {
        date: '2021-01-23',
        image: 'https://i.guim.co.uk/img/media/e53cf59263f8e0499ac8c014c69aa5544d2456b2/0_172_6720_4031/master/6720.jpg?width=1020&quality=85&auto=format&fit=max&s=2c2a33bfcfcbe73d1494efa5749eb3a5',
        title: "'A Brexit nightmare': the British businesses being pushed to breaking point",
        url: 'https://www.theguardian.com/politics/2021/jan/23/a-brexit-nightmare-the-british-businesses-being-pushed-to-breaking-point?CMP=Share_AndroidApp_Other',
        source: 'theguardian'
    },
    {
        date: '2021-01-23',
        image: 'https://cdn.cnn.com/cnnnext/dam/assets/210122164127-brexit-empty-shelves-exlarge-169.jpg',
        title: "Rotting fish, lost business and piles of red tape. The reality of Brexit hits Britain",
        url: 'https://edition.cnn.com/2021/01/23/business/brexit-business-intl-gbr/index.html',
        source: 'cnn'
    },
    {
        date: '2021-01-23',
        image: 'https://i.guim.co.uk/img/media/3037636935d8c30560705acf4e9b10e9cfbc8b2d/0_599_3670_2202/master/3670.jpg?width=620&quality=85&auto=format&fit=max&s=ea34863e35434554700824fad4118842',
        title: "Cheshire cheesemaker says business left with £250,000 'Brexit hole'",
        url: 'https://www.theguardian.com/politics/2021/jan/23/cheshire-cheesemaker-says-business-left-with-250000-brexit-hole',
        source: 'theguardian'
    },
    {
        date: '2021-01-22',
        image: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fd3c4cf86-5c18-11eb-86f4-4fa0aa4e7fd3.jpg?crop=3886%2C2186%2C47%2C197&resize=1180',
        title: 'Annual £7.5bn cost of EU trade as bad for business as no-deal Brexit',
        url: 'https://www.thetimes.co.uk/article/annual-7-5bn-cost-of-eu-trade-as-bad-for-business-as-no-deal-brexit-jd7llrtb6',
        source: 'thetimes'
    },
    {
        date: '2021-01-22',
        image: 'https://static.independent.co.uk/2021/01/20/23/PRI172057763.jpg?width=990&auto=webp&quality=75',
        title: 'Liz Truss admits Brexit contributed to food shortages, contradicting Cabinet colleague',
        url: 'https://www.independent.co.uk/news/uk/politics/liz-truss-brexit-northern-ireland-food-shortages-b1790409.html',
        source: 'independent'
    },

    {
        date: '2021-01-21',
        image: 'https://i.guim.co.uk/img/media/994041bcd63c8126219bd8b01c50becd1fa0f5f6/0_59_3500_2099/master/3500.jpg?width=620&quality=85&auto=format&fit=max&s=a9ee473186853b8cd90a28a8ebd67d1b',
        title: 'Crisps lorry held up for two days by Northern Irish Brexit checks, MPs told',
        url: 'https://www.theguardian.com/politics/2021/jan/21/crisps-lorry-held-up-two-days-northern-irish-brexit-checks-mps-told',
        source: 'theguardian'
    },
    {
        date: '2021-01-21',
        image: 'https://i.guim.co.uk/img/media/2796d3ae1c11bede84554c1696f405ecaf203a4c/0_0_4128_2477/master/4128.jpg?width=620&quality=85&auto=format&fit=max&s=cdc27db70d1a95a5c0975816e535df5d',
        title: 'Britons buying from EU websites hit with £100 customs bills',
        url: 'https://www.theguardian.com/politics/2021/jan/21/britons-buying-from-eu-websites-face-more-than-100-import-duties',
        source: 'theguardian'
    },
    {
        date: '2021-01-21',
        embed: '<iframe width="400" height="225" src="https://www.youtube.com/embed/GCx3BpcQrOc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        title: 'Brexit: 200 lorries turned back at UK crossings every day due to new paperwork',
        url: 'https://www.youtube.com/watch?v=GCx3BpcQrOc',
        source: 'channel4'
    },
    {
        date: '2021-01-20',
        image: 'https://pbs.twimg.com/card_img/1351877839637897222/YoH1PDet?format=jpg&name=small',
        title: 'Anger builds among manufacturers as EU customers cancel orders due to Brexit red tape',
        url: 'https://www.independent.co.uk/news/business/brexit-uk-manufacturers-import-export-orders-b1790270.html',
        source: 'independent'
    },
    {
        date: '2021-01-20',
        image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/BE58/production/_116582784_eltonetal.jpg',
        title: "Musicians 'failed by government' over EU touring, stars say",
        url: 'https://www.bbc.co.uk/news/entertainment-arts-55721729',
        source: 'bbcnews'
    },

    {
        date: '2021-01-20',
        image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/101FA/production/_116524066_gettyimages-1198913684.jpg',
        title: "Brexit: Government considers scrapping some EU labour laws",
        url: 'https://www.bbc.co.uk/news/business-55725720',
        source: 'bbcnews'
    },
    {
        date: '2021-01-19',
        image: 'https://westcountrybylines.co.uk/wp-content/uploads/2021/01/8664905873_502807741e_b.jpg',
        title: "Quadruple cheese Brexit whammy",
        url: 'https://westcountrybylines.co.uk/quadruple-cheese-brexit-whammy/',
        source: 'westcountrybylines'
    },

]









$(document).ready(function () {

    let abDatas = [];

    for (var i = stories.length - 1; i >= 0; i--) {

        let story = stories[i];

        let abData = {}
        abData.time = story.date;


        let container = $("<div class='row'><div class='col-12'></div></div>");

        
        if (story.image) {
            let img = $("<img class='lazy'  />");
            img.attr("data-src", story.image)
            container.append(img);
        }
        else if(story.embed){
            let embed = $("<div />");
            embed.append(story.embed)
            container.append(embed);
        }

        let title = $("<h4 />")
        title.append(story.title)

        let link = $("<a target='_blank'></a>");
        link.attr("href", story.url)

        let source = $("<h5 />")
        source.append(sources[story.source])
        source.attr("class", story.source)

        link.append(title);
        link.append(source);
        container.append(link);

        abData.body = [{
            tag: "div",
            content: container.html()

        }]

        abDatas.push(abData);

    }


    $("#br-timeline").albeTimeline(abDatas);

});


$(function() {
    $('.lazy').lazy();
});