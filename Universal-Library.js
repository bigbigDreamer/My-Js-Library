/**
 *@Time  2018/8/20 11:15
 *@Author  沐沐
 *@Description  今天就着手编写自己的js函数库
 *@return  Object
 **/
//说明，此处试图使用es6语法中的module语法（export default/import args from 'path'）
/*export default {
    checkType:(target)=> Object.prototype.toString.call(target).slice(8, -1),
    deepClone:(target)=>{
        //判断拷贝的数据类型
        let result, targetType = checkType(target);
        if (targetType === 'Object') {
            result = {};
        } else if (targetType === 'Array') {
            result = [];
        } else {
            return target;
        }
        //遍历目标数据
        for (let i in target) {
            //获取数据对象的每一个值
            let value = target[i];
            //判断目标结构里面是否存在对象/数组
            if (checkType(value) === 'Object' || checkType(value) === 'Array') {
                //继续遍历
                result[i] = clone(value);
            } else { //获取到的value值是基本的数据类型或者函数
                result[i] = value;
            }
        }
        return result;
    }
}*/
//es5结合CommonJS的模块管理特性

module.exports = {
    //算法函数库
    AlgorithmsLibrary: {
        //检测数据类型函数
        checkType: (target) => Object.prototype.toString.call(target).slice(8, -1),
        //深度克隆函数，又称万能拷贝，可以拷贝嵌套对象或者数组
        deepClone1: (target) => {
            //判断拷贝的数据类型
            let result, targetType = checkType(target);
            if (targetType === 'Object') {
                result = {};
            } else if (targetType === 'Array') {
                result = [];
            } else {
                return target;
            }
            //遍历目标数据
            for (let i in target) {
                //获取数据对象的每一个值
                let value;
                value = target[i];
                //判断目标结构里面是否存在对象/数组
                if (checkType(value) === 'Object' || checkType(value) === 'Array') {
                    //继续遍历
                    result[i] = clone(value);
                } else { //获取到的value值是基本的数据类型或者函数
                    result[i] = value;
                }
            }
            return result;
        },
        //深度拷贝数组或者对象
        deepClone2: (target) => {
            return JSON.parse(JSON.stringify(target));
        },
        //数组去重flag法
        arrayToHeavy1: (arr) => {
            let newArr = [];
            let newArr1 = [];
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length; j++) {
                    if (i != j) {
                        if (arr[i] == arr[j]) {
                            newArr.push(arr[i])
                        }
                    }
                }
            }
            let json = {};
            for (let i = 0; i < newArr.length; i++) {
                if (!json[newArr[i]]) {
                    newArr1.push(newArr[i]);
                    json[newArr[i]] = 1;
                }
            }
            return newArr1
        },
        //数组去重set法
        arrayToHeavy2: (arr) => {
            let newArr = arr;
            arr = [];
            let set = new Set();
            set(newArr);
            for (let i of set) {
                arr.push(i);
            }
            return arr;
        },
        //本地localStorage存储
        saveTodos(todos){
            window.localStorage.setItem('key',JSON.stringify(todos));
        },
        //本地localStorage读取
        readTodos(){
            return  JSON.parse(window.localStorage.getItem('key'||[]));
        }
    },
    //动画函数库
    animationLibrary: {
        //获取当前样式函数
        getStyle: (obj, name) => {
            if (getComputedStyle) {
                return getComputedStyle(obj, null)[name];
            }
            else {
                return obj.currentStyle[name];
            }
        },
        //缓慢动画函数
        moveFunction: (obj, target, speed, name, callback) => {
            clearInterval(obj.timer);
            let current = parseInt(getStyle(obj, name));
            if (current > target) {
                speed = -speed;
            }
            obj.timer = setInterval(() => {
                let oldvalue = parseInt(getStyle(obj, name));
                let newvalue = oldvalue + speed;
                if ((speed < 0 && newvalue < target) || (speed > 0 && newvalue > target)) {
                    newvalue = target;
                }
                obj.style[name] = newvalue + "px";
                if (newvalue === target) {
                    clearInterval(obj.timer);
                    callback && callback();
                }
            }, 30);
        }
    }
}