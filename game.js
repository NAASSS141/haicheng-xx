const VERSION='mvp-v16-black-screen-fix';
const pathPolicy='relative-github-pages';
const data={
 cinematicStills:{
  startSkyline:'assets/images/cinematics/cin_v11_start_skyline_close.jpg',
  startFeetTide:'assets/images/cinematics/cin_v11_start_feet_tide.jpg',
  shellMacro:'assets/images/cinematics/cin_v11_shell_macro_light.jpg',
  handShellClose:'assets/images/cinematics/cin_v11_hand_shell_close.jpg',
  letterHandClose:'assets/images/cinematics/cin_v11_letter_hand_close.jpg',
  letterFaceWind:'assets/images/cinematics/cin_v11_letter_face_wind.jpg',
  artisanFaceClose:'assets/images/cinematics/cin_v11_artisan_face_close.jpg',
  workshopTwoShot:'assets/images/cinematics/cin_v11_workshop_two_shot.jpg',
  shellFragmentsClose:'assets/images/cinematics/cin_v11_shell_fragments_close.jpg',
  toolsInsert:'assets/images/cinematics/cin_v11_tools_insert.jpg',
  hairpinMacro:'assets/images/cinematics/cin_v11_hairpin_macro_gold.jpg',
  hairpinTableWide:'assets/images/cinematics/cin_v11_hairpin_table_wide.jpg',
  bossClose:'assets/images/cinematics/cin_v11_boss_close.jpg',
  marketLanternSteam:'assets/images/cinematics/cin_v11_market_lantern_steam.jpg',
  porridgeMacro:'assets/images/cinematics/cin_v11_porridge_macro_steam.jpg',
  spoonInsert:'assets/images/cinematics/cin_v11_spoon_insert.jpg',
  lionEyeMacro:'assets/images/cinematics/cin_v11_lion_eye_macro.jpg',
  drumSilhouette:'assets/images/cinematics/cin_v11_drum_silhouette.jpg',
  redShadowFull:'assets/images/cinematics/cin_v11_red_shadow_full.jpg',
  finalGuardianClose:'assets/images/cinematics/cin_v11_final_guardian_close.jpg',
  v11ContactSheet:'assets/images/cinematics/v11_cinematic_contact_sheet.jpg',
  startWalk:'assets/images/cinematics/cin_start_walk.jpg',
  shellClose:'assets/images/cinematics/cin_shell_close.jpg',
  shellTouch:'assets/images/cinematics/cin_shell_touch.jpg',
  letterRead:'assets/images/cinematics/cin_letter_read.jpg',
  workshopTalk:'assets/images/cinematics/cin_workshop_talk.jpg',
  worktableShells:'assets/images/cinematics/cin_worktable_shells.jpg',
  hairpin:'assets/images/cinematics/cin_hairpin.jpg',
  marketTalk:'assets/images/cinematics/cin_market_talk.jpg',
  porridgeBowl:'assets/images/cinematics/cin_porridge_bowl.jpg',
  lionGuardian:'assets/images/cinematics/cin_lion_guardian.jpg'
 },
 portraits:{
  '主角':'assets/images/portraits/portrait_hero.jpg',
  '外婆':'assets/images/portraits/portrait_grandma_memory.jpg',
  '老工匠':'assets/images/portraits/portrait_artisan.jpg',
  '老板娘':'assets/images/portraits/portrait_boss.jpg',
  '旁白':'assets/images/portraits/portrait_narrator_sea.jpg',
  '狮眼':'assets/images/portraits/portrait_lion_eye.jpg'
 },
 v15fx:{
  grain:'assets/images/fx/v15/film_grain_overlay.png',
  lightLeak:'assets/images/fx/v15/light_leak_warm.png',
  wind:'assets/images/fx/v15/sea_wind_streaks.png',
  marketBokeh:'assets/images/fx/v15/market_bokeh_lights.png',
  vignette:'assets/images/fx/v15/cinematic_vignette.png'
 },
 ui:{
  chapterBeach:'assets/images/ui/chapter_beach.jpg',
  chapterWorkshop:'assets/images/ui/chapter_workshop.jpg',
  chapterMarket:'assets/images/ui/chapter_market.jpg',
  chapterLion:'assets/images/ui/chapter_lion.jpg',
  tapRipple:'assets/images/ui/tap_ripple.png',
  puzzleSuccess:'assets/images/ui/puzzle_success_burst.png'
 },
 scenes:{
  start:{title:'海风把贝壳藏起来',bg:'assets/images/scenes/start/bg_start_shell_scene.jpg',layers:[['wave','assets/images/fx/wave/fx_start_wave_foam.png','layer steam'],['glow','assets/images/fx/light/fx_shell_pearl_glow.png','layer glow-soft'],['shell','assets/images/props/shell/obj_shell_glowing_start.png','obj breathe',50,50]],chars:[],entry:null,bgm:'start',amb:['ocean'],hotspots:['start_shell']},
  beach:{title:'海边来的信',bg:'assets/images/scenes/beach/bg_beach_dusk_full.jpg',layers:[['sea','assets/images/scenes/beach/layers/fx_beach_sea_shimmer.png','layer shimmer'],['grass','assets/images/scenes/beach/layers/fg_beach_grass_silhouette.png','layer'],['foot','assets/images/scenes/beach/layers/obj_beach_footprints_overlay.png','layer hidden-until-footprints'],['shell','assets/images/props/shell/obj_shell_glowing_start.png','obj breathe',78,72]],chars:[['hero','assets/images/characters/hero/char_hero_beach_idle.png',22,84]],entry:'beach_entry',bgm:'beach',amb:['ocean','wind'],hotspots:['beach_wave','beach_footprints','beach_letter','beach_shell']},
  workshop:{title:'老贝壳工坊',bg:'assets/images/scenes/workshop/bg_workshop_full.jpg',layers:[['beam','assets/images/scenes/workshop/layers/fx_workshop_window_beam.png','layer beam'],['dust','assets/images/scenes/workshop/layers/fx_workshop_dust_light.png','layer dust'],['curtain','assets/images/scenes/workshop/layers/fg_workshop_shell_curtain_overlay.png','layer sway']],chars:[['artisan','assets/images/characters/artisan/char_artisan_back_working.png',66,84]],entry:'workshop_entry',bgm:'workshop',amb:['workshopRoom','workshopCraft'],hotspots:['workshop_artisan','workshop_wall','workshop_window','workshop_table','workshop_cat']},
  market:{title:'夜粥街',bg:'assets/images/scenes/market/bg_market_full.jpg',layers:[['warm','assets/images/scenes/market/layers/fx_market_warm_lights.png','layer warm-light'],['steamA','assets/images/fx/steam/fx_market_steam_thick.png','layer steam'],['steamB','assets/images/scenes/market/layers/fx_market_extra_steam.png','layer steam slow'],['redSilkFar','assets/images/scenes/market/layers/obj_market_red_silk_far.png','layer silk-far']],chars:[['boss','assets/images/characters/boss/char_boss_idle_busy.png',58,84]],entry:'market_entry',bgm:'market',amb:['marketCrowd','porridgePot'],hotspots:['market_stool','market_pot','market_duck','market_sauce','market_red_silk']},
  lion:{title:'鼓狮预告',bg:'assets/images/scenes/lion_teaser/bg_lion_dark.jpg',layers:[['redShadow','assets/images/scenes/lion_teaser/layers/bg_lion_red_shadow.png','layer'],['eyeClosed','assets/images/scenes/lion_teaser/obj_lion_eye_closed.png','layer eye-closed'],['eyeAura','assets/images/scenes/lion_teaser/layers/fx_lion_eye_aura.png','layer eye-aura hidden-until-lion'],['eyeOpen','assets/images/scenes/lion_teaser/obj_lion_eye_open.png','layer eye-open hidden-until-lion']],chars:[],entry:'lion_entry',bgm:'lionTeaser',amb:[],hotspots:[]}
 },
 hotspots:{
  start_shell:{label:'触碰贝壳',x:42,y:38,w:16,h:24,style:'invisible',actions:[['sfx','shellGlow'],['cin','start_touch']]},
  beach_wave:{label:'海浪',x:18,y:72,w:42,h:18,actions:[['still','startFeetTide',700],['cam','low'],['dlg','beach_wave']]},
  beach_footprints:{label:'脚印',x:44,y:73,w:18,h:10,actions:[['char','hero','assets/images/characters/hero/char_hero_beach_idle.png'],['flag','found_footprints'],['cam','push'],['dlg','footprints']]},
  beach_letter:{label:'旧信',x:19,y:54,w:10,h:14,actions:[['sfx','letterOpen'],['char','hero','assets/images/characters/hero/char_hero_beach_read_letter.png'],['overlay','assets/images/props/shell/obj_beach_old_letter_open.png'],['dlg','beach_letter'],['flag','read_letter'],['clearOverlay']]},
  beach_shell:{label:'发光贝壳',x:75,y:68,w:12,h:12,actions:[['if','read_letter',[['item','memory_tide_shell'],['cin','beach_shell']],[['dlg','need_letter']]]]},
  workshop_artisan:{label:'老工匠',x:58,y:34,w:24,h:42,actions:[['if','met_artisan',[['char','artisan','assets/images/characters/artisan/char_artisan_turn_head.png'],['dlg','workshop_show'],['flag','showed_shell']],[['dlg','workshop_first'],['flag','met_artisan']]]]},
  workshop_wall:{label:'墙上贝壳作品',x:10,y:16,w:34,h:28,actions:[['cam','panLeft'],['dlg','workshop_wall']]},
  workshop_window:{label:'窗外海光',x:70,y:14,w:18,h:24,actions:[['cam','panRight'],['dlg','workshop_window']]},
  workshop_table:{label:'工作台',x:26,y:58,w:42,h:24,enabled:'showed_shell',actions:[['puzzle','shell_puzzle']]},
  workshop_cat:{label:'小猫',x:38,y:54,w:10,h:10,actions:[['sfx','catMeow'],['dlg','cat']]},
  market_stool:{label:'空凳子',x:30,y:68,w:14,h:14,actions:[['char','boss','assets/images/characters/boss/char_boss_give_photo.png'],['cam','seat'],['dlg','market_sit'],['flag','sat_market']]},
  market_pot:{label:'粥锅',x:8,y:60,w:24,h:26,enabled:'sat_market',actions:[['puzzle','porridge']]},
  market_duck:{label:'鸭肉',x:50,y:62,w:12,h:10,actions:[['char','boss','assets/images/characters/boss/char_boss_cut_duck.png'],['sfx','duckCut'],['still','spoonInsert',650],['cam','push'],['dlg','duck_cut']]},
  market_sauce:{label:'酱料',x:66,y:70,w:8,h:10,actions:[['choice','sauce']]},
  market_red_silk:{label:'远处红绸',x:82,y:25,w:14,h:22,actions:[['cam','panRight'],['dlg','red_silk']]}
 },
 dlg:{
  beach_wave:[['旁白','潮水很近，风很大。']], footprints:[['主角','这里有人来过？']], beach_letter:[['外婆','到了海边，就别急着找。'],['外婆','先听。'],['主角','外婆……']], need_letter:[['主角','先看看信。']], shell_reflect:[['主角','里面有一间屋子。']],
  workshop_entry:[['老工匠','门没锁。'],['老工匠','别踩碎贝。']], workshop_first:[['老工匠','找人，还是找东西？'],['主角','找一枚贝壳。'],['老工匠','这里最不缺贝壳。']], workshop_show:[['老工匠','这光……'],['老工匠','不像新的。'],['主角','你见过？'],['老工匠','先别问。'],['老工匠','会拼吗？']], workshop_wall:[['旁白','墙上挂着贝壳拼贴和旧相框。']], workshop_window:[['主角','从这里也能看见海。'],['老工匠','不看海，怎么拼贝？']], wrong_shell:[['老工匠','它不肯亮。'],['老工匠','位置不对。']], cat:[['老工匠','它比你熟路。'],['主角','它也是师傅？'],['老工匠','它是监工。']], hairpin_done:[['老工匠','这图案……'],['老工匠','你从哪见过？'],['主角','外婆信里。'],['外婆','贝壳要顺着裂口拼。'],['外婆','硬压会裂得更深。'],['老工匠','去夜粥街。'],['老工匠','有人记性比我好。']],
  market_entry:[['老板娘','站那儿干嘛？'],['老板娘','坐。']], market_sit:[['老板娘','找人？'],['主角','找外婆来过的地方。'],['老板娘','那先吃。'],['老板娘','饿着的人记性不好。']], duck_cut:[['老板娘','鸭要嫩。'],['老板娘','汤要清。'],['主角','你每天都按这个顺序做？'],['老板娘','做久了，不用想。']], wrong_porridge:[['老板娘','别急。'],['老板娘','粥也怕赶路。']], porridge_done:[['主角','这个味道……'],['主角','吃过这个味道。'],['外婆','太烫了。'],['外婆','我替你吹吹。']], sauce_less:[['老板娘','你像外地人。']], sauce_more:[['老板娘','有胆量。']], red_silk:[['旁白','远处挂着红绸，下面压着一面鼓。']]
 },
 cin:{
  start_touch:[
   ['still','startSkyline',650],['still','startFeetTide',650],['still','shellMacro',800],
   ['sfx','shellGlow'],['still','handShellClose',900],['still','shellTouch',900],
   ['flash','white',900],['scene','beach']
  ],
  beach_entry:[['flash','white',500],['still','startWalk',600],['still','startSkyline',550]],
  beach_shell:[
   ['sfx','shellGlow'],['char','hero','assets/images/characters/hero/char_hero_beach_reach_shell.png'],
   ['still','shellMacro',650],['still','handShellClose',750],['still','shellTouch',950],
   ['cam','push'],['dlg','shell_reflect'],['flash','white',900],['scene','workshop']
  ],
  workshop_entry:[
   ['sfx','shellCurtain'],['still','workshopTwoShot',700],['still','artisanFaceClose',650],['dlg','workshop_entry']
  ],
  workshop_done:[
   ['sfx','hairpinComplete'],['still','worktableShells',650],['still','shellFragmentsClose',650],
   ['still','toolsInsert',550],['still','hairpinTableWide',650],['still','hairpinMacro',1000],
   ['overlay','assets/images/props/workshop/obj_workshop_woodbox_open.png'],['delay',300],
   ['overlay','assets/images/props/workshop/obj_workshop_grandma_photo.png'],['dlg','hairpin_done'],
   ['flash','white',700],['scene','market']
  ],
  market_entry:[
   ['flash','white',450],['still','marketLanternSteam',650],['still','marketTalk',700],['still','bossClose',650],['dlg','market_entry']
  ],
  porridge_done:[
   ['sfx','steamRise'],['still','spoonInsert',650],['still','porridgeMacro',850],['still','porridgeBowl',900],
   ['fx','steamFill'],['dlg','porridge_done'],['item','memory_warm_steam'],
   ['sfx','drumLowHit'],['flash','black',700],['scene','lion']
  ],
  lion_entry:[
   ['still','redShadowFull',650],['still','drumSilhouette',650],['sfx','drumLowHit'],
   ['still','lionEyeMacro',700],['delay',300],['flag','lion_eye'],['sfx','lionEyeOpen'],
   ['still','finalGuardianClose',900],['cam','shake'],['delay',700],['flag','finished']
  ]
 },
 puzzles:{
  shell_puzzle:{title:'顺着裂口拼',hint:'按碎片裂口的方向轻点。',items:[['puzzle_shell_01_moonwhite','assets/images/props/workshop/puzzle_shell_01_moonwhite.png',24,60],['puzzle_shell_02_pearlpink','assets/images/props/workshop/puzzle_shell_02_pearlpink.png',38,56],['puzzle_shell_03_goldedge','assets/images/props/workshop/puzzle_shell_03_goldedge.png',52,64],['puzzle_shell_04_darkgrain','assets/images/props/workshop/puzzle_shell_04_darkgrain.png',66,56],['puzzle_shell_05_clear','assets/images/props/workshop/puzzle_shell_05_clear.png',78,64]],order:['puzzle_shell_01_moonwhite','puzzle_shell_02_pearlpink','puzzle_shell_03_goldedge','puzzle_shell_04_darkgrain','puzzle_shell_05_clear'],wrong:'wrong_shell',complete:[['item','memory_shell_hairpin'],['flag','completed_shell_puzzle'],['cin','workshop_done']]},
  porridge:{title:'配一碗夜粥',hint:'按老板娘的顺序配一碗热粥。',items:[['cook_bowl_empty','assets/images/props/market/cook_bowl_empty.png',20,68],['cook_base_porridge','assets/images/props/market/cook_base_porridge.png',34,58],['cook_duck_slices','assets/images/props/market/cook_duck_slices.png',48,62],['cook_clear_soup','assets/images/props/market/cook_clear_soup.png',62,56],['cook_scallion','assets/images/props/market/cook_scallion.png',72,66],['cook_sauce','assets/images/props/market/cook_sauce.png',82,62]],order:['cook_bowl_empty','cook_base_porridge','cook_duck_slices','cook_clear_soup','cook_sauce'],wrong:'wrong_porridge',complete:[['flag','completed_porridge'],['cin','porridge_done']]}
 },
 choices:{sauce:{prompt:'酱料要加多少？',opts:[['少一点',[['dlg','sauce_less']]],['多一点',[['dlg','sauce_more']]]] }},
 items:{memory_tide_shell:['潮光贝','在海边找到的发光贝壳，表面有细细的纹路。','assets/images/props/shell/obj_shell_glowing_start.png'],memory_shell_hairpin:['贝纹发簪','在老工坊拼成的贝壳发簪，贝纹已经合上。','assets/images/props/workshop/obj_workshop_shell_hairpin_complete.png'],memory_warm_steam:['夜粥热气','夜粥升起的夜粥热气。','assets/images/fx/steam/fx_market_steam_thick.png']}
};
const state={scene:'start',flags:{},inventory:[],dialogue:null,dIndex:0,typedChars:0,typeTimer:null,queue:[],puzzle:null,pProgress:[],choice:null,chars:{},cam:'',overlay:null,still:null,flash:null,fx:null,ripples:[],chapterCard:null,toast:null,gallery:false,credits:false,immersive:true,controlsOpen:false,sceneFade:false,ending:false,debug:false,panel:false,menu:true,help:false,loaded:false,progress:0,assetErrors:[]};
const app=document.getElementById('app');
function el(tag,cls){const n=document.createElement(tag); if(cls)n.className=cls; return n}

