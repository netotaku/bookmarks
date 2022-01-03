<template>
    <footer class="footer section section--equal">        
        <p><strong>Nick Clarkson</strong> is an award winning full stack developer and Technical Director at <a target="_blank" href="https://wearehalo.co.uk">Halo</a>.</p>
        <ul class="socials">
            <li v-for="link in socials" :key="link.label">
                <a :href="link.href"><i :class="link.icon"></i></a></li>            
        </ul>
        <p><router-link to="/me">More ...</router-link></p>
    </footer>
</template>
<script>
export default {
    data: function(){
        return {
            socials: [
                { 'label': 'Twitter', 'icon': 'fab fa-twitter-square', 'href': 'https://twitter.com/t_pk'},
                { 'label': 'Instagram', 'icon': 'fab fa-instagram-square', 'href': 'https://twitter.com/t_pk'},
                { 'label': 'LinkedIn', 'icon': 'fab fa-linkedin', 'href': 'https://twitter.com/t_pk'}
            ]
        }
    }
}
</script>

<style lang="scss">
    @import "../scss/_vars.scss";
    .footer{
        border-top: solid 8px #377D14;      
        color: #B8D2AC;  
        a{
            color: #BBED30;
        }
        ul{
            list-style-type: none;
            // margin-top: $space;
        }
    }
    .socials{
        display: flex;
        a{
            text-decoration: none;
        }
        li{
            display: block;
            font-size: 2em;
            margin-right: 8px;
        }
    }
</style>
