import type { Localized } from "@/lib/types";

export type MotifId =
  | "qipao"
  | "suitcase"
  | "letters"
  | "chest"
  | "scarf"
  | "sewing"
  | "camera"
  | "teacup"
  | "songbook"
  | "handkerchief"
  | "flowers"
  | "tickets";

export type Status = "exhibiting" | "sold";

export type Relic = {
  slug: string;
  name: Localized;
  motif: MotifId;
  category: Localized;
  status: Status;
  era: Localized;
  ownerNick: Localized;
  storyBy: Localized;
  years?: string;
  source: Localized;
  tag: Localized;
  summary: Localized;
  story: Localized;
  keeperNote?: Localized;
  related: string[];
  image: string;
  soldTo?: Localized;
  soldNote?: Localized;
};

export const NAV = [
  { href: "/", key: "nav.current" },
  { href: "/stories", key: "nav.stories" },
  { href: "/collection", key: "nav.collection" },
  { href: "/acquire", key: "nav.acquire" },
] as const;

export const SITE = {
  name: "寻梦环游站",
  phone: "400-888-1931",
  address: { zh: "广州市越秀区小北路123号 静巷里1号铺", en: "No. 1, Quiet Lane, 123 Xiaobei Road, Yuexiu, Guangzhou" } satisfies Localized,
  hours: { zh: "周二至周日 10:00 – 18:00（周一休息）", en: "Tue–Sun 10:00–18:00 (closed Monday)" } satisfies Localized,
  philosophy: {
    zh: "站点收购家庭旧物，再决定展出或售出。物件不会消失，只会遇见下一个懂得它的人。",
    en: "The station buys family belongings, then exhibits or sells them. Objects do not vanish; they meet the next person who understands them.",
  } satisfies Localized,
};

