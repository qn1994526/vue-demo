<template>
		<header>
			<div class="container">
				<div class="nav-header">
					<h1 class="logo"><router-link v-bind:to="logo.src">{{logo.title}}</router-link></h1>

					<nav>
						<ul v-if="liItems[0].isA">
							<li v-for="item in liItems" v-bind:class="{active:item.isActive}" @click="changeActive(item)">
								<router-link v-bind:to="item.src">{{item.title}}</router-link>
							</li>

							<li>
								<a @click.prevent="print">打印此页</a>
							</li>

						</ul>

						<ul v-else>
							<li>
								<a href="/">首页</a>
							</li >
						</ul>

						<ul>
							<li>
								<a title="More" id="more" @click="slide()">
									<i></i>
								</a>
							</li>
						</ul>
					</nav>

					
				</div>
			</div>

			<nav :class="{slide:true,show:isShow}">
				<ul>
					<li v-for="item in liItems" >
						<router-link v-bind:to="item.src">{{item.title}}</router-link>
					</li>

					<li>
						<a @click.prevent="print">打印此页</a>
					</li>
				</ul>
			</nav>

		</header>
</template>

<script>

export default{
	props:['liItems'],
	data(){
		return{
			logo:{
				title:"Database",
				src:"/"
			},
			isShow:false
		}
	},
	methods:{
		print:function(){
			window.print();
		},

		changeActive:function(item){
			var length = this.liItems.length;
			for(var i = 0;i<length;i++){
				this.liItems[i].isActive = false;
			}
			item.isActive = true;
		},

		slide:function(){ 
  			this.isShow = !this.isShow;
		}
	},

	created(){
		window.onresize = function(){
			this.isShow = false;
		}
	}
}
</script>

<style lang="scss" scoped>
	$height:6rem;

	.slide{
		display: none;
		margin-bottom: 50px;
		background-color:#fff;
		position:relative;
		width:100%;
		height: auto;
		padding:12px 28px;
		border-top:2px solid #eee;
		transition: 2s all ease;
		ul{
			width: 100%;
			position:relative;	

			li{
				width: 100%;
				background-color:#fff;
				margin: 2px auto;
				border-radius:30px;
				height: 52px;
				padding:16px 0px;
				border-bottom:2px dotted #eee;

				&:hover{
					background-color:#00adb5;
					height: 60px;
					width: 92%;

					a{
						color: #333;
					}
				}


				a{
					display: inline;
					font-size: 20px;
				}
			}
		}
	}

	.show{
		height:auto;
		display: block;
	}


	header{
		height: $height;
		width: 100%;
		background: white;
    	box-shadow: 0 0.25rem 0.25rem -0.25rem rgba(0, 0, 0, 0.22);
    	padding: 0;

		position: relative;
		top: 0;
		left: 0;

	}

	h1, h2, h3, h4, h5, h6 {
	    color: rgba(0, 0, 0, 0.7);
	    font-weight: 400;
	    margin: 0 0 1.875rem;
	}

	.container{
		width: 1170px;
		height: $height;
		padding:0px 15px;
		margin: 0 auto;
	}

	.nav-header{
		float: left;
		height: $height;
	    width: 100%;
	}

	.logo {
	    float: left;
	    font-size: 22px;
	    font-weight: 700;
	    margin-top: 1rem;
	    padding-top: 15px;
	    text-transform: uppercase;

	    a {
		    border: 2px solid #00adb5;
		    color: rgba(21, 31, 44, 0.8);
		    padding: 0 7px;
		    position: relative;

		    &:hover,&:focus{
		    	color: rgba(0, 0,0 , 0.9);
		    }
		}
	}

	nav{
	    display: block;
	    float: right;
	    position: relative;
	    z-index: 100;

	    ul{
		    color: #848484;
		    font-family: "Open Sans",Arial,serif;
		    height: $height;
		    font-weight: 300;

		    li{
				float: left;
				height: 0;
			    padding-top: 0.25rem;
				position: relative;
				list-style: none;
				transition: 1s all ease;
				cursor: pointer;

				a{
					display: block;
					height: 100%;
					position: relative;
				    color: rgba(0, 0, 0, 0.8);
				    font-size: 0.875rem;
				    font-weight: 400;
				    padding: 2.125rem 1.3rem;
				    text-decoration: none;
				    text-transform: uppercase;
					transition: 0.5s all ease;
				}

				&:hover{
					background-color: #00adb5;
					height: $height;

					a{
						color: #fff;
					}
				}	
			}

			.active{
				background-color: #00adb5;
				color: #fff;
				height: $height;
				a{
					color: #fff;
				}
			}
		}
	}




	// 响应式布局
	@media screen and (max-width:1200px){
		.container{
			width: 970px;
		}
	}

	@media screen and (max-width:1000px){
		.container{
			width: 820px;
		}
	}

	@media screen and (max-width:840px){
		.container{
			width: 100%;
		}

		
		ul:first-child{
			display: none;
		}
		

		ul:last-child{
			display: block;

			li{
				&:hover{
					background-color:#fff;
				}
			}

			a{
				&:hover{

					i{
						&::before{
					    	top:-10px;
					    }

					    &::after{
					    	bottom:-10px;
				    	}
					}
					
			    }
			}

			i{
				background: #000 none repeat scroll 0 0;
			    color: #000;
			    display: inline-block;
			    font: bold 14px/0.4 Helvetica;
			    height: 2px;
			    position: relative;
			    text-indent: -55px;
			    text-transform: uppercase;
			    transition: all 0.2s ease-out 0s;
			    width: 30px;

			    &::before,&::after{
			    	background: #000 none repeat scroll 0 0;
				    content: "";
				    height: 2px;
				    left: 0;
				    position: absolute;
				    transition: all 0.2s ease 0s;
				    width: 30px;
			    }

			    &::before{
			    	top:-7px;
				    transition: all 0.2s ease 0s;

			    }

			    &::after{
			    	bottom:-7px;
				    transition: all 0.2s ease 0s;

			    }
			}
		}
	}
</style>

<style>
	*{
		padding: 0;
		margin: 0;
		text-decoration: none;
        box-sizing: border-box;
	}	
	body{
		background: #f9f9f9 none repeat scroll 0 0;
		color: #89867e;
		font-size: 16px;
	    font-family: "Lato",Calibri,Arial,sans-serif;
	}
</style>