const Mustache = require('mustache')
const { readFileSync } = require("../src/helpers/readFileSync");

const t = (key, lang = 'en') => {
    const template = readFileSync(`/${lang}/${key}`)
    return Mustache.render(template)
}

module.exports = { t }