export const relics: Relic[] = [
  {
    slug: "qipao",
    name: { zh: "旧时旗袍", en: "A vintage qipao" },
    motif: "qipao",
    category: { zh: "衣裳", en: "Dress" },
    status: "exhibiting",
    era: { zh: "本季主角", en: "This season" },
    ownerNick: { zh: "阿绣", en: "Xiu" },
    storyBy: { zh: "女儿 小棉", en: "Daughter, Mian" },
    years: "1958 — 1983",
    source: { zh: "家人交到站点", en: "Given by the family" },
    tag: { zh: "一件旗袍，三段人生", en: "One dress, three seasons of a life" },
    summary: { zh: "我妈十八岁的新衣。腰身后来放宽过，袖口被我黏过糖。", en: "Mother’s dress from eighteen. The waist was let out later; I once stuck sugar to the cuff." },
    story: {
      zh: "这件旗袍是我妈阿绣十八岁那年的新衣，领口绣了一小簇桂花。后来她把腰身悄悄放宽，袖口也补过一次——不是破了，是我把糖黏在上面，她不忍剪掉那截布。再后来它被叠进樟木箱，每年晒一次太阳。站点来收的时候，扣子还是齐的，只是香气淡了。我答应让它被看见，只求下一双手量一量腰身，别急着改掉。那是某年春天的天气。",
      en: "This qipao was my mother Xiu’s dress at eighteen, a small cluster of osmanthus at the collar. Later she quietly let out the waist, and mended a cuff—not because it tore, but because I stuck sugar there, and she would not cut the cloth. It slept in a camphor chest, aired once a year. When the station came, the buttons were still complete; only the scent had thinned. I asked that whoever meets it measure the waist, and not hurry to alter it. That was the weather of a certain spring.",
    },
    keeperNote: {
      zh: "请先量一量腰身，再决定改不改。那是某年春天的天气。",
      en: "Measure the waist before you alter it. That was the weather of a certain spring.",
    },
    related: ["scarf", "handkerchief", "sewing", "chest"],
    image: "/objects/qipao.jpg",
  },
  {
    slug: "suitcase",
    name: { zh: "老皮箱与信件", en: "Old suitcase and letters" },
    motif: "suitcase",
    category: { zh: "纸页", en: "Paper" },
    status: "exhibiting",
    era: { zh: "1974 — 1986", en: "1974 — 1986" },
    ownerNick: { zh: "写信的阿莲", en: "Lian, who wrote letters" },
    storyBy: { zh: "妹妹 阿秋", en: "Younger sister, Qiu" },
    years: "1974 — 1986",
    source: { zh: "河畔镇旧货市集", en: "Riverside vintage market" },
    tag: { zh: "她把“想你”写在信封内侧", en: "She wrote “I miss you” inside the envelope" },
    summary: { zh: "这些信件跟着这只皮箱走过许多地方。", en: "These letters traveled with the suitcase to many places." },
    story: {
      zh: "这些信件跟着这只皮箱走过许多地方，也装着一个人年轻时的心事与盼望。如今它仍被好好保存，里面的字句偶尔被重新读起——记忆不会被锁住，它只是换了一种继续旅行的方式。",
      en: "These letters followed the suitcase through many places, carrying one person’s hopes when they were young. It is still kept with care; the lines inside are sometimes read again. Memory is not locked away. It has only changed the way it travels.",
    },
    keeperNote: {
      zh: "箱子可以停在馆里。信还可以继续走。",
      en: "The suitcase may rest here. The letters can still travel.",
    },
    related: ["camera", "teacup", "songbook", "handkerchief"],
    image: "/objects/suitcase.jpg",
  },
  {
    slug: "chest",
    name: { zh: "grandmother的樟木箱", en: "Grandmother's camphor chest" },
    motif: "chest",
    category: { zh: "器物", en: "Object" },
    status: "exhibiting",
    era: { zh: "器物记忆", en: "Object memory" },
    ownerNick: { zh: "南洋阿婆", en: "Grandmother from Nanyang" },
    storyBy: { zh: "孙子 阿海", en: "Grandson, Hai" },
    years: "1948 — 1972",
    source: { zh: "家人交到站点", en: "Given by the family" },
    tag: { zh: "从江南到南洋的行李", en: "Luggage from Jiangnan to Nanyang" },
    summary: { zh: "一段从江南到南洋的行李，装着旧时光与新盼望。", en: "Luggage from Jiangnan to Nanyang, packed with old hours and new hope." },
    story: {
      zh: "箱子里原有一份手写清单：两床被、三件衣、一包茶叶、一封没有寄出的信。阿婆说，樟木是为了让衣服在海上也不发霉。箱盖内侧用铅笔写着“到了再买新的”，字迹被岁月磨浅。我把箱子交给站点，不是当遗产清册，是把她出发前的叮嘱留下：带得走的很少，带得动的希望却可以很大。",
      en: "Inside there was a handwritten list: two quilts, three dresses, a packet of tea, a letter never sent. Grandmother said camphor was so the clothes would not mildew at sea. Inside the lid, in pencil: “Buy new ones when we arrive.” I gave the chest to the station not as an inventory of inheritance, but as the wish she packed before leaving: little can be carried; hope can be large.",
    },
    keeperNote: {
      zh: "带得走的很少。樟木的气味，还肯留下。",
      en: "Little can be carried. The camphor scent still chooses to stay.",
    },
    related: ["qipao", "letters", "teacup", "sewing"],
    image: "/objects/chest.jpg",
  },
  {
    slug: "scarf",
    name: { zh: "那条陪我长大的丝巾", en: "The scarf that grew up with me" },
    motif: "scarf",
    category: { zh: "衣裳", en: "Textile" },
    status: "sold",
    era: { zh: "textile 温度", en: "Textile warmth" },
    ownerNick: { zh: "小满", en: "Xiaoman" },
    storyBy: { zh: "外孙女 小满", en: "Granddaughter, Xiaoman" },
    years: "1989 — 2004",
    source: { zh: "家人交到站点", en: "Given by the family" },
    tag: { zh: "外婆教的那一挽", en: "The knot grandmother taught" },
    summary: { zh: "柔软的丝巾，系住外婆的故事，也系住我的童年。", en: "A soft scarf that ties grandmother’s story to my childhood." },
    story: {
      zh: "丝巾上的绣花已经有些散，边角却被洗得很软。外婆出门买菜也会系它，不是为了漂亮，是为了“有一件东西跟着”。折法是她教的：先对折，再在颈后轻轻一挽。我把折法写下来，夹在丝巾里。站点买走以后，我听说它到了一个愿意学这一挽的人手里。",
      en: "The embroidery has loosened; the corners are washed soft. Grandmother wore it even to market—not for show, but so something would come along. She taught the fold: in half, then a small knot at the nape. I wrote the fold down and slipped it inside. After the station bought it, I heard it reached someone willing to learn that knot.",
    },
    related: ["qipao", "handkerchief", "flowers", "sewing"],
    image: "/objects/scarf.jpg",
    soldTo: { zh: "在广州教书的陈女士", en: "Ms. Chen, who teaches in Guangzhou" },
    soldNote: { zh: "她按夹层里的折法学会了那一挽，春天出门仍会系。", en: "She learned the knot from the note inside, and still wears it in spring." },
  },
  {
    slug: "letters",
    name: { zh: "泛黄的信与日记", en: "Yellowed letters and diaries" },
    motif: "letters",
    category: { zh: "纸页", en: "Paper" },
    status: "exhibiting",
    era: { zh: "纸页留声", en: "Paper echoes" },
    ownerNick: { zh: "晚照", en: "Wanzhao" },
    storyBy: { zh: "旧友 阿澄", en: "Old friend, Cheng" },
    years: "1966 — 1979",
    source: { zh: "家人交到站点", en: "Given by the family" },
    tag: { zh: "字迹背后的思念", en: "Longing behind the handwriting" },
    summary: { zh: "字迹背后的思念，值得被再读一遍。", en: "The longing in the handwriting is worth another reading." },
    story: {
      zh: "晚照的日记不是每天都写，只在“今天有光”的时候写。信里很少抱怨天气，多写窗户外的树又高了一点。有一页被撕去半角，他后来在空白处补了一句：不是不想说，是还没想好怎么说得温柔。我是他几十年的朋友，整理旧纸时把这一叠交给站点。请后来的人坐下来抄一句自己需要的话——抄走的是勇气，原件仍可以留在馆里。",
      en: "Wanzhao did not write every day—only on days that had light. The letters rarely complain of weather; they notice the tree outside growing taller. One page is torn at the corner; later he added: not that I would not say it, only that I had not yet found a gentle way. I was his friend for decades. Please sit and copy one sentence you need. What you take is courage; the original may stay.",
    },
    keeperNote: {
      zh: "抄一句你需要的。原件可以留在馆里。",
      en: "Copy one sentence you need. The original may stay in the hall.",
    },
    related: ["suitcase", "songbook", "tickets", "chest"],
    image: "/objects/letters.jpg",
  },
  {
    slug: "sewing",
    name: { zh: "祖母的针线篮", en: "Grandmother's sewing basket" },
    motif: "sewing",
    category: { zh: "针线", en: "Needlework" },
    status: "exhibiting",
    era: { zh: "常设展", en: "Standing display" },
    ownerNick: { zh: "针线阿嫲", en: "Grandmother of the needles" },
    storyBy: { zh: "孙女 阿织", en: "Granddaughter, Zhi" },
    years: "长期",
    source: { zh: "家人交到站点", en: "Given by the family" },
    tag: { zh: "未做完的扣子也留下", en: "Unfinished buttons remain" },
    summary: { zh: "日常器物里的手工学问，与时间和解的艺术。", en: "A quiet craft of mending, making peace with time." },
    story: {
      zh: "篮子里有三种线：缝衣服的、缝被的、缝“再看一看”的。顶针上有细小的凹点，像被时间轻轻敲过。阿嫲不爱扔掉碎布，说它们还要做谁的口袋。我把未完成的扣子留在原处交给站点——完成不是唯一的敬意，继续，才是。",
      en: "Three kinds of thread: for clothes, for quilts, and for “look again.” The thimble is dented as if time tapped it. She would not throw scraps away; they might still become someone’s pocket. I left the unfinished buttons in place. Finishing is not the only respect. Continuing is.",
    },
    keeperNote: {
      zh: "未做完的扣子也请留下。继续，才是敬意。",
      en: "Leave the unfinished buttons. Continuing is the respect.",
    },
    related: ["qipao", "handkerchief", "scarf", "chest"],
    image: "/objects/sewing.jpg",
  },
  {
    slug: "camera",
    name: { zh: "老相机", en: "Old camera" },
    motif: "camera",
    category: { zh: "器物", en: "Object" },
    status: "sold",
    era: { zh: "1978", en: "1978" },
    ownerNick: { zh: "阿年", en: "Nian" },
    storyBy: { zh: "侄子 阿朗", en: "Nephew, Lang" },
    years: "1978",
    source: { zh: "家人交到站点", en: "Given by the family" },
    tag: { zh: "他很少拍人的脸", en: "He rarely photographed faces" },
    summary: { zh: "捕捉无声风景，也记录下不欲出口的故事。", en: "It kept silent landscapes, and stories no one said aloud." },
    story: {
      zh: "相机里没有胶卷了，却还留着一截纸：曝光、光圈、以及“下午四点的河”。我叔叔阿年很少拍人的脸，只拍人站过的地方。修理铺的师傅给它换过皮腔，说这机器还想工作。站点买下它时，我写了一张小笺：怕潮、怕摔、不怕被重新带去河边。",
      en: "There is no film left, only a scrap of paper: exposure, aperture, and “the river at four.” Uncle Nian rarely photographed faces—only the places people had stood. A repairman replaced the bellows and said the machine still wanted to work. When the station bought it I left a note: fear damp, fear falling, do not fear the river again.",
    },
    related: ["suitcase", "tickets", "letters", "flowers"],
    image: "/objects/camera.jpg",
    soldTo: { zh: "在珠江西岸作记录的年轻人阿北", en: "Bei, who records along the Pearl River" },
    soldNote: { zh: "他把相机重新带去河边。快门还在，四点的光也还在。", en: "He took the camera back to the river. The shutter still works, and so does the four-o’clock light." },
  },
  {
    slug: "teacup",
    name: { zh: "蓝釉茶杯", en: "Blue-glaze teacup" },
    motif: "teacup",
    category: { zh: "器物", en: "Object" },
    status: "sold",
    era: { zh: "1960s", en: "1960s" },
    ownerNick: { zh: "晨茶的阿妗", en: "Aunt of the morning tea" },
    storyBy: { zh: "外甥 阿川", en: "Nephew, Chuan" },
    years: "1960s",
    source: { zh: "家人交到站点", en: "Given by the family" },
    tag: { zh: "每天第一杯茶", en: "The first cup of every morning" },
    summary: { zh: "每天早晨的第一杯茶，是她的固定仪式。", en: "The first cup each morning was her quiet ritual." },
    story: {
      zh: "阿妗的早晨从温杯开始。她说茶要听杯子的，杯子也要听手的。细纹是某年冬天烫出来的，她没有换杯，只把水再晾一会儿。交到站点时，杯底还留着极淡的茶叶香。我请后来的人继续用它喝茶——不是收藏一只完好的器，是延续一个早晨。",
      en: "Aunt began the morning by warming the cup. Tea should listen to the cup, she said, and the cup to the hand. A fine crack came one winter; she did not replace it, only let the water cool a little longer. Please keep drinking from it. This is not a perfect vessel to keep. It is a morning to continue.",
    },
    related: ["chest", "flowers", "sewing", "scarf"],
    image: "/objects/teacup.jpg",
    soldTo: { zh: "在东山口开小小茶室的阿敏", en: "Min, who keeps a small teahouse in Dongshankou" },
    soldNote: { zh: "她每天仍用这只杯子温第一道水。细纹还在，茶也还在。", en: "She still warms the first water in this cup. The crack remains, and so does the tea." },
  },
  {
    slug: "songbook",
    name: { zh: "手写歌本", en: "Handwritten songbook" },
    motif: "songbook",
    category: { zh: "纸页", en: "Paper" },
    status: "exhibiting",
    era: { zh: "1970 — 1979", en: "1970 — 1979" },
    ownerNick: { zh: "会哼歌的阿木", en: "Mu, who hummed" },
    storyBy: { zh: "妹妹 阿歌", en: "Younger sister, Ge" },
    years: "1970 — 1979",
    source: { zh: "家人交到站点", en: "Given by the family" },
    tag: { zh: "写下的旋律", en: "Melodies written down" },
    summary: { zh: "写下的旋律，是他保存秘密的方式。", en: "The written tunes were how he kept a secret." },
    story: {
      zh: "歌本用练习簿订成，封面写着“不要借走”。里面却到处是借给自己的句子：某页写“唱给河听”，某页只画了一条延长音。我哥阿木不爱解释歌词，只爱把调子写得很清楚。我把它交给站点，不是当谜题，是希望会唱歌的人来馆里，选一页，轻轻哼完。",
      en: "The book is stitched from an exercise pad. On the cover: “Do not borrow.” Inside, sentences borrowed for himself: “sing to the river,” or only a drawn fermata. My brother Mu did not explain lyrics; he wrote the tune clearly. I hope someone who sings will choose a page and finish it softly.",
    },
    keeperNote: {
      zh: "选一页，轻轻哼完。不必借走整本。",
      en: "Choose one page and finish it softly. You need not take the book.",
    },
    related: ["letters", "camera", "suitcase", "tickets"],
    image: "/objects/songbook.jpg",
  },
  {
    slug: "handkerchief",
    name: { zh: "绣花手帕", en: "Embroidered handkerchief" },
    motif: "handkerchief",
    category: { zh: "衣裳", en: "Textile" },
    status: "sold",
    era: { zh: "1965", en: "1965" },
    ownerNick: { zh: "巧手阿珍", en: "Zhen of the fine needle" },
    storyBy: { zh: "邻居 阿秀", en: "Neighbor, Xiu" },
    years: "1965",
    source: { zh: "家人交到站点", en: "Given by the family" },
    tag: { zh: "一方手帕，一段外婆的巧手与心意", en: "One handkerchief, a grandmother’s skill and care" },
    summary: { zh: "一方手帕，一段外婆的巧手与心意。", en: "One handkerchief, a grandmother’s skill and care." },
    story: {
      zh: "手帕的绣线是浅粉和牙白，针脚细到几乎要凑近才看见。阿珍是我隔壁，不喜欢把礼物说得很大。她觉得手帕刚好：可以随身，可以借给别人，可以在风里展开。她走了以后，家里把这方手帕出让给站点。我只请后来的人记住：用脏了可以洗，破了可以补，不必把它供起来。",
      en: "The thread is pale pink and ivory, stitches almost too fine to see. Zhen next door did not like a large gift. A handkerchief was enough: it could travel, be lent, open in the wind. Please wash it when it is used, mend it when it tears. It does not need an altar.",
    },
    related: ["scarf", "sewing", "qipao", "flowers"],
    image: "/objects/handkerchief.jpg",
    soldTo: { zh: "在书院街做布艺的阿圆", en: "Yuan, who works cloth on Shuyuan Street" },
    soldNote: { zh: "她把它放进日常口袋里。风起的时候仍会展开。", en: "She keeps it in an everyday pocket. When the wind rises, it still opens." },
  },
  {
    slug: "flowers",
    name: { zh: "干花与旧布", en: "Dried flowers and old cloth" },
    motif: "flowers",
    category: { zh: "器物", en: "Object" },
    status: "exhibiting",
    era: { zh: "限定展", en: "This season" },
    ownerNick: { zh: "阿芬", en: "Fen" },
    storyBy: { zh: "儿子 阿禾", en: "Son, He" },
    years: "本季",
    source: { zh: "家人交到站点", en: "Given by the family" },
    tag: { zh: "味道好像还在", en: "The scent still seems to stay" },
    summary: { zh: "妈说这件衣服洗过了，但味道好像还在。", en: "Mother said the clothes were washed, yet the scent seemed to stay." },
    story: {
      zh: "妈阿芬把旧布和一瓶干花一起交给我，说：衣服我洗过了，但味道好像还在。我没有把气味当成需要立刻去掉的东西。站点买下之后做了清洁与消毒，把还愿意留下的气息写成一份很短的档案。干花是陪衬。真正留下来的，是她曾经被生活浸透的那些下午。",
      en: "Mother Fen gave me old cloth and a bottle of dried flowers: I washed the clothes, she said, but the scent still seems to stay. I did not treat the smell as something to erase at once. After the station bought it, they cleaned it gently and wrote a short note of what still wished to remain. The flowers are a companion. What stays are the afternoons life soaked into her.",
    },
    keeperNote: {
      zh: "气味不必立刻去掉。那些下午还在。",
      en: "The scent need not be erased at once. Those afternoons remain.",
    },
    related: ["scarf", "qipao", "teacup", "sewing"],
    image: "/objects/flowers.jpg",
  },
  {
    slug: "tickets",
    name: { zh: "火车票夹", en: "Train-ticket clip" },
    motif: "tickets",
    category: { zh: "纸页", en: "Paper" },
    status: "sold",
    era: { zh: "时代折痕", en: "Folds of a time" },
    ownerNick: { zh: "赶车的阿乔", en: "Qiao, who caught trains" },
    storyBy: { zh: "妻子 阿宁", en: "Wife, Ning" },
    years: "1983 — 1998",
    source: { zh: "家人交到站点", en: "Given by the family" },
    tag: { zh: "下次带你看海", en: "Next time I will take you to the sea" },
    summary: { zh: "夹层最里面有一张写得很用力的纸条。", en: "In the innermost fold, a note written with force." },
    story: {
      zh: "阿乔把票夹得整整齐齐，像是怕旅程自己跑掉。有几张票已经看不清站名，只剩日期。纸条是我后来才发现的，夹在最里面，写着“下次带你看海”，字很用力。站点买下这个夹子时，我没有把它当成沉重的未完成，只当成还可以继续的邀请：海还在，车还可以再坐。",
      en: "Qiao clipped the tickets as if a journey might run away. Some names have faded; the dates remain. Later I found the note: “Next time I will take you to the sea,” written hard. When the station bought the clip I did not treat it as an unfinished weight—only an invitation that can still be kept. The sea is there. A train can still be taken.",
    },
    related: ["suitcase", "letters", "camera", "songbook"],
    image: "/objects/tickets.jpg",
    soldTo: { zh: "常常坐夜车回家的阿帆", en: "Fan, who often takes the night train home" },
    soldNote: { zh: "他把那句“看海”留在夹层里。今年夏天真的去了。", en: "He left the line about the sea in the fold. This summer he went." },
  },
];

