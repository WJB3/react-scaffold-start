import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Cascader } from 'antd';
import compose from '../utils/compose';
import Demo1 from './hooks/demo1'
import Demo2 from './hooks/demo2'
import Demo3 from './hooks/demo3'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.options = [
            {
                "id": 1,
                "name": "互联网/IT/电子/通信",
                "sonindustry": [
                    {
                        "id": 15,
                        "name": "电子商务"
                    },
                    {
                        "id": 16,
                        "name": "游戏"
                    },
                    {
                        "id": 17,
                        "name": "媒体"
                    },
                    {
                        "id": 18,
                        "name": "广告营销"
                    },
                    {
                        "id": 19,
                        "name": "数据服务"
                    },
                    {
                        "id": 20,
                        "name": "医疗健康"
                    },
                    {
                        "id": 21,
                        "name": "生活服务"
                    },
                    {
                        "id": 22,
                        "name": "O2O"
                    },
                    {
                        "id": 23,
                        "name": "旅游"
                    },
                    {
                        "id": 24,
                        "name": "分类信息"
                    },
                    {
                        "id": 25,
                        "name": "音乐/视频/阅读"
                    },
                    {
                        "id": 26,
                        "name": "在线教育"
                    },
                    {
                        "id": 27,
                        "name": "社交网络"
                    },
                    {
                        "id": 28,
                        "name": "人力资源服务"
                    },
                    {
                        "id": 29,
                        "name": "企业服务"
                    },
                    {
                        "id": 30,
                        "name": "信息安全"
                    },
                    {
                        "id": 31,
                        "name": "新零售"
                    },
                    {
                        "id": 32,
                        "name": "智能硬件"
                    },
                    {
                        "id": 33,
                        "name": "移动互联网"
                    },
                    {
                        "id": 34,
                        "name": "互联网"
                    },
                    {
                        "id": 35,
                        "name": "计算机软件"
                    },
                    {
                        "id": 36,
                        "name": "计算机硬件"
                    },
                    {
                        "id": 37,
                        "name": "计算机服务"
                    },
                    {
                        "id": 38,
                        "name": "通信/网络设备"
                    },
                    {
                        "id": 39,
                        "name": "运营商/增值服务"
                    },
                    {
                        "id": 40,
                        "name": "电子/半导体/集成电路"
                    }
                ]
            },
            {
                "id": 2,
                "name": "广告/传媒/文化/体育",
                "sonindustry": [
                    {
                        "id": 41,
                        "name": "广告/公关/会展"
                    },
                    {
                        "id": 42,
                        "name": "新闻/出版"
                    },
                    {
                        "id": 43,
                        "name": "广播/影视"
                    },
                    {
                        "id": 44,
                        "name": "文化/体育/娱乐"
                    }
                ]
            },
            {
                "id": 3,
                "name": "金融",
                "sonindustry": [
                    {
                        "id": 45,
                        "name": "银行"
                    },
                    {
                        "id": 46,
                        "name": "保险"
                    },
                    {
                        "id": 47,
                        "name": "证券/期货"
                    },
                    {
                        "id": 48,
                        "name": "基金"
                    },
                    {
                        "id": 49,
                        "name": "信托"
                    },
                    {
                        "id": 50,
                        "name": "互联网金融"
                    },
                    {
                        "id": 51,
                        "name": "投资/融资"
                    },
                    {
                        "id": 52,
                        "name": "租赁/拍卖/典当/担保"
                    }
                ]
            },
            {
                "id": 4,
                "name": "教育培训",
                "sonindustry": [
                    {
                        "id": 53,
                        "name": "学前教育"
                    },
                    {
                        "id": 54,
                        "name": "院校"
                    },
                    {
                        "id": 55,
                        "name": "培训机构"
                    },
                    {
                        "id": 56,
                        "name": "学术/科研"
                    }
                ]
            },
            {
                "id": 5,
                "name": "制药/医疗",
                "sonindustry": [
                    {
                        "id": 57,
                        "name": "制药"
                    },
                    {
                        "id": 58,
                        "name": "医疗/护理/卫生"
                    },
                    {
                        "id": 59,
                        "name": "医疗设备/器械"
                    }
                ]
            },
            {
                "id": 6,
                "name": "交通/物流/贸易/零售",
                "sonindustry": [
                    {
                        "id": 60,
                        "name": "交通/运输"
                    },
                    {
                        "id": 61,
                        "name": "物流/仓储"
                    },
                    {
                        "id": 62,
                        "name": "批发/零售"
                    },
                    {
                        "id": 63,
                        "name": "贸易/进出口"
                    }
                ]
            },
            {
                "id": 7,
                "name": "专业服务",
                "sonindustry": [
                    {
                        "id": 64,
                        "name": "咨询"
                    },
                    {
                        "id": 65,
                        "name": "法律"
                    },
                    {
                        "id": 66,
                        "name": "翻译"
                    },
                    {
                        "id": 67,
                        "name": "人力资源服务"
                    },
                    {
                        "id": 68,
                        "name": "财务/审计/税务"
                    },
                    {
                        "id": 69,
                        "name": "检测/认证"
                    },
                    {
                        "id": 70,
                        "name": "专利/商标/知识产权"
                    },
                    {
                        "id": 71,
                        "name": "其他专业服务"
                    }
                ]
            },
            {
                "id": 8,
                "name": "房地产/建筑",
                "sonindustry": [
                    {
                        "id": 72,
                        "name": "房地产开发"
                    },
                    {
                        "id": 73,
                        "name": "工程施工"
                    },
                    {
                        "id": 74,
                        "name": "建筑设计"
                    },
                    {
                        "id": 75,
                        "name": "装修装饰"
                    },
                    {
                        "id": 76,
                        "name": "建材"
                    },
                    {
                        "id": 77,
                        "name": "地产经纪/中介"
                    },
                    {
                        "id": 78,
                        "name": "物业服务"
                    }
                ]
            },
            {
                "id": 9,
                "name": "汽车",
                "sonindustry": [
                    {
                        "id": 79,
                        "name": "汽车生产"
                    },
                    {
                        "id": 80,
                        "name": "汽车零部件"
                    },
                    {
                        "id": 81,
                        "name": "4S店/后市场"
                    }
                ]
            },
            {
                "id": 10,
                "name": "机械/制造",
                "sonindustry": [
                    {
                        "id": 82,
                        "name": "机械设备/机电/重工"
                    },
                    {
                        "id": 83,
                        "name": "仪器仪表/工业自动化"
                    },
                    {
                        "id": 84,
                        "name": "原材料及加工/模具"
                    },
                    {
                        "id": 85,
                        "name": "印刷/包装/造纸"
                    },
                    {
                        "id": 86,
                        "name": "船舶/航空/航天"
                    }
                ]
            },
            {
                "id": 11,
                "name": "消费品",
                "sonindustry": [
                    {
                        "id": 87,
                        "name": "食品/饮料/烟酒"
                    },
                    {
                        "id": 88,
                        "name": "日化"
                    },
                    {
                        "id": 89,
                        "name": "服装/纺织/皮革"
                    },
                    {
                        "id": 90,
                        "name": "家具/家电/家居"
                    },
                    {
                        "id": 91,
                        "name": "玩具/礼品"
                    },
                    {
                        "id": 92,
                        "name": "珠宝/首饰"
                    },
                    {
                        "id": 93,
                        "name": "工艺品/收藏品"
                    },
                    {
                        "id": 94,
                        "name": "办公用品及设备"
                    }
                ]
            },
            {
                "id": 12,
                "name": "服务业",
                "sonindustry": [
                    {
                        "id": 95,
                        "name": "餐饮"
                    },
                    {
                        "id": 96,
                        "name": "酒店"
                    },
                    {
                        "id": 97,
                        "name": "旅游"
                    },
                    {
                        "id": 98,
                        "name": "美容/美发"
                    },
                    {
                        "id": 99,
                        "name": "婚庆/摄影"
                    },
                    {
                        "id": 100,
                        "name": "其他服务业"
                    }
                ]
            },
            {
                "id": 13,
                "name": "能源/化工/环保",
                "sonindustry": [
                    {
                        "id": 101,
                        "name": "石油/石化"
                    },
                    {
                        "id": 102,
                        "name": "化工"
                    },
                    {
                        "id": 103,
                        "name": "矿产/地质"
                    },
                    {
                        "id": 104,
                        "name": "采掘/冶炼"
                    },
                    {
                        "id": 105,
                        "name": "电力/热力/燃气/水利"
                    },
                    {
                        "id": 106,
                        "name": "新能源环保"
                    }
                ]
            },
            {
                "id": 14,
                "name": "政府/非盈利机构/其他",
                "sonindustry": [
                    {
                        "id": 107,
                        "name": "政府/公共事业"
                    },
                    {
                        "id": 108,
                        "name": "非盈利机构"
                    },
                    {
                        "id": 109,
                        "name": "农/林/牧/渔"
                    },
                    {
                        "id": 110,
                        "name": "其他行业"
                    }
                ]
            }
        ]
    }

    componentDidMount() {


    }

    render() {
        return (
            <div>

                <Button type="primary">Primary</Button>

                <Cascader
                    fieldNames={{ label: 'name', value: 'id', children: 'sonindustry' }}
                    options={this.options}
              
                    placeholder="Please select"
                />


            </div>
        )
    }
}

export default App;
