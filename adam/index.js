const functions = require('@google-cloud/functions-framework');
const { XMLParser } = require('fast-xml-parser')

/**
 * Responds to an HTTP request using data from the request body parsed according
 * to the "content-type" header.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
functions.http('parseXML', async (req, res) => {
  if (req.body.url) {
    const xml_response = await fetch(url)
    const parser = new XMLParser()
    const json = parser.parse(xml_response);
    const body = []
    let methodsReached = false
    json.article.body.sec.forEach((sec) => {
      methodsReached = methodsReached || sec.title['#text'].toLowerCase().includes('method')
      if (!methodsReached && sec.p) {
        if (Array.isArray(sec.p)) {
          body.push(...sec.p.map(paragraph => paragraph['#text'].replace(/ \[\S*\]/g, '')))
        } else {
          body.push(sec.p['#text'].replace(/ \[\S*\]/g, ''))
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
    res.send(articleObject)
  }
});