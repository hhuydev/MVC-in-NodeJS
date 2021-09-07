const { mutipleMongooseToObject } = require('../../utils/mogoose');
const Course = require('../models/Course');
class MeController {
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}
module.exports = new MeController();
