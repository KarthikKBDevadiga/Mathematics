var period6Audio = document.getElementById('period_6_audio');

var title = document.getElementById('title');
var content = document.getElementById('content');

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
    	var b = document.getElementById('wrapper');
        if(window.getComputedStyle(b).getPropertyValue("opacity")==1){
			startUnit6(b);
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
			document.getElementById('wrapper').style.animation = 'roleIn 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
		},1000);	
	}, 1000);
});

function startUnit6(b){
	b.style.opacity = 0;
	b.style.display = 'none';
	document.getElementById('one').style.display='none';
	document.getElementById('two').style.display="block";
	title.innerHTML='Period 6'
	title.style.opacity = 1;
	title.style.animation = 'fadeIn 2s';
	period6Audio.src = 'audio/period_6/period_6.mp3';
	period6Audio.load();
	period6Audio.play();
	period6Audio.onended = function(){
		period6Audio.onended =null;
		title.style.animation = 'fadeOut 1s';
		setTimeout(function(){
			title.innerHTML='Unit 3 – Factoristion'
			title.style.animation = 'fadeIn 2s';
			period6Audio.src = 'audio/period_6/unit_3_title.mp3';
			period6Audio.load();
			period6Audio.play();
			period6Audio.onended = function(){
				period6Audio.onended =null;
				title.style.animation = 'fadeOut 1s';
				setTimeout(function(){
					title.innerHTML='Factors of natural numbers'
					title.style.animation = 'fadeIn 2s';
					period6Audio.src = 'audio/period_6/unit_3_line_1.mp3';
					period6Audio.load();
					period6Audio.play();
					period6Audio.onended = function(){
						period6Audio.onended =null;
						title.style.opacity = 0;
						title.style.animation = 'fadeOut 1s';
						setTimeout(function(){
							content.innerHTML='These are the number when multiplied give another number.'
							content.style.animation = 'fadeIn 2s';
							period6Audio.src = 'audio/period_6/unit_3_line_2.mp3';
							period6Audio.load();
							period6Audio.play();
							period6Audio.onended=function(){
								setTimeout(function(){
									startExample1();
								},1000);
							};
						},1000);
					};
				},1000);
			};
		},1000);
	};
}

function startExample1(){
	document.getElementById('two').style.display='none';
	title.innerHTML='';
	content.innerHTML='';
	document.getElementById('example_1').style.display="block";
	document.getElementById('example_1_title').style.opacity=1;
	document.getElementById('example_1_title').style.animation = 'fadeIn 2s';
	period6Audio.src = 'audio/period_6/example_1_title.mp3';
	period6Audio.load();
	period6Audio.play();
	period6Audio.onended = function(){
		period6Audio.onended =null;
		document.getElementById('example_1_line_1').style.opacity=1;
		document.getElementById('example_1_line_1').style.animation = 'fadeIn 2s';
		period6Audio.src = 'audio/period_6/example_1_line_1.mp3';
		period6Audio.load();
		period6Audio.play();
		period6Audio.onended=function(){
			period6Audio.onended =null;
			document.getElementById('example_1_line_2').style.opacity=1;
			document.getElementById('example_1_line_2').style.animation = 'fadeIn 2s';
			period6Audio.src = 'audio/period_6/example_1_line_2.mp3';
			period6Audio.load();
			period6Audio.play();
			period6Audio.onended=function(){
				setTimeout(function(){
					startExample2();
				},1000);
			}
		};
	};
}

