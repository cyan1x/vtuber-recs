const genres = ["zatsudan", "fps/tps", "variety", "art"] as const

type Genre = (typeof genres)[number]

const tags = ["fast-speaker", "voice-changer", "babiniku"] as const

type Tag = (typeof tags)[number]

export interface VTuber {
  name: string
  org: string
  imgName: string
  description: string
  genres: Genre[]
  tags: Tag[]
  links: {
    youtube?: string
    twitch?: string
  }
}

export const vtubers: VTuber[] = [
  {
    name: "Komori Met",
    org: "vspo!",
    imgName: "met",
    description: `Komori Met (小森めと) is a female Japanese Virtual YouTuber, associated with VSPO!. Formerly, she was associated with 774inc. under the company's branch group VApArt before the group's disband in January 2023.`,
    genres: ["fps/tps", "zatsudan", "variety"],
    tags: [],
    links: {
      youtube: "https://www.youtube.com/@Met_Komori",
      twitch: "https://www.twitch.tv/met_komori",
    },
  },
  {
    name: "Kaga Nazuna",
    org: "vspo!",
    imgName: "nazuna",
    description: `Kaga Nazuna (花芽なずな) is a female Japanese Virtual YouTuber. She is a member of Lupinus Virtual Games, an eSports team under Virtual eSports Project, debuting alongside with her older twin sister Kaga Sumire followed by Ichinose Uruha and Kogara Toto.`,
    genres: ["fps/tps", "zatsudan", "variety"],
    tags: ["fast-speaker"],
    links: {
      youtube: "https://www.youtube.com/@nazunakaga",
      twitch: "https://www.twitch.tv/nazunakaga",
    },
  },
  {
    name: "Usada Pekora",
    org: "hololive",
    imgName: "pekora",
    description: `Usada Pekora (兎田ぺこら) is a female Japanese Virtual YouTuber associated with hololive, debuting as part of its third generation of VTubers under the name of \"hololive Fantasy\" (ホロライブファンタジー) alongside Uruha Rushia, Shiranui Flare, Shirogane Noel and Houshou Marine.`,
    genres: ["variety", "zatsudan"],
    tags: [],
    links: {
      youtube: "https://www.youtube.com/@usadapekora",
      twitch: "https://www.twitch.tv/usadapekora_hololive",
    },
  },
  {
    name: "Nachoneko",
    org: "indie",
    imgName: "nacho",
    description: `Nachoneko (なちょ猫); also known by her real name Amashiro Natsuki (甘城なつき) is a female independent Japanese Virtual YouTuber and illustrator.`,
    genres: ["variety", "zatsudan", "fps/tps", "art"],
    tags: [],
    links: {
      twitch: "https://www.twitch.tv/nacho_dayo",
      youtube: "https://www.youtube.com/@Nachoneko_dayo",
    },
  },
  {
    name: "Tomari Mari",
    org: "indie",
    imgName: "tomari",
    description: `Tomari Mari (兎鞠まり) is a female Japanese Virtual YouTuber that was formerly affiliated with Upd8.`,
    genres: ["variety", "zatsudan", "fps/tps", "art"],
    tags: ["babiniku", "voice-changer"],
    links: {
      youtube: "https://www.youtube.com/@TOMARI_MARI",
    },
  },
]
