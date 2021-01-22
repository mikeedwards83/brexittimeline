//Json Object
var sources = {
    theguardian: "The Guardian",
    channel4: "Channel 4"
}

var stories = [

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
        embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GCx3BpcQrOc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        title: 'Brexit: 200 lorries turned back at UK crossings every day due to new paperwork',
        url: 'https://www.youtube.com/watch?v=GCx3BpcQrOc',
        source: 'channel4'
    }


]









$(document).ready(function () {

    let abDatas = [];

    for (var i = stories.length - 1; i >= 0; i--) {

        let story = stories[i];

        let abData = {}
        abData.time = story.date;


        let container = $("<div class='row'><div class='col-12'></div></div>");

        
        if (story.image) {
            let img = $("<img  />");
            img.attr("src", story.image)
            container.append(img);
        }
        else if(story.embed){
            let embed = $("<div />");
            embed.append(story.embed)
            container.append(embed);
        }

        let title = $("<h3 />")
        title.append(story.title)

        let link = $("<a target='_blank'></a>");
        link.attr("href", story.url)

        let source = $("<h4 />")
        source.append(sources[story.source])
        source.attr("id", story.source)

        link.append(title);
        link.append(source);
        container.append(link);

        abData.body = [{
            tag: "div",
            content: container.html()

        }]

        abDatas.push(abData);

    }


    $("#myTimeline").albeTimeline(abDatas);

});