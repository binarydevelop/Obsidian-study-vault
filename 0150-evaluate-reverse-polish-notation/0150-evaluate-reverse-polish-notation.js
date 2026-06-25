/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let ops = new Set(['+', '-', '*', '/'])

    let stack = []

    for(let ch of tokens){
        if(ops.has(ch)){
            let a = stack.pop()
            let b = stack.pop()
            if(ch == '+') stack.push(b + a)
            if(ch == '-') stack.push(b - a)
            if(ch == '*') stack.push(b * a)
            if(ch == '/') stack.push(Math.trunc(b / a))
        } else {
            stack.push(Number(ch))
        }
    }

    return stack[stack.length-1]
};