function startExample2(){
	document.getElementById('example_1').style.display='none';
	document.getElementById('example_2').style.display="block";
	document.getElementById('example_2_title').style.opacity=1;
	document.getElementById('example_2_title').style.animation = 'fadeIn 2s';
	period6Audio.src = 'audio/period_6/example_2_title.mp3';
	period6Audio.load();
	period6Audio.play();
	period6Audio.onended = function(){
		period6Audio.onended =null;
		document.getElementById('example_2_line_1').style.opacity=1;
		document.getElementById('example_2_line_1').style.animation = 'fadeIn 2s';
		period6Audio.src = 'audio/period_6/example_2_line_1.mp3';
		period6Audio.load();
		period6Audio.play();
		period6Audio.onended = function(){
			period6Audio.onended =null;
			document.getElementById('example_2_line_2').style.opacity=1;
			document.getElementById('example_2_line_2').style.animation = 'fadeIn 2s';
			period6Audio.src = 'audio/period_6/example_2_line_2.mp3';
			period6Audio.load();
			period6Audio.play();
			period6Audio.onended = function(){
				period6Audio.onended=null;
				document.getElementById('example_2_block_3_1_r').style.opacity=1;
				document.getElementById('example_2_block_3_1_r').style.animation='fadeIn 2s';
				document.getElementById('example_2_block_3_1_a').style.opacity=1;
				document.getElementById('example_2_block_3_1_a').style.animation='fadeIn 2s';
				setTimeout(function(){
					document.getElementById('example_2_block_3_1_a').style.animation='';
				},2000);
				period6Audio.src = 'audio/period_6/example_2_block_3_1_r.mp3';
				period6Audio.load();
				period6Audio.play();
				period6Audio.onended=function(){
					document.getElementById('example_2_block_3_1_l').style.opacity=1;
					document.getElementById('example_2_block_3_1_l').style.animation='fadeIn 2s';
					period6Audio.src = 'audio/period_6/example_2_block_3_1_l.mp3';
					period6Audio.load();
					period6Audio.play();

					period6Audio.onended = function(){
						period6Audio.onended=null;
						document.getElementById('example_2_block_3_2_r').style.opacity=1;
						document.getElementById('example_2_block_3_2_r').style.animation='fadeIn 2s';
						document.getElementById('example_2_block_3_2_a').style.opacity=1;
						document.getElementById('example_2_block_3_2_a').style.animation='fadeIn 2s';
						setTimeout(function(){
							document.getElementById('example_2_block_3_2_a').style.animation='';
						},2000);
						period6Audio.src = 'audio/period_6/example_2_block_3_2_r.mp3';
						period6Audio.load();
						period6Audio.play();
						period6Audio.onended=function(){
							document.getElementById('example_2_block_3_2_l').style.opacity=1;
							document.getElementById('example_2_block_3_2_l').style.animation='fadeIn 2s';
							period6Audio.src = 'audio/period_6/example_2_block_3_2_l.mp3';
							period6Audio.load();
							period6Audio.play();
							period6Audio.onended = function(){
								period6Audio.onended=null;
								document.getElementById('example_2_block_3_3_r').style.opacity=1;
								document.getElementById('example_2_block_3_3_r').style.animation='fadeIn 2s';
								document.getElementById('example_2_block_3_3_a').style.opacity=1;
								document.getElementById('example_2_block_3_3_a').style.animation='fadeIn 2s';
								setTimeout(function(){
									document.getElementById('example_2_block_3_3_a').style.animation='';
								},2000);
								period6Audio.src = 'audio/period_6/example_2_block_3_2_r.mp3';
								period6Audio.load();
								period6Audio.play();
								period6Audio.onended=function(){
									document.getElementById('example_2_block_3_3_l').style.opacity=1;
									document.getElementById('example_2_block_3_3_l').style.animation='fadeIn 2s';
									period6Audio.src = 'audio/period_6/example_2_block_3_3_l.mp3';
									period6Audio.load();
									period6Audio.play();
									period6Audio.onended = function(){
										period6Audio.onended=null;
										document.getElementById('example_2_line_3').style.opacity=1;
										document.getElementById('example_2_line_3').style.animation='fadeIn 2s';
										period6Audio.src = 'audio/period_6/example_2_line_3.mp3';
										period6Audio.load();
										period6Audio.play();
										period6Audio.onended=function(){
											setTimeout(function(){
												startPrimeFActor();
											},1000);
											
										};
									};
								}
							};
						}
					};
				}
			};
		};
	};
}

