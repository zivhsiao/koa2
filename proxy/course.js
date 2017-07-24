const Course = require('../models/course');
const Moment = require('moment');

/**
 *
 * @param ids
 * @returns {*}
 */
exports.getCourseByIds = async (ids) => {
    if (!ids) {
        return [];
    }
    let course = await Course.findAll({
        where: {id: ids,},
    });
    return course;
};

exports.getCourseAll = async () => {
    let course = await Course.findAll({});

    return course;
}

/**
 * id query main title
 * @param id
 * @returns {*}
 */
exports.getCourseById = async (id) => {
    if (!id) {
        return {};
    }
    let course = await Course.findById({
        where: {id: id}
    });
    return course;
};

exports.getCourseAndCount = async (activePage, onePageCount, order) => {
    if (!activePage || !order) {
        return [];
    }
    let course = await Course.findAndCountAll({
        offset: (activePage - 1) * onePageCount,
        limit: onePageCount,
        order: [order],
    });
    return course;
};

exports.getCourseByUserId = async (user_id, offset, limit, order) => {
    if (!user_id || !order) {
        return [];
    }
    let course = await Course.findAndCount(
        {
            where: {
                user_id: user_id,
            },
            offset: offset,
            limit: limit,
            order: [order],
        });
    return course;
};

/**
 * 默认增加1，以后可以扩展
 * @param id
 * @returns {*}
 */
exports.addPVCount = async (id) => {
    if (!id) {
        return {};
    }
    let course = await Course.findById(id);
    return await Course.update(
        {
            pv: course.pv + 1,
        },
        {
            where: {id: id}
        }
    );
};

exports.createCourse = async (courseInfo) => {
    if (!courseInfo) {
        return {};
    }
    return await Course.create(courseInfo);
};

exports.updateCourse = async (id, title, content) => {
    if (!id || !title || !content) {
        return {};
    }

    return await Course.update({
            title: title,
            content: content,
        },
        {
            where: {id: id}
        });
};


// exports.addReplyCount = async(id)=> {
//   if (!id) {
//     return {};
//   }
//
//   let topic = await Topic.findById(id);
//   return await Topic.update(
//     {
//       reply_count: topic.reply_count + 1,
//     },
//     {
//       where: {id: id}
//     }
//   );
// };
//
// exports.updateLastReplyDateTime = async(id)=> {
//   if (!id) {
//     return {};
//   }
//
//   return await Topic.update(
//     {
//       last_reply_date_time: Moment().format('YYYY-MM-DD HH:mm:ss'),
//     },
//     {
//       where: {id: id}
//     }
//   );
// };
//
// exports.updateLastReplyId = async(id, last_reply_id)=> {
//   if (!id) {
//     return {};
//   }
//
//   return await Topic.update(
//     {
//       last_reply_id: last_reply_id,
//     },
//     {
//       where: {id: id}
//     }
//   );
// };