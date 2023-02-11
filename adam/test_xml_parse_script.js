const {XMLParser} = require('fast-xml-parser')
console.log(XMLParser)
const url1 = 'https://www.biorxiv.org/content/biorxiv/early/2022/11/05/2022.11.04.515218.source.xml'
const url2 = 'https://www.biorxiv.org/content/biorxiv/early/2023/02/08/2023.02.08.527623.source.xml'

fetch(url2).then((xml_response) => {
  const parser = new XMLParser({ ignoreAttributes: false })
  xml_response.text().then(xml => {
    const json = parser.parse(xml);
    const body = []
    let methodsReached = false
    json.article.body.sec.forEach((sec) => {
      methodsReached = methodsReached || sec?.title?.['#text']?.toLowerCase()?.includes('method')
      if (!methodsReached && sec.p) {
        if (Array.isArray(sec.p)) {
          body.push(...sec.p.map(paragraph => paragraph['#text'].replace(/ \[\S*\]| \(\S*\)/g, '')))
        } else {
          body.push(sec.p['#text'].replace(/ \[\S*\]| \(\S*\)/g, ''))
        }
      }
    })
    // this is very fragile
    const articleObject = {
      doi: json.article.front['article-meta']['article-id'].find((item) => item['@_pub-id-type'] === 'doi')["#text"],
      title: json.article.front['article-meta']['title-group']['article-title']['#text'],
      authors: json.article.front['article-meta']['contrib-group'].contrib.filter(contrib => contrib['@_contrib-type'] === 'author').map(contrib => contrib['name']['@_hwp:sortable']),
      abstract: json.article.front['article-meta'].abstract.p['#text'],
      body,
    }
    console.log(articleObject)
  })
})