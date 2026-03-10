(function () {

  const GAMES = [
    { id:0,  name:'Hollow Knight',               cover:'https://cdn.jsdelivr.net/gh/1qatu/covers/0.png',         url:'https://cdn.jsdelivr.net/gh/1qatu/hollow-knight/index.html',         authors:['aukak'] },
    { id:1,  name:'Gorilla Tag',                 cover:'https://cdn.jsdelivr.net/gh/1qatu/covers/1.png',         url:'https://cdn.jsdelivr.net/gh/1qatu/gorilla-tag/index.html',           authors:['boolonx'] },
    { id:2,  name:"Raldi's Crackhouse",          cover:'https://cdn.jsdelivr.net/gh/1qatu/covers/2.png',         url:'https://cdn.jsdelivr.net/gh/1qatu/raldis-crackhouse/index.html',     authors:['greyson'] },
    { id:3,  name:'Minecraft 1.12',              cover:'https://cdn.jsdelivr.net/gh/1qatu/covers/3.png',         url:'https://cdn.jsdelivr.net/gh/1qatu/eaglercraft-1.12/index.html',      authors:['ratman4090','lax1dude'] },
    { id:4,  name:'Amanda the Adventurer',       cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/450.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/amanda-the-adventurer/index.html',     authors:['genizy'] },
    { id:5,  name:"Andy's Apple Farm",           cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/426.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/andys-apple-farm/index.html',           authors:['genizy'] },
    { id:467,name:"Baldi's Basics Plus",         cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/467.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/baldi-plus/index.html',                 authors:['koi/_flixel'] },
    { id:6,  name:"Baldi's Basics Remastered",   cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/466.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/baldi-remaster/index.html',             authors:['koi/_flixel'] },
    { id:215,name:'Bendy and the Ink Machine',   cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/215.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/bendy/index.html',                      authors:['98Corbins'] },
    { id:7,  name:'Bergen Truck Simulator',      cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/455.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/bergentruck/index.html',                authors:['genizy'] },
    { id:8,  name:'Blood Money',                 cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/454.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/bloodmoney/index.html',                 authors:['genizy'] },
    { id:205,name:'Buckshot Roulette',           cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/205.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/buckshot-roulette/index.html',          authors:['genizy'] },
    { id:259,name:"Class of '09",                cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/259.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/class-of-09/index.html',                authors:['genizy'] },
    { id:9,  name:'Cuphead',                     cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/465.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/cuphead/index.html',                    authors:['genizy'] },
    { id:10, name:'Dead Plate',                  cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/462.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/dead-plate/index.html',                 authors:['genizy'] },
    { id:11, name:'Dead Seat',                   cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/458.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/deadseat/index.html',                   authors:['slqnt'] },
    { id:12, name:'Deltarune Traveler',          cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/560.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/deltatraveler/index.html',              authors:['genizy'] },
    { id:193,name:'Do NOT Take This Cat Home',   cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/193.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/donottakethiscathome/index.html',       authors:['genizy'] },
    { id:13, name:'Fears to Fathom',             cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/460.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/fears-to-fathom/home-alone/index.html',authors:['slqnt'] },
    { id:14, name:'Getting Over It',             cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/557.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/getting-over-it/index.html',            authors:['genizy'] },
    { id:351,name:'Happy Sheepies',              cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/351.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/happy-sheepies/index.html',             authors:['genizy'] },
    { id:217,name:'Hotline Miami',               cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/217.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/hotline-miami/index.html',              authors:['98Corbins'] },
    { id:15, name:'Human Expenditure Program',   cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/482.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/human-expenditure-program/index.html', authors:['genizy'] },
    { id:16, name:'Jelly Drift',                 cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/543.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/jelly-drift/index.html',                authors:['genizy'] },
    { id:17, name:'Karlson',                     cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/542.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/karlson/index.html',                    authors:['genizy'] },
    { id:18, name:'Kindergarten',                cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/445.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/kindergarten/index.html',               authors:['genizy'] },
    { id:19, name:"Lacy's Flash Games",          cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/463.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/lacysflashgames/index.html',            authors:['genizy'] },
    { id:22, name:'OMORI',                       cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/427.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/omori-fixed/index.html',                authors:['genizy'] },
    { id:194,name:'People Playground',           cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/194-m.png',   url:'https://cdn.jsdelivr.net/gh/genizy/web-port/people-playground/index.html',          authors:['98Corbins'] },
    { id:267,name:'Pizza Tower',                 cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/267.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/pizza-tower/index.html',                authors:['burnedpopcorn'] },
    { id:23, name:'Raft',                        cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/457.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/raft/index.html',                       authors:['genizy'] },
    { id:195,name:'R.E.P.O',                     cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/195.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/repo/index.html',                       authors:['98Corbins'] },
    { id:24, name:'Schoolboy Runaway',           cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/605.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/schoolboy-runaway/index.html',          authors:['genizy'] },
    { id:25, name:'Slender: The Eight Pages',    cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/451.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/slender/index.html',                    authors:['genizy'] },
    { id:26, name:'Sonic.exe',                   cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/598.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/sonic.exe/index.html',                  authors:['genizy'] },
    { id:266,name:'Speed Stars',                 cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/266.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/speed-stars/index.html',                authors:['98Corbins'] },
    { id:27, name:'Tattletail',                  cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/607.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/tattletail/index.html',                 authors:['genizy'] },
    { id:216,name:"That's Not My Neighbor",      cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/216.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/thats-not-my-neighbor/index.html',      authors:['genizy'] },
    { id:28, name:'The Man in the Window',       cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/459.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/the-man-in-the-window/index.html',      authors:['genizy'] },
    { id:196,name:'ULTRAKILL',                   cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/196.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/ultrakill/index.html',                  authors:['98Corbins'] },
    { id:29, name:'Undertale Yellow',            cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/456.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/undertale-yellow/index.html',           authors:['burnedpopcorn'] },
    { id:30, name:'WebFishing',                  cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/423.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/web-fishing/index.html',                authors:['genizy'] },
    { id:31, name:'Yandere Simulator',           cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/554.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/yandere-simulator/index.html',          authors:['genizy'] },
    { id:32, name:'Yume Nikki',                  cover:'https://cdn.jsdelivr.net/gh/gn-math/covers/433.png',     url:'https://cdn.jsdelivr.net/gh/genizy/web-port/yume-nikki/index.html',                 authors:['genizy'] },
    { id:67, name:'Battle For Dream Island: 5b', cover:'https://cdn.jsdelivr.net/gh/solo-central/bfdi-5b/data/bfdi.ico', url:'https://cdn.jsdelivr.net/gh/solo-central/bfdi-5b/index.html', authors:['ratman4090'] },
  ];

  const APPS = [
    { id:0, name:'ExtHang3r', cover:'https://cdn.jsdelivr.net/gh/qatual/apps/exthang3r.png', url:'https://cdn.jsdelivr.net/gh/qatual/apps/ext.html', authors:['BlobbyBoi'] },
    { id:1, name:'gdg',       cover:'https://cdn.jsdelivr.net/gh/qatual/apps/gdg.png',       url:'https://cdn.jsdelivr.net/gh/qatual/apps/gdg.html', authors:['bog'] },
  ];

  const GA_ID = "G-5FWZW2LG6R";

  function injectGA(doc) {
    const s1 = doc.createElement("script");
    s1.async = true;
    s1.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    doc.head.appendChild(s1);
    const s2 = doc.createElement("script");
    s2.textContent = "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','" + GA_ID + "');";
    doc.head.appendChild(s2);
  }

  function init() {
    injectGA(document);

    const fa = document.createElement("link");
    fa.rel = "stylesheet";
    fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
    document.head.appendChild(fa);

    const adSide = document.createElement("script");
    adSide.src = "https://throbbingimmensely.com/a6/32/39/a6323906d2c341d50c9279ba63ce3ae2.js";
    adSide.async = true;
    document.head.appendChild(adSide);

    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

      :root {
        --nav-bg: #02030ecc;
        --nav-border: #2f3350;
        --search-border: #232538;
        --search-bg: #171927;
        --search-ph: #adb2e1;
        --search-color: #e2e5ff;
        --panel: #151624;
        --panel-border: #2d2f44;
        --item-bg: #1d1f2d;
        --item-border: #08090f;
        --text: #d6daff;
        --muted: #acb0d1;
        --page-bg: #0d0f1a;
        --accent: #4b5090;
      }

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html, body {
        width: 100%; height: 100%;
        background: var(--page-bg);
        font-family: 'Plus Jakarta Sans', sans-serif;
        overflow: hidden;
        color: var(--text);
      }

      canvas { position: fixed; inset: 0; display: block; z-index: 0; }

      #__nav {
        position: fixed; top: 0; left: 0; right: 0; z-index: 100;
        height: 50px;
        background: var(--nav-bg);
        border-bottom: 1px solid var(--nav-border);
        display: flex; align-items: center; justify-content: space-between;
        padding: 0 22px;
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
      }
      #__nav .logo {
        font-weight: 800; font-size: 1rem; color: #fff;
        letter-spacing: -0.02em; text-decoration: none; user-select: none;
      }
      #__nav .right { display: flex; align-items: center; gap: 4px; }
      #__nav .nav-item {
        display: flex; align-items: center; gap: 7px;
        font-size: 0.78rem; font-weight: 600;
        color: var(--muted); text-decoration: none;
        padding: 7px 13px; border-radius: 8px;
        transition: color .15s, background .15s;
      }
      #__nav .nav-item:hover { color: #fff; background: rgba(255,255,255,0.07); }
      #__nav .nav-item.active { color: var(--text); }
      #__nav .nav-item i { font-size: 0.78rem; }

      #__home {
        position: fixed; inset: 0; z-index: 5;
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        gap: 24px;
        pointer-events: none;
      }
      #__home h1 {
        font-weight: 800; font-size: clamp(2.5rem, 6vw, 5rem);
        color: #fff; letter-spacing: -0.02em;
      }
      #__home-ad {
        pointer-events: all;
        display: flex; justify-content: center;
      }

      .sc-page {
        position: fixed; inset: 0; z-index: 5;
        display: none; flex-direction: column; align-items: center;
        padding-top: 50px; overflow-y: auto;
      }
      .sc-page.visible { display: flex; }

      .ad-banner-wrap {
        width: 100%; display: flex; justify-content: center;
        padding: 16px 0 0; flex-shrink: 0;
        min-height: 106px;
      }

      .search-wrap {
        width: 100%; max-width: 600px;
        padding: 16px 24px; flex-shrink: 0;
      }
      .search-box {
        width: 100%;
        background: var(--search-bg);
        border: 1px solid var(--search-border);
        border-radius: 10px;
        padding: 11px 16px 11px 40px;
        color: var(--search-color);
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 0.88rem; outline: none;
        transition: border-color .2s;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%23adb2e1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'/%3E%3C/svg%3E");
        background-repeat: no-repeat; background-position: 13px center;
      }
      .search-box::placeholder { color: var(--search-ph); }
      .search-box:focus { border-color: var(--accent); }

      .sc-grid {
        width: 100%; max-width: 1100px;
        padding: 0 24px 40px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
        gap: 12px;
      }

      .sc-card {
        width: 100%; aspect-ratio: 1/1;
        border-radius: 10px; overflow: hidden;
        position: relative; cursor: pointer;
        display: block;
        border: 1px solid var(--item-border);
        background: var(--item-bg);
        transition: transform .18s, border-color .18s;
      }
      .sc-card:hover { transform: translateY(-3px); border-color: var(--accent); }
      .sc-card img {
        width: 100%; height: 100%; object-fit: cover; display: block;
        transition: filter .25s ease;
      }
      .sc-card:hover img { filter: brightness(0.35); }
      .sc-card .sc-card-name {
        position: absolute; inset: 0;
        display: flex; align-items: center; justify-content: center;
        text-align: center; padding: 10px;
        font-weight: 700; font-size: 0.82rem; color: #fff;
        opacity: 0; transition: opacity .25s ease;
        pointer-events: none;
        text-shadow: 0 1px 6px rgba(0,0,0,0.9);
      }
      .sc-card:hover .sc-card-name { opacity: 1; }
      .no-results {
        color: var(--muted); font-size: 0.85rem;
        padding: 60px 0; grid-column: 1/-1; text-align: center;
      }

      #__viewer {
        position: fixed; inset: 0; z-index: 200;
        display: none;
        background: var(--page-bg);
      }
      #__viewer.visible { display: grid; }

      .viewer-layout {
        display: grid;
        grid-template-rows: 46px 1fr;
        grid-template-columns: 160px 1fr 160px;
        width: 100%; height: 100%;
      }

      .viewer-bar {
        grid-column: 1 / -1;
        background: var(--panel);
        border-bottom: 1px solid var(--panel-border);
        display: flex; align-items: center;
        padding: 0 14px; gap: 10px;
      }
      .viewer-back {
        display: flex; align-items: center; gap: 6px;
        font-size: 0.78rem; font-weight: 600;
        color: var(--muted); cursor: pointer;
        background: none; border: none;
        padding: 6px 12px; border-radius: 7px;
        transition: background .15s, color .15s;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      .viewer-back:hover { background: rgba(255,255,255,0.07); color: #fff; }
      .viewer-back i { font-size: 0.72rem; }
      .viewer-title {
        font-size: 0.88rem; font-weight: 700;
        color: var(--text); flex: 1;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      .viewer-authors {
        font-size: 0.72rem; color: var(--muted); flex-shrink: 0;
      }
      .viewer-actions { display: flex; gap: 5px; }
      .viewer-btn {
        display: flex; align-items: center; justify-content: center;
        width: 30px; height: 30px; border-radius: 7px;
        background: none; border: 1px solid var(--panel-border);
        color: var(--muted); cursor: pointer; font-size: 0.78rem;
        transition: background .15s, color .15s, border-color .15s;
      }
      .viewer-btn:hover { background: rgba(255,255,255,0.07); color: #fff; border-color: var(--accent); }

      .viewer-ad {
        background: var(--item-bg);
        border-right: 1px solid var(--item-border);
        display: flex; align-items: center; justify-content: center;
        overflow: hidden;
        font-size: 0.65rem; color: var(--muted);
        text-align: center; flex-direction: column; gap: 6px;
      }
      .viewer-ad.right { border-right: none; border-left: 1px solid var(--item-border); }

      .viewer-frame-wrap {
        position: relative; overflow: hidden;
        background: #000;
      }
      .viewer-frame-wrap iframe {
        position: absolute; inset: 0;
        width: 100%; height: 100%;
        border: none; display: none;
      }
      .viewer-frame-wrap iframe.loaded { display: block; }

      .viewer-loading {
        position: absolute; inset: 0;
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        gap: 12px; background: var(--page-bg);
        font-size: 0.82rem; color: var(--muted);
      }
      .viewer-loading.hidden { display: none; }
      .spinner {
        width: 22px; height: 22px;
        border: 2px solid var(--panel-border);
        border-top-color: var(--muted);
        border-radius: 50%;
        animation: spin .7s linear infinite;
      }
      @keyframes spin { to { transform: rotate(360deg); } }
      .viewer-error { color: #d95555; display: flex; align-items: center; gap: 8px; }
    `;
    document.head.appendChild(style);

    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    function draw() {
      const W = canvas.width  = window.innerWidth;
      const H = canvas.height = window.innerHeight;
      ctx.fillStyle = "#0d0f1a";
      ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= W; x += 40) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
      for (let y = 0; y <= H; y += 40) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
    }
    draw();
    window.addEventListener("resize", draw);

    const nav = document.createElement("nav");
    nav.id = "__nav";
    nav.innerHTML = `
      <a class="logo" href="/" id="__logo">solo central</a>
      <div class="right">
        <a class="nav-item" id="nav-games" href="#games"><i class="fa-solid fa-gamepad"></i> Games</a>
        <a class="nav-item" id="nav-apps"  href="#apps"><i class="fa-solid fa-grip"></i> Apps</a>
      </div>
    `;
    document.body.appendChild(nav);

    const home = document.createElement("div");
    home.id = "__home";
    home.innerHTML = `<h1>solo central</h1><div id="__home-ad"></div>`;
    document.body.appendChild(home);

    (function() {
      const wrap = document.getElementById("__home-ad");
      const s1 = document.createElement("script");
      s1.textContent = "atOptions = { 'key': '66aeb0ac169a360ac8b2103eb5b56c91', 'format': 'iframe', 'height': 90, 'width': 728, 'params': {} };";
      wrap.appendChild(s1);
      const s2 = document.createElement("script");
      s2.src = "https://throbbingimmensely.com/66aeb0ac169a360ac8b2103eb5b56c91/invoke.js";
      s2.async = true;
      wrap.appendChild(s2);
    })();

    function makePage(pageId, searchId, gridId, placeholder) {
      const page = document.createElement("div");
      page.id = pageId;
      page.className = "sc-page";
      page.innerHTML = `
        <div class="ad-banner-wrap"><div id="${pageId}-ad"></div></div>
        <div class="search-wrap">
          <input class="search-box" id="${searchId}" type="text" placeholder="${placeholder}" autocomplete="off" />
        </div>
        <div class="sc-grid" id="${gridId}"></div>
      `;
      document.body.appendChild(page);
      const wrap = document.getElementById(pageId + "-ad");
      const s1 = document.createElement("script");
      s1.textContent = "atOptions = { 'key': '66aeb0ac169a360ac8b2103eb5b56c91', 'format': 'iframe', 'height': 90, 'width': 728, 'params': {} };";
      wrap.appendChild(s1);
      const s2 = document.createElement("script");
      s2.src = "https://throbbingimmensely.com/66aeb0ac169a360ac8b2103eb5b56c91/invoke.js";
      s2.async = true;
      wrap.appendChild(s2);
      return page;
    }

    const gamesPage = makePage("__page-games", "__search-games", "__grid-games", "Search games...");
    const appsPage  = makePage("__page-apps",  "__search-apps",  "__grid-apps",  "Search apps...");

    const viewer = document.createElement("div");
    viewer.id = "__viewer";
    viewer.innerHTML = `
      <div class="viewer-layout">
        <div class="viewer-bar">
          <button class="viewer-back" id="__vback"><i class="fa-solid fa-arrow-left"></i> Back</button>
          <span class="viewer-title" id="__vtitle"></span>
          <span class="viewer-authors" id="__vauthors"></span>
          <div class="viewer-actions">
            <button class="viewer-btn" id="__vreload" title="Reload"><i class="fa-solid fa-rotate-right"></i></button>
            <button class="viewer-btn" id="__vfull" title="Fullscreen"><i class="fa-solid fa-expand"></i></button>
            <button class="viewer-btn" id="__vnew" title="Open in new tab"><i class="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
        </div>
        <div class="viewer-ad left"><span>advertisement</span></div>
        <div class="viewer-frame-wrap">
          <div class="viewer-loading" id="__vloading">
            <div class="spinner"></div>
            <span>Loading, please be patient…</span>
          </div>
          <iframe id="__iframe" allowfullscreen sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups allow-modals allow-downloads"></iframe>
        </div>
        <div class="viewer-ad right"><span>advertisement</span></div>
      </div>
    `;
    document.body.appendChild(viewer);

    let currentBlobUrl = null;
    let viewerReturnPage = null;

    async function openItem(item, returnPage) {
      viewerReturnPage = returnPage;
      document.getElementById("__vtitle").textContent = item.name;
      document.getElementById("__vauthors").textContent = "by " + item.authors.join(", ");

      const iframe = document.getElementById("__iframe");
      iframe.classList.remove("loaded");
      const loading = document.getElementById("__vloading");
      loading.className = "viewer-loading";
      loading.innerHTML = "<div class=\"spinner\"></div><span>Loading, please be patient\u2026</span>";

      if (currentBlobUrl) { URL.revokeObjectURL(currentBlobUrl); currentBlobUrl = null; }
      iframe.src = "about:blank";
      viewer.classList.add("visible");
      history.pushState({ item: item.id }, "", "#" + (returnPage === "apps" ? "app" : "game") + "-" + item.id);

      try {
        const res = await fetch(item.url + "?_t=" + Date.now());
        if (!res.ok) throw new Error("HTTP " + res.status);
        const html = await res.text();
        const base = item.url.substring(0, item.url.lastIndexOf("/") + 1);
        const gaSnippet = "<script async src=\"https://www.googletagmanager.com/gtag/js?id=" + GA_ID + "\"><\/script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','" + GA_ID + "');<\/script>";
        const patched = html.replace(/<head[^>]*>/i, "$&<base href=\"" + base + "\">" + gaSnippet);
        const blob = new Blob([patched], { type: "text/html" });
        currentBlobUrl = URL.createObjectURL(blob);
        iframe.onload = () => {
          loading.className = "viewer-loading hidden";
          iframe.classList.add("loaded");
          iframe.onload = null;
        };
        iframe.src = currentBlobUrl;
      } catch (err) {
        loading.innerHTML = "<div class=\"viewer-error\"><i class=\"fa-solid fa-triangle-exclamation\"></i> Failed to load. Try opening in a new tab.</div>";
      }
    }

    function closeViewer() {
      viewer.classList.remove("visible");
      const iframe = document.getElementById("__iframe");
      iframe.src = "about:blank";
      iframe.classList.remove("loaded");
      if (currentBlobUrl) { URL.revokeObjectURL(currentBlobUrl); currentBlobUrl = null; }
      if (viewerReturnPage === "apps") showApps();
      else showGames();
    }

    document.getElementById("__vback").addEventListener("click", closeViewer);
    document.getElementById("__vreload").addEventListener("click", () => {
      if (currentBlobUrl) document.getElementById("__iframe").src = currentBlobUrl;
    });
    document.getElementById("__vfull").addEventListener("click", () => {
      document.getElementById("__iframe").requestFullscreen?.();
    });
    document.getElementById("__vnew").addEventListener("click", () => {
      const title = document.getElementById("__vtitle").textContent;
      const found = [...GAMES, ...APPS].find(i => i.name === title);
      if (found) window.open(found.url, "_blank");
    });

    function renderGrid(dataset, gridId, returnPage) {
      const grid = document.getElementById(gridId);
      const searchId = returnPage === "apps" ? "__search-apps" : "__search-games";
      const q = (document.getElementById(searchId).value || "").toLowerCase().trim();
      const list = q ? dataset.filter(i => i.name.toLowerCase().includes(q)) : dataset;
      if (!list.length) { grid.innerHTML = "<div class=\"no-results\">Nothing found.</div>"; return; }
      grid.innerHTML = list.map(i =>
        "<div class=\"sc-card\" data-id=\"" + i.id + "\">" +
          "<img src=\"" + i.cover + "\" alt=\"" + i.name + "\" loading=\"lazy\" />" +
          "<span class=\"sc-card-name\">" + i.name + "</span>" +
        "</div>"
      ).join("");
      grid.querySelectorAll(".sc-card").forEach(card => {
        card.addEventListener("click", () => {
          const item = dataset.find(i => i.id == card.dataset.id);
          if (item) openItem(item, returnPage);
        });
      });
    }

    function showHome() {
      home.style.display = "flex";
      gamesPage.classList.remove("visible");
      appsPage.classList.remove("visible");
      viewer.classList.remove("visible");
      document.getElementById("nav-games").classList.remove("active");
      document.getElementById("nav-apps").classList.remove("active");
    }

    function showGames() {
      home.style.display = "none";
      viewer.classList.remove("visible");
      appsPage.classList.remove("visible");
      gamesPage.classList.add("visible");
      document.getElementById("nav-games").classList.add("active");
      document.getElementById("nav-apps").classList.remove("active");
      renderGrid(GAMES, "__grid-games", "games");
    }

    function showApps() {
      home.style.display = "none";
      viewer.classList.remove("visible");
      gamesPage.classList.remove("visible");
      appsPage.classList.add("visible");
      document.getElementById("nav-apps").classList.add("active");
      document.getElementById("nav-games").classList.remove("active");
      renderGrid(APPS, "__grid-apps", "apps");
    }

    document.getElementById("__search-games").addEventListener("input", () => renderGrid(GAMES, "__grid-games", "games"));
    document.getElementById("__search-apps").addEventListener("input",  () => renderGrid(APPS,  "__grid-apps",  "apps"));
    document.getElementById("nav-games").addEventListener("click", e => { e.preventDefault(); history.pushState({}, "", "#games"); showGames(); });
    document.getElementById("nav-apps").addEventListener("click",  e => { e.preventDefault(); history.pushState({}, "", "#apps");  showApps(); });
    document.getElementById("__logo").addEventListener("click",    e => { e.preventDefault(); history.pushState({}, "", "/");      showHome(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && viewer.classList.contains("visible")) closeViewer(); });

    window.addEventListener("popstate", () => {
      const h = location.hash;
      if (h.startsWith("#game-") || h.startsWith("#app-")) return;
      if (h === "#games") showGames();
      else if (h === "#apps") showApps();
      else showHome();
    });

    const h = location.hash;
    if (h === "#apps") showApps();
    else if (h === "#games") showGames();
    else showHome();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();