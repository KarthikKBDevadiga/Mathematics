var audio = document.getElementById('audio');
var title = document.getElementById('title');
var content = document.getElementById('content');
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
    	var b = document.getElementById('wrapper');
        if(window.getComputedStyle(b).getPropertyValue("opacity")==1){
			startUnit8(b);
        }
    }
}

$(window).on('load', function(){
	setTimeout(function() {
		document.getElementById('loader_icon').style.animation='fadeOut 1s';
		setTimeout(function(){
			document.getElementById('loader').style.display='none';
			document.getElementById('container').style.display="block";
			document.getElementById('logo').style.animation='scaleUp 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
			document.getElementById('wrapper').style.animation='roleIn 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
		},1000);	
	}, 1000);
});

function startUnit8(b){
	b.style.display = 'none';
	document.getElementById('one').style.display='none';
	document.getElementById('two').style.display="block";
	title.innerHTML='Period 8'
	title.style.opacity = 1;
	title.style.animation = 'animateIn 2s';
	audio.src = 'audio/period_8/period_8.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended =null;
		title.style.animation = 'animateOut 1s';
		setTimeout(function(){
			title.innerHTML='Factorisation using identities'
			title.style.animation = 'animateIn 2s';
			audio.src = 'audio/period_8/line_1.mp3';
			audio.load();
			audio.play();
			audio.onended = function(){
				audio.onended = null;
				title.style.opacity=0;
				title.style.animation='animateOut 1s';
				setTimeout(function(){
					content.innerHTML='(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup><br>(a - b)<sup>2</sup> = a<sup>2</sup> - 2ab + b<sup>2</sup><br>(a + b)(a - b) = a<sup>2</sup> - b<sup>2</sup>';
					content.style.animation = 'animateIn 2s';
					audio.src = 'audio/period_8/line_2.mp3';
					audio.load();
					audio.play();
					audio.onended = function(){
						audio.onended = null;
						content.style.opacity=0;
						content.style.animation='animateOut 1s';
						setTimeout(function(){
							content.innerHTML='The following solved examples illustrate how to use these identities for factorisation. What we do is to observe the given expression. If it has a form that fits the right hand side of one of the identities, then the expression corresponding to the left hand side of the identity gives the desired factorisation';
							content.style.opacity=1;
							content.style.animation = 'animateIn 2s';
							audio.src = 'audio/period_8/line_3.mp3';
							audio.load();
							audio.play();
							audio.onended = function(){
								audio.onended = null;
								content.style.opacity=0;
								content.style.animation='animateOut 1s';
								setTimeout(function(){
									content.innerHTML='';
									startExample1();
								},1000);
							}
						},1000);
					};
				},1000);
			}
		},1000);
	};
}
function startExample1(){
	document.getElementById('two').style.display="none";
	document.getElementById('example_1').style.display='block';
	document.getElementById('example_1_title').style.opacity=1;
	document.getElementById('example_1_title').style.animation='fadeIn 2s';
	audio.src = 'audio/period_8/example_1_title.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended = null;
		document.getElementById('example_1_line_1').style.opacity=1;
		document.getElementById('example_1_line_1').style.animation='animateIn 2s';
		audio.src = 'audio/period_8/example_1_line_1.mp3';
		audio.load();
		audio.play();
		audio.onended= function(){
			audio.onended = null;
			document.getElementById('example_1_line_2').style.opacity=1;
			document.getElementById('example_1_line_2').style.animation='animateIn 2s';
			audio.src = 'audio/period_8/example_1_line_2.mp3';
			audio.load();
			audio.play();
			audio.onended = function(){
				audio.onended = null;
				document.getElementById('example_1_line_2').style.opacity=0;
				document.getElementById('example_1_line_2').style.animation='animateOut 1s';
				setTimeout(function(){
					document.getElementById('example_1_block_1').style.opacity=1;
					document.getElementById('example_1_block_1').style.animation='fadeIn 2s';
					document.getElementById('example_1_block_a_1').style.opacity=1;
					document.getElementById('example_1_block_a_1').style.animation='fadeIn 2s';
					setTimeout(function(){
						document.getElementById('example_1_block_a_1').style.animation='';
					},2000);
					audio.src = 'audio/period_8/example_1_block_1.mp3';
					audio.load();
					audio.play();
					audio.onended=function(){					
						audio.onended = null;
						document.getElementById('example_1_block_2').style.opacity=1;
						document.getElementById('example_1_block_2').style.animation='fadeIn 2s';
						document.getElementById('example_1_block_a_2').style.opacity=1;
						document.getElementById('example_1_block_a_2').style.animation='fadeIn 2s';
						setTimeout(function(){
							document.getElementById('example_1_block_a_2').style.animation='';
						},2000);
						audio.src = 'audio/period_8/example_1_block_2.mp3';
						audio.load();
						audio.play();
						audio.onended=function(){
							audio.onended = null;
							document.getElementById('example_1_block_3').style.opacity=1;
							document.getElementById('example_1_block_3').style.animation='fadeIn 2s';
							audio.src = 'audio/period_8/example_1_block_3.mp3';
							audio.load();
							audio.play();
							audio.onended=function(){
								document.getElementById('example_1_title').style.opacity=0;
								document.getElementById('example_1_title').style.animation='fadeOut 1s';
								document.getElementById('example_1_line_1').style.opacity=0;
								document.getElementById('example_1_line_1').style.animation='fadeOut 1s';
								document.getElementById('example_1_block_1').style.opacity=0;
								document.getElementById('example_1_block_1').style.animation='fadeOut 1s';
								document.getElementById('example_1_block_a_1').style.opacity=0;
								document.getElementById('example_1_block_a_1').style.animation='fadeOut 1s';
								document.getElementById('example_1_block_2').style.opacity=0;
								document.getElementById('example_1_block_2').style.animation='fadeOut 1s';
								document.getElementById('example_1_block_a_2').style.opacity=0;
								document.getElementById('example_1_block_a_2').style.animation='fadeOut 1s';
								document.getElementById('example_1_block_3').style.opacity=0;
								document.getElementById('example_1_block_3').style.animation='fadeOut 1s';
								setTimeout(function(){
									startUnitXaXb();
								},1000);
							};
						};
					};
				},1000);
			}
		};
	};
}
function startUnitXaXb(){
	document.getElementById('example_1').style.display='none';
	document.getElementById('two').style.display="block";
	title.innerHTML='Factors of the form (x + a)(x + b)'
	title.style.opacity = 1;
	title.style.animation = 'animateIn 2s';
	audio.src = 'audio/period_8/line_4.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended = null;
		title.style.opacity=0;
		title.style.animation='animateOut 1s';
		setTimeout(function(){
			content.style.opacity=1;
			content.innerHTML='Let us now discuss how we can factorise expressions in one variable, like x<sup>2</sup> + 5x + 6, y<sup>2</sup> – 7y + 12, z<sup>2</sup> – 4z – 12, 3m<sup>2</sup> + 9m + 6, etc. Observe that these expressions are not of the type (a + b)<sup>2</sup> or (a – b)<sup>2</sup> , i.e., they are not perfect squares. For example, in x<sup>2</sup> + 5x + 6, the term 6 is not a perfect square. These expressions obviously also do not fit the type (a<sup>2</sup> – b<sup>2</sup>) either.';
			content.style.animation = 'animateIn 2s';
			audio.src = 'audio/period_8/line_5.mp3';
			audio.load();
			audio.play();
			audio.onended = function(){
				audio.onended = null;
				content.style.opacity=0;
				content.style.animation='animateOut 1s';
				setTimeout(function(){
					content.style.opacity=1;
					content.innerHTML='They, however, seem to be of the type x<sup>2</sup> + (a + b) x + ab. We may therefore, try to use Identity IV studied in the last chapter to factorise these expressions:<br> (x + a)(x + b) = x<sup>2</sup> + (a + b)x + ab';
					content.style.animation = 'animateIn 2s';
					audio.src = 'audio/period_8/line_6.mp3';
					audio.load();
					audio.play();
					audio.onended = function(){
						audio.onended = null;
						content.style.opacity=0;
						content.style.animation='animateOut 1s';
						setTimeout(function(){
							content.style.opacity=1;
							content.innerHTML='For that we have to look at the coefficients of x and the constant term. Let us see how it is done in the following example';
							content.style.animation = 'animateIn 2s';
							audio.src = 'audio/period_8/line_7.mp3';
							audio.load();
							audio.play();
							audio.onended = function(){
								content.style.opacity=0;
								content.style.animation ='animateOut 1s';
								setTimeout(function(){
									content.innerHTML='';
									startExample2();
								},1000);
							};
						},1000);
					};
				},1000);
			};
		},1000);		
	};
}
function startExample2(){
	document.getElementById('two').style.display="none";
	document.getElementById('example_2').style.display='block';
	document.getElementById('example_2_title').style.opacity=1;
	document.getElementById('example_2_title').style.animation='fadeIn 2s';
	audio.src = 'audio/period_8/example_1_title.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended = null;
		document.getElementById('example_2_line_1').style.opacity=1;
		document.getElementById('example_2_line_1').style.animation='animateIn 2s';
		audio.src = 'audio/period_8/example_2_line_1.mp3';
		audio.load();
		audio.play();
		audio.onended= function(){
			audio.onended = null;
			document.getElementById('example_2_line_2').style.opacity=1;
			document.getElementById('example_2_line_2').style.animation='animateIn 2s';
			audio.src = 'audio/period_8/example_2_line_2.mp3';
			audio.load();
			audio.play();
			audio.onended = function(){
				audio.onended = null;
				document.getElementById('example_2_line_2').style.opacity=0;
				document.getElementById('example_2_line_2').style.animation='animateOut 1s';
				setTimeout(function(){
					document.getElementById('example_2_line_3').style.opacity=1;
					document.getElementById('example_2_line_3').style.animation='animateIn 2s';
					audio.src = 'audio/period_8/example_2_line_3.mp3';
					audio.load();
					audio.play();
					audio.onended = function(){
						audio.onended = null;
						document.getElementById('example_3_line_3').style.opacity=0;
						document.getElementById('example_3_line_3').style.animation='animateOut 1s';
						setTimeout(function(){
							document.getElementById('example_2_block_1').style.opacity=1;
							document.getElementById('example_2_block_1').style.animation='fadeIn 2s';
							document.getElementById('example_2_block_a_1').style.opacity=1;
							document.getElementById('example_2_block_a_1').style.animation='fadeIn 2s';
							setTimeout(function(){
								document.getElementById('example_2_block_a_1').style.animation='';
							},2000);
							audio.src = 'audio/period_8/example_2_block_1.mp3';
							audio.load();
							audio.play();
							audio.onended=function(){					
								audio.onended = null;
								document.getElementById('example_2_block_2').style.opacity=1;
								document.getElementById('example_2_block_2').style.animation='fadeIn 2s';
								document.getElementById('example_2_block_a_2').style.opacity=1;
								document.getElementById('example_2_block_a_2').style.animation='fadeIn 2s';
								setTimeout(function(){
									document.getElementById('example_2_block_a_2').style.animation='';
								},2000);
								audio.src = 'audio/period_8/example_2_block_2.mp3';
								audio.load();
								audio.play();
								audio.onended=function(){
									audio.onended = null;
									document.getElementById('example_2_block_3').style.opacity=1;
									document.getElementById('example_2_block_3').style.animation='fadeIn 2s';
									document.getElementById('example_2_block_a_3').style.opacity=1;
									document.getElementById('example_2_block_a_3').style.animation='fadeIn 2s';
									setTimeout(function(){
										document.getElementById('example_2_block_a_3').style.animation='';
									},2000);
									audio.src = 'audio/period_8/example_2_block_3.mp3';
									audio.load();
									audio.play();
									audio.onended=function(){
										audio.onended = null;
										document.getElementById('example_2_block_4').style.opacity=1;
										document.getElementById('example_2_block_4').style.animation='fadeIn 2s';
										audio.src = 'audio/period_8/example_2_block_4.mp3';
										audio.load();
										audio.play();
										audio.onended=function(){
											document.getElementById('example_2_title').style.opacity=0;
											document.getElementById('example_2_title').style.animation='fadeOut 1s';
											document.getElementById('example_2_line_1').style.opacity=0;
											document.getElementById('example_2_line_1').style.animation='fadeOut 1s';
											document.getElementById('example_2_block_1').style.opacity=0;
											document.getElementById('example_2_block_1').style.animation='fadeOut 1s';
											document.getElementById('example_2_block_a_1').style.opacity=0;
											document.getElementById('example_2_block_a_1').style.animation='fadeOut 1s';
											document.getElementById('example_2_block_2').style.opacity=0;
											document.getElementById('example_2_block_2').style.animation='fadeOut 1s';
											document.getElementById('example_2_block_a_2').style.opacity=0;
											document.getElementById('example_2_block_a_2').style.animation='fadeOut 1s';
											document.getElementById('example_2_block_3').style.opacity=0;
											document.getElementById('example_2_block_3').style.animation='fadeOut 1s';
											document.getElementById('example_2_block_a_3').style.opacity=0;
											document.getElementById('example_2_block_a_3').style.animation='fadeOut 1s';
											document.getElementById('example_2_block_4').style.opacity=0;
											document.getElementById('example_2_block_4').style.animation='fadeOut 1s';
											setTimeout(function(){
												startExample3();
											},1000);
										}
									};
								};
							};
						},1000);
					};
				},1000);
			}
		};
	};
}

