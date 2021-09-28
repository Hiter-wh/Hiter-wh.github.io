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
        artist: 'Asoul伽乐',
        url: 'https://drive.google.com/uc?export=download&id=1nVEwardGHRjr7ZBQkd1LxBfIov1ZLU6M',
        cover: '/images/002.jpg',
        //lrc: '/music/lyrics/兩隻老虎.lrc',
      },
    ]
});

