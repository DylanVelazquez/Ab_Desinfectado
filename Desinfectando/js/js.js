function microsoft(p,pp,ppp){
    let q = "";
    for(let i = 0;i<p.length;i++){
        if(!(p.charAt(i-1) == pp && p.charAt(i) == ppp && p.charAt(i+1) == pp)){
            q = q + p.charAt(i);

        }
    }
    return q;

}