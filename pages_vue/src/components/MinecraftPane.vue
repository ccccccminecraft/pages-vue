<template>
<div class="main">
    <h1>サーバー状況</h1>
    <div class="box">
        <p>疲れた！</p>
        <p>デザインはまた今度</p>
        <p>ただいま休止中です</p>
        <table>
            <tr>
                <th>サーバー名</th>
                <th>アドレス</th>
                <th>人数</th>
                <th>ping</th>
            </tr>
            <tr v-for="(server, key) in this.servers" :key="key">
                <td>{{server.server_name}}</td>
                <td>{{server.global_address}}</td>
                <td>{{server.players}}</td>
                <td>{{server.ping}}</td>
            </tr>
        </table>
        <div class="top">
            <router-link to="/">戻る</router-link>
        </div>
    </div>
    <div class="footer">
        GitHub Pagesで公開しています。
    </div>
</div>
</template>

<script>
import axios from "axios";

export default{
    data: function(){
        return {
            servers: undefined
        }
    },
    created: function(){
        // 動くようになるまでコメントアウト
        // this.getStatus()
    },
    methods: {
        getStatus(){
            const url = "https://hanage-community-servers.net/minecraft"
            axios
                .get(url)
                .then(responce=>(this.servers = responce.data))
        }
    }
}
</script>
<style>
.box{
    width: clamp(100px,90%,100vh);
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
table{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}
th{
    border: 2px #cccccc solid;
}
td{
    border: 2px #cccccc solid;
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
