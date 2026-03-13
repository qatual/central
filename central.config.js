(function () {

  const GAMES = [
  {
    "id": 0,
    "name": "Bowmasters",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//0.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/0.html",
    "author": "Azur Games, Playgendary",
    "authorLink": "https://azurgames.com"
  },
  {
    "id": 1,
    "name": "OvO",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//1.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/1-fde.html",
    "author": "Dedra Games",
    "authorLink": "https://dedragames.com"
  },
  {
    "id": 2,
    "name": "OvO 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//2.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/2e.html",
    "author": "Dedra Games",
    "authorLink": "https://dedragames.com"
  },
  {
    "id": 3,
    "name": "OvO 3 Dimensions",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//3.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/3.html",
    "author": "Dedra Games",
    "authorLink": "https://dedragames.com"
  },
  {
    "id": 4,
    "name": "Gladihoppers",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//4.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/4.html",
    "author": "Dreamon Studios",
    "authorLink": "https://dreamonstudios.itch.io/gladihoppers"
  },
  {
    "id": 5,
    "name": "Ice Dodo",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//5.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/5.html",
    "author": "Onionfist Studio",
    "authorLink": "https://onionfist.com"
  },
  {
    "id": 6,
    "name": "Block Blast",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//6.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/6.html",
    "author": "reunbozdo",
    "authorLink": "https://reunbozdo.github.io"
  },
  {
    "id": 7,
    "name": "Jetpack Joyride",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//7.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/7.html",
    "author": "Halfbrick Studios",
    "authorLink": "https://www.halfbrick.com"
  },
  {
    "id": 8,
    "name": "Friday Night Funkin",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//8.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/8-wow.html",
    "author": "ninja-muffin24",
    "authorLink": "https://ninja-muffin24.itch.io/funkin"
  },
  {
    "id": 9,
    "name": "Sprunki",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//9.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/9.html",
    "author": "NyankoBfLol",
    "authorLink": "https://www.cocrea.world/@NyankoBfLmao"
  },
  {
    "id": 10,
    "name": "Temple Run 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//10.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/10.html",
    "author": "Imangi STUDIOS",
    "authorLink": "https://imangistudios.com"
  },
  {
    "id": 11,
    "name": "Stickman Hook",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//11.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/11.html",
    "author": "Madbox",
    "authorLink": "https://madbox.io"
  },
  {
    "id": 13,
    "name": "Attack Hole",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//13.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/13.html",
    "author": "Homa Games",
    "authorLink": "https://www.homagames.com"
  },
  {
    "id": 14,
    "name": "Bridge Race",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//14.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/14.html",
    "author": "QubicGames",
    "authorLink": "https://qubicgames.com"
  },
  {
    "id": 15,
    "name": "Color Water Sort 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//15.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/15.html",
    "author": "Tapnation",
    "authorLink": "https://www.tap-nation.io"
  },
  {
    "id": 16,
    "name": "Hide N Seek",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//16.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/16.html",
    "author": "Supersonic Studios LTD",
    "authorLink": "https://play.google.com/store/apps/developer?id=Supersonic+Studios+LTD"
  },
  {
    "id": 17,
    "name": "Magic Tiles 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//17.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/17.html",
    "author": "AmaNotes",
    "authorLink": "https://play.google.com/store/apps/details?id=com.youmusic.magictiles"
  },
  {
    "id": 18,
    "name": "Stacky Dash",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//18.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/18.html",
    "author": "Supersonic Studios LTD",
    "authorLink": "https://play.google.com/store/apps/details?id=com.Born2Play.StackyDash"
  },
  {
    "id": 19,
    "name": "Supreme Duelist",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//19.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/19.html",
    "author": "Neron's Brother",
    "authorLink": "https://neronsbrother.com"
  },
  {
    "id": 20,
    "name": "Tall Man Run",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//20.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/20a.html",
    "author": "Supersonic Studios LTD",
    "authorLink": "https://play.google.com/store/apps/details?id=com.VectorUpGames.TallManRun"
  },
  {
    "id": 21,
    "name": "Turbo Stars",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//21.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/21.html",
    "author": "https://play.google.com/store/apps/details?id=com.turbo.stars",
    "authorLink": "SayGames"
  },
  {
    "id": 22,
    "name": "Mob Control HTML5",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//22.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/22.html",
    "author": "Voodoo",
    "authorLink": "https://voodoo.io"
  },
  {
    "id": 23,
    "name": "Pou",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//23.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/23.html",
    "author": "Zakeh",
    "authorLink": "https://play.google.com/store/apps/details?id=me.pou.app"
  },
  {
    "id": 24,
    "name": "Crossy Road",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//24.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/24.html",
    "author": "Hipster Whale",
    "authorLink": "https://www.hipsterwhale.com"
  },
  {
    "id": 25,
    "name": "Basket Battle",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//25.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/25.html",
    "author": "Supersonic Studios LTD",
    "authorLink": "https://play.google.com/store/apps/details?id=com.noorgames.basketbattle"
  },
  {
    "id": 26,
    "name": "Amaze",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//26.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/26.html",
    "author": "CrazyLabs",
    "authorLink": "https://play.google.com/store/apps/details?id=com.crazylabs.amaze.game"
  },
  {
    "id": 27,
    "name": "Geometry Dash Lite (REMAKE)",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//27.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/27-f.html",
    "author": "RobTop Games",
    "authorLink": "https://play.google.com/store/apps/details?id=com.robtopx.geometryjumplite"
  },
  {
    "id": 28,
    "name": "Basketball Frvr",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//28.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/28.html",
    "author": "FRVR",
    "authorLink": "https://play.google.com/store/apps/details?id=com.frvr.basketball"
  },
  {
    "id": 29,
    "name": "Bazooka Boy",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//29.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/29.html",
    "author": "Supersonic Studios LTD",
    "authorLink": "https://play.google.com/store/apps/details?id=com.Lightneer.BazookaBoy"
  },
  {
    "id": 30,
    "name": "Bottle Jump 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//30.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/30.html",
    "author": "CASUAL AZUR GAMES",
    "authorLink": "https://play.google.com/store/apps/details?id=com.games.bottle"
  },
  {
    "id": 31,
    "name": "Color Match",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//31.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/31.html",
    "author": "Supersonic Studios LTD",
    "authorLink": "https://play.google.com/store/apps/developer?id=Supersonic+Studios+LTD&hl=en_US"
  },
  {
    "id": 32,
    "name": "Dig Deep",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//32.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/32.html",
    "author": "CrazyLabs LTD",
    "authorLink": "https://play.google.com/store/apps/dev?id=6443412597262225303&hl=en_US"
  },
  {
    "id": 33,
    "name": "Retro Bowl",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//33.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/33.html",
    "author": "New Star Games",
    "authorLink": "https://www.newstargames.com/"
  },
  {
    "id": 34,
    "name": "Retro Bowl College",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//34.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/34-fixed.html",
    "author": "New Star Games",
    "authorLink": "https://www.newstargames.com/"
  },
  {
    "id": 36,
    "name": "Monster Tracks",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//36.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/36.html",
    "author": "Fancade",
    "authorLink": "https://fancade.com/"
  },
  {
    "id": 37,
    "name": "Gobble",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//37.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/37.html",
    "author": "Fancade",
    "authorLink": "https://fancade.com/"
  },
  {
    "id": 38,
    "name": "Five Nights at Freddy's",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//38.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/38.html",
    "author": "Scott Cawthon",
    "authorLink": "https://scottgames.com",
    "special": [
      "port"
    ]
  },
  {
    "id": 39,
    "name": "Five Nights at Freddy's 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//39.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/39.html",
    "author": "Scott Cawthon",
    "authorLink": "https://scottgames.com",
    "special": [
      "port"
    ]
  },
  {
    "id": 40,
    "name": "Five Nights at Freddy's 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//40.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/40.html",
    "author": "Scott Cawthon",
    "authorLink": "https://scottgames.com",
    "special": [
      "port"
    ]
  },
  {
    "id": 41,
    "name": "Five Nights at Freddy's 4",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//41.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/41.html",
    "author": "Scott Cawthon",
    "authorLink": "https://scottgames.com",
    "special": [
      "port"
    ]
  },
  {
    "id": 42,
    "name": "Road of Fury",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//42.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/42.html",
    "author": "IriySoft",
    "authorLink": "https://iriysoft.newgrounds.com/"
  },
  {
    "id": 43,
    "name": "Driven Wild",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//43.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/43.html",
    "author": "KilledByAPixel",
    "authorLink": "https://killedbyapixel.newgrounds.com/"
  },
  {
    "id": 44,
    "name": "Ragdoll Hit",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//44.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/44.html",
    "author": "Kids Games LLC",
    "authorLink": "https://play.google.com/store/apps/dev?id=6566434917716295659&hl=en_US"
  },
  {
    "id": 45,
    "name": "Vex 1",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//45.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/45.html",
    "author": "Lorenzo De Carlo",
    "authorLink": "https://nl.linkedin.com/in/lorenzodecarlo",
    "special": [
      "flash"
    ]
  },
  {
    "id": 46,
    "name": "Vex 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//46.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/46.html",
    "author": "Lorenzo De Carlo",
    "authorLink": "https://nl.linkedin.com/in/lorenzodecarlo",
    "special": [
      "flash"
    ]
  },
  {
    "id": 47,
    "name": "Vex 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//47.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/47.html",
    "author": "Lorenzo De Carlo",
    "authorLink": "https://nl.linkedin.com/in/lorenzodecarlo",
    "special": [
      "flash"
    ]
  },
  {
    "id": 48,
    "name": "Vex 3 XMAS",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//48.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/48.html",
    "author": "Lorenzo De Carlo",
    "authorLink": "https://nl.linkedin.com/in/lorenzodecarlo"
  },
  {
    "id": 49,
    "name": "Vex 4",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//49.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/49.html",
    "author": "Lorenzo De Carlo",
    "authorLink": "https://nl.linkedin.com/in/lorenzodecarlo"
  },
  {
    "id": 50,
    "name": "Vex 5",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//50.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/50.html",
    "author": "Lorenzo De Carlo",
    "authorLink": "https://nl.linkedin.com/in/lorenzodecarlo"
  },
  {
    "id": 51,
    "name": "Vex 6",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//51.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/51.html",
    "author": "Lorenzo De Carlo",
    "authorLink": "https://nl.linkedin.com/in/lorenzodecarlo"
  },
  {
    "id": 52,
    "name": "Vex 7",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//52.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/52.html",
    "author": "Lorenzo De Carlo",
    "authorLink": "https://nl.linkedin.com/in/lorenzodecarlo"
  },
  {
    "id": 53,
    "name": "Vex 8",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//53.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/53.html",
    "author": "Lorenzo De Carlo",
    "authorLink": "https://nl.linkedin.com/in/lorenzodecarlo"
  },
  {
    "id": 54,
    "name": "Vex Challenges",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//54.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/54.html",
    "author": "Lorenzo De Carlo",
    "authorLink": "https://nl.linkedin.com/in/lorenzodecarlo"
  },
  {
    "id": 55,
    "name": "Vex X3M",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//55.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/55.html",
    "author": "Lorenzo De Carlo",
    "authorLink": "https://nl.linkedin.com/in/lorenzodecarlo"
  },
  {
    "id": 56,
    "name": "Vex X3M 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//56.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/56.html",
    "author": "Lorenzo De Carlo",
    "authorLink": "https://nl.linkedin.com/in/lorenzodecarlo"
  },
  {
    "id": 58,
    "name": "1v1.LoL",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//58.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/58.html",
    "author": "JustPlay.LOL",
    "authorLink": "https://play.google.com/store/apps/dev?id=7065081805875144950"
  },
  {
    "id": 59,
    "name": "A Dance of Fire and Ice",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//59.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/59.html",
    "author": "fizzd",
    "authorLink": "https://fizzd.itch.io/"
  },
  {
    "id": 60,
    "name": "Achievement Unlocked",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//60.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/60.html",
    "author": "jmtb02",
    "authorLink": "https://jmtb02.newgrounds.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 61,
    "name": "Achievement Unlocked 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//61.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/61.html",
    "author": "jmtb02",
    "authorLink": "https://jmtb02.newgrounds.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 62,
    "name": "Achievement Unlocked 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//62.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/62.html",
    "author": "jmtb02",
    "authorLink": "https://jmtb02.newgrounds.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 63,
    "name": "Angry Birds",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//63.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/63.html",
    "author": "Rovio Entertainment",
    "authorLink": "https://www.rovio.com/"
  },
  {
    "id": 64,
    "name": "Backrooms",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//64.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/64.html",
    "author": "Esyverse",
    "authorLink": "https://esyverse.itch.io/"
  },
  {
    "id": 65,
    "name": "Baldi's Basics",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//65.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/65.html",
    "author": "Basically Games",
    "authorLink": "https://basically-games.itch.io/baldis-basics"
  },
  {
    "id": 66,
    "name": "Basket Random",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//66.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/66.html",
    "author": "RHM Interactive OÜ",
    "authorLink": "https://play.google.com/store/apps/dev?id=9182049342574405049&hl=en_US"
  },
  {
    "id": 67,
    "name": "Big Tower Tiny Square",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//67.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/67-f.html",
    "author": "EvilObjective",
    "authorLink": "https://evilobjective.itch.io"
  },
  {
    "id": 68,
    "name": "Big NEON Tower Tiny Square",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//68.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/68.html",
    "author": "EvilObjective",
    "authorLink": "https://evilobjective.itch.io"
  },
  {
    "id": 69,
    "name": "Big ICE Tower Tiny Square",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//69.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/69.html",
    "author": "EvilObjective",
    "authorLink": "https://evilobjective.itch.io"
  },
  {
    "id": 70,
    "name": "BitLife",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//70.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/70.html",
    "author": "Candywriter",
    "authorLink": "https://candywriter.com"
  },
  {
    "id": 71,
    "name": "Bloons TD",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//71.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/71.html",
    "author": "Ninja Kiwi",
    "authorLink": "https://ninjakiwi.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 72,
    "name": "Bloons TD 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//72.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/72.html",
    "author": "Ninja Kiwi",
    "authorLink": "https://ninjakiwi.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 73,
    "name": "Bloons TD 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//73.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/73.html",
    "author": "Ninja Kiwi",
    "authorLink": "https://ninjakiwi.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 74,
    "name": "Bloons TD 4",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//74.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/74.html",
    "author": "Ninja Kiwi",
    "authorLink": "https://ninjakiwi.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 75,
    "name": "Bloons TD 5",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//75.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/75.html",
    "author": "Ninja Kiwi",
    "authorLink": "https://ninjakiwi.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 76,
    "name": "Bob The Robber 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//76.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/76.html",
    "author": "Meow Beast",
    "authorLink": "https://www.newgrounds.com/portal/view/585767"
  },
  {
    "id": 77,
    "name": "Boxing Random",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//77.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/77.html",
    "author": "RHM Interactive",
    "authorLink": "https://www.twoplayergames.org"
  },
  {
    "id": 78,
    "name": "Burrito Bison: Launcha Libre",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//78.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/78.html",
    "author": "Juicy Beast",
    "authorLink": "https://juicybeast.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 79,
    "name": "Cannon Basketball",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//79.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/79.html",
    "author": "Oleh \"qzix13\" Kuzyk",
    "authorLink": "https://ua.linkedin.com/in/olehkuzyk",
    "special": [
      "flash"
    ]
  },
  {
    "id": 80,
    "name": "Cannon Basketball 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//80.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/80.html",
    "author": "Oleh \"qzix13\" Kuzyk",
    "authorLink": "https://ua.linkedin.com/in/olehkuzyk",
    "special": [
      "flash"
    ]
  },
  {
    "id": 81,
    "name": "Cluster Rush",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//81.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/81.html",
    "author": "Landfall",
    "authorLink": "https://landfall.se"
  },
  {
    "id": 82,
    "name": "Cookie Clicker",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//82.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/82-aa.html",
    "author": "Orteil",
    "authorLink": "https://orteil.dashnet.org"
  },
  {
    "id": 83,
    "name": "Coreball",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//83.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/83.html",
    "author": "Ben Vinegar",
    "authorLink": "https://benv.ca/"
  },
  {
    "id": 84,
    "name": "Cubefield",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//84.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/84.html",
    "author": "Max Abernethy",
    "authorLink": "https://max-abernethy.newgrounds.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 85,
    "name": "Cut the Rope",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//85.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/85-f.html",
    "author": "ZeptoLab",
    "authorLink": "https://www.zeptolab.com"
  },
  {
    "id": 86,
    "name": "Draw Climber",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//86.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/86.html",
    "author": "VOODOO",
    "authorLink": "https://voodoo.io"
  },
  {
    "id": 87,
    "name": "Emulator.JS",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//87.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/87.html",
    "author": "Ethan O'Brien",
    "authorLink": "https://emulatorjs.org/",
    "special": [
      "emulator"
    ]
  },
  {
    "id": 88,
    "name": "Fireboy and Watergirl 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//88.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/88.html",
    "author": "Oslo Albet",
    "authorLink": "https://www.osloalbet.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 89,
    "name": "Fireboy and Watergirl 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//89.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/89.html",
    "author": "Oslo Albet",
    "authorLink": "https://www.osloalbet.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 90,
    "name": "Granny",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//90.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/90.html",
    "author": "DVloper",
    "authorLink": "https://grannyhorror.com"
  },
  {
    "id": 91,
    "name": "Gunspin",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//91.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/91.html",
    "author": "minijuegos.com",
    "authorLink": "https://www.minijuegos.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 92,
    "name": "Highway Racer 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//92.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/92.html",
    "author": "Bone Cracker Games",
    "authorLink": "https://www.bonecrackergames.com/"
  },
  {
    "id": 93,
    "name": "Johnny Trigger",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//93.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/93.html",
    "author": "SayGames",
    "authorLink": "https://say.games"
  },
  {
    "id": 94,
    "name": "Journey Downhill",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//94.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/94.html",
    "author": "Megagon Industries",
    "authorLink": "https://megagonindustries.com/"
  },
  {
    "id": 95,
    "name": "Line Rider",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//95.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/95.html",
    "author": "Boštjan Čadež",
    "authorLink": "https://fsk.deviantart.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 96,
    "name": "Moto X3M",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//96.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/96.html",
    "author": "MadPuffers",
    "authorLink": "https://www.madpuffers.com"
  },
  {
    "id": 97,
    "name": "Moto X3M 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//97.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/97.html",
    "author": "MadPuffers",
    "authorLink": "https://www.madpuffers.com"
  },
  {
    "id": 98,
    "name": "Moto X3M 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//98.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/98.html",
    "author": "MadPuffers",
    "authorLink": "https://www.madpuffers.com"
  },
  {
    "id": 99,
    "name": "Moto X3M Spooky",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//99.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/99.html",
    "author": "MadPuffers",
    "authorLink": "https://www.madpuffers.com"
  },
  {
    "id": 100,
    "name": "Moto X3M Winter",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//100.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/100-f.html",
    "author": "MadPuffers",
    "authorLink": "https://www.madpuffers.com"
  },
  {
    "id": 101,
    "name": "Ninja vs EvilCorp",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//101.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/101.html",
    "author": "Rémi Vansteelandt",
    "authorLink": "https://remvst.com"
  },
  {
    "id": 102,
    "name": "Paper.io 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//102.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/102.html",
    "author": "VOODOO",
    "authorLink": "https://voodoo.io"
  },
  {
    "id": 103,
    "name": "The World's Hardest Game",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//103.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/103.html",
    "author": "Stevie Critoph",
    "authorLink": "https://stephencritoph.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 104,
    "name": "The World's Hardest Game 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//104.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/104.html",
    "author": "Stevie Critoph",
    "authorLink": "https://stephencritoph.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 105,
    "name": "The World's Hardest Game 4",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//105.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/105.html",
    "author": "Stevie Critoph",
    "authorLink": "https://stephencritoph.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 106,
    "name": "This Is The Only Level",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//106.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/106.html",
    "author": "jmtb02",
    "authorLink": "https://jmtb02.newgrounds.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 107,
    "name": "This Is The Only Level 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//107.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/107.html",
    "author": "jmtb02",
    "authorLink": "https://jmtb02.newgrounds.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 108,
    "name": "Tiny Fishing",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//108.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/108.html",
    "author": "Winter Studio",
    "authorLink": "https://winterstudio.com/"
  },
  {
    "id": 109,
    "name": "Tomb Of The Mask",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//109.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/109.html",
    "author": "Happymagenta UAB",
    "authorLink": "https://happymagenta.com/"
  },
  {
    "id": 110,
    "name": "Toss The Turtle",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//110.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/110-f.html",
    "author": "GonzoSSM",
    "authorLink": "https://gonzossm.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 111,
    "name": "Tube Jumpers",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//111.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/111.html",
    "author": "New Eich Games",
    "authorLink": "https://www.neweichgames.com/"
  },
  {
    "id": 112,
    "name": "Wordle",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//112.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/112.html",
    "author": "New York Times",
    "authorLink": "https://www.nytimes.com/games/wordle/index.html"
  },
  {
    "id": 113,
    "name": "Ruffle",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//113.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/113.html",
    "author": "Mike Welsh",
    "authorLink": "https://ruffle.rs/",
    "special": [
      "emulator",
      "flash"
    ]
  },
  {
    "id": 114,
    "name": "2048",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//114.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/114-f.html",
    "author": "Gabriele Cirulli",
    "authorLink": "https://github.com/gabrielecirulli"
  },
  {
    "id": 115,
    "name": "8 Ball Pool",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//115.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/115.html",
    "author": "Miniclip.com",
    "authorLink": "https://miniclip.com/"
  },
  {
    "id": 116,
    "name": "Offroad Mountain Bike",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//116.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/116.html",
    "author": "RHM Interactive OÜ",
    "authorLink": "https://play.google.com/store/apps/dev?id=9182049342574405049&hl=en_US"
  },
  {
    "id": 117,
    "name": "Space Waves",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//117.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/117-fix.html",
    "author": "do.games",
    "authorLink": "https://play.google.com/store/apps/dev?id=8163162718412732005&hl=en_US"
  },
  {
    "id": 118,
    "name": "Solar Smash",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//118.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/118.html",
    "author": "Paradyme Games",
    "authorLink": "https://play.google.com/store/apps/details?id=com.paradyme.solarsmash&hl=en_US"
  },
  {
    "id": 119,
    "name": "Snow Rider 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//119.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/119.html",
    "author": "gamebiz",
    "authorLink": "https://gamebiz.com/"
  },
  {
    "id": 120,
    "name": "Fortzone Battle Royale",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//120.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/120.html",
    "author": "Mirra Games",
    "authorLink": "https://mirragames.com/"
  },
  {
    "id": 121,
    "name": "Brawl Guys.io",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//121.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/121.html",
    "author": "Lagged",
    "authorLink": "https://lagged.com"
  },
  {
    "id": 122,
    "name": "Survival Race",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//122.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/122.html",
    "author": "Brain Massage",
    "authorLink": "https://play.google.com/store/apps/dev?id=7174485743246221107"
  },
  {
    "id": 123,
    "name": "Poly Track",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//123.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/123-win.html",
    "author": "Kodub",
    "authorLink": "https://www.kodub.com"
  },
  {
    "id": 124,
    "name": "Moto X3M Pool Party",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//124.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/124.html",
    "author": "MadPuffers",
    "authorLink": "http://madpuffers.com/"
  },
  {
    "id": 125,
    "name": "Granny 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//125.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/125.html",
    "author": "DVloper",
    "authorLink": "https://play.google.com/store/apps/developer?id=DVloper&hl=en_US"
  },
  {
    "id": 126,
    "name": "Granny 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//126.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/126.html",
    "author": "DVloper",
    "authorLink": "https://play.google.com/store/apps/developer?id=DVloper&hl=en_US"
  },
  {
    "id": 127,
    "name": "Fashion Battle",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//127.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/127.html",
    "author": "Apps Mobile Games",
    "authorLink": "https://play.google.com/store/apps/dev?id=4672672872255695418&hl=en_US"
  },
  {
    "id": 128,
    "name": "Slice it All",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//128.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/128.html",
    "author": "VOODOO",
    "authorLink": "https://play.google.com/store/apps/developer?id=VOODOO&hl=en_US"
  },
  {
    "id": 129,
    "name": "Flappy Bird",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//129.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/129.html",
    "author": "Dong Nguyen",
    "authorLink": "https://x.com/dongatory"
  },
  {
    "id": 130,
    "name": "osu!",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//130.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/130.html",
    "author": "ppy",
    "authorLink": "https://osu.ppy.sh/"
  },
  {
    "id": 146,
    "name": "8 Ball Classic",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//146.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/146.html",
    "author": "Famobi",
    "authorLink": "https://play.google.com/store/apps/details?id=com.famobi.eightballbilliardsclassic"
  },
  {
    "id": 147,
    "name": "Angry Birds Showdown",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//147.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/147.html",
    "author": "Rovio Entertainment",
    "authorLink": "https://www.rovio.com"
  },
  {
    "id": 148,
    "name": "Archery World Tour",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//148.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/148.html",
    "author": "Famobi",
    "authorLink": "https://play.google.com/store/apps/details?id=com.famobi.archeryworldtour"
  },
  {
    "id": 149,
    "name": "Ball Blast",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//149.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/149.html",
    "author": "Voodoo",
    "authorLink": "https://play.google.com/store/apps/details?id=com.nomonkeys.ballblast"
  },
  {
    "id": 150,
    "name": "Cannon Balls 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//150.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/150.html",
    "author": "Famobi",
    "authorLink": "https://play.google.com/store/apps/details?id=com.famobi.cannonballs3d"
  },
  {
    "id": 151,
    "name": "Chess Classic",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//151.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/151.html",
    "author": "Famobi",
    "authorLink": "https://play.google.com/store/apps/details?id=com.famobi.chessclassic"
  },
  {
    "id": 152,
    "name": "Draw the Line",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//152.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/152.html",
    "author": "Supersonic Studios LTD",
    "authorLink": "https://play.google.com/store/apps/details?id=com.friendsgamesincubator.drawtheline"
  },
  {
    "id": 153,
    "name": "Flappy Dunk",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//153.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/153.html",
    "author": "Voodoo",
    "authorLink": "https://play.google.com/store/apps/details?id=com.acidcousins.fdunk"
  },
  {
    "id": 154,
    "name": "Fork n Sausage",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//154.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/154.html",
    "author": "SayGames",
    "authorLink": "https://play.google.com/store/apps/details?id=com.kadka.forknsausage"
  },
  {
    "id": 155,
    "name": "Guess Their Answer",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//155.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/155.html",
    "author": "TapNation",
    "authorLink": "https://play.google.com/store/apps/details?id=com.qoni.guesstheiranswer"
  },
  {
    "id": 156,
    "name": "Harvest.io",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//156.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/156.html",
    "author": "CASUAL AZUR GAMES",
    "authorLink": "https://play.google.com/store/apps/details?id=com.harvest.io"
  },
  {
    "id": 157,
    "name": "Hill Climb Racing Lite",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//157.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/157.html",
    "author": "Fingersoft",
    "authorLink": "https://play.google.com/store/apps/details?id=com.fingersoft.hillclimb"
  },
  {
    "id": 158,
    "name": "Pac-Man Superfast",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//158.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/158.html",
    "author": "RedFox Games",
    "authorLink": "https://www.playredfox.com"
  },
  {
    "id": 159,
    "name": "Parking Rush",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//159.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/159.html",
    "author": "Nine&Nine",
    "authorLink": "https://play.google.com/store/apps/details?id=com.tianninenine.parkingrush"
  },
  {
    "id": 160,
    "name": "Race Master 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//160.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/160.html",
    "author": "Beresnev Games",
    "authorLink": "https://play.google.com/store/apps/details?id=com.easygames.race"
  },
  {
    "id": 161,
    "name": "State.io",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//161.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/161.html",
    "author": "CASUAL AZUR GAMES",
    "authorLink": "https://play.google.com/store/apps/details?id=io.state.fight"
  },
  {
    "id": 162,
    "name": "Tower Crash 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//162.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/162.html",
    "author": "Famobi",
    "authorLink": "https://play.google.com/store/apps/details?id=com.famobi.towercrash3d"
  },
  {
    "id": 163,
    "name": "Trivia Crack",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//163.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/163.html",
    "author": "etermax",
    "authorLink": "https://play.google.com/store/apps/details?id=com.etermax.preguntados.lite"
  },
  {
    "id": 164,
    "name": "Crazy Cattle 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//164.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/164-temp2.html",
    "author": "4nn4t4t",
    "authorLink": "https://4nn4t4t.itch.io/crazycattle3d",
    "special": [
      "port"
    ]
  },
  {
    "id": 165,
    "name": "Cheese Chompers 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//165.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/165.html",
    "author": "NavaNoid",
    "authorLink": "https://cheesechompers3d.itch.io/cheese-chompers-3d"
  },
  {
    "id": 166,
    "name": "Bad Parenting 1",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//166.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/166.html",
    "author": "98corbins",
    "authorLink": "https://98corbins.netlify.app",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 167,
    "name": "Blade Ball",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//167.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/167.html",
    "author": "??",
    "authorLink": ""
  },
  {
    "id": 168,
    "name": "Blocky Snakes",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//168.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/168.html",
    "author": "Beedo Games",
    "authorLink": "https://poki.com/en/g/blocky-snakes"
  },
  {
    "id": 169,
    "name": "Bloxorz",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//169.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/169.html",
    "author": "Damien Clarke",
    "authorLink": "https://damienclarke.me"
  },
  {
    "id": 170,
    "name": "Big Tower Tiny Square 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//170.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/170.html",
    "author": "EO Interactive",
    "authorLink": "https://apps.apple.com/my/developer/eo-interactive-ltd/id457003279",
    "special": [
      "flash"
    ]
  },
  {
    "id": 171,
    "name": "Candy Crush",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//171.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/171.html",
    "author": "King.com",
    "authorLink": "https://www.king.com/game/candycrush"
  },
  {
    "id": 172,
    "name": "Melon Playground",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//172.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/172.html",
    "author": "playducky.com",
    "authorLink": "https://playducky.com"
  },
  {
    "id": 173,
    "name": "Drift Hunters",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//173.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/173.html",
    "author": "Illia Kaminetskyi",
    "authorLink": "https://ilyakaminetsky.itch.io/drift-hunters"
  },
  {
    "id": 174,
    "name": "World Box",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//174.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/174.html",
    "author": "Kendja",
    "authorLink": "https://www.newgrounds.com/portal/view/603435",
    "special": [
      "flash"
    ]
  },
  {
    "id": 175,
    "name": "Run 1",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//175.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/175.html",
    "author": "Joseph Cloutier",
    "authorLink": "https://player03.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 176,
    "name": "Run 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//176.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/176.html",
    "author": "Joseph Cloutier",
    "authorLink": "https://player03.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 177,
    "name": "Run 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//177.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/177.html",
    "author": "Joseph Cloutier",
    "authorLink": "https://player03.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 178,
    "name": "Swords and Souls",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//178.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/178.html",
    "author": "Armor Games",
    "authorLink": "https://armorgames.com/play/17817/swords-and-souls",
    "special": [
      "flash"
    ]
  },
  {
    "id": 179,
    "name": "Soundboard",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//179.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/179.html",
    "author": "genizy",
    "authorLink": "https://github.com/genizy/soundboard/",
    "featured": true,
    "special": [
      "tools"
    ]
  },
  {
    "id": 180,
    "name": "n-gon",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//180.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/180.html",
    "author": "landgreen",
    "authorLink": "https://github.com/landgreen/n-gon"
  },
  {
    "id": 181,
    "name": "Minecraft 1.8.8",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//181.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/181.html",
    "author": "lax1dude",
    "authorLink": "https://eaglercraft.com"
  },
  {
    "id": 182,
    "name": "Minecraft 1.12.2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//182.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/182.html",
    "author": "lax1dude",
    "authorLink": "https://eaglercraft.com",
    "featured": true
  },
  {
    "id": 183,
    "name": "Minecraft 1.21.4",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//183.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/183.html",
    "author": "zardoy",
    "authorLink": "https://github.com/zardoy/minecraft-web-client"
  },
  {
    "id": 185,
    "name": "Five Nights at Freddy's: Sister Location",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//185.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/185.html",
    "author": "Scott Cawthon",
    "authorLink": "https://scottgames.com",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 186,
    "name": "Ragdoll Archers",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//186.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/186.html",
    "author": "Ericetto",
    "authorLink": "https://www.snokido.com/author/ericetto"
  },
  {
    "id": 187,
    "name": "Papers, Please",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//187.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/187.html",
    "author": "Lucas Pope",
    "authorLink": "https://dukope.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 188,
    "name": "Scrap Metal 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//188.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/188e.html",
    "author": "Ciorbyn",
    "authorLink": "https://www.ciorbynstudio.com"
  },
  {
    "id": 190,
    "name": "Five Nights at Freddy's: World",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//190.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/190.html",
    "author": "Scott Cawthon",
    "authorLink": "https://scottgames.com",
    "special": [
      "port"
    ]
  },
  {
    "id": 191,
    "name": "Five Nights at Freddy's: Pizza Simulator",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//191.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/191.html",
    "author": "Scott Cawthon",
    "authorLink": "https://scottgames.com",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 192,
    "name": "Five Nights at Freddy's: Ultimate Custom Night",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//192.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/192.html",
    "author": "Scott Cawthon",
    "authorLink": "https://scottgames.com",
    "special": [
      "port"
    ]
  },
  {
    "id": 193,
    "name": "Do NOT Take This Cat Home",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//193.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/193.html",
    "author": "Pixelliminal",
    "authorLink": "https://pixeliminal.itch.io/do-not-take-this-cat-home",
    "special": [
      "port"
    ]
  },
  {
    "id": 194,
    "name": "People Playground",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//194-m.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/194-a.html",
    "author": "Studio Minus, 98corbins",
    "authorLink": "https://store.steampowered.com/app/1118200/",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 195,
    "name": "R.E.P.O",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//195.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/195.html",
    "author": "semiwork, 98corbins",
    "authorLink": "https://store.steampowered.com/app/3241660/",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 196,
    "name": "ULTRAKILL",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//196.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/196-fixed.html",
    "author": "New Blood Interactive, Cake Logic",
    "authorLink": "https://sites.google.com/view/cakelogic",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 197,
    "name": "Elastic Man",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//197.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/197.html",
    "author": "David Li",
    "authorLink": "https://david.li"
  },
  {
    "id": 198,
    "name": "Slope",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//198.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/198.html",
    "author": "coweggs",
    "authorLink": "https://coweggs.itch.io/slope-plus"
  },
  {
    "id": 199,
    "name": "Time Shooter 1",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//199.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/199.html",
    "author": "g80g",
    "authorLink": "https://g80g.com"
  },
  {
    "id": 200,
    "name": "Time Shooter 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//200.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/200.html",
    "author": "g80g",
    "authorLink": "https://g80g.com"
  },
  {
    "id": 201,
    "name": "Time Shooter 3: SWAT",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//201.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/201.html",
    "author": "g80g",
    "authorLink": "https://g80g.com"
  },
  {
    "id": 202,
    "name": "Carrom Clash",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//202.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/202.html",
    "author": "GameSnacks",
    "authorLink": "https://gamesnacks.com/games/carromclash"
  },
  {
    "id": 203,
    "name": "DOOM",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//203.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/203-a.html",
    "author": "Id Software",
    "authorLink": "https://www.idsoftware.com"
  },
  {
    "id": 204,
    "name": "Five Nights at Winston's",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//204.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/204-a.html",
    "author": "lax1dude",
    "authorLink": "https://lax1dude.net"
  },
  {
    "id": 205,
    "name": "Buckshot Roulette",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//205.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/205-f.html",
    "author": "Mike Klubnika",
    "authorLink": "https://mikeklubnika.itch.io/buckshot-roulette",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 206,
    "name": "Tunnel Rush",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//206.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/206.html",
    "author": "Deer Cat Games",
    "authorLink": "http://www.deercatgames.com"
  },
  {
    "id": 207,
    "name": "Snowbattle.io",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//207.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/207.html",
    "author": "Royalec/Tokyo",
    "authorLink": "https://google.com/search?q=Tokyo+Royalec"
  },
  {
    "id": 208,
    "name": "Rolly Vortex",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//208.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/208.html",
    "author": "Voodoo",
    "authorLink": "https://play.google.com/store/apps/details?id=com.bdj.vortexDroid&hl=en_US"
  },
  {
    "id": 209,
    "name": "Draw the Hill",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//209.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/209.html",
    "author": "Stelennnn",
    "authorLink": "https://play.google.com/store/apps/details?id=xyz.gameshtml5.drawathehill&hl=en_US"
  },
  {
    "id": 210,
    "name": "Dragon vs Bricks",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//210.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/210.html",
    "author": "Voodoo",
    "authorLink": "https://voodoo.io"
  },
  {
    "id": 211,
    "name": "Death Run 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//211.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/211.html",
    "author": "kevin.wang",
    "authorLink": "https://play.google.com/store/apps/details?id=com.kevin.deathrun3d&hl=en_US"
  },
  {
    "id": 212,
    "name": "Cut the Rope",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//212.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/212-f.html",
    "author": "ZeptoLab",
    "authorLink": "https://www.zeptolab.com"
  },
  {
    "id": 213,
    "name": "Cut the Rope: Time Travel",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//213.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/213-f.html",
    "author": "ZeptoLab",
    "authorLink": "https://www.zeptolab.com"
  },
  {
    "id": 214,
    "name": "Cut the Rope: Holiday Gift",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//214.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/214-fi.html",
    "author": "ZeptoLab",
    "authorLink": "https://www.zeptolab.com"
  },
  {
    "id": 215,
    "name": "Bendy and the Ink Machine",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//215.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/215.html",
    "author": "Joey Drew Studios",
    "authorLink": "https://www.joeydrewstudios.com/batim",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 216,
    "name": "That's Not My Neighbor",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//216.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/216.html",
    "author": "Nacho Games",
    "authorLink": "https://store.steampowered.com/app/3431040/Thats_not_my_Neighbor/",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 217,
    "name": "Hotline Miami",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//217.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/217-c.html",
    "author": "Dennaton Games",
    "authorLink": "https://store.steampowered.com/app/219150/Hotline_Miami/",
    "special": [
      "port"
    ]
  },
  {
    "id": 218,
    "name": "Papa's Bakeria",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//218.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/218.html",
    "author": "Flipline Studios",
    "authorLink": "https://www.flipline.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 219,
    "name": "Papa's Burgeria",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//219.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/219.html",
    "author": "Flipline Studios",
    "authorLink": "https://www.flipline.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 220,
    "name": "Papa's Cheeseria",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//220.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/220.html",
    "author": "Flipline Studios",
    "authorLink": "https://www.flipline.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 221,
    "name": "Papa's Cupcakeria",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//221.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/221.html",
    "author": "Flipline Studios",
    "authorLink": "https://www.flipline.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 222,
    "name": "Papa's Donuteria",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//222.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/222.html",
    "author": "Flipline Studios",
    "authorLink": "https://www.flipline.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 223,
    "name": "Papa's Freezeria",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//223.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/223.html",
    "author": "Flipline Studios",
    "authorLink": "https://www.flipline.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 224,
    "name": "Papa's Hot Doggeria",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//224.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/224.html",
    "author": "Flipline Studios",
    "authorLink": "https://www.flipline.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 225,
    "name": "Papa's Pancakeria",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//225.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/225.html",
    "author": "Flipline Studios",
    "authorLink": "https://www.flipline.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 226,
    "name": "Papa's Pastaria",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//226.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/226.html",
    "author": "Flipline Studios",
    "authorLink": "https://www.flipline.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 227,
    "name": "Papa's Pizeria",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//227.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/227.html",
    "author": "Flipline Studios",
    "authorLink": "https://www.flipline.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 228,
    "name": "Papa's Scooperia",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//228.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/228.html",
    "author": "Flipline Studios",
    "authorLink": "https://www.flipline.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 229,
    "name": "Papa's Sushiria",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//229.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/229.html",
    "author": "Flipline Studios",
    "authorLink": "https://www.flipline.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 230,
    "name": "Papa's Taco Mia",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//230.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/230.html",
    "author": "Flipline Studios",
    "authorLink": "https://www.flipline.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 231,
    "name": "Papa's Wingeria",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//231.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/231.html",
    "author": "Flipline Studios",
    "authorLink": "https://www.flipline.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 232,
    "name": "Plants vs Zombies",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//232.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/232.html",
    "author": "PopCap Games",
    "authorLink": "https://www.ea.com/ea-studios/popcap/plants-vs-zombies",
    "special": [
      "flash"
    ]
  },
  {
    "id": 233,
    "name": "Superhot",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//233.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/233.html",
    "author": "Superhot Team",
    "authorLink": "https://superhotgame.com"
  },
  {
    "id": 234,
    "name": "Duck Life",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//234.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/234.html",
    "author": "Mad.com",
    "authorLink": "https://mad.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 235,
    "name": "Duck Life 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//235.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/235.html",
    "author": "Mad.com",
    "authorLink": "https://mad.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 236,
    "name": "Duck Life 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//236.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/236.html",
    "author": "Mad.com",
    "authorLink": "https://mad.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 237,
    "name": "Duck Life 4",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//237.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/237.html",
    "author": "Mad.com",
    "authorLink": "https://mad.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 238,
    "name": "Duck Life 5",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//238.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/238.html",
    "author": "Mad.com",
    "authorLink": "https://mad.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 239,
    "name": "Red Ball",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//239.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/239.html",
    "author": "Yohoho Games",
    "authorLink": "https://yohoho.games",
    "special": [
      "flash"
    ]
  },
  {
    "id": 240,
    "name": "Red Ball 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//240.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/240.html",
    "author": "Yohoho Games",
    "authorLink": "https://yohoho.games",
    "special": [
      "flash"
    ]
  },
  {
    "id": 241,
    "name": "Red Ball 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//241.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/241.html",
    "author": "Yohoho Games",
    "authorLink": "https://yohoho.games",
    "special": [
      "flash"
    ]
  },
  {
    "id": 242,
    "name": "Red Ball 4",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//242.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/242.html",
    "author": "Yohoho Games",
    "authorLink": "https://yohoho.games",
    "special": [
      "flash"
    ]
  },
  {
    "id": 243,
    "name": "Red Ball 4 Vol. 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//243.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/243.html",
    "author": "Yohoho Games",
    "authorLink": "https://yohoho.games",
    "special": [
      "flash"
    ]
  },
  {
    "id": 244,
    "name": "Red Ball 4 Vol. 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//244.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/244.html",
    "author": "Yohoho Games",
    "authorLink": "https://yohoho.games",
    "special": [
      "flash"
    ]
  },
  {
    "id": 245,
    "name": "Wheely",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//245.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/245.html",
    "author": "Pegas Games",
    "authorLink": "http://www.pegasgames.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 246,
    "name": "Wheely 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//246.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/246.html",
    "author": "Pegas Games",
    "authorLink": "http://www.pegasgames.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 247,
    "name": "Wheely 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//247.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/247.html",
    "author": "Pegas Games",
    "authorLink": "http://www.pegasgames.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 248,
    "name": "Wheely 4",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//248.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/248.html",
    "author": "Pegas Games",
    "authorLink": "http://www.pegasgames.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 249,
    "name": "Wheely 5",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//249.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/249.html",
    "author": "Pegas Games",
    "authorLink": "http://www.pegasgames.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 250,
    "name": "Wheely 6",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//250.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/250.html",
    "author": "Pegas Games",
    "authorLink": "http://www.pegasgames.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 251,
    "name": "Wheely 7",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//251.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/251.html",
    "author": "Pegas Games",
    "authorLink": "http://www.pegasgames.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 252,
    "name": "Wheely 8",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//252.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/252.html",
    "author": "Pegas Games",
    "authorLink": "http://www.pegasgames.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 253,
    "name": "Chat Bot (A.|.I)",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//253.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/253.html",
    "author": "gn-math",
    "authorLink": "https://gn-math.github.io",
    "featured": true,
    "special": [
      "tools"
    ]
  },
  {
    "id": 255,
    "name": "Crazy Chicken 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//255.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/255.html",
    "author": "Teasle",
    "authorLink": "https://teasle.itch.io/crazychicken3d"
  },
  {
    "id": 256,
    "name": "Crazy Kitty 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//256.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/256.html",
    "author": "Teasle",
    "authorLink": "https://teasle.itch.io/crazykitty3d"
  },
  {
    "id": 257,
    "name": "Google Baseball",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//257.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/257.html",
    "author": "Google",
    "authorLink": "https://google.com"
  },
  {
    "id": 258,
    "name": "A Bite at Freddy's",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//258.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/258.html",
    "author": "Garrett McKay",
    "authorLink": "https://garrett-mckay.itch.io/a-bite-at-freddys",
    "special": [
      "port"
    ]
  },
  {
    "id": 259,
    "name": "Class of '09",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//259.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/259.html",
    "author": "sbn3",
    "authorLink": "https://sbn3.com",
    "special": [
      "port"
    ]
  },
  {
    "id": 260,
    "name": "RE:RUN",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//260.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/260.html",
    "author": "DaniDev",
    "authorLink": "https://danidev.itch.io/rerun",
    "special": [
      "port"
    ]
  },
  {
    "id": 261,
    "name": "Fruit Ninja",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//261.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/261.html",
    "author": "Halfbrick Studios",
    "authorLink": "https://www.halfbrick.com/games/fruit-ninja-classic"
  },
  {
    "id": 262,
    "name": "Half Life",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//262.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/262.html",
    "author": "Valve",
    "authorLink": "https://www.valvesoftware.com/en/",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 263,
    "name": "Quake III Arena",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//263.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/263.html",
    "author": "Id Software",
    "authorLink": "https://www.idsoftware.com/en",
    "special": [
      "port"
    ]
  },
  {
    "id": 264,
    "name": "Escape Road",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//264.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/264.html",
    "author": "AzGames",
    "authorLink": "https://azgames.io/escape-road"
  },
  {
    "id": 265,
    "name": "Escape Road 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//265.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/265-fix.html",
    "author": "AzGames",
    "authorLink": "https://azgames.io/escape-road-2"
  },
  {
    "id": 266,
    "name": "Speed Stars",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//266.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/266-a.html",
    "author": "Luke Doukakis",
    "authorLink": "https://store.steampowered.com/app/1482700/Speed_Stars/",
    "special": [
      "port"
    ]
  },
  {
    "id": 267,
    "name": "Pizza Tower",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//267.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/267.html",
    "author": "Tour De Pizza, BurnedPopcorn",
    "authorLink": "https://store.steampowered.com/app/2231450/Pizza_Tower/",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 268,
    "name": "Bacon May Die",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//268.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/268.html",
    "author": "SnoutUp",
    "authorLink": "https://store.steampowered.com/app/646240/Bacon_May_Die/"
  },
  {
    "id": 269,
    "name": "Bad Ice Cream",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//269.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/269.html",
    "author": "Nitrome",
    "authorLink": "https://poki.com/en/g/bad-ice-cream"
  },
  {
    "id": 270,
    "name": "Bad Ice Cream 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//270.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/270.html",
    "author": "Nitrome",
    "authorLink": "https://poki.com/en/g/bad-ice-cream-2"
  },
  {
    "id": 271,
    "name": "Bad Ice Cream 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//271.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/271.html",
    "author": "Nitrome",
    "authorLink": "https://poki.com/en/g/bad-ice-cream-3"
  },
  {
    "id": 272,
    "name": "Basketball Stars",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//272.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/272.html",
    "author": "MadPuffers",
    "authorLink": "https://poki.com/en/g/basketball-stars"
  },
  {
    "id": 273,
    "name": "BlockPost",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//273.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/273.html",
    "author": "SkullCap Studios",
    "authorLink": "https://poki.com/en/g/blockpost"
  },
  {
    "id": 274,
    "name": "CircloO",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//274.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/274.html",
    "author": "Florian van Strien",
    "authorLink": "https://florianvanstrien.nl"
  },
  {
    "id": 275,
    "name": "CircloO 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//275.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/275.html",
    "author": "Florian van Strien",
    "authorLink": "https://florianvanstrien.nl"
  },
  {
    "id": 276,
    "name": "Drift Boss",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//276.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/276.html",
    "author": "marketjs",
    "authorLink": "https://www.marketjs.com"
  },
  {
    "id": 277,
    "name": "Evil Glitch",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//277.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/277.html",
    "author": "agar3s",
    "authorLink": "https://github.com/agar3s"
  },
  {
    "id": 278,
    "name": "Madalin Stunt Cars 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//278.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/278.html",
    "author": "Madalin Games",
    "authorLink": "https://www.madalingames.com"
  },
  {
    "id": 279,
    "name": "Madalin Stunt Cars 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//279.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/279.html",
    "author": "Madalin Games",
    "authorLink": "https://www.madalingames.com"
  },
  {
    "id": 280,
    "name": "Papery Planes",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//280.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/280.html",
    "author": "Akos Makovics",
    "authorLink": "http://akos-makovics.com"
  },
  {
    "id": 281,
    "name": "Pixel Gun Survival",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//281.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/281.html",
    "author": "Mentolatux",
    "authorLink": "https://www.fiverr.com/mentolatux"
  },
  {
    "id": 282,
    "name": "Protektor",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//282.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/282.html",
    "author": "rujogames",
    "authorLink": "https://rujogames.itch.io/protektor"
  },
  {
    "id": 283,
    "name": "Rooftop Snipers",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//283.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/283.html",
    "author": "New Eich Games",
    "authorLink": "https://www.neweichgames.com"
  },
  {
    "id": 284,
    "name": "War The Knights",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//284.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/284.html",
    "author": "BANZAI",
    "authorLink": "https://banzai.games/en/"
  },
  {
    "id": 285,
    "name": "Basket Bros",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//285.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/285.html",
    "author": "Blue Wizard Digital",
    "authorLink": "https://bluewizard.com"
  },
  {
    "id": 286,
    "name": "Endoparasitic",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//286.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/286.html",
    "author": "Deep Root Interactive",
    "authorLink": "https://store.steampowered.com/app/2124780/Endoparasitic/",
    "special": [
      "port"
    ]
  },
  {
    "id": 287,
    "name": "Riddle School",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//287.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/287.html",
    "author": "JonBro",
    "authorLink": "https://jonbro.newgrounds.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 288,
    "name": "Riddle School 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//288.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/288.html",
    "author": "JonBro",
    "authorLink": "https://jonbro.newgrounds.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 289,
    "name": "Riddle School 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//289.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/289.html",
    "author": "JonBro",
    "authorLink": "https://jonbro.newgrounds.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 290,
    "name": "Riddle School 4",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//290.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/290.html",
    "author": "JonBro",
    "authorLink": "https://jonbro.newgrounds.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 291,
    "name": "Riddle School 5",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//291.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/291.html",
    "author": "JonBro",
    "authorLink": "https://jonbro.newgrounds.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 292,
    "name": "Riddle Transfer",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//292.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/292.html",
    "author": "JonBro",
    "authorLink": "https://jonbro.newgrounds.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 293,
    "name": "Riddle Transfer 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//293.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/293.html",
    "author": "JonBro",
    "authorLink": "https://jonbro.newgrounds.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 294,
    "name": "Idle Dice",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//294.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/294.html",
    "author": "Lutz Schönfelder",
    "authorLink": "https://github.com/luts91"
  },
  {
    "id": 295,
    "name": "12 Mini Battles",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//295.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/295.html",
    "author": "Shared Dreams Studio",
    "authorLink": "https://play.google.com/store/apps/dev?id=6107531068522107777&hl=en_US"
  },
  {
    "id": 296,
    "name": "Play!.js",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//296.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/296.html",
    "author": "jpd002",
    "authorLink": "https://github.com/jpd002/Play-",
    "special": [
      "emulator"
    ]
  },
  {
    "id": 297,
    "name": "Minecraft 1.5.2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//297.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/297.html",
    "author": "lax1dude",
    "authorLink": "https://eaglercraft.com"
  },
  {
    "id": 298,
    "name": "Minecraft Alpha 1.2.6",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//298.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/298.html",
    "author": "lax1dude",
    "authorLink": "https://eaglercraft.com"
  },
  {
    "id": 299,
    "name": "Minecraft Beta 1.3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//299.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/299.html",
    "author": "lax1dude",
    "authorLink": "https://eaglercraft.com"
  },
  {
    "id": 300,
    "name": "Minecraft Beta 1.7.3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//300.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/300.html",
    "author": "lax1dude",
    "authorLink": "https://eaglercraft.com"
  },
  {
    "id": 301,
    "name": "Minecraft Indev",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//301.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/301.html",
    "author": "lax1dude",
    "authorLink": "https://eaglercraft.com"
  },
  {
    "id": 302,
    "name": "Little Runmo",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//302.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/302.html",
    "author": "juhosprite, gooseworx",
    "authorLink": "https://juhosprite.itch.io/little-runmo"
  },
  {
    "id": 303,
    "name": "Territorial.io",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//303.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/303.html",
    "author": "TTCreator",
    "authorLink": "https://play.google.com/store/apps/dev?id=8652009334379030762"
  },
  {
    "id": 304,
    "name": "Alien Hominid",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//304.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/304.html",
    "author": "Tom Fulp, Dan Paladin",
    "authorLink": "https://www.newgrounds.com/portal/view/59593",
    "special": [
      "flash"
    ]
  },
  {
    "id": 305,
    "name": "Tanuki Sunset",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//305.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/305.html",
    "author": "Rewind Games",
    "authorLink": "https://store.steampowered.com/app/1251460/Tanuki_Sunset/"
  },
  {
    "id": 306,
    "name": "Shipo.io",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//306.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/306.html",
    "author": "OnRush Studio",
    "authorLink": "https://onrush.studio"
  },
  {
    "id": 307,
    "name": "Rainbow Obby",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//307.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/307.html",
    "author": "emolingo games",
    "authorLink": "https://emolingo.games"
  },
  {
    "id": 308,
    "name": "Nazi Zombies: Portable",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//308.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/308.html",
    "author": "nzp team",
    "authorLink": "https://nzp-team.itch.io/nazi-zombies-portable"
  },
  {
    "id": 309,
    "name": "Sandboxels",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//309.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/309.html",
    "author": "R74N",
    "authorLink": "https://store.steampowered.com/app/3664820/Sandboxels/"
  },
  {
    "id": 310,
    "name": "Dreadhead Parkour",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//310.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/310.html",
    "author": "GameTornado",
    "authorLink": "https://gametornado.com/"
  },
  {
    "id": 311,
    "name": "Sandtris",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//311.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/311.html",
    "author": "FRANCO MIRANDA",
    "authorLink": "https://francomiranda.com"
  },
  {
    "id": 312,
    "name": "BlackJack",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//312.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/312.html",
    "author": "Synic-dx",
    "authorLink": "https://github.com/Synic-dx/blackJack/"
  },
  {
    "id": 313,
    "name": "Minesweeper Mania",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//313.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/313.html",
    "author": "gamesnacks",
    "authorLink": "https://gamesnacks.com"
  },
  {
    "id": 314,
    "name": "Super Mario 63",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//314.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/314.html",
    "author": "Runouw",
    "authorLink": "https://runouw.com/games/"
  },
  {
    "id": 315,
    "name": "Jelly Mario",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//315.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/315.html",
    "author": "Schteppe",
    "authorLink": "https://x.com/schteppe"
  },
  {
    "id": 316,
    "name": "Angry Birds Chrome",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//316.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/316.html",
    "author": "Rovio",
    "authorLink": "https://rovio.com"
  },
  {
    "id": 317,
    "name": "sandspiel",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//317.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/317.html",
    "author": "maxbittker",
    "authorLink": "https://x.com/maxbittker"
  },
  {
    "id": 318,
    "name": "Side Effects",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//318.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/318.html",
    "author": "hi rohun, Mr.Pootsley, Jaybooty",
    "authorLink": "https://hirohun.itch.io/side-effects"
  },
  {
    "id": 319,
    "name": "Build a Queen",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//319.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/319.html",
    "author": "Supersonic Studios LTD",
    "authorLink": "https://play.google.com/store/apps/details?id=com.Polystation.BuildABabe"
  },
  {
    "id": 320,
    "name": "3D Bowling",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//320.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/320.html",
    "author": "Italic Games",
    "authorLink": "https://play.google.com/store/apps/details?id=com.threed.bowling"
  },
  {
    "id": 321,
    "name": "Room Sort",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//321.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/321.html",
    "author": "Gamincat",
    "authorLink": "https://play.google.com/store/apps/details?id=com.gamincat.roomsort"
  },
  {
    "id": 322,
    "name": "Sushi Roll",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//322.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/322.html",
    "author": "Famobi",
    "authorLink": "https://play.google.com/store/apps/details?id=com.famobi.suhsiroll"
  },
  {
    "id": 323,
    "name": "Find the Alien",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//323.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/323.html",
    "author": "MOONEE PUBLISHING LTD",
    "authorLink": "https://play.google.com/store/apps/details?id=net.wyvernware.whosthealien"
  },
  {
    "id": 324,
    "name": "Maze Speedrun",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//324.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/324.html",
    "author": "Raval Matic",
    "authorLink": "https://www.ravalmatic.com"
  },
  {
    "id": 325,
    "name": "Kitchen Bazar",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//325.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/325.html",
    "author": "Gameloft",
    "authorLink": "https://www.gameloft.com"
  },
  {
    "id": 326,
    "name": "Pokey Ball",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//326.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/326.html",
    "author": "Voodoo",
    "authorLink": "https://play.google.com/store/apps/details?id=com.lawson.poke"
  },
  {
    "id": 327,
    "name": "Slime.io",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//327.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/327.html",
    "author": "GameSnacks",
    "authorLink": "https://gamesnacks.com/games/slime-io"
  },
  {
    "id": 328,
    "name": "Om Nom Run",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//328.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/328.html",
    "author": "ZeptoLab",
    "authorLink": "https://play.google.com/store/apps/details?id=com.zeptolab.omnomrun.google"
  },
  {
    "id": 329,
    "name": "TileTopia",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//329.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/329a.html",
    "author": "GameSnacks",
    "authorLink": "https://gamesnacks.com/games/6nilllqpgkm6o"
  },
  {
    "id": 330,
    "name": "BitPlanes",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//330.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/330.html",
    "author": "Anton Medvedev",
    "authorLink": "https://medv.io"
  },
  {
    "id": 331,
    "name": "Crazy Cars",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//331.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/331.html",
    "author": "No Pressure Studios",
    "authorLink": "https://www.nopressurestudios.com"
  },
  {
    "id": 333,
    "name": "Fancy Pants Adventure",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//333.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/333.html",
    "author": "Brad Borne",
    "authorLink": "https://www.bornegames.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 334,
    "name": "Fancy Pants Adventure 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//334.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/334.html",
    "author": "Brad Borne",
    "authorLink": "https://www.bornegames.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 335,
    "name": "Fancy Pants Adventure 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//335.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/335.html",
    "author": "Brad Borne",
    "authorLink": "https://www.bornegames.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 336,
    "name": "Fancy Pants Adventure 4 Part 1",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//336.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/336.html",
    "author": "Brad Borne",
    "authorLink": "https://www.bornegames.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 337,
    "name": "Fancy Pants Adventure 4 Part 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//337.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/337.html",
    "author": "Brad Borne",
    "authorLink": "https://www.bornegames.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 338,
    "name": "Getaway Shootout",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//338.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/338.html",
    "author": "New Eich Games",
    "authorLink": "https://www.neweichgames.com"
  },
  {
    "id": 339,
    "name": "House of Hazards",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//339.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/339.html",
    "author": "New Eich Games",
    "authorLink": "https://www.neweichgames.com"
  },
  {
    "id": 340,
    "name": "Learn to Fly",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//340.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/340.html",
    "author": "Light Bringer Games",
    "authorLink": "http://lightbringergames.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 341,
    "name": "Learn to Fly 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//341.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/341.html",
    "author": "Light Bringer Games",
    "authorLink": "http://lightbringergames.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 342,
    "name": "Learn to Fly 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//342.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/342.html",
    "author": "Light Bringer Games",
    "authorLink": "http://lightbringergames.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 343,
    "name": "Learn to Fly Idle",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//343.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/343.html",
    "author": "Light Bringer Games",
    "authorLink": "http://lightbringergames.com",
    "special": [
      "flash"
    ]
  },
  {
    "id": 344,
    "name": "Raft Wars",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//344.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/344.html",
    "author": "GaZZer Game",
    "authorLink": "https://play.google.com/store/apps/dev?id=8915125137205442318",
    "special": [
      "flash"
    ]
  },
  {
    "id": 345,
    "name": "Raft Wars 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//345.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/345.html",
    "author": "GaZZer Game",
    "authorLink": "https://play.google.com/store/apps/dev?id=8915125137205442318",
    "special": [
      "flash"
    ]
  },
  {
    "id": 346,
    "name": "Sort the Court",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//346.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/346.html",
    "author": "graebor",
    "authorLink": "https://x.com/graebor"
  },
  {
    "id": 347,
    "name": "SpiderDoll",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//347.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/347.html",
    "author": "Ysopprod",
    "authorLink": "https://ysopprod.newgrounds.com"
  },
  {
    "id": 348,
    "name": "They Are Coming",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//348.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/348.html",
    "author": "OnHit Developments",
    "authorLink": "https://play.google.com/store/apps/details?id=dev.onhit.theyarecoming"
  },
  {
    "id": 349,
    "name": "Spiral Roll",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//349.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/349.html",
    "author": "Voodoo",
    "authorLink": "https://play.google.com/store/apps/details?id=com.Celltop.SpiralRoll"
  },
  {
    "id": 350,
    "name": "Binding of Issac: Wrath of the Lamb",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//350.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/350.html",
    "author": "Edmund McMillen",
    "authorLink": "https://store.steampowered.com/app/113204/Binding_of_Isaac_Wrath_of_the_Lamb/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 351,
    "name": "Happy Sheepies",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//351.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/351.html",
    "author": "Berker Games",
    "authorLink": "https://berkergames.itch.io/happy-sheepies"
  },
  {
    "id": 352,
    "name": "DON'T YOU LECTURE ME",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//352.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/352.html",
    "author": "GD Colon",
    "authorLink": "https://thirtydollar.website",
    "special": [
      "tools"
    ]
  },
  {
    "id": 353,
    "name": "Blumgi Rocket",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//353.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/353.html",
    "author": "Blumgi",
    "authorLink": "https://blumgi.com"
  },
  {
    "id": 354,
    "name": "Adventure Capatalist",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//354.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/354-a.html",
    "author": "Hyper Hippo Games",
    "authorLink": "https://store.steampowered.com/app/346900/AdVenture_Capitalist/"
  },
  {
    "id": 355,
    "name": "Dadish 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//355.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/355.html",
    "author": "Thomas K. Young",
    "authorLink": "https://x.com/tommy_ill"
  },
  {
    "id": 356,
    "name": "Dadish 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//356.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/356.html",
    "author": "Thomas K. Young",
    "authorLink": "https://x.com/tommy_ill"
  },
  {
    "id": 357,
    "name": "Dadish",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//357.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/357.html",
    "author": "Thomas K. Young",
    "authorLink": "https://x.com/tommy_ill"
  },
  {
    "id": 358,
    "name": "Dadish 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//358.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/358.html",
    "author": "Thomas K. Young",
    "authorLink": "https://x.com/tommy_ill"
  },
  {
    "id": 359,
    "name": "Daily Dadish",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//359.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/359.html",
    "author": "Thomas K. Young",
    "authorLink": "https://x.com/tommy_ill"
  },
  {
    "id": 360,
    "name": "EvoWars.io",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//360.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/360.html",
    "author": "Night Steed S.C.",
    "authorLink": "https://play.google.com/store/apps/dev?id=6316404222579633373"
  },
  {
    "id": 361,
    "name": "Google Feud",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//361.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/361.html",
    "author": "Justin Hook",
    "authorLink": "https://justinhook.com"
  },
  {
    "id": 362,
    "name": "Idle Breakout",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//362.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/362.html",
    "author": "Kodiqi",
    "authorLink": "https://kodiqi.itch.io"
  },
  {
    "id": 363,
    "name": "Idle Lumber Inc",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//363.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/363.html",
    "author": "NoPowerUp",
    "authorLink": "https://nopowerup.com/our-game/"
  },
  {
    "id": 364,
    "name": "Idle Mining Empire",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//364.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/364.html",
    "author": "marketjs",
    "authorLink": "https://www.marketjs.com/"
  },
  {
    "id": 365,
    "name": "JustFall.lol",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//365.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/365.html",
    "author": "JustPlay.LOL",
    "authorLink": "https://play.google.com/store/apps/dev?id=7065081805875144950"
  },
  {
    "id": 366,
    "name": "Merge Harvest",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//366.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/366.html",
    "author": "idfk",
    "authorLink": "https://gn-math.github.io"
  },
  {
    "id": 367,
    "name": "Parking Fury 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//367.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/367.html",
    "author": "Brain Software",
    "authorLink": "https://poki.com/en/g/parking-fury-3d"
  },
  {
    "id": 368,
    "name": "Slope 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//368.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/368.html",
    "author": "idfk",
    "authorLink": "https://gn-math.github.io"
  },
  {
    "id": 369,
    "name": "Slowroads",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//369.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/369.html",
    "author": "Topograph Interactive",
    "authorLink": "https://store.steampowered.com/app/3431300/Slow_Roads/"
  },
  {
    "id": 370,
    "name": "Smash Karts",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//370.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/370-f.html",
    "author": "Tall Team",
    "authorLink": "https://tall.team/"
  },
  {
    "id": 371,
    "name": "Stickman Fight Ragdoll",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//371.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/371e.html",
    "author": "Vanorium",
    "authorLink": "https://playem.io/dev/vanorium"
  },
  {
    "id": 372,
    "name": "Stickman Boost",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//372.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/372.html",
    "author": "y8",
    "authorLink": "https://www.y8.com/games/stickman_boost"
  },
  {
    "id": 373,
    "name": "Stickman Climb",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//373.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/373.html",
    "author": "No Pressure Studios",
    "authorLink": "https://www.nopressurestudios.com"
  },
  {
    "id": 374,
    "name": "Stickman Golf",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//374.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/374e.html",
    "author": "NoodleCake",
    "authorLink": "https://noodlecake.com"
  },
  {
    "id": 375,
    "name": "2048 Merge Run",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//375.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/375.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 376,
    "name": "Build a Big Army",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//376.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/376.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 377,
    "name": "Build a Plane",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//377.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/377.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 378,
    "name": "Camouflage and Sniper",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//378.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/378.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 379,
    "name": "Car Survival 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//379.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/379.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 380,
    "name": "City Defense",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//380.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/380.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 381,
    "name": "Clothing Shop 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//381.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/381.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 382,
    "name": "Cool Cars Run 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//382.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/382.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 383,
    "name": "Crush Cars 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//383.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/383.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 384,
    "name": "Destiny Run 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//384.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/384.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 385,
    "name": "Destroy The Car 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//385.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/385.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 386,
    "name": "Diamond Seeker",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//386.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/386.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 387,
    "name": "Draw Joust",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//387.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/387.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 388,
    "name": "Evolving Bombs 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//388.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/388.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 389,
    "name": "Fire and Frost Master",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//389.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/389.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 390,
    "name": "Fitness Empire",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//390.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/390.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 391,
    "name": "Flick Goal",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//391.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/391.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 392,
    "name": "Flip Master",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//392.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/392.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 393,
    "name": "Giant Wanted",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//393.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/393.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 394,
    "name": "Gun Clone",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//394.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/394.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 395,
    "name": "Gun Runner",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//395.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/395.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 396,
    "name": "Kaji Run",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//396.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/396.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 397,
    "name": "Make a SuperBoat",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//397.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/397.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 398,
    "name": "Makeover Run",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//398.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/398.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 399,
    "name": "Mega Car Jumps",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//399.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/399.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 400,
    "name": "Money Rush",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//400.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/400.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 401,
    "name": "Monster Box 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//401.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/401.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 402,
    "name": "Office Fight",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//402.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/402.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 403,
    "name": "Robot Invasion",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//403.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/403.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 404,
    "name": "Seat Jam 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//404.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/404.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 405,
    "name": "Shooting Master",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//405.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/405.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 406,
    "name": "Supermarket 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//406.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/406.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 407,
    "name": "Survive to Victory",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//407.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/407.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 408,
    "name": "Telekinesis Attack",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//408.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/408.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 409,
    "name": "Telekinesis Car",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//409.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/409.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 410,
    "name": "Telekinesis Drive",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//410.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/410.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 411,
    "name": "Telekinesis",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//411.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/411.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 413,
    "name": "Tug of War with Cars",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//413.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/413.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 414,
    "name": "Twerk Race 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//414.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/414.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 415,
    "name": "Twisted Rope 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//415.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/415.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 416,
    "name": "Wall Crawler",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//416.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/416.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 417,
    "name": "War Regions",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//417.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/417.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 418,
    "name": "Weapon Craft Run",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//418.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/418.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 419,
    "name": "Weapon Upgrade Rush",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//419.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/419.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 420,
    "name": "Weapon Scale",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//420.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/420.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 421,
    "name": "Rich Run 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//421.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/421.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 422,
    "name": "High Heels",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//422.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/422.html",
    "author": "Yandex",
    "authorLink": "https://yandex.com/games"
  },
  {
    "id": 423,
    "name": "WebFishing",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//423.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/423.html",
    "author": "LameDev",
    "authorLink": "https://store.steampowered.com/app/3146520/WEBFISHING/",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 426,
    "name": "Andy's Apple Farm",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//426.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/426.html",
    "author": "M36games",
    "authorLink": "https://m36games.itch.io/applefarm",
    "special": [
      "port"
    ]
  },
  {
    "id": 427,
    "name": "OMORI",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//427.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/427-z.html",
    "author": "Omocat",
    "authorLink": "https://omocat.com",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 428,
    "name": "Five Nights at Freddy's 4: Halloween",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//428.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/428.html",
    "author": "Scott Cawthon",
    "authorLink": "https://scottgames.com",
    "special": [
      "port"
    ]
  },
  {
    "id": 429,
    "name": "Code Editor",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//429.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/429.html",
    "author": "gn-math",
    "authorLink": "https://gn-math.github.io",
    "special": [
      "tools"
    ]
  },
  {
    "id": 430,
    "name": "10 Minutes Till Dawn",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//430.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/430.html",
    "author": "flanne",
    "authorLink": "https://store.steampowered.com/app/1966900/20_Minutes_Till_Dawn/"
  },
  {
    "id": 431,
    "name": "99 Balls",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//431.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/431.html",
    "author": "Diamond Games",
    "authorLink": "https://www.crazygames.com/game/99-balls"
  },
  {
    "id": 432,
    "name": "Abandoned",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//432.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/432.html",
    "author": "krutovig",
    "authorLink": "https://www.kongregate.com/games/krutovigor/abandoned"
  },
  {
    "id": 433,
    "name": "Yume Nikki",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//433.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/433.html",
    "author": "kikiyama",
    "authorLink": "https://store.steampowered.com/app/650700/Yume_Nikki/",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 434,
    "name": "God's Flesh",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//434.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/434.html",
    "author": "Glompyy",
    "authorLink": "https://glompyy.itch.io/gods-flesh"
  },
  {
    "id": 435,
    "name": "A Small World Cup",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//435.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/435.html",
    "author": "rujogames",
    "authorLink": "https://rujogames.itch.io/a-small-world-cup"
  },
  {
    "id": 436,
    "name": "Awesome Tanks",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//436.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/436.html",
    "author": "coolmathgames",
    "authorLink": "https://www.coolmathgames.com/0-awesome-tanks"
  },
  {
    "id": 437,
    "name": "Bouncemasters",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//437.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/437.html",
    "author": "Azur Games, Playgendary",
    "authorLink": "https://azurgames.com"
  },
  {
    "id": 438,
    "name": "Awesome Tanks 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//438.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/438.html",
    "author": "coolmathgames",
    "authorLink": "https://www.coolmathgames.com/0-awesome-tanks-2"
  },
  {
    "id": 439,
    "name": "Bank Robbery 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//439.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/439.html",
    "author": "justaliendev",
    "authorLink": "https://www.crazygames.com/game/bank-robbery-2"
  },
  {
    "id": 440,
    "name": "Celeste PICO",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//440.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/440.html",
    "author": "Matt Thorson and Noel Berry",
    "authorLink": "https://www.lexaloffle.com/bbs/?tid=2145"
  },
  {
    "id": 441,
    "name": "Kitty Toy",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//441.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/441.html",
    "author": "Rakqoi",
    "authorLink": "https://rakqoi.itch.io/kittytoy"
  },
  {
    "id": 442,
    "name": "Infinimoes",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//442.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/442.html",
    "author": "Werxzy",
    "authorLink": "https://werxzy.itch.io/infinimoes"
  },
  {
    "id": 443,
    "name": "Adventure Drivers",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//443.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/443.html",
    "author": "Domas Kazragis",
    "authorLink": "https://poki.com/en/g/adventure-drivers"
  },
  {
    "id": 444,
    "name": "Ages of Conflict",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//444.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/444.html",
    "author": "JoySpark Games",
    "authorLink": "https://play.google.com/store/apps/details?id=com.JoySparkGames.AgesofConflict"
  },
  {
    "id": 445,
    "name": "Kindergarten",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//445.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/445.html",
    "author": "Con Man Games, SmashGames and Sean Young",
    "authorLink": "https://store.steampowered.com/app/589590/Kindergarten",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 446,
    "name": "Kindergarten 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//446.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/446.html",
    "author": "Con Man Games, SmashGames and Sean Young",
    "authorLink": "https://store.steampowered.com/app/1067850/Kindergarten_2",
    "special": [
      "port"
    ]
  },
  {
    "id": 447,
    "name": "Nijika's Ahoge",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//447.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/447-e.html",
    "author": "TamaniDamani",
    "authorLink": "https://tamanidamani.itch.io/nijikas-ahoge"
  },
  {
    "id": 448,
    "name": "Aquapark.io",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//448.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/448.html",
    "author": "Voodoo",
    "authorLink": "https://play.google.com/store/apps/details?id=com.cassette.aquapark"
  },
  {
    "id": 449,
    "name": "City Smash",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//449.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/449.html",
    "author": "Paradyme Games",
    "authorLink": "https://play.google.com/store/apps/details?id=com.paradyme.citysmash"
  },
  {
    "id": 450,
    "name": "Amanda the Adventurer",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//450.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/450.html",
    "author": "MANGLEDmaw Games, DreadXP",
    "authorLink": "https://store.steampowered.com/app/2166060/Amanda_the_Adventurer",
    "special": [
      "port"
    ]
  },
  {
    "id": 451,
    "name": "Slender: The 8 Pages",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//451.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/451.html",
    "author": "Parsec Productions",
    "authorLink": "https://www.indiedb.com/games/slender-the-eight-pages/downloads/slender-v096",
    "special": [
      "port"
    ]
  },
  {
    "id": 452,
    "name": "Station 141",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//452.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/452.html",
    "author": "Maksim Chmutov",
    "authorLink": "https://booleet.itch.io/station-141"
  },
  {
    "id": 453,
    "name": "Station Saturn",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//453.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/453.html",
    "author": "Maksim Chmutov",
    "authorLink": "https://booleet.itch.io/station-saturn"
  },
  {
    "id": 454,
    "name": "BLOODMONEY!",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//454.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/454.html",
    "author": "SHROOMYCHRIST-STUDIOS",
    "authorLink": "https://shroomychrist-studios.itch.io/bloodmoney",
    "special": [
      "port"
    ]
  },
  {
    "id": 455,
    "name": "BERGENTRUCK 201x",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//455.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/455.html",
    "author": "Paledoptera",
    "authorLink": "https://gamejolt.com/games/bergentruck/1007556",
    "special": [
      "port"
    ]
  },
  {
    "id": 456,
    "name": "Undertale Yellow",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//456.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/456.html",
    "author": "Team Undertale Yellow",
    "authorLink": "https://gamejolt.com/games/UndertaleYellow/136925",
    "special": [
      "port"
    ]
  },
  {
    "id": 457,
    "name": "Raft",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//457.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/457.html",
    "author": "Redbeet Interactive, Axolot Games, Ashen Arrow",
    "authorLink": "https://store.steampowered.com/app/648800/Raft",
    "special": [
      "port"
    ]
  },
  {
    "id": 458,
    "name": "The Deadseat",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//458.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/458.html",
    "author": "Curious Fox Sox",
    "authorLink": "https://store.steampowered.com/app/3667230/The_Deadseat",
    "special": [
      "port"
    ]
  },
  {
    "id": 459,
    "name": "The Man In The Window",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//459.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/459.html",
    "author": "Zed Technician",
    "authorLink": "https://zed-technician.itch.io/the-man-from-the-window",
    "special": [
      "port"
    ]
  },
  {
    "id": 460,
    "name": "Fears to Fathom: Home Alone",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//460.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/460.html",
    "author": "Rayll",
    "authorLink": "https://store.steampowered.com/app/1671340/Fears_to_Fathom__Home_Alone",
    "special": [
      "port"
    ]
  },
  {
    "id": 461,
    "name": "Slither.io",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//461.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/461.html",
    "author": "slither.io",
    "authorLink": "http://slither.com/io"
  },
  {
    "id": 462,
    "name": "DEAD PLATE",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//462.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/462.html",
    "author": "racheldrawsthis",
    "authorLink": "https://racheldrawsthis.itch.io/dead-plate",
    "special": [
      "port"
    ]
  },
  {
    "id": 463,
    "name": "Lacey's Flash Games",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//463.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/463.html",
    "author": "ghosttundra, Euroclipse, Brand New Groove",
    "authorLink": "https://laceysflashgames.itch.io/laceys-flash-games",
    "special": [
      "port"
    ]
  },
  {
    "id": 464,
    "name": "Choppy Orc",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//464.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/464.html",
    "author": "eddynardo",
    "authorLink": "https://eddynardo.com/games/choppy-orc/"
  },
  {
    "id": 465,
    "name": "Cuphead",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//465.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/465.html",
    "author": "Studio MDHR Entertainment Inc",
    "authorLink": "https://store.steampowered.com/app/268910/Cuphead",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 466,
    "name": "Baldi's Basics Classic Remastered",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//466.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/466.html",
    "author": "Basically Games",
    "authorLink": "https://basically-games.itch.io/baldis-basics-classic-remastered",
    "special": [
      "port"
    ]
  },
  {
    "id": 467,
    "name": "Baldi's Basics Plus",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//467.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/467-updatee.html",
    "author": "Basically Games",
    "authorLink": "https://basically-games.itch.io/baldis-basics-plus",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 468,
    "name": "Hollow Knight",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//468.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/468-f.html",
    "author": "Team Cherry",
    "authorLink": "https://store.steampowered.com/app/367520/Hollow_Knight",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 469,
    "name": "sandstone",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//469.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/469.html",
    "author": "ading2210",
    "authorLink": "https://github.com/ading2210/sandstone",
    "special": [
      "tools"
    ]
  },
  {
    "id": 470,
    "name": "Doodle Jump",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//470.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/470.html",
    "author": "Marko Pusenjak",
    "authorLink": "https://play.google.com/store/apps/details?id=com.lima.doodlejump&hl=en_US&pli=1"
  },
  {
    "id": 471,
    "name": "Madness Combat: Project Nexus (classic)",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//471.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/471.html",
    "author": "Krinkels, The-Swain, cheshyre, Luis, Rebel666",
    "authorLink": "https://www.newgrounds.com/portal/view/592473",
    "special": [
      "flash"
    ]
  },
  {
    "id": 472,
    "name": "Bad Time Simulator",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//472.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/472.html",
    "author": "jcw87",
    "authorLink": "https://jcw87.github.io/c2-sans-fight/"
  },
  {
    "id": 473,
    "name": "Spacebar Clicker",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//473.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/473.html",
    "author": "Bruno Croci",
    "authorLink": "https://bruno.croci.me"
  },
  {
    "id": 474,
    "name": "Friday Night Funkin': V.S. Whitty",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//474.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/474.html",
    "author": "Nate Anim8",
    "authorLink": "https://gamebanana.com/mods/44214"
  },
  {
    "id": 475,
    "name": "Friday Night Funkin': B-Sides",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//475.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/475.html",
    "author": "Rozebud",
    "authorLink": "https://gamebanana.com/mods/42724"
  },
  {
    "id": 476,
    "name": "Friday Night Funkin': Vs. Hex",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//476.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/476.html",
    "author": "YingYang48 etc",
    "authorLink": "https://gamebanana.com/mods/44225"
  },
  {
    "id": 477,
    "name": "Friday Night Funkin': Vs. Hatsune Miku",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//477.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/477.html",
    "author": "evidal etc",
    "authorLink": "https://gamebanana.com/mods/44307"
  },
  {
    "id": 478,
    "name": "Friday Night Funkin': Neo",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//478.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/478.html",
    "author": "JellyFishedm etc",
    "authorLink": "https://gamebanana.com/mods/44230"
  },
  {
    "id": 479,
    "name": "Steal A Brainrot",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//479.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/479.html",
    "author": "nagami games",
    "authorLink": "https://yandex.com/games/app/447526"
  },
  {
    "id": 480,
    "name": "Friday Night Funkin': Sarvente's Mid-Fight Masses",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//480.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/480.html",
    "author": "Dokki.doodlez etc",
    "authorLink": "https://gamebanana.com/mods/288792"
  },
  {
    "id": 481,
    "name": "Friday Night Funkin': vs. Tricky",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//481.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/481.html",
    "author": "Banbuds etc",
    "authorLink": "https://gamebanana.com/mods/44334"
  },
  {
    "id": 482,
    "name": "Human Expenditure Program",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//482.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/482-2.html",
    "author": "SHROOMYCHRIST-STUDIOS",
    "authorLink": "https://shroomychrist-studios.itch.io/",
    "special": [
      "port"
    ]
  },
  {
    "id": 483,
    "name": "Friday Night Funkin': Hit Single Real",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//483.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/483.html",
    "author": "Sturm/Churgney Gurgney etc",
    "authorLink": "https://gamebanana.com/mods/395039"
  },
  {
    "id": 484,
    "name": "Friday Night Funkin': Creepypasta JP",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//484.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/484.html",
    "author": "CPJP Team",
    "authorLink": "https://gamebanana.com/mods/584886"
  },
  {
    "id": 485,
    "name": "Friday Night Funkin': vs. Garcello",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//485.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/485.html",
    "author": "atsuover etc",
    "authorLink": "https://gamebanana.com/mods/166531"
  },
    {
    "id": 486,
    "name": "Friday Night Funkin': Sonic Legacy",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//486.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/486.html",
    "author": "JoeDoughBoi etc",
    "authorLink": "https://gamebanana.com/mods/496733"
  },
    {
    "id": 487,
    "name": "Friday Night Funkin': vs. QT",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//487.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/487.html",
    "author": "Hazardous24 etc",
    "authorLink": "https://gamebanana.com/mods/299714"
  },
    {
    "id": 488,
    "name": "Friday Night Funkin': Mistful Crimson Morning Reboot",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//488.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/488.html",
    "author": "Stonesteve etc",
    "authorLink": "https://gamebanana.com/mods/387663"
  },
    {
    "id": 489,
    "name": "Friday Night Funkin': Indie Cross",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//489.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/489.html",
    "author": "MORØ etc",
    "authorLink": "https://gamejolt.com/games/indiecross/643540"
  },
  {
    "id": 490,
    "name": "Rooftop Snipers 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//490.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/490.html",
    "author": "Neweichgames",
    "authorLink": "https://www.neweichgames.com"
  },
    {
    "id": 491,
    "name": "I woke up next to you again.",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//491.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/491.html",
    "author": "angela he",
    "authorLink": "https://zephyo.itch.io/i-woke-up"
  },
    {
    "id": 492,
    "name": "UNDERWHEELS",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//492.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/492.html",
    "author": "LakenDaCoda",
    "authorLink": "https://www.newgrounds.com/portal/view/987750"
  },
    {
    "id": 493,
    "name": "RigBMX",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//493.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/493.html",
    "author": "Cartoon Network",
    "authorLink": "https://www.cartoonnetwork.com"
  },
   {
    "id": 494,
    "name": "RigBMX 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//494.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/494.html",
    "author": "Cartoon Network",
    "authorLink": "https://www.cartoonnetwork.com"
  },
   {
    "id": 495,
    "name": "groon groon, babey!",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//495.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/495.html",
    "author": "tanner bananer",
    "authorLink": "https://goodboytan.itch.io/gg-kart"
  },
  {
    "id": 496,
    "name": "Friday Night Funkin': Jeffy's Endless Aethos",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//496.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/496.html",
    "author": "jeffyfansml99 etc",
    "authorLink": "https://gamebanana.com/mods/504934"
  },
{
    "id": 497,
    "name": "Friday Night Funkin': vs. BOPCITY",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//497.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/497.html",
    "author": "Daniel Hummus",
    "authorLink": "https://gamebanana.com/mods/527514"
  },
{
    "id": 498,
    "name": "Friday Night Funkin': 17 Bucks: Floor 1",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//498.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/498.html",
    "author": "Peacocok6k",
    "authorLink": "https://gamebanana.com/mods/461390"
  },
  {
    "id": 499,
    "name": "Friday Night Funkin': FIRE IN THE HOLE: Lobotomy Dash Funkin'",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//499.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/499.html",
    "author": "CoolDudeCrafter",
    "authorLink": "https://gamebanana.com/mods/490658"
  },
  {
    "id": 500,
    "name": "Friday Night Funkin': TWIDDLEFINGER",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//500.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/500.html",
    "author": "MAXPROLOVER998",
    "authorLink": "https://gamebanana.com/mods/525021"
  },
  {
    "id": 501,
    "name": "Kindergarten 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//501.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/501.html",
    "author": "Con Man Games, SmashGames and Sean Young",
    "authorLink": "https://store.steampowered.com/app/2695570/Kindergarten_3/",
    "special": [
      "port"
    ]
  },
  {
    "id": 502,
    "name": "Stick With It",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//502.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/502-fixed.html",
    "author": "Sam Hogan",
    "authorLink": "https://samhogan.itch.io/stick-with-it/",
    "special": [
      "port"
    ]
  },
  {
    "id": 503,
    "name": "Five Nights at Candy's",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//503.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/503.html",
    "author": "Emil \"Ace\" Macko",
    "authorLink": "https://gamejolt.com/games/five-nights-at-candy-s-official/70253",
    "special": [
      "port"
    ]
  },
  {
    "id": 504,
    "name": "Five Nights at Candy's 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//504.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/504.html",
    "author": "Emil \"Ace\" Macko",
    "authorLink": "https://gamejolt.com/games/five-nights-at-candy-s-2-official/110234",
    "special": [
      "port"
    ]
  },
  {
    "id": 505,
    "name": "Pokemon Red",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//505.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/505.html",
    "author": "Nintendo",
    "authorLink": "https://nintendo.com",
    "special": [
      "emulator"
    ]
  },
  {
    "id": 506,
    "name": "Pokemon Emerald",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//506.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/506.html",
    "author": "Nintendo",
    "authorLink": "https://nintendo.com",
    "special": [
      "emulator"
    ]
  },
  {
    "id": 507,
    "name": "The Impossible Quiz",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//507.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/507.html",
    "author": "SPLAPP-ME-DO",
    "authorLink": "https://splapp-me-do.newgrounds.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 508,
    "name": "Super Mario Bros",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//508.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/508.html",
    "author": "Nintendo",
    "authorLink": "https://nintendo.com",
    "special": [
      "emulator"
    ]
  },
  {
    "id": 509,
    "name": "Friday Night Funkin’ Soft",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//509.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/509.html",
    "author": "ShiniTrexx etc",
    "authorLink": "https://gamebanana.com/mods/523551"
  },
  {
    "id": 510,
    "name": "Tomodachi Collection",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//510.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/510.html",
    "author": "Nintendo",
    "authorLink": "https://nintendo.com",
    "special": [
      "emulator"
    ]
  },
  {
    "id": 511,
    "name": "Doge Miner",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//511.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/511.html",
    "author": "rkn",
    "authorLink": "https://www.patreon.com/dogeminer/about"
  },
  {
    "id": 512,
    "name": "Final Earth 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//512.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/512.html",
    "author": "flori9",
    "authorLink": "https://flori9.itch.io/the-final-earth-2"
  },
  {
    "id": 513,
    "name": "Swordfight!!",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//513.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/513.html",
    "author": "Studio-19",
    "authorLink": "https://studio-19.itch.io/swordfight"
  },
  {
    "id": 514,
    "name": "PortaBoy+",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//514.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/514.html",
    "author": "Enchae, Lumpy",
    "authorLink": "https://enchae.itch.io/portaboyplus"
  },
  {
    "id": 515,
    "name": "PacMan (Horror)",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//515.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/515.html",
    "author": "BerickCook",
    "authorLink": "https://berickcook.itch.io/pacman"
  },
  {
    "id": 516,
    "name": "Oshi Oshi Punch!",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//516.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/516.html",
    "author": "Empty House Games, Shuu",
    "authorLink": "https://emptyhousegames.itch.io/oshi-oshi-punch"
  },
  {
    "id": 517,
    "name": "Nubby's Number Factory",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//517.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/517.html",
    "author": "MogDogBlog Productions",
    "authorLink": "https://mogdogblog-productions.itch.io/nubbys-number-factory",
    "special": [
      "port"
    ]
  },
  {
    "id": 518,
    "name": "Touhou: Luminous Strike",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//518.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/518.html",
    "author": "NitNitori, LadyEbony",
    "authorLink": "https://nitori.itch.io/touhou-luminous-strike"
  },
  {
    "id": 519,
    "name": "Generic Fighter Maybe",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//519.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/519.html",
    "author": "Astrobard Games, Khao Mortadios",
    "authorLink": "https://astrobardgames.itch.io/generic-fighter-maybe"
  },
  {
    "id": 520,
    "name": "Dan The Man",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//520.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/520-fix.html",
    "author": "Halfbrick Studios",
    "authorLink": "https://play.google.com/store/apps/details?id=com.halfbrick.dantheman"
  },
  {
    "id": 521,
    "name": "Bust a Loop",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//521.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/521.html",
    "author": "PeachTreeOath",
    "authorLink": "https://peachtreeoath.itch.io/bust-a-loop"
  },
  {
    "id": 522,
    "name": "Bad Monday Simulator",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//522.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/522.html",
    "author": "Lumpy, Spasco",
    "authorLink": "https://lumpytouch.itch.io/bad-monday-simulator"
  },
  {
    "id": 523,
    "name": "Touhou Mother",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//523.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/523-f.html",
    "author": "vgperson",
    "authorLink": "https://vgperson.com/games/touhoumother.htm",
    "special": [
      "port"
    ]
  },
  {
    "id": 524,
    "name": "Parappa The Rapper",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//524.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/524.html",
    "author": "NanaOn-Sha",
    "authorLink": "https://www.nanaon-sha.co.jp/",
    "special": [
      "emulator"
    ]
  },
   {
    "id": 525,
    "name": "Friday Night Funkin': Darkness Takeover",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//525.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/525.html",
    "author": "MiniSymba",
    "authorLink": "https://gamejolt.com/games/darknesstakeover/802587"
  },
  {
    "id": 526,
    "name": "SpongeBob SquarePants: Land Ho!",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//526.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/526.html",
    "author": "Nickelodeon",
    "authorLink": "https://nick.com"
  },
  {
    "id": 527,
    "name": "SpongeBob SquarePants: SpongeBob Run",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//527.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/527.html",
    "author": "Nickelodeon",
    "authorLink": "https://nick.com"
  },
  {
    "id": 528,
    "name": "SpongeBob SquarePants: Squidward's Sizzlin' Scare",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//528.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/528.html",
    "author": "Nickelodeon",
    "authorLink": "https://nick.com"
  },
  {
    "id": 529,
    "name": "SpongeBob SquarePants: Sandy's Sponge Stacker",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//529.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/529.html",
    "author": "Nickelodeon",
    "authorLink": "https://nick.com"
  },
  {
    "id": 530,
    "name": "SpongeBob SquarePants: Tasty Pastry Party",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//530.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/530.html",
    "author": "Nickelodeon",
    "authorLink": "https://nick.com"
  },
  {
    "id": 531,
    "name": "SpongeBob SquarePants: The Kah-Ray-Tay Squid",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//531.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/531.html",
    "author": "Nickelodeon",
    "authorLink": "https://nick.com"
  },
  {
    "id": 532,
    "name": "SpongeBob SquarePants: WereSquirrel",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//532.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/532.html",
    "author": "Nickelodeon",
    "authorLink": "https://nick.com"
  },
  {
    "id": 533,
    "name": "SpongeBob SquarePants: Krabby Katch",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//533.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/533.html",
    "author": "Nickelodeon",
    "authorLink": "https://nick.com"
  },
  {
    "id": 534,
    "name": "Teen Titans GO!: Jump Jousts",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//534.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/534.html",
    "author": "Cartoon Network",
    "authorLink": "https://cartoonnetwork.com"
  },
  {
    "id": 535,
    "name": "Teen Titans GO!: Jump Jousts 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//535.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/535.html",
    "author": "Cartoon Network",
    "authorLink": "https://cartoonnetwork.com"
  },
  {
    "id": 536,
    "name": "Cat Connection",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//536.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/536.html",
    "author": "MOSTLY MAD PRODUCTIONS",
    "authorLink": "https://mostlymadproductions.itch.io/cat-connection"
  },
  {
    "id": 537,
    "name": "Cat Gunner: Super Zombie Shoot",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//537.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/537.html",
    "author": "Poki",
    "authorLink": "https://poki.com/en/g/cat-gunner-super-zombie-shoot"
  },
  {
    "id": 538,
    "name": "Love Letters",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//538.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/538.html",
    "author": "Nozomu Games",
    "authorLink": "https://nozomu57.itch.io/love-letters"
  },
  {
    "id": 539,
    "name": "Chiikawa Puzzle",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//539.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/539.html",
    "author": "emptygamer",
    "authorLink": "https://emptygamer.itch.io/chiikawapuzzle"
  },
  {
    "id": 540,
    "name": "myTeardrop",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//540.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/540.html",
    "author": "VENDORMINT",
    "authorLink": "https://x.com/vendormint"
  },
  {
    "id": 541,
    "name": "Friday Night Funkin': Pibby: Apocalypse",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//541.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/541.html",
    "author": "BAUDASlel etc.",
    "authorLink": "https://gamebanana.com/wips/73842"
  },
  {
    "id": 542,
    "name": "Karlson",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//542.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/542-a.html",
    "author": "DaniDev",
    "authorLink": "https://danidev.itch.io/",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 543,
    "name": "Jelly Drift",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//543.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/543-a.html",
    "author": "DaniDev",
    "authorLink": "https://danidev.itch.io/",
    "special": [
      "port"
    ]
  },
  {
    "id": 544,
    "name": "Plinko",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//544.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/544.html",
    "author": "Anson Heung",
    "authorLink": "https://www.ansonh.com"
  },
  {
    "id": 545,
    "name": "Clash Of Vikings",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//545.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/545.html",
    "author": "unknown",
    "authorLink": "https://www.crazygames.com/game/clash-of-vikings"
  },
  {
    "id": 546,
    "name": "Recoil",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//546.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/546.html",
    "author": "Martin Magini",
    "authorLink": "https://play.fancade.com"
  },
  {
    "id": 547,
    "name": "Baseball Bros",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//547.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/547.html",
    "author": "Blue Wizard",
    "authorLink": "https://baseballbros.io"
  },
  {
    "id": 548,
    "name": "Football Bros",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//548.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/548.html",
    "author": "Blue Wizard",
    "authorLink": "https://footballbros.io" 
  },
  {
    "id": 549,
    "name": "Sonic the Hedgehog 2: Community's Cut",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//549.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/549.html",
    "author": "heyjoeway and SEGA",
    "authorLink": "https://github.com/heyjoeway/s2disasm" 
  },
    {
    "id": 550,
    "name": "Sonic the Hedgehog 3: Angel Island Remastered",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//550.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/550.html",
    "author": "Eukaryot3K and SEGA",
    "authorLink": "https://sonic3air.org/" 
  },
  {
    "id": 551,
    "name": "Hypper Sandbox",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//551.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/551.html",
    "author": "VobbyGames, weirdnessworld",
    "authorLink": "https://play.google.com/store/apps/details?id=com.Hypper&hl=en_US" 
  },
  {
    "id": 552,
    "name": "Aviamasters",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//552.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/552.html",
    "author": "BGaming",
    "authorLink": "https://bgaming.com/games/aviamasters" 
  },
  {
    "id": 553,
    "name": "Rolling Sky",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//553.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/553.html",
    "author": "Dream Playz",
    "authorLink": "https://play.google.com/store/apps/details?id=com.dreamplayz.rollingball&hl=en_US" 
  },
  {
    "id": 554,
    "name": "Yandere Simulator",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//554.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/554.html",
    "author": "YandereDev",
    "authorLink": "https://yanderesimulator.com/",
    "special": [
      "port"
    ]
  },
  {
    "id": 555,
    "name": "Friday Night Funkin VS. KAPI",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//555.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/555.html",
    "author": "paperkitty etc",
    "authorLink": "https://gamebanana.com/mods/44683" 
  },
  {
    "id": 556,
    "name": "Friday Night Funkin VS. Sky",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//556.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/556.html",
    "author": "Alexander0110 etc",
    "authorLink": "https://gamebanana.com/mods/44555" 
  },
  {
    "id": 557,
    "name": "Getting Over It with Bennett Foddy",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//557.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/557.html",
    "author": "Bennett Foddy",
    "authorLink": "https://store.steampowered.com/app/240720/Getting_Over_It_with_Bennett_Foddy/",
    "special": [
      "port"
    ]
  },
  {
    "id": 558,
    "name": "Friday Night Funkin Vs. Cyber Sensation",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//558.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/558.html",
    "author": "Taeyai",
    "authorLink": "https://gamebanana.com/mods/319101" 
  },
  {
    "id": 559,
    "name": "Friday Night Funkin vs Shaggy",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//559.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/559.html",
    "author": "srPerez etc",
    "authorLink": "https://gamebanana.com/mods/284121" 
  },
  {
    "id": 560,
    "name": "Deltatraveler",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//560.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/560.html",
    "author": "VyletBunni",
    "authorLink": "https://gamejolt.com/games/deltatraveler/661464",
    "special": [
      "port"
    ]
  },
  {
    "id": 561,
    "name": "BitGun.io",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//561.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/561.html",
    "author": "Hazmob",
    "authorLink": "https://www.crazygames.com/game/bit-gun-io" 
  },
  {
    "id": 562,
    "name": "Boom Slingers: Reboom",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//562.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/562.html",
    "author": "Boom Corp",
    "authorLink": "https://www.boomslingers.com/" 
  },
  {
    "id": 563,
    "name": "CG FC 25",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//563.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/563.html",
    "author": "Finz Games",
    "authorLink": "https://www.finz.io/" 
  },
  {
    "id": 564,
    "name": "Count Masters: Stickman Games",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//564.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/564.html",
    "author": "FreePlay LLC",
    "authorLink": "https://www.crazygames.com/game/count-masters-stickman-games" 
  },
  {
    "id": 565,
    "name": "Dalgona Candy Honeycomb Cookie",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//565.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/565.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 567,
    "name": "Highway Racer",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//567.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/567.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 568,
    "name": "Highway Racer 2 REMASTERED",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//568.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/568.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 569,
    "name": "Hula Hoop Race",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//569.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/569.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 570,
    "name": "Jelly Restaurant",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//570.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/570.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 571,
    "name": "Layers Roll",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//571.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/571.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 572,
    "name": "Lazy Jumper",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//572.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/572.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 573,
    "name": "Man Runner 2048",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//573.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/573.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 574,
    "name": "Pottery Master",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//574.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/574.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 575,
    "name": "Shovel 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//575.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/575.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 576,
    "name": "Sky Riders",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//576.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/576.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 577,
    "name": "Steal Brainrot Online",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//577.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/577.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 578,
    "name": "Stickman and Guns",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//578.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/578.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 579,
    "name": "Super Star Car",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//579.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/579.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 580,
    "name": "Traffic Rider",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//580.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/580.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 581,
    "name": "BuildNow.gg",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//581.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/581.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 582,
    "name": "Friday Night Funkin': Mario's Madness",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//582.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/582.html",
    "author": "Dewott2501 etc",
    "authorLink": "https://gamebanana.com/mods/359554" 
  },
  {
    "id": 583,
    "name": "Friday Night Funkin' vs Hypno Lullaby",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//583.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/583.html",
    "author": "Hypno Lullaby Team",
    "authorLink": "https://gamejolt.com/games/hypnos-lullabyv2cancelled/758792" 
  },
  {
    "id": 584,
    "name": "Stone Grass Mowing Simulator",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//584-a.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/584.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 585,
    "name": "Fallout",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//585.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/585.html",
    "author": "Bethesda Softworks",
    "authorLink": "https://bethesda.net/en/dashboard",
    "special": [
      "port"
    ]
  },
  {
    "id": 586,
    "name": "The Oregon Trail",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//586.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/586.html",
    "author": "MECC",
    "authorLink": "https://archive.org/details/msdos_Oregon_Trail_The_1990" 
  },
  {
    "id": 587,
    "name": "Newgrounds Rumble",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//587.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/587.html",
    "author": "NegativeONE, Luis, MindChamber",
    "authorLink": "https://www.newgrounds.com/portal/view/381115",
    "special": [
      "flash"
    ]
  },
  {
    "id": 588,
    "name": "Super Mario 64",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//588.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/588.html",
    "author": "Nintendo",
    "authorLink": "https://nintendo.com",
    "special": [
      "port"
    ]
  },
  {
    "id": 589,
    "name": "Sonic CD",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//589.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/589.html",
    "author": "SEGA",
    "authorLink": "https://sega.com",
    "special": [
      "port"
    ]
  },
  {
    "id": 590,
    "name": "Sonic Mania",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//590.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/590.html",
    "author": "SEGA",
    "authorLink": "https://sega.com",
    "special": [
      "port"
    ]
  },
  {
    "id": 591,
    "name": "Slime Rancher",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//591.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/591-a.html",
    "author": "Monomi Park, Ported by Snubby.top",
    "authorLink": "https://monomipark.com/",
    "special": [
      "port"
    ],
    "featured": true
  },
  {
    "id": 592,
    "name": "Pac Man World",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//592.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/592.html",
    "author": "Full Fat Games",
    "authorLink": "https://www.full-fat.com/",
    "special": [
      "emulator"
    ]
  },
  {
    "id": 593,
    "name": "Pac Man World 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//593.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/593-f.html",
    "author": "Full Fat Games",
    "authorLink": "https://www.full-fat.com/",
    "special": [
      "emulator"
    ]
  },
  {
    "id": 594,
    "name": "Waterworks!",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//594.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/594.html",
    "author": "scriptwelder",
    "authorLink": "https://scriptwelder.itch.io/waterworks" 
  },
  {
    "id": 595,
    "name": "Shapez.io",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//595.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/595.html",
    "author": "scriptwelder",
    "authorLink": "https://scriptwelder.itch.io/waterworks" 
  },
  {
    "id": 596,
    "name": "[!] COMMENTS",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//596-uu.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/596-u.html",
    "author": "gn-math",
    "authorLink": "https://gn-math.github.io",
    "featured": true,
    "special": [
      "tools"
    ]
  },
  {
    "id": 597,
    "name": "Plants vs. Zombies 2 Gardenless",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//597.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/597-a.html",
    "author": "Gzh0821",
    "authorLink": "https://pvzge.com/en/" 
  },
  {
    "id": 598,
    "name": "Sonic.EXE",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//598.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/598.html",
    "author": " Cinossu",
    "authorLink": "https://info.sonicretro.org/An_Ordinary_Sonic_ROM_Hack" ,
    "special": [
      "emulator"
    ]
  },
  {
    "id": 599,
    "name": "Metal Gear Solid",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//599.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/599.html",
    "author": " Konami Computer Entertainment Japan",
    "authorLink": "https://www.konami.com/" ,
    "special": [
      "emulator"
    ]
  },
  {
    "id": 600,
    "name": "FNF Vs. Hypno's Lullaby v2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//600.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/600.html",
    "author": "Hypno's Lullaby Team",
    "authorLink": "https://gamebanana.com/wips/73522" ,
    "special": [
      "fnf"
    ]
  },
  {
    "id": 601,
    "name": "FNF Vs. Sonic.EXE 3.0/4.0",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//601.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/601.html",
    "author": "FNF Vs. Sonic.EXE Team",
    "authorLink": "https://gamebanana.com/mods/531361" ,
    "special": [
      "fnf"
    ]
  },
  {
    "id": 602,
    "name": "Doom 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//602.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/602.html",
    "author": "id Software",
    "authorLink": "https://www.idsoftware.com/" ,
    "special": [
      "emulator"
    ]
  },
  {
    "id": 603,
    "name": "Growden.io",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//603.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/603-aa.html",
    "author": "growden.io",
    "authorLink": "https://growden.io/"
  },
  {
    "id": 604,
    "name": "Minesweeper Plus",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//604.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/604-a.html",
    "author": "Jorel Simpson",
    "authorLink": "https://jorel-simpson.itch.io/minesweeper-plus",
    "special": [
      "port"
    ]
  },
  {
    "id": 605,
    "name": "Schoolboy Runaway",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//605.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/605-e.html",
    "author": "Linked Squad",
    "authorLink": "https://linked-squad.com/",
    "special": [
      "port"
    ],
    "featured": true
  },
  {
    "id": 606,
    "name": "Sonic.EXE (ORIGINAL)",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//606.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/606-e.html",
    "author": "MY5TCrimson",
    "authorLink": "https://gamejolt.com/games/sonic-exe-the-game/16239",
    "special": [
      "port"
    ]
  },
  {
    "id": 607,
    "name": "Tattletail",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//607.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/607-e.html",
    "author": "Waygetter Electronics, Ported by Snubby.top",
    "authorLink": "https://store.steampowered.com/app/568090/Tattletail/",
    "special": [
      "port"
    ],
    "featured": true
  },
  {
    "id": 608,
    "name": "Friday Night Funkin VS Impostor v4",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//608.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/608.html",
    "author": "Imposter v4 team",
    "authorLink": "https://gamebanana.com/mods/55652" ,
    "special": [
      "fnf"
    ]
  },
  {
    "id": 609,
    "name": "Friday Night Funkin vs Sunday Remastered HD",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//609.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/609-a.html",
    "author": "Sunday Remastered team",
    "authorLink": "https://gamebanana.com/mods/323254" ,
    "special": [
      "fnf"
    ]
  },
  {
    "id": 610,
    "name": "Friday Night Funkin vs Carol V2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//610.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/610.html",
    "author": "Carol V2 team",
    "authorLink": "https://gamebanana.com/mods/42811" ,
    "special": [
      "fnf"
    ]
  },
  {
    "id": 611,
    "name": "The Legend of Zelda Ocarina of Time",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//611.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/611.html",
    "author": "Nintendo",
    "authorLink": "https://nintendo.com",
    "special": [
      "emulator",
      "n64"
    ]
  },
  {
    "id": 612,
    "name": "The Legend of Zelda Majora's Mask",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//612.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/612.html",
    "author": "Nintendo",
    "authorLink": "https://nintendo.com",
    "special": [
      "emulator",
      "n64"
    ]
  },
  {
    "id": 613,
    "name": "Friday Night Funkin' Drop and Roll, but Playable",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//613.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/613.html",
    "author": "Drop and roll team",
    "authorLink": "https://gamebanana.com/mods/514851" ,
    "special": [
      "fnf"
    ]
  },
  {
    "id": 614,
    "name": "Toy Rider",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//614.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/614.html",
    "author": "CrazyGames",
    "authorLink": "https://www.crazygames.com/" 
  },
  {
    "id": 615,
    "name": "Friday Night Funkin Vs. Dave and Bambi v3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//615.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/615.html-a",
    "author": "Dave and Bambi team",
    "authorLink": "https://gamebanana.com/mods/43201" ,
    "special": [
      "fnf"
    ]
  },
  {
    "id": 616,
    "name": "Friday Night Funkin’ Wednesday's Infidelity",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//616.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/616.html",
    "author": "Wednesday's Infidelity team",
    "authorLink": "https://gamebanana.com/mods/343688" ,
    "special": [
      "fnf"
    ]
  },
  {
    "id": 617,
    "name": "Postal",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//617.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/617-a.html",
    "author": "Stinkalistic, Running With Scissors",
    "authorLink": "https://runningwithscissors.com/" 
  },
  {
    "id": 618,
    "name": "FNF vs Bob v2.0 (Bob’s Onslaught)",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//618.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/618.html",
    "author": "bob v2.0 team",
    "authorLink": "https://gamebanana.com/mods/621085" ,
    "special": [
      "fnf"
    ]
  },
  {
    "id": 619,
    "name": "Friday Night Funkin': Rev-Mixed",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//619.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/619.html",
    "author": "Rev-Mixed team",
    "authorLink": "https://gamebanana.com/mods/621085" ,
    "special": [
      "fnf"
    ]
  },
  {
    "id": 620,
    "name": "Three Goblets",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//620.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/620.html",
    "author": "Adventale",
    "authorLink": "https://adventale.net/play/three-goblets/" 
  },
  {
    "id": 621,
    "name": "Friday Night Funkin': Gumballs",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//621.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/621.html",
    "author": "Gumballs team",
    "authorLink": "https://gamebanana.com/mods/614094" ,
    "special": [
      "fnf"
    ]
  },
  {
    "id": 622,
    "name": "Oneshot (LEGACY)",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//622.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/622.html",
    "author": "Future Cat LLC, ARandomPerson",
    "authorLink": "https://store.steampowered.com/app/420530/OneShot/",
    "special": [
      "port"
    ],
    "featured": true
  },
  {
    "id": 623,
    "name": "Celeste",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//623.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/623-work.html",
    "author": "MaddyMakesGames, Mercury Workshop",
    "authorLink": "https://store.steampowered.com/app/504230/Celeste/",
    "special": [
      "port"
    ],
    "featured": true
  },
  {
    "id": 624,
    "name": "Happy Wheels",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//624.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/624.html",
    "author": "Jim Bonacci",
    "authorLink": "https://totaljerkface.com/"
  },
  {
    "id": 625,
    "name": "Get Yoked",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//625.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/625.html",
    "author": "gregs games",
    "authorLink": "https://gregs-games.itch.io/get-yoked-2"
  },
  {
    "id": 626,
    "name": "Doom 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//626.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/626-f.html",
    "author": "id Software, 98corbins",
    "authorLink": "https://www.idsoftware.com",
    "special": [
      "port"
    ]
  },
  {
    "id": 627,
    "name": "Tag",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//627.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/627.html",
    "author": "WeLoPlay",
    "authorLink": "https://www.weloplay.com/"
  },
  {
    "id": 628,
    "name": "Pizza Tower: Scoutdigo",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//628.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/628-f.html",
    "author": "only1indigo, burnedpopcorn",
    "authorLink": "https://gamebanana.com/wips/75923",
    "special": [
      "port"
    ]
  },
  {
    "id": 629,
    "name": "Off",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//629.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/629.html",
    "author": "Mortis Ghost, Fangamer",
    "authorLink": "https://store.steampowered.com/app/3339880/OFF/"
  },
  {
    "id": 630,
    "name": "Space Funeral",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//630.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/630.html",
    "author": "Stephen Gillmurphy",
    "authorLink": "https://thecatamites.itch.io/space-funeral"
  },
  {
    "id": 631,
    "name": "Endroll",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//631.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/631-a.html",
    "author": " Segawa",
    "authorLink": "https://vgperson.com/games/endroll.htm"
  },
  {
    "id": 632,
    "name": "Cave Story",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//632.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/632-a.html",
    "author": " Daisuke 'Pixel' Amaya",
    "authorLink": "https://www.cavestory.org/"
  },
  {
    "id": 633,
    "name": "Friday Night Funkin': VS. Impostor: Alternated",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//633.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/633.html",
    "author": "Alternated team",
    "authorLink": "https://gamebanana.com/mods/598215" ,
    "special": [
      "fnf"
    ]
  },
  {
    "id": 634,
    "name": "Friday Night Funkin': Chaos Nightmare - Sonic Vs. Fleetway",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//634.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/634.html",
    "author": "Fleetway team",
    "authorLink": "https://gamebanana.com/mods/359046" ,
    "special": [
      "fnf"
    ]
  },
  {
    "id": 635,
    "name": "Spelunky Classic HD",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//635.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/635.html",
    "author": " nkrapivin",
    "authorLink": "https://yancharkin.itch.io/spelunky-classic-hd"
  },
  {
    "id": 636,
    "name": "Friday Night Funkin' D-Sides",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//636.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/636.html",
    "author": "d-sides team",
    "authorLink": "https://gamebanana.com/mods/305122",
    "special": [
      "fnf"
    ]
  },
  {
    "id": 637,
    "name": "BFDIA 5b",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//637.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/637-f.html",
    "author": "Cary Huang",
    "authorLink": "https://x.com/realCarykh",
    "special": [
      "flash"
    ]
  },
  {
    "id": 638,
    "name": "BFDIA 5b: 5*30",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//638.gif",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/638-f.html",
    "author": "Mawilite, Cary Huang",
    "authorLink": "https://x.com/Mega_Mawilite",
    "special": [
      "flash"
    ]
  },
  {
    "id": 639,
    "name": "Friday Night Funkin' VS Impostor B-Sides",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//639.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/639.html",
    "author": "Imposter b-sides team",
    "authorLink": "https://gamebanana.com/mods/504519",
    "special": [
      "fnf"
    ]
  },
  {
    "id": 640,
    "name": "Mutilate a Doll 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//640.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/640.html",
    "author": "SilverGames",
    "authorLink": "https://www.newgrounds.com/portal/view/655001",
    "special": [
      "flash"
    ]
  },
  {
    "id": 641,
    "name": "Godzilla Daikaiju Battle Royale",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//641.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/641.html",
    "author": "AWM Studio Productions LLC",
    "authorLink": "https://archive.org/details/gdbr_20210915",
    "special": [
      "flash"
    ]
  },
  {
    "id": 642,
    "name": "Friday Night Funkin' Sunday Night Suicide: Rookies Edition",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//642.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/642.html",
    "author": "Rookies team",
    "authorLink": "https://gamebanana.com/mods/503587",
    "special": [
      "fnf"
    ]
  },
  {
    "id": 643,
    "name": "Rio Rex",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//643.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/643.html",
    "author": "Gametornado",
    "authorLink": "https://store.steampowered.com/app/868830/Rio_Rex/"
  },
  {
    "id": 644,
    "name": "Friday Night Funkin vs Nonsense",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//644.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/644.html",
    "author": "NonsenseNH",
    "authorLink": "https://www.youtube.com/channel/UCnp4LuZgNt0KwiTMSZN7GIw",
    "special": [
      "fnf"
    ]
  },
  {
    "id": 645,
    "name": "Arthur's Nightmare",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//645.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/645-e.html",
    "author": "Varun R.",
    "authorLink": "https://varunramesh.itch.io/arthurs-nightmare",
    "special": [
      "port"
    ]
  },
  {
    "id": 646,
    "name": "Buster Jam",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//646.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/646-fixed.html",
    "author": "TALL GLASS",
    "authorLink": "https://www.tallglassgames.com/",
    "special": [
      "port"
    ]
  },
  {
    "id": 647,
    "name": "Super Smash Flash",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//647.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/647.html",
    "author": "McLeodGaming",
    "authorLink": "https://www.mcleodgaming.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 648,
    "name": "Mindwave",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//648.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/648-el.html",
    "author": "HoloHammer",
    "authorLink": "https://store.steampowered.com/app/2701030/MINDWAVE/",
    "special": [
      "port"
    ]
  },
  {
    "id": 649,
    "name": "Look Outside",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//649.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/649.html",
    "author": "Francis Coulombe",
    "authorLink": "https://store.steampowered.com/app/3373660/Look_Outside/",
    "special": [
      "port"
    ]
  },
  {
    "id": 650,
    "name": "Milk Inside a Bag of Milk Inside a Bag of Milk",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//650.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/650-f.html",
    "author": "Nikita Kryukov",
    "authorLink": "https://nikita-kryukov.itch.io/",
    "special": [
      "port"
    ]
  },
  {
    "id": 651,
    "name": "Milk Outside A Bag Of Milk Outside A Bag Of Milk",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//651.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/651.html",
    "author": "Nikita Kryukov",
    "authorLink": "https://nikita-kryukov.itch.io/",
    "special": [
      "port"
    ]
  },
  {
    "id": 653,
    "name": "1 Date Danger",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//653.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/653-f.html",
    "author": "Knives",
    "authorLink": "https://mawedgone.itch.io/1-date-danger"
  },
  {
    "id": 654,
    "name": "Final Fantasy VII",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//654.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/654.html",
    "author": "Square Enix",
    "authorLink": "https://ffvii.square-enix-games.com/en-us"
  },
  {
    "id": 655,
    "name": "Goblin Goopmaxxing",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//655.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/655.html",
    "author": "BugfightStudio",
    "authorLink": "https://store.steampowered.com/app/4107470/Goblin_Goopmaxxing/"
  },
  {
    "id": 656,
    "name": "Rogue Sergeant The Final Operation",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//656.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/656.html",
    "author": "Studiohammergames",
    "authorLink": "https://studiohammergames.itch.io/rogue-sergeant-the-final-operation"
  },
  {
    "id": 657,
    "name": "Friday Night Funkin vs Undertale",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//657.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/657.html",
    "author": "vs undertale team",
    "authorLink": "https://gamebanana.com/mods/342415"
  },
  {
    "id": 658,
    "name": "Midnight Shift",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//658.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/658.html",
    "author": "Phantom GD",
    "authorLink": "https://phantom-gd.itch.io/midnight-shift",
    "special": [
      "port"
    ]
  },
  {
    "id": 659,
    "name": "Orange Roulette",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//659.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/659.html",
    "author": "Matzerath",
    "authorLink": "https://www.newgrounds.com/portal/view/596354",
    "special": [
      "flash"
    ]
  },
  {
    "id": 660,
    "name": "Please Dont Touch Anything",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//660.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/660.html",
    "author": "Four Quarters",
    "authorLink": "https://store.steampowered.com/app/354240/Please_Dont_Touch_Anything/"
  },
  {
    "id": 661,
    "name": "Royal Towers: Medieval TD",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//661.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/661.html",
    "author": "Superplus Games",
    "authorLink": "https://play.google.com/store/apps/details?id=com.superplusgames.tower"
  },
  {
    "id": 662,
    "name": "Going Balls",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//662.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/662.html",
    "author": "Supersonic Studios LTD",
    "authorLink": "https://play.google.com/store/apps/details?id=com.pronetis.ironball2"
  },
  {
    "id": 663,
    "name": "3D Bolt Master",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//663.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/663.html",
    "author": "Joymaster Puzzle Game Studio",
    "authorLink": "https://play.google.com/store/apps/details?id=com.screw3d.match.nuts.bolts.pin.jam.away.puzzle"
  },
  {
    "id": 664,
    "name": "Tall.io",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//664.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/664.html",
    "author": "Playgama",
    "authorLink": "https://playgama.com/"
  },
  {
    "id": 665,
    "name": "Match Triple 3D",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//665.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/665.html",
    "author": "LIHUHU PTE. LTD.",
    "authorLink": "https://play.google.com/store/apps/details?id=and.lihuhu.machingtriple&hl=en_US"
  },
  {
    "id": 666,
    "name": "Stick War: Legacy",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//666.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/666.html",
    "author": "Max Games Studios",
    "featured": true,
    "authorLink": "https://play.google.com/store/apps/details/Stick+War:+Legacy?id=com.maxgames.stickwarlegacy&hl=en_ZA"
  },
  {
    "id": 667,
    "name": "In Stars and Time",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//667.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/667-fix.html",
    "author": "insertdisc5",
    "authorLink": "https://store.steampowered.com/app/1677310/In_Stars_And_Time/",
    "special": [
      "port"
    ]
  },
  {
    "id": 668,
    "name": "Gorilla Tag",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//668.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/668-fix2.html",
    "author": "Another Axiom Inc, Boolonx",
    "authorLink": "https://boolonx.com/gtag/?utm_source=gn-math.dev&utm_medium=referral&utm_campaign=gn-math.dev",
    "special": [
      "port"
    ]
  },
  {
    "id": 669,
    "name": "Terraria",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//669.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/669.html",
    "author": "Re-Logic, Mercury Workshop",
    "authorLink": "https://terraria.org/",
    "featured": true,
    "special": [
      "port"
    ]
  },
  {
    "id": 670,
    "name": "Raldi's Crackhouse",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//670.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/670.html",
    "author": "RCHTeam, Grayson",
    "authorLink": "https://gamejolt.com/games/raldicrackhouse/769103",
    "special": [
      "port"
    ]
  },
  {
    "id": 671,
    "name": "We Become What We Behold",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//671.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/671.html",
    "author": "Ncase",
    "authorLink": "https://ncase.itch.io/wbwwb"
  },
  {
    "id": 672,
    "name": "A Difficult Game About Climbing",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//672.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/672-2.html",
    "author": "Pontypants",
    "authorLink": "https://store.steampowered.com/app/2497920/A_Difficult_Game_About_Climbing/",
    "special": [
      "port"
    ]
  },
  {
    "id": 673,
    "name": "Hobo 1",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//673.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/673.html",
    "author": "SeethingSwarm",
    "authorLink": "https://seethingswarm.newgrounds.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 674,
    "name": "Hobo 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//674.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/674.html",
    "author": "SeethingSwarm",
    "authorLink": "https://seethingswarm.newgrounds.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 675,
    "name": "Hobo 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//675.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/675.html",
    "author": "SeethingSwarm",
    "authorLink": "https://seethingswarm.newgrounds.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 676,
    "name": "Hobo 4",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//676.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/676.html",
    "author": "SeethingSwarm",
    "authorLink": "https://seethingswarm.newgrounds.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 677,
    "name": "Hobo 5",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//677.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/677.html",
    "author": "SeethingSwarm",
    "authorLink": "https://seethingswarm.newgrounds.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 678,
    "name": "Hobo 6",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//678.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/678.html",
    "author": "SeethingSwarm",
    "authorLink": "https://seethingswarm.newgrounds.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 679,
    "name": "Hobo 7",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//679.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/679.html",
    "author": "SeethingSwarm",
    "authorLink": "https://seethingswarm.newgrounds.com/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 680,
    "name": "Kirby Super Star Ultra",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//680.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/680.html",
    "author": "Nintendo",
    "authorLink": "https://nintendo.com",
    "special": [
      "emulator"
    ]
  },
  {
    "id": 681,
    "name": "Cooking Mama",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//681.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/681.html",
    "author": "Office Create",
    "authorLink": "https://www.cookingmama.com/",
    "special": [
      "emulator"
    ]
  },
  {
    "id": 682,
    "name": "Cooking Mama 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//682.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/682.html",
    "author": "Office Create",
    "authorLink": "https://www.cookingmama.com/",
    "special": [
      "emulator"
    ]
  },
  {
    "id": 683,
    "name": "Cooking Mama 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//683.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/683.html",
    "author": "Office Create",
    "authorLink": "https://www.cookingmama.com/",
    "special": [
      "emulator"
    ]
  },
  {
    "id": 684,
    "name": "Kirby Squeak Squad",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//684.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/684.html",
    "author": "Nintendo",
    "authorLink": "https://nintendo.com",
    "special": [
      "emulator"
    ]
  },
  {
    "id": 685,
    "name": "FIFA 11",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//685.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/685.html",
    "author": "EA Sports",
    "authorLink": "https://ea.com",
    "special": [
      "emulator"
    ]
  },
  {
    "id": 686,
    "name": "FIFA 10",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//686.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/686.html",
    "author": "EA Sports",
    "authorLink": "https://ea.com",
    "special": [
      "emulator"
    ]
  },
  {
    "id": 687,
    "name": "Pico's School (1999)",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//687.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/687.html",
    "author": "Tom Fulp",
    "authorLink": "https://www.newgrounds.com/portal/view/310349",
    "special": [
      "flash"
    ]
  },
  {
    "id": 688,
    "name": "Peggle",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//688.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/688.html",
    "author": "PopCap Games",
    "authorLink": "https://store.steampowered.com/app/3480/Peggle_Deluxe/",
    "special": [
      "flash"
    ]
  },
  {
    "id": 689,
    "name": "Meatboy",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//689.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/689.html",
    "author": "Jonathan McEntee",
    "authorLink": "https://www.newgrounds.com/portal/view/463241",
    "special": [
      "flash"
    ]
  },
   {
    "id": 690,
    "name": "Friday Night Funkin': AKAGE",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//690.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/690.html",
    "author": "owoskitty etc",
    "authorLink": "https://gamebanana.com/mods/578842" ,
    "special": [
      "fnf"
    ]
  },
  {
    "id": 691,
    "name": "Friday Night Funkin': Heartbreak Havoc [Vs. Sky: REDUX]",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//691.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/691.html",
    "author": "REDUX Team",
    "authorLink": "https://gamebanana.com/mods/632935" ,
    "special": [
      "fnf"
    ]
  },
  {
    "id": 692,
    "name": "Kirby ~ Soft & Wet",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//692.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/692.html",
    "author": "Strimp's Kitchen",
    "authorLink": "https://strimps-kitchen.itch.io/kirby-soft-and-wet" ,
    "special": [
      "port"
    ]
  },
  {
    "id": 693,
    "name": "Half Life: Opposing Force",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//693.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/693.html",
    "author": "Valve",
    "authorLink": "https://www.valvesoftware.com/en/",
    "special": [
      "port"
    ]
  },
  {
    "id": 694,
    "name": "Pokemon Firered",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//694.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/694.html",
    "author": "Nintendo",
    "authorLink": "https://www.nintendo.com/",
    "special": [
      "emulator",
      "gba"
    ]
  },
  {
    "id": 695,
    "name": "Duck Life 8",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//695.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/695.html",
    "author": "Wix Games",
    "authorLink": "https://www.wixgames.co.uk/",
    "special": [
      "port"
    ]
  },
  {
    "id": 696,
    "name": "Pokemon HeartGold",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//696.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/696.html",
    "author": "Nintendo",
    "authorLink": "https://www.nintendo.com/",
    "special": [
      "emulator",
      "nds"
    ]
  },
  {
    "id": 697,
    "name": "Bank Robbery",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//697.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/697.html",
    "author": "justaliendev",
    "authorLink": "https://www.crazygames.com/game/bank-robbery"
  },
  {
    "id": 698,
    "name": "Bank Robbery 3",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//698.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/698.html",
    "author": "justaliendev",
    "authorLink": "https://www.crazygames.com/game/bank-robbery-3"
  },
  {
    "id": 699,
    "name": "Stickman Destruction",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//699.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/699.html",
    "author": "freezenova",
    "authorLink": "https://unblocked-games.s3.amazonaws.com/index.html"
  },
  {
    "id": 700,
    "name": "FNF vs Pibby Corrupted",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//700.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/700.html",
    "author": "Pibby Corrupted team",
    "authorLink": "https://gamebanana.com/mods/download/344757" ,
    "special": [
      "fnf"
    ]
  },
  {
    "id": 701,
    "name": "Real Flight Simulator",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//701.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/701.html",
    "author": "freezenova",
    "authorLink": "https://unblocked-games.s3.amazonaws.com/index.html" 
  },
  {
    "id": 702,
    "name": "JavascriptPS1",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//702.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/702.html",
    "author": "Alex Ashnov",
    "authorLink": "https://github.com/AlexAshnovSrc/JavascriptPS1"
  },
  {
    "id": 703,
    "name": "VS Rewrite: ROUND 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//703.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/703.html",
    "author": "Rewrite team",
    "authorLink": "https://gamebanana.com/mods/599931",
    "special": [
      "fnf"
    ]
  },
  {
    "id": 704,
    "name": "Five Nights at Freddy's: World Refreshed",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//704.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/704-fix.html",
    "author": "Pyturret, Willowy (squall.cc)",
    "authorLink": "https://squall.cc?utm_source=gn-math.dev&utm_medium=referral&utm_campaign=gn-math.dev",
    "special": [
      "port"
    ]
  },
  {
    "id": 705,
    "name": "Iron Lung",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//705.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/705-fix.html",
    "author": "David Szymanski, 98corbins",
    "authorLink": "https://store.steampowered.com/app/1846170/Iron_Lung/",
    "special": [
      "port"
    ],
    "featured": true
  },
  {
    "id": 706,
    "name": "Fear & Hunger",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//706.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/706-fix.html",
    "author": "Miro Haverinen, Happy Paintings",
    "authorLink": "https://store.steampowered.com/app/1002300/Fear__Hunger/",
    "special": [
      "port"
    ]
  },
  {
    "id": 707,
    "name": "Traffic Racer",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//707.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/707-fix.html",
    "author": "skgames, madkidgames",
    "authorLink": "https://play.google.com/store/apps/details?id=com.skgames.trafficracer&hl=en_US"
  },
  {
    "id": 708,
    "name": "Needy Streamer Overload",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//708.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/708-fix.html",
    "author": "WSS playground, EDURocks",
    "authorLink": "https://edurocks.org?utm_source=gn-math.dev&utm_medium=referral&utm_campaign=gn-math.dev",
    "special": [
      "port"
    ]
  },
  {
    "id": 709,
    "name": "Survivor.io",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//709.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/709-fixagain.html",
    "author": "Habby Pte. Ltd, madkidgames",
    "authorLink": "https://play.google.com/store/apps/details?id=com.dxx.firenow"
  },
  {
    "id": 710,
    "name": "Five Nights at Epstein's",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//710.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/710-fix.html",
    "author": "EvanProductions",
    "authorLink": "https://evanproductions.itch.io/five-nights-at-epsteins",
    "special": [
      "port"
    ],
    "featured": true
  },
  {
    "id": 711,
    "name": "Antonblast",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//711.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/711.html",
    "author": "Summitsphere",
    "authorLink": "https://store.steampowered.com/app/1887400/ANTONBLAST/",
    "special": [
      "port"
    ],
    "featured": true
  },
  {
    "id": 712,
    "name": "Jumbo Mario",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//712.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/712-f.html",
    "author": "wik",
    "authorLink": "https://mfgg.net/index.php?act=resdb&param=02&c=2&id=41730",
    "special": [
      "port"
    ]
  },
  {
    "id": 713,
    "name": "Silent Hill",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//713.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/713.html",
    "author": "Konami, Team Silent",
    "authorLink": "https://www.konami.com",
    "special": [
      "emulator"
    ]
  },
  {
    "id": 714,
    "name": "Friday Night Funkin vs Tabi",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//714.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/714.html",
    "author": "SangMareZG",
    "authorLink": "https://gamebanana.com/mods/587524",
    "special": [
      "fnf"
    ]
  },
  {
    "id": 715,
    "name": "Friday Night Funkin vs Zardy",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//715.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/715.html",
    "author": "SwankyBox",
    "authorLink": "https://gamebanana.com/mods/44366",
    "special": [
      "fnf"
    ]
  },
  {
    "id": 716,
    "name": "Clover Pit",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//716.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/716-fix2.html",
    "author": "Panik Arcade",
    "authorLink": "https://store.steampowered.com/app/3314790/CloverPit/",
    "special": [
      "port"
    ],
    "featured": true
  },
  {
    "id": 717,
    "name": "Peaks of Yore",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//717.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/717-fix2.html",
    "author": "Anders Grube Jensen",
    "authorLink": "https://store.steampowered.com/app/2236070/Peaks_of_Yore/",
    "special": [
      "port"
    ]
  },
  {
    "id": 718,
    "name": "Untitled Goose Game",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//718.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/718.html",
    "author": "House House",
    "authorLink": "https://store.steampowered.com/app/837470/Untitled_Goose_Game/",
    "special": [
      "port"
    ],
    "featured": true
  },
  {
    "id": 719,
    "name": "A Game About Feeding A Black Hole",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//719.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/719.html",
    "author": "Aarimous, Thornityco",
    "authorLink": "https://store.steampowered.com/app/3694480/A_Game_About_Feeding_A_Black_Hole/"
  },
  {
    "id": 720,
    "name": "Roulette Hero",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//720.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/720.html",
    "author": "vfqd, Mr.Pootsley, Jaybooty, Kane Forster, shxyder",
    "authorLink": "https://vfqd.itch.io/roulette-hero"
  },
  {
    "id": 721,
    "name": "Shift at Midnight",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//721.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/721.html",
    "author": "Bun Muen, Slqnt",
    "authorLink": "https://bunmuen.itch.io/shiftatmidnight",
    "special": [
      "port"
    ]
  },
  {
    "id": 722,
    "name": "Fused 240",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//722.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/722.html",
    "author": "Mike Klubnika, shxyder",
    "authorLink": "https://mikeklubnika.itch.io/fused-240",
    "special": [
      "port"
    ]
  },
  {
    "id": 723,
    "name": "Brotato",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//723.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/723.html",
    "author": "Blobfish, Individual/Stinkalistic",
    "authorLink": "https://store.steampowered.com/app/1942280/Brotato/",
    "special": [
      "port"
    ]
  },
  {
    "id": 724,
    "name": "Endoparasitic 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//724.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/724.html",
    "author": "Miziziziz, Deep Root Interactive, Individual/Stinkalistic",
    "authorLink": "https://store.steampowered.com/app/2990640/Endoparasitic_2/",
    "special": [
      "port"
    ]
  },
  {
    "id": 725,
    "name": "ShredSauce",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//725.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/725-ff.html",
    "author": "Shredsauce Team",
    "authorLink": "https://shredsauce.com"
  },
  {
    "id": 726,
    "name": "Breath of the Wild NDS",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//726.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/726.html",
    "author": "unknown",
    "authorLink": "",
    "special": [
      "emulator",
      "nds"
    ]
  },
  {
    "id": 727,
    "name": "Dimension Incident",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//727.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/727.html",
    "author": "biznesbear",
    "authorLink": "https://biznesbear.itch.io/dimensionincident"
  },
  {
    "id": 728,
    "name": "Fear Assessment",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//728.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/728.html",
    "author": "Alexander Wiseman",
    "authorLink": "https://alexander-wiseman.itch.io/fear-assessment"
  },
  {
    "id": 729,
    "name": "game inside a game inside a game inside a game inside a game inside a game",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//729.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/729.html",
    "author": "Sam Hogan",
    "authorLink": "https://samhogan.itch.io/game-inside-a-game"
  },
  {
    "id": 730,
    "name": "Cell Machine",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//730.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/730.html",
    "author": "Sam Hogan",
    "authorLink": "https://samhogan.itch.io/cell-machine"
  },
  {
    "id": 731,
    "name": "Undertale: Last Breath",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//731.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/731.html",
    "author": "caijiqaq",
    "authorLink": "https://caijiqaq.github.io/LAST-BREATH/"
  },
  {
    "id": 732,
    "name": "64 in 1 NES",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//732.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/732.html",
    "author": "idk",
    "authorLink": "https://www.doperoms.org/roms/nintendo_nes/64-in-1%2520%255Bp1%255D.zip.html/630301/64-in-1%20[p1].zip.html",
    "special": [
      "emulator",
      "nes"
    ]
  },
  {
    "id": 733,
    "name": "Tetris",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//733.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/733.html",
    "author": "Nintendo",
    "authorLink": "https://www.nintendo.com/",
    "special": [
      "emulator",
      "gba"
    ]
  },
  {
    "id": 734,
    "name": "Christmas Massacre",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//734.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/734.html",
    "author": "Puppet Combo",
    "authorLink": "https://store.steampowered.com/app/1840490/Christmas_Massacre/",
    "special": [
      "port"
    ]
  },
  {
    "id": 735,
    "name": "Famidash",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//735.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/735.html",
    "author": "Zephyrside",
    "authorLink": "https://github.com/tfdsoft/famidash",
    "special": [
      "emulator",
      "nes"
    ]
  },
  {
    "id": 736,
    "name": "Super Mario Bros. Remastered",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//736.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/736.html",
    "author": "Zephyrside",
    "authorLink": "https://github.com/tfdsoft/famidash",
    "special": [
      "port"
    ]
  },
  {
    "id": 737,
    "name": "Saihate Station (さいはて駅)",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//737.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/737.html",
    "author": "びぶ/viv",
    "authorLink": "https://store.steampowered.com/app/3079280/Saihate_Station/",
    "special": [
      "port"
    ]
  },
  {
    "id": 738,
    "name": "Dumb Ways to Die",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//738.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/738.html",
    "author": "PlaySide Studios Ltd",
    "authorLink": "https://store.steampowered.com/app/3079280/Saihate_Station/"
  },
  {
    "id": 739,
    "name": "Soccer Random",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//739.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/739.html",
    "author": "RHM Interactive OÜ",
    "authorLink": "https://play.google.com/store/apps/details?id=com.twoplayergames.soccerrandom"
  },
  {
    "id": 740,
    "name": "Bart Blast",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//740.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/740.html",
    "author": "epickface",
    "authorLink": "https://bartblast.itch.io/bart-blast"
  },
  {
    "id": 741,
    "name": "Resident Evil",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//741.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/741.html",
    "author": "Capcom",
    "authorLink": "https://www.capcom.com/",
    "special": [
      "emulator",
      "psx"
    ]
  },
  {
    "id": 742,
    "name": "Resident Evil 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//742.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/742.html",
    "author": "Capcom",
    "authorLink": "https://www.capcom.com/",
    "special": [
      "emulator",
      "psx"
    ]
  },
  {
    "id": 743,
    "name": "Power Hover",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//743.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/743.html",
    "author": "ODDROK",
    "authorLink": "https://store.steampowered.com/app/559960/Power_Hover/",
    "special": [
      "port"
    ]
  },
  {
    "id": 744,
    "name": "Escape Road City 2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//744.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/744.html",
    "author": "AZ Games",
    "authorLink": "https://azgames.io/"
  },
  {
    "id": 745,
    "name": "Tetris",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//745.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/745.html",
    "author": "Nintendo",
    "authorLink": "https://www.nintendo.com/",
    "special": [
      "emulator",
      "nes"
    ]
  },
  {
    "id": 746,
    "name": "Fundamental Paper Novel",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//746.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/746.html",
    "author": "yakubell",
    "authorLink": ":https://yakubelle.itch.io/fundamental-paper-novel",
    "special": [
      "port"
    ]
  },
  {
    "id": 747,
    "name": "Worst Time Simulator",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//747.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/747.html",
    "author": "omegafredo",
    "authorLink": "https://omegafredo.github.io/worst-time-simulator/"
  },
  {
    "id": 748,
    "name": "Undertale Last Breath PHASE THREE",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//748.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/748.html",
    "author": "mario1d240",
    "authorLink": "https://mario1d240.github.io/undertale-last-breath-remake-bad-time-simulator/"
  },
  {
    "id": 749,
    "name": "Super Monkey Ball 1&2",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//749.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/749.html",
    "author": "Amusement Vision, camthesaxman etc",
    "authorLink": "https://monkeyball-online.pages.dev/"
  },
  {
    "id": 750,
    "name": "Five Nights at Last Breath",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//750.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/750-u.html",
    "author": "Free_Breath",
    "authorLink": "https://free-breath.itch.io/five-night-at-last-breath-epstein",
    "special": [
      "port"
    ]
  },
  {
    "id": 751,
    "name": "Jeffrey Epstein Basics In Education And Kidnapping",
    "cover": "https://cdn.jsdelivr.net/gh/gn-math/covers//751.png",
    "url": "https://cdn.jsdelivr.net/gh/gn-math/html/751.html",
    "author": "Zakaria_ALZ",
    "authorLink": "https://zakaria-alz.itch.io/jeffrey-epsteins-basics-in-education-and-kidnapping",
    "special": [
      "port"
    ]
  }  ];

  const APPS = [
    { id:0, name:'ExtHang3r', cover:'https://cdn.jsdelivr.net/gh/qatual/apps/exthang3r.png', url:'https://cdn.jsdelivr.net/gh/qatual/apps/ext.html', authors:['BlobbyBoi'] },
    { id:1, name:'gdg',       cover:'https://cdn.jsdelivr.net/gh/qatual/apps/gdg.png',       url:'https://cdn.jsdelivr.net/gh/qatual/apps/gdg.html', authors:['bog'] },
    { id:2, name:'Verdant ( AI )', cover:'https://cdn.jsdelivr.net/gh/1qatu/verdant/logo.png', url:'https://cdn.jsdelivr.net/gh/1qatu/verdant/index.html', authors:['qatual'] },
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

    const SPLASH_HTML = `<!DOCTYPE html><html lang="en"><head><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="referrer" content="origin"><title>Clever | Select your School</title><link rel="shortcut icon" href="https://assets.clever.com/oauth/e043eb42f50a4fd0d1fdfdbf8494f37b1ebdcee8/favicon.ico?1"><link rel="stylesheet" href="https://assets.clever.com/oauth/e043eb42f50a4fd0d1fdfdbf8494f37b1ebdcee8/vendor.js.css"><link rel="stylesheet" href="https://assets.clever.com/oauth/e043eb42f50a4fd0d1fdfdbf8494f37b1ebdcee8/stylesheets/main.js.css"><link rel="stylesheet" href="https://assets.clever.com/font-awesome/4.7.0/css/font-awesome.min.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"><link rel="stylesheet" href="https://assets.clever.com/oauth/e043eb42f50a4fd0d1fdfdbf8494f37b1ebdcee8/DistrictPicker.js.css"></head><body><div id="react-server-root" class="full-screen-page"><div class="grid-container footer-text-only"><div class="left-panel"><div class="left-panel-content"><div class="clever-logo"></div></div></div><div class="right-panel"><div class="right-panel-content"><div class="PageContent DistrictPicker"><h1 class="PageContent--title" id="PageContent--title">Log in</h1><div class="PageContent--contentRow"><div class="PageContent--content"><h2>Search for your school</h2><div class="Autosuggest"><label class="Autosuggest--input--label" for="autosuggest-input-">School name</label><div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false" class="react-autosuggest__container"><input type="text" value="" autoComplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1" class="Autosuggest--textInput Autosuggest--textInput--focusable" placeholder="Type school name here..." title="School name" id="autosuggest-input-" aria-label="School name"/><div id="react-autowhatever-1" role="listbox" class="Autosuggest--suggestionsContainer Autosuggest--suggestionsContainer--medium"></div></div></div></div><div class="PageContent--sidebar"><div class="BadgeLoginButton--largeContainer" aria-label="Log in with Clever Badges"><a href="#"><img class="BadgeLoginButton--largeImage" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTY5cHgiIGhlaWdodD0iMjA4cHgiIHZpZXdCb3g9IjAgMCAxNjkgMjA4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjx0aXRsZT5MYXJnZUJhZGdlPC90aXRsZT48ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBpZD0iTGFyZ2VCYWRnZSI+PHJlY3QgaWQ9IlJlY3RhbmdsZS0xMDYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjE2OC45MDM0ODQiIGhlaWdodD0iMjA4Ij48L3JlY3Q+PC9nPjwvZz48L3N2Zz4=" alt="Clever Badge login"/></a><a aria-label="Clever Badge login" class="DeweyButton Button Button--primary Button--medium" href="#"><span>Clever Badge login</span></a></div><div class="PageContent--sidebarSpacer"></div><div class="PageContent--userTypeLinks"><a id="CleverLogin--districtAdminLoginLink" aria-label="District admin login" class="DeweyButton Button Button--linkPlain Button--medium PageContent--userTypeLink Button--linkUnderlined" href="#"><span>District admin login</span></a></div></div></div></div></div></div><div class="footer Footer--container Footer--container--text-only"><div class="Footer--text-container"><a href="https://clever.com/trust/terms" class="Footer--link" target="_blank" rel="noopener noreferrer">Terms of Use</a><a href="https://clever.com/trust/privacy/policy" class="Footer--link" target="_blank" rel="noopener noreferrer">Privacy Policy</a><span class="Footer--copyright">Clever \u00a9 2026</span></div></div></div><script>document.querySelectorAll("a").forEach(a=>a.addEventListener("click",e=>e.preventDefault()));<\/script><script src="https://assets.clever.com/oauth/e043eb42f50a4fd0d1fdfdbf8494f37b1ebdcee8/vendor.js"><\/script><script src="https://assets.clever.com/oauth/e043eb42f50a4fd0d1fdfdbf8494f37b1ebdcee8/DistrictPicker.js"><\/script></body></html>`;

    const splashBlob = new Blob([SPLASH_HTML], { type: "text/html" });
    const splashUrl = URL.createObjectURL(splashBlob);

    const splashWrap = document.createElement("div");
    splashWrap.id = "__splash";
    splashWrap.style.cssText = "position:fixed;inset:0;z-index:99999;transition:opacity .4s ease;";
    const splashFrame = document.createElement("iframe");
    splashFrame.src = splashUrl;
    splashFrame.style.cssText = "width:100%;height:100%;border:none;display:block;";
    splashFrame.sandbox = "allow-scripts allow-same-origin";
    splashWrap.appendChild(splashFrame);
    document.body.appendChild(splashWrap);

    setTimeout(() => {
      splashWrap.style.opacity = "0";
      setTimeout(() => {
        splashWrap.remove();
        URL.revokeObjectURL(splashUrl);
      }, 400);
    }, 2200);

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
        --nav-bg: #000000;
        --nav-border: rgba(255,255,255,0.1);
        --search-border: #232538;
        --search-bg: #0a0a0a;
        --search-ph: #666;
        --search-color: #e2e5ff;
        --panel: #0a0a0a;
        --panel-border: #1a1a1a;
        --item-bg: #0d0d0d;
        --item-border: #111;
        --text: #d6daff;
        --muted: #555;
        --page-bg: #000000;
        --accent: #333;
      }

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html, body {
        width: 100%; height: 100%;
        background: #000;
        font-family: 'Plus Jakarta Sans', sans-serif;
        overflow: hidden;
        color: var(--text);
      }

      canvas { position: fixed; inset: 0; display: block; z-index: 0; }

      #__nav {
        position: fixed; top: 0; left: 0; right: 0; z-index: 100;
        height: 52px;
        background: #000;
        border-bottom: 1px solid rgba(255,255,255,0.08);
        display: flex; align-items: center; justify-content: space-between;
        padding: 0 24px;
      }

      #__nav .logo {
        font-weight: 800; font-size: 0.95rem; color: #fff;
        letter-spacing: -0.02em; text-decoration: none; user-select: none;
        display: inline-block;
        transition: transform .18s cubic-bezier(.4,0,.2,1);
      }
      #__nav .logo:hover { transform: scale(1.08); }

      #__nav .right {
        display: flex; align-items: center; gap: 2px;
      }

      #__nav .nav-item {
        display: flex; align-items: center; gap: 6px;
        font-size: 0.75rem; font-weight: 600;
        color: #555; text-decoration: none;
        padding: 6px 12px; border-radius: 6px;
        transition: color .12s, background .12s;
        letter-spacing: 0.01em;
      }
      #__nav .nav-item:hover { color: #fff; background: rgba(255,255,255,0.06); }
      #__nav .nav-item.active { color: #fff; }
      #__nav .nav-item i { font-size: 0.72rem; }

      #__home {
        position: fixed; inset: 0; z-index: 5;
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        gap: 32px;
        pointer-events: none;
      }
      #__home h1 {
        font-weight: 800; font-size: clamp(2.5rem, 6vw, 5rem);
        color: #fff; letter-spacing: -0.02em;
      }
      #__home-buttons {
        display: flex; align-items: center; gap: 10px;
        pointer-events: all;
      }
      .home-btn {
        display: flex; align-items: center; gap: 8px;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 0.8rem; font-weight: 600;
        color: #666; text-decoration: none;
        padding: 9px 18px; border-radius: 7px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.03);
        transition: color .15s, border-color .15s, background .15s;
        letter-spacing: 0.01em;
        cursor: pointer;
      }
      .home-btn:hover { color: #fff; border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.06); }
      .home-btn i { font-size: 0.72rem; }
      #__home-ad {
        pointer-events: all;
        display: flex; justify-content: center;
      }

      .sc-page {
        position: fixed; inset: 0; z-index: 5;
        display: none; flex-direction: column; align-items: center;
        padding-top: 52px; overflow-y: auto;
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
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 8px;
        padding: 10px 16px 10px 40px;
        color: var(--search-color);
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 0.86rem; outline: none;
        transition: border-color .15s;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%23555' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'/%3E%3C/svg%3E");
        background-repeat: no-repeat; background-position: 13px center;
      }
      .search-box::placeholder { color: #444; }
      .search-box:focus { border-color: rgba(255,255,255,0.2); }

      .sc-grid {
        width: 100%; max-width: 1100px;
        padding: 0 24px 40px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
        gap: 10px;
      }

      .sc-card {
        width: 100%; aspect-ratio: 1/1;
        border-radius: 8px; overflow: hidden;
        position: relative; cursor: pointer;
        display: block;
        border: 1px solid #111;
        background: #0d0d0d;
        transition: transform .18s, border-color .18s;
      }
      .sc-card:hover { transform: translateY(-3px); border-color: #333; }
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
        color: #444; font-size: 0.85rem;
        padding: 60px 0; grid-column: 1/-1; text-align: center;
      }

      #__viewer {
        position: fixed; inset: 0; z-index: 200;
        display: none;
        background: #000;
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
        background: #000;
        border-bottom: 1px solid rgba(255,255,255,0.08);
        display: flex; align-items: center;
        padding: 0 14px; gap: 10px;
      }
      .viewer-back {
        display: flex; align-items: center; gap: 6px;
        font-size: 0.76rem; font-weight: 600;
        color: #555; cursor: pointer;
        background: none; border: none;
        padding: 6px 12px; border-radius: 6px;
        transition: background .12s, color .12s;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      .viewer-back:hover { background: rgba(255,255,255,0.06); color: #fff; }
      .viewer-back i { font-size: 0.7rem; }
      .viewer-title {
        font-size: 0.86rem; font-weight: 700;
        color: #fff; flex: 1;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      .viewer-authors {
        font-size: 0.7rem; color: #444; flex-shrink: 0;
      }
      .viewer-actions { display: flex; gap: 4px; }
      .viewer-btn {
        display: flex; align-items: center; justify-content: center;
        width: 28px; height: 28px; border-radius: 6px;
        background: none; border: 1px solid rgba(255,255,255,0.08);
        color: #555; cursor: pointer; font-size: 0.74rem;
        transition: background .12s, color .12s, border-color .12s;
      }
      .viewer-btn:hover { background: rgba(255,255,255,0.06); color: #fff; border-color: rgba(255,255,255,0.15); }

      .viewer-ad {
        background: #050505;
        border-right: 1px solid #111;
        display: flex; align-items: center; justify-content: center;
        overflow: hidden;
        font-size: 0.65rem; color: #333;
        text-align: center; flex-direction: column; gap: 6px;
      }
      .viewer-ad.right { border-right: none; border-left: 1px solid #111; }

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
        gap: 12px; background: #000;
        font-size: 0.8rem; color: #444;
      }
      .viewer-loading.hidden { display: none; }
      .spinner {
        width: 20px; height: 20px;
        border: 2px solid #1a1a1a;
        border-top-color: #444;
        border-radius: 50%;
        animation: spin .7s linear infinite;
      }
      @keyframes spin { to { transform: rotate(360deg); } }
      .viewer-error { color: #c44; display: flex; align-items: center; gap: 8px; }

      #__page-search {
        position: fixed; inset: 0; z-index: 5;
        display: none; padding-top: 52px;
      }
      #__page-search.visible { display: block; }
      #__page-search iframe {
        width: 100%; height: 100%;
        border: none; display: block;
      }
    `;
    document.head.appendChild(style);

    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    function draw() {
      const W = canvas.width  = window.innerWidth;
      const H = canvas.height = window.innerHeight;
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
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
        <a class="nav-item" id="nav-games"  href="#games"><i class="fa-solid fa-gamepad"></i> Games</a>
        <a class="nav-item" id="nav-apps"   href="#apps"><i class="fa-solid fa-grip"></i> Apps</a>
        <a class="nav-item" id="nav-search" href="#search"><i class="fa-solid fa-magnifying-glass"></i> Search</a>
      </div>
    `;
    document.body.appendChild(nav);

    const home = document.createElement("div");
    home.id = "__home";
    home.innerHTML = `<h1>solo central</h1><div id="__home-buttons"><a class="home-btn" id="home-btn-games" href="#games"><i class="fa-solid fa-gamepad"></i> Games</a><a class="home-btn" id="home-btn-apps" href="#apps"><i class="fa-solid fa-grip"></i> Apps</a><a class="home-btn" id="home-btn-search" href="#search"><i class="fa-solid fa-magnifying-glass"></i> Search</a></div><div id="__home-ad"></div>`;
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

    const searchPage = document.createElement("div");
    searchPage.id = "__page-search";
    searchPage.innerHTML = '<iframe id="__search-iframe" allowfullscreen sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups allow-modals allow-downloads"></iframe>';
    document.body.appendChild(searchPage);

    let searchBlobUrl = null;
    (async () => {
      try {
        const res = await fetch("https://cdn.jsdelivr.net/gh/dinguschan-owo/Helios/index.html?_t=" + Date.now());
        if (!res.ok) throw new Error("HTTP " + res.status);
        const html = await res.text();
        const base = "https://cdn.jsdelivr.net/gh/dinguschan-owo/Helios/";
        const patched = html.replace(/<head[^>]*>/i, "$&<base href=\"" + base + "\">");
        const blob = new Blob([patched], { type: "text/html" });
        searchBlobUrl = URL.createObjectURL(blob);
        document.getElementById("__search-iframe").src = searchBlobUrl;
      } catch(err) {
        searchPage.innerHTML = "<div style='color:#c44;padding:20px'>boi it didnt load</div>";
      }
    })();

    let currentBlobUrl = null;
    let viewerReturnPage = null;

    async function openItem(item, returnPage) {
      viewerReturnPage = returnPage;
      document.getElementById("__vtitle").textContent = item.name;
      document.getElementById("__vauthors").textContent = "by " + (item.author || (item.authors ? item.authors.join(", ") : ""));

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
        const stripped = html.replace(/<div[^>]+id="sidebarad1"[\s\S]*?<\/div>\s*<\/div>/i, "").replace(/<div[^>]+id="sidebarad2"[\s\S]*?<\/div>\s*<\/div>/i, "");
        const patched = stripped.replace(/<head[^>]*>/i, "$&<base href=\"" + base + "\">" + gaSnippet);
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
      searchPage.classList.remove("visible");
      viewer.classList.remove("visible");
      document.getElementById("nav-games").classList.remove("active");
      document.getElementById("nav-apps").classList.remove("active");
      document.getElementById("nav-search").classList.remove("active");
    }

    function showGames() {
      home.style.display = "none";
      viewer.classList.remove("visible");
      appsPage.classList.remove("visible");
      searchPage.classList.remove("visible");
      gamesPage.classList.add("visible");
      document.getElementById("nav-games").classList.add("active");
      document.getElementById("nav-apps").classList.remove("active");
      document.getElementById("nav-search").classList.remove("active");
      renderGrid(GAMES, "__grid-games", "games");
    }

    function showApps() {
      home.style.display = "none";
      viewer.classList.remove("visible");
      gamesPage.classList.remove("visible");
      searchPage.classList.remove("visible");
      appsPage.classList.add("visible");
      document.getElementById("nav-apps").classList.add("active");
      document.getElementById("nav-games").classList.remove("active");
      document.getElementById("nav-search").classList.remove("active");
      renderGrid(APPS, "__grid-apps", "apps");
    }

    function showSearch() {
      home.style.display = "none";
      viewer.classList.remove("visible");
      gamesPage.classList.remove("visible");
      appsPage.classList.remove("visible");
      searchPage.classList.add("visible");
      document.getElementById("nav-search").classList.add("active");
      document.getElementById("nav-games").classList.remove("active");
      document.getElementById("nav-apps").classList.remove("active");
    }

    document.getElementById("__search-games").addEventListener("input", () => renderGrid(GAMES, "__grid-games", "games"));
    document.getElementById("__search-apps").addEventListener("input",  () => renderGrid(APPS,  "__grid-apps",  "apps"));
    document.getElementById("nav-games").addEventListener("click",  e => { e.preventDefault(); history.pushState({}, "", "#games");  showGames(); });
    document.getElementById("nav-apps").addEventListener("click",   e => { e.preventDefault(); history.pushState({}, "", "#apps");   showApps(); });
    document.getElementById("nav-search").addEventListener("click", e => { e.preventDefault(); history.pushState({}, "", "#search"); showSearch(); });
    document.getElementById("home-btn-games").addEventListener("click",  e => { e.preventDefault(); history.pushState({}, "", "#games");  showGames(); });
    document.getElementById("home-btn-apps").addEventListener("click",   e => { e.preventDefault(); history.pushState({}, "", "#apps");   showApps(); });
    document.getElementById("home-btn-search").addEventListener("click", e => { e.preventDefault(); history.pushState({}, "", "#search"); showSearch(); });
    document.getElementById("__logo").addEventListener("click",     e => { e.preventDefault(); history.pushState({}, "", "/");       showHome(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && viewer.classList.contains("visible")) closeViewer(); });

    window.addEventListener("popstate", () => {
      const h = location.hash;
      if (h.startsWith("#game-") || h.startsWith("#app-")) return;
      if (h === "#games") showGames();
      else if (h === "#apps") showApps();
      else if (h === "#search") showSearch();
      else showHome();
    });

    const h = location.hash;
    if (h === "#apps") showApps();
    else if (h === "#games") showGames();
    else if (h === "#search") showSearch();
    else showHome();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
