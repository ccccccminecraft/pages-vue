<template>
    <div class ="main">
        <h1>Works</h1>
        <div class="box">
            <div class="youtube">
                <h3>Music Auto Connected / Capsluck feat.wadachi</h3>
                <iframe
                    width="400"
                    height="225"
                    src="https://www.youtube.com/embed/tVDl2x8TaK0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="youtube">
                <h3>Stay You Are / Capsluck</h3>
                <iframe
                    width="400"
                    height="225"
                    src="https://www.youtube.com/embed/A9LLoAOwiWo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="youtube">
                <h3>SuperSpeedSpaceGirls / Capsluck</h3>
                <iframe
                    width="400"
                    height="225"
                    src="https://www.youtube.com/embed/MrcM__WVtm4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>
            <div class="soundcloud">
                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1355247751&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/cookie_1dsprst" title="Capsluck" target="_blank" style="color: #cccccc; text-decoration: none;">Capsluck</a> · <a href="https://soundcloud.com/cookie_1dsprst/bofeti-found-you" title="【BOF:ET】I Found You" target="_blank" style="color: #cccccc; text-decoration: none;">【BOF:ET】I Found You</a></div>
            </div>
            <div class="soundcloud">
                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/921836269&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/cookie_1dsprst" title="Capsluck" target="_blank" style="color: #cccccc; text-decoration: none;">Capsluck</a> · <a href="https://soundcloud.com/cookie_1dsprst/bofxvijust-let-me-love-you-herefreedl" title="【BOFXVI】Just let me love you here【FreeDL】" target="_blank" style="color: #cccccc; text-decoration: none;">【BOFXVI】Just let me love you here【FreeDL】</a></div>
            </div>
        </div>
        <div class="top">
            <router-link to="/">戻る</router-link>
        </div>
        <div class="footer">
            GitHub Pagesで公開しています。
        </div>
    </div>
</template>

<style>
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
.footer{
    margin-top: 2em;
    margin-bottom: 2em;
}
.youtube{
    text-align: center;
    margin-bottom: 4em;
}
.soundcloud{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    margin-bottom: 4em;
}
</style>