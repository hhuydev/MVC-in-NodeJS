const Course = require('../models/Course');
const { mongooseToObject } = require('../../utils/mogoose');
class CourseController {
    /**GET /course/:slug */
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    /**GET /course/create */
    create(req, res, next) {
        res.render('courses/create');
    }

    /**POST /course/store */
    store(req, res, next) {
        const formData = req.body;
        formData.img = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }

    /**GET /courses/:id/edit */
    edit(req, res, next) {
        Course.findById({ _id: req.params.id })
            .then((course) => {
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    /**PUT /courses/:id */
    update(req, res, next) {
        Course.findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}
module.exports = new CourseController();
