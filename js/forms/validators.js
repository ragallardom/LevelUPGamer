export function isAllowedEmail(email){
    const re = /^[^@\s]+@(?:duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
    return !!email && email.trim().length <= 100 && re.test(email.trim());
}

export function isValidRUN(run){ // "19011022K" sin puntos/guion, 7–9 + DV
    const clean = String(run||"").trim().toUpperCase();
    if(!/^[0-9]{7,8}[0-9K]$/.test(clean)) return false;
    const body = clean.slice(0,-1), dv = clean.slice(-1);
    let sum=0, mul=2;
    for(let i=body.length-1;i>=0;i--){ sum += parseInt(body[i],10)*mul; mul = (mul===7?2:mul+1); }
    const res = 11 - (sum % 11);
    const dvCalc = (res===11)?"0":(res===10?"K":String(res));
    return dv === dvCalc;
}

export const textLen = (v,min,max,req=true)=>{
    if(!v) return !req;
    const n = String(v).trim().length;
    return n>=min && n<=max;
};
export const isIntGE0 = v => Number.isInteger(Number(v)) && Number(v)>=0;
export const isPrice  = v => !isNaN(v) && Number(v)>=0;
