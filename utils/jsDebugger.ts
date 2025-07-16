/**
 * processor断点自定义工具
 * 1.传参支持string、array
 * 2.函数可移植性
 * 3.断点
 * 4.matchMode 精准、模糊匹配
 * 5.二次操作查看processor包装顺序
 *
 * Ts转Js网站: https://www.typescriptlang.org/play?#code
 * 注意：放在类中去掉function关键字了
 */
type MatchMode = 'fuzzy' | 'explict'

function superDebug(fieldName: string, matchMode?: MatchMode) {
    const debuggerKeys = window['debuggerKeys']
    fieldName = fieldName.split('.').pop()
    if (debuggerKeys) {
        if (typeof debuggerKeys === 'string') {
            if(isHitTarget(debuggerKeys, fieldName, matchMode)) {
                console.log('debuggerKeys', fieldName)
                debugger
            }
        } else if (Array.isArray(debuggerKeys)) {
            debuggerKeys.forEach(key => {
                console.log('debuggerKeys', fieldName)
                if(isHitTarget(key, fieldName, matchMode)){
                    console.log('debuggerKeys', fieldName)
                    debugger
                    return
                }
            })
        }
    }

    function isHitTarget(key: string, target: string, matchMode?: MatchMode): boolean {
        matchMode = matchMode || 'fuzzy' // 默认模糊匹配
        if (matchMode === 'fuzzy') {
            return new RegExp(key).test(target);
        } else {
            return key === target;
        }
    }
}

/** 编译后
 superDebug(fieldName, matchMode) {
    const debuggerKeys = window['debuggerKeys'];
    fieldName = fieldName.split('.').pop();
    if (debuggerKeys) {
      if (typeof debuggerKeys === 'string') {
        if (isHitTarget(debuggerKeys, fieldName, matchMode)) {
          console.log('debuggerKeys', fieldName);
          debugger;
        }
      }
      else if (Array.isArray(debuggerKeys)) {
        debuggerKeys.forEach(key => {
          console.log('debuggerKeys', fieldName);
          if (isHitTarget(key, fieldName, matchMode)) {
            console.log('debuggerKeys', fieldName);
            debugger;
            return;
          }
        });
      }
    }
    function isHitTarget(key, target, matchMode) {
      matchMode = matchMode || 'fuzzy'; // 默认模糊匹配
      if (matchMode === 'fuzzy') {
        return new RegExp(key).test(target);
      }
      else {
        return key === target;
      }
    }
  }
 */