function startPrimeFActor(){
	document.getElementById('example_2').style.display='none';
	document.getElementById('two').style.display="block";
	title.innerHTML='Prime Factor Form'
	title.style.opacity = 1;
	title.style.animation = 'fadeIn 2s';
	period6Audio.src = 'audio/period_6/ppf_title.mp3';
	period6Audio.load();
	period6Audio.play();
	period6Audio.onended = function(){
		period6Audio.onended =null;
		title.style.opacity = 0;
		title.style.animation = 'fadeOut 1s';
		setTimeout(function(){
			content.innerHTML='When number is written as a product of prime factors then it is said to be its prime factor form.'
			content.style.animation = 'fadeIn 2s';
			period6Audio.src = 'audio/period_6/ppf_line_1.mp3';
			period6Audio.load();
			period6Audio.play();
			period6Audio.onended=function(){
				startExample3();
			};
		},1000);
	};
}

function startExample3(){
	document.getElementById('two').style.display='none';
	document.getElementById('example_3').style.display="block";
	document.getElementById('example_3_title').style.opacity=1;
	document.getElementById('example_3_title').style.animation = 'fadeIn 2s';
	period6Audio.src = 'audio/period_6/example_1_title.mp3';
	period6Audio.load();
	period6Audio.play();
	period6Audio.onended = function(){
		period6Audio.onended =null;
		document.getElementById('example_3_line_1').style.opacity=1;
		document.getElementById('example_3_line_1').style.animation = 'fadeIn 2s';
		period6Audio.src = 'audio/period_6/example_3_line_1.mp3';
		period6Audio.load();
		period6Audio.play();
		period6Audio.onended = function(){
			period6Audio.onended =null;
			document.getElementById('example_3_line_2').style.opacity=1;
			document.getElementById('example_3_line_2').style.animation = 'fadeIn 2s';
			period6Audio.src = 'audio/period_6/example_2_line_2.mp3';
			period6Audio.load();
			period6Audio.play();
			period6Audio.onended = function(){
				period6Audio.onended = null;
				document.getElementById('example_3_block_1_r_1').style.opacity=1;
				document.getElementById('example_3_block_1_r_1').style.animation = 'fadeIn 2s';
				document.getElementById('example_3_block_1_a').style.opacity=1;
				document.getElementById('example_3_block_1_a').style.animation = 'fadeIn 2s';
				setTimeout(function(){
					document.getElementById('example_3_block_1_a').style.animation = '';
				},2000);
				period6Audio.src = 'audio/period_6/example_3_block_1_r.mp3';
				period6Audio.load();
				period6Audio.play();
				period6Audio.onended = function(){
					period6Audio.onended = null;
					document.getElementById('example_3_block_1_l').style.opacity=1;
					document.getElementById('example_3_block_1_l').style.animation = 'fadeIn 2s';
					document.getElementById('example_3_block_2_a').style.opacity=1;
					document.getElementById('example_3_block_2_a').style.animation = 'fadeIn 2s';
					setTimeout(function(){
						document.getElementById('example_3_block_2_a').style.animation = '';
					},2000);
					period6Audio.src = 'audio/period_6/example_3_block_1_l.mp3';
					period6Audio.load();
					period6Audio.play();
					period6Audio.onended = function(){
						period6Audio.onended = null;
						period6Audio.src = 'audio/period_6/example_3_block_2_r.mp3';
						period6Audio.load();
						period6Audio.play();
						period6Audio.onended = function(){
							period6Audio.onended = null;
							document.getElementById('example_3_block_2_l').style.opacity=1;
							document.getElementById('example_3_block_2_l').style.animation = 'fadeIn 2s';
							period6Audio.src = 'audio/period_6/example_3_block_2_l.mp3';
							period6Audio.load();
							period6Audio.play();
							period6Audio.onended = function(){
								period6Audio.onended = null;
								document.getElementById('example_3_line_3').style.opacity=1;
								document.getElementById('example_3_line_3').style.animation = 'fadeIn 2s';
								period6Audio.src = 'audio/period_6/example_3_line_3.mp3';
								period6Audio.load();
								period6Audio.play();
								period6Audio.onended = function(){
									setTimeout(function(){
										startExercise();
									},1000);
								};
							}
						};
					}
				}
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
	period6Audio.src = 'audio/period_6/exercises.mp3';
	period6Audio.load();
	period6Audio.play();

	period6Audio.onended = function(){
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
	period6Audio.src = 'audio/period_6/exercise_1.mp3';
	period6Audio.load();
	period6Audio.play();
	period6Audio.onended = function(){
		document.getElementById('exercise_1_block').style.opacity = 1;
		document.getElementById('exercise_1_block').style.animation = 'fadeIn 2s';

	};
}

function evaluateExercize1(){
	var isSuccess=true;
	var b2L1 = document.getElementById('exercise_1_block_2_l_1').value;
	var b2L2 = document.getElementById('exercise_1_block_2_l_2').value;
	var b1L1 = document.getElementById('exercise_1_block_1_l_1').value;
	var b1L2 = document.getElementById('exercise_1_block_1_l_2').value;

	if(b1L1*b1L2!=50){
		isSuccess&=false;
		document.getElementById('exercise_1_block_1_l_1_result').classList='wrong_animated';
		document.getElementById('exercise_1_block_1_l_2_result').classList='wrong_animated';
		document.getElementById('exercise_1_block_2_l_1_result').classList='wrong_animated';
		document.getElementById('exercise_1_block_2_l_2_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_block_1_l_1_result').classList='wrong';
			document.getElementById('exercise_1_block_1_l_2_result').classList='wrong';
			document.getElementById('exercise_1_block_2_l_1_result').classList='wrong';
			document.getElementById('exercise_1_block_2_l_2_result').classList='wrong';
		},300);
	}else{
		isSuccess&=true;
		document.getElementById('exercise_1_block_1_l_1_result').classList='done_animated';
		document.getElementById('exercise_1_block_1_l_2_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_block_1_l_1_result').classList='done';
			document.getElementById('exercise_1_block_1_l_2_result').classList='done';
		},300);
		if(b2L1*b2L2!=b1L2){
			isSuccess&=false;
			document.getElementById('exercise_1_block_2_l_1_result').classList='wrong_animated';
			document.getElementById('exercise_1_block_2_l_2_result').classList='wrong_animated';
			setTimeout(function(){
				document.getElementById('exercise_1_block_2_l_1_result').classList='wrong';
				document.getElementById('exercise_1_block_2_l_2_result').classList='wrong';
			},300);
		}else{
			isSuccess&=true;
			document.getElementById('exercise_1_block_2_l_1_result').classList='done_animated';
			document.getElementById('exercise_1_block_2_l_2_result').classList='done_animated';
			setTimeout(function(){
				document.getElementById('exercise_1_block_2_l_1_result').classList='done';
				document.getElementById('exercise_1_block_2_l_2_result').classList='done';
			},300);
		}
	}
	if(isSuccess){
		period6Audio.src = 'audio/right_answer.mp3';
		period6Audio.load();
		period6Audio.play();
		period6Audio.onended=function(){
			setTimeout(function () {
				startExercise2();
			}, 1000);
		};
	}else{
		period6Audio.src = 'audio/wrong_answer.mp3';
		period6Audio.load();
		period6Audio.play();
	}
}

