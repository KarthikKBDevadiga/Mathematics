var audio = document.getElementById('audio');
var title = document.getElementById('title');
var content = document.getElementById('content');
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
    	var b = document.getElementById('wrapper');
        if(window.getComputedStyle(b).getPropertyValue("opacity")==1){
			startUnit3(b);
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

function startUnit3(b){
	b.style.opacity = 0;
	b.style.display = 'none';
	document.getElementById('one').style.display='none';
	document.getElementById('two').style.display="block";
	title.innerHTML='Period 3'
	title.style.opacity = 1;
	title.style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_3/period_3.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		audio.onended =null;
		title.style.animation = 'fadeOut 1s';
		setTimeout(function(){
			title.innerHTML='Use of Exponents to Express Small Numbers in Standard Form'
			title.style.animation = 'fadeIn 2s';
				audio.src = 'audio/period_3/title_1.mp3';
			audio.load();
			audio.play();
			audio.onended = function(){
				audio.onended =null;
				title.style.opacity = 0;
				title.style.animation = 'fadeOut 1s';
				setTimeout(function(){
					content.innerHTML='Observe the following facts.'
					content.style.animation = 'fadeIn 2s';
					audio.src = 'audio/period_3/title_2.mp3';
					audio.load();
					audio.play();
					audio.onended=function(){
						content.style.animation = 'fadeOut 1s';
						setTimeout(function(){
							content.innerHTML='1. The distance from the Earth to the Sun is 149,600,000,000 m'
							content.style.animation = 'fadeIn 2s';
							audio.src = 'audio/period_3/line_1.mp3';
							audio.load();
							audio.play();
							audio.onended=function(){
								content.style.animation = 'fadeOut 1s';
								setTimeout(function(){
									content.innerHTML='2. The speed of light is 300,000,000 m/s'
									content.style.animation = 'fadeIn 2s';
									audio.src = 'audio/period_3/line_2.mp3';
									audio.load();
									audio.play();
									audio.onended=function(){
										content.style.animation = 'fadeOut 1s';
										setTimeout(function(){
											content.innerHTML='3. Thickness of Class VII Mathematics book is 20 mm'
											content.style.animation = 'fadeIn 2s';
											audio.src = 'audio/period_3/line_3.mp3';
											audio.load();
											audio.play();
											audio.onended=function(){
												content.style.animation = 'fadeOut 1s';
												setTimeout(function(){
													content.innerHTML='4. The average diameter of a Red Blood Cell is 0.000007 mm'
													content.style.animation = 'fadeIn 2s';
												audio.src = 'audio/period_3/line_4.mp3';
													audio.load();
													audio.play();
													audio.onended=function(){
														content.style.animation = 'fadeOut 1s';
														setTimeout(function(){
															content.innerHTML='5. The thickness of human hair is in the range of 0.005 cm to 0.01 cm'
															content.style.animation = 'fadeIn 2s';
															audio.src = 'audio/period_3/line_5.mp3';
															audio.load();
															audio.play();
															audio.onended=function(){
																content.style.animation = 'fadeOut 1s';
																setTimeout(function(){
																	content.innerHTML='6. The distance of moon from the Earth is 384, 467, 000 m (approx)'
																	content.style.animation = 'fadeIn 2s';
																	audio.src = 'audio/period_3/line_6.mp3';
																	audio.load();
																	audio.play();
																	audio.onended=function(){
																		content.style.animation = 'fadeOut 1s';
																		setTimeout(function(){
																			content.innerHTML='7. The size of a plant cell is 0.00001275 m'
																			content.style.animation = 'fadeIn 2s';
																			audio.src = 'audio/period_3/line_7.mp3';
																			audio.load();
																			audio.play();
																			audio.onended=function(){
																				content.style.animation = 'fadeOut 1s';
																				setTimeout(function(){
																					content.innerHTML='8. Average radius of the Sun is 695000 km';
																					content.style.animation = 'fadeIn 2s';
																					audio.src = 'audio/period_3/line_8.mp3';
																					audio.load();
																					audio.play();
																					audio.onended=function(){
																						content.style.animation = 'fadeOut 1s';
																							setTimeout(function(){
																							content.innerHTML='9. Mass of propellant in a space shuttle solid rocket booster is 503600 kg';
																							content.style.animation = 'fadeIn 2s';
																							audio.src = 'audio/period_3/line_9.mp3';
																							audio.load();
																							audio.play();
																							audio.onended=function(){
																								content.style.animation = 'fadeOut 1s';
																								setTimeout(function(){
																									content.innerHTML='10. Thickness of a piece of paper is 0.0016 cm';
																									content.style.animation = 'fadeIn 2s';
																									audio.src = 'audio/period_3/line_10.mp3';
																									audio.load();
																									audio.play();
																									audio.onended=function(){
																										content.style.animation = 'fadeOut 1s';
																										setTimeout(function(){
																											content.innerHTML='11. Diameter of a wire on a computer chip is 0.000003 m.';
																											content.style.animation = 'fadeIn 2s';
																											audio.src = 'audio/period_3/line_11.mp3';
																											audio.load();
																											audio.play();
																											audio.onended=function(){
																												content.style.animation = 'fadeOut 1s';
																												setTimeout(function(){
																													content.innerHTML='12. The height of Mount Everest is 8848 m';
																													content.style.animation = 'fadeIn 2s';
																													audio.src = 'audio/period_3/line_12.mp3';
																													audio.load();
																													audio.play();
																													audio.onended=function(){
																														content.style.animation = 'fadeOut 1s';
																														setTimeout(function(){
																															content.innerHTML='Observe that there are few numbers which we can read like 2 cm, 8848 m, 6,95,000 km. There are some large numbers like 150,000,000,000 m and some very small numbers like 0.000007 m.';
																															content.style.animation = 'fadeIn 2s';
																															audio.src = 'audio/period_3/line_13.mp3';
																															audio.load();
																															audio.play();
																															audio.onended=function(){
																																startForExample();
																															};
																														},1000);
																														
																													};
																												},1000)
																												
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

function startForExample(){
	document.getElementById('two').style.display='none';
	document.getElementById('for_example').style.display="block";

	document.getElementById('for_example_line_1').style.opacity=1;
	document.getElementById('for_example_line_1').style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_3/for_example_line_1.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		document.getElementById('for_example_line_2').style.opacity=1;
		document.getElementById('for_example_line_2').style.animation = 'fadeIn 2s';
		audio.src = 'audio/period_3/for_example_line_2.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			document.getElementById('for_example_line_3').style.opacity=1;
			document.getElementById('for_example_line_3').style.animation = 'fadeIn 2s';
			audio.src = 'audio/period_3/for_example_line_3.mp3';
			audio.load();
			audio.play();
			audio.onended=function(){
				setTimeout(function(){
					startExample1();
				},1000);
			};
		};
	};
}

function startExample1(){
	document.getElementById('for_example').style.display='none';
	document.getElementById('example_1').style.display="block";
	document.getElementById('example_1_title').style.opacity=1;
	document.getElementById('example_1_title').style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_3/example_1_title.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended =null;
		document.getElementById('example_1_line_1').style.opacity=1;
		document.getElementById('example_1_line_1').style.animation = 'fadeIn 2s';
		audio.src = 'audio/period_3/example_1_line_1.mp3';
		audio.load();
		audio.play();
		audio.onended = function(){
			audio.onended =null;
			document.getElementById('example_1_b').style.opacity=1;
			document.getElementById('example_1_b').style.animation = 'fadeIn 2s';
			audio.src = 'audio/period_3/example_b.mp3';
			audio.load();
			audio.play();
			audio.onended=function(){
				audio.onended =null;
				document.getElementById('example_1_b_1').style.background = '#00FF0066';
				document.getElementById('example_1_b_1').style.animation = "positiveBg 2s";
				document.getElementById('example_1_b_2').style.background = '#00FF0066';
				document.getElementById('example_1_b_2').style.animation = "positiveBg 2s";

				document.getElementById('example_1_line_2').style.opacity=1;
				document.getElementById('example_1_line_2').style.animation = 'fadeIn 2s';
				audio.src = 'audio/period_3/example_1_line_2.mp3';
				audio.load();
				audio.play();
				audio.onended=function(){
					setTimeout(function(){
						startExample2();
					},1000);
				};
			};
		};
	};
}

function startExample2(){
	document.getElementById('example_1').style.display='none';
	document.getElementById('example_2').style.display="block";
	document.getElementById('example_2_title').style.opacity=1;
	document.getElementById('example_2_title').style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_3/example_2_title.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended =null;
		document.getElementById('example_2_line_1').style.opacity=1;
		document.getElementById('example_2_line_1').style.animation = 'fadeIn 2s';
		audio.src = 'audio/period_3/example_2_line_1.mp3';
		audio.load();
		audio.play();
		audio.onended = function(){
			audio.onended =null;
			document.getElementById('example_2_b').style.opacity=1;
			document.getElementById('example_2_b').style.animation = 'fadeIn 2s';
			audio.src = 'audio/period_3/example_b.mp3';
			audio.load();
			audio.play();
			audio.onended=function(){
				audio.onended =null;
				document.getElementById('example_2_b_1').style.background = '#00FF0066';
				document.getElementById('example_2_b_1').style.animation = "positiveBg 2s";
				document.getElementById('example_2_b_2').style.background = '#00FF0066';
				document.getElementById('example_2_b_2').style.animation = "positiveBg 2s";
				
				document.getElementById('example_2_line_2').style.opacity=1;
				document.getElementById('example_2_line_2').style.animation = 'fadeIn 2s';
				audio.src = 'audio/period_3/example_2_line_2.mp3';
				audio.load();
				audio.play();
				audio.onended=function(){
					setTimeout(function(){
						startExample3();
					},1000);
				};
			};
		};
	};
}

function startExample3(){
	document.getElementById('example_2').style.display='none';
	document.getElementById('example_3').style.display="block";
	document.getElementById('example_3_title').style.opacity=1;
	document.getElementById('example_3_title').style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_3/example_3_title.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended =null;
		document.getElementById('example_3_line_1').style.opacity=1;
		document.getElementById('example_3_line_1').style.animation = 'fadeIn 2s';
		audio.src = 'audio/period_3/example_3_line_1.mp3';
		audio.load();
		audio.play();
		audio.onended = function(){
			audio.onended =null;
			document.getElementById('example_3_b').style.opacity=1;
			document.getElementById('example_3_b').style.animation = 'fadeIn 2s';
			audio.src = 'audio/period_3/example_b.mp3';
			audio.load();
			audio.play();
			audio.onended=function(){
				audio.onended =null;
				document.getElementById('example_3_b_1').style.background = '#00FF0066';
				document.getElementById('example_3_b_1').style.animation = "positiveBg 2s";
				document.getElementById('example_3_b_2').style.background = '#00FF0066';
				document.getElementById('example_3_b_2').style.animation = "positiveBg 2s";
				
				document.getElementById('example_3_line_2').style.opacity=1;
				document.getElementById('example_3_line_2').style.animation = 'fadeIn 2s';
				audio.src = 'audio/period_3/example_3_line_2.mp3';
				audio.load();
				audio.play();
				audio.onended=function(){
					setTimeout(function(){
						startExercise();
					},1000);
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
	audio.src = 'audio/period_3/exercise_1.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended = null;
		document.getElementById('exercise_1_line_1').style.opacity = 1;
		document.getElementById('exercise_1_line_1').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_1_b').style.opacity = 1;
		document.getElementById('exercise_1_b').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_1_r').style.opacity = 1;
		document.getElementById('exercise_1_r').style.animation = 'fadeIn 2s';
	};
}

function evaluateExercise1(){
	var isSuccess=true;
	var l1 = document.getElementById('exercise_1_b_1').value;
	var l2 = document.getElementById('exercise_1_b_2').value;
	var l3 = document.getElementById('exercise_1_b_3').value;
	var l4 = document.getElementById('exercise_1_b_4').value;
	var l5 = document.getElementById('exercise_1_b_5').value;
	var l6 = document.getElementById('exercise_1_b_6').value;
	var l7 = document.getElementById('exercise_1_b_7').value;
	var l8 = document.getElementById('exercise_1_b_8').value;
	console.log(l1 + " " + l2 + " " + l3 + " " + l4 + " " + l5+ " " + l6 + " " + l7 + " " + l8 + " " );
	if  ((l1==0 || l1=='') && (l2==0 || l2=='') && (l3==0 || l3=='') && (l4==0 || l4=='') && (l5==7) && (l6==0 || l6=='') && (l7==0 || l7=='') && (l8==0 || l8=='')){
		isSuccess&=true;
		document.getElementById('exercise_1_b_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_1_b_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_result').classList='wrong';
		},300);
	}
	if(document.getElementById('exercise_1_r_1').value==-5){
		isSuccess&=true;
		document.getElementById('exercise_1_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_1_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_result').classList='wrong';
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
	audio.src = 'audio/period_3/exercise_2.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended = null;
		document.getElementById('exercise_2_line_1').style.opacity = 1;
		document.getElementById('exercise_2_line_1').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_2_b').style.opacity = 1;
		document.getElementById('exercise_2_b').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_2_r').style.opacity = 1;
		document.getElementById('exercise_2_r').style.animation = 'fadeIn 2s';
	};
}
function evaluateExercise2(){
	var isSuccess=true;
	var l1 = document.getElementById('exercise_2_b_1').value;
	var l2 = document.getElementById('exercise_2_b_2').value;
	var l3 = document.getElementById('exercise_2_b_3').value;
	var l4 = document.getElementById('exercise_2_b_4').value;
	var l5 = document.getElementById('exercise_2_b_5').value;
	var l6 = document.getElementById('exercise_2_b_6').value;
	var l7 = document.getElementById('exercise_2_b_7').value;
	var l8 = document.getElementById('exercise_2_b_8').value;
	if  ((l1==0 || l1=='') && (l2==0 || l2=='') && (l3==0 || l3=='') && (l4==0 || l4=='') && (l5==0 || l5=='') && (l6==3) && (l7==0 || l7=='') && (l8==0 || l8=='')){
		isSuccess&=true;
		document.getElementById('exercise_2_b_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_2_b_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_result').classList='wrong';
		},300);
	}
	if(document.getElementById('exercise_2_r_1').value==-6){
		isSuccess&=true;
		document.getElementById('exercise_2_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_2_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_result').classList='wrong';
		},300);
	}
	if(isSuccess){
		audio.src = 'audio/right_answer.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			setTimeout(function () {
				startExercise3();
			}, 1000);
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
	audio.src = 'audio/period_3/exercise_3.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended = null;
		document.getElementById('exercise_3_line_1').style.opacity = 1;
		document.getElementById('exercise_3_line_1').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_3_b').style.opacity = 1;
		document.getElementById('exercise_3_b').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_3_r').style.opacity = 1;
		document.getElementById('exercise_3_r').style.animation = 'fadeIn 2s';
	};
}
function evaluateExercise3(){
	var isSuccess=true;
	var l1 = document.getElementById('exercise_3_b_1').value;
	var l2 = document.getElementById('exercise_3_b_2').value;
	var l3 = document.getElementById('exercise_3_b_3').value;
	var l4 = document.getElementById('exercise_3_b_4').value;
	var l5 = document.getElementById('exercise_3_b_5').value;
	var l6 = document.getElementById('exercise_3_b_6').value;
	var l7 = document.getElementById('exercise_3_b_7').value;
	var l8 = document.getElementById('exercise_3_b_8').value;
	if  ((l1==0 || l1=='') && (l2==0 || l2=='') && (l3==0 || l3=='') && (l4==0 || l4=='') && (l5==0 || l5=='') && (l6==0 || l6=='') && (l7==0 || l7=='') && (l8==9)){
		isSuccess&=true;
		document.getElementById('exercise_3_b_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_b_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_3_b_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_b_result').classList='wrong';
		},300);
	}
	if(document.getElementById('exercise_3_r_1').value==-8){
		isSuccess&=true;
		document.getElementById('exercise_3_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_3_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_result').classList='wrong';
		},300);
	}
	if(isSuccess){
		audio.src = 'audio/right_answer.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			setTimeout(function () {
				startExercise4();
			}, 1000);
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
	audio.src = 'audio/period_3/exercise_4.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended = null;
		document.getElementById('exercise_4_line_1').style.opacity = 1;
		document.getElementById('exercise_4_line_1').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_4_b').style.opacity = 1;
		document.getElementById('exercise_4_b').style.animation = 'fadeIn 2s';
		document.getElementById('exercise_4_r').style.opacity = 1;
		document.getElementById('exercise_4_r').style.animation = 'fadeIn 2s';
	};
}
function evaluateExercise4(){
	var isSuccess=true;
	var l1 = document.getElementById('exercise_4_b_1').value;
	var l2 = document.getElementById('exercise_4_b_2').value;
	var l3 = document.getElementById('exercise_4_b_3').value;
	var l4 = document.getElementById('exercise_4_b_4').value;
	var l5 = document.getElementById('exercise_4_b_5').value;
	var l6 = document.getElementById('exercise_4_b_6').value;
	var l7 = document.getElementById('exercise_4_b_7').value;
	var l8 = document.getElementById('exercise_4_b_8').value;
	var l9 = document.getElementById('exercise_4_b_9').value;
	var l10 = document.getElementById('exercise_4_b_10').value;
	if  ((l1==0 || l1=='') && (l2==0 || l2=='') && (l3==0 || l3=='') && (l4==0 || l4=='') && (l5==0 || l5=='') && (l6==0 || l6=='') && (l7==0 || l7=='') && (l8==0 || l8=='') && (l9==0 || l9=='') && (l10==1) ){
		isSuccess&=true;
		document.getElementById('exercise_4_b_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_b_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_4_b_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_b_result').classList='wrong';
		},300);
	}
	if(document.getElementById('exercise_4_r_1').value==-10){
		isSuccess&=true;
		document.getElementById('exercise_4_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_4_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_result').classList='wrong';
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
			audio.src = 'audio/period_3/home_work.mp3';
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