const audioManifest={
 bgm:{
  start:'assets/audio/bgm/bgm_start_shell_theme.wav',
  beach:'assets/audio/bgm/bgm_beach_dusk.wav',
  workshop:'assets/audio/bgm/bgm_workshop_warm_craft.wav',
  market:'饮一碗热粥',
  lionTeaser:'assets/audio/bgm/bgm_lion_teaser_sting.wav'
 },
 amb:{
  ocean:'assets/audio/ambience/amb_ocean_waves_loop.wav',
  wind:'assets/audio/ambience/amb_sea_wind_loop.wav',
  workshopRoom:'assets/audio/ambience/amb_workshop_room_loop.wav',
  workshopCraft:'assets/audio/ambience/amb_workshop_shell_craft_loop.wav',
  marketCrowd:'assets/audio/ambience/amb_market_crowd_loop.wav',
  porridgePot:'assets/audio/ambience/amb_porridge_pot_loop.wav'
 },
 sfx:{
  shellGlow:'assets/audio/sfx/sfx_shell_glow.wav',
  transitionWhite:'assets/audio/sfx/sfx_transition_white.wav',
  letterOpen:'assets/audio/sfx/sfx_letter_open.wav',
  shellCurtain:'assets/audio/sfx/sfx_shell_curtain.wav',
  shellSlide:'assets/audio/sfx/sfx_shell_slide.wav',
  shellTap:'assets/audio/sfx/sfx_shell_tap.wav',
  catMeow:'assets/audio/sfx/sfx_cat_meow.wav',
  hairpinComplete:'assets/audio/sfx/sfx_hairpin_complete.wav',
  bowlPlace:'assets/audio/sfx/sfx_bowl_place.wav',
  duckCut:'assets/audio/sfx/sfx_duck_cut.wav',
  steamRise:'assets/audio/sfx/sfx_steam_rise.wav',
  drumLowHit:'assets/audio/sfx/sfx_drum_low_hit.wav',
  lionEyeOpen:'assets/audio/sfx/sfx_lion_eye_open.wav'
 }
};
const audioState={enabled:false,muted:false,volume:0.72,currentScene:null,currentBgm:null,bgmEl:null,ambEls:{},fadeTimers:new WeakMap()};
function enableAudio(){if(audioState.enabled)return; audioState.enabled=true; syncAudio(); saveGame();}
function makeAudio(src,loop,vol){const a=new Audio(src); a.loop=!!loop; a.preload='auto'; a.dataset.baseVol=String(vol); a.volume=audioState.muted?0:vol*audioState.volume; return a}
function targetVolume(a){const base=Number(a?.dataset?.baseVol||0); return audioState.muted?0:base*audioState.volume}
function fadeAudio(a,to,ms=500,onDone){if(!a)return; const from=Number(a.volume||0); const start=performance.now(); const prior=audioState.fadeTimers.get(a); if(prior)cancelAnimationFrame(prior); const tick=now=>{const t=Math.min(1,(now-start)/ms); a.volume=from+(to-from)*t; if(t<1){audioState.fadeTimers.set(a, requestAnimationFrame(tick))}else{audioState.fadeTimers.delete(a); a.volume=to; if(onDone)onDone()}}; audioState.fadeTimers.set(a, requestAnimationFrame(tick))}
function setAudioVolume(){if(audioState.bgmEl)audioState.bgmEl.volume=targetVolume(audioState.bgmEl); for(const a of Object.values(audioState.ambEls))a.volume=targetVolume(a)}
function syncAudio(){if(!audioState.enabled||!state.loaded)return; const sc=data.scenes[state.scene]; if(!sc)return; if(audioState.currentBgm!==sc.bgm){const old=audioState.bgmEl; if(old)fadeAudio(old,0,520,()=>{old.pause()}); const src=audioManifest.bgm[sc.bgm]; if(src){const next=makeAudio(src,true,0.34); next.volume=0; audioState.bgmEl=next; next.play().catch(()=>{}); fadeAudio(next,targetVolume(next),720); audioState.currentBgm=sc.bgm}else{audioState.bgmEl=null; audioState.currentBgm=sc.bgm}} const want=new Set(sc.amb||[]); for(const k of Object.keys(audioState.ambEls)){if(!want.has(k)){const a=audioState.ambEls[k]; fadeAudio(a,0,400,()=>{a.pause()}); delete audioState.ambEls[k]}} for(const k of want){if(!audioState.ambEls[k]&&audioManifest.amb[k]){const a=makeAudio(audioManifest.amb[k],true,0.28); a.volume=0; audioState.ambEls[k]=a; a.play().catch(()=>{}); fadeAudio(a,targetVolume(a),680)}} for(const a of Object.values(audioState.ambEls)){fadeAudio(a,targetVolume(a),260)} if(audioState.bgmEl)fadeAudio(audioState.bgmEl,targetVolume(audioState.bgmEl),260)}
function sfx(k){if(!audioState.enabled||audioState.muted)return; const src=audioManifest.sfx[k]; if(!src)return; const a=makeAudio(src,false,0.62); a.play().catch(()=>{})}
const SAVE_KEY='haicheng_mvp_v16_black_screen_fix_save';
function saveGame(){try{const payload={scene:state.scene,flags:state.flags,inventory:state.inventory,chars:state.chars,audioEnabled:audioState.enabled,muted:audioState.muted,volume:audioState.volume,immersive:state.immersive,ts:Date.now()}; localStorage.setItem(SAVE_KEY,JSON.stringify(payload))}catch(e){}}
function hasSave(){try{return !!localStorage.getItem(SAVE_KEY)}catch(e){return false}}
function loadGame(){try{const raw=localStorage.getItem(SAVE_KEY); if(!raw)return false; const p=JSON.parse(raw); state.scene=p.scene||'start'; state.flags=p.flags||{}; state.inventory=p.inventory||[]; state.chars=p.chars||{}; audioState.muted=!!p.muted; audioState.volume=typeof p.volume==='number'?p.volume:0.72; state.immersive=p.immersive!==false; return true}catch(e){return false}}
function startNewGame(){try{localStorage.removeItem(SAVE_KEY)}catch(e){} state.scene='start'; state.flags={_started:true}; state.inventory=[]; if(state.typeTimer)clearInterval(state.typeTimer); state.dialogue=null; state.dIndex=0; state.typedChars=0; state.queue=[]; state.puzzle=null; state.pProgress=[]; state.choice=null; state.chars={}; state.overlay=null; state.still=null; state.cam=''; state.fx=null; state.flash=null; state.menu=false; state.help=false; state.controlsOpen=false; state.gallery=false; state.credits=false; state.panel=false; enableAudio(); run([['cin','start_touch']])}
function continueGame(){if(!hasSave())return startNewGame(); loadGame(); state.menu=false; state.help=false; state.controlsOpen=false; state.gallery=false; state.credits=false; state.panel=false; state.flags._started=true; enableAudio(); render(); syncAudio(); saveGame()}
function resetGame(){try{localStorage.removeItem(SAVE_KEY)}catch(e){} location.reload()}
function toggleFullscreen(){const doc=document; if(!doc.fullscreenElement){document.documentElement.requestFullscreen?.()}else{doc.exitFullscreen?.()}}
function toggleMute(){audioState.muted=!audioState.muted; setAudioVolume(); saveGame(); render()}
function changeVolume(delta){audioState.volume=Math.max(0,Math.min(1,audioState.volume+delta)); setAudioVolume(); saveGame(); render()}

