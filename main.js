const aliceTumbling = [  
    { transform: 'rotate(0) scale(1)' },  
    { transform: 'rotate(360deg) scale(0)' }  
];  
  
const aliceTiming = {  
    duration: 2000,  
    iterations: 1,  
    fill: 'forwards'  
};  
  
const alice1 = document.querySelector("#alice1");  
const alice2 = document.querySelector("#alice2");  
const alice3 = document.querySelector("#alice3");  
  
// 封装动画调用为返回 Promise 的函数  
function animateElement(element, keyframes, options) {  
    return element.animate(keyframes, options).finished;  
}  
  
// 使用 async/await 实现依次执行  
(async function() {  
    await animateElement(alice1, aliceTumbling, aliceTiming);  
    await animateElement(alice2, aliceTumbling, aliceTiming);  
    await animateElement(alice3, aliceTumbling, aliceTiming);  
})();