/**
 * processor断点自定义工具
 * 1.传参支持string、array
 * 2.函数可移植性
 * 3.打印变化文件路径
 * 4.断点
 *
 * Ts转Js网站: https://www.typescriptlang.org/play?#code
 * 注意：放在类中去掉function关键字
 */
function superDebug(fieldName: string) {
    const debuggerKeys = window['debuggerKeys']
    if (debuggerKeys) {
        if (typeof debuggerKeys === 'string') {
            if(isHitTarget(debuggerKeys, fieldName)) {
                console.log('debuggerKeys', fieldName)
                debugger
            }
        } else if (Array.isArray(debuggerKeys)) {
            debuggerKeys.forEach(key => {
                console.log('debuggerKeys', fieldName)
                if(isHitTarget(key, fieldName)){
                    console.log('debuggerKeys', fieldName)
                    debugger
                    return
                }
            })
        }
    }

    function isHitTarget(key: string, target: string): boolean {
        return new RegExp(key).test(target);
    }
}