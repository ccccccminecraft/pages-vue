<template>
<div class="main">
    <h1>こんにちは</h1>
    <div class="box">
        <h2>Abount Me</h2>
        <div>
            鼻毛鯖にいた人、<br>
            色々したり何もしなかったりします。<br>
            曲を作ります。BMSを作ります。音ゲーします。<br>
            最近はカードゲームもはじめました。<br>
        </div>
        <div>
            <h3>名前:</h3>
            CCCCCC (ゲームするとき)<br>
            Capsluck (曲を作るとき)<br>
            シーロク (MTGをするとき)(本名調べれば出るかもだけどインターネット上ではシーロクでお願いします)
        </div>
        <div>
            <h3>ゲーム:</h3>
            Minecraft / Apex / BEMANI / BMS / VRC / AmongUs / GGST / PSO2 / DQX / MTG / etc...
        </div>
        <div>
            <h3>その他:</h3>
            DTM / プログラミング
        </div>
        <h2>Link</h2>
        <p>
            アイコンをクリックすると
            各種サービスのページに移動します。<br>
        </p>
        <h3>Capsluck</h3>
        <div class="row">
            <div class="box-4u">
                <router-link to="/dtm">
                    <div class="image">
                        <img src="../assets/top_twitter_cl.png" alt="dtm"/>
                    </div>
                    <p class="image_txt">Works</p>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div class="box-4u">
                <a href="https://twitter.com/COOK_iE_" target="_blank" rel="noopener noreferrer">
                    <div class="image">
                        <img src="../assets/top_twitter.png" alt="twitter_cl" />
                    </div>
                    <p class="image_txt">Twitter(音楽関連)</p>
                </a>
            </div>
            <div class="box-4u">
                <a href="https://www.youtube.com/channel/UCrDCXPEdUgZu8TwcwZGGYZw" target="_blank" rel="noopener noreferrer">
                    <div class="image">
                        <img src="../assets/top_youtube.png" alt="youtube" />
                    </div>
                    <p class="image_txt">Youtube(Music)</p>
                </a>
            </div>
            <div class="box-4u">
                <a href="https://soundcloud.com/cookie_1dsprst" target="_blank" rel="noopener noreferrer">
                    <div class="image">
                        <img src="../assets/top_soundcloud.jpg" alt="SoundCloud" />
                    </div>
                    <p class="image_txt">SoundCloud</p>
                </a>
            </div>
            <div class="box-4u">
                <router-link to="/bms">
                    <div class="image">
                        <img src="../assets/BMS.png" alt="bms"/>
                    </div>
                    <p class="image_txt">BMS</p>
                </router-link>
            </div>
        </div>
        <h3>CCCCCC</h3>
        <div class="row">
            <div class="box-4u">
                <a href="https://twitter.com/c6cl_" target="_blank" rel="noopener noreferrer">
                    <div class="image">
                        <img src="../assets/top_wm.png" alt="twitter_c6" />
                    </div>
                    <p class="image_txt">Twitter(日常)</p>
                </a>
            </div>
            <div class="box-4u">
                <a href="https://steamcommunity.com/id/CCCCCC_/" target="_blank" rel="noopener noreferrer">
                    <div class="image">
                        <img src="../assets/top_steam.png" alt="steam" />
                    </div>
                    <p class="image_txt">Steam</p>
                </a>
            </div>
            <div class="box-4u">
                <a href="https://github.com/ccccccminecraft" target="_blank" rel="noopener noreferrer">
                    <div class="image">
                        <img src="../assets/top_github.png" alt="github" />
                    </div>
                    <p class="image_txt">GitHub</p>
                </a>
            </div>
            <div class="box-4u">
                <a href="https://cccccc.hatenablog.com" target="_blank" rel="noopener noreferrer">
                    <div class="image">
                        <img src="../assets/hatena.png" alt="hatena" />
                    </div>
                    <p class="image_txt">はてなBlog(日常)</p>
                </a>
            </div>
            <div class="box-4u">
                <router-link to="/minecraft">
                    <div class="image">
                        <img src="../assets/top_minecraft.png" alt="minecraft"/>
                    </div>
                    <p class="image_txt">Minecraft</p>
                </router-link>
            </div>
            <div class="box-4u">
                <router-link to="/otoge">
                    <div class="image">
                        <img src="../assets/top_bemani.png" alt="bemani" />
                    </div>
                    <p class="image_txt">音ゲー</p>
                </router-link>
            </div>
            <div class="box-4u">
                <a href="https://vrchat.com/home/user/usr_fa3b94bc-9b09-48d4-9636-a13c65bea25b" target="_blank" rel="noopener noreferrer">
                    <div class="image">
                        <img src="../assets/top_vrc.jpg" alt="vrc"/>
                    </div>
                    <p class="image_txt">VR Chat</p>
                </a>
            </div>
            <div class="box-4u">
                <a href="https://hiroba.dqx.jp/sc/character/503265589265/" target="_blank" rel="noopener noreferrer">
                    <div class="image">
                        <img src="../assets/top_dqx.png" alt="dqx" />
                    </div>
                    <p class="image_txt">DQ10</p>
                </a>
            </div>
        </div>
        <h3>シーロク(@リバ崎MTG)</h3>
        <div class="row">
            <div class="box-4u">
                <a href="https://twitter.com/C6_MTG" target="_blank" rel="noopener noreferrer">
                    <div class="image">
                        <img src="../assets/top_twitter_riv.png" alt="mtg" />
                    </div>
                    <p class="image_txt">Twitter(MTG)</p>
                </a>
            </div>
            <div class="box-4u">
                <router-link to="/mtg">
                    <div class="image">
                        <img src="../assets/MTG.jpg" alt="mtg" />
                    </div>
                    <p class="image_txt">MTG Profile</p>
                </router-link>
            </div>
            <div class="box-4u">
                <a href="https://note.com/c6cl_/" target="_blank" rel="noopener noreferrer">
                    <div class="image">
                        <img src="../assets/top_note.png" alt="note" />
                    </div>
                    <p class="image_txt">note(MTG)</p>
                </a>
            </div>
            <div class="box-4u">
                <div class="image">
                    <img src="../assets/_準備中.png" alt="mtg" />
                </div>
                <p class="image_txt">準備中</p>
            </div>
        </div>
    </div>
    <div class="footer">
        GitHub Pagesで公開しています。
    </div>
</div>
</template>
<script>
export default {
  name: "topPage",
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap');

h2{
    font-size: 1.75em;
    text-align: left;
}
h3{
    font-size: 1.25em;
    margin: 1em 0 0 0;
}
a{
    text-decoration: none;
    color: inherit;
}
img{
    width: 100%;
}
.main{
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-size: 16px;
    overflow-wrap: break-word
}
.box{
    width: clamp(100px,90%,100vh);
    margin-left: auto;
    margin-right: auto;
    text-align: left;
}
.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}
.box-4u{
    width: clamp(15vh,20%,100vh);
    height: 100%;
    margin: 2%;
}
.image{
    width: 90%;
    height: 90%;
    margin: 5%;
}
.image:hover{
    width: 100%;
    height: 100%;
    margin: 0%;
}
.image_txt{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    margin: 0;
}
.footer{
    margin-top: 2em;
    margin-bottom: 2em;
}
</style>