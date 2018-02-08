import Mock from 'mockjs'

export default {

    ['POST /Demo3Init'](req, res) {
        let data = Mock.mock({
            'array|5+': [
                {
                    key: Mock.mock('@increment()'), /* 生成1，2，....n */
                    tasktitle: Mock.mock('@ctitle(5)'), /* 生成一个随机6位数字 */
                }
            ]
        })
        res.status(200).json(data.array)
    }

}