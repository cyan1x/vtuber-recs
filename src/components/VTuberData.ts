const genres = [
  "zatsudan",
  "fps/tps",
  "valorant",
  "mahjong",
  "gta",
  "moba",
  "variety",
  "karaoke",
  "art",
  "asmr",
] as const

type Genre = (typeof genres)[number]

const frequencies = ["frequent", "infrequent", "rare"] as const

type Frequency = (typeof frequencies)[number]

const tags = [
  "korean",
  "bilingual",
  "multilingual",
  "fast-speaker",
  "slow-speaker",
  "voice-changer",
  "babiniku",
] as const

type Tag = (typeof tags)[number]

export interface VTuber {
  name: string
  org: string
  imgName: string
  description: string
  genres: Partial<{ [genre in Genre]: Frequency }>
  tags: Tag[]
  links: Partial<{ [link in "youtube" | "twitch" | "twitter"]: string }>
}

export const vtubers: VTuber[] = [
  {
    name: "Nekomata Okayu",
    org: "hololive",
    imgName: "nekomata_okayu.jpg",
    description:
      "Possibly the most beginner-friendly VTuber in hololive. Speaks clearly and slowly. Also pretty soft-spoken and occasionally does ASMR streams.",
    genres: {
      variety: "frequent",
      zatsudan: "infrequent",
      asmr: "infrequent",
    },
    tags: ["slow-speaker"],
    links: {
      youtube: "https://www.youtube.com/@NekomataOkayu",
      twitter: "https://twitter.com/nekomataokayu",
    },
  },
  {
    name: "Shirona Shizuku",
    org: "neo-porte",
    imgName: "shirona_shizuku.jpg",
    description:
      "My favorite VTuber, voice-wise. Has a very unique and soft speaking style. Consistently does long talk/game streams that are perfect for background listening.",
    genres: {
      valorant: "frequent",
      zatsudan: "infrequent",
      variety: "infrequent",
    },
    tags: [],
    links: {
      youtube: "https://www.youtube.com/@ShironaShizuku",
      twitter: "https://twitter.com/shizuku_shirona",
    },
  },
  {
    name: "Shirayuki Reid",
    org: "neo-porte",
    imgName: "shirayuki_reid.jpg",
    description:
      "Mahjong and FPS player; his Jantama streams are some of the most entertaining on the platform. Rages regularly. Watching his streams (and reading the chat) is more than enough to learn Japanese Mahjong terminology if you're familiar with the game.",
    genres: {
      "mahjong": "frequent",
      "fps/tps": "frequent",
    },
    tags: [],
    links: {
      youtube: "https://www.youtube.com/@Shirayuki_Reid",
      twitch: "https://www.twitch.tv/shirayuki_reid",
      twitter: "https://twitter.com/Shirayuki_Reid",
    },
  },
  {
    name: "Tsumugi Kokage",
    org: "vspo!",
    imgName: "tsumugi_kokage.jpg",
    description:
      "One of vspo!'s newest members and one of its best Valorant players alongside [Yumeno Akari](https://twitter.com/AKARINdaooo), peaking at Immortal 3. Highly recommended if you enjoy watching Valorant streams and want to learn basic terminology and callouts.",
    genres: {
      valorant: "frequent",
      zatsudan: "infrequent",
      variety: "infrequent",
    },
    tags: [],
    links: {
      youtube: "https://www.youtube.com/@Kokage_Tsumugi",
      twitter: "https://twitter.com/kokage_tsumugi",
    },
  },
]
// {
//   name: "Kaga Nazuna",
//   org: "vspo!",
//   imgName: "nazuna",
//   description: `Former CS:GO and PUBG player, peak immortal in Valorant. Currently addicted to GTA5 RP.`,
//   genres: {
//     gta: "frequent",
//     "fps/tps": "frequent",
//     zatsudan: "infrequent",
//     variety: "infrequent",
//     karaoke: "infrequent",
//   },
//   tags: ["fast-speaker"],
//   links: {
//     youtube: "https://www.youtube.com/@nazunakaga",
//     twitch: "https://www.twitch.tv/nazunakaga",
//   },
// },
// {
//   name: "Nekota Tsuna",
//   org: "vspo!",
//   imgName: "tsuna",
//   description: `Experienced in a wide variety of FPS games. Speaks Japanese and Korean fluently.`,
//   genres: {
//     "fps/tps": "frequent",
//     zatsudan: "infrequent",
//     variety: "infrequent",
//   },
//   tags: ["korean", "bilingual"],
//   links: {
//     youtube: "https://www.youtube.com/@tsuna_nekota",
//     twitch: "https://www.twitch.tv/tsuna_nekota",
//   },
// },
// {
//   name: "Usada Pekora",
//   org: "hololive",
//   imgName: "pekora",
//   description: `Usada Pekora (兎田ぺこら) is a female Japanese Virtual YouTuber associated with hololive, debuting as part of its third generation of VTubers under the name of \"hololive Fantasy\" (ホロライブファンタジー) alongside Uruha Rushia, Shiranui Flare, Shirogane Noel and Houshou Marine.`,
//   genres: {
//     variety: "frequent",
//     zatsudan: "frequent",
//     karaoke: "infrequent",
//   },
//   tags: [],
//   links: {
//     youtube: "https://www.youtube.com/@usadapekora",
//     twitch: "https://www.twitch.tv/usadapekora_hololive",
//   },
// },
// {
//   name: "Komori Met",
//   org: "vspo!",
//   imgName: "met",
//   description: `Komori Met (小森めと) is a female Japanese Virtual YouTuber, associated with VSPO!. Formerly, she was associated with 774inc. under the company's branch group VApArt before the group's disband in January 2023.`,
//   genres: {
//     zatsudan: "frequent",
//     variety: "frequent",
//     "fps/tps": "frequent",
//   },
//   tags: [],
//   links: {
//     youtube: "https://www.youtube.com/@Met_Komori",
//     twitch: "https://www.twitch.tv/met_komori",
//   },
// },
// {
//   name: "Tomari Mari",
//   org: "indie",
//   imgName: "tomari",
//   description: `Tomari Mari (兎鞠まり) is a female Japanese Virtual YouTuber that was formerly affiliated with Upd8.`,
//   genres: {
//     zatsudan: "frequent",
//     variety: "frequent",
//   },
//   tags: ["babiniku", "voice-changer"],
//   links: {
//     youtube: "https://www.youtube.com/@TOMARI_MARI",
//   },
// },
// {
//   name: "Nachoneko",
//   org: "indie",
//   imgName: "nacho",
//   description: `VTuber persona of illustrator Amashiro Natsuki, known for designing Hololive EN's [Gawr Gura](https://hololive.wiki/wiki/Gawr_Gura). Avid enjoyer of pineapple pizza ~~and other weird food~~.`,
//   genres: {
//     "fps/tps": "infrequent",
//     moba: "infrequent",
//     zatsudan: "infrequent",
//     variety: "infrequent",
//     art: "rare",
//   },
//   tags: [],
//   links: {
//     twitch: "https://www.twitch.tv/nacho_dayo",
//     youtube: "https://www.youtube.com/@Nachoneko_dayo",
//     homepage: "https://amashiro.com/",
//   },
// },
