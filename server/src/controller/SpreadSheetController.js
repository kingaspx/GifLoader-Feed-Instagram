const moment = require("moment");
const fs = require('fs');
const path = require('path')
const { v4: uuidv4 } = require("uuid");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const gifFrames = require('gif-frames');
const Jimp = require('jimp')
const credentials = require("../../credentials.json");

const docId = "1BricyLEI2kq34wfouJ2uB8YE1daoGWh5Ow3O91pKIn4";
const doc = new GoogleSpreadsheet(docId);

module.exports = {
  async listAll(req, res) {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();

    let list = [];

    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    let headers = rows[0]._sheet.headerValues;

    for (let index = 0; index < rows.length; index++) {
      const element = rows[index];

      list.push({
        id: element[headers[0]],
        name: element[headers[1]],
        username: element[headers[2]],
        source: element[headers[3]],
        small_source: element[headers[4]],
        created_at: element[headers[5]],
      });
    }

    res.status(200).json(list);
  },
  async insert(req, res) {
    const { filename: source } = req.file;
    const { name, username } = req.body;
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();

    let caminho = ''

    if (req.file.mimetype.includes('gif')) {
      gifFrames({ url: req.file.path, frames: 0 }).then(function (frameData) {
        frameData[0].getImage().pipe(fs.createWriteStream(path.resolve(req.file.destination, "..", "thumbnails", `thumb-${source.replace(".gif", ".jpg")}`)));
      });
    } else {
      Jimp.read(req.file.path).then((image) => {
        image.resize(150, 150);
        image.writeAsync(path.resolve(req.file.destination, "..", "thumbnails", `thumb-${source}`))
      })
    }

    path.resolve(req.file.destination, 'resized', source)
    caminho = `http://192.168.15.46:21598/image/${source}`
    let caminhoThumb = `http://192.168.15.46:21598/thumbnail/thumb-${source.replace(".gif", ".jpg")}`

    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({
      id: uuidv4(),
      name: name,
      username: username,
      source: caminho,
      small_source: caminhoThumb,
      created_at: moment().format("DD/MM/YYYY HH:mm:ss"),
    });

    res.status(200).json({ message: "Success" });
  },
};
