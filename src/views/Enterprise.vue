<template>
    <div class="container">
        <div class="content__head">
            <div class="img__block">
                <img src="@/assets/logo.png">
            </div>
            <div class="content__header">
                <h1>Lorem ipsum{{title}}</h1>
                <h3>by: Sigarachi{{author}}</h3>
            </div>
        </div>
        <div class="post__content">
            <div class="content__main">
                <div class="description">
                    <h4>Description</h4>
                    <p>{{content}}
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dignissimos quae, non mollitia, nulla provident et explicabo voluptas, exercitationem consequuntur dolore quia alias natus aliquid deleniti amet cumque eaque voluptate?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dignissimos quae, non mollitia, nulla provident et explicabo voluptas, exercitationem consequuntur dolore quia alias natus aliquid deleniti amet cumque eaque voluptate?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dignissimos quae, non mollitia, nulla provident et explicabo voluptas, exercitationem consequuntur dolore quia alias natus aliquid deleniti amet cumque eaque voluptate?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dignissimos quae, non mollitia, nulla provident et explicabo voluptas, exercitationem consequuntur dolore quia alias natus aliquid deleniti amet cumque eaque voluptate?
                    </p>
                </div>
                <hr />
                <div class="stages">
                    <h4 class="h__stages">Stages</h4>
                    <div class="stage__lst" v-for="(stage,key) in stages" :key="key">
                        <div :class="stage.state">
                            <div class="pre_line"></div>
                            <div class="point">
                                <div class="stage__name"><h4>{{stage.name}}</h4> </div>
                                <div class="stage__description"><p>{{stage.description}}</p></div>
                            </div>
                            <div class="post_line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        
    </div>
</template>

<script>
export default {
    name: 'Enterprise',
    props:{
        stages:{
            type: Array,
            default: ()=>[
                {state:"completed", name: "Huy", description: "Huy"},
                {state:"current", name: "Huy", description: "Huy"},
                {state:"not_active", name: "Huy", description: "Huy"}
            ]
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
$bluish: #4b6deb;
$grayish:  rgba(207, 207, 207);

.container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0 auto;
    padding-top: 70px;
    left: 10%;
    width: 50%;
    display: block;
    justify-content: space-between;
    .img__block{
        width: 30%;
        margin-top: 84px;
        margin-left: 30px;
    }
    .content__head{
        display: flex;
        height: 230px;
        margin-bottom: 30px;
        border-bottom: 0.3px solid gray;
        .content__header{
            position: absolute;
            top: 205px;
            left: 35%;
        }
    }
    .post__content{
        .content__main{
            margin-bottom: 20px;
        }
        .content__footer{
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .description{
            margin-bottom: 30px;
        }
        .h__stages{
            margin-top:20px;
            margin-left: 10px;
        }
    }
    p{
        margin-top:5px;
    }

    .stages{
        display: block;
        .stage__lst{
            display: flex;
            margin-top: 50px;
            margin-bottom: 50px;
            text-align: center;
            flex: 1;
            .point{
                width: 70px;
                height: 70px;
                border: 1px solid transparent;
                border-radius: 35px;
                background: $grayish;
                z-index: 1;
                .stage__name, .stage__description{
                    margin-left: 100px;
                    
                }
                .stage__name{
                    margin-top: 10px;
                }
                
            }
            .completed{
                .point{
                    background: $bluish;
                }
            }
            .current{
                .point{
                    border: 1px solid $bluish;
                }
            }
            .pre_line, .post_line{
                height: 100%;
                width: 1px;
                background: $grayish;
                margin-left: 50%;
                z-index: 0;
            }
            .completed{
                .pre_line, .post_line{
                    background: $bluish;
                }
            }
            .current{
                .pre_line{
                    background: $bluish;
                }
            }
        }
    }
    
}
</style>