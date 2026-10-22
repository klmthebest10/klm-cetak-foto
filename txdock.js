/* KLM — jendela kecil proses transfer (satu kartu per kiriman). Dipakai oleh KLM Cetak Foto dan KLM Sender. */
(function(){
  if(window.KLMTxDock) return;
  const css=`
.txd{position:fixed;right:calc(14px + env(safe-area-inset-right,0px));bottom:calc(14px + env(safe-area-inset-bottom,0px));z-index:90;display:flex;flex-direction:column-reverse;gap:10px;width:min(380px,calc(100vw - 28px));max-height:calc(100dvh - 90px);overflow-y:auto;overscroll-behavior:contain;pointer-events:none;font-family:var(--f-body,system-ui,sans-serif)}
.txd>*{pointer-events:auto}
.txc{flex:none;background:var(--surface,#fff);color:var(--ink,#1E2142);border:2px solid var(--ink,#1E2142);border-radius:16px;box-shadow:4px 4px 0 var(--shadow,#1E2142);overflow:hidden;animation:txin .22s ease-out}
@keyframes txin{from{transform:translateY(14px);opacity:0}}
.txc-h{display:flex;align-items:center;gap:10px;padding:10px 10px 10px 12px;cursor:pointer}
.txc-ic{width:34px;height:34px;border-radius:11px;display:grid;place-items:center;flex:none;border:2px solid var(--ink,#1E2142);background:var(--sun,#FFC845);color:#1E2142}
.txc.in .txc-ic{background:var(--mint,#1FB59C);color:#fff}
.txc-ic svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}
.txc-t{flex:1;min-width:0}
.txc-t b{display:block;font-weight:800;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.txc-t small{display:block;color:var(--muted,#62688C);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.txc-st{font-size:11px;font-weight:800;padding:3px 8px;border-radius:99px;white-space:nowrap;border:2px solid var(--line,#D6DCEA);color:var(--muted,#62688C)}
.txc-st.run{background:var(--sun,#FFC845);border-color:var(--sun,#FFC845);color:#1E2142}
.txc-st.done{background:var(--mint,#1FB59C);border-color:var(--mint,#1FB59C);color:#fff}
.txc-st.err{border-color:#E5484D;color:#E5484D}
.txc-st.wait{border-color:var(--coral,#FF6B4A);color:var(--coral,#FF6B4A)}
.txc-x{border:0;background:transparent;width:28px;height:28px;border-radius:8px;display:grid;place-items:center;color:var(--muted,#62688C);cursor:pointer;flex:none;padding:0}
.txc-x:hover{background:var(--surface2,#F5F7FC);color:var(--ink,#1E2142)}
.txc-x svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2.4;stroke-linecap:round}
.txc-b{padding:0 12px 12px;display:flex;flex-direction:column;gap:8px}
.txc.min .txc-b{display:none}
.txc-bar{height:12px;border-radius:99px;background:var(--surface2,#F5F7FC);border:2px solid var(--line,#D6DCEA);overflow:hidden}
.txc-bar i{display:block;height:100%;width:0;border-radius:99px;background:repeating-linear-gradient(-45deg,var(--coral,#FF6B4A) 0 10px,#FF8E74 10px 20px);background-size:28px 28px;animation:txs 1s linear infinite;transition:width .3s linear}
.txc.in .txc-bar i{background:repeating-linear-gradient(-45deg,var(--mint,#1FB59C) 0 10px,#55D3BD 10px 20px);background-size:28px 28px}
.txc.done .txc-bar i{animation:none}
@keyframes txs{to{background-position:28px 0}}
.txc-bar.ind i{width:35%!important;animation:txs 1s linear infinite,txind 1.4s ease-in-out infinite alternate}
@keyframes txind{from{margin-left:0}to{margin-left:65%}}
.txc-s{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;font-size:12px;color:var(--muted,#62688C);font-variant-numeric:tabular-nums}
.txc-s b{color:var(--ink,#1E2142)}
.txc-r{font-size:12.5px;font-weight:700;color:var(--ink,#1E2142);background:var(--surface2,#F5F7FC);border-radius:10px;padding:6px 9px;display:flex;gap:8px;align-items:center}
.txc-r .sp{width:14px;height:14px;border-radius:50%;border:2.5px solid var(--line,#D6DCEA);border-top-color:var(--coral,#FF6B4A);animation:txr .8s linear infinite;flex:none}
@keyframes txr{to{transform:rotate(360deg)}}
.txc-f{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:4px;font-size:12px;max-height:150px;overflow:auto}
.txc-f li{display:grid;grid-template-columns:16px minmax(0,1fr) auto;gap:6px;align-items:center}
.txc-f li span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.txc-f li em{font-style:normal;color:var(--muted,#62688C);font-variant-numeric:tabular-nums}
.txc-f li i{font-style:normal;font-weight:800;text-align:center;color:var(--muted,#62688C)}
.txc-f li.ok i{color:var(--mint,#1FB59C)} .txc-f li.cur{font-weight:800} .txc-f li.cur i{color:var(--coral,#FF6B4A)}
.txc-a{display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap}
.txc-a button{font:800 12.5px var(--f-body,system-ui,sans-serif);border:2px solid var(--ink,#1E2142);background:var(--surface,#fff);color:var(--ink,#1E2142);border-radius:10px;padding:6px 11px;cursor:pointer;box-shadow:2px 2px 0 var(--shadow,#1E2142)}
.txc-a button.p{background:var(--coral,#FF6B4A);color:#fff}
.txc-a button.g{box-shadow:none;border-color:var(--line,#D6DCEA);color:var(--muted,#62688C)}
.txd-more{align-self:flex-end;font:800 12px var(--f-body,system-ui,sans-serif);border:2px solid var(--ink,#1E2142);background:var(--surface,#fff);color:var(--ink,#1E2142);border-radius:99px;padding:5px 12px;cursor:pointer;box-shadow:2px 2px 0 var(--shadow,#1E2142)}
@media (max-width:520px){.txd{left:calc(10px + env(safe-area-inset-left,0px));right:calc(10px + env(safe-area-inset-right,0px));width:auto;bottom:calc(10px + env(safe-area-inset-bottom,0px))}}
@media (prefers-reduced-motion:reduce){.txc,.txc-bar i,.txc-r .sp{animation:none!important}}`;
  const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  const IC={out:'<svg viewBox="0 0 24 24"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>',in:'<svg viewBox="0 0 24 24"><path d="M17 7 7 17"/><path d="M16 17H7V8"/></svg>',
    x:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',min:'<svg viewBox="0 0 24 24"><path d="M6 12h12"/></svg>'};
  const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmt=b=>{b=+b||0;if(b<1024)return b+' B';const u=['KB','MB','GB','TB'];let i=-1;do{b/=1024;i++}while(b>=1024&&i<u.length-1);return b.toFixed(b<10?2:b<100?1:0)+' '+u[i]};
  const eta=s=>{if(!isFinite(s)||s<0)return'—';s=Math.round(s);if(s<60)return s+' dtk';const m=Math.floor(s/60);if(m<60)return m+' mnt '+(s%60)+' dtk';return Math.floor(m/60)+' jam '+(m%60)+' mnt'};
  let dock=null;const cards=new Map(),state=new Map(),timers=new Map();
  function ensure(){if(!dock){dock=document.createElement('div');dock.className='txd';dock.setAttribute('aria-live','polite');document.body.appendChild(dock)}return dock}
  const API={onAction:null,
    update(d){ensure();state.set(d.key,d);let c=cards.get(d.key);
      if(!c){if(innerWidth<640)cards.forEach(o=>{o._min=true;o.classList.add('min')});   // di HP: kartu lama dikecilkan, yang baru terbuka
        c=document.createElement('section');c.className='txc';c.dataset.key=d.key;dock.appendChild(c);cards.set(d.key,c);
        c.addEventListener('click',e=>{const b=e.target.closest('[data-txa]');if(b){e.stopPropagation();const a=b.dataset.txa;
          if(a==='close'){API.remove(d.key,true);return}if(a==='min'){c.classList.toggle('min');c._min=c.classList.contains('min');return}
          API.onAction&&API.onAction(d.key,a);return}
          if(e.target.closest('.txc-h')){c.classList.toggle('min');c._min=c.classList.contains('min')}});
        c.addEventListener('pointerenter',()=>{c._hover=true});c.addEventListener('pointerleave',()=>{c._hover=false})}
      paint(c,d);
      clearTimeout(timers.get(d.key));
      if(d.status==='done')timers.set(d.key,setTimeout(function h(){if(c._hover||!c._min&&c.matches(':focus-within')){timers.set(d.key,setTimeout(h,3000));return}API.remove(d.key)},12000));
      tidy()},
    remove(key,user){const c=cards.get(key);if(!c)return;cards.delete(key);state.delete(key);clearTimeout(timers.get(key));c.remove();if(user)API.onAction&&API.onAction(key,'dismiss');tidy()}};
  function tidy(){if(!dock)return;let more=dock.querySelector('.txd-more');const list=[...cards.values()];const MAX=3;
    list.forEach((c,i)=>{c.hidden=!dock._all&&i<list.length-MAX});
    const hid=dock._all?0:Math.max(0,list.length-MAX);
    if(hid){if(!more){more=document.createElement('button');more.className='txd-more';more.onclick=()=>{dock._all=!dock._all;tidy()};dock.prepend(more)}more.textContent='+'+hid+' kiriman lain'}
    else if(more){if(dock._all&&list.length>MAX){more.textContent='Ringkas'}else{more.remove();dock._all=false}}}
  function paint(c,d){
    c.className='txc '+(d.dir==='in'?'in':'out')+(d.status==='done'?' done':'')+(c._min?' min':'');
    const pct=d.total?Math.min(100,d.done/d.total*100):(d.status==='done'?100:0);
    const stCls={run:'run',offer:'wait',wait:'wait',queue:'',relink:'wait',done:'done',failed:'err',rejected:'err',cancelled:'err'}[d.status]||'';
    const finished=['done','failed','rejected','cancelled'].includes(d.status);
    let stats='';
    if(d.status==='run')stats=`<div class="txc-s"><span><b>${fmt(d.done)}</b> / ${fmt(d.total)} · <b>${pct.toFixed(0)}%</b></span><span><b>${fmt(d.speed||0)}/s</b></span><span>sisa ${eta((d.total-d.done)/(d.speed||1e-9))}</span></div>`;
    else if(d.status==='done')stats=`<div class="txc-s"><span><b>${fmt(d.total)}</b> terkirim</span><span>rata-rata ${fmt(d.avg||0)}/s</span>${d.secs?`<span>${eta(d.secs)}</span>`:''}</div>`;
    let note='';
    if(d.status==='wait')note=`<div class="txc-r"><span class="sp"></span>Menunggu ${esc(d.peer)} menerima… kiriman tetap menunggu, tidak akan gagal karena lama.</div>`;
    else if(d.status==='queue')note=`<div class="txc-r"><span class="sp"></span>Antre, menunggu kiriman sebelumnya selesai.</div>`;
    else if(d.status==='relink')note=`<div class="txc-r"><span class="sp"></span>${esc(d.reason||'Koneksi terputus.')} Menyambung ulang otomatis${d.tries?` (percobaan ${d.tries})`:''}…</div>`;
    else if(d.status==='offer')note=`<div class="txc-r">${esc(d.peer)} ingin mengirim ${d.files.length} file (${fmt(d.total)}).</div>`;
    else if(d.reason&&finished&&d.status!=='done')note=`<div class="txc-r">${esc(d.reason)}</div>`;
    let acc=0;const files=d.files.slice(0,60).map(f=>{const a0=acc;acc+=f.size;let cls='',ic='•',ex=fmt(f.size);
      if(d.status==='done'||(d.status==='run'&&d.done>=acc&&f.size>0)){cls='ok';ic='✓'}
      else if(d.status==='run'&&d.done>=a0){cls='cur';ic='▸';ex=(f.size?Math.min(100,(d.done-a0)/f.size*100).toFixed(0):100)+'% · '+fmt(f.size)}
      return `<li class="${cls}"><i>${ic}</i><span title="${esc(f.name)}">${esc(f.name)}</span><em>${ex}</em></li>`}).join('')+(d.files.length>60?`<li><i></i><span>…dan ${d.files.length-60} file lain</span><em></em></li>`:'');
    let acts='';
    if(d.status==='offer')acts=`<button class="g" data-txa="reject">Tolak</button><button class="p" data-txa="accept">Terima</button>`;
    else if(['run','wait','queue','relink'].includes(d.status))acts=`<button class="g" data-txa="cancel">Batalkan</button>`;
    else if(d.dir==='out'&&['failed','cancelled','rejected'].includes(d.status))acts=`<button class="p" data-txa="retry">Kirim ulang</button>`;
    if(d.canOpen)acts=`<button class="g" data-txa="open">Lihat di KLM Sender</button>`+acts;
    const ind=['wait','queue','relink','offer'].includes(d.status);
    c.innerHTML=`<div class="txc-h"><div class="txc-ic">${IC[d.dir==='in'?'in':'out']}</div><div class="txc-t"><b title="${esc(d.title)}">${esc(d.title)}</b><small>${d.dir==='in'?'Dari':'Ke'} ${esc(d.peer)}${d.route?' · '+esc(d.route):''} · ${d.files.length} file · ${fmt(d.total)}</small></div>
      <span class="txc-st ${stCls}">${esc(d.label)}</span>${finished?`<button class="txc-x" data-txa="close" aria-label="Tutup">${IC.x}</button>`:`<button class="txc-x" data-txa="min" aria-label="Kecilkan">${IC.min}</button>`}</div>
      <div class="txc-b">${d.status==='done'||d.status==='run'||ind?`<div class="txc-bar${ind?' ind':''}"><i style="width:${pct}%"></i></div>`:''}${stats}${note}<ul class="txc-f">${files}</ul>${acts?`<div class="txc-a">${acts}</div>`:''}</div>`}
  window.KLMTxDock=API;
})();