function startExercise2(){
	document.getElementById('exercise_1').style.display='none';
	document.getElementById('exercise_2').style.display="block";
	document.getElementById('exercise_2_title').style.opacity = 1;
	document.getElementById('exercise_2_title').style.animation = 'fadeIn 2s';
	period6Audio.src = 'audio/period_6/exercise_2.mp3';
	period6Audio.load();
	period6Audio.play();
	period6Audio.onended = function(){
		document.getElementById('exercise_2_block').style.opacity = 1;
		document.getElementById('exercise_2_block').style.animation = 'fadeIn 2s';

	};
}

function evaluateExercize2(){
	var isSuccess=true;
	var b2L1 = document.getElementById('exercise_2_block_2_l_1').value;
	var b2L2 = document.getElementById('exercise_2_block_2_l_2').value;
	var b1L1 = document.getElementById('exercise_2_block_1_l_1').value;
	var b1L2 = document.getElementById('exercise_2_block_1_l_2').value;

	if(b1L1*b1L2!=20){
		isSuccess&=false;
		document.getElementById('exercise_2_block_1_l_1_result').classList='wrong_animated';
		document.getElementById('exercise_2_block_1_l_2_result').classList='wrong_animated';
		document.getElementById('exercise_2_block_2_l_1_result').classList='wrong_animated';
		document.getElementById('exercise_2_block_2_l_2_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_block_1_l_1_result').classList='wrong';
			document.getElementById('exercise_2_block_1_l_2_result').classList='wrong';
			document.getElementById('exercise_2_block_2_l_1_result').classList='wrong';
			document.getElementById('exercise_2_block_2_l_2_result').classList='wrong';
		},300);
	}else{
		isSuccess&=true;
		document.getElementById('exercise_2_block_1_l_1_result').classList='done_animated';
		document.getElementById('exercise_2_block_1_l_2_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_block_1_l_1_result').classList='done';
			document.getElementById('exercise_2_block_1_l_2_result').classList='done';
		},300);
		if(b2L1*b2L2!=b1L2){
			isSuccess&=false;
			document.getElementById('exercise_2_block_2_l_1_result').classList='wrong_animated';
			document.getElementById('exercise_2_block_2_l_2_result').classList='wrong_animated';
			setTimeout(function(){
				document.getElementById('exercise_2_block_2_l_1_result').classList='wrong';
				document.getElementById('exercise_2_block_2_l_2_result').classList='wrong';
			},300);
		}else{
			isSuccess&=true;
			document.getElementById('exercise_2_block_2_l_1_result').classList='done_animated';
			document.getElementById('exercise_2_block_2_l_2_result').classList='done_animated';
			setTimeout(function(){
				document.getElementById('exercise_2_block_2_l_1_result').classList='done';
				document.getElementById('exercise_2_block_2_l_2_result').classList='done';
			},300);
		}
	}
	if(isSuccess){
		period6Audio.src = 'audio/right_answer.mp3';
		period6Audio.load();
		period6Audio.play();
		period6Audio.onended=function(){
			setTimeout(function () {
				startExercise3();
			}, 1000);
		};
	}else{
		period6Audio.src = 'audio/wrong_answer.mp3';
		period6Audio.load();
		period6Audio.play();
	}
}

