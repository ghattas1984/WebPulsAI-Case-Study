
function heavyCompute(){const s=performance.now();let x=0;for(let i=0;i<2e8;i++){x+=i%7}alert('Heavy compute took '+Math.round(performance.now()-s)+' ms')}
