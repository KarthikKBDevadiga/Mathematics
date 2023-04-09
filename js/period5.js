var audio = document.getElementById('audio');
var title = document.getElementById('title');
var content = document.getElementById('content');
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
    	var b = document.getElementById('wrapper');
        if(window.getComputedStyle(b).getPropertyValue("opacity")==1){
			startUnit5(b);
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

function startUnit5(b){
	b.style.display = 'none';
	document.getElementById('one').style.display='none';
	document.getElementById('two').style.display="block";
	title.innerHTML='Period 5'
	title.style.opacity = 1;
	title.style.animation = 'animateIn 2s';
	audio.src = 'audio/period_5/period_5.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended =null;
		title.style.animation = 'animateOut 1s';
		setTimeout(function(){
			title.innerHTML='Inverse Proportion'
			title.style.opacity = 1;
			title.style.animation = 'animateIn 2s';
			audio.src = 'audio/period_5/line_1.mp3';
			audio.load();
			audio.play();
			audio.onended = function(){
				audio.onended =null;
				title.style.opacity=0;
				title.style.animation = 'animateOut 1s';
				setTimeout(function(){
					title.innerHTML = '';
					content.innerHTML='A school wants to spend Rs 6000 on mathematics textbooks. How many books could be bought at Rs 40 each? Clearly 150 books can be bought. If the price of a textbook is more than Rs 40, then the number of books which could be purchased with the same amount of money would be less than 150. Observe the following table';
					content.style.animation = 'animateIn 2s';
					audio.src = 'audio/period_5/line_2.mp3';
					audio.load();
					audio.play();
					audio.onended = function(){
						audio.onended = null;
						content.style.animation = 'animateOut 1s';
						setTimeout(function(){
							content.innerHTML='';
							document.getElementById('two').style.display='none';
							document.getElementById('inverse_proportion').style.display="block";
							document.getElementById('inverse_proportion_b').style.opacity = 1;
							document.getElementById('inverse_proportion_b').style.animation = 'fadeIn 2s';
							audio.src = 'audio/period_5/line_3.mp3';
							audio.load();
							audio.play();
							audio.onended= function(){
								document.getElementById('inverse_proportion_b').style.opacity = 1;
								document.getElementById('inverse_proportion_b').style.animation = 'fadeOut 1s';
								setTimeout(function(){
									document.getElementById('inverse_proportion').style.display="none";
									document.getElementById('two').style.display="block";
									content.innerHTML='What do you observe? You will appreciate that as the price of the books increases, the number of books that can be bought, keeping the fund constant, will decrease.';
									content.style.animation = 'animateIn 2s';
									audio.src = 'audio/period_5/line_4.mp3';
									audio.load();
									audio.play();
									audio.onended = function(){
										audio.onended=null;
										content.style.animation = 'animateOut 1s';
										setTimeout(function(){
											content.innerHTML='Ratio by which the price of books increases when going from 40 to 50 is 4 : 5, and the ratio by which the corresponding number of books decreases from 150 to 120 is 5 : 4. This means that the two ratios are inverses of each other.';
											content.style.animation = 'animateIn 2s';
											audio.src = 'audio/period_5/line_5.mp3';
											audio.load();
											audio.play();
											audio.onended = function(){
												audio.onended = null;
												content.style.animation = 'animateOut 1s';
												setTimeout(function(){
													content.innerHTML='Notice that the product of the corresponding values of the two quantities is constant; that is,<br> 40 × 150 = 50 × 120 = 6000';
													content.style.animation = 'animateIn 2s';
													audio.src = 'audio/period_5/line_6.mp3';
													audio.load();
													audio.play();
													audio.onended = function(){
														audio.onended = null;
														content.style.animation = 'animateOut 1s';
														setTimeout(function(){
															content.innerHTML='If we represent the price of one book as x and the number of books bought as y, then as x increases y decreases and vice-versa. It is important to note that the product xy remains constant. We say that x varies inversely with y and y varies inversely with x. Thus two quantities x and y are said to vary in inverse proportion, if there exists a relation of the type xy = k between them, k being a constant.';
															content.style.animation = 'animateIn 2s';
															audio.src = 'audio/period_5/line_7.mp3';
															audio.load();
															audio.play();
															audio.onended = function(){
																audio.onended = null;
																content.style.animation = 'animateOut 1s';
																setTimeout(function(){
																	content.innerHTML='If x increases the value of y also decreases in such a way that the ratio xy does not change it remains constant (k) so x and y are inverse  proportions';
																	content.style.animation = 'animateIn 2s';
																	audio.src = 'audio/period_5/line_8.mp3';
																	audio.load();
																	audio.play();
																	audio.onended = function(){
																		audio.onended = null;
																		content.style.animation = 'animateOut 1s';
																		setTimeout(function(){
																			content.innerHTML='If x =k1/y<br>Xy = k';
																			content.style.animation = 'animateIn 2s';
																			audio.src = 'audio/period_5/line_9.mp3';
																			audio.load();
																			audio.play();
																			audio.onended = function(){
																				audio.onended = null;
																				content.style.animation = 'animateOut 1s';
																				setTimeout(function(){
																					content.innerHTML='If x and y are in inverse  proportion<br><br>x1 &divide; x2  = y2 &divide; y1<br>[y1,y2 are the values of y correspond to the x1,x2of x respectively]';
																					content.style.animation = 'animateIn 2s';
																					audio.src = 'audio/period_5/line_10.mp3';
																					audio.load();
																					audio.play();
																					audio.onended =function(){
																						audio.onended = null;
																						content.style.animation = 'animateOut 1s';
																						setTimeout(function(){
																							startExample1();
																						},1000);
																					}
																				},1000);
																			};
																		},1000);
																	};
																},1000);
															};
														},1000);
													};
												},1000);
											};
										},1000);
									};	
								},1000);
							};
						},1000);
					}
				},1000);
			};
		},1000);
	};
}
function startExample1(){
	document.getElementById('two').style.display="none";
	document.getElementById('example_1').style.display='block';
	document.getElementById('example_1_title').style.opacity=1;
	document.getElementById('example_1_title').style.animation='fadeIn 2s';
	audio.src = 'audio/period_5/example_1_title.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		document.getElementById('example_1_line_1').style.opacity=1;
		document.getElementById('example_1_line_1').style.animation='animateIn 2s';
		audio.src = 'audio/period_5/example_1_line_1.mp3';
		audio.load();
		audio.play();
		audio.onended = function(){
			document.getElementById('example_1_b').style.opacity=1;
			document.getElementById('example_1_b').style.animation='fadeIn 2s';
			audio.src = 'audio/period_5/example_1_b.mp3';
			audio.load();
			audio.play();
			audio.onended = function(){
				document.getElementById('example_1_title').style.opacity=0;
				document.getElementById('example_1_title').style.animation='fadeOut 1s';
				document.getElementById('example_1_line_1').style.opacity=0;
				document.getElementById('example_1_line_1').style.animation='fadeOut 1s';
				document.getElementById('example_1_b').style.opacity=0;
				document.getElementById('example_1_b').style.animation='fadeOut 1s';
				setTimeout(function(){
					startExample2();
				},1000);
			};
		};
	};
}