export const acquireSteps = [
  {
    n: "1",
    title: { zh: "联系站点", en: "Contact the station" },
    text: {
      zh: "可选上门，由站点人员收取；也可通过快递物流寄出。",
      en: "Staff can collect at your door, or you may ship it to the station.",
    },
  },
  {
    n: "2",
    title: { zh: "清洁筛选", en: "Clean and sort" },
    text: {
      zh: "我们细心清洁、整理与评估，尊重每一件物品。",
      en: "We clean, order, and assess each object with care.",
    },
  },
  {
    n: "3",
    title: { zh: "展览与流通", en: "Exhibit or sell" },
    text: {
      zh: "站点买下之后，以合适的陈列与方式，让物品被看见、被珍惜，或走到下一双手。",
      en: "Once the station buys it, we exhibit it, or let it meet the next pair of hands.",
    },
  },
];

export const faqs = [
  {
    q: { zh: "站点是替我们代卖吗？", en: "Does the station sell on our behalf?" },
    a: {
      zh: "不是。寻梦环游站自己收购家庭旧物，再决定送进展陈，或售出。不是寄存，也不是代为托售。",
      en: "No. The station buys the object itself, then exhibits or sells it. This is not storage, and not selling for you.",
    },
  },
  {
    q: { zh: "上门和快递物流怎么选？", en: "Staff pickup or shipping?" },
    a: {
      zh: "市区可预约上门，由站点人员收取；外地或你更方便自行寄出时，可选快递物流。两种方式都会在收到后进入同一套清洁与评估，再由站点决定是否买下。",
      en: "In the city, staff can collect at your door. From farther away you may ship it. Both paths meet the same cleaning and assessment; the station then decides whether to buy.",
    },
  },
  {
    q: { zh: "为什么需要消毒？哪些不能收？", en: "Why clean? What cannot come?" },
    a: {
      zh: "因为物件还要继续遇见人。我们做的是温和清洁与消毒。涉及传染风险的物品无法接收，这是对每一位后来者的保护。",
      en: "Because the object will meet people again. We clean gently. Anything with infectious risk cannot be received. That is a protection for whoever comes next.",
    },
  },
  {
    q: { zh: "联系站点之后一定出售吗？", en: "Will it always be sold?" },
    a: {
      zh: "不一定。站点买下之后，可能送进故事馆展出，也可能售予愿意继续使用它的人。决定在站点。",
      en: "Not always. After buying it, the station may exhibit it, or sell it to someone who will keep using it. The station decides.",
    },
  },
];

