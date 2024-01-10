<template>
    <div class ="main">
        <h1>BMS</h1>
        <div class="box">
            <h2>ライバル登録</h2>
            <a href="https://mocha-repository.info/player.php?id=1497" target="_blank" rel="noopener noreferrer">
                mocha-repository
            </a>
            <h2>公開物について</h2>
            当サイトでBMSとして公開している、データの転載・改変・二次配布は全て許可します。<br>
            私がイベントに参加した時のBMSについても同様です。<br>
            差分作成した際、同梱されている譜面の扱いですが残していただけるほうが嬉しいです。(強制はしません)<br>
            <h2>ダウンロード</h2>
            <p>雑多にフォルダごと共有しています。</p>
            <a href="https://drive.google.com/drive/folders/1vGDfxP2-LJg_DjNmpD1YehvhBSvzpuhn?usp=sharing" target="_blank" rel="noopener noreferrer">
                GoogleDrive
            </a>
        </div>
        <div class="top">
            <router-link to="/">戻る</router-link>
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
</style>