function startExample2(){
	document.getElementById('example_1').style.display="none";
	document.getElementById('example_2').style.display='block';
	document.getElementById('example_2_title').style.opacity=1;
	document.getElementById('example_2_title').style.animation='fadeIn 2s';
	audio.src = 'audio/period_5/example_2_title.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		document.getElementById('example_2_line_1').style.opacity=1;
		document.getElementById('example_2_line_1').style.animation='animateIn 2s';
		audio.src = 'audio/period_5/example_2_line_1.mp3';
		audio.load();
		audio.play();
		audio.onended = function(){
			document.getElementById('example_2_b_1').style.opacity=1;
			document.getElementById('example_2_b_1').style.animation='fadeIn 2s';
			audio.src = 'audio/period_5/example_2_b_1.mp3';
			audio.load();
			audio.play();
			audio.onended = function(){
				document.getElementById('example_2_b_1').style.opacity=0;
				document.getElementById('example_2_b_1').style.animation='fadeOut 1s';
				setTimeout(function(){
					document.getElementById('example_2_b_2').style.opacity=1;
					document.getElementById('example_2_b_2').style.animation='fadeIn 2s';
					audio.src = 'audio/period_5/example_2_b_2.mp3';
					audio.load();
					audio.play();
					audio.onended = function(){
						document.getElementById('example_2_line_2').style.opacity=1;
						document.getElementById('example_2_line_2').style.animation='animateIn 2s';
						audio.src = 'audio/period_5/example_2_line_2.mp3';
						audio.load();
						audio.play();
						audio.onended = function(){
							document.getElementById('example_2_line_3').style.opacity=1;
							document.getElementById('example_2_line_3').style.animation='animateIn 2s';
							audio.src = 'audio/period_5/example_2_line_3.mp3';
							audio.load();
							audio.play();
							audio.onended = function(){
								document.getElementById('example_2_line_4').style.opacity=1;
								document.getElementById('example_2_line_4').style.animation='animateIn 2s';
								audio.src = 'audio/period_5/example_2_line_4.mp3';
								audio.load();
								audio.play();
								audio.onended=function(){
									document.getElementById('example_2_title').style.opacity=0;
									document.getElementById('example_2_title').style.animation='fadeOut 1s';
									document.getElementById('example_2_line_1').style.opacity=0;
									document.getElementById('example_2_line_1').style.animation='fadeOut 1s';
									document.getElementById('example_2_b_2').style.opacity=0;
									document.getElementById('example_2_b_2').style.animation='fadeOut 1s';
									document.getElementById('example_2_line_2').style.opacity=0;
									document.getElementById('example_2_line_2').style.animation='fadeOut 1s';
									document.getElementById('example_2_line_3').style.opacity=0;
									document.getElementById('example_2_line_3').style.animation='fadeOut 1s';
									document.getElementById('example_2_line_4').style.opacity=0;
									document.getElementById('example_2_line_4').style.animation='fadeOut 1s';
									setTimeout(function(){
										startExercise();
									},1000);
								};
							}
						}
					}
				},1000);
			}
		};		
	};
}
function startExercise(){
	document.getElementById('example_2').style.display='none';
	document.getElementById('two').style.display="block";
	title.innerHTML='';
	content.innerHTML='';
	title.innerHTML='Exercises'
	title.style.opacity = 1;
	title.style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_5/exercises.mp3';
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
	audio.src = 'audio/period_5/exercise_1.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		document.getElementById('exercise_1_b_1').style.opacity = 1;
		document.getElementById('exercise_1_b_1').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_1_line_1').style.opacity = 1;
		document.getElementById('exercise_1_line_1').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_1_line_2').style.opacity = 1;
		document.getElementById('exercise_1_line_2').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_1_line_3').style.opacity = 1;
		document.getElementById('exercise_1_line_3').style.animation = 'fadeIn 2s';
	};
}

