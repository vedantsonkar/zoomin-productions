const YOUTUBE_VIDEOS = [
  {
    name: 'KTS Showcase',
    url: 'https://www.youtube.com/embed/0ymewY9S8r4?si=4U-Bor9k8mxrghif',
    thumbnail: '/videos/thumbnails/Video_1.png',
  },
  {
    name: 'KTS Main Event',
    url: 'https://www.youtube.com/embed/1wr6u-FbG_c?si=TjTxaXreg3wtMOsi',
    thumbnail: '/videos/thumbnails/Video_2.png',
  },
  {
    name: 'Jadui Pitara',
    url: 'https://www.youtube.com/embed/PA8vB2G8xwQ?si=UY4hqJVdYL2znSSz',
    thumbnail: '/videos/thumbnails/Video_3.png',
  },
  {
    name: 'G20 Highlights',
    url: 'https://www.youtube.com/embed/U0FjwcImOoQ?si=MzwRTw7mryznQFH6',
    thumbnail: '/videos/thumbnails/Video_4.png',
  },
  {
    name: 'G20 MINISTRY OF EDUCATION FILMS',
    url: 'https://www.youtube.com/embed/Tzw-z6qmbDg?si=3IB__Ksg_qfvT_19',
    thumbnail: '/videos/thumbnails/Video_5.png',
  },
  {
    name: 'CBC Event Films',
    url: 'https://www.youtube.com/embed/buuaRqqrcHI?si=fBqcKnrzwdRdcUZE',
    thumbnail: '/videos/thumbnails/Video_6.png',
  },
  {
    name: 'NTA AWARDS FILMS',
    url: 'https://www.youtube.com/embed/15E0Y9iJH5A?si=Q5a4zt2EfVivd3sb',
    thumbnail: '/videos/thumbnails/Video_7.png',
  },
  {
    name: 'STUDY IN INDIA PORTAL FILM',
    url: 'https://www.youtube.com/embed/bwnz0FiyM7Q?si=cF9Ufc2NKVQWEH2k',
    thumbnail: '/videos/thumbnails/Video_8.png',
  },
  {
    name: 'IIT Indore',
    url: 'https://www.youtube.com/embed/TmKBSq5M25U?si=xFBE6TGZaEPJqYwh',
    thumbnail: '/videos/thumbnails/Video_9.png',
  },
  {
    name: 'IIIT Kota',
    url: 'https://www.youtube.com/embed/6K1ZwvVy2Jk?si=v2ZNqMJFhoBsET4w',
    thumbnail: '/videos/thumbnails/Video_10.png',
  },
  {
    name: 'NEP 2020 EVENT FILM',
    url: 'https://www.youtube.com/embed/JmDQ9wihoN8?si=c0mgcL7PC9MBco-x',
    thumbnail: '/videos/thumbnails/Video_11.png',
  },
  {
    name: 'Ministry of Fisheries',
    url: 'https://www.youtube.com/embed/qncWv4I4nRk?si=rwXs27CnMPc8ufJJ',
    thumbnail: '/videos/thumbnails/Video_12.png',
  },
  {
    name: 'Ministry of Women and Child Development FILMS',
    url: 'https://www.youtube.com/embed/P_f9BhTwT6s?si=8nr5qDf_7Xw2FbQq',
    thumbnail: '/videos/thumbnails/Video_13.png',
  },
  {
    name: 'Mission Chandrayan',
    url: 'https://www.youtube.com/embed/RzFl8uzY54E?si=JbU28mlCVIsRyWC1',
    thumbnail: '/videos/thumbnails/Video_14.png',
  },
  {
    name: 'Prerna Film',
    url: 'https://www.youtube.com/embed/xW829mJsXu4?si=bfQPw-1wKqApV807',
    thumbnail: '/videos/thumbnails/Video_15.png',
  },
];

const LINKS = {
  YOUTUBE: 'https://www.youtube.com/@zoominproduction5626',
};

const FOUNDERS = [
  {
    name: 'Dhawal Velani',
    position: 'Founder',
    description:
      'A decade of distinguished experience in government, political parties, and brand communication, Dhawal is a seasoned communications professional.',
    image: '/images/team/Dhawal.jpg',
  },
  {
    name: 'Ajay Raj Dinkar',
    position: 'Co-Founder',
    description:
      'A decade of mastery in visual storytelling, transforming each frame into a canvas - from pixel to perfection, building ideas into compelling narratives, bringing stories to life with an exquisite blend of visuals and sound.',
    image: '/images/team/Ajay.jpg',
  },
];

const OUR_TEAM = [
  {
    name: 'Swaraj Shetty',
    imageSrc: '/images/team/Swaraj.jpg',
    twitter: '',
    instagram: '',
    linkedin: '',
  },
  {
    name: 'Mithila Naik-Satam',
    imageSrc: '/images/team/Mithila.jpg',
    twitter: '',
    instagram: '',
    linkedin: '',
  },
  {
    name: 'Himanshu',
    imageSrc: '/images/team/Himanshu.jpg',
    twitter: '',
    instagram: '',
    linkedin: '',
  },
  {
    name: 'Parth Shetye',
    imageSrc: '/images/team/Parth.png',
    twitter: '',
    instagram: '',
    linkedin: '',
  },
];

const BASE_DOMAIN =
  process.env.NEXT_PUBLIC_BASE_DOMAIN || 'https://www.zoominproductions.in';

export { FOUNDERS, YOUTUBE_VIDEOS, LINKS, OUR_TEAM, BASE_DOMAIN };
