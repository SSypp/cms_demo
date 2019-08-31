import Jsonp from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
import Utils from './../utils'
export default class Axios{
    static requestList(_this,url,params){
		var data = {
			params:params
        }
        this.myajax({
            url,
            data
        }).then((res)=>{
            if(res && res.result){
                let list = res.result.item_list.map((item,index)=>{
                    item.key = index;
                    return item;
                })
                _this.setState({
                    list,
                    pagination:Utils.pagination(res,(current)=>{
                        _this.params.page = current;
                        _this.requestList();
                    })
                })
            }
        })
	}
    static jsonp (options){
        return new Promise((resolve,reject) => {
            Jsonp(options.url,{
                param: 'callback'
            },function(err,res){
                if(res.status == '200'){
                    resolve(res);
                }else{
                    reject(err)
                }
            })
        }).catch(
            (err) => {
                console.log(err);
            }
        )
    }
    //axios的二次封装，主要是为了错误拦截和loading
    static ajax (options){  
        let loading;
        if (options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        const baseApi = 'https://easy-mock.com/mock/5d6548300aae3f72e104a124/mockapi';
        return new Promise((resolve,reject) => {
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params:(options.data && options.data.params) || ''
            }).then((res) => {
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if(res.status == '200'){
                    let resp = res.data;
                    if(resp.code == '200'){
                        resolve(resp);
                    }else{
                        Modal.info({
                            title:'提示',
                            content:resp.msg
                        })
                    }
                }else{
                    reject(res.data);
                }
            })
        })
    }
     //axios的二次封装，主要是为了错误拦截和loading
     static myajax (options){  
        let loading;
        if (options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        const baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
        return new Promise((resolve,reject) => {
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params:(options.data && options.data.params) || ''
            }).then((res) => {
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if(res.status == '200'){
                    let resp = res.data;
                    if(resp.code == '0'){
                        resolve(resp);
                    }else{
                        Modal.info({
                            title:'提示',
                            content:resp.msg
                        })
                    }
                }else{
                    reject(res.data);
                }
            })
        })
    }
}