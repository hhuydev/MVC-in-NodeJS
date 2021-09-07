const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema(
    {
        name: { type: String, maxLength: 255 },
        description: { type: String, maxLength: 600 },
        img: { type: String, maxLength: 255 },
        videoId: { type: String, maxLength: 255 },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    { timestamps: true },
);
/**Add plugin */
/**Cai plugin tu tao slug theo ten model ma khong bi trung */
mongoose.plugin(slug);
/**config soft delete & overide all method */
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });

module.exports = mongoose.model('Course', Course);