function startExercise3(){
	document.getElementById('exercise_2').style.display='none';
	document.getElementById('exercise_3').style.display="block";
	document.getElementById('exercise_3_title').style.opacity = 1;
	document.getElementById('exercise_3_title').style.animation = 'fadeIn 2s';
	period6Audio.src = 'audio/period_6/exercise_3.mp3';
	period6Audio.load();
	period6Audio.play();
	period6Audio.onended = function(){
		document.getElementById('exercise_3_block').style.opacity = 1;
		document.getElementById('exercise_3_block').style.animation = 'fadeIn 2s';

	};
}

function evaluateExercize3(){
	var isSuccess=true;
	var b2L1 = document.getElementById('exercise_3_block_2_l_1').value;
	var b2L2 = document.getElementById('exercise_3_block_2_l_2').value;
	var b1L1 = document.getElementById('exercise_3_block_1_l_1').value;
	var b1L2 = document.getElementById('exercise_3_block_1_l_2').value;

	if(b1L1*b1L2!=30){
		isSuccess&=false;
		document.getElementById('exercise_3_block_1_l_1_result').classList='wrong_animated';
		document.getElementById('exercise_3_block_1_l_2_result').classList='wrong_animated';
		document.getElementById('exercise_3_block_2_l_1_result').classList='wrong_animated';
		document.getElementById('exercise_3_block_2_l_2_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_block_1_l_1_result').classList='wrong';
			document.getElementById('exercise_3_block_1_l_2_result').classList='wrong';
			document.getElementById('exercise_3_block_2_l_1_result').classList='wrong';
			document.getElementById('exercise_3_block_2_l_2_result').classList='wrong';
		},300);
	}else{
		isSuccess&=true;
		document.getElementById('exercise_3_block_1_l_1_result').classList='done_animated';
		document.getElementById('exercise_3_block_1_l_2_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_block_1_l_1_result').classList='done';
			document.getElementById('exercise_3_block_1_l_2_result').classList='done';
		},300);
		if(b2L1*b2L2!=b1L2){
			isSuccess&=false;
			document.getElementById('exercise_3_block_2_l_1_result').classList='wrong_animated';
			document.getElementById('exercise_3_block_2_l_2_result').classList='wrong_animated';
			setTimeout(function(){
				document.getElementById('exercise_3_block_2_l_1_result').classList='wrong';
				document.getElementById('exercise_3_block_2_l_2_result').classList='wrong';
			},300);
		}else{
			isSuccess&=true;
			document.getElementById('exercise_3_block_2_l_1_result').classList='done_animated';
			document.getElementById('exercise_3_block_2_l_2_result').classList='done_animated';
			setTimeout(function(){
				document.getElementById('exercise_3_block_2_l_1_result').classList='done';
				document.getElementById('exercise_3_block_2_l_2_result').classList='done';
			},300);
		}
	}
	if(isSuccess){
		period6Audio.src = 'audio/right_answer.mp3';
		period6Audio.load();
		period6Audio.play();
		period6Audio.onended=function(){
			setTimeout(function () {
				startExercise4();
			}, 1000);
		};
	}else{
		period6Audio.src = 'audio/wrong_answer.mp3';
		period6Audio.load();
		period6Audio.play();
	}
}

