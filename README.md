>##JS工具函数库(En:My own Tool library)
>> - Author:沐沐
>> - Time:2018.8.20 &nbsp;&nbsp;&nbsp; PM&nbsp;18:00
>> - Blog:[*myCSDN-Blogs*](https://blog.csdn.net/qq_37469957)
>> - **API specification**
>>>- 算法工具函数(En:AlgorithmsLibrary)
>>>   -  checkType()
>>>      - *@return* String
>>>      - *@arguments* target
>>>      - *@parameters* [Array,Object,Function,Null,Undefined,Number,String,Boolean,symbol]
>>>      - *@description* 检测目标数据类型(En:Detect the target data type)
>>>   -  deepClone1()
>>>      - *@return* Object||Array
>>>      - *@arguments* target
>>>      - *@description* 多类型深度克隆|包含数据或者对象的重合嵌套|(En:Multiple types of deep clone | contains overlapping nested | of data or objects)
>>>   -  deepClone2()
>>>     - *@return* Object||Array
>>>     - *@arguments* target
>>>     - *@description* 简单数据深度克隆(En:Simple data depth cloning)     
>>>   -  arrayToHeavy1()
>>>     - *@return* Array
>>>     - *@arguments* array
>>>     - *@description* 闸门式数组去重(En:Gate array deduplication)     
>>>   -  deepClone2()
>>>     - *@return* Array
>>>     - *@arguments* array
>>>     - *@description* ES6新数据结构Set去重(En:ES6 new data structure Set to be deduplicated)     
>>>- JS动画工具函数(En:animationLibrary)
>>>   -  getStyle()
>>>     - *@return* CSS-Style
>>>     - *@arguments* obj,name
>>>       - obj:目标DOM元素对象(En:Target DOM element object)
>>>       - name:目标DOM元素对象的CSS样式属性名(En:The CSS style attribute name of the target DOM element object)
>>>     - *@description* JS获取当前样式|兼容IE8以下浏览器|(En:JS gets the current style | compatible with IE8 and below browser |)  
>>>   -  moveFunction()
>>>     - *@arguments* obj,target,speed,name,callback
>>>       - obj:目标DOM元素对象(En:Target DOM element object)
>>>       - target:移动目的地位置(单位：px)(En:Move destination position (unit: px))
>>>       - speed:移动速度(单位：px)(En:Speed of movement (unit: px))
>>>       - name:目标DOM元素对象的CSS样式属性名(En:The CSS style attribute name of the target DOM element object)
>>>       - callback:所有动画执行完毕后所需要执行的动作(这个回调函数可选可不选)(En:The actions you need to perform after all the animations have been executed (this callback function is optional))
>>>     - *@description* JS原生缓慢动画帧函数(En:JS native slow animation frame function)   
