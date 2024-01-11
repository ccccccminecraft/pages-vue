<template>
<div class ="main">
    <h1>音ゲー</h1>
    <div class="box">
        <h2>音ゲープロフィール</h2>
        2DX,DDR,BMSを主に遊んでいます。<br>
        少し触る程度だと他の機種やゲームでも遊んでいます。<br>
        このぺージはなるべく最新化しますが、ここに書いてあることより上手くなっていることがあるかもしれません。<br><br>
        <table class="table">
            <tr>
                <th>ゲーム名</th>
                <th>段位-レート</th>
                <th>ライバル、フレンドコード</th>
            </tr>
            <tr>
                <td>BMS (beatoraja)</td>
                <td>★5, ▼4, sl6</td>
                <td>
                    <a href="https://mocha-repository.info/player.php?id=1497" target="_blank" rel="noopener noreferrer">
                        mocha-repository
                    </a>
                </td>
            </tr>
            <tr>
                <td>beatmania 2DX INFINITAS</td>
                <td>皆伝/五段</td>
                <td>C-6661-7640-8171</td>
            </tr>
            <tr>
                <td>beatmania 2DX EPOLIS</td>
                <td>八段</td>
                <td>2434-0816</td>
            </tr>
            <tr>
                <td>DanceDanceRevolution A3</td>
                <td>九段/七段</td>
                <td>41237193</td>
            </tr>
            <tr>
                <td>その他BEMANI機種</td>
                <td>たまにやる</td>
                <td></td>
            </tr>
            <tr>
                <td>チュウニズム</td>
                <td>たまにやる</td>
                <td></td>
            </tr>
            <tr>
                <td>プロジェクトセカイ</td>
                <td>皆伝5</td>
                <td>次遊んだら調べる</td>
            </tr>
            <tr>
                <td>DJ MAX RESPECT V</td>
                <td>6Bシルバー</td>
                <td>次遊んだら調べる</td>
            </tr>
            <tr>
                <td>Muse Dash</td>
                <td>たまにやる</td>
                <td></td>
            </tr>
            <tr>
                <td>KEYBOARD MANIA 3rd MIX</td>
                <td>むずすぎ</td>
                <td></td>
            </tr>
        </table>
        <br>
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
.table{
    width: 100%;
}
</style>