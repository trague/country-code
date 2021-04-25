const json = require("./country-code-old.json");
const pinyin = require("pinyin");
const fs = require("fs")

function toInitial(cnStr) {
  const result = pinyin(cnStr, {
    style: pinyin.STYLE_NORMAL, // 设置拼音风格
    heteronym: true,
  });
  return result[0][0].charAt(0).toLocaleUpperCase()
}

const arr = json.map(item => {
    return {
        ...item,
        pinYinInitial: toInitial(item.cn)
    }
})

fs.writeFile('./country-code.json', JSON.stringify(arr), { 'flag': 'w' }, function(err) {
    if (err) {
        throw err;
    }
});
