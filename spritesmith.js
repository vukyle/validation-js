'use strict';
import webpack from 'webpack';
import SpritesmithPlugin from 'webpack-spritesmith';
import path from 'path';
import fs from 'fs';

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
  });
}

var spritePath = getDirectories('src/sprites/');

function makeSpriteObj() {
  var z,
  spritePlugins = []
  for (z = 0; z < spritePath.length; z++) {
    var sprite = new SpritesmithPlugin({
    src: {
      cwd: path.resolve(__dirname, 'src/sprites/'+ spritePath[z] +'/'),
      glob: '*.{png,gif,jpg}'
    },
    target: {
      image: path.resolve(__dirname, 'src/images/sp-'+ spritePath[z] +'.png'),
      css: path.resolve(__dirname, 'src/scss/vars/sp-'+ spritePath[z] +'.scss')
    },
    apiOptions: {
      cssImageRef: "../images/sp-" + spritePath[z] + ".png"
    }
  })

    spritePlugins.push(sprite)
  }
  return spritePlugins;
}

module.exports = makeSpriteObj();
