/*
 * @Author: 周毅 
 * @Date: 2018-02-07 14:39:17 
 * @Last Modified by: 周毅
 * @Last Modified time: 2018-02-07 16:13:30
 */

import Mock from 'mockjs'

let Random = Mock.Random;

export default {

    /* 用户信息 */
    ['POST /Demo2Init'](req, res) {
        let data = Mock.mock({
            "object": {
                id: Mock.mock('@id()'),
                name: Mock.mock('@cname()'),
                sex: Mock.Random.integer(0, 1),
                email: Mock.mock('@EMAIL()'),
                mobile: /^13[0-9]{9}$/
            }
        })
        res.status(200).json(data.object)
    },

    ['POST /UserAccountList'](req, res) {
        let organization = Mock.mock({
            "name|1": [
              "中国工行银行",
              "中国农业银行",
              "中国人民银行",
              "中国民生银行"
            ]
        })

        let money = Mock.mock('@float(1, 100000, 2)').toFixed(2)

        let data = Mock.mock({
            "array": [{
                organization: Mock.mock({
                    "name|1": [
                      "中国工行银行",
                      "中国农业银行",
                      "中国人民银行",
                      "中国民生银行"
                    ]
                }).name,
                time: Mock.mock('@datetime'),
                money: Mock.mock('@float(1, 100000, 2)').toFixed(2),
                icon: "jixiao"
            },{
                organization: Mock.mock({
                    "name|1": [
                      "中国工行银行",
                      "中国农业银行",
                      "中国人民银行",
                      "中国民生银行"
                    ]
                }).name,
                time: Mock.mock('@datetime'),
                money: Mock.mock('@float(1, 100000, 2)').toFixed(2),
                icon: "youxiang"
            },{
                organization: Mock.mock({
                    "name|1": [
                      "中国工行银行",
                      "中国农业银行",
                      "中国人民银行",
                      "中国民生银行"
                    ]
                }).name,
                time: Mock.mock('@datetime'),
                money: Mock.mock('@float(1, 100000, 2)').toFixed(2),
                icon: "gongpai"
            },{
                organization: Mock.mock({
                    "name|1": [
                      "中国工行银行",
                      "中国农业银行",
                      "中国人民银行",
                      "中国民生银行"
                    ]
                }).name,
                time: Mock.mock('@datetime'),
                money: Mock.mock('@float(1, 100000, 2)').toFixed(2),
                icon: "jiekuan"
            },{
                organization: Mock.mock({
                    "name|1": [
                      "中国工行银行",
                      "中国农业银行",
                      "中国人民银行",
                      "中国民生银行"
                    ]
                }).name,
                time: Mock.mock('@datetime'),
                money: Mock.mock('@float(1, 100000, 2)').toFixed(2),
                icon: "baoxiao"
            },{
                organization: Mock.mock({
                    "name|1": [
                      "中国工行银行",
                      "中国农业银行",
                      "中国人民银行",
                      "中国民生银行"
                    ]
                }).name,
                time: Mock.mock('@datetime'),
                money: Mock.mock('@float(1, 100000, 2)').toFixed(2),
                icon: "anli"
            },{
                organization: Mock.mock({
                    "name|1": [
                      "中国工行银行",
                      "中国农业银行",
                      "中国人民银行",
                      "中国民生银行"
                    ]
                }).name,
                time: Mock.mock('@datetime'),
                money: Mock.mock('@float(1, 100000, 2)').toFixed(2),
                icon: "xiujia"
            },{
                organization: Mock.mock({
                    "name|1": [
                      "中国工行银行",
                      "中国农业银行",
                      "中国人民银行",
                      "中国民生银行"
                    ]
                }).name,
                time: Mock.mock('@datetime'),
                money: Mock.mock('@float(1, 100000, 2)').toFixed(2),
                icon: "wode"
            }]
        })
        res.status(200).json(data.array)
    },

}