function startExercise4(){
	document.getElementById('exercise_3').style.display='none';
	document.getElementById('exercise_4').style.display="block";
	document.getElementById('exercise_4_title').style.opacity = 1;
	document.getElementById('exercise_4_title').style.animation = 'fadeIn 2s';
	period6Audio.src = 'audio/period_6/exercise_4.mp3';
	period6Audio.load();
	period6Audio.play();
	period6Audio.onended = function(){
		document.getElementById('exercise_4_block').style.opacity = 1;
		document.getElementById('exercise_4_block').style.animation = 'fadeIn 2s';

	};
}

function evaluateExercize4(){
	var isSuccess=true;
	var b3L1 = document.getElementById('exercise_4_block_3_l_1').value;
	var b3L2 = document.getElementById('exercise_4_block_3_l_2').value;
	var b2L1 = document.getElementById('exercise_4_block_2_l_1').value;
	var b2L2 = document.getElementById('exercise_4_block_2_l_2').value;
	var b1L1 = document.getElementById('exercise_4_block_1_l_1').value;
	var b1L2 = document.getElementById('exercise_4_block_1_l_2').value;

	if(b1L1*b1L2!=100){
		isSuccess&=false;
		document.getElementById('exercise_4_block_1_l_1_result').classList='wrong_animated';
		document.getElementById('exercise_4_block_1_l_2_result').classList='wrong_animated';
		document.getElementById('exercise_4_block_2_l_1_result').classList='wrong_animated';
		document.getElementById('exercise_4_block_2_l_2_result').classList='wrong_animated';
		document.getElementById('exercise_4_block_3_l_1_result').classList='wrong_animated';
		document.getElementById('exercise_4_block_3_l_2_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_block_1_l_1_result').classList='wrong';
			document.getElementById('exercise_4_block_1_l_2_result').classList='wrong';
			document.getElementById('exercise_4_block_2_l_1_result').classList='wrong';
			document.getElementById('exercise_4_block_2_l_2_result').classList='wrong';
			document.getElementById('exercise_4_block_3_l_1_result').classList='wrong';
			document.getElementById('exercise_4_block_3_l_2_result').classList='wrong';
		},300);
	}else{
		isSuccess&=true;
		document.getElementById('exercise_4_block_1_l_1_result').classList='done_animated';
		document.getElementById('exercise_4_block_1_l_2_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_block_1_l_1_result').classList='done';
			document.getElementById('exercise_4_block_1_l_2_result').classList='done';
		},300);
		if(b2L1*b2L2!=b1L2){
			isSuccess&=false;
			document.getElementById('exercise_4_block_2_l_1_result').classList='wrong_animated';
			document.getElementById('exercise_4_block_2_l_2_result').classList='wrong_animated';
			document.getElementById('exercise_4_block_3_l_1_result').classList='wrong_animated';
			document.getElementById('exercise_4_block_3_l_2_result').classList='wrong_animated';
			setTimeout(function(){
				document.getElementById('exercise_4_block_2_l_1_result').classList='wrong';
				document.getElementById('exercise_4_block_2_l_2_result').classList='wrong';
				document.getElementById('exercise_4_block_3_l_1_result').classList='wrong';
				document.getElementById('exercise_4_block_3_l_2_result').classList='wrong';
			},300);
		}else{
			isSuccess&=true;
			document.getElementById('exercise_4_block_2_l_1_result').classList='done_animated';
			document.getElementById('exercise_4_block_2_l_2_result').classList='done_animated';
			setTimeout(function(){
				document.getElementById('exercise_4_block_2_l_1_result').classList='done';
				document.getElementById('exercise_4_block_2_l_2_result').classList='done';
			},300);
			if(b3L1*b3L2!=b2L2){
				isSuccess&=false;
				document.getElementById('exercise_4_block_3_l_1_result').classList='wrong_animated';
				document.getElementById('exercise_4_block_3_l_2_result').classList='wrong_animated';
				setTimeout(function(){
					document.getElementById('exercise_4_block_3_l_1_result').classList='wrong';
					document.getElementById('exercise_4_block_3_l_2_result').classList='wrong';
				},300);
			}else{
				isSuccess&=true;
				document.getElementById('exercise_4_block_3_l_1_result').classList='done_animated';
				document.getElementById('exercise_4_block_3_l_2_result').classList='done_animated';
				setTimeout(function(){
					document.getElementById('exercise_4_block_3_l_1_result').classList='done';
					document.getElementById('exercise_4_block_3_l_2_result').classList='done';
				},300);
			}
		}
	}
	if(isSuccess){
		period6Audio.src = 'audio/right_answer.mp3';
		period6Audio.load();
		period6Audio.play();
		period6Audio.onended=function(){
			setTimeout(function () {
				startExercise5();
			}, 1000);
		};
	}else{
		period6Audio.src = 'audio/wrong_answer.mp3';
		period6Audio.load();
		period6Audio.play();
	}
}

