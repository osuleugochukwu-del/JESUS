export const platforms = ["All","MT4","MT5","cTrader","TradingView"];

export const indicators = [
  {slug:"trend-reversal-pro", name:"Trend Reversal Pro", creator:"Trade Avata Labs", rating:"4.8", reviews:"1.2k", price:"Free", platforms:["MT4","MT5","cTrader","TradingView"], tone:"blue", description:"Detect trend changes early with high-clarity reversal signals."},
  {slug:"volume-flow", name:"Volume Flow", creator:"Trade Avata Labs", rating:"4.7", reviews:"980", price:"$19", platforms:["MT4","MT5","cTrader","TradingView"], tone:"cyan", description:"Track real volume and smart-money activity across the session."},
  {slug:"smart-money-concept", name:"Smart Money Concept", creator:"Trade Avata Labs", rating:"4.8", reviews:"1.5k", price:"$29", platforms:["MT4","MT5","cTrader","TradingView"], tone:"green", description:"Identify institutional zones and key liquidity levels."},
  {slug:"rsi-divergence", name:"RSI Divergence", creator:"Trade Avata Labs", rating:"4.6", reviews:"820", price:"Free", platforms:["MT4","MT5","cTrader","TradingView"], tone:"purple", description:"Spot divergence signals before major market moves."},
  {slug:"trend-momentum", name:"Trend Momentum", creator:"Trade Avata Labs", rating:"4.7", reviews:"640", price:"$15", platforms:["MT5","TradingView"], tone:"blue", description:"A clean momentum dashboard for trend continuation setups."},
  {slug:"session-edge", name:"Session Edge", creator:"Trade Avata Labs", rating:"4.6", reviews:"510", price:"$12", platforms:["MT4","MT5"], tone:"orange", description:"Session-aware levels and opening-range context."},
  {slug:"precision-entry", name:"Precision Entry", creator:"Trade Avata Labs", rating:"4.8", reviews:"430", price:"$25", platforms:["cTrader","TradingView"], tone:"cyan", description:"Structured entry signals with configurable confirmation rules."},
  {slug:"volatility-breakout", name:"Volatility Breakout", creator:"Trade Avata Labs", rating:"4.5", reviews:"380", price:"Free", platforms:["MT4","MT5"], tone:"green", description:"Visualize expansion and breakout conditions."}
];

export const courses = [
  {slug:"trading-basics", title:"Trading Basics", level:"Beginner", duration:"2h 30m", lessons:18, description:"Market foundations, order types, risk and a repeatable trading process.", imageTone:"blue"},
  {slug:"technical-analysis", title:"Technical Analysis", level:"Intermediate", duration:"4h 12m", lessons:26, description:"Market structure, support/resistance, trends and practical chart analysis.", imageTone:"cyan"},
  {slug:"risk-management", title:"Risk Management", level:"Intermediate", duration:"3h 45m", lessons:21, description:"Position sizing, drawdown control, risk/reward and consistency.", imageTone:"purple"},
  {slug:"advanced-strategies", title:"Advanced Strategies", level:"Advanced", duration:"5h 20m", lessons:32, description:"A structured look at advanced setups, confluence and execution.", imageTone:"green"}
];

export const nav = [
  ["AI Analytics","analytics/"],["AI Journal","journal/"],["Indicators","products/"],
  ["Courses","courses/"],["Market","market/"],["About","about/"]
];