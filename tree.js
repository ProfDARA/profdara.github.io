// Responsible for drawing the SVG skill tree using SKILL_NODES and SKILL_LINKS
(function(){
  let treeDrawn = false;
  window.drawSkillTree = function(){
    if(treeDrawn) return; treeDrawn = true;
    const svg = document.getElementById('skillSvg');
    if(!svg) return;

    // clear existing children just in case
    while(svg.firstChild) svg.removeChild(svg.firstChild);

    // draw links
    SKILL_LINKS.forEach(l=>{
      const s = SKILL_NODES.find(n=>n.id===l.source);
      const t = SKILL_NODES.find(n=>n.id===l.target);
      if(!s||!t) return;
      const line = document.createElementNS('http://www.w3.org/2000/svg','line');
      line.setAttribute('x1', s.x); line.setAttribute('y1', s.y);
      line.setAttribute('x2', t.x); line.setAttribute('y2', t.y);
      line.setAttribute('class','link');
      svg.appendChild(line);
    });

    // draw nodes
    SKILL_NODES.forEach(n=>{
      const g = document.createElementNS('http://www.w3.org/2000/svg','g');
      g.setAttribute('class','node'); g.setAttribute('data-id',n.id);
      g.setAttribute('transform',`translate(${n.x},${n.y})`);

  // invisible larger circle to provide a stable hit area (prevents jitter when hover/scale changes)
  const hit = document.createElementNS('http://www.w3.org/2000/svg','circle');
  hit.setAttribute('r',46);
  hit.setAttribute('fill','transparent');
  hit.setAttribute('class','hit-area');

  const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
  circle.setAttribute('r',40); circle.setAttribute('fill', n.color || '#021226');

  // smaller inner circle for cert/skill visual distinction
  if(n.isSkillNode){
    circle.setAttribute('r',34);
  }

      const label = document.createElementNS('http://www.w3.org/2000/svg','text');
      label.setAttribute('y',6);
      label.textContent = n.label;

  // append hit area first so it captures pointer events without visually changing layout
  g.appendChild(hit);
  g.appendChild(circle);
  g.appendChild(label);
      svg.appendChild(g);

      // hover behaviour: show info but do not require click
      g.addEventListener('mouseenter', ()=>{
        document.querySelectorAll('.node').forEach(nn=>nn.classList.remove('active-node'));
        g.classList.add('active-node');
        const infoTitle = document.getElementById('infoTitle');
        const infoDesc = document.getElementById('infoDesc');
        const infoMeta = document.getElementById('infoMeta');
        const infoLink = document.getElementById('infoLink');
        if(infoTitle) infoTitle.textContent = n.label || '';
        if(infoDesc) infoDesc.textContent = n.desc || '';

        // show skills (if any) and children
        const skills = Array.isArray(n.skills) ? n.skills : [];
        const childLinks = SKILL_LINKS.filter(l=>l.source===n.id).map(l=>{
          const node = SKILL_NODES.find(x=>x.id===l.target);
          return node ? node.label : l.target;
        });

        let metaParts = [];
        if(skills.length) metaParts.push('Skills: ' + skills.join(' · '));
        if(childLinks.length) metaParts.push('Cabang → ' + childLinks.join(', '));
        if(infoMeta) infoMeta.textContent = metaParts.length ? metaParts.join('\n') : 'Tidak ada cabang lebih lanjut.';

        // if node is a certificate node, try to find its metadata and show link
        if(n.certId){
          const cert = (window.SKILL_CERTS||[]).find(c=>c.id===n.certId);
          if(cert && infoLink){ infoLink.href = cert.url || '#'; infoLink.style.display = cert.url ? 'inline-block' : 'none'; }
        } else if(n.cert){ // legacy support: direct URL on node
          if(infoLink) { infoLink.href = n.cert || '#'; infoLink.style.display = n.cert ? 'inline-block' : 'none'; }
        } else {
          if(infoLink) { infoLink.href = '#'; infoLink.style.display = 'none'; }
        }

        const infoBox = document.getElementById('infoBox'); if(infoBox) infoBox.style.display = '';
      });

      // click behaviour: open certificate (if this is a cert node and url exists)
      g.addEventListener('click', ()=>{
        if(n.certId){
          const cert = (window.SKILL_CERTS||[]).find(c=>c.id===n.certId);
          if(cert && cert.url) window.open(cert.url, '_blank');
        } else if(n.cert){
          window.open(n.cert, '_blank');
        }
      });

      // Note: avoid changing stroke-width on hover to keep the SVG hit-testing stable.
      // Visual feedback is provided by the CSS `.active-node` class and brightness filter.
    });

    // initial highlight (first node) - compute children dynamically
    const firstNodeId = SKILL_NODES.length ? SKILL_NODES[0].id : null;
    const first = firstNodeId ? document.querySelector('[data-id="'+firstNodeId+'"]') : null;
    if(first) first.classList.add('active-node');
    const infoBox = document.getElementById('infoBox'); if(infoBox) infoBox.style.display = '';
    const infoTitle = document.getElementById('infoTitle'); if(infoTitle) infoTitle.textContent = SKILL_NODES[0].label || '';
    const infoDesc = document.getElementById('infoDesc'); if(infoDesc) infoDesc.textContent = SKILL_NODES[0].desc || '';
    const infoMeta = document.getElementById('infoMeta'); if(infoMeta){
      const initChildren = SKILL_LINKS.filter(l=>l.source===SKILL_NODES[0].id).map(l=>{
        const node = SKILL_NODES.find(x=>x.id===l.target); return node ? node.label : l.target;
      });
      infoMeta.textContent = initChildren.length ? 'Cabang → ' + initChildren.join(', ') : 'Tidak ada cabang lebih lanjut.';
    }
    const infoLink = document.getElementById('infoLink'); if(infoLink) { infoLink.href = '#'; infoLink.style.display = 'none'; }

      // render certifications list if present
      const certContainer = document.getElementById('certifications');
      const certListEl = document.getElementById('certList');
      if(certContainer && certListEl && Array.isArray(window.SKILL_CERTS)){
        certContainer.style.display = '';
        // clear existing list
        certListEl.innerHTML = '';
        SKILL_CERTS.forEach(c=>{
          const card = document.createElement('div');
          card.style.background = 'rgba(255,255,255,0.02)';
          card.style.padding = '8px';
          card.style.borderRadius = '8px';
          card.style.minHeight = '80px';
          card.innerHTML = `<div style="font-weight:700">${c.name}</div><div style="color:var(--muted);font-size:13px">${c.issuer} • ${c.issued}</div><div style="margin-top:6px;color:var(--muted);font-size:13px">${c.skills.join(' · ')}</div>`;
          if(c.url){
            const a = document.createElement('a'); a.href = c.url; a.target = '_blank'; a.textContent = 'Show credential'; a.style.display = 'inline-block'; a.style.marginTop = '6px'; a.style.color = 'var(--accent)';
            card.appendChild(a);
          }
          certListEl.appendChild(card);
        });
      }
  };
})();
