const genres = [
  "zatsudan",
  "fps/tps",
  "gta",
  "moba",
  "variety",
  "karaoke",
  "art",
] as const

type Genre = (typeof genres)[number]

const frequencies = ["frequent", "infrequent", "rare"] as const

type Frequency = (typeof frequencies)[number]

const tags = [
  "korean",
  "bilingual",
  "multilingual",
  "fast-speaker",
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
  links: { [link in "youtube" | "twitch" | string]: string }
}

export const vtubers: VTuber[] = [
  {
    name: "Kaga Nazuna",
    org: "vspo!",
    imgName: "nazuna",
    description: `Former CS:GO and PUBG player, peak immortal in Valorant. Currently addicted to GTA5 RP.`,
    genres: {
      gta: "frequent",
      "fps/tps": "frequent",
      zatsudan: "infrequent",
      variety: "infrequent",
      karaoke: "infrequent",
    },
    tags: ["fast-speaker"],
    links: {
      youtube: "https://www.youtube.com/@nazunakaga",
      twitch: "https://www.twitch.tv/nazunakaga",
    },
  },
  {
    name: "Nekota Tsuna",
    org: "vspo!",
    imgName: "tsuna",
    description: `Experienced in a wide variety of FPS games. Speaks Japanese and Korean fluently.`,
    genres: {
      "fps/tps": "frequent",
      zatsudan: "infrequent",
      variety: "infrequent",
    },
    tags: ["korean", "bilingual"],
    links: {
      youtube: "https://www.youtube.com/@tsuna_nekota",
      twitch: "https://www.twitch.tv/tsuna_nekota",
    },
  },
  {
    name: "Usada Pekora",
    org: "hololive",
    imgName: "pekora",
    description: `Usada Pekora (兎田ぺこら) is a female Japanese Virtual YouTuber associated with hololive, debuting as part of its third generation of VTubers under the name of \"hololive Fantasy\" (ホロライブファンタジー) alongside Uruha Rushia, Shiranui Flare, Shirogane Noel and Houshou Marine.`,
    genres: {
      variety: "frequent",
      zatsudan: "frequent",
      karaoke: "infrequent",
    },
    tags: [],
    links: {
      youtube: "https://www.youtube.com/@usadapekora",
      twitch: "https://www.twitch.tv/usadapekora_hololive",
    },
  },
  {
    name: "Komori Met",
    org: "vspo!",
    imgName: "met",
    description: `Komori Met (小森めと) is a female Japanese Virtual YouTuber, associated with VSPO!. Formerly, she was associated with 774inc. under the company's branch group VApArt before the group's disband in January 2023.`,
    genres: {
      zatsudan: "frequent",
      variety: "frequent",
      "fps/tps": "frequent",
    },
    tags: [],
    links: {
      youtube: "https://www.youtube.com/@Met_Komori",
      twitch: "https://www.twitch.tv/met_komori",
    },
  },
  {
    name: "Tomari Mari",
    org: "indie",
    imgName: "tomari",
    description: `Tomari Mari (兎鞠まり) is a female Japanese Virtual YouTuber that was formerly affiliated with Upd8.`,
    genres: {
      zatsudan: "frequent",
      variety: "frequent",
    },
    tags: ["babiniku", "voice-changer"],
    links: {
      youtube: "https://www.youtube.com/@TOMARI_MARI",
    },
  },
  {
    name: "Nachoneko",
    org: "indie",
    imgName: "nacho",
    description: `VTuber persona of illustrator Amashiro Natsuki, known for designing Hololive EN's [Gawr Gura](https://hololive.wiki/wiki/Gawr_Gura). Avid enjoyer of pineapple pizza ~~and other weird food~~.`,
    genres: {
      "fps/tps": "infrequent",
      moba: "infrequent",
      zatsudan: "infrequent",
      variety: "infrequent",
      art: "rare",
    },
    tags: [],
    links: {
      twitch: "https://www.twitch.tv/nacho_dayo",
      youtube: "https://www.youtube.com/@Nachoneko_dayo",
      homepage: "https://amashiro.com/",
    },
  },
]