function showBootError(e){state.loaded=true; app.innerHTML=''; const box=el('div','boot-error'); box.innerHTML=`<div><h1>加载遇到问题</h1><p>请刷新页面，或确认 GitHub Pages 已完整上传 assets 文件夹。</p><pre>${String(e&&e.message?e.message:e).slice(0,600)}</pre></div>`; app.append(box)}
function assetUrls(){const set=new Set(); const walk=o=>{if(!o)return; if(typeof o==='string'&&o.startsWith('assets/'))set.add(o); else if(Array.isArray(o))o.forEach(walk); else if(typeof o==='object')Object.values(o).forEach(walk)}; walk(data); walk(audioManifest); return [...set]}
function imageAssetUrls(){return assetUrls().filter(u=>!/\.(wav|mp3|ogg|m4a)$/i.test(u))}
async function preload(){try{const urls=imageAssetUrls(); let done=0; renderLoader(0,urls.length); const timeoutMs=5200; await Promise.all(urls.map(u=>new Promise(res=>{let settled=false; const finish=(ok)=>{if(settled)return; settled=true; if(!ok)state.assetErrors.push(u); done++; state.progress=urls.length?done/urls.length:1; renderLoader(done,urls.length); res()}; const im=new Image(); const timer=setTimeout(()=>finish(false),timeoutMs); im.onload=()=>{clearTimeout(timer); finish(true)}; im.onerror=()=>{clearTimeout(timer); finish(false)}; im.src=u}))); state.loaded=true; render()}catch(e){showBootError(e)}}
function renderLoader(done,total){app.innerHTML=''; const l=el('div','loader'); const pct=total?Math.round(done/total*100):0; l.innerHTML=`<div><h1>正在加载海城</h1><p>图像预加载 ${done}/${total} · ${pct}%</p><div class="loadbar"><i style="width:${pct}%"></i></div><small>建议横屏、开启声音、佩戴耳机。首次点击会解锁音频。</small></div>`; app.append(l)}
function layerVisible(id){if(id.includes('hidden-until-footprints'))return !!state.flags.found_footprints; if(id.includes('hidden-until-lion'))return !!state.flags.lion_eye; return true}