function startExercise5(){
	document.getElementById('exercise_4').style.display='none';
	document.getElementById('exercise_5').style.display="block";
	document.getElementById('exercise_5_title').style.opacity = 1;
	document.getElementById('exercise_5_title').style.animation = 'fadeIn 2s';
	period6Audio.src = 'audio/period_6/exercise_5.mp3';
	period6Audio.load();
	period6Audio.play();
	period6Audio.onended = function(){
		document.getElementById('exercise_5_block').style.opacity = 1;
		document.getElementById('exercise_5_block').style.animation = 'fadeIn 2s';

	};
}

function evaluateExercize5(){
	var isSuccess=true;
	var b3L1 = document.getElementById('exercise_5_block_3_l_1').value;
	var b3L2 = document.getElementById('exercise_5_block_3_l_2').value;
	var b2L1 = document.getElementById('exercise_5_block_2_l_1').value;
	var b2L2 = document.getElementById('exercise_5_block_2_l_2').value;
	var b1L1 = document.getElementById('exercise_5_block_1_l_1').value;
	var b1L2 = document.getElementById('exercise_5_block_1_l_2').value;

	if(b1L1*b1L2!=90){
		isSuccess&=false;
		document.getElementById('exercise_5_block_1_l_1_result').classList='wrong_animated';
		document.getElementById('exercise_5_block_1_l_2_result').classList='wrong_animated';
		document.getElementById('exercise_5_block_2_l_1_result').classList='wrong_animated';
		document.getElementById('exercise_5_block_2_l_2_result').classList='wrong_animated';
		document.getElementById('exercise_5_block_3_l_1_result').classList='wrong_animated';
		document.getElementById('exercise_5_block_3_l_2_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_5_block_1_l_1_result').classList='wrong';
			document.getElementById('exercise_5_block_1_l_2_result').classList='wrong';
			document.getElementById('exercise_5_block_2_l_1_result').classList='wrong';
			document.getElementById('exercise_5_block_2_l_2_result').classList='wrong';
			document.getElementById('exercise_5_block_3_l_1_result').classList='wrong';
			document.getElementById('exercise_5_block_3_l_2_result').classList='wrong';
		},300);
	}else{
		isSuccess&=true;
		document.getElementById('exercise_5_block_1_l_1_result').classList='done_animated';
		document.getElementById('exercise_5_block_1_l_2_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_5_block_1_l_1_result').classList='done';
			document.getElementById('exercise_5_block_1_l_2_result').classList='done';
		},300);
		if(b2L1*b2L2!=b1L2){
			isSuccess&=false;
			document.getElementById('exercise_5_block_2_l_1_result').classList='wrong_animated';
			document.getElementById('exercise_5_block_2_l_2_result').classList='wrong_animated';
			document.getElementById('exercise_5_block_3_l_1_result').classList='wrong_animated';
			document.getElementById('exercise_5_block_3_l_2_result').classList='wrong_animated';
			setTimeout(function(){
				document.getElementById('exercise_5_block_2_l_1_result').classList='wrong';
				document.getElementById('exercise_5_block_2_l_2_result').classList='wrong';
				document.getElementById('exercise_5_block_3_l_1_result').classList='wrong';
				document.getElementById('exercise_5_block_3_l_2_result').classList='wrong';
			},300);
		}else{
			isSuccess&=true;
			document.getElementById('exercise_5_block_2_l_1_result').classList='done_animated';
			document.getElementById('exercise_5_block_2_l_2_result').classList='done_animated';
			setTimeout(function(){
				document.getElementById('exercise_5_block_2_l_1_result').classList='done';
				document.getElementById('exercise_5_block_2_l_2_result').classList='done';
			},300);
			if(b3L1*b3L2!=b2L2){
				isSuccess&=false;
				document.getElementById('exercise_5_block_3_l_1_result').classList='wrong_animated';
				document.getElementById('exercise_5_block_3_l_2_result').classList='wrong_animated';
				setTimeout(function(){
					document.getElementById('exercise_5_block_3_l_1_result').classList='wrong';
					document.getElementById('exercise_5_block_3_l_2_result').classList='wrong';
				},300);
			}else{
				isSuccess&=true;
				document.getElementById('exercise_5_block_3_l_1_result').classList='done_animated';
				document.getElementById('exercise_5_block_3_l_2_result').classList='done_animated';
				setTimeout(function(){
					document.getElementById('exercise_5_block_3_l_1_result').classList='done';
					document.getElementById('exercise_5_block_3_l_2_result').classList='done';
				},300);
			}
		}
	}
	if(isSuccess){
		period6Audio.src = 'audio/right_answer.mp3';
		period6Audio.load();
		period6Audio.play();
		period6Audio.onended=function(){
			setTimeout(function () {
				playHomeWork();
			}, 1000);
		};
	}else{
		period6Audio.src = 'audio/wrong_answer.mp3';
		period6Audio.load();
		period6Audio.play();
	}
}

function playHomeWork(){
	document.getElementById('exercise_5').style.display='none';
	document.getElementById('home_work').style.display="block";
	document.getElementById('home_work_title').style.animation='fadeIn 2s';
	document.getElementById('home_work_title').style.opacity=1;
	period6Audio.src = 'audio/home_work_title.mp3';
	period6Audio.load();
	period6Audio.play();
	period6Audio.onended = function () {
		period6Audio.onended = null;
		setTimeout(function () {
			document.getElementById('home_work_questions').style.animation='fadeIn 2s';
			document.getElementById('home_work_questions').style.opacity=1;
			period6Audio.src = 'audio/period_6/home_work.mp3';
			period6Audio.load();
			period6Audio.play();
			period6Audio.onended = function () {
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
	period6Audio.src = 'audio/bell.mp3';
	period6Audio.load();
	period6Audio.play();
	setProgress(100);
	period6Audio.onended = function () {
		period6Audio.play();
	};
}