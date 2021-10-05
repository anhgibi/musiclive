const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const PLAYER_TRORAGE_KEY = 'Dương Nhật Anh'
const cd =$('.music-cd')
const playList =$('.music-content')
const heading= $('.song-name')
const singerName = $('.singer-name')
const cdThumb= $('.music-img')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const progress =$('#progress')
const player=$('.player')
const prevBtn= $('.btn-prev')
const nextBtn=$('.btn-next')
const randomBtn =$('.btn-random')
const repeatBtn=$('.btn-repeat')
const playHeader =$('.player-header')
const controlitem = $('.control-item')
const playerimg =$('.player-img')


const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config:JSON.parse(localStorage.getItem(PLAYER_TRORAGE_KEY))||{},

  
    
    songs:[
    // {
    //     name: 'Có Chắc Yêu Là Đây',
    //     singer:'Sơn Tùng M-TP',
    //     path:'./assets/music/sontung/cochacyeuladay.mp3',
    //     image:'./assets/images/sontung/ccyld.webp'
    // },
    // {
    //     name: 'Chạy Ngay Đi',
    //     singer:'Sơn Tùng M-TP',
    //     path:'./assets/music/sontung/chayngaydi.mp3',
    //     image:'./assets/images/sontung/cnd.webp'
    // },
    // {
    //     name: 'Chúng Ta Của Hiện Tại',
    //     singer:'Sơn Tùng M-TP',
    //     path:'./assets/music/sontung/chungtacuahientai.m4a',
    //     image:'./assets/images/sontung/ctcht.webp'
    // },
    // {
    //     name: 'Muộn Rồi Mà Sao Còn',
    //     singer:'Sơn Tùng M-TP',
    //     path:'./assets/music/sontung/muonroimasaocon.mp3',
    //     image:'./assets/images/sontung/mrmsc.webp'
    // },
    {
        name: 'Nơi Này Có Anh',
        singer:'Sơn Tùng M-TP',
        path:'./assets/music/sontung/noinaycoanh.mp3',
        image:'./assets/images/sontung/nnca.webp'
    },
    {
        name: 'Bình Yên Nơi Đâu',
        singer:'Sơn Tùng M-TP',
        path:'./assets/music/sontung/binhyennoidau.mp3',
        image:'./assets/images/sontung/binhyennoidau.png'
    },
    // {
    //     name: 'Skyler',
    //     singer:'Sơn Tùng M-TP',
    //     path:'./assets/music/sontung/skyler.mp3',
    //     image:'./assets/images/sontung/skyler.webp'
    // },
    // {
    //     name: 'Hãy Trao Cho Anh',
    //     singer:'Sơn Tùng M-TP',
    //     path:'./assets/music/sontung/haytraochoanh.mp3',
    //     image:'./assets/images/sontung/htca.webp',
    // },
    // {
    //     name: 'Intro Sky Tour',
    //     singer:'Sơn Tùng M-TP',
    //     path:'./assets/music/sontung/introskytour.mp3',
    //     image:'./assets/images/sontung/albumSkyTour.webp'
    // },
    // {
    //     name: 'Intro',
    //     singer:'Sơn Tùng M-TP',
    //     path:'./assets/music/sontung/intro.mp3',
    //     image:'./assets/images/sontung/albumSkyTour.webp'
    // },
    // {
    //     name: 'Lạc Trôi (Triple D Remix)',
    //     singer:'Sơn Tùng M-TP',
    //     path:'./assets/music/sontung/lactroi.mp3',
    //     image:'./assets/images/sontung/lt.webp'
    // },
    // {
    //     name: 'Nắng Ấm Xa Dần',
    //     singer:'Sơn Tùng M-TP',
    //     path:'./assets/music/sontung/nangamxadan.mp3',
    //     image:'./assets/images/sontung/naxdrm.webp'
    // },
    // {
    //     name: 'Chắc Ai Đó Sẽ Về',
    //     singer:'Sơn Tùng M-TP',
    //     path:'./assets/music/sontung/chacaidoseve.mp3',
    //     image:'./assets/images/sontung/atbe.webp'
    // },
        {
            name: 'Suýt Nữa Thì',
            singer:'ANDIEZ x BITI',
            path:'./assets/music/andiez/suytnuathi.mp3',
            image:'./assets/images/andiez/suytnuathi.webp'
        },
        {
            name: 'Một Phút',
            singer:'ANDIEZ',
            path:'./assets/music/andiez/1phut.mp3',
            image:'./assets/images/andiez/1phut.webp'
        },
        {
            name: 'California',
            singer:'Rich Brian, NIKI, & Warren Hue',
            path:'./assets/music/nhacngoai/california.mp3',
            image:'./assets/images/ngoai/california.webp'
        },
        {
            name: 'Hơn Cả Yêu',
            singer:'Đức Phúc',
            path:'./assets/music/ducphuc/honcayeu.mp3',
            image:'./assets/images/ducphuc/honcayeu.webp'
        },
        // {
        //     name: 'Happy For You',
        //     singer:'Lukas Graham (feat. Vũ.)',
        //     path:'./assets/music/nhacngoai/happyforyou.mp3',
        //     image:'./assets/images/ngoai/happyforyou.webp'
        // },
        {
            name: 'Lạ Lùng',
            singer:'Vũ',
            path:'./assets/music/vu/lalung.mp3',
            image:'./assets/images/vu/lalung.webp'
        },
        {
            name: 'Tháng Năm',
            singer:'Sobin Hoàng Sơn',
            path:'./assets/music/sobinhoangson/thangnam.mp3',
            image:'./assets/images/sobinhoangson/thangnam.webp'
        },
        {
            name: 'Hướng Dương',
            singer:'CHANG',
            path:'./assets/music/chang/huongduong.mp3',
            image:'./assets/images/chang/huongduong.webp'
        },
        {
            name: 'Lỡ Say Bye Là Bye',
            singer:' LEMESE X CHANG',
            path:'./assets/music/chang/losaybyelabye.mp3',
            image:'./assets/images/chang/losaybyelabye.webp'
        },
        {
            name: '24h',
            singer:' LyLyy',
            path:'./assets/music/lyly/24h.mp3',
            image:'./assets/images/lyly/24h.webp'
        },
        {
            name: 'Yêu Là Tha Thứ',
            singer:' Only C',
            path:'./assets/music/onlyc/yeulathathu.mp3',
            image:'./assets/images/onlyc/yeulathathu.webp'
        },
        {
            name: 'Chiều Thu Hoạ Bóng Nàng',
            singer:' DATKAA x QT BEATZ',
            path:'./assets/music/datkaka/chieuthuhoabongnang.mp3',
            image:'./assets/images/datkaka/chieuthuhoabongnang.png'
        },
        

   ],
   setConfig: function(key, value) {
    this.config[key]= value;
    localStorage.setItem(PLAYER_TRORAGE_KEY, JSON.stringify(this.config))
    },
   render: function(){
    const htmls = this.songs.map((song, index )=>{
        return `
        <div class="song ${ index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                <div class="playlist-img">
                    <div class="playlist-img-player" style="background-image: url(${song.image})">
                    </div>
                </div>
    
                <div class="playlist-content">
                    <h3 class="title">
                        ${song.name}
                    </h3>
                    <p class="author">
                        ${song.singer}
                    </p>
                </div>
        </div>
        `
    } )


        playList.innerHTML = htmls.join('')
        


   },

   handleEvents: function(){
       const _this = this;
       const cdWidth = cd.offsetWidth

       // xử lý phóng to thu nhỏ
       document.onscroll = function(){
           
           const scrollTop = window.screenY || document.documentElement.scrollTop
           const newCdWidth = cdWidth - scrollTop

            cd.style.width = newCdWidth > 0 ? newCdWidth +'px': 0


            if(newCdWidth ==0 || newCdWidth<0){
                playHeader.classList.add('player-content')
            }
            if(newCdWidth>0){
                playHeader.classList.remove('player-content')
            }
            
        };


        // sử lý khi click play
        playBtn.onclick = function(){
            if(_this.isPlaying){
                audio.pause()
            }else{
                audio.play()
            }
        }




        // khi song duoc playlist
        audio.onplay= function(){
            _this.isPlaying=true;
            player.classList.add('playing')
        }
        //khi song pause
        audio.onpause= function(){
            _this.isPlaying=false;
            player.classList.remove('playing')
        }


        //khi tien do bai hat thay doi
        audio.ontimeupdate= function(){
            if(audio.duration){
                const progressPercent= Math.floor(audio.currentTime / audio.duration *100)
                progress.value= progressPercent
            }
        }
        // su ly khi tua song 
        progress.onchange= function(e){
           const seekTime = ( (audio.duration /100) * e.target.value)
           audio.currentTime = seekTime
        }

        // khi next song do
        nextBtn.onclick= function(){
            if(_this.isRandom){
                _this.playRandomSong()
            }else{
                _this.nextSong()
                
            }
            audio.play()
            _this.render()
            _this.crollToActiveSong()
        }

         // khi prev song do
         prevBtn.onclick= function(){
            if(_this.isRandom){
                _this.playRandomSong()
            }
            else{ 
                _this.prevSong()
            }
            audio.play()
            _this.render()
            _this.crollToActiveSong()
        }

        // xu ly phat lap lai 1 song
        repeatBtn.onclick = function(e){
            _this.isRepeat = ! _this.isRepeat
            _this.setConfig('isRandom',_this.isRepeat)
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        // random
        randomBtn.onclick = function(e){
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom',_this.isRandom)
            randomBtn.classList.toggle('active', _this.isRandom)
            
        }

        //su ly next song khi audio extends
        audio.onended = function(){
            if(_this.isRepeat){
                audio.play()
            }
            else{
                nextBtn.click()
            }

        }
        //lang nghe click vao playlist
        playList.onclick= function(e){
            // xu ly click vao song
            const songNode = e.target.closest('.song:not(.active)')
            if(songNode){
                _this.currentIndex =Number(songNode.dataset.index)
                _this.loadCurrentSong()
                _this.render()
                audio.play()
            }
        }
   },
   defineProperties:function(){
       Object.defineProperty(this, 'currentSong',{
           get:function(){
               return this.songs[this.currentIndex]
           }
       })
   },


   crollToActiveSong:function(){
       setTimeout(() => {
           $('.song.active').scrollIntoView({
               behavior:'smooth',
               block:'center'
           })
       }, 200);
  
    },

   loadCurrentSong:function(){

       heading.textContent = this.currentSong.name
       singerName.textContent = this.currentSong.singer
       cdThumb.style.backgroundImage = `url(${this.currentSong.image})`
       playerimg.style.backgroundImage = `url(${this.currentSong.image})`
       audio.src = this.currentSong.path  
   },
   loadConfig:function(){
       this.isRandom = this.config.isRandom
   },

   nextSong: function(){
       this.currentIndex++
       if(this.currentIndex >= this.songs.length){
           this.currentIndex = 0
       }
       this.loadCurrentSong()
   },

   prevSong: function(){
    this.currentIndex--
    if(this.currentIndex < 0){
        this.currentIndex = this.songs.length -1
    }
    this.loadCurrentSong()
    },

    playRandomSong: function(){
        let newIndex 
        do{
            newIndex = Math.floor(Math.random() * this.songs.length)
        }while(newIndex ===this.currentIndex)

        this.currentIndex= newIndex
        this.loadCurrentSong()

    },

   start: function(){

        // gan cấu hình từ config vào ứng dụng
       this.loadConfig()


    //    định nghĩa các thuộc tính cho object
        this.defineProperties()


        // lắng nghe / xử lý các sự kiện
        this.handleEvents()

        // tải thông tin bài hát đầu tiên vào UI khi chạy ứng dúng 
        this.loadCurrentSong()

        
        // render playlist
        this.render()


        randomBtn.classList.toggle('active', this.isRandom)
   }
}

app.start()





