/* globals require module Promise*/
"use strict";

const fs = require("fs");

module.exports = function(models) {
    let { Art } = models;
    return {
        createArts(data) {
            let firstImage, secondImage;
            if (data.titleImage != undefined) {
                firstImage = (data.titleImage[0].path).replace("public", "static");
            } else {
                firstImage = '\\static\\uploads\\nopicture';
            }
            if (data.image != undefined) {
                secondImage = (data.image[0].path).replace("public", "static");
            } else {
                secondImage = 'static\\uploads\\nopicture';
            }
            //console.log(data.titleImage[0].path);
            //console.log(data.image);
            const art = new Art({
                title: data.title,
                description: data.description,
                size: data.size,
                canvas: data.canvas,
                paint: data.paint,
                price: data.price,
                titleImage: firstImage,
                image: secondImage
            });
            return new Promise((resolve, reject) => {
                art.save(err => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(art);
                });
            });
        },
        getAllArts() {
            return new Promise((resolve, reject) => {
                Art.find((err, arts) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(arts);
                });
            });
        }
    };
}