function vibrate(ms=12){try{navigator.vibrate?.(ms)}catch(e){}}
function sceneObjective(scene){return ({start:'开始',beach:'寻找旧信与贝壳',workshop:'询问工匠，修复发簪',market:'饮一碗热粥',lion:'终章预告'})[scene]||''}
function triggerSceneFade(ms=520){state.sceneFade=true; render(); setTimeout(()=>{state.sceneFade=false; render()},ms)}
function setParallax(nx=0,ny=0){document.documentElement.style.setProperty('--px', String(nx)); document.documentElement.style.setProperty('--py', String(ny))}
app.addEventListener('pointermove',e=>{const rect=app.getBoundingClientRect(); if(!rect.width||!rect.height)return; const nx=((e.clientX-rect.left)/rect.width-.5)*2; const ny=((e.clientY-rect.top)/rect.height-.5)*2; setParallax(nx.toFixed(3),ny.toFixed(3))});
app.addEventListener('pointerleave',()=>setParallax(0,0));
app.addEventListener('pointercancel',()=>setParallax(0,0));

function showToast(text, ms=1200){state.toast=text; render(); setTimeout(()=>{state.toast=null; render()},ms)}
function showChapter(scene){const map={beach:['chapterBeach','海边来的信'],workshop:['chapterWorkshop','老贝壳工坊'],market:['chapterMarket','夜粥街'],lion:['chapterLion','鼓狮预告']}; if(!map[scene])return; vibrate(16); state.chapterCard=map[scene]; render(); setTimeout(()=>{state.chapterCard=null; render()},1400)}
function addRipple(e){const rect=e.currentTarget.closest('.viewport')?.getBoundingClientRect(); if(!rect)return; const id=Date.now()+Math.random(); state.ripples.push({id,x:e.clientX-rect.left,y:e.clientY-rect.top}); render(); setTimeout(()=>{state.ripples=state.ripples.filter(r=>r.id!==id); render()},620)}
function showPuzzleSuccess(){vibrate([18,40,18]); state.fx='puzzleSuccess'; showToast('记忆碎片已归位',1400); render(); setTimeout(()=>{if(state.fx==='puzzleSuccess')state.fx=null; render()},1100)}

