import img2 from "./1PM.jpg";
import img3 from "./AOT.jpg";
import img4 from "./Ayashimon.jpg";
import img5 from "./Baki.jpg";
import img6 from "./Blueexorcist.jpg";
import img7 from "./Bungodogs.jpg";
import img8 from "./Chainsaw.jpg";
import img9 from "./DBsuper.jpg";
import img10 from "./Deadtube.jpg";
import img11 from "./Demonslayer.jpg";
import img12 from "./HXH.jpg";
import img13 from "./Hellsing.jpg";
import img14 from "./JJK.jpg";
import img15 from "./Kingbeast.jpg";
import img16 from "./COE.jpg";
import img17 from "./MHA.jpg";
import img18 from "./Naruto.jpg";
import img19 from "./Onepiece.jpg";
import img20 from "./PromiseNeverland.jpg";
import img21 from "./Ragna.jpg";
import img22 from "./berserk.jpg";
import img23 from "./TG.jpg";
import img24 from "./COE.jpg";
import img25 from "./blackclover.jpg";
import img26 from "./bleach.jpg";
import img27 from "./bluelock.jpg";
import img28 from "./blueperiod.jpg";
import img29 from "./dragon ballZ.jpg";
import img30 from "./dragonball.jpg";
import img31 from "./fairytail.jpg";
import img32 from "./fruitbasket.jpg";
import img33 from "./kimino.jpg";
import img34 from "./lonewolfcub.jpg";
import img35 from "./lvl999.jpg";
import img36 from "./slamdunk.jpg";
import img37 from "./souleater.jpg";
import img38 from "./spyfamily.jpg";
import img39 from "./vinland.jpg";
import img40 from "./windbreaker.jpg";

let all_product = [
  {
    id: 1,
    name: "One Piece",
    status: "ongoing",
    image: img19,
    new_price: 100.0,
    old_price: 112,
  },
  {
    id: 2,
    name: "Naruto",
    category: "complete",
    image: img18,
    new_price: 80.0,
    old_price: 80.0,
  },
  {
    id: 3,
    name: "Demon Slayer",
    category: "ongoing",
    image: img11,
    new_price: 60.0,
    old_price: 65.0,
  },
  {
    id: 4,
    name: "Classroom-Of-Elite",
    category: "ongoing",
    image: img24,
    new_price: 40.0,
    old_price: 35.0,
  },
  {
    id: 5,
    name: "Black Clover",
    category: "ongoing",
    image: img25,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 6,
    name: "Wind Breaker",
    category: "Latest",
    image: img40,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 7,
    name: "Jujutsu Kaisen",
    category: "complete",
    image: img14,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 8,
    name: "My Hero Academia",
    category: "omgoing",
    image: img17,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 9,
    name: "Chainsaw Man",
    category: "complete",
    image: img8,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 10,
    name: "Attack On Titan",
    category: "complete",
    image: img3,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 11,
    name: "Spy x Family",
    category: "ongoing",
    image: img38,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 12,
    name: "Kimi No Todoke",
    category: "complete",
    image: img33,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 13,
    name: "Dragon Ball",
    category: "complete",
    image: img30,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 14,
    name: "Dragon Ball Z",
    category: "complete",
    image: img29,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 15,
    name: "Dragon Ball Super",
    category: "complete",
    image: img9,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 16,
    name: "Boungo Stray Dogs",
    category: "ongoing",
    image: img7,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 17,
    name: "Blue Exorcist",
    category: "ongoing",
    image: img6,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 18,
    name: "Blue Lock",
    category: "ongoing",
    image: img27,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 19,
    name: "Bleach",
    category: "ongoing",
    image: img26,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 20,
    name: "Tokyo Ghoul",
    category: "ongoing",
    image: img23,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 21,
    name: "Ragna Crimson",
    category: "ongoing",
    image: img21,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 22,
    name: "Mob Psycho",
    category: "ongoing",
    image: img16,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 23,
    name: "Hunter X Hunter",
    category: "ongoing",
    image: img12,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 24,
    name: "Tairy Tail",
    category: "ongoing",
    image: img31,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 25,
    name: "Blue Period",
    category: "ongoing",
    image: img28,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 26,
    name: "Berserk",
    category: "ongoing",
    image: img22,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 27,
    name: "Promise Never Land",
    category: "ongoing",
    image: img20,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 28,
    name: "King's Beast",
    category: "ongoing",
    image: img15,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 29,
    name: "Hell Sing",
    category: "latest",
    image: img13,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 30,
    name: "Dead Tube",
    category: "ongoing",
    image: img10,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 31,
    name: "Baki",
    category: "ongoing",
    image: img5,
    new_price: 100.0,
    old_price: 100.0,
  },

  {
    id: 32,
    name: "Ayashimon",
    category: "latest",
    image: img4,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 33,
    name: "One Punch Man",
    category: "latest",
    image: img2,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 34,
    name: "Fruit Basket",
    category: "ongoing",
    image: img32,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 35,
    name: "Lone Wolf Club",
    category: "ongoing",
    image: img34,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 36,
    name: "LVL 999",
    category: "Latest",
    image: img35,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 37,
    name: "Slam Dunk",
    category: "ongoing",
    image: img36,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 38,
    name: "Soul Eater",
    category: "ongoing",
    image: img37,
    new_price: 100.0,
    old_price: 100.0,
  },
  {
    id: 39,
    name: "Vinland Saga",
    category: "ongoing",
    image: img39,
    new_price: 100.0,
    old_price: 100.0,
  },
];
export default all_product;
