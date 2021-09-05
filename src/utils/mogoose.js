module.exports = {
    /**Map nhieu document thanh kieu obj trong js */
    mutipleMongooseToObject: (mongooses) =>
        mongooses.map((mongoose) => mongoose.toObject()),

    /**Map 1 document thanh kieu obj trong js */
    mongooseToObject: (mongoose) => (mongoose ? mongoose.toObject() : mongoose),
};
