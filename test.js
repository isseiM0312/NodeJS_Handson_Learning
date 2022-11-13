
const price2 = {
    value:100,
    get withTax() {return Math.floor(this.value * 1.1)},
    set withTax(withTax) { this.value = Math.ceil(withTax / 1.1) } 
}

function parseJSONAsync(json) {
    return new Promise((resolve,reject) => 
    setTimeout(() => {
        try{
            resolve(JSON.parse(json))
        } catch (err) {
            reject(err)
        }
    }
    , 1000
    ))
}

const toBeFulfilled = parseJSONAsync({})
const toBeRejected = parseJSONAsync('不正なJSON')
console.log('****************promise生成***************')
console.log(toBeFulfilled)
console.log(toBeRejected)

setTimeout(() => {
    console.log('****************１秒後*****************')
    console.log(toBeFulfilled)
    console.log(toBeRejected)
}, 1000
)