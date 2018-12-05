const tick =()=>{
    console.log('1sec passed')
    setTimeout(tick,1000)
}
setTimeout(tick,1000)