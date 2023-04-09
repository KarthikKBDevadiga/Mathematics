var unit1 = document.getElementById('unit_1');
var period1 = document.getElementById('period_1');
var period1Audio = document.getElementById('period_1_audio');

var introTitle = document.getElementById('introduction_title');
var introContent = document.getElementById('introduction_content');

var isAnimating=true;
var headingIndex=0;
$(window).on('load', function(){	
	setTimeout(function(){
		document.getElementById('loader_icon').style.animation='fadeOut 1s';
		setTimeout(function(){
			document.getElementById('loader').style.display='none';
			document.getElementById('loader').style.display='none';
			document.getElementById('container').style.display='block';
			document.getElementById('intro').style.display='block';
			document.getElementById('logo').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
			document.getElementById('intro_logo').style.animation='fadeIn 1s';
			document.getElementById('intro_title').style.animation='fadeIn 1s';
			document.getElementById('intro_details').style.animation='fadeIn 1s';
					document.getElementById('intro_next').style.opacity=1;
					document.getElementById('intro_next').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
			isAnimating=false;
		},1000);
	},1000);
});

function introNext(){
	if(headingIndex==0){
		document.getElementById('intro_logo').style.opacity='0';
		document.getElementById('intro_logo').style.animation='fadeOut 500ms';
		document.getElementById('intro_title').style.opacity='0';
		document.getElementById('intro_title').style.animation='fadeOut 500ms';
		document.getElementById('intro_details').style.opacity='0';
		document.getElementById('intro_details').style.animation='fadeOut 500ms';
		setTimeout(function(){
			document.getElementById('intro_sub_heading').style.opacity='1';
			document.getElementById('intro_sub_heading').style.animation='fadeIn 1s';
			headingIndex=1;
		},1000);
	}else if(headingIndex==1){
			document.getElementById('intro').style.display='none';
			document.getElementById('intro').style.display='none';
		document.getElementById('select_unit').style.display="block";

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
	}
	
}
// $(window).on('load', function(){
// 	setTimeout(function() {
// 		document.getElementById('loader_icon').style.animation='fadeOut 1s';
// 		setTimeout(function(){
// 			document.getElementById('loader').style.display='none';
// 			document.getElementById('loader').style.display='none';
// 			document.getElementById('intro_1').style.display='block';
// 			// document.getElementById('select_unit').style.display="block";
// 			document.getElementById('logo').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
			
// 			document.getElementById('application_title').style.opacity=1;
// 			document.getElementById('application_title').style.animation='fadeIn 2s';
// 			setTimeout(function(){
// 				document.getElementById('period-one-button').style.opacity=1;
// 				document.getElementById('period-one-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
// 				setTimeout(function(){
// 					document.getElementById('period-two-button').style.opacity=1;
// 					document.getElementById('period-two-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
// 					setTimeout(function(){
// 						document.getElementById('period-three-button').style.opacity=1;
// 						document.getElementById('period-three-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
// 						setTimeout(function(){
// 							document.getElementById('period-four-button').style.opacity=1;
// 							document.getElementById('period-four-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
// 							setTimeout(function(){
// 								document.getElementById('period-five-button').style.opacity=1;
// 								document.getElementById('period-five-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
// 								setTimeout(function(){
// 									document.getElementById('period-six-button').style.opacity=1;
// 									document.getElementById('period-six-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
// 									setTimeout(function(){
// 										document.getElementById('period-seven-button').style.opacity=1;
// 										document.getElementById('period-seven-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
// 										setTimeout(function(){
// 											document.getElementById('period-eight-button').style.opacity=1;
// 											document.getElementById('period-eight-button').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
// 											isAnimating=false;
// 										},100);
// 									},100);
// 								},100);
// 							},100);
// 						},100);
// 					},100);
// 				},100);
// 			},200);
// 		},1000);	
// 	}, 1000);
// });

var pageIndex=0;

document.body.onkeyup = function(e){
    switch(e.key){
    	case '1':
    		openUnit1();
    		break;
    	case '2':
    		openUnit2();
    		break;
    	case '3':
    		openUnit3();
    		break;
    	case '4':
    		openUnit4();
    		break;
    	case '5':
    		openUnit5();
    		break;
    	case '6':
    		openUnit6();
    		break;
    	case '7':
    		openUnit7();
    		break;
    	case '8':
    		openUnit8();
    		break;
    	case 'ArrowLeft':
    	case 'Backspace':
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
    		break;
    }
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
				isAnimating=false;
				pageIndex = 1000;
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
				isAnimating=false;
				pageIndex=8000;
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
	window.location.href = "period8.html";
}