function render(){if(!state.loaded){renderLoader(0,1);return} const sc=data.scenes[state.scene]; app.innerHTML=''; const v=el('section','viewport scene-'+state.scene+' '+(state.cam||'')+(state.debug?' debug-hotspots':'')); const bg=el('img','scene-bg'); bg.src=sc.bg; v.append(bg); if(state.immersive){const vig=el('img','v15-vignette'); vig.src=data.v15fx.vignette; v.append(vig); const grain=el('img','v15-grain'); grain.src=data.v15fx.grain; v.append(grain); if(state.scene==='start'||state.scene==='beach'){const wind=el('img','v15-wind'); wind.src=data.v15fx.wind; v.append(wind)} if(state.scene==='market'){const mk=el('img','v15-market-bokeh'); mk.src=data.v15fx.marketBokeh; v.append(mk)} if(state.scene==='lion'||state.scene==='workshop'){const leak=el('img','v15-light-leak'); leak.src=data.v15fx.lightLeak; v.append(leak)}} for(const l of sc.layers){if(!layerVisible(l[2]))continue; const im=el('img',l[2]); im.src=l[1]; if(l[3]!=null){im.style.left=l[3]+'%'; im.style.top=l[4]+'%'} v.append(im)} for(const c of sc.chars){const im=el('img','char'); im.src=state.chars[c[0]]||c[1]; im.style.left=c[2]+'%'; im.style.top=c[3]+'%'; v.append(im)} for(const id of sc.hotspots){const h=data.hotspots[id]; const b=el('button','hotspot '+(h.style||'')); b.style.left=h.x+'%'; b.style.top=h.y+'%'; b.style.width=h.w+'%'; b.style.height=h.h+'%'; b.ariaLabel=h.label; b.title=h.label; if(h.enabled&&!state.flags[h.enabled])b.disabled=true; b.innerHTML=`<span class="hotspot-dot"></span><em>${h.label}</em>`; b.addEventListener('pointerup',e=>{e.preventDefault(); addRipple(e); enableAudio(); if(b.disabled){showToast('还差一个线索'); return} run(h.actions)}); v.append(b)} if(state.debug){const grid=el('img','debug-grid'); grid.src='assets/images/fx/debug/debug_hotspot_grid.png'; v.append(grid)} if(state.still){const im=el('img','still-img'); im.src=state.still; v.append(im)} if(state.overlay){const im=el('img','overlay-img'); im.src=state.overlay; v.append(im)} if(state.fx==='steamFill'){const fx=el('img','fx-fill'); fx.src='assets/images/fx/steam/fx_market_steam_thick.png'; v.append(fx)} if(state.fx==='puzzleSuccess'){const fx=el('img','puzzle-burst'); fx.src=data.ui.puzzleSuccess; v.append(fx)} for(const r of state.ripples){const rp=el('img','tap-ripple'); rp.src=data.ui.tapRipple; rp.style.left=r.x+'px'; rp.style.top=r.y+'px'; v.append(rp)} if(state.flash){const f=el('div','flash '+state.flash); v.append(f)} if(state.sceneFade){v.append(el('div','scene-fade-layer'))} if(state.queue.length)v.append(el('div','bars')); app.append(v); renderSceneChip(); if(state.chapterCard)renderChapterCard(); if(state.toast)renderToast(); renderInventory(); renderControlDock(); if(state.dialogue)renderDialogue(); if(state.puzzle)renderPuzzle(); if(state.choice)renderChoice(); renderProgressPanel(); if(state.menu&&state.scene==='start')renderStartMenu(); if(state.help)renderHelpPanel(); if(state.gallery)renderGallery(); if(state.credits)renderCredits(); if(state.flags.finished)renderEnding(); syncAudio(); if(!state.menu)saveGame()}

