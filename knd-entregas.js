/* KND Status Report de Entregas - parte fixa hospedada. Não editar. */
(function(){
var s=document.currentScript,BASE=s.src.replace(/[^\/]*$/,'');
var CSS=`
:root{--pet:#0f233e;--pet2:#163051;--teal:#2a7ac4;--mint:#e4eaf2;--mint2:#cfd9e6;--amber:#c9821a;--amberw:#fbf0dc;--red:#b4423a;--redw:#f8e4e1;--slate:#8a9a97;--ink:#162130;--muted:#5c6571;--line:#d7dde4;--paper:#fff}
*{box-sizing:border-box}
body{margin:0;background:#d9dde3;color:var(--ink);font-family:Calibri,Carlito,"Liberation Sans",Arial,sans-serif}
.report{width:210mm;margin:0 auto}
.sheet{position:relative;width:210mm;height:297mm;overflow:hidden;background:var(--paper);padding:12mm 13mm 11mm;display:flex;flex-direction:column;page-break-after:always;break-after:page}
.sheet:last-child{page-break-after:auto;break-after:auto}
@media screen{.sheet{margin:0 auto 14px;box-shadow:0 2px 16px rgba(15,35,62,.18)}}
@page{size:A4 portrait;margin:0}
@media print{body{background:#fff}.sheet{margin:0;box-shadow:none}*{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important}.noPrint{display:none!important}}
.pdfOnlyAction{display:none!important}
h1,h2,h3,p{margin:0}
.pill{display:inline-block;border-radius:999px;padding:2px 9px;font-size:10.5px;font-weight:700;white-space:nowrap}
.pill.ok{background:var(--mint);color:var(--pet2)}.pill.late{background:var(--redw);color:var(--red)}.pill.neu{background:#eeeff1;color:var(--muted)}

/* cabeçalho das páginas internas */
.run{display:flex;justify-content:space-between;align-items:center;padding-bottom:9px;border-bottom:2px solid var(--teal);margin-bottom:20px}
.run img{height:30px;display:block}
.run span{font-size:11px;color:var(--muted)}
.run b{color:var(--pet)}
.ptitle{margin-bottom:16px}
.ptitle h2{font-size:27px;line-height:1.1;color:var(--pet);font-weight:700}
.ptitle p{font-size:12.5px;color:var(--muted);margin-top:5px;max-width:560px;line-height:1.45}
.sec{font-size:15px;font-weight:700;color:var(--pet);margin:0 0 9px}

/* capa */
.cover{margin:-12mm -13mm 0;padding:12mm 13mm 16px;background:var(--pet);color:#fff;position:relative}
.cover:after{content:"";position:absolute;left:13mm;right:13mm;bottom:0;height:4px;background:linear-gradient(90deg,var(--teal) 0 46%,var(--amber) 46% 79%,var(--slate) 79%)}
.logos{display:flex;align-items:center;gap:10px}
.logos div{background:#fff;border-radius:8px;height:50px;padding:5px 12px;display:flex;align-items:center;justify-content:center;min-width:120px;max-width:190px}
.logos img{max-height:40px;max-width:100%;object-fit:contain;display:block}
.ctop{display:flex;justify-content:space-between;align-items:flex-start}
.edition{text-align:right;font-size:12px;color:#a9bcd6;line-height:1.35}
.edition b{display:block;font-size:20px;color:#fff;letter-spacing:.02em}
.cover h1{font-size:32px;line-height:1.1;font-weight:700;margin:26px 0 10px;max-width:640px}
.cover .lead{font-size:13px;line-height:1.55;color:#d6e0ec;max-width:640px}
.meta{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin:12px 0 0;padding:12px 0 2px;border-top:1px solid rgba(255,255,255,.18)}
.meta span{display:block;font-size:10px;color:#9fb4cf}
.meta b{font-size:12px;font-weight:700}

/* faixa de tarefas */
.statusHead{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin:20px 0 10px}
.statusHead .big{font-size:44px;font-weight:700;color:var(--pet);line-height:.9}
.statusHead .big small{font-size:13px;font-weight:400;color:var(--muted);display:block;margin-top:5px;line-height:1.3}
.statusHead p{font-size:12.5px;color:var(--muted);max-width:330px;line-height:1.45;text-align:right}
.strip{display:flex;gap:3px;height:30px}
.strip i{flex:1;border-radius:3px;position:relative}
.strip i.c{background:var(--teal)}.strip i.a{background:var(--amber)}.strip i.b{background:#c9cdd3}
.strip i.l:after{content:"";position:absolute;left:50%;top:50%;width:9px;height:9px;margin:-4.5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2.5px var(--red)}
.legend{display:flex;gap:18px;flex-wrap:wrap;margin:9px 0 18px;font-size:12px;color:var(--ink)}
.legend span{display:flex;align-items:center;gap:6px}
.legend i{width:11px;height:11px;border-radius:3px;display:inline-block}
.legend b{font-size:15px}
.legend .lt{margin-left:auto;color:var(--red);font-weight:700}
.legend .lt i{border-radius:50%;background:#fff;box-shadow:0 0 0 2.5px var(--red);width:9px;height:9px}
.board{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;flex:1;min-height:0}
.col{border-top:4px solid var(--teal);background:#f6f8fa;border-radius:0 0 8px 8px;padding:10px 10px 8px;display:flex;flex-direction:column;gap:7px}
.col.a{border-color:var(--amber)}.col.b{border-color:var(--slate)}
.colHead{display:flex;justify-content:space-between;align-items:baseline;font-size:13.5px;font-weight:700;color:var(--pet);margin-bottom:2px}
.colHead span{font-size:20px}
.task{background:#fff;border:1px solid var(--line);border-radius:7px;padding:8px 9px}
.task.late{border-color:#e7b6b0;background:#fffafa}
.task p{font-size:12px;line-height:1.3;font-weight:700;color:var(--ink)}
.task div{display:flex;justify-content:space-between;align-items:center;gap:6px;margin-top:5px}
.task small{font-size:10.5px;color:var(--muted)}
.more{font-size:11px;color:var(--muted);text-align:center;margin-top:auto;padding-top:4px}

/* página 2 */
.p2{display:grid;grid-template-columns:1.25fr 1fr;gap:18px}
.tl{position:relative;padding-left:2px}
.tl .item{display:grid;grid-template-columns:62px 1fr;gap:12px;position:relative;padding-bottom:12px}
.tl .item:before{content:"";position:absolute;left:30px;top:30px;bottom:-2px;width:2px;background:var(--mint2)}
.tl .item:last-child:before{display:none}
.tl .d{width:62px;height:30px;border-radius:7px;background:var(--pet);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;position:relative;z-index:1}
.tl .t small{display:block;font-size:10.5px;color:var(--teal);font-weight:700}
.tl .t p{font-size:12.5px;line-height:1.4;margin-top:2px}
.tlSub{font-size:11.5px;color:var(--muted);margin:-4px 0 12px}
.themes .th{margin-bottom:11px}
.themes .thTop{display:flex;justify-content:space-between;font-size:12.5px;font-weight:700}
.themes .thTop b{color:var(--pet);font-size:15px}
.themes .bar{height:8px;background:var(--mint);border-radius:4px;margin:4px 0 3px;overflow:hidden}
.themes .bar i{display:block;height:100%;background:var(--teal);border-radius:4px}
.themes small{font-size:11px;color:var(--muted)}
.main{margin-top:14px;background:var(--pet);color:#fff;border-radius:10px;padding:16px 18px}
.main small{font-size:11px;color:#9fb8d8;font-weight:700}
.main h3{font-size:19px;line-height:1.2;margin:4px 0 6px}
.main p{font-size:12.5px;line-height:1.5;color:#d6e0ec}
.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:12px}
.steps div{position:relative;background:var(--pet2);padding:8px 10px 8px 20px;font-size:12px;font-weight:700;display:flex;align-items:center;gap:7px;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 50%,calc(100% - 10px) 100%,0 100%,10px 50%)}
.steps div:first-child{clip-path:polygon(0 0,calc(100% - 10px) 0,100% 50%,calc(100% - 10px) 100%,0 100%);padding-left:12px;border-radius:5px 0 0 5px}
.steps em{font-style:normal;color:#9fb8d8}
.hl{display:grid;grid-template-columns:1fr 1fr;gap:10px 16px;margin-top:14px}
.hl div{border-left:3px solid var(--teal);padding:2px 0 2px 10px}
.hl b{display:block;font-size:12.5px;color:var(--pet)}
.hl span{font-size:12px;line-height:1.4}
.reading{margin-top:auto;background:var(--mint);border-radius:8px;padding:11px 14px;font-size:12.5px;line-height:1.45}
.reading b{color:var(--pet)}

/* página 3 */
.figs{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:12px}
.fig{border:1px solid var(--line);border-radius:10px;padding:14px 16px}
.fig label{font-size:12px;color:var(--muted);font-weight:700}
.fig strong{display:block;font-size:40px;line-height:1;color:var(--pet);margin:6px 0 5px}
.fig p{font-size:11.5px;color:var(--muted);line-height:1.4}
.fig.hours{background:var(--pet);border-color:var(--pet);color:#fff}
.fig.hours label,.fig.hours p{color:#a9bcd6}.fig.hours strong{color:#fff}
.gauge{height:9px;background:rgba(255,255,255,.18);border-radius:5px;overflow:hidden;margin:4px 0 6px}
.gauge i{display:block;height:100%;background:#7fa3d3;border-radius:5px}
.cal{margin-top:16px;border:1px solid var(--line);border-radius:10px;padding:14px 16px 12px}
.calHead{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px}
.calHead h3{font-size:16px;color:var(--pet)}
.calKey{display:flex;gap:14px;font-size:11px;color:var(--muted)}
.calKey span{display:flex;align-items:center;gap:5px}
.calKey i{width:12px;height:12px;border-radius:3px;display:inline-block;border:1px solid var(--line)}
.grid7{display:grid;grid-template-columns:repeat(7,1fr);gap:5px}
.grid7 .wd{font-size:11px;font-weight:700;color:var(--muted);text-align:center;padding-bottom:2px}
.day{height:58px;border-radius:7px;background:#f4f5f7;position:relative;overflow:hidden;padding:4px 6px;font-size:12px;color:#9aa1ab}
.day.off{background:transparent}
.day.we{background:#fafafb}
.day .h{position:absolute;left:0;right:0;height:50%}
.day .h.m{top:0;background:var(--teal)}
.day .h.t{bottom:0;background:var(--pet2)}
.day.on{color:#fff;font-weight:700}
.day b{position:relative;z-index:1}
.day small{position:absolute;right:6px;bottom:4px;z-index:1;font-size:10.5px;color:#fff;font-weight:700}
.chips{display:flex;flex-wrap:wrap;gap:6px}
.chips span{border:1px solid var(--line);border-radius:6px;padding:5px 8px;font-size:11.5px}

/* página 4 */
.two{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.list h3{font-size:16px;margin-bottom:8px;display:flex;align-items:center;gap:8px}
.list.att h3{color:var(--red)}.list.adv h3{color:var(--teal)}
.list ul{list-style:none;margin:0;padding:0}
.list li{display:grid;grid-template-columns:14px 1fr;gap:9px;padding:9px 0;border-top:1px solid var(--line)}
.list li:before{content:"";width:10px;height:10px;margin-top:3px;border-radius:2px;background:var(--red);transform:rotate(45deg)}
.list.adv li:before{background:var(--teal);border-radius:50%;transform:none}
.list li b{display:block;font-size:12.5px;color:var(--ink)}
.list li span{font-size:12.5px;line-height:1.42;color:#3d4755}
.verdict{margin-top:18px;padding:16px 18px 16px 22px;border-left:5px solid var(--teal);background:var(--mint);border-radius:0 10px 10px 0}
.verdict small{font-size:11px;font-weight:700;color:var(--teal)}
.verdict h3{font-size:20px;line-height:1.25;color:var(--pet);margin:4px 0 7px}
.verdict p{font-size:12.5px;line-height:1.55}
.deliv{margin:auto -13mm -11mm;padding:16px 13mm 13mm;background:var(--pet);color:#fff}
.delivHead{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.delivHead h3{font-size:16px}
.delivHead img{height:30px;background:#fff;border-radius:6px;padding:3px 8px}
.dl{display:grid;grid-template-columns:1.1fr 1fr 1fr 1fr;gap:10px}
.dl div{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14);border-radius:8px;padding:11px 12px}
.dl div:first-child{background:var(--teal);border-color:var(--teal)}
.dl b{display:block;font-size:13px;line-height:1.25;margin-bottom:5px}
.dl strong{display:block;font-size:26px;line-height:1;margin-bottom:5px}
.dl p{font-size:11.5px;line-height:1.4;color:#d6e0ec}
.dl em{font-style:normal;font-size:10.5px;font-weight:700;color:#9fb8d8;display:block;margin-bottom:4px}
.pdfBtn{display:flex;justify-content:center;margin-top:14px}
.pdfBtn a{background:#fff;color:var(--pet);font-weight:700;font-size:13px;text-decoration:none;padding:10px 26px;border-radius:999px}

.run span{text-align:right;line-height:1.35}
.day{height:76px}
.cal{margin-top:18px}
.list li{padding:12px 0}
.list li b{font-size:13.5px}
.list li span{font-size:13px;line-height:1.5}
.list h3{font-size:18px}
.verdict{margin-top:22px;padding:20px 22px 20px 24px}
.verdict h3{font-size:23px}
.verdict p{font-size:13.5px;line-height:1.6}
.dl div{padding:13px 14px}
.dl b{font-size:14px}
.dl p{font-size:12.5px}
.tl .item{padding-bottom:15px}
.themes .th{margin-bottom:14px}

.cover:after{background:linear-gradient(90deg,var(--teal) 0 var(--p1,46%),var(--amber) var(--p1,46%) var(--p2,79%),var(--slate) var(--p2,79%))}
.day{height:92px}
.day.on{color:var(--pet)}
.day.am{color:#fff}
.day small{color:var(--pet)}
.day.pm small{color:#fff}
.p2 .hl{grid-template-columns:1fr;gap:9px;margin-top:0}
.main{margin-top:6px}
.recap{margin-top:22px}
.rc{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid var(--line);border-radius:10px;overflow:hidden}
.rc div{padding:14px 16px;border-left:1px solid var(--line)}
.rc div:first-child{border-left:0}
.rc strong{display:block;font-size:30px;line-height:1;color:var(--pet)}
.rc strong small{font-size:14px;color:var(--muted);font-weight:400}
.rc strong.r{color:var(--red)}
.rc span{display:block;font-size:12px;color:var(--muted);margin-top:6px;line-height:1.35}

.pend{font-size:14px!important;font-weight:700;letter-spacing:.02em;opacity:.8;display:inline-block}
.list li{padding:10px 0}
.verdict{margin-top:18px;padding:16px 20px 16px 22px}
.verdict p{font-size:13px;line-height:1.55}
.recap{margin-top:16px}
.deliv{padding:14px 13mm 12mm}
.dl div{padding:11px 12px}
.dl p{font-size:12px;line-height:1.38}
`;
var st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
window.LOGOS={knd:"data:image/png;base64,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",knd_escuro:"data:image/png;base64,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"};
function montar(){
var D=window.DADOS,L=window.LOGOS,I=D.identificacao;
L.cliente=/^(data:|https?:)/.test(I.logo||'')?I.logo:BASE+'logos/'+(I.logo||'');
var S=D.status||{},R=D.rac||{},C=D.carga||{},G=D.gestao||{},E=D.entregas||{};
function cap(x){x=String(x||'');return x.charAt(0)+x.slice(1).toLowerCase()}
function num(v){return typeof v==='number'&&isFinite(v)?v:null}
function t(v){return (v===undefined||v===null||v==='')?'PENDENTE':v}
function bv(v,suf){return (v===undefined||v===null||v==='')?'<span class="pend">PENDENTE</span>':v+(suf&&num(v)!==null?suf:'')}
function arr(v){return Object.prototype.toString.call(v)==='[object Array]'?v:[]}
function low(x){return String(x||'').toLowerCase()}
var SW={de:1,da:1,do:1,das:1,dos:1,com:1,e:1,em:1,a:1,o:1,para:1,no:1,na:1,por:1,ao:1};
var CW={'MÊS':1,MES:1,ANO:1,DIA:1,DIAS:1,MAIS:1,SEM:1,'ATÉ':1,NOVO:1,NOVA:1,BOA:1,ALTA:1,BOM:1,PLANO:1,META:1,METAS:1,CAIXA:1,CUSTO:1,FASE:1,RITMO:1,FOCO:1,TIME:1,EQUIPE:1,AGENDA:1,PRAZO:1,PRAZOS:1,ROTA:1,BASE:1,GIRO:1,FRETE:1,ERRO:1,RISCO:1,ONDE:1,COMO:1};
function sc(x){x=String(x||'');if(x!==x.toUpperCase())return x;var w=x.split(' ').map(function(p,i){var core=p.replace(/[^A-Za-zÀ-ú&]/g,'');if(SW[core.toLowerCase()]||CW[core])return p.toLowerCase();if(core.length<=4)return p;return p.toLowerCase()}).join(' ');return w.charAt(0).toUpperCase()+w.slice(1)}
function pill(sit){var x=low(sit),c=x.indexOf('atras')>=0?'late':(x.indexOf('dia')>=0?'ok':'neu');return '<span class="pill '+c+'">'+(x?x.charAt(0).toUpperCase()+x.slice(1):'—')+'</span>'}
var run='<div class="run"><img src="'+L.knd+'" alt="KND"><span><b>'+t(I.cliente)+'</b><br>Entregas de '+low(I.mes)+' de '+t(I.ano)+'</span></div>';
function ptitle(a,b){return '<div class="ptitle"><h2>'+t(a)+'</h2>'+(b?'<p>'+b+'</p>':'')+'</div>'}

/* ---------- página 1 ---------- */
var T=S.totais||{},cols=arr(S.colunas),kc=['c','a','b'];
var nC=num(T.concluidas)||0,nA=num(T.andamento)||0,nB=num(T.backlog)||0,nL=num(T.atrasadas)||0;
var lateBy=[0,0,0];cols.forEach(function(c,k){arr(c.tarefas).forEach(function(x){if(low(x.situacao).indexOf('atras')>=0&&k<3)lateBy[k]++})});
var rest=Math.max(0,nL-lateBy[0]-lateBy[1]-lateBy[2]);lateBy[1]+=rest;
var blocks='';[[nC,'c',lateBy[0]],[nA,'a',lateBy[1]],[nB,'b',lateBy[2]]].forEach(function(g){for(var i=0;i<g[0];i++)blocks+='<i class="'+g[1]+(i<g[2]?' l':'')+'"></i>'});
if(!blocks)blocks='<i class="b"></i>';
function col(c,k){var lst=arr(c.tarefas),max=6,tot=num(c.total)!==null?c.total:lst.length,extra=Math.max(0,tot-Math.min(lst.length,max));
return '<div class="col '+kc[k]+'"><div class="colHead">'+t(c.nome)+'<span>'+tot+'</span></div>'+lst.slice(0,max).map(function(x){var late=low(x.situacao).indexOf('atras')>=0;return '<div class="task'+(late?' late':'')+'"><p>'+t(x.titulo)+'</p><div><small>'+(x.data||'')+'</small>'+pill(x.situacao)+'</div></div>'}).join('')+(extra?'<div class="more">+ '+extra+' não listada'+(extra>1?'s':'')+'</div>':'')+'</div>'}
var cp=D.capa||{};
var tt=nC+nA+nB||1,p1=Math.round(nC/tt*100),p2=Math.round((nC+nA)/tt*100);
var s1='<section class="sheet"><div class="cover" style="--p1:'+p1+'%;--p2:'+p2+'%"><div class="ctop"><div class="logos"><div><img src="'+L.knd+'" alt="KND"></div><div><img src="'+L.cliente+'" alt=""></div></div><div class="edition">Status Report de Entregas KND<b>'+t(I.mes)+' '+t(I.ano)+'</b></div></div>'
+'<h1>'+[cp.titulo_inicio,cp.titulo_destaque,cp.titulo_fim].filter(Boolean).join(' ')+'</h1><p class="lead">'+t(cp.texto)+'</p>'
+'<div class="meta"><div><span>Cliente</span><b>'+t(I.cliente)+'</b></div><div><span>Período</span><b>'+t(I.periodo)+'</b></div><div><span>Fontes</span><b>'+t(I.fontes)+'</b></div></div></div>'
+'<div class="statusHead"><div class="big">'+bv(T.total)+'<small>tarefas no Planner neste mês</small></div><p>'+(S.frase||'')+'</p></div>'
+'<div class="strip">'+blocks+'</div>'
+'<div class="legend"><span><i style="background:var(--teal)"></i><b>'+t(T.concluidas)+'</b> concluídas</span><span><i style="background:var(--amber)"></i><b>'+t(T.andamento)+'</b> em andamento</span><span><i style="background:#c9cdd3"></i><b>'+t(T.backlog)+'</b> no backlog</span><span class="lt"><i></i>'+t(T.atrasadas)+' atrasada'+(nL===1?'':'s')+'</span></div>'
+'<div class="board">'+cols.slice(0,3).map(col).join('')+'</div></section>';

/* ---------- página 2 ---------- */
var regs=arr(R.registros).slice(0,7),temas=arr(R.temas),mx=Math.max.apply(null,[1].concat(temas.map(function(x){return parseFloat(x.valor)||0})));
var sx=R.sintese||{},dq=R.destaques||{};
var s2='<section class="sheet">'+run+ptitle(R.titulo,R.subtitulo)
+'<div class="p2"><div><h3 class="sec">Registros de atendimento</h3><p class="tlSub">'+(R.resumo_registros||'')+'</p><div class="tl">'+regs.map(function(r){return '<div class="item"><div class="d">'+t(r.data)+'</div><div class="t"><small>'+(r.horario||'')+'</small><p>'+t(r.resumo)+'</p></div></div>'}).join('')+'</div></div>'
+'<div><h3 class="sec">Temas trabalhados</h3><div class="themes">'+temas.map(function(x){var v=parseFloat(x.valor)||0;return '<div class="th"><div class="thTop">'+sc(x.rotulo)+'<b>'+t(x.valor)+'</b></div><div class="bar"><i style="width:'+Math.round(v/mx*100)+'%"></i></div><small>'+(x.detalhe||'')+'</small></div>'}).join('')+'</div>'
+'<h3 class="sec" style="margin-top:18px">'+t(dq.titulo||'Destaques do período')+'</h3><div class="hl">'+arr(dq.itens).slice(0,4).map(function(x){return '<div><b>'+sc(x.rotulo)+'</b><span>'+t(x.texto)+'</span></div>'}).join('')+'</div></div></div>'
+'<div class="main"><small>'+sc(sx.rotulo||'Principal entrega do mês')+'</small><h3>'+t(sx.titulo)+'</h3><p>'+t(sx.texto)+'</p><div class="steps">'+arr(sx.fluxo).slice(0,4).map(function(f){return '<div><em>'+(f.icone||'')+'</em>'+t(f.texto)+'</div>'}).join('')+'</div></div>'
+(dq.leitura?'<div class="reading"><b>Leitura:</b> '+dq.leitura+'</div>':'')+'</section>';

/* ---------- página 3 ---------- */
var hx=num(C.horas),hp=num(C.horas_previstas),pct=hx!==null&&hp?Math.round(hx/hp*100):null;
var meses={JANEIRO:1,FEVEREIRO:2,'MARÇO':3,MARCO:3,ABRIL:4,MAIO:5,JUNHO:6,JULHO:7,AGOSTO:8,SETEMBRO:9,OUTUBRO:10,NOVEMBRO:11,DEZEMBRO:12};
var mn=meses[String(I.mes||'').toUpperCase()],yr=parseInt(I.ano,10),dts=arr(C.datas),cal='';
if(mn&&yr){var map={};dts.forEach(function(d){var p=String(d.data||'').split('/');if(parseInt(p[1],10)===mn){var dd=parseInt(p[0],10);map[dd]=map[dd]||{m:0,t:0,h:0};if(low(d.periodo).indexOf('tarde')>=0)map[dd].t=1;else map[dd].m=1;map[dd].h+=num(d.horas)||0}});
 var first=(new Date(yr,mn-1,1).getDay()+6)%7,days=new Date(yr,mn,0).getDate(),cells='';
 ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'].forEach(function(w){cells+='<div class="wd">'+w+'</div>'});
 for(var i=0;i<first;i++)cells+='<div class="day off"></div>';
 for(var dd=1;dd<=days;dd++){var wk=(first+dd-1)%7,m=map[dd];cells+='<div class="day'+(wk>4?' we':'')+(m?' on':'')+(m&&m.m?' am':'')+(m&&m.t?' pm':'')+'">'+(m&&m.m?'<i class="h m"></i>':'')+(m&&m.t?'<i class="h t"></i>':'')+'<b>'+dd+'</b>'+(m&&m.h?'<small>'+m.h+'h</small>':'')+'</div>'}
 cal='<div class="cal"><div class="calHead"><h3>Agenda de atendimentos · '+cap(I.mes)+' '+yr+'</h3><div class="calKey"><span><i style="background:var(--teal)"></i>Manhã</span><span><i style="background:var(--pet2)"></i>Tarde</span></div></div><div class="grid7">'+cells+'</div></div>';
}else{cal='<div class="cal"><div class="calHead"><h3>Datas dos atendimentos</h3></div><div class="chips">'+dts.map(function(d){return '<span><b>'+t(d.data)+'</b> · '+(d.dia||'')+' · '+(d.periodo||'')+' · '+(d.horas||'')+'h</span>'}).join('')+'</div></div>'}
var s3='<section class="sheet">'+run+ptitle(C.titulo,C.subtitulo)
+'<div class="figs"><div class="fig hours"><label>Horas executadas</label><strong>'+bv(C.horas,'h')+'</strong>'+(pct!==null?'<div class="gauge"><i style="width:'+Math.min(100,pct)+'%"></i></div><p>'+pct+'% das '+hp+'h previstas no mês</p>':'<p>Total do mês no Cronograma KND</p>')+'</div>'
+'<div class="fig"><label>Atendimentos</label><strong>'+bv(C.atendimentos)+'</strong><p>Blocos de 4 horas, manhã ou tarde.</p></div>'
+'<div class="fig"><label>Registros RAC</label><strong>'+bv(C.registros_rac)+'</strong><p>'+(C.texto_rac||'')+'</p></div></div>'
+cal+(C.leitura?'<div class="reading"><b>Leitura:</b> '+C.leitura+'</div>':'')+'</section>';

/* ---------- página 4 ---------- */
function li(x){return '<li><div><b>'+sc(x.rotulo)+'</b><span>'+t(x.texto)+'</span></div></li>'}
var itens=[{titulo:'Horas executadas',texto:E.texto_horas,big:bv(E.horas,'h')}].concat(arr(E.itens).slice(0,3));
var s4='<section class="sheet">'+run+ptitle(G.titulo,G.subtitulo)
+'<div class="two"><div class="list att"><h3>Pontos de atenção</h3><ul>'+arr(G.atencao).map(li).join('')+'</ul></div><div class="list adv"><h3>Avanços a preservar</h3><ul>'+arr(G.avancos).map(li).join('')+'</ul></div></div>'
+'<div class="verdict"><small>Avaliação do mês</small><h3>'+t(G.conclusao_titulo)+'</h3><p>'+t(G.conclusao_texto)+'</p></div>'
+'<div class="recap"><h3 class="sec">O mês em números</h3><div class="rc"><div><strong>'+bv(T.concluidas)+(num(T.total)!==null?'<small> de '+T.total+'</small>':'')+'</strong><span>tarefas concluídas no Planner</span></div><div><strong'+(nL?' class="r"':'')+'>'+bv(T.atrasadas)+'</strong><span>tarefas atrasadas</span></div><div><strong>'+bv(C.atendimentos)+'</strong><span>atendimentos realizados</span></div><div><strong>'+bv(C.horas,'h')+'</strong><span>horas executadas pela KND</span></div></div></div>'
+'<div class="deliv"><div class="delivHead"><h3>Entregas e acompanhamento de aceleração de resultados</h3><img src="'+L.knd+'" alt="KND"></div><div class="dl">'
+itens.map(function(x,i){return '<div>'+(x.big?'<strong>'+x.big+'</strong>':'<em>'+(x.icone||'')+'</em>')+'<b>'+t(x.titulo)+'</b><p>'+(x.texto||'')+'</p></div>'}).join('')+'</div>'
+'<div class="pdfBtn noPrint"><a href="#" onclick="window.print();return false">Baixar PDF</a></div></div></section>';

document.title='Status_Report_Entregas_'+I.cliente_arquivo+'_'+cap(I.mes)+'_'+I.ano;
document.getElementById('report').innerHTML=s1+s2+s3+s4;
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',montar);else montar();
})();