function startExample3(){
	document.getElementById('example_2').style.display="none";
	document.getElementById('example_3').style.display='block';
	document.getElementById('example_3_title').style.opacity=1;
	document.getElementById('example_3_title').style.animation='fadeIn 2s';
	audio.src = 'audio/period_8/period_8.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended = null;
		document.getElementById('example_3_line_1').style.opacity=1;
		document.getElementById('example_3_line_1').style.animation='animateIn 2s';
		audio.src = 'audio/period_8/example_3_line_1.mp3';
		audio.load();
		audio.play();
		audio.onended= function(){
			audio.onended = null;
			document.getElementById('example_3_line_2').style.opacity=1;
			document.getElementById('example_3_line_2').style.animation='animateIn 2s';
			audio.src = 'audio/period_8/example_3_line_2.mp3';
			audio.load();
			audio.play();
			audio.onended = function(){
				audio.onended = null;
				document.getElementById('example_3_line_2').style.opacity=0;
				document.getElementById('example_3_line_2').style.animation='animateOut 1s';
				setTimeout(function(){
					document.getElementById('example_3_line_3').style.opacity=1;
					document.getElementById('example_3_line_3').style.animation='animateIn 2s';
					audio.src = 'audio/period_8/example_3_line_3.mp3';
					audio.load();
					audio.play();
					audio.onended=function(){
						audio.onended = null;
						document.getElementById('example_3_line_3').style.opacity=0;
						document.getElementById('example_3_line_3').style.animation='animateOut 1s';

						setTimeout(function(){
							document.getElementById('example_3_block_1').style.opacity=1;
							document.getElementById('example_3_block_1').style.animation='fadeIn 2s';
							document.getElementById('example_3_block_a_1').style.opacity=1;
							document.getElementById('example_3_block_a_1').style.animation='fadeIn 2s';
							setTimeout(function(){
								document.getElementById('example_3_block_a_1').style.animation='';
							},2000);
							audio.src = 'audio/period_8/example_3_block_1.mp3';
							audio.load();
							audio.play();
							audio.onended=function(){					
								audio.onended = null;
								document.getElementById('example_3_block_2').style.opacity=1;
								document.getElementById('example_3_block_2').style.animation='fadeIn 2s';
								document.getElementById('example_3_block_a_2').style.opacity=1;
								document.getElementById('example_3_block_a_2').style.animation='fadeIn 2s';
								setTimeout(function(){
									document.getElementById('example_3_block_a_2').style.animation='';
								},2000);
								audio.src = 'audio/period_8/example_3_block_2.mp3';
								audio.load();
								audio.play();
								audio.onended=function(){
									audio.onended = null;
									document.getElementById('example_3_block_3').style.opacity=1;
									document.getElementById('example_3_block_3').style.animation='fadeIn 2s';
									document.getElementById('example_3_block_a_3').style.opacity=1;
									document.getElementById('example_3_block_a_3').style.animation='fadeIn 2s';
									setTimeout(function(){
										document.getElementById('example_3_block_a_3').style.animation='';
									},2000);
									audio.src = 'audio/period_8/example_3_block_3.mp3';
									audio.load();
									audio.play();
									audio.onended=function(){
										audio.onended = null;
										document.getElementById('example_3_block_4').style.opacity=1;
										document.getElementById('example_3_block_4').style.animation='fadeIn 2s';
										audio.src = 'audio/period_8/example_3_block_4.mp3';
										audio.load();
										audio.play();
										audio.onended=function(){
											document.getElementById('example_3_title').style.opacity=0;
											document.getElementById('example_3_title').style.animation='fadeOut 1s';
											document.getElementById('example_3_line_1').style.opacity=0;
											document.getElementById('example_3_line_1').style.animation='fadeOut 1s';
											document.getElementById('example_3_block_1').style.opacity=0;
											document.getElementById('example_3_block_1').style.animation='fadeOut 1s';
											document.getElementById('example_3_block_a_1').style.opacity=0;
											document.getElementById('example_3_block_a_1').style.animation='fadeOut 1s';
											document.getElementById('example_3_block_2').style.opacity=0;
											document.getElementById('example_3_block_2').style.animation='fadeOut 1s';
											document.getElementById('example_3_block_a_2').style.opacity=0;
											document.getElementById('example_3_block_a_2').style.animation='fadeOut 1s';
											document.getElementById('example_3_block_3').style.opacity=0;
											document.getElementById('example_3_block_3').style.animation='fadeOut 1s';
											document.getElementById('example_3_block_a_3').style.opacity=0;
											document.getElementById('example_3_block_a_3').style.animation='fadeOut 1s';
											document.getElementById('example_3_block_4').style.opacity=0;
											document.getElementById('example_3_block_4').style.animation='fadeOut 1s';
											setTimeout(function(){
												startExercise();
											},1000);
										}
									};
								};
							};
						},1000);
					};
				},1000);

			}
		};
	};
}
function startExercise(){
	document.getElementById('example_3').style.display='none';
	document.getElementById('two').style.display="block";
	title.innerHTML='';
	content.innerHTML='';
	title.innerHTML='Exercises'
	title.style.opacity = 1;
	title.style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_8/exercises.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended = null;
		setTimeout(function(){
			startExercise1();
		},1000);
	};
}
function startExercise1(){
	document.getElementById('two').style.display='none';
	document.getElementById('exercise_1').style.display="block";
	document.getElementById('exercise_1_title').style.opacity = 1;
	document.getElementById('exercise_1_title').style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_8/exercise_1.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended = null;
		document.getElementById('exercise_1_block').style.opacity = 1;
		document.getElementById('exercise_1_block').style.animation = 'fadeIn 2s';
	};
}
function evaluateExercise1(){
	var isSuccess=true;
	var l1 = document.getElementById('exercise_1_b_1').value;
	var l2 = document.getElementById('exercise_1_b_2').value;
	var l3 = document.getElementById('exercise_1_b_3').value;
	var l4 = document.getElementById('exercise_1_b_4').value;

	if((l1=='2' && l2=='x' && l3=='10') ||
		(l1=='2' && l3=='x' && l2=='10') ||
		(l2=='2' && l1=='x' && l3=='10') ||
		(l2=='2' && l3=='x' && l1=='10') ||
		(l3=='2' && l1=='x' && l2=='10') ||
		(l3=='2' && l2=='x' && l1=='10')){
		isSuccess&=true;
		document.getElementById('exercise_1_b_result_1').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_result_1').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_1_b_result_1').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_result_1').classList='wrong';
		},300);
	}
	if(l4=='x+10' || l4=='10+x'){
		isSuccess&=true;
		document.getElementById('exercise_1_b_result_2').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_result_2').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_1_b_result_2').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_result_2').classList='wrong';
		},300);
	}

	if(isSuccess){
		audio.src = 'audio/right_answer.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			setTimeout(function () {
				startExercise2();
			}, 1000);
		};
	}else{
		audio.src = 'audio/wrong_answer.mp3';
		audio.load();
		audio.play();
	}
}
function startExercise2(){
	document.getElementById('exercise_1').style.display='none';
	document.getElementById('exercise_2').style.display="block";
	document.getElementById('exercise_2_title').style.opacity = 1;
	document.getElementById('exercise_2_title').style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_8/exercise_1.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended = null;
		document.getElementById('exercise_2_block').style.opacity = 1;
		document.getElementById('exercise_2_block').style.animation = 'fadeIn 2s';
	};
}
function evaluateExercise2(){
	var isSuccess=true;
	var l1 = document.getElementById('exercise_2_b_1').value;
	var l2 = document.getElementById('exercise_2_b_2').value;
	var l3 = document.getElementById('exercise_2_b_3').value;
	var l4 = document.getElementById('exercise_2_b_4').value;

	if((l1=='2' && l2=='x' && l3=='4') ||
		(l1=='2' && l3=='x' && l2=='4') ||
		(l2=='2' && l1=='x' && l3=='4') ||
		(l2=='2' && l3=='x' && l1=='4') ||
		(l3=='2' && l1=='x' && l2=='4') ||
		(l3=='2' && l2=='x' && l1=='4')){
		isSuccess&=true;
		document.getElementById('exercise_2_b_result_1').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_result_1').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_2_b_result_1').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_result_1').classList='wrong';
		},300);
	}
	if(l4=='x+4' || l4=='4+x'){
		isSuccess&=true;
		document.getElementById('exercise_2_b_result_2').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_result_2').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_2_b_result_2').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_result_2').classList='wrong';
		},300);
	}

	if(isSuccess){
		audio.src = 'audio/right_answer.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			setTimeout(function () {
				playHomeWork();
			}, 1000);
		};
	}else{
		audio.src = 'audio/wrong_answer.mp3';
		audio.load();
		audio.play();
	}
}
function playHomeWork(){
	document.getElementById('exercise_2').style.display='none';
	document.getElementById('home_work').style.display="block";
	document.getElementById('home_work_title').style.animation='fadeIn 2s';
	document.getElementById('home_work_title').style.opacity=1;
	audio.src = 'audio/home_work_title.mp3';
	audio.load();
	audio.play();
	audio.onended = function () {
		audio.onended = null;
		setTimeout(function () {
			document.getElementById('home_work_questions').style.animation='fadeIn 2s';
			document.getElementById('home_work_questions').style.opacity=1;
			audio.src = 'audio/period_8/home_work.mp3';
			audio.load();
			audio.play();
			audio.onended = function () {
				playEndOfPeriod();
			};
		}, 1000);
	};
}

function playEndOfPeriod() {
	document.getElementById("home_work").style.display = "none";
	document.getElementById("end_of_period").style.display = "block";
	document.getElementById('end_of_period_title').style.opacity = 1;
	document.getElementById('end_of_period_title').style.animation = "fadeIn 2s";
	audio.src = 'audio/bell.mp3';
	audio.load();
	audio.play();
	setProgress(100);
	audio.onended = function () {
		audio.play();
	};
}