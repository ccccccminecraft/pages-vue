<template>
    <div class="main">
        <h1>Magic the Gathering</h1>
        <div class="box">
            <h2>MTGプロフィール</h2>
            <div>
                <h3>フォーマット</h3>
                スタンダード / パイオニア / エクスプローラー / 統率者(予定)
            </div>
            <div>
                <h3>活動地域</h3>
                横浜 / 川崎
            </div>
            <div>
                <h3>プレイスタイル</h3>
                カジュアル
            </div>
            <div>
                <h3>主な使用デッキ</h3>
                St: 青白兵士 / 赤黒ファイレクシアン<br>
                Pi: 青白スピリット / 青黒コントロール<br>
                etc...
            </div>
            <div>
                <h3>自己紹介</h3>
                2023/01/04 に開始。<br>
                特に実績はございません。<br>
                現時点では晴れる屋各所の店舗大会レベルで、カジュアルに遊んでいます。<br>
                チャンピオンズカップ等は怖くて出てません。<br><br>
                腕前は<br>
                ＊ 晴れる屋の店舗大会に出てだいたい 2-1 か 1-2 で、まあまあな頻度で 0-3 します。<br>
                ＊ MTGAの構築戦でミシック触って96%あたりで喜んだり、プラチナから上がれなくて今月はもういいやってしたりします。<br>
                ＊ リミテッドが絶望的に下手くそです。<br>
                くらいです。<br><br>
                たぶん飛行クロパーが好きです。<br>
                そろそろ統率者にも手を出そうかなと思っています。<br>
                よろしくおねがいします。<br>
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
.box-4u{
    width: clamp(15vh,20%,100vh);
    height: 100%;
    margin: 2%;
}
.top{
    text-align: center;    
    margin-left: auto;
    margin-right: auto;
}
.footer{
    margin-top: 2em;
    margin-bottom: 2em;
}
</style>