export const hopeNotes = [
  { name: { zh: "小棉", en: "Mian" }, text: { zh: "旗袍腰身别改太大，那是某年春天的天气。", en: "Do not let the waist out too far. That was the weather of a certain spring." } },
  { name: { zh: "小满", en: "Xiaoman" }, text: { zh: "这条丝巾怕潮，请偶尔拿到有阳光的地方坐一坐。", en: "The scarf fears damp. Please sit with it in the sun now and then." } },
  { name: { zh: "阿澄", en: "Cheng" }, text: { zh: "信可以慢慢读，不必一次读完。空白的地方，也可以停。", en: "The letters can be read slowly. You may stop in the blank spaces." } },
  { name: { zh: "阿川", en: "Chuan" }, text: { zh: "茶杯口有一道细纹，不影响喝，像一条很小的河。", en: "A fine crack at the rim. It still drinks. It is a very small river." } },
  { name: { zh: "阿朗", en: "Lang" }, text: { zh: "相机快门还在。河边的光，四点左右最温柔。", en: "The shutter still works. River light is gentlest around four." } },
  { name: { zh: "阿宁", en: "Ning" }, text: { zh: "若你把它带走，也把一句暖的话留下。不是告别，是交接。", en: "If you take it, leave a warm sentence. Not a goodbye—a handing-over." } },
];

export function getRelic(slug: string) {
  return relics.find((item) => item.slug === slug);
}

export function relatedRelics(slug: string) {
  const relic = getRelic(slug);
  if (!relic) return [];
  return relic.related
    .map((id) => relics.find((item) => item.slug === id))
    .filter((item): item is Relic => Boolean(item));
}

export function exhibiting() {
  return relics.filter((item) => item.status === "exhibiting");
}

export function sold() {
  return relics.filter((item) => item.status === "sold");
}

export function relicHref(item: Relic) {
  return `/stories/${item.slug}`;
}
