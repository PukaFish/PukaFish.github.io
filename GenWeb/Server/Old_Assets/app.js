const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const genshinData = [
    {
        'character': 'Klee',
        'reddit': 49,
        'google': 9090000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Barbara',
        'reddit': 29,
        'google': 12800000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Mona',
        'reddit': 35,
        'google': 16300000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Xiangling',
        'reddit': 19,
        'google': 5470000,
        'location': 'Liyue',
    },
    {
        'character': 'YaoYao',
        'reddit': 2,
        'google': 391000,
        'location': 'Liyue',
    },
    {
        'character': 'Bennett',
        'reddit': 11,
        'google': 6890000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Zhongli',
        'reddit': 60,
        'google': 21500000,
        'location': 'Liyue',
    },
    {
        'character': 'Hu Tao',
        'reddit': 43,
        'google': 11400000,
        'location': 'Liyue',
    },
    {
        'character': 'Ganyu',
        'reddit': 37,
        'google': 23200000,
        'location': 'Liyue',
    },
    {
        'character': 'Lumine',
        'reddit': 47,
        'google': 11600000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Raiden Shogun',
        'reddit': 31,
        'google': 26500000,
        'location': 'Inazuma',
    },
    {
        'character': 'La Signora',
        'reddit': 9,
        'google': 708000,
        'location': 'Snezhnaya',
    },
    {
        'character': 'Jean',
        'reddit': 43,
        'google': 26300000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Qiqi',
        'reddit': 22,
        'google': 6100000,
        'location': 'Liyue',
    },
    {
        'character': 'Xiao',
        'reddit': 27,
        'google': 14000000,
        'location': 'Liyue',
    },
    {
        'character': 'Venti',
        'reddit': 32,
        'google': 11000000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Albedo',
        'reddit': 22,
        'google': 13100000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Amber',
        'reddit': 21,
        'google': 18800000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Diluc',
        'reddit': 28,
        'google': 11800000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Diona',
        'reddit': 9,
        'google': 5240000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Lisa',
        'reddit': 12,
        'google': 18000000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Razor',
        'reddit': 5,
        'google': 7680000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Beidou',
        'reddit': 18,
        'google': 6670000,
        'location': 'Liyue',
    },
    {
        'character': 'Sangonomiya Kokomi',
        'reddit': 8,
        'google': 7730000,
        'location': 'Inazuma',
    },
    {
        'character': 'Kujou Sara',
        'reddit': 12,
        'google': 18100000,
        'location': 'Inazuma',
    },
    {
        'character': 'Ningguang',
        'reddit': 24,
        'google': 7670000,
        'location': 'Liyue',
    },
    {
        'character': 'Kaeya',
        'reddit': 19,
        'google': 7710000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Aether',
        'reddit': 39,
        'google': 20800000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Paimon',
        'reddit': 26,
        'google': 13400000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Shenhe',
        'reddit': 6,
        'google': 7710000,
        'location': 'Liyue',
    },
    {
        'character': 'Yun Jin',
        'reddit': 2,
        'google': 3180000,
        'location': 'Liyue',
    },
    {
        'character': 'Fischl',
        'reddit': 20,
        'google': 8450000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Childe',
        'reddit': 25,
        'google': 8570000,
        'location': 'Snezhnaya',
    },
    {
        'character': 'Eula',
        'reddit': 27,
        'google': 16700000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Noelle',
        'reddit': 20,
        'google': 11200000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Yanfei',
        'reddit': 7,
        'google': 4230000,
        'location': 'Liyue',
    },
    {
        'character': 'Yae Miko',
        'reddit': 11,
        'google': 13300000,
        'location': 'Inazuma',
    },
    {
        'character': 'Sucrose',
        'reddit': 10,
        'google': 5430000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Keqing',
        'reddit': 30,
        'google': 19100000,
        'location': 'Liyue',
    },
    {
        'character': 'Kamisato Ayaka',
        'reddit': 19,
        'google': 9270000,
        'location': 'Inazuma',
    },
    {
        'character': 'Thoma',
        'reddit': 4,
        'google': 12500000,
        'location': 'Inazuma',
    },
    {
        'character': 'Xingqiu',
        'reddit': 13,
        'google': 5650000,
        'location': 'Liyue',
    },
    {
        'character': 'Chongyun',
        'reddit': 11,
        'google': 3230000,
        'location': 'Liyue',
    },
    {
        'character': 'Kaedehara Kazuha',
        'reddit': 18,
        'google': 9730000,
        'location': 'Inazuma',
    },
    {
        'character': 'Scaramouche',
        'reddit': 8,
        'google': 7150000,
        'location': 'Inazuma',
    },
    {
        'character': 'Dainsleif',
        'reddit': 1,
        'google': 826000,
        'location': 'Khaenri ah',
    },
    {
        'character': 'Xinyan',
        'reddit': 13,
        'google': 1970000,
        'location': 'Liyue',
    },
    {
        'character': 'Naganohara Yoimiya',
        'reddit': 12,
        'google': 6380000,
        'location': 'Inazuma',
    },
    {
        'character': 'Kamisato Ayato',
        'reddit': 3,
        'google': 5390000,
        'location': 'Inazuma',
    },
    {
        'character': 'Sayu',
        'reddit': 6,
        'google': 3210000,
        'location': 'Inazuma',
    },
    {
        'character': 'Arataki Itto',
        'reddit': 8,
        'google': 5210000,
        'location': 'Inazuma',
    },
    {
        'character': 'Rosaria',
        'reddit': 8,
        'google': 7550000,
        'location': 'Mondstadt',
    },
    {
        'character': 'Gorou',
        'reddit': 2,
        'google': 5330000,
        'location': 'Inazuma',
    },
    {
        'character': 'Yelan',
        'reddit': 6,
        'google': 5960000,
        'location': 'Liyue',
    },
    {
        'character': 'Baizhu',
        'reddit': 2,
        'google': 513000,
        'location': 'Liyue',
    },
    {
        'character': 'Kuki Shinobu',
        'reddit': 2,
        'google': 14900000,
        'location': 'Inazuma',
    },
    {
        'character': 'Shikanoin Heizou',
        'reddit': 1,
        'google': 2150000,
        'location': 'Inazuma',
    },
    {
        'character': 'Nilou',
        'reddit': 1,
        'google': 9530000,
        'location': 'Sumeru',
    },
]

