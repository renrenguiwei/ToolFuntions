// 1、返回一个数组对象
const {x,xx,xxx} = this.state
{
	x:'',
	xx:'',
	xxx:''
}
// 单独拿出来
{x} = {
	x:''
}

// 2、时间 new Date()
+new Date()	// 1520243277069
+Date.now()	// 1520243277069
new Date()	// Mon Mar 05 2018 17:47:57
Date.now()	// GMT+0800 (+08)1520243277069

// +号是毫秒数变换的简写

// 3、正则表达式 “$&、$`、$'、$1、$2、$3、……”
/*
$& - 正则表达式匹配的文本
$` - 匹配文本的左侧内容
$' - 匹配文本的右侧内容
$1 - 第一个括号表达式匹配到的内容
*/
var text  = "abc123def", total, left, right;
 	total = text.replace(/\d+/g, "[$&]");   // abc[123]def
	left  = text.replace(/\d+/g, "[$`]");   // abc[abc]def
	right = text.replace(/\d+/g, "[$']");   // abc[def]def

/*
原始字符串：我是程序员 
正则：(.*)(程序员)(.*) 
替换为：$1工程师$3

正则：(.*)(([^不是]|[^是]|)程序员)(.*) 
替换为：$1工程师$4
*/

// 注意：$&!==$1  前者匹配替换输出所有，后者只替换括号内

























