export function buildAIAnalyticsEvidence({account,trades=[]}){
 const wins=trades.filter(t=>Number(t.pnl||t[6])>0),losses=trades.filter(t=>Number(t.pnl||t[6])<0);
 const net=trades.reduce((s,t)=>s+Number(t.pnl??t[6]??0),0);
 const winRate=trades.length?wins.length/trades.length*100:0;
 return {accountId:account?.id||null,tradeCount:trades.length,winRate,netPnl:net,wins:wins.length,losses:losses.length};
}
export function getAIAnalyticsPrompt(evidence){return `Analyze only this supplied trading evidence. Separate calculations from hypotheses. Do not predict future returns. Evidence: ${JSON.stringify(evidence)}`;}
export async function requestAIAnalytics(prompt){const endpoint=import.meta.env.PUBLIC_TRADE_AVATA_AI_ENDPOINT;if(!endpoint)return null;const r=await fetch(endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt})});if(!r.ok)throw new Error(`AI endpoint returned ${r.status}`);return r.json();}
