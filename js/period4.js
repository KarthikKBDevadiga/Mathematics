var audio = document.getElementById('audio');
var title = document.getElementById('title');
var content = document.getElementById('content');
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
    	var b = document.getElementById('wrapper');
        if(window.getComputedStyle(b).getPropertyValue("opacity")==1){
			startUnit4(b);
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

function startUnit4(b){
	b.style.opacity = 0;
	b.style.display = 'none';
	document.getElementById('one').style.display='none';
	document.getElementById('two').style.display="block";
	title.innerHTML='Period 4'
	title.style.opacity = 1;
	title.style.animation = 'animateIn 2s';
	audio.src = 'audio/period_4/period_4.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended =null;
		title.style.animation = 'animateOut 1s';
		setTimeout(function(){
			title.innerHTML='Unit 2 – Direct and Inverse Proportions'
			title.style.opacity = 1;
			title.style.animation = 'animateIn 2s';
			audio.src = 'audio/period_4/unit_2_title.mp3';
			audio.load();
			audio.play();
			audio.onended = function(){
				audio.onended =null;
				title.style.animation = 'animateOut 1s';
				setTimeout(function(){
					title.innerHTML='Introduction'
					title.style.opacity = 1;
					title.style.animation = 'animateIn 2s';
					audio.src = 'audio/period_4/introduction_title.mp3';
					audio.load();
					audio.play();
					audio.onended = function(){
						audio.onended =null;
						title.style.opacity=0;
						title.style.animation = 'animateOut 1s';
						setTimeout(function(){
							content.innerHTML='Mohan prepares tea for himself and his sister. He uses 300 mL of water, 2 spoons of sugar, 1 spoon of tea leaves and 50 mL of milk. How much quantity of each item will he need, if he has to make tea for five persons?'
							content.style.animation = 'animateIn 2s';
							audio.src = 'audio/period_4/line_1.mp3';
							audio.load();
							audio.play();
							audio.onended=function(){
								audio.onended =null;
								content.style.animation = 'animateOut 1s';
								setTimeout(function(){
									content.innerHTML='If two students take 20 minutes to arrange chairs for an assembly, then how much time would five students take to do the same job? We come across many such situations in our day-to-day life, where we need to see variation in one quantity bringing in variation in the other quantity'
									content.style.animation = 'animateIn 2s';
									audio.src = 'audio/period_4/line_2.mp3';
									audio.load();
									audio.play();
									audio.onended=function(){
										audio.onended =null;
										content.style.animation = 'animateOut 1s';
										setTimeout(function(){
											startForExample();
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
}

function startForExample(){
	content.innerHTML='For example'
	content.style.animation = 'animateIn 2s';
	audio.src = 'audio/period_4/line_3.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended =null;
		content.style.animation = 'animateOut 1s';
		setTimeout(function(){
			content.innerHTML='1. If the number of articles purchased increases, the total cost also increases'
			content.style.animation = 'animateIn 2s';
			audio.src = 'audio/period_4/line_4.mp3';
			audio.load();
			audio.play();
			audio.onended=function(){
				audio.onended =null;
				content.style.animation = 'animateOut 1s';
				setTimeout(function(){
					content.innerHTML='2. More the money deposited in a bank, more is the interest earned'
					content.style.animation = 'animateIn 2s';
					audio.src = 'audio/period_4/line_5.mp3';
					audio.load();
					audio.play();
					audio.onended=function(){
						audio.onended =null;
						content.style.animation = 'animateOut 1s';
						setTimeout(function(){
							content.innerHTML='3. As the speed of a vehicle increases, the time taken to cover the same distance decreases'
							content.style.animation = 'animateIn 2s';
							audio.src = 'audio/period_4/line_6.mp3';
							audio.load();
							audio.play();
							audio.onended=function(){
								audio.onended =null;
								content.style.animation = 'animateOut 1s';
								setTimeout(function(){
									content.innerHTML='4. For a given job, more the number of workers, less will be the time taken to complete the work'
									content.style.animation = 'animateIn 2s';
									audio.src = 'audio/period_4/line_7.mp3';
									audio.load();
									audio.play();
									audio.onended=function(){
										audio.onended =null;
										content.style.animation = 'animateOut 1s';
										setTimeout(function(){
											content.innerHTML='Observe that change in one quantity leads to change in the other quantity'
											content.style.animation = 'animateIn 2s';
											audio.src = 'audio/period_4/line_8.mp3';
											audio.load();
											audio.play();
											audio.onended=function(){
												audio.onended =null;
												content.style.animation = 'animateOut 1s';
												setTimeout(function(){
													content.innerHTML='Write five more such situations where change in one quantity leads to change in another quantity'
													content.style.animation = 'animateIn 2s';
													audio.src = 'audio/period_4/line_9.mp3';
													audio.load();
													audio.play();
													audio.onended=function(){
														audio.onended =null;
														content.style.animation = 'animateOut 1s';
														setTimeout(function(){
															content.innerHTML='How do we find out the quantity of each item needed by Mohan? Or, the time five students take to complete the job? To answer such questions, we now study some concepts of variation'
															content.style.animation = 'animateIn 2s';
															audio.src = 'audio/period_4/line_10.mp3';
															audio.load();
															audio.play();
															audio.onended = function(){
																audio.onended =null;
																content.style.opacity=0;
																content.style.animation = 'animateOut 1s';
																setTimeout(function(){
																	startDirectProportion();
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
}

function startDirectProportion(){
	title.innerHTML='Direct Proportion';
	title.style.opacity = 1;
	title.style.animation = 'animateIn 2s';
	audio.src = 'audio/period_4/line_11.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended =null;
		title.style.opacity=0;
		title.style.animation = 'animateOut 1s';
		setTimeout(function(){
			title.innerHTML='';
			content.style.opacity=1;
			content.innerHTML='Suppose a car uses 4 litres of petrol to travel a distance of 60 km. How far will it travel using 12 litres? The answer is 180 km. How did we calculate it? Since petrol consumed in the second instance is 12 litres, i.e., three times of 4 litres, the distance travelled will also be three times of 60 km. In other words, when the petrol consumption becomes three-fold, the distance travelled is also three fold the previous one. Let the consumption of petrol be x litres and the corresponding distance travelled be y km. Now, complete the following table'
			content.style.animation = 'animateIn 2s';
			audio.src = 'audio/period_4/line_12.mp3';
			audio.load();
			audio.play();
			audio.onended=function(){
				audio.onended =null;
				content.style.opacity=0;
				content.style.animation = 'animateOut 1s';
				setTimeout(function(){
					document.getElementById('two').style.display='none';
					document.getElementById('direct_proportion').style.display="block";
					document.getElementById('direct_proportion_exercise').style.opacity = 1;
					document.getElementById('direct_proportion_exercise').style.animation = 'fadeIn 2s';
				},1000);
			};
		},1000);
	}
}
function evaluateDirectProportionExercise(){
	var isSuccess=true;
	if(document.getElementById('direct_proportion_exercise_b_1').value==120){
		isSuccess&=true;
		document.getElementById('direct_proportion_exercise_r_1').classList='done_animated';
		setTimeout(function(){
			document.getElementById('direct_proportion_exercise_r_1').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('direct_proportion_exercise_r_1').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('direct_proportion_exercise_r_1').classList='wrong';
		},300);
	}
	if(document.getElementById('direct_proportion_exercise_b_2').value==225){
		isSuccess&=true;
		document.getElementById('direct_proportion_exercise_r_2').classList='done_animated';
		setTimeout(function(){
			document.getElementById('direct_proportion_exercise_r_2').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('direct_proportion_exercise_r_2').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('direct_proportion_exercise_r_2').classList='wrong';
		},300);
	}
	if(document.getElementById('direct_proportion_exercise_b_3').value==300){
		isSuccess&=true;
		document.getElementById('direct_proportion_exercise_r_3').classList='done_animated';
		setTimeout(function(){
			document.getElementById('direct_proportion_exercise_r_3').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('direct_proportion_exercise_r_3').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('direct_proportion_exercise_r_3').classList='wrong';
		},300);
	}
	if(document.getElementById('direct_proportion_exercise_b_4').value==375){
		isSuccess&=true;
		document.getElementById('direct_proportion_exercise_r_4').classList='done_animated';
		setTimeout(function(){
			document.getElementById('direct_proportion_exercise_r_4').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('direct_proportion_exercise_r_4').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('direct_proportion_exercise_r_4').classList='wrong';
		},300);
	}
	if(isSuccess){
		audio.src = 'audio/right_answer.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			setTimeout(function () {
				document.getElementById('direct_proportion').style.opacity = 0;
				document.getElementById('direct_proportion').style.animation = 'fadeOut 1s';
				setTimeout(function(){
					continueDirectProportion();
				},1000);
			}, 1000);
		};
	}else{
		audio.src = 'audio/wrong_answer.mp3';
		audio.load();
		audio.play();
	}
}
function resetDirectProportionExerciseResults(){
	document.getElementById('direct_proportion_exercise_r_1').classList='';
	document.getElementById('direct_proportion_exercise_r_2').classList='';
	document.getElementById('direct_proportion_exercise_r_3').classList='';
	document.getElementById('direct_proportion_exercise_r_4').classList='';
}

function continueDirectProportion(){
	document.getElementById('direct_proportion').style.display="none";
	document.getElementById('two').style.display='block';
	content.innerHTML='We find that as the value of x increases, value of y also increases in such a way that the ratio x y does not change; it remains constant (say k). In this case, it is 1 ÷ 15 (check it!). We say that x and y are in direct proportion, if x ÷ y = k or x = ky'
	content.style.opacity = 1;
	content.style.animation = 'animateIn 2s';
	audio.src = 'audio/period_4/line_13.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended =null;
		content.style.animation = 'animateOut 1s';
		setTimeout(function(){
			content.innerHTML='If x and y are in direct proportion<br>x1 ÷ y1  = x2 ÷ y2<br>[y1,y2 are the values of y corespondind to the x1,x2of x respectively]'
			content.style.animation = 'animateIn 2s';
			audio.src = 'audio/period_4/line_14.mp3';
			audio.load();
			audio.play();
			audio.onended=function(){
				audio.onended =null;
				content.style.animation = 'animateOut 1s';
				setTimeout(function(){
					startExample1();				
				},1000);
			};
		},1000);
	};
}

function startExample1(){
	document.getElementById('two').style.display="none";
	document.getElementById('example_1').style.display='block';
	document.getElementById('example_1_title').style.animation='fadeIn 2s';
	audio.src = 'audio/period_4/example_1_title.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		document.getElementById('example_1_b').style.opacity=1;
		document.getElementById('example_1_b').style.animation='fadeIn 2s';
		audio.src = 'audio/period_4/example_1_line_1.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			document.getElementById('example_1_title').style.animation='fadeOut 1s';
			document.getElementById('example_1_b').style.animation='fadeOut 1s';
			setTimeout(function(){
				startExample2();
			},1000);
		};
	};
}

function startExample2(){
	document.getElementById('example_1').style.display="none";
	document.getElementById('example_2').style.display='block';
	document.getElementById('example_2_title').style.animation='fadeIn 2s';
	audio.src = 'audio/period_4/example_2_title.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		document.getElementById('example_2_line_1').style.opacity=1;
		document.getElementById('example_2_line_1').style.animation='animateIn 2s';
		audio.src = 'audio/period_4/example_2_line_1.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			document.getElementById('example_2_b').style.opacity=1;
			document.getElementById('example_2_b').style.animation='fadeIn 2s';
			audio.src = 'audio/period_4/example_2_line_2.mp3';
			audio.load();
			audio.play();
			audio.onended=function(){
				document.getElementById('example_2_line_2').style.opacity=1;
				document.getElementById('example_2_line_2').style.animation='animateIn 2s';
				audio.src = 'audio/period_4/example_2_line_3.mp3';
				audio.load();
				audio.play();
				audio.onended=function(){
					document.getElementById('example_2_line_3').style.opacity=1;
					document.getElementById('example_2_line_3').style.animation='animateIn 2s';
					audio.src = 'audio/period_4/example_2_line_4.mp3';
					audio.load();
					audio.play();
					audio.onended=function(){
						document.getElementById('example_2_line_4').style.opacity=1;
						document.getElementById('example_2_line_4').style.animation='animateIn 2s';
						audio.src = 'audio/period_4/example_2_line_5.mp3';
						audio.load();
						audio.play();
						audio.onended=function(){
							document.getElementById('example_2_title').style.animation='fadeOut 1s';
							document.getElementById('example_2_b').style.animation='fadeOut 1s';
							document.getElementById('example_2_line_1').style.animation='animateOut 1s';
							document.getElementById('example_2_line_2').style.animation='animateOut 1s';
							document.getElementById('example_2_line_3').style.animation='animateOut 1s';
							document.getElementById('example_2_line_4').style.animation='animateOut 1s';
							setTimeout(function(){
								startExample3();
							},1000);
						};
					};
				};
			};
		};
	};
}
function startExample3(){
	document.getElementById('example_2').style.display="none";
	document.getElementById('example_3').style.display='block';
	document.getElementById('example_3_title').style.animation='fadeIn 2s';
	audio.src = 'audio/period_4/example_3_title.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		document.getElementById('example_3_line_1').style.opacity=1;
		document.getElementById('example_3_line_1').style.animation='animateIn 2s';
		audio.src = 'audio/period_4/example_3_line_1.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			document.getElementById('example_3_b').style.opacity=1;
			document.getElementById('example_3_b').style.animation='fadeIn 2s';
			audio.src = 'audio/period_4/example_3_line_2.mp3';
			audio.load();
			audio.play();
			audio.onended=function(){
				document.getElementById('example_3_line_2').style.opacity=1;
				document.getElementById('example_3_line_2').style.animation='animateIn 2s';
				audio.src = 'audio/period_4/example_3_line_3.mp3';
				audio.load();
				audio.play();
				audio.onended=function(){
					document.getElementById('example_3_line_3').style.opacity=1;
					document.getElementById('example_3_line_3').style.animation='animateIn 2s';
					audio.src = 'audio/period_4/example_3_line_4.mp3';
					audio.load();
					audio.play();
					audio.onended=function(){
						document.getElementById('example_3_line_4').style.opacity=1;
						document.getElementById('example_3_line_4').style.animation='animateIn 2s';
						audio.src = 'audio/period_4/example_3_line_5.mp3';
						audio.load();
						audio.play();
						audio.onended=function(){
							document.getElementById('example_3_title').style.animation='fadeOut 1s';
							document.getElementById('example_3_b').style.animation='fadeOut 1s';
							document.getElementById('example_3_line_1').style.animation='animateOut 1s';
							document.getElementById('example_3_line_2').style.animation='animateOut 1s';
							document.getElementById('example_3_line_3').style.animation='animateOut 1s';
							document.getElementById('example_3_line_4').style.animation='animateOut 1s';
							setTimeout(function(){
								startExercise();
							},1000);
						};
					};
				};
			};
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
	audio.src = 'audio/period_3/exercises.mp3';
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
	audio.src = 'audio/period_4/exercise_1.mp3';
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
	if(document.getElementById('exercise_1_b_1_1').value=='x' && 
		document.getElementById('exercise_1_b_1_2').value==3 && 
		document.getElementById('exercise_1_b_1_3').value==6 && 
		document.getElementById('exercise_1_b_1_4').value==2){
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
	if(document.getElementById('exercise_1_b_2').value==6){
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
	if(document.getElementById('exercise_1_b_3').value==9){
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
	audio.src = 'audio/period_4/exercise_2.mp3';
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
	if(document.getElementById('exercise_2_b_1_1').value=='x' && 
		document.getElementById('exercise_2_b_1_2').value==2 && 
		document.getElementById('exercise_2_b_1_3').value==2 && 
		document.getElementById('exercise_2_b_1_4').value==2){
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
	if(document.getElementById('exercise_2_b_3').value==2){
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
				startExercise3();
			},1000);
		};
	}else{
		audio.src = 'audio/wrong_answer.mp3';
		audio.load();
		audio.play();
	}
}

function startExercise3(){
	document.getElementById('exercise_2').style.display='none';
	document.getElementById('exercise_3').style.display="block";
	document.getElementById('exercise_3_title').style.opacity = 1;
	document.getElementById('exercise_3_title').style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_4/exercise_3.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		document.getElementById('exercise_3_b_1').style.opacity = 1;
		document.getElementById('exercise_3_b_1').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_3_line_1').style.opacity = 1;
		document.getElementById('exercise_3_line_1').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_3_line_2').style.opacity = 1;
		document.getElementById('exercise_3_line_2').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_3_line_3').style.opacity = 1;
		document.getElementById('exercise_3_line_3').style.animation = 'fadeIn 2s';
	};
}

function evaluateExercise3(){
	var isSuccess=true;
	if(document.getElementById('exercise_3_b_1_1').value==3 && 
		document.getElementById('exercise_3_b_1_2').value=='x' && 
		document.getElementById('exercise_3_b_1_3').value==6 && 
		document.getElementById('exercise_3_b_1_4').value==2){
		isSuccess&=true;
		document.getElementById('exercise_3_b_1_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_b_1_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_3_b_1_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_b_1_result').classList='wrong';
		},300);
	}
	if(document.getElementById('exercise_3_b_2').value==2){
		isSuccess&=true;
		document.getElementById('exercise_3_b_2_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_b_2_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_3_b_2_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_b_2_result').classList='wrong';
		},300);
	}
	if(document.getElementById('exercise_3_b_3').value==1){
		isSuccess&=true;
		document.getElementById('exercise_3_b_3_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_b_3_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_3_b_3_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_b_3_result').classList='wrong';
		},300);
	}
	if(isSuccess){
		audio.src = 'audio/right_answer.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			document.getElementById('exercise_3_title').style.opacity = 0;
			document.getElementById('exercise_3_title').style.animation = 'fadeOut 1s';
			document.getElementById('exercise_3_b_1').style.opacity = 0;
			document.getElementById('exercise_3_b_1').style.animation = 'fadeOut 1s';
			document.getElementById('exercise_3_line_1').style.opacity = 0;
			document.getElementById('exercise_3_line_1').style.animation = 'fadeOut 1s';
			document.getElementById('exercise_3_line_2').style.opacity = 0;
			document.getElementById('exercise_3_line_2').style.animation = 'fadeOut 1s';
			document.getElementById('exercise_3_line_3').style.opacity = 0;
			document.getElementById('exercise_3_line_3').style.animation = 'fadeOut 1s';
			setTimeout(function(){
				startExercise4();
			},1000);
		};
	}else{
		audio.src = 'audio/wrong_answer.mp3';
		audio.load();
		audio.play();
	}
}

function startExercise4(){
	document.getElementById('exercise_3').style.display='none';
	document.getElementById('exercise_4').style.display="block";
	document.getElementById('exercise_4_title').style.opacity = 1;
	document.getElementById('exercise_4_title').style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_4/exercise_4.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		document.getElementById('exercise_4_b_1').style.opacity = 1;
		document.getElementById('exercise_4_b_1').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_4_line_1').style.opacity = 1;
		document.getElementById('exercise_4_line_1').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_4_line_2').style.opacity = 1;
		document.getElementById('exercise_4_line_2').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_4_line_3').style.opacity = 1;
		document.getElementById('exercise_4_line_3').style.animation = 'fadeIn 2s';
	};
}

function evaluateExercise4(){
	var isSuccess=true;
	if(document.getElementById('exercise_4_b_1_1').value==4 && 
		document.getElementById('exercise_4_b_1_2').value==3 && 
		document.getElementById('exercise_4_b_1_3').value=='x' && 
		document.getElementById('exercise_4_b_1_4').value==3){
		isSuccess&=true;
		document.getElementById('exercise_4_b_1_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_b_1_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_4_b_1_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_b_1_result').classList='wrong';
		},300);
	}
	if(document.getElementById('exercise_4_b_2').value==4){
		isSuccess&=true;
		document.getElementById('exercise_4_b_2_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_b_2_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_4_b_2_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_b_2_result').classList='wrong';
		},300);
	}
	if(document.getElementById('exercise_4_b_3').value==4){
		isSuccess&=true;
		document.getElementById('exercise_4_b_3_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_b_3_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_4_b_3_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_b_3_result').classList='wrong';
		},300);
	}
	if(isSuccess){
		audio.src = 'audio/right_answer.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			document.getElementById('exercise_4_title').style.opacity = 0;
			document.getElementById('exercise_4_title').style.animation = 'fadeOut 1s';
			document.getElementById('exercise_4_b_1').style.opacity = 0;
			document.getElementById('exercise_4_b_1').style.animation = 'fadeOut 1s';
			document.getElementById('exercise_4_line_1').style.opacity = 0;
			document.getElementById('exercise_4_line_1').style.animation = 'fadeOut 1s';
			document.getElementById('exercise_4_line_2').style.opacity = 0;
			document.getElementById('exercise_4_line_2').style.animation = 'fadeOut 1s';
			document.getElementById('exercise_4_line_3').style.opacity = 0;
			document.getElementById('exercise_4_line_3').style.animation = 'fadeOut 1s';
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
	document.getElementById('exercise_4').style.display='none';
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
			audio.src = 'audio/period_4/home_work.mp3';
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