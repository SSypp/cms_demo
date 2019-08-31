import React from 'react';
import { Select } from 'antd';
const Option = Select.Option;
export default {
    //时间处理
    formarteDate: function () {
        const currentTime = new Date();
        //获取年份
        const year = currentTime.getFullYear();
        //获取的月份会比实际月份少1
        const month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1;
        //获取当天日，getDate表示当天日，getDay表示星期
        const day = currentTime.getDate() < 10 ? '0' + (currentTime.getDate()) : currentTime.getDate() + " ";
        //获取小时
        const hours = currentTime.getHours() < 10 ? '0' + (currentTime.getHours()) + ":" : currentTime.getHours() + ":";
        // 获取分钟
        const minutes = currentTime.getMinutes() < 10 ? '0' + (currentTime.getMinutes()) + ":" : currentTime.getMinutes() + ":";
        // 获取秒数
        const seconds = currentTime.getSeconds() < 10 ? '0' + (currentTime.getSeconds()) : currentTime.getSeconds();
        const time = year + "-" + month + '-' + day + hours + minutes + seconds;
        return time;
    },
    //分页工具封装
    pagination(data, callback) {
        let page = {
            onChange: (current) => {
                callback(current)
            },
            current: data.result.page,
            pageSize: data.result.pageSize,
            total: data.result.totalCount,
            showTotal: () => {
                return `共${data.result.totalCount}条`
            },
            showQuickJumper: true
        }
        return page;
    },
    //Option封装
    getOptionList(data){
        if(!data){
            return [];
        }
        let options = [];
        data.map((item)=>{
            options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
        })
        return options;
    }
}