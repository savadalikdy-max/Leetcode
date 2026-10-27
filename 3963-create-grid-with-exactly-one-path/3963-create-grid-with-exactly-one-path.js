/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {
    let grd=[];
    for(let i=0;i<m;i++){
        let rw="";
        for(let j=0;j<n;j++){
            if(i===0||j===n-1){
                rw+=".";
            }else{
                rw+="#";
            }
        }
        grd.push(rw)
    }
    return grd;
};