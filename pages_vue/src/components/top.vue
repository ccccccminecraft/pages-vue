<template>
<div class="main">
    <h1>こんにちは</h1>
    <div>
        <h2>Abount Me</h2>
        <p class="about-me">
            鼻毛鯖にいた人、色々したり何もしなかったりします。<br />
            ゲーム:  Minecraft/Apex/2DX/DDR/VRC/AmongUs/GGST/PSO2/DQX/etc...<br />
            その他:  DTM/プログラミング
        </p>
        <h2>Link</h2>
        <p>
            アイコンをクリックすると各種サービスのページに移動します。<br />
            近日中にminecraft等のサーバー稼働状況を見れるようにします。
        </p>
    </div>
    <div class="box">
        <div class="row">
            <div class="box-4u">
                <a href="https://twitter.com/c6cl_" target="_blank" rel="noopener noreferrer">
                    <div class="image">
                        <img src="../assets/top_wm.jpeg" alt="twitter_c6" />
                    </div>
                    <strong>Twitter</strong>
                </a>
            </div>
            <div class="box-4u">
                <a href="https://steamcommunity.com/id/CCCCCC_/" target="_blank" rel="noopener noreferrer">
                    <div class="image">
                        <img src="../assets/top_steam.png" alt="steam" />
                    </div>
                    <strong>Steam</strong>
                </a>
            </div>
            <div class="box-4u">
                <a href="https://soundcloud.com/cookie_1dsprst" target="_blank" rel="noopener noreferrer">
                    <div class="image">
                        <img src="../assets/top_soundcloud.jpg" alt="SoundCloud" />
                    </div>
                    <strong>SoundCloud</strong>
                </a>
            </div>
            <div class="box-4u">
                <a href="https://cccccc.hatenablog.com" target="_blank" rel="noopener noreferrer">
                    <div class="image">
                        <img src="../assets/hatena.png" alt="hatena" />
                    </div>
                    <strong>はてなBlog</strong>
                </a>
            </div>
            <div class="box-4u">
                <div class="image">
                    <img src="../assets/top_minecraft.png" alt="minecraft"/>
                </div>
                <strong>Minecraft(閉鎖中)</strong>
            </div>
            <div class="box-4u">
                <a href="https://vrchat.com/home/user/usr_fa3b94bc-9b09-48d4-9636-a13c65bea25b" target="_blank" rel="noopener noreferrer">
                    <div class="image">
                        <img src="../assets/top_vrc.jpg" alt="vrc"/>
                    </div>
                    <strong>VR Chat</strong>
                </a>
            </div>
            <div class="box-4u">
                <a href="https://hiroba.dqx.jp/sc/character/503265589265/" target="_blank" rel="noopener noreferrer">
                    <div class="image">
                        <img src="../assets/top_dqx.png" alt="dqx" />
                    </div>
                    <strong>DQ10</strong>
                </a>
            </div>
        </div>
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
.main{
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-size: 16px;
}
img{
    width: 100%;
}
.box{
}
.row {
    display: flex;
    flex-wrap: wrap;
    width: min(75%, 100vh);
    margin-left: auto;
    margin-right: auto;
}
.box-4u{
    width:20%;
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
strong{
}
a{
    text-decoration: none;
    color: inherit;
}

</style>