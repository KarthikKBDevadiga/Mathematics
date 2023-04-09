var unit1 = document.getElementById('unit_1');
var period1 = document.getElementById('period_1');
var audio = document.getElementById('audio');																					

var introTitle = document.getElementById('introduction_title');
var introContent = document.getElementById('introduction_content');

var isAnimating=true;
$(window).on('load', function(){
	setTimeout(function() {
		document.getElementById('loader_icon').style.animation='fadeOut 1s';
		setTimeout(function(){
			document.getElementById('loader').style.display='none';
			document.getElementById('container').style.display="block";
			document.getElementById('select_unit').style.display="block";
			document.getElementById('logo').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
			
			document.getElementById('application_title').style.opacity=1;
			document.getElementById('application_title').style.animation='fadeIn 2s';
			setTimeout(function(){
				document.getElementById('period-one-button').style.opacity=1;
				document.getElementById('period-one-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				setTimeout(function(){
					document.getElementById('period-two-button').style.opacity=1;
					document.getElementById('period-two-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					setTimeout(function(){
						document.getElementById('period-three-button').style.opacity=1;
						document.getElementById('period-three-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
						setTimeout(function(){
							document.getElementById('period-four-button').style.opacity=1;
							document.getElementById('period-four-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
							setTimeout(function(){
								document.getElementById('period-five-button').style.opacity=1;
								document.getElementById('period-five-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
								setTimeout(function(){
									document.getElementById('period-six-button').style.opacity=1;
									document.getElementById('period-six-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
									setTimeout(function(){
										document.getElementById('period-seven-button').style.opacity=1;
										document.getElementById('period-seven-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
										setTimeout(function(){
											document.getElementById('period-eight-button').style.opacity=1;
											document.getElementById('period-eight-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
											isAnimating=false;
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},200);
		},1000);	
	}, 1000);

	document.addEventListener('swiped-left', function(e) {
	    if(isAnimating){
	    	audio.pause();
	    	audio.currentTime=0;
	    	isAnimating=false;
	    	pageIndex+=1;
	    }
	    next();
	});
});

var pageIndex=0;

document.body.onkeyup = function(e){
	if(pageIndex==0){
		if(isAnimating)return;
		if(e.key=='1')
			openUnit1();
		else if(e.key=='2')	openUnit2();
		else if(e.key=='3')	openUnit3();
		else if(e.key=='4')	openUnit4();
		else if(e.key=='5')	openUnit5();
		else if(e.key=='6')	openUnit6();
		else if(e.key=='7')	openUnit7();
		else if(e.key=='8')	openUnit8();
	}else{
		if(e.key=='ArrowLeft' || e.key=='Backspace')
			backspace();
		else if(e.key=='ArrowRight'|| e.key=='ArrowDown'){
			if(isAnimating){
				audio.pause();
				audio.currentTime=0;
				isAnimating=false;
				pageIndex+=1;
			}
    		next();
		}
	}
}

function backspace(){
	if(pageIndex==1000){
		backHomerFromUnit1();
	}else if(pageIndex==2000){
		backHomerFromUnit2();
	}else if(pageIndex==3000){
		backHomerFromUnit3();
	}else if(pageIndex==4000){
		backHomerFromUnit4();
	}else if(pageIndex==5000){
		backHomerFromUnit5();
	}else if(pageIndex==6000){
		backHomerFromUnit6();
	}else if(pageIndex==7000){
		backHomerFromUnit7();
	}else if(pageIndex==8000){
		backHomerFromUnit8();
	}
}

function next(){
	if(pageIndex==8000) next8001();
	else if(pageIndex==8001) next8002();
	else if(pageIndex==8002) next8003();
	else if(pageIndex==8003) next8004();
	else if(pageIndex==8004) next8005();
	else if(pageIndex==8005) next8006();
	else if(pageIndex==8006) next8007();
	else if(pageIndex==8007) next8008();
	else if(pageIndex==8008) next8009();
	else if(pageIndex==8009) next8010();
	else if(pageIndex==8010) next8011();
	else if(pageIndex==8011) next8012();
	else if(pageIndex==8012) next8013();
	else if(pageIndex==8013) next8014();
	else if(pageIndex==8014) next8015();
	else if(pageIndex==8015) next8016();
	else if(pageIndex==8016) next8017();
	else if(pageIndex==8017) next8018();
	else if(pageIndex==8018) next8019();
	else if(pageIndex==8019) next8020();
	else if(pageIndex==8020) next8021();
	else if(pageIndex==8021) next8022();
	else if(pageIndex==8022) next8023();
	else if(pageIndex==8023) next8024();
	else if(pageIndex==8024) next8025();
	else if(pageIndex==8025) next8026();
	else if(pageIndex==8026) next8027();
	else if(pageIndex==8027) next8028();
	else if(pageIndex==8028) next8029();
	else if(pageIndex==8029) next8030();
	else if(pageIndex==8030) next8031();
	else if(pageIndex==8032) next8033();
	else if(pageIndex==8033) next8034();
	else if(pageIndex==8034) next8035();
}

function openUnit1(){
	if(isAnimating)return;
	isAnimating=true;
	document.getElementById('logo').style.animation='scaleDown 500ms ';
	setTimeout(function(){
		document.getElementById('logo').style.opacity=0;
	},500);
	document.getElementById('application_title').style.opacity=0;
	document.getElementById('application_title').style.animation = 'fadeOut 500ms';
	document.getElementById('period-eight-button').style.opacity=0;
	document.getElementById('period-eight-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
	setTimeout(function(){
		document.getElementById('period-seven-button').style.opacity=0;
		document.getElementById('period-seven-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
		setTimeout(function(){
			document.getElementById('period-six-button').style.opacity=0;
			document.getElementById('period-six-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
			setTimeout(function(){
				document.getElementById('period-five-button').style.opacity=0;
				document.getElementById('period-five-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				setTimeout(function(){
					document.getElementById('period-four-button').style.opacity=0;
					document.getElementById('period-four-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					setTimeout(function(){
						document.getElementById('period-three-button').style.opacity=0;
						document.getElementById('period-three-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
						setTimeout(function(){
							document.getElementById('period-two-button').style.opacity=0;
							document.getElementById('period-two-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
							setTimeout(function(){
								document.getElementById('period-one-button').style.opacity=0;
								document.getElementById('period-one-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
							},100);
						},100);
					},100);
				},100);
			},100);
		},100);
	},100);
	setTimeout(function(){
		document.getElementById('select_unit').style.animation='offAnimate 1s ease';
		setTimeout(function() {
			document.getElementById('select_unit').style.display='none';
			document.getElementById('period-one').style.display='block';
			document.getElementById('period-one').style.animation='onAnimate 1s ease';
			setTimeout(function(){
				document.getElementById('period-one-back').style.opacity=1;
				document.getElementById('period-one-back').style.animation='';
				document.getElementById('period-one-back').style.animation='fadeIn 500ms';
				document.getElementById('period-one-banner').style.opacity=1;
				document.getElementById('period-one-banner').style.animation = 'fadeIn 500ms';
				document.getElementById('period-one').style.animation='';
				audio.src = 'audio/period_1/period_1.mp3';
				audio.load();
				audio.play();
				audio.onended = function () {
					audio.onended = null;
					setTimeout(function () {
						isAnimating=false;
						pageIndex = 1000;
					}, 1000);
				};
			},1000);
		}, 1000);
	},1200);
}
function backHomerFromUnit1(){
	if(isAnimating)return;
	isAnimating=true;
	document.getElementById('period-one-back').style.animation='fadeOut 500ms';
	document.getElementById('period-one-banner').style.animation = 'fadeOut 500ms';
	setTimeout(function(){
		document.getElementById('period-one-banner').style.opacity=0;
		document.getElementById('period-one-back').style.opacity=0;
		document.getElementById('period-one-back').style.animation='';
		document.getElementById('period-one').style.animation='offAnimate 1s ease';
		setTimeout(function(){
			document.getElementById('period-one').style.display='none';
			document.getElementById('select_unit').style.display='block';
			document.getElementById('select_unit').style.animation='onAnimate 1s ease';
			setTimeout(function(){
				document.getElementById('logo').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				document.getElementById('logo').style.opacity=1;
				document.getElementById('application_title').style.opacity=1;
				document.getElementById('application_title').style.animation = 'fadeIn 500ms';
				document.getElementById('select_unit').style.animation='';
				document.getElementById('period-one-button').style.opacity=1;
				document.getElementById('period-one-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				setTimeout(function(){
					document.getElementById('period-two-button').style.opacity=1;
					document.getElementById('period-two-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					setTimeout(function(){
						document.getElementById('period-three-button').style.opacity=1;
						document.getElementById('period-three-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
						setTimeout(function(){
							document.getElementById('period-four-button').style.opacity=1;
							document.getElementById('period-four-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
							setTimeout(function(){
								document.getElementById('period-five-button').style.opacity=1;
								document.getElementById('period-five-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
								setTimeout(function(){
									document.getElementById('period-six-button').style.opacity=1;
									document.getElementById('period-six-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
									setTimeout(function(){
										document.getElementById('period-seven-button').style.opacity=1;
										document.getElementById('period-seven-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
										setTimeout(function(){
											document.getElementById('period-eight-button').style.opacity=1;
											document.getElementById('period-eight-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
											setTimeout(function(){
												isAnimating=false;
												pageIndex=0;
											},500);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},1000);
		},1000);
	},500);
}
function openUnit2(){
	if(isAnimating)return;
	isAnimating=true;
	document.getElementById('logo').style.animation='scaleDown 500ms ';
	setTimeout(function(){
		document.getElementById('logo').style.opacity=0;
	},500);
	document.getElementById('application_title').style.opacity=0;
	document.getElementById('application_title').style.animation = 'fadeOut 500ms';
	document.getElementById('period-eight-button').style.opacity=0;
	document.getElementById('period-eight-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
	setTimeout(function(){
		document.getElementById('period-seven-button').style.opacity=0;
		document.getElementById('period-seven-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
		setTimeout(function(){
			document.getElementById('period-six-button').style.opacity=0;
			document.getElementById('period-six-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
			setTimeout(function(){
				document.getElementById('period-five-button').style.opacity=0;
				document.getElementById('period-five-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				setTimeout(function(){
					document.getElementById('period-four-button').style.opacity=0;
					document.getElementById('period-four-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					setTimeout(function(){
						document.getElementById('period-three-button').style.opacity=0;
						document.getElementById('period-three-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
						document.getElementById('period-one-button').style.opacity=0;
						document.getElementById('period-one-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
						setTimeout(function(){
							document.getElementById('period-two-button').style.opacity=0;
								document.getElementById('period-two-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
						},100);
					},100);
				},100);
			},100);
		},100);
	},100);
	setTimeout(function(){
		document.getElementById('select_unit').style.animation='offAnimate 1s ease';
		setTimeout(function() {
			document.getElementById('select_unit').style.display='none';
			document.getElementById('period-two').style.display='block';
			document.getElementById('period-two').style.animation='onAnimate 1s ease';
			setTimeout(function(){
				document.getElementById('period-two-back').style.opacity=1;
				document.getElementById('period-two-back').style.animation='';
				document.getElementById('period-two-back').style.animation='fadeIn 500ms';
				document.getElementById('period-two_title').style.opacity=1;
				document.getElementById('period-two_title').style.animation = 'fadeIn 500ms';
				document.getElementById('period-two').style.animation = '';
				isAnimating=false;
				pageIndex=2000;
			},1000);
		}, 1000);
	},1100);
}
function backHomerFromUnit2(){
	if(isAnimating)return;
	isAnimating=true;
	document.getElementById('period-two-back').style.animation='fadeOut 500ms';
	document.getElementById('period-two_title').style.animation = 'fadeOut 500ms';
	setTimeout(function(){
		document.getElementById('period-two_title').style.opacity=0;
		document.getElementById('period-two-back').style.opacity=0;
		document.getElementById('period-two-back').style.animation='';
		document.getElementById('period-two').style.animation='offAnimate 1s ease';
		setTimeout(function(){
			document.getElementById('period-two').style.display='none';
			document.getElementById('select_unit').style.display='block';
			document.getElementById('select_unit').style.animation='onAnimate 1s ease';
			setTimeout(function(){
				document.getElementById('logo').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				document.getElementById('logo').style.opacity=1;
				document.getElementById('application_title').style.opacity=1;
				document.getElementById('application_title').style.animation = 'fadeIn 500ms';
				document.getElementById('select_unit').style.animation='';
				document.getElementById('period-one-button').style.opacity=1;
				document.getElementById('period-one-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				setTimeout(function(){
					document.getElementById('period-two-button').style.opacity=1;
					document.getElementById('period-two-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					setTimeout(function(){
						document.getElementById('period-three-button').style.opacity=1;
						document.getElementById('period-three-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
						setTimeout(function(){
							document.getElementById('period-four-button').style.opacity=1;
							document.getElementById('period-four-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
							setTimeout(function(){
								document.getElementById('period-five-button').style.opacity=1;
								document.getElementById('period-five-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
								setTimeout(function(){
									document.getElementById('period-six-button').style.opacity=1;
									document.getElementById('period-six-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
									setTimeout(function(){
										document.getElementById('period-seven-button').style.opacity=1;
										document.getElementById('period-seven-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
										setTimeout(function(){
											document.getElementById('period-eight-button').style.opacity=1;
											document.getElementById('period-eight-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
											setTimeout(function(){
												isAnimating=false;
												pageIndex=0;
											},500);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},1000);
		},1000);
	},500);
}
function openUnit3(){
	if(isAnimating)return;
	isAnimating=true;
	document.getElementById('logo').style.animation='scaleDown 500ms ';
	setTimeout(function(){
		document.getElementById('logo').style.opacity=0;
	},500);
	document.getElementById('application_title').style.opacity=0;
	document.getElementById('application_title').style.animation = 'fadeOut 500ms';
	document.getElementById('period-eight-button').style.opacity=0;
	document.getElementById('period-eight-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
	setTimeout(function(){
		document.getElementById('period-seven-button').style.opacity=0;
		document.getElementById('period-seven-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
		setTimeout(function(){
			document.getElementById('period-six-button').style.opacity=0;
			document.getElementById('period-six-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
			setTimeout(function(){
				document.getElementById('period-five-button').style.opacity=0;
				document.getElementById('period-five-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				document.getElementById('period-one-button').style.opacity=0;
				document.getElementById('period-one-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				setTimeout(function(){
					document.getElementById('period-four-button').style.opacity=0;
					document.getElementById('period-four-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					document.getElementById('period-two-button').style.opacity=0;
					document.getElementById('period-two-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					setTimeout(function(){
						document.getElementById('period-three-button').style.opacity=0;
						document.getElementById('period-three-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					},100);
				},100);
			},100);
		},100);
	},100);
	setTimeout(function(){
		document.getElementById('select_unit').style.animation='offAnimate 1s ease';
		setTimeout(function() {
			document.getElementById('select_unit').style.display='none';
			document.getElementById('period-three').style.display='block';
			document.getElementById('period-three').style.animation='onAnimate 1s ease';
			setTimeout(function(){
				document.getElementById('period-three-back').style.opacity=1;
				document.getElementById('period-three-back').style.animation='';
				document.getElementById('period-three-back').style.animation='fadeIn 500ms';
				document.getElementById('period-three_title').style.opacity=1;
				document.getElementById('period-three_title').style.animation = 'fadeIn 500ms';
				isAnimating=false;
				pageIndex=3000;
			},1000);
		}, 1000);
	},1000);
}
function backHomerFromUnit3(){
	if(isAnimating)return;
	isAnimating=true;
	document.getElementById('period-three-back').style.animation='fadeOut 500ms';
	document.getElementById('period-three_title').style.animation = 'fadeOut 500ms';
	setTimeout(function(){
		document.getElementById('period-three_title').style.opacity=0;
		document.getElementById('period-three-back').style.opacity=0;
		document.getElementById('period-three-back').style.animation='';
		document.getElementById('period-three').style.animation='offAnimate 1s ease';
		setTimeout(function(){
			document.getElementById('period-three').style.display='none';
			document.getElementById('select_unit').style.display='block';
			document.getElementById('select_unit').style.animation='onAnimate 1s ease';
			setTimeout(function(){
				document.getElementById('logo').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				document.getElementById('logo').style.opacity=1;
				document.getElementById('application_title').style.opacity=1;
				document.getElementById('application_title').style.animation = 'fadeIn 500ms';
				document.getElementById('select_unit').style.animation='';
				document.getElementById('period-one-button').style.opacity=1;
				document.getElementById('period-one-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				setTimeout(function(){
					document.getElementById('period-two-button').style.opacity=1;
					document.getElementById('period-two-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					setTimeout(function(){
						document.getElementById('period-three-button').style.opacity=1;
						document.getElementById('period-three-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
						setTimeout(function(){
							document.getElementById('period-four-button').style.opacity=1;
							document.getElementById('period-four-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
							setTimeout(function(){
								document.getElementById('period-five-button').style.opacity=1;
								document.getElementById('period-five-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
								setTimeout(function(){
									document.getElementById('period-six-button').style.opacity=1;
									document.getElementById('period-six-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
									setTimeout(function(){
										document.getElementById('period-seven-button').style.opacity=1;
										document.getElementById('period-seven-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
										setTimeout(function(){
											document.getElementById('period-eight-button').style.opacity=1;
											document.getElementById('period-eight-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
											setTimeout(function(){
												isAnimating=false;
												pageIndex=0;
											},500);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},1000);
		},1000);
	},500);
}
function openUnit4(){
	if(isAnimating)return;
	isAnimating=true;
	document.getElementById('logo').style.animation='scaleDown 500ms ';
	setTimeout(function(){
		document.getElementById('logo').style.opacity=0;
	},500);
	document.getElementById('application_title').style.opacity=0;
	document.getElementById('application_title').style.animation = 'fadeOut 500ms';
	document.getElementById('period-eight-button').style.opacity=0;
	document.getElementById('period-eight-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
	setTimeout(function(){
		document.getElementById('period-seven-button').style.opacity=0;
		document.getElementById('period-seven-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
		document.getElementById('period-one-button').style.opacity=0;
		document.getElementById('period-one-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
		setTimeout(function(){
			document.getElementById('period-six-button').style.opacity=0;
			document.getElementById('period-six-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
			document.getElementById('period-two-button').style.opacity=0;
			document.getElementById('period-two-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
			setTimeout(function(){
				document.getElementById('period-five-button').style.opacity=0;
				document.getElementById('period-five-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				document.getElementById('period-three-button').style.opacity=0;
				document.getElementById('period-three-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				setTimeout(function(){
					document.getElementById('period-four-button').style.opacity=0;
					document.getElementById('period-four-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				},100);
			},100);
		},100);
	},100);
	setTimeout(function(){
		document.getElementById('select_unit').style.animation='offAnimate 1s ease';
		setTimeout(function() {
			document.getElementById('select_unit').style.display='none';
			document.getElementById('period-four').style.display='block';
			document.getElementById('period-four').style.animation='onAnimate 1s ease';
			setTimeout(function(){
				document.getElementById('period-four-back').style.opacity=1;
				document.getElementById('period-four-back').style.animation='';
				document.getElementById('period-four-back').style.animation='fadeIn 500ms';
				document.getElementById('period-four_title').style.opacity=1;
				document.getElementById('period-four_title').style.animation = 'fadeIn 500ms';
				isAnimating=false;
				pageIndex=4000;
			},1000);
		}, 1000);
	},900);
}
function backHomerFromUnit4(){
	if(isAnimating)return;
	isAnimating=true;
	document.getElementById('period-four-back').style.animation='fadeOut 500ms';
	document.getElementById('period-four_title').style.animation = 'fadeOut 500ms';
	setTimeout(function(){
		document.getElementById('period-four_title').style.opacity=0;
		document.getElementById('period-four-back').style.opacity=0;
		document.getElementById('period-four-back').style.animation='';
		document.getElementById('period-four').style.animation='offAnimate 1s ease';
		setTimeout(function(){
			document.getElementById('period-four').style.display='none';
			document.getElementById('select_unit').style.display='block';
			document.getElementById('select_unit').style.animation='onAnimate 1s ease';
			setTimeout(function(){
				document.getElementById('logo').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				document.getElementById('logo').style.opacity=1;
				document.getElementById('application_title').style.opacity=1;
				document.getElementById('application_title').style.animation = 'fadeIn 500ms';
				document.getElementById('select_unit').style.animation='';
				document.getElementById('period-one-button').style.opacity=1;
				document.getElementById('period-one-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				setTimeout(function(){
					document.getElementById('period-two-button').style.opacity=1;
					document.getElementById('period-two-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					setTimeout(function(){
						document.getElementById('period-three-button').style.opacity=1;
						document.getElementById('period-three-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
						setTimeout(function(){
							document.getElementById('period-four-button').style.opacity=1;
							document.getElementById('period-four-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
							setTimeout(function(){
								document.getElementById('period-five-button').style.opacity=1;
								document.getElementById('period-five-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
								setTimeout(function(){
									document.getElementById('period-six-button').style.opacity=1;
									document.getElementById('period-six-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
									setTimeout(function(){
										document.getElementById('period-seven-button').style.opacity=1;
										document.getElementById('period-seven-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
										setTimeout(function(){
											document.getElementById('period-eight-button').style.opacity=1;
											document.getElementById('period-eight-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
											setTimeout(function(){
												isAnimating=false;
												pageIndex=0;
											},500);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},1000);
		},1000);
	},500);
}
function openUnit5(){
	if(isAnimating)return;
	isAnimating=true;
	document.getElementById('logo').style.animation='scaleDown 500ms ';
	setTimeout(function(){
		document.getElementById('logo').style.opacity=0;
	},500);
	document.getElementById('application_title').style.opacity=0;
	document.getElementById('application_title').style.animation = 'fadeOut 500ms';
	document.getElementById('period-one-button').style.opacity=0;
	document.getElementById('period-one-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';	
	setTimeout(function(){
		document.getElementById('period-two-button').style.opacity=0;
		document.getElementById('period-two-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
		document.getElementById('period-eight-button').style.opacity=0;
		document.getElementById('period-eight-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
		setTimeout(function(){
			document.getElementById('period-seven-button').style.opacity=0;
			document.getElementById('period-seven-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
			document.getElementById('period-three-button').style.opacity=0;
			document.getElementById('period-three-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
			setTimeout(function(){
				document.getElementById('period-six-button').style.opacity=0;
				document.getElementById('period-six-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				document.getElementById('period-four-button').style.opacity=0;
				document.getElementById('period-four-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				setTimeout(function(){
					document.getElementById('period-five-button').style.opacity=0;
					document.getElementById('period-five-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				},100);
			},100);
		},100);
	},100);
	setTimeout(function(){
		document.getElementById('select_unit').style.animation='offAnimate 1s ease';
		setTimeout(function() {
			document.getElementById('select_unit').style.display='none';
			document.getElementById('period-five').style.display='block';
			document.getElementById('period-five').style.animation='onAnimate 1s ease';
			setTimeout(function(){
				document.getElementById('period-five-back').style.opacity=1;
				document.getElementById('period-five-back').style.animation='';
				document.getElementById('period-five-back').style.animation='fadeIn 500ms';
				document.getElementById('period-five_title').style.opacity=1;
				document.getElementById('period-five_title').style.animation = 'fadeIn 500ms';
				isAnimating=false;
				pageIndex=5000;
			},1000);
		}, 1000);
	},900);
}
function backHomerFromUnit5(){
	if(isAnimating)return;
	isAnimating=true;
	document.getElementById('period-five-back').style.animation='fadeOut 500ms';
	document.getElementById('period-five_title').style.animation = 'fadeOut 500ms';
	setTimeout(function(){
		document.getElementById('period-five_title').style.opacity=0;
		document.getElementById('period-five-back').style.opacity=0;
		document.getElementById('period-five-back').style.animation='';
		document.getElementById('period-five').style.animation='offAnimate 1s ease';
		setTimeout(function(){
			document.getElementById('period-five').style.display='none';
			document.getElementById('select_unit').style.display='block';
			document.getElementById('select_unit').style.animation='onAnimate 1s ease';
			setTimeout(function(){
				document.getElementById('logo').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				document.getElementById('logo').style.opacity=1;
				document.getElementById('application_title').style.opacity=1;
				document.getElementById('application_title').style.animation = 'fadeIn 500ms';
				document.getElementById('select_unit').style.animation='';
				document.getElementById('period-one-button').style.opacity=1;
				document.getElementById('period-one-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				setTimeout(function(){
					document.getElementById('period-two-button').style.opacity=1;
					document.getElementById('period-two-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					setTimeout(function(){
						document.getElementById('period-three-button').style.opacity=1;
						document.getElementById('period-three-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
						setTimeout(function(){
							document.getElementById('period-four-button').style.opacity=1;
							document.getElementById('period-four-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
							setTimeout(function(){
								document.getElementById('period-five-button').style.opacity=1;
								document.getElementById('period-five-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
								setTimeout(function(){
									document.getElementById('period-six-button').style.opacity=1;
									document.getElementById('period-six-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
									setTimeout(function(){
										document.getElementById('period-seven-button').style.opacity=1;
										document.getElementById('period-seven-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
										setTimeout(function(){
											document.getElementById('period-eight-button').style.opacity=1;
											document.getElementById('period-eight-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
											setTimeout(function(){
												isAnimating=false;
												pageIndex=0;
											},500);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},1000);
		},1000);
	},500);
}
function openUnit6(){
	if(isAnimating)return;
	isAnimating=true;
	document.getElementById('logo').style.animation='scaleDown 500ms ';
	setTimeout(function(){
		document.getElementById('logo').style.opacity=0;
	},500);
	document.getElementById('application_title').style.opacity=0;
	document.getElementById('application_title').style.animation = 'fadeOut 500ms';
	document.getElementById('period-one-button').style.opacity=0;
	document.getElementById('period-one-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';	
	setTimeout(function(){
		document.getElementById('period-two-button').style.opacity=0;
		document.getElementById('period-two-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
		setTimeout(function(){
			document.getElementById('period-three-button').style.opacity=0;
			document.getElementById('period-three-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
			setTimeout(function(){
				document.getElementById('period-four-button').style.opacity=0;
				document.getElementById('period-four-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				document.getElementById('period-eight-button').style.opacity=0;
				document.getElementById('period-eight-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				setTimeout(function(){
					document.getElementById('period-five-button').style.opacity=0;
					document.getElementById('period-five-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					document.getElementById('period-seven-button').style.opacity=0;
					document.getElementById('period-seven-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					setTimeout(function(){
						document.getElementById('period-six-button').style.opacity=0;
						document.getElementById('period-six-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					},100);
				},100);
			},100);
		},100);
	},100);
	setTimeout(function(){
		document.getElementById('select_unit').style.animation='offAnimate 1s ease';
		setTimeout(function() {
			document.getElementById('select_unit').style.display='none';
			document.getElementById('period-six').style.display='block';
			document.getElementById('period-six').style.animation='onAnimate 1s ease';
			setTimeout(function(){
				document.getElementById('period-six-back').style.opacity=1;
				document.getElementById('period-six-back').style.animation='';
				document.getElementById('period-six-back').style.animation='fadeIn 500ms';
				document.getElementById('period-six_title').style.opacity=1;
				document.getElementById('period-six_title').style.animation = 'fadeIn 500ms';
				isAnimating=false;
				pageIndex=6000;
			},1000);
		}, 1000);
	},1000);
}
function backHomerFromUnit6(){
	if(isAnimating)return;
	isAnimating=true;
	document.getElementById('period-six-back').style.animation='fadeOut 500ms';
	document.getElementById('period-six_title').style.animation = 'fadeOut 500ms';
	setTimeout(function(){
		document.getElementById('period-six_title').style.opacity=0;
		document.getElementById('period-six-back').style.opacity=0;
		document.getElementById('period-six-back').style.animation='';
		document.getElementById('period-six').style.animation='offAnimate 1s ease';
		setTimeout(function(){
			document.getElementById('period-six').style.display='none';
			document.getElementById('select_unit').style.display='block';
			document.getElementById('select_unit').style.animation='onAnimate 1s ease';
			setTimeout(function(){
				document.getElementById('logo').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				document.getElementById('logo').style.opacity=1;
				document.getElementById('application_title').style.opacity=1;
				document.getElementById('application_title').style.animation = 'fadeIn 500ms';
				document.getElementById('select_unit').style.animation='';
				document.getElementById('period-one-button').style.opacity=1;
				document.getElementById('period-one-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				setTimeout(function(){
					document.getElementById('period-two-button').style.opacity=1;
					document.getElementById('period-two-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					setTimeout(function(){
						document.getElementById('period-three-button').style.opacity=1;
						document.getElementById('period-three-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
						setTimeout(function(){
							document.getElementById('period-four-button').style.opacity=1;
							document.getElementById('period-four-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
							setTimeout(function(){
								document.getElementById('period-five-button').style.opacity=1;
								document.getElementById('period-five-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
								setTimeout(function(){
									document.getElementById('period-six-button').style.opacity=1;
									document.getElementById('period-six-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
									setTimeout(function(){
										document.getElementById('period-seven-button').style.opacity=1;
										document.getElementById('period-seven-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
										setTimeout(function(){
											document.getElementById('period-eight-button').style.opacity=1;
											document.getElementById('period-eight-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
											setTimeout(function(){
												isAnimating=false;
												pageIndex=0;
											},500);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},1000);
		},1000);
	},500);
}
function openUnit7(){
	if(isAnimating)return;
	isAnimating=true;
	document.getElementById('logo').style.animation='scaleDown 500ms ';
	setTimeout(function(){
		document.getElementById('logo').style.opacity=0;
	},500);
	document.getElementById('application_title').style.opacity=0;
	document.getElementById('application_title').style.animation = 'fadeOut 500ms';
	document.getElementById('period-one-button').style.opacity=0;
	document.getElementById('period-one-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';	
	setTimeout(function(){
		document.getElementById('period-two-button').style.opacity=0;
		document.getElementById('period-two-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
		setTimeout(function(){
			document.getElementById('period-three-button').style.opacity=0;
			document.getElementById('period-three-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
			setTimeout(function(){
				document.getElementById('period-four-button').style.opacity=0;
				document.getElementById('period-four-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				setTimeout(function(){
					document.getElementById('period-five-button').style.opacity=0;
					document.getElementById('period-five-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					setTimeout(function(){
						document.getElementById('period-six-button').style.opacity=0;
						document.getElementById('period-six-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
						document.getElementById('period-eight-button').style.opacity=0;
						document.getElementById('period-eight-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
						setTimeout(function(){
							document.getElementById('period-seven-button').style.opacity=0;
							document.getElementById('period-seven-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
						},100);
					},100);
				},100);
			},100);
		},100);
	},100);
	setTimeout(function(){
		document.getElementById('select_unit').style.animation='offAnimate 1s ease';
		setTimeout(function() {
			document.getElementById('select_unit').style.display='none';
			document.getElementById('period-seven').style.display='block';
			document.getElementById('period-seven').style.animation='onAnimate 1s ease';
			setTimeout(function(){
				document.getElementById('period-seven-back').style.opacity=1;
				document.getElementById('period-seven-back').style.animation='';
				document.getElementById('period-seven-back').style.animation='fadeIn 500ms';
				document.getElementById('period-seven_title').style.opacity=1;
				document.getElementById('period-seven_title').style.animation = 'fadeIn 500ms';
				isAnimating=false;
				pageIndex=7000;
			},1000);
		}, 1000);
	},1200);
}
function backHomerFromUnit7(){
	if(isAnimating)return;
	isAnimating=true;
	document.getElementById('period-seven-back').style.animation='fadeOut 500ms';
	document.getElementById('period-seven_title').style.animation = 'fadeOut 500ms';
	setTimeout(function(){
		document.getElementById('period-seven_title').style.opacity=0;
		document.getElementById('period-seven-back').style.opacity=0;
		document.getElementById('period-seven-back').style.animation='';
		document.getElementById('period-seven').style.animation='offAnimate 1s ease';
		setTimeout(function(){
			document.getElementById('period-seven').style.display='none';
			document.getElementById('select_unit').style.display='block';
			document.getElementById('select_unit').style.animation='onAnimate 1s ease';
			setTimeout(function(){
				document.getElementById('logo').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				document.getElementById('logo').style.opacity=1;
				document.getElementById('application_title').style.opacity=1;
				document.getElementById('application_title').style.animation = 'fadeIn 500ms';
				document.getElementById('select_unit').style.animation='';
				document.getElementById('period-one-button').style.opacity=1;
				document.getElementById('period-one-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				setTimeout(function(){
					document.getElementById('period-two-button').style.opacity=1;
					document.getElementById('period-two-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					setTimeout(function(){
						document.getElementById('period-three-button').style.opacity=1;
						document.getElementById('period-three-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
						setTimeout(function(){
							document.getElementById('period-four-button').style.opacity=1;
							document.getElementById('period-four-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
							setTimeout(function(){
								document.getElementById('period-five-button').style.opacity=1;
								document.getElementById('period-five-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
								setTimeout(function(){
									document.getElementById('period-six-button').style.opacity=1;
									document.getElementById('period-six-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
									setTimeout(function(){
										document.getElementById('period-seven-button').style.opacity=1;
										document.getElementById('period-seven-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
										setTimeout(function(){
											document.getElementById('period-eight-button').style.opacity=1;
											document.getElementById('period-eight-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
											setTimeout(function(){
												isAnimating=false;
												pageIndex=0;
											},500);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},1000);
		},1000);
	},500);
}
function openUnit8(){
	if(isAnimating)return;
	isAnimating=true;
	document.getElementById('logo').style.animation='scaleDown 500ms ';
	setTimeout(function(){
		document.getElementById('logo').style.opacity=0;
	},500);
	document.getElementById('application_title').style.opacity=0;
	document.getElementById('application_title').style.animation = 'fadeOut 500ms';
	document.getElementById('period-one-button').style.opacity=0;
	document.getElementById('period-one-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';	
	setTimeout(function(){
		document.getElementById('period-two-button').style.opacity=0;
		document.getElementById('period-two-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
		setTimeout(function(){
			document.getElementById('period-three-button').style.opacity=0;
			document.getElementById('period-three-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
			setTimeout(function(){
				document.getElementById('period-four-button').style.opacity=0;
				document.getElementById('period-four-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				setTimeout(function(){
					document.getElementById('period-five-button').style.opacity=0;
					document.getElementById('period-five-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					setTimeout(function(){
						document.getElementById('period-six-button').style.opacity=0;
						document.getElementById('period-six-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
						setTimeout(function(){
							document.getElementById('period-seven-button').style.opacity=0;
							document.getElementById('period-seven-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
							setTimeout(function(){
								document.getElementById('period-eight-button').style.opacity=0;
								document.getElementById('period-eight-button').style.animation='scaleDown 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
							},100);
						},100);
					},100);
				},100);
			},100);
		},100);
	},100);
	setTimeout(function(){
		document.getElementById('select_unit').style.animation='offAnimate 1s ease';
		setTimeout(function() {
			document.getElementById('select_unit').style.display='none';
			document.getElementById('period-eight').style.display='block';
			document.getElementById('period-eight').style.animation='onAnimate 1s ease';
			setTimeout(function(){
				document.getElementById('period-eight-back').style.opacity=1;
				document.getElementById('period-eight-back').style.animation='';
				document.getElementById('period-eight-back').style.animation='fadeIn 500ms';
				document.getElementById('period-eight-banner').style.opacity=1;
				document.getElementById('period-eight-banner').style.animation = 'fadeIn 500ms';
				audio.src = 'audio/period_8/period_8.mp3';
				audio.load();
				audio.play();
				audio.onended = function () {
					audio.onended = null;
					setTimeout(function () {
						isAnimating=false;
						pageIndex = 8000;
					}, 1000);
				};
			},1000);
		}, 1000);
	},1200);
}
function backHomerFromUnit8(){
	if(isAnimating)return;
	isAnimating=true;
	document.getElementById('period-eight-back').style.animation='fadeOut 500ms';
	document.getElementById('period-eight-banner').style.animation = 'fadeOut 500ms';
	setTimeout(function(){
		document.getElementById('period-eight-banner').style.opacity=0;
		document.getElementById('period-eight-back').style.opacity=0;
		document.getElementById('period-eight-back').style.animation='';
		document.getElementById('period-eight').style.animation='offAnimate 1s ease';
		setTimeout(function(){
			document.getElementById('period-eight').style.display='none';
			document.getElementById('select_unit').style.display='block';
			document.getElementById('select_unit').style.animation='onAnimate 1s ease';
			setTimeout(function(){
				document.getElementById('logo').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				document.getElementById('logo').style.opacity=1;
				document.getElementById('application_title').style.opacity=1;
				document.getElementById('application_title').style.animation = 'fadeIn 500ms';
				document.getElementById('select_unit').style.animation='';
				document.getElementById('period-one-button').style.opacity=1;
				document.getElementById('period-one-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
				setTimeout(function(){
					document.getElementById('period-two-button').style.opacity=1;
					document.getElementById('period-two-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
					setTimeout(function(){
						document.getElementById('period-three-button').style.opacity=1;
						document.getElementById('period-three-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
						setTimeout(function(){
							document.getElementById('period-four-button').style.opacity=1;
							document.getElementById('period-four-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
							setTimeout(function(){
								document.getElementById('period-five-button').style.opacity=1;
								document.getElementById('period-five-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
								setTimeout(function(){
									document.getElementById('period-six-button').style.opacity=1;
									document.getElementById('period-six-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
									setTimeout(function(){
										document.getElementById('period-seven-button').style.opacity=1;
										document.getElementById('period-seven-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
										setTimeout(function(){
											document.getElementById('period-eight-button').style.opacity=1;
											document.getElementById('period-eight-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
											setTimeout(function(){
												isAnimating=false;
												pageIndex=0;
											},500);
										},100);
									},100);
								},100);
							},100);
						},100);
					},100);
				},100);
			},1000);
		},1000);
	},500);
}

function openPeriod1Page(){
	window.location.href = "period1.html";
}
function openPeriod2Page(){
	window.location.href = "period2.html";
}
function openPeriod3Page(){
	window.location.href = "period3.html";
}
function openPeriod4Page(){
	window.location.href = "period4.html";
}
function openPeriod5Page(){
	window.location.href = "period5.html";
}
function openPeriod6Page(){
	window.location.href = "period6.html";
}
function openPeriod7Page(){
	window.location.href = "period7.html";
}
function openPeriod8Page(){
	next8001();
}
function next8001(){
	setProgress(3);
	isAnimating=true;
	document.getElementById('period-eight-banner').style.opacity=0;
	document.getElementById('period-eight-banner').style.animation = 'fadeOut 250ms';
	setTimeout(function(){
		document.getElementById('period-eight-banner').style.display='none';
		document.getElementById('period-eight-text').style.display='block';
		
		document.getElementById('period-eight-title').innerHTML='Factorisation using identities';
		document.getElementById('period-eight-title').style.opacity=1;
		document.getElementById('period-eight-title').style.animation = 'fadeIn 500ms';

		audio.src = 'audio/period_8/line_1.mp3';
		audio.load();
		audio.play();
		audio.onended = function () {
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8001;
		};
	},250);
}
function next8002(){
	setProgress(6);
	isAnimating=true;
	document.getElementById('period-eight-title').style.opacity=0;
	document.getElementById('period-eight-title').style.animation='animateOut 250ms';
	setTimeout(function(){
		document.getElementById('period-eight-title').innerHTML='';
		document.getElementById('period-eight-content').innerHTML='(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup><br>(a - b)<sup>2</sup> = a<sup>2</sup> - 2ab + b<sup>2</sup><br>(a + b)(a - b) = a<sup>2</sup> - b<sup>2</sup>';
		document.getElementById('period-eight-content').style.animation = 'animateIn 500ms';
		audio.src = 'audio/period_8/line_2.mp3';
		audio.load();
		audio.play();
		audio.onended = function () {
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8002;
		};
	},250);
}
function next8003(){
	setProgress(9);
	isAnimating=true;
	document.getElementById('period-eight-content').style.animation='animateOut 250ms';
	setTimeout(function(){
		document.getElementById('period-eight-content').innerHTML='The following solved examples illustrate how to use these identities for factorisation. What we do is to observe the given expression. If it has a form that fits the right hand side of one of the identities, then the expression corresponding to the left hand side of the identity gives the desired factorisation';
		document.getElementById('period-eight-content').style.animation = 'animateIn 500ms';
		audio.src = 'audio/period_8/line_3.mp3';
		audio.load();
		audio.play();
		audio.onended = function () {
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8003;
		};
	},250);
}
function next8004(){
	setProgress(12);
	isAnimating=true;
	document.getElementById('period-eight-content').style.animation='animateOut 250ms';
	setTimeout(function(){
		document.getElementById('period-eight-content').innerHTML='';
		document.getElementById('period-eight-text').style.display='none';
		document.getElementById('period-eight-example-1').style.display='block';
		document.getElementById('period-eight-example-1-title').style.opacity=1;
		document.getElementById('period-eight-example-1-title').style.animation='fadeIn 500ms';
		audio.src = 'audio/period_8/example_1_title.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8004;
		};
	},250);
}
function next8005(){
	setProgress(15);
	isAnimating=true;
	document.getElementById('period-eight-example-1-line-1').style.opacity=1;
	document.getElementById('period-eight-example-1-line-1').style.animation='animateIn 500ms';
	audio.src = 'audio/period_8/example_1_line_1.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended = null;
		isAnimating=false;
		pageIndex = 8005;
	};
}
function next8006(){
	setProgress(18);
	isAnimating=true;
	document.getElementById('period-eight-example-1-line-2').style.opacity=1;
	document.getElementById('period-eight-example-1-line-2').style.animation='animateIn 500ms';
	audio.src = 'audio/period_8/example_1_line_2.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended = null;
		isAnimating=false;
		pageIndex = 8006;
	};
}
function next8007(){
	setProgress(21);
	isAnimating=true;
	document.getElementById('period-eight-example-1-line-2').style.opacity=0;
	document.getElementById('period-eight-example-1-line-2').style.animation='animateOut 250ms';
	setTimeout(function(){
		document.getElementById('period-eight-example-1-block-1').style.opacity=1;
		document.getElementById('period-eight-example-1-block-1').style.animation='fadeIn 500ms';
		document.getElementById('period-eight-example-1-block-a-1').style.opacity=1;
		document.getElementById('period-eight-example-1-block-a-1').style.animation='fadeIn 500ms';
		setTimeout(function(){
			document.getElementById('period-eight-example-1-block-a-1').style.animation='';
		},500);
		audio.src = 'audio/period_8/example_1_block_1.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8007;
		};
	},250);
}
function next8008(){
	setProgress(24);
	isAnimating=true;
	document.getElementById('period-eight-example-1-block-2').style.opacity=1;
	document.getElementById('period-eight-example-1-block-2').style.animation='fadeIn 500ms';
	document.getElementById('period-eight-example-1-block-a-2').style.opacity=1;
	document.getElementById('period-eight-example-1-block-a-2').style.animation='fadeIn 500ms';
	setTimeout(function(){
		document.getElementById('period-eight-example-1-block-a-2').style.animation='';
	},500);
	audio.src = 'audio/period_8/example_1_block_2.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended = null;
		isAnimating=false;
		pageIndex = 8008;
	};
}
function next8009(){
	setProgress(27);
	isAnimating=true;
	document.getElementById('period-eight-example-1-block-3').style.opacity=1;
	document.getElementById('period-eight-example-1-block-3').style.animation='fadeIn 500ms';
	audio.src = 'audio/period_8/example_1_block_3.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended = null;
		isAnimating=false;
		pageIndex = 8009;
	};
}
function next8010(){
	setProgress(30);
	isAnimating=true;
	document.getElementById('period-eight-example-1-title').style.opacity=0;
	document.getElementById('period-eight-example-1-title').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-1-line-1').style.opacity=0;
	document.getElementById('period-eight-example-1-line-1').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-1-block-1').style.opacity=0;
	document.getElementById('period-eight-example-1-block-1').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-1-block-a-1').style.opacity=0;
	document.getElementById('period-eight-example-1-block-a-1').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-1-block-2').style.opacity=0;
	document.getElementById('period-eight-example-1-block-2').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-1-block-a-2').style.opacity=0;
	document.getElementById('period-eight-example-1-block-a-2').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-1-block-3').style.opacity=0;
	document.getElementById('period-eight-example-1-block-3').style.animation='fadeOut 250ms';
	setTimeout(function(){
		document.getElementById('period-eight-example-1').style.display='none';
		document.getElementById('period-eight-text').style.display="block";
		document.getElementById('period-eight-title').innerHTML='Factors of the form (x + a)(x + b)'
		document.getElementById('period-eight-title').style.opacity = 1;
		document.getElementById('period-eight-title').style.animation = 'animateIn 500ms';
		audio.src = 'audio/period_8/line_4.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8010;
		};
	},250);
}
function next8011(){
	setProgress(33);
	isAnimating=true;
	document.getElementById('period-eight-title').style.opacity=0;
	document.getElementById('period-eight-title').style.animation='animateOut 250ms';
	setTimeout(function(){
		document.getElementById('period-eight-title').innerHTML='';
		document.getElementById('period-eight-content').innerHTML='Let us now discuss how we can factorise expressions in one variable, like x<sup>2</sup> + 5x + 6, y<sup>2</sup> – 7y + 12, z<sup>2</sup> – 4z – 12, 3m<sup>2</sup> + 9m + 6, etc. Observe that these expressions are not of the type (a + b)<sup>2</sup> or (a – b)<sup>2</sup> , i.e., they are not perfect squares. For example, in x<sup>2</sup> + 5x + 6, the term 6 is not a perfect square. These expressions obviously also do not fit the type (a<sup>2</sup> – b<sup>2</sup>) either.';
		document.getElementById('period-eight-content').style.animation = 'animateIn 500ms';
		audio.src = 'audio/period_8/line_5.mp3';
		audio.load();
		audio.play();
		audio.onended = function () {
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8011;
		};
	},250);
}
function next8012(){
	setProgress(36);
	isAnimating=true;
	document.getElementById('period-eight-content').style.animation='animateOut 250ms';
	setTimeout(function(){
		document.getElementById('period-eight-content').innerHTML='They, however, seem to be of the type x<sup>2</sup> + (a + b) x + ab. We may therefore, try to use Identity IV studied in the last chapter to factorise these expressions:<br> (x + a)(x + b) = x<sup>2</sup> + (a + b)x + ab';
		document.getElementById('period-eight-content').style.animation = 'animateIn 500ms';
		audio.src = 'audio/period_8/line_6.mp3';
		audio.load();
		audio.play();
		audio.onended = function () {
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8012;
		};
	},250);
}
function next8013(){
	setProgress(39);
	isAnimating=true;
	document.getElementById('period-eight-content').style.animation='animateOut 250ms';
	setTimeout(function(){
		document.getElementById('period-eight-content').innerHTML='For that we have to look at the coefficients of x and the constant term. Let us see how it is done in the following example';
		document.getElementById('period-eight-content').style.animation = 'animateIn 500ms';
		audio.src = 'audio/period_8/line_7.mp3';
		audio.load();
		audio.play();
		audio.onended = function () {
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8013;
		};
	},250);
}
function next8014(){
	setProgress(42);
	isAnimating=true;
	document.getElementById('period-eight-content').style.animation='animateOut 250ms';
	setTimeout(function(){
		document.getElementById('period-eight-content').innerHTML='';
		document.getElementById('period-eight-text').style.display='none';
		document.getElementById('period-eight-example-2').style.display='block';
		document.getElementById('period-eight-example-2-title').style.opacity=1;
		document.getElementById('period-eight-example-2-title').style.animation='fadeIn 500ms';
		audio.src = 'audio/period_8/example_1_title.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8014;
		};
	},250);
}
function next8015(){
	setProgress(45);
	isAnimating=true;
	document.getElementById('period-eight-example-2-line-1').style.opacity=1;
	document.getElementById('period-eight-example-2-line-1').style.animation='animateIn 500ms';
	audio.src = 'audio/period_8/example_2_line_1.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended = null;
		isAnimating=false;
		pageIndex = 8015;
	};
}
function next8016(){
	setProgress(48);
	isAnimating=true;
	document.getElementById('period-eight-example-2-line-2').style.opacity=1;
	document.getElementById('period-eight-example-2-line-2').style.animation='animateIn 500ms';
	audio.src = 'audio/period_8/example_2_line_2.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended = null;
		isAnimating=false;
		pageIndex = 8016;
	};
}
function next8017(){
	setProgress(51);
	isAnimating=true;
	document.getElementById('period-eight-example-2-line-2').style.opacity=0;
	document.getElementById('period-eight-example-2-line-2').style.animation='animateOut 250ms';
	setTimeout(function(){
		document.getElementById('period-eight-example-2-line-3').style.opacity=1;
		document.getElementById('period-eight-example-2-line-3').style.animation='animateIn 500ms';
		audio.src = 'audio/period_8/example_2_line_3.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8017;
		};
	},250);
}
function next8018(){
	setProgress(54);
	isAnimating=true;
	document.getElementById('period-eight-example-2-line-3').style.opacity=0;
	document.getElementById('period-eight-example-2-line-3').style.animation='animateOut 250ms';
	setTimeout(function(){
		document.getElementById('period-eight-example-2-block-1').style.opacity=1;
		document.getElementById('period-eight-example-2-block-1').style.animation='fadeIn 500ms';
		document.getElementById('period-eight-example-2-block-a-1').style.opacity=1;
		document.getElementById('period-eight-example-2-block-a-1').style.animation='fadeIn 500ms';
		setTimeout(function(){
			document.getElementById('period-eight-example-2-block-a-1').style.animation='';
		},500);
		audio.src = 'audio/period_8/example_2_block_1.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8018;
		};
	},250);
}
function next8019(){
	setProgress(57);
	isAnimating=true;
	document.getElementById('period-eight-example-2-block-2').style.opacity=1;
	document.getElementById('period-eight-example-2-block-2').style.animation='fadeIn 500ms';
	document.getElementById('period-eight-example-2-block-a-2').style.opacity=1;
	document.getElementById('period-eight-example-2-block-a-2').style.animation='fadeIn 500ms';
	setTimeout(function(){
		document.getElementById('period-eight-example-2-block-a-2').style.animation='';
	},500);
	audio.src = 'audio/period_8/example_2_block_2.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended = null;
		isAnimating=false;
		pageIndex = 8019;
	};	
}
function next8020(){
	setProgress(60);
	isAnimating=true;
	document.getElementById('period-eight-example-2-block-3').style.opacity=1;
	document.getElementById('period-eight-example-2-block-3').style.animation='fadeIn 500ms';
	document.getElementById('period-eight-example-2-block-a-3').style.opacity=1;
	document.getElementById('period-eight-example-2-block-a-3').style.animation='fadeIn 500ms';
	setTimeout(function(){
		document.getElementById('period-eight-example-2-block-a-3').style.animation='';
	},500);
	audio.src = 'audio/period_8/example_2_block_3.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended = null;
		isAnimating=false;
		pageIndex = 8020;
	};	
}
function next8021(){
	setProgress(63);
	isAnimating=true;
	document.getElementById('period-eight-example-2-block-4').style.opacity=1;
	document.getElementById('period-eight-example-2-block-4').style.animation='fadeIn 500ms';
	audio.src = 'audio/period_8/example_2_block_4.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended = null;
		isAnimating=false;
		pageIndex = 8021;
	};	
}

function next8022(){
	setProgress(66);
	isAnimating=true;
	document.getElementById('period-eight-example-2-title').style.opacity=0;
	document.getElementById('period-eight-example-2-title').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-2-line-1').style.opacity=0;
	document.getElementById('period-eight-example-2-line-1').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-2-block-1').style.opacity=0;
	document.getElementById('period-eight-example-2-block-1').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-2-block-a-1').style.opacity=0;
	document.getElementById('period-eight-example-2-block-a-1').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-2-block-2').style.opacity=0;
	document.getElementById('period-eight-example-2-block-2').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-2-block-a-2').style.opacity=0;
	document.getElementById('period-eight-example-2-block-a-2').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-2-block-3').style.opacity=0;
	document.getElementById('period-eight-example-2-block-3').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-2-block-a-3').style.opacity=0;
	document.getElementById('period-eight-example-2-block-a-3').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-2-block-4').style.opacity=0;
	document.getElementById('period-eight-example-2-block-4').style.animation='fadeOut 250ms';

	setTimeout(function(){
		document.getElementById('period-eight-content').innerHTML='';
		document.getElementById('period-eight-example-2').style.display='none';
		document.getElementById('period-eight-example-3').style.display='block';
		document.getElementById('period-eight-example-3-title').style.opacity=1;
		document.getElementById('period-eight-example-3-title').style.animation='fadeIn 500ms';
		audio.src = 'audio/period_8/example_2_title.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8022;
		};
	},250);
}
function next8023(){
	setProgress(69);
	isAnimating=true;
	document.getElementById('period-eight-example-3-line-1').style.opacity=1;
	document.getElementById('period-eight-example-3-line-1').style.animation='animateIn 500ms';
	audio.src = 'audio/period_8/example_3_line_1.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended = null;
		isAnimating=false;
		pageIndex = 8023;
	};
}
function next8024(){
	setProgress(72);
	isAnimating=true;
	document.getElementById('period-eight-example-3-line-2').style.opacity=1;
	document.getElementById('period-eight-example-3-line-2').style.animation='animateIn 500ms';
	audio.src = 'audio/period_8/example_3_line_2.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended = null;
		isAnimating=false;
		pageIndex = 8024;
	};
}
function next8025(){
	setProgress(75);
	isAnimating=true;
	document.getElementById('period-eight-example-3-line-2').style.opacity=0;
	document.getElementById('period-eight-example-3-line-2').style.animation='animateOut 250ms';
	setTimeout(function(){
		document.getElementById('period-eight-example-3-line-3').style.opacity=1;
		document.getElementById('period-eight-example-3-line-3').style.animation='animateIn 500ms';
		audio.src = 'audio/period_8/example_3_line_3.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8025;
		};
	},250);
}
function next8026(){
	setProgress(78);
	isAnimating=true;
	document.getElementById('period-eight-example-3-line-3').style.opacity=0;
	document.getElementById('period-eight-example-3-line-3').style.animation='animateOut 250ms';
	setTimeout(function(){
		document.getElementById('period-eight-example-3-block-1').style.opacity=1;
		document.getElementById('period-eight-example-3-block-1').style.animation='fadeIn 500ms';
		document.getElementById('period-eight-example-3-block-a-1').style.opacity=1;
		document.getElementById('period-eight-example-3-block-a-1').style.animation='fadeIn 500ms';
		setTimeout(function(){
			document.getElementById('period-eight-example-3-block-a-1').style.animation='';
		},500);
		audio.src = 'audio/period_8/example_3_block_1.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8026;
		};
	},250);
}
function next8027(){
	setProgress(81);
	isAnimating=true;
	document.getElementById('period-eight-example-3-block-2').style.opacity=1;
	document.getElementById('period-eight-example-3-block-2').style.animation='fadeIn 500ms';
	document.getElementById('period-eight-example-3-block-a-2').style.opacity=1;
	document.getElementById('period-eight-example-3-block-a-2').style.animation='fadeIn 500ms';
	setTimeout(function(){
		document.getElementById('period-eight-example-3-block-a-2').style.animation='';
	},500);
	audio.src = 'audio/period_8/example_3_block_2.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended = null;
		isAnimating=false;
		pageIndex = 8027;
	};	
}
function next8028(){
	setProgress(84);
	isAnimating=true;
	document.getElementById('period-eight-example-3-block-3').style.opacity=1;
	document.getElementById('period-eight-example-3-block-3').style.animation='fadeIn 500ms';
	document.getElementById('period-eight-example-3-block-a-3').style.opacity=1;
	document.getElementById('period-eight-example-3-block-a-3').style.animation='fadeIn 500ms';
	setTimeout(function(){
		document.getElementById('period-eight-example-3-block-a-3').style.animation='';
	},500);
	audio.src = 'audio/period_8/example_3_block_3.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended = null;
		isAnimating=false;
		pageIndex = 8028;
	};	
}
function next8029(){
	setProgress(87);
	isAnimating=true;
	document.getElementById('period-eight-example-3-block-4').style.opacity=1;
	document.getElementById('period-eight-example-3-block-4').style.animation='fadeIn 500ms';
	audio.src = 'audio/period_8/example_3_block_4.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended = null;
		isAnimating=false;
		pageIndex = 8029;
	};	
}
function next8030(){
	setProgress(90);
	isAnimating=true;
	document.getElementById('period-eight-example-3-title').style.opacity=0;
	document.getElementById('period-eight-example-3-title').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-3-line-1').style.opacity=0;
	document.getElementById('period-eight-example-3-line-1').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-3-block-1').style.opacity=0;
	document.getElementById('period-eight-example-3-block-1').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-3-block-a-1').style.opacity=0;
	document.getElementById('period-eight-example-3-block-a-1').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-3-block-2').style.opacity=0;
	document.getElementById('period-eight-example-3-block-2').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-3-block-a-2').style.opacity=0;
	document.getElementById('period-eight-example-3-block-a-2').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-3-block-3').style.opacity=0;
	document.getElementById('period-eight-example-3-block-3').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-3-block-a-3').style.opacity=0;
	document.getElementById('period-eight-example-3-block-a-3').style.animation='fadeOut 250ms';
	document.getElementById('period-eight-example-3-block-4').style.opacity=0;
	document.getElementById('period-eight-example-3-block-4').style.animation='fadeOut 250ms';

	setTimeout(function(){
		document.getElementById('period-eight-example-3').style.display='none';
		document.getElementById('period-eight-text').style.display="block";
		document.getElementById('period-eight-title').innerHTML='Exercises'
		document.getElementById('period-eight-title').style.opacity = 1;
		document.getElementById('period-eight-title').style.animation = 'fadeIn 500ms';
		audio.src = 'audio/exercises.mp3';
		audio.load();
		audio.play();
		audio.onended = function(){
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8030;
		};
	},250);
}
function next8031(){
	setProgress(92);
	document.getElementById('period-eight-title').style.opacity = 0;
	document.getElementById('period-eight-title').style.animation = 'fadeOut 250ms';
	setTimeout(function(){
		document.getElementById('period-eight-title').innerHTML='';
		document.getElementById('period-eight-text').style.display='none';
		document.getElementById('period-eight-exercise-1').style.display="block";
		document.getElementById('period-eight-exercise-1-title').style.opacity = 1;
		document.getElementById('period-eight-exercise-1-title').style.animation = 'fadeIn 500ms';
		document.getElementById('period-eight-exercise-1-block').style.opacity = 1;
		document.getElementById('period-eight-exercise-1-block').style.animation = 'fadeIn 500ms';
		audio.src = 'audio/period_8/exercise_1.mp3';
		audio.load();
		audio.play();
		audio.onended = function(){
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8031;
		};
	},250);
}

function evaluatePeriod8Exercise1(){
	var isSuccess=true;
	var l1 = document.getElementById('period-eight-exercise-1-b-1').value;
	var l2 = document.getElementById('period-eight-exercise-1-b-2').value;
	var l3 = document.getElementById('period-eight-exercise-1-b-3').value;
	var l4 = document.getElementById('period-eight-exercise-1-b-4').value;

	if((l1=='2' && l2=='x' && l3=='10') ||
		(l1=='2' && l3=='x' && l2=='10') ||
		(l2=='2' && l1=='x' && l3=='10') ||
		(l2=='2' && l3=='x' && l1=='10') ||
		(l3=='2' && l1=='x' && l2=='10') ||
		(l3=='2' && l2=='x' && l1=='10')){
		isSuccess&=true;
		document.getElementById('period-eight-exercise-1-b-result-1').classList='done_animated';
		setTimeout(function(){
			document.getElementById('period-eight-exercise-1-b-result-1').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('period-eight-exercise-1-b-result-1').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('period-eight-exercise-1-b-result-1').classList='wrong';
		},300);
	}
	if(l4=='x+10' || l4=='10+x'){
		isSuccess&=true;
		document.getElementById('period-eight-exercise-1-b-result-2').classList='done_animated';
		setTimeout(function(){
			document.getElementById('period-eight-exercise-1-b-result-2').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('period-eight-exercise-1-b-result-2').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('period-eight-exercise-1-b-result-2').classList='wrong';
		},300);
	}

	if(isSuccess){
		audio.src = 'audio/right_answer.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			setTimeout(function () {
				next8032();
			}, 1000);
		};
	}else{
		audio.src = 'audio/wrong_answer.mp3';
		audio.load();
		audio.play();
	}
}
function next8032(){
	setProgress(94);
	document.getElementById('period-eight-exercise-1-title').style.opacity = 0;
	document.getElementById('period-eight-exercise-1-title').style.animation = 'fadeOut 250ms';
	document.getElementById('period-eight-exercise-1-block').style.opacity = 0;
	document.getElementById('period-eight-exercise-1-block').style.animation = 'fadeOut 250ms';

	setTimeout(function(){
		document.getElementById('period-eight-exercise-1').style.display='none';
		document.getElementById('period-eight-exercise-2').style.display="block";
		document.getElementById('period-eight-exercise-2-title').style.opacity = 1;
		document.getElementById('period-eight-exercise-2-title').style.animation = 'fadeIn 500ms';
		document.getElementById('period-eight-exercise-2-block').style.opacity = 1;
		document.getElementById('period-eight-exercise-2-block').style.animation = 'fadeIn 500ms';
		audio.src = 'audio/period_8/exercise_2.mp3';
		audio.load();
		audio.play();
		audio.onended = function(){
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8032;
		};
	},250);
}
function evaluatePeriod8Exercise2(){
	var isSuccess=true;
	var l1 = document.getElementById('period-eight-exercise-2-b-1').value;
	var l2 = document.getElementById('period-eight-exercise-2-b-2').value;
	var l3 = document.getElementById('period-eight-exercise-2-b-3').value;
	var l4 = document.getElementById('period-eight-exercise-2-b-4').value;

	if((l1=='2' && l2=='x' && l3=='4') ||
		(l1=='2' && l3=='x' && l2=='4') ||
		(l2=='2' && l1=='x' && l3=='4') ||
		(l2=='2' && l3=='x' && l1=='4') ||
		(l3=='2' && l1=='x' && l2=='4') ||
		(l3=='2' && l2=='x' && l1=='4')){
		isSuccess&=true;
		document.getElementById('period-eight-exercise-2-b-result-1').classList='done_animated';
		setTimeout(function(){
			document.getElementById('period-eight-exercise-2-b-result-1').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('period-eight-exercise-2-b-result-1').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('period-eight-exercise-2-b-result-1').classList='wrong';
		},300);
	}
	if(l4=='x+4' || l4=='4+x'){
		isSuccess&=true;
		document.getElementById('period-eight-exercise-2-b-result-2').classList='done_animated';
		setTimeout(function(){
			document.getElementById('period-eight-exercise-2-b-result-2').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('period-eight-exercise-2-b-result-2').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('period-eight-exercise-2-b-result-2').classList='wrong';
		},300);
	}

	if(isSuccess){
		audio.src = 'audio/right_answer.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			setTimeout(function () {
				next8033();
			}, 500);
		};
	}else{
		audio.src = 'audio/wrong_answer.mp3';
		audio.load();
		audio.play();
	}
}
function next8033(){
	setProgress(96);
	document.getElementById('period-eight-exercise-2-title').style.opacity = 0;
	document.getElementById('period-eight-exercise-2-title').style.animation = 'fadeOut 250ms';
	document.getElementById('period-eight-exercise-2-block').style.opacity = 0;
	document.getElementById('period-eight-exercise-2-block').style.animation = 'fadeOut 250ms';
	setTimeout(function(){
		document.getElementById('period-eight-exercise-2').style.display='none';
		document.getElementById('period-eight-home-work').style.display="block";
		document.getElementById('period-eight-home-work-title').style.animation='fadeIn 500ms';
		document.getElementById('period-eight-home-work-title').style.opacity=1;
		audio.src = 'audio/home_work_title.mp3';
		audio.load();
		audio.play();
		audio.onended = function () {
			audio.onended = null;
			isAnimating=false;
			pageIndex = 8033;
		};
	},250);
}
function next8034(){
	setProgress(98);
	document.getElementById('period-eight-home-work-questions').style.animation='fadeIn 500ms';
	document.getElementById('period-eight-home-work-questions').style.opacity=1;
	audio.src = 'audio/period_8/home_work.mp3';
	audio.load();
	audio.play();
	audio.onended = function () {
		audio.onended = null;
		isAnimating=false;
		pageIndex = 8034;
	};
}
function next8035() {
	setProgress(100);
	document.getElementById('period-eight-home-work-title').style.opacity=0;
	document.getElementById('period-eight-home-work-title').style.animation = 'fadeOut 250ms';
	document.getElementById('period-eight-home-work-questions').style.opacity=0;
	document.getElementById('period-eight-home-work-questions').style.animation = 'fadeOut 250ms';
	setTimeout(function(){
		document.getElementById("period-eight-home-work").style.display = "none";
		document.getElementById("period-eight-end-of-period").style.display = "block";
		document.getElementById('period-eight-end-of-period-title').style.opacity = 1;
		document.getElementById('period-eight-end-of-period-title').style.animation = "fadeIn 500ms";
		audio.src = 'audio/bell.mp3';
		audio.load();
		audio.play();
		setProgress(100);
		audio.onended = function () {
			audio.play();
		};
	},250);
}

function setProgress(percentage) {
	var colors = [{
		p: 0,
		c: "#ff0000"
	}, {
		p: 8.34,
		c: "#ea1500"
	}, {
		p: 16.67,
		c: "#d42b00"
	}, {
		p: 25,
		c: "#bf4000"
	}, {
		p: 33.34,
		c: "#aa5500"
	}, {
		p: 41.67,
		c: "#956a00"
	}, {
		p: 50,
		c: "#808000"
	}, {
		p: 58.34,
		c: "#6a9500"
	}, {
		p: 66.67,
		c: "#55aa00"
	}, {
		p: 75,
		c: "#40bf00"
	}, {
		p: 83.34,
		c: "#2bd400"
	}, {
		p: 91.67,
		c: "#15ea00"
	}, {
		p: 100,
		c: "#00ff00"
	}];
	var officersIds = [];
	colors.forEach(function (c) {
		officersIds.push(c.p);
	});
	var n = officersIds.reduce(function (prev, curr) {
		return (Math.abs(curr - percentage) < Math.abs(prev - percentage) ? curr : prev);
	});
	var answer;
	colors.forEach(function (c) {
		if (c.p == n) answer = c.c;
	});
	document.getElementById('completed').style.background = answer;
	document.getElementById('completed').style.width = percentage + '%';
}