function saveMeta(){try{const raw=localStorage.getItem(SAVE_KEY); if(!raw)return null; return JSON.parse(raw)}catch(e){return null}}
function sceneLabel(id){return ({start:'开场',beach:'海边',workshop:'工坊',market:'饮一碗热粥',lion:'鼓狮预告'}[id]||id)}

function renderSceneChip(){if(state.menu)return; const c=el('div','scene-chip'); c.innerHTML=`<b>${data.scenes[state.scene].title}</b><span>${sceneObjective(state.scene)}</span>`; app.append(c)}

function renderGallery(){const g=el('div','gallery-panel'); const keys=Object.keys(data.cinematicStills); g.innerHTML=`<div class="gallery-card"><button class="help-close" data-a="close">×</button><h2>分镜图鉴</h2><p>已接入 ${keys.length} 张可回看的分镜图。点击任意图可放大，再点关闭。</p><div class="gallery-grid">${keys.map(k=>`<button data-img="${k}"><img src="${data.cinematicStills[k]}" alt="${k}"><span>${k}</span></button>`).join('')}</div></div>`; g.addEventListener('pointerup',e=>{const a=e.target.dataset.a; const btn=e.target.closest('button[data-img]'); if(a==='close'){state.gallery=false; render(); return} if(btn){state.still=data.cinematicStills[btn.dataset.img]; render(); setTimeout(()=>{state.still=null; render()},1500)}}); app.append(g)}
function renderCredits(){const c=el('div','credits-panel'); c.innerHTML=`<div class="help-card"><button class="help-close" data-a="close">×</button><h2>制作说明</h2><p>这是《海风把贝壳藏起来》的网页互动叙事 MVP。当前版本包含分镜演出、人物对白、轻谜题、原型音频、移动端触摸和 GitHub Pages 静态部署结构。</p><ul><li>图像：光栅 JPG / PNG，无运行时 SVG。v15 新增胶片颗粒、风线、漏光、暗角和散景后期层。</li><li>音频：程序生成原型 WAV，正式商用可替换为已核验免版税音乐。</li><li>部署：静态文件，无需服务端路由。</li></ul></div>`; c.addEventListener('pointerup',e=>{if(e.target.dataset.a==='close'){state.credits=false; render()}}); app.append(c)}

function renderStartMenu(){const m=el('div','start-menu'); const meta=saveMeta(); const can=!!meta; m.innerHTML=`<div class="start-card"><p class="eyebrow">HAICHENG INTERACTIVE STORY</p><h1>海风把贝壳藏起来</h1><p class="subtitle">轻探索 × 视觉小说 × 高密度分镜 × 场景交互</p><div class="start-actions"><button data-a="new">触碰贝壳，开始</button><button data-a="continue" ${can?'':'disabled'}>继续：${can?sceneLabel(meta.scene):'暂无存档'}</button><button data-a="help">操作说明</button><button data-a="gallery">分镜图鉴</button><button data-a="credits">制作说明</button><button data-a="full">全屏</button></div><small>推荐横屏、佩戴耳机体验。右下角为收纳式控制面板。</small></div>`; m.addEventListener('pointerup',e=>{const a=e.target.dataset.a; if(!a)return; e.preventDefault(); if(a==='new')startNewGame(); if(a==='continue')continueGame(); if(a==='help'){state.help=true; render()} if(a==='gallery'){state.gallery=true; render()} if(a==='credits'){state.credits=true; render()} if(a==='full')toggleFullscreen()}); app.append(m)}
function renderHelpPanel(){const h=el('div','help-panel'); h.innerHTML=`<div class="help-card"><button class="help-close" data-a="close">×</button><h2>怎么玩</h2><p>点击画面中微微发光的区域，触发镜头、人物对白和场景互动。</p><ul><li>对话：点击继续</li><li>谜题：按画面提示顺序点击</li><li>热区调试：按 H 或点击“热区”</li><li>QA 面板：按 I 或点击“QA”</li><li>快捷键：Enter 开始，C 继续，M 静音，F 全屏，G 分镜图鉴，V 沉浸层</li><li>右下角圆形按钮可展开控制面板</li></ul><p>这不是传统 H5 页面，而是一段可以触摸的分镜叙事。</p></div>`; h.addEventListener('pointerup',e=>{if(e.target.dataset.a==='close'){state.help=false; render()}}); app.append(h)}

function renderChapterCard(){const [key,title]=state.chapterCard; const card=el('div','chapter-card'); card.innerHTML=`<img src="${data.ui[key]}" alt=""><div><span>章节推进</span><h2>${title}</h2></div>`; app.append(card)}
function renderToast(){const t=el('div','game-toast'); t.textContent=state.toast; app.append(t)}