function evaluateExercise1(){
	var isSuccess=true;
	var b1 = document.getElementById('exercise_1_b_1_1').value;
	var b2 = document.getElementById('exercise_1_b_1_2').value;
	var b3 = document.getElementById('exercise_1_b_1_3').value;
	var b4 = document.getElementById('exercise_1_b_1_4').value;
	if((b1==4 && b2==3 && b3=='x' && b4== 90) ||
		(b2==4 && b1==3 && b4=='x' && b3== 90) ||
		(b3==4 && b4==3 && b1=='x' && b2== 90) ||
		(b4==4 && b3==3 && b2=='x' && b1== 90)){
		isSuccess&=true;
		document.getElementById('exercise_1_b_1_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_1_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_1_b_1_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_1_result').classList='wrong';
		},300);
	}
	if(document.getElementById('exercise_1_b_2').value==3){
		isSuccess&=true;
		document.getElementById('exercise_1_b_2_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_2_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_1_b_2_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_2_result').classList='wrong';
		},300);
	}
	if(document.getElementById('exercise_1_b_3').value==180){
		isSuccess&=true;
		document.getElementById('exercise_1_b_3_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_3_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_1_b_3_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_3_result').classList='wrong';
		},300);
	}
	if(isSuccess){
		audio.src = 'audio/right_answer.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			document.getElementById('exercise_1_title').style.opacity = 0;
			document.getElementById('exercise_1_title').style.animation = 'fadeOut 1s';
			document.getElementById('exercise_1_b_1').style.opacity = 0;
			document.getElementById('exercise_1_b_1').style.animation = 'fadeOut 1s';
			document.getElementById('exercise_1_line_1').style.opacity = 0;
			document.getElementById('exercise_1_line_1').style.animation = 'fadeOut 1s';
			document.getElementById('exercise_1_line_2').style.opacity = 0;
			document.getElementById('exercise_1_line_2').style.animation = 'fadeOut 1s';
			document.getElementById('exercise_1_line_3').style.opacity = 0;
			document.getElementById('exercise_1_line_3').style.animation = 'fadeOut 1s';
			setTimeout(function(){
				startExercise2();
			},1000);
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
	audio.src = 'audio/period_5/exercise_2.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		document.getElementById('exercise_2_b_1').style.opacity = 1;
		document.getElementById('exercise_2_b_1').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_2_line_1').style.opacity = 1;
		document.getElementById('exercise_2_line_1').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_2_line_2').style.opacity = 1;
		document.getElementById('exercise_2_line_2').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_2_line_3').style.opacity = 1;
		document.getElementById('exercise_2_line_3').style.animation = 'fadeIn 2s';
	};
}

