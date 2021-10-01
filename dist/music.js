const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [
{
      name: "红色高跟鞋",
      artist: '我亲爱的乐',
      url: 'music/1.mp3',
      cover: 'music/cover/002.jpg',
    },
    {
      name: "平凡之路",
      artist: '朴树',
      url: 'http://www.ytmp3.cn/down/59211.mp3',
      cover: 'http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130',
    }
  ]
});