function renderProgressPanel(){if(state.menu)return; const steps=[['read_letter','旧信'],['touched_shell','潮光贝'],['completed_shell_puzzle','贝纹发簪'],['completed_porridge','夜粥'],['lion_eye','狮眼']]; const done=steps.filter(([flag])=>state.flags[flag]).length; const p=el('div','progress-panel'); p.innerHTML=`<strong>进度 ${done}/${steps.length}</strong>`+steps.map(([flag,label])=>`<span class="${state.flags[flag]?'done':''}">${label}</span>`).join(''); app.append(p)}


function speakerClass(name){
  if(name==='主角')return 'hero';
  if(name==='外婆')return 'grandma';
  if(name==='老工匠')return 'artisan';
  if(name==='老板娘')return 'boss';
  if(name==='旁白')return 'narrator';
  return 'narrator';
}
function startTypewriter(){
  if(state.typeTimer)clearInterval(state.typeTimer);
  const d=data.dlg[state.dialogue], line=d&&d[state.dIndex];
  if(!line)return;
  state.typedChars=0;
  const full=line[1]||'';
  state.typeTimer=setInterval(()=>{
    state.typedChars++;
    const textEl=document.querySelector('.dialogue .line');
    const cursor=document.querySelector('.dialogue .cursor');
    if(textEl){textEl.textContent=full.slice(0,state.typedChars)}
    if(state.typedChars>=full.length){
      clearInterval(state.typeTimer);
      state.typeTimer=null;
      if(cursor)cursor.classList.add('done');
    }
  },26);
}
function finishOrAdvanceDialogue(){
  const d=data.dlg[state.dialogue], line=d&&d[state.dIndex];
  if(!line)return;
  if(state.typeTimer){
    clearInterval(state.typeTimer);
    state.typeTimer=null;
    state.typedChars=line[1].length;
    render();
    return;
  }
  state.dIndex++;
  if(state.dIndex>=d.length){
    state.dialogue=null; state.dIndex=0; state.typedChars=0;
    if(state.queue.length)return nextShot();
  }
  render();
}
function renderDialogue(){const box=el('div','dialogue'); const inner=el('div','dialogue-box visual-novel'); const d=data.dlg[state.dialogue], line=d[state.dIndex]; const speaker=line[0], text=line[1]; const portrait=data.portraits[speaker]||data.portraits['旁白']; const shown=state.typeTimer?text.slice(0,state.typedChars):(state.typedChars?text.slice(0,state.typedChars):''); inner.innerHTML=`<div class="portrait-wrap ${speakerClass(speaker)}"><img src="${portrait}" alt="${speaker}"><span>${speaker}</span></div><div class="dialogue-content"><div class="speaker">${speaker}</div><div class="line">${shown}</div><span class="cursor">▍</span><div class="hint">${state.typeTimer?'点击显示完整':'点击继续'}</div></div>`; box.append(inner); box.addEventListener('pointerup',e=>{e.preventDefault(); finishOrAdvanceDialogue()}); app.append(box); if(!state.typeTimer && state.typedChars===0)requestAnimationFrame(startTypewriter)}
function renderInventory(){if(!state.inventory.length)return; const wrap=el('div','inventory'); const btn=el('button'); btn.textContent='贝壳盒'; const panel=el('div','inv-panel'); panel.hidden=true; for(const id of state.inventory){const it=data.items[id]; const row=el('div','inv-item'); row.innerHTML=`<img src="${it[2]}" alt=""><div><h4>${it[0]}</h4><p>${it[1]}</p></div>`; panel.append(row)} btn.addEventListener('pointerup',()=>panel.hidden=!panel.hidden); wrap.append(btn,panel); app.append(wrap)}
function runtimeQa(){const urls=assetUrls(); const absolute=urls.filter(u=>u.startsWith('/')); const small=[]; for(const h of Object.values(data.hotspots)){if(h.w<8||h.h<8)small.push(`${h.sceneId||''}:${h.label} ${h.w}x${h.h}%`)} return {urls,absolute,small,errors:state.assetErrors}}
function runtimeQa(){const urls=assetUrls(); const absolute=urls.filter(u=>u.startsWith('/')); const small=[]; for(const h of Object.values(data.hotspots)){if(h.w<8||h.h<8)small.push(`${h.sceneId||''}:${h.label} ${h.w}x${h.h}%`)} return {urls,absolute,small,errors:state.assetErrors}}
function renderControlDock(){const dock=el('div','control-dock'+(state.controlsOpen?' open':'')); dock.innerHTML=`<button class="control-fab" data-a="toggle" aria-label="展开控制面板">☰</button><div class="control-panel"><button data-a="menu">菜单</button><button data-a="mute">${audioState.muted?'开声':'静音'}</button><button data-a="volDown">音量-</button><button data-a="volUp">音量+</button><button data-a="full">全屏</button><button data-a="immersive">${state.immersive?'沉浸开':'沉浸关'}</button><button data-a="gallery">图鉴</button><button data-a="help">说明</button><button data-a="debug">热区</button><button data-a="panel">QA</button><button data-a="reset">重置</button></div>`; dock.addEventListener('pointerup',e=>{const a=e.target.dataset.a; if(!a)return; if(a==='toggle'){state.controlsOpen=!state.controlsOpen; render(); return} if(a==='debug')state.debug=!state.debug; if(a==='panel')state.panel=!state.panel; if(a==='help')state.help=!state.help; if(a==='gallery')state.gallery=!state.gallery; if(a==='immersive'){state.immersive=!state.immersive; saveGame()} if(a==='menu'){state.menu=true; state.scene='start'; state.controlsOpen=false;} if(a==='mute')toggleMute(); if(a==='volDown')changeVolume(-0.1); if(a==='volUp')changeVolume(0.1); if(a==='full')toggleFullscreen(); if(a==='reset')resetGame(); render()}); app.append(dock); if(state.panel){const qa=runtimeQa(); const p=el('div','dev-panel'); p.innerHTML=`<b>${VERSION} 发布前 QA</b><br>scene: ${state.scene}<br>flags: ${Object.keys(state.flags).filter(k=>state.flags[k]).join(', ')||'none'}<br>inventory: ${state.inventory.join(', ')||'empty'}<br>asset refs: ${qa.urls.length}<br>image preload refs: ${imageAssetUrls().length}<br>cinematic stills: ${Object.keys(data.cinematicStills).length}<br>gallery: enabled<br>immersive FX: ${state.immersive?'on':'off'}<br>missing loaded assets: ${qa.errors.length?qa.errors.join('<br>'):'0'}<br>absolute path refs: ${qa.absolute.length?qa.absolute.join('<br>'):'0'}<br>small hotspot warnings: ${qa.small.length?qa.small.join('<br>'):'0'}<br>input: pointerup / touch-action: manipulation<br>path policy: ${pathPolicy}<br>audio: ${audioState.enabled?'enabled':'locked'} / ${audioState.muted?'muted':'on'} / volume ${Math.round(audioState.volume*100)}%<br>save: localStorage ${SAVE_KEY}<br>menu: ${state.menu?'open':'closed'}<br>has save: ${hasSave()?'yes':'no'}`; app.append(p)}}
function renderPuzzle(){const p=data.puzzles[state.puzzle]; const ov=el('div','puzzle'); const board=el('div','board'); board.innerHTML=`<div class="board-title"><h2>${p.title}</h2><p>${p.hint}</p></div>`; for(const it of p.items){const b=el('button','pitem '+(state.pProgress.includes(it[0])?'done':'')); b.style.left=it[2]+'%'; b.style.top=it[3]+'%'; b.innerHTML=`<img src="${it[1]}" alt="">`; b.disabled=state.pProgress.includes(it[0]); b.addEventListener('pointerup',()=>puzzleStep(it[0])); board.append(b)} ov.append(board); app.append(ov)}
function renderChoice(){const c=data.choices[state.choice]; const ov=el('div','choice'); const card=el('div','choice-card'); card.innerHTML=`<p>${c.prompt}</p>`; for(const o of c.opts){const b=el('button'); b.textContent=o[0]; b.addEventListener('pointerup',()=>{state.choice=null; run(o[1])}); card.append(b)} ov.append(card); app.append(ov)}
function renderEnding(){const e=el('div','ending'); e.innerHTML='<div><h1>未完待续</h1><p>鼓狮预告</p><div class="ending-actions"><button data-a="gallery">回看分镜</button><button data-a="menu">返回标题</button><button data-a="reset">重置进度</button></div><small>当前为 MVP v16 文本修正版</small></div>'; e.addEventListener('pointerup',ev=>{const a=ev.target.dataset.a; if(a==='gallery'){state.gallery=true; render()} if(a==='menu'){state.menu=true; state.scene='start'; render()} if(a==='reset')resetGame()}); app.append(e)}
function run(actions){if(!actions)return; for(let i=0;i<actions.length;i++){const a=actions[i]; const [t,...r]=a; const rest=actions.slice(i+1); if(t==='dlg'){state.dialogue=r[0]; state.dIndex=0; state.typedChars=0; if(rest.length)state.queue=[...rest,...state.queue]; render(); return}else if(t==='cin'){state.queue=[...data.cin[r[0]],...state.queue]; nextShot(); return}else if(t==='sfx')sfx(r[0]); else if(t==='flag')state.flags[r[0]]=true; else if(t==='item'){if(!state.inventory.includes(r[0]))state.inventory.push(r[0])} else if(t==='scene'){state.scene=r[0]; state.chars={}; state.overlay=null; state.still=null; state.cam=''; state.fx=null; state.ripples=[]; triggerSceneFade(); showChapter(state.scene); syncAudio(); saveGame(); const entry=data.scenes[state.scene].entry; if(entry)run([['cin',entry]]); else render(); return}else if(t==='if'){run(state.flags[r[0]]?r[1]:r[2]); return}else if(t==='puzzle'){state.puzzle=r[0]; state.pProgress=[]; render(); return}else if(t==='choice'){state.choice=r[0]; render(); return}else if(t==='overlay'){state.overlay=r[0]; render()}else if(t==='still'){state.still=data.cinematicStills[r[0]]; render(); if(r[1])setTimeout(()=>{state.still=null; render()},r[1])}else if(t==='clearOverlay'){state.overlay=null; state.still=null; render()}else if(t==='char'){state.chars[r[0]]=r[1]; render()}else if(t==='cam'){state.cam='cam-'+r[0]; render(); setTimeout(()=>{state.cam=''; render()},850)}else if(t==='fx'){state.fx=r[0]; render(); setTimeout(()=>{state.fx=null; render()},1400)}} render()}
function nextShot(){if(!state.queue.length){state.cam=''; state.fx=null; render(); return} const shot=state.queue.shift(); const [t,...r]=shot; if(t==='delay'){setTimeout(nextShot,r[0]); return} if(t==='flash'){state.flash=r[0]; render(); setTimeout(()=>{state.flash=null; nextShot()},r[1]); return} if(t==='dlg'){state.dialogue=r[0]; state.dIndex=0; state.typedChars=0; render(); return} if(t==='cam'){state.cam='cam-'+r[0]; render(); setTimeout(()=>{state.cam=''; nextShot()},850); return} if(t==='still'){state.still=data.cinematicStills[r[0]]; render(); setTimeout(()=>{state.still=null; nextShot()},r[1]||900); return} run([shot]); if(!['scene','cin'].includes(t))setTimeout(nextShot,160)}
function puzzleStep(id){const p=data.puzzles[state.puzzle]; const expected=p.order[state.pProgress.length]; if(id===expected){state.pProgress.push(id); sfx('shellSlide'); if(state.pProgress.length===p.order.length){const done=p.complete; state.puzzle=null; state.pProgress=[]; showPuzzleSuccess(); setTimeout(()=>run(done),520)}else{showToast('顺序正确',650); render()}}else{sfx('shellTap'); showToast('顺序不对，再看一次碎片的裂口',1200); state.dialogue=p.wrong; state.dIndex=0; state.typedChars=0; render()}}
window.addEventListener('keydown',e=>{const k=e.key.toLowerCase(); if(k==='h'){state.debug=!state.debug; render()} if(k==='i'){state.panel=!state.panel; render()} if(k==='m'){toggleMute()} if(k==='f'){toggleFullscreen()} if(k==='?'||k==='/'){state.help=!state.help; render()} if(k==='escape'){state.help=false; state.panel=false; state.gallery=false; state.credits=false; state.controlsOpen=false; render()} if(k==='g'){state.gallery=!state.gallery; render()} if(k==='v'){state.immersive=!state.immersive; saveGame(); render()} if(k==='enter'&&state.menu){startNewGame()} if(k==='c'&&state.menu){continueGame()}});
try{preload()}catch(e){showBootError(e)}