const server = http.createServer((request, response) => {

    const getParameters = url.parse(request.url, true).query;
    let fitleredcharacters = genshinData;

    if (typeof getParameters.character !== undefined) {
        fitleredcharacters = fitleredcharacters.filter((charaData) => {
            return charaData.character.search(getParameters.character) !== -1;
        });
    }

    if (typeof getParameters.reddit !== undefined) {
        fitleredcharacters.sort(function (a, b) {
            if (getParameters.reddit === 'ASC') {
                return a.reddit - b.reddit;
            } else if (getParameters.reddit === 'DESC') {
                return b.reddit - a.reddit;
            } else {
                return 0;
            }
        });
    }

    if (typeof getParameters.google !== undefined) {
        fitleredcharacters.sort(function (a, b) {
            if (getParameters.google === 'ASC1') {
                return a.google - b.google;
            } else if (getParameters.google === 'DESC1') {
                return b.google - a.google;
            } else {
                return 0;
            }
        });
    }

    if (typeof getParameters.location !== undefined) {
        fitleredcharacters = fitleredcharacters.filter((charaData) => {
            return charaData.location.search(getParameters.location) !== -1;
        });
    }

    response.writeHead(
        200, {
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*'
    }).end(
        JSON.stringify({
            'result': 200,
            'classes': fitleredcharacters
        }));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
