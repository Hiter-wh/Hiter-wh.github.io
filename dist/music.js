const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    mini: true,
    autoplay: true,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "红色高跟鞋",
        artist: '我亲爱的乐',
        url: 'music/1.mp3',
        cover: '/images/002.jpg',
        //lrc: '/music/lyrics/兩隻老虎.lrc',
      },
    ]
});

