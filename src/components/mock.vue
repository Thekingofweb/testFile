<template>
    <div>
        <ul>
            <li v-for= "item in list" :key="item.age">
                <span>{{item.name}}</span>
                <span>{{item.age}}</span>
                <span>{{item.address}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "mock",
    data(){
        return{
            list:[]
        }
    },
    mounted: function(){
        let g =this;
        this.$http.get("/dashboard/getWidgetList.do").then(res => {
            debugger
            res = res.data || {};
            g.list = [...res.result]
        });
        
    }
}
</script>