function evaluateExercise2(){
	var isSuccess=true;
	var b1 = document.getElementById('exercise_2_b_1_1').value;
	var b2 = document.getElementById('exercise_2_b_1_2').value;
	var b3 = document.getElementById('exercise_2_b_1_3').value;
	var b4 = document.getElementById('exercise_2_b_1_4').value;
	if((b1==3 && b2==2 && b3=='x' && b4== 60) ||
		(b2==3 && b1==2 && b4=='x' && b3== 60) ||
		(b3==3 && b4==2 && b1=='x' && b2== 60) ||
		(b4==3 && b3==2 && b2=='x' && b1== 60)){
		isSuccess&=true;
		document.getElementById('exercise_2_b_1_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_1_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_2_b_1_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_1_result').classList='wrong';
		},300);
	}
	if(document.getElementById('exercise_2_b_2').value==2){
		isSuccess&=true;
		document.getElementById('exercise_2_b_2_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_2_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_2_b_2_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_2_result').classList='wrong';
		},300);
	}
	if(document.getElementById('exercise_2_b_3').value==90){
		isSuccess&=true;
		document.getElementById('exercise_2_b_3_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_3_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_2_b_3_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_3_result').classList='wrong';
		},300);
	}
	if(isSuccess){
		audio.src = 'audio/right_answer.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			document.getElementById('exercise_2_title').style.opacity = 0;
			document.getElementById('exercise_2_title').style.animation = 'fadeOut 1s';
			document.getElementById('exercise_2_b_1').style.opacity = 0;
			document.getElementById('exercise_2_b_1').style.animation = 'fadeOut 1s';
			document.getElementById('exercise_2_line_1').style.opacity = 0;
			document.getElementById('exercise_2_line_1').style.animation = 'fadeOut 1s';
			document.getElementById('exercise_2_line_2').style.opacity = 0;
			document.getElementById('exercise_2_line_2').style.animation = 'fadeOut 1s';
			document.getElementById('exercise_2_line_3').style.opacity = 0;
			document.getElementById('exercise_2_line_3').style.animation = 'fadeOut 1s';
			setTimeout(function(){
				playHomeWork();
			},1000);
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
			audio.src = 'audio/period_5/home_work.mp3';
			audio.load();
			audio.play();
			audio.onended = function () {
				document.getElementById('home_work_title').style.opacity=0;
				document.getElementById('home_work_title').style.animation='fadeOut 1s';
				setTimeout(function(){
					playEndOfPeriod();
				},1000);
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