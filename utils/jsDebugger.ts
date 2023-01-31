/**
 * processor断点自定义工具
 * 1.传参支持string、array
 * 2.函数可移植性
 * 3.打印变化文件路径
 * 4.断点
 */
function superDebug(fieldName: string) {
    const __debuggerKeys__ = window['__debuggerKeys__']
    if (__debuggerKeys__) {
        if (typeof __debuggerKeys__ === 'string') {
            if(isHitTarget(__debuggerKeys__, fieldName)) {
                console.log('__debuggerKeys__', fieldName)
                debugger
            }
        } else if (Array.isArray(__debuggerKeys__)) {
            __debuggerKeys__.forEach(key => {
                console.log('__debuggerKeys__', fieldName)
                if(isHitTarget(key, fieldName)){
                    console.log('__debuggerKeys__', fieldName)
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