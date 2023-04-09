var audio = document.getElementById('audio');
var title = document.getElementById('title');
var content = document.getElementById('content');
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
    	var b = document.getElementById('wrapper');
        if(window.getComputedStyle(b).getPropertyValue("opacity")==1){
			startUnit7(b);
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

function startUnit7(b){
	b.style.opacity = 0;
	b.style.display = 'none';
	document.getElementById('one').style.display='none';
	document.getElementById('two').style.display="block";
	title.innerHTML='Period 7'
	title.style.opacity = 1;
	title.style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_7/period_7.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended =null;
		title.style.animation = 'fadeOut 1s';
		setTimeout(function(){
			title.innerHTML='Factors of Algebraic Expressions'
			title.style.animation = 'fadeIn 2s';
			audio.src = 'audio/period_7/foee_title.mp3';
			audio.load();
			audio.play();
			audio.onended = function(){
				audio.onended =null;
				title.style.opacity = 0;
				title.style.animation = 'fadeOut 1s';
				setTimeout(function(){
					content.innerHTML='For example, in the algebraic expression 5xy the term 5xy has been formed by the factors 5, x and y, i.e.,'
					content.style.animation = 'fadeIn 2s';
					audio.src = 'audio/period_7/period_7_line_1.mp3';
					audio.load();
					audio.play();
					audio.onended=function(){
						setTimeout(function(){
							content.innerHTML='The irreducible form of algebraic expressions is known as its factors.'
							content.style.animation = 'fadeIn 2s';
							audio.src = 'audio/period_7/period_7_line_2.mp3';
							audio.load();
							audio.play();
							audio.onended=function(){
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
	audio.src = 'audio/period_7/example_1_title.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended =null;
		document.getElementById('example_1_line_1').style.opacity=1;
		document.getElementById('example_1_line_1').style.animation = 'fadeIn 2s';
		audio.src = 'audio/period_7/example_1_line_1.mp3';
		audio.load();
		audio.play();
		audio.onended = function(){
			audio.onended=null;
			document.getElementById('example_1_r').style.opacity=1;
			document.getElementById('example_1_r').style.animation='fadeIn 2s';
			document.getElementById('example_1_a').style.opacity=1;
			document.getElementById('example_1_a').style.animation='fadeIn 2s';
			setTimeout(function(){
				document.getElementById('example_1_a').style.animation='';
			},2000);
			audio.src = 'audio/period_7/example_1_r.mp3';
			audio.load();
			audio.play();
			audio.onended=function(){
				document.getElementById('example_1_l').style.opacity=1;
				document.getElementById('example_1_l').style.animation='fadeIn 2s';
				audio.src = 'audio/period_7/example_1_l.mp3';
				audio.load();
				audio.play();
				audio.onended=function(){
					audio.onended =null;
					document.getElementById('example_1_line_2').style.opacity=1;
					document.getElementById('example_1_line_2').style.animation = 'fadeIn 2s';
					audio.src = 'audio/period_7/example_1_line_2.mp3';
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
	};
}

function startExample2(){
	document.getElementById('example_1').style.display='none';
	title.innerHTML='';
	content.innerHTML='';
	document.getElementById('example_2').style.display="block";
	document.getElementById('example_2_title').style.opacity=1;
	document.getElementById('example_2_title').style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_7/example_2_title.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended =null;
		document.getElementById('example_2_line_1').style.opacity=1;
		document.getElementById('example_2_line_1').style.animation = 'fadeIn 2s';
		audio.src = 'audio/period_7/example_2_line_1.mp3';
		audio.load();
		audio.play();
		audio.onended = function(){
			audio.onended=null;
			document.getElementById('example_2_r').style.opacity=1;
			document.getElementById('example_2_r').style.animation='fadeIn 2s';
			document.getElementById('example_2_a').style.opacity=1;
			document.getElementById('example_2_a').style.animation='fadeIn 2s';
			setTimeout(function(){
				document.getElementById('example_2_a').style.animation='';
			},2000);
			audio.src = 'audio/period_7/example_2_r.mp3';
			audio.load();
			audio.play();
			audio.onended=function(){
				document.getElementById('example_2_l').style.opacity=1;
				document.getElementById('example_2_l').style.animation='fadeIn 2s';
				audio.src = 'audio/period_7/example_2_l.mp3';
				audio.load();
				audio.play();
				audio.onended=function(){
					audio.onended =null;
					document.getElementById('example_2_line_2').style.opacity=1;
					document.getElementById('example_2_line_2').style.animation = 'fadeIn 2s';
					audio.src = 'audio/period_7/example_2_line_2.mp3';
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
	};
}

function startExample3(){
	document.getElementById('example_2').style.display='none';
	title.innerHTML='';
	content.innerHTML='';
	document.getElementById('example_3').style.display="block";
	document.getElementById('example_3_title').style.opacity=1;
	document.getElementById('example_3_title').style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_7/example_3_title.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		document.getElementById('example_3_line_1').style.opacity=1;
		document.getElementById('example_3_line_1').style.animation = 'fadeIn 2s';
		audio.src = 'audio/period_7/example_3_line_1.mp3';
		audio.load();
		audio.play();
		audio.onended =function(){
			document.getElementById('example_3_b_1').style.opacity=1;
			document.getElementById('example_3_b_1').style.animation = 'fadeIn 2s';
			audio.src = 'audio/period_7/example_3_b_1.mp3';
			audio.load();
			audio.play();
			audio.onended =function(){
				document.getElementById('example_3_b_2').style.opacity=1;
				document.getElementById('example_3_b_2').style.animation = 'fadeIn 2s';
				audio.src = 'audio/period_7/example_3_b_2.mp3';
				audio.load();
				audio.play();
				audio.onended =function(){
					
					document.getElementById('example_3_b_1_c_1').style.background = '#00FF0066';
					document.getElementById('example_3_b_1_c_1').style.animation = "positiveBg 2s";
					document.getElementById('example_3_b_1_c_2').style.background = '#00FF0066';
					document.getElementById('example_3_b_1_c_2').style.animation = "positiveBg 2s";
					document.getElementById('example_3_b_1_c_3').style.background = '#00FF0066';
					document.getElementById('example_3_b_1_c_3').style.animation = "positiveBg 2s";

					document.getElementById('example_3_b_2_c_1').style.background = '#00FF0066';
					document.getElementById('example_3_b_2_c_1').style.animation = "positiveBg 2s";
					document.getElementById('example_3_b_2_c_2').style.background = '#00FF0066';
					document.getElementById('example_3_b_2_c_2').style.animation = "positiveBg 2s";
					document.getElementById('example_3_b_2_c_3').style.background = '#00FF0066';
					document.getElementById('example_3_b_2_c_3').style.animation = "positiveBg 2s";

					document.getElementById('example_3_line_2').style.opacity=1;
					document.getElementById('example_3_line_2').style.animation = 'fadeIn 2s';
					audio.src = 'audio/period_7/example_3_line_2.mp3';
					audio.load();
					audio.play();
					audio.onended =function(){
						document.getElementById('example_3_line_3').style.opacity=1;
						document.getElementById('example_3_line_3').style.animation = 'fadeIn 2s';
						audio.src = 'audio/period_7/example_3_line_3.mp3';
						audio.load();
						audio.play();
						audio.onended =function(){
							document.getElementById('example_3_line_4').style.opacity=1;
							document.getElementById('example_3_line_4').style.animation = 'fadeIn 2s';
							audio.src = 'audio/period_7/example_3_line_4.mp3';
							audio.load();
							audio.play();
							audio.onended =function(){
								document.getElementById('example_3_line_5').style.opacity=1;
								document.getElementById('example_3_line_5').style.animation = 'fadeIn 2s';
								audio.src = 'audio/period_7/example_3_line_5.mp3';
								audio.load();
								audio.play();
								audio.onended =function(){
									document.getElementById('example_3_line_6').style.opacity=1;
									document.getElementById('example_3_line_6').style.animation = 'fadeIn 2s';
									audio.src = 'audio/period_7/example_3_line_6.mp3';
									audio.load();
									audio.play();
									audio.onended =function(){
										setTimeout(function(){
											startExample4();
										},1000);
									};
								};
							};
						};
					};
				};
			};
		};
	};
}

function startExample4(){
	document.getElementById('example_3').style.display='none';
	title.innerHTML='';
	content.innerHTML='';
	document.getElementById('example_4').style.display="block";
	document.getElementById('example_4_title').style.opacity=1;
	document.getElementById('example_4_title').style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_7/example_4_title.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		document.getElementById('example_4_line_1').style.opacity=1;
		document.getElementById('example_4_line_1').style.animation = 'fadeIn 2s';
		audio.src = 'audio/period_7/example_4_line_1.mp3';
		audio.load();
		audio.play();
		audio.onended =function(){
			document.getElementById('example_4_b_1').style.opacity=1;
			document.getElementById('example_4_b_1').style.animation = 'fadeIn 2s';
			audio.src = 'audio/period_7/example_4_b_1.mp3';
			audio.load();
			audio.play();
			audio.onended =function(){
				document.getElementById('example_4_b_2').style.opacity=1;
				document.getElementById('example_4_b_2').style.animation = 'fadeIn 2s';
				audio.src = 'audio/period_7/example_4_b_2.mp3';
				audio.load();
				audio.play();
				audio.onended= function(){
					document.getElementById('example_4_b_3').style.opacity=1;
					document.getElementById('example_4_b_3').style.animation = 'fadeIn 2s';
					audio.src = 'audio/period_7/example_4_b_3.mp3';
					audio.load();
					audio.play();
					audio.onended =function(){
						document.getElementById('example_4_b_1_c_1').style.background = '#00FF0066';
						document.getElementById('example_4_b_1_c_1').style.animation = "positiveBg 2s";
						document.getElementById('example_4_b_1_c_2').style.background = '#00FF0066';
						document.getElementById('example_4_b_1_c_2').style.animation = "positiveBg 2s";
						document.getElementById('example_4_b_1_c_3').style.background = '#00FF0066';
						document.getElementById('example_4_b_1_c_3').style.animation = "positiveBg 2s";

						document.getElementById('example_4_b_2_c_1').style.background = '#00FF0066';
						document.getElementById('example_4_b_2_c_1').style.animation = "positiveBg 2s";
						document.getElementById('example_4_b_2_c_2').style.background = '#00FF0066';
						document.getElementById('example_4_b_2_c_2').style.animation = "positiveBg 2s";
						document.getElementById('example_4_b_2_c_3').style.background = '#00FF0066';
						document.getElementById('example_4_b_2_c_3').style.animation = "positiveBg 2s";	

						document.getElementById('example_4_b_3_c_1').style.background = '#00FF0066';
						document.getElementById('example_4_b_3_c_1').style.animation = "positiveBg 2s";
						document.getElementById('example_4_b_3_c_2').style.background = '#00FF0066';
						document.getElementById('example_4_b_3_c_2').style.animation = "positiveBg 2s";
						document.getElementById('example_4_b_3_c_3').style.background = '#00FF0066';
						document.getElementById('example_4_b_3_c_3').style.animation = "positiveBg 2s";	

						document.getElementById('example_4_line_2').style.opacity=1;
						document.getElementById('example_4_line_2').style.animation = 'fadeIn 2s';
						audio.src = 'audio/period_7/example_4_line_2.mp3';
						audio.load();
						audio.play();
						audio.onended =function(){
							document.getElementById('example_4_line_3').style.opacity=1;
							document.getElementById('example_4_line_3').style.animation = 'fadeIn 2s';
							audio.src = 'audio/period_7/example_4_line_3.mp3';
							audio.load();
							audio.play();
							audio.onended = function(){
								document.getElementById('example_4_line_4').style.opacity=1;
								document.getElementById('example_4_line_4').style.animation = 'fadeIn 2s';
								audio.src = 'audio/period_7/example_4_line_4.mp3';
								audio.load();
								audio.play();
								audio.onended = function(){
									document.getElementById('example_4_line_5').style.opacity=1;
									document.getElementById('example_4_line_5').style.animation = 'fadeIn 2s';
									audio.src = 'audio/period_7/example_4_line_5.mp3';
									audio.load();
									audio.play();
									audio.onended=function(){
										startExercise();
									};
								};
							};
						};
					};
				};
			};
		};
	};
}

function startExercise(){
	document.getElementById('example_4').style.display='none';
	document.getElementById('two').style.display="block";

	title.innerHTML='';
	content.innerHTML='';

	title.innerHTML='Exercises'
	title.style.opacity = 1;
	title.style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_6/exercises.mp3';
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
	audio.src = 'audio/period_7/exercise_1.mp3';
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
	var l1 = document.getElementById('exercise_1_l_1').value;
	var l2 = document.getElementById('exercise_1_l_2').value;
	var l3 = document.getElementById('exercise_1_l_3').value;

	if(l1=='3' && l2=='m' && l3=='n' ||
		l1=='3' && l3=='m' && l2=='n' ||
		l3=='3' && l1=='m' && l2=='n' ||
		l2=='3' && l1=='m' && l3=='n' ||
		l2=='3' && l3=='m' && l1=='n' ||
		l3=='3' && l2=='m' && l1=='n' ){
		isSuccess&=true;
		document.getElementById('exercise_1_l_1_result').classList='done_animated';
		document.getElementById('exercise_1_l_2_result').classList='done_animated';
		document.getElementById('exercise_1_l_3_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_l_1_result').classList='done';
			document.getElementById('exercise_1_l_2_result').classList='done';
			document.getElementById('exercise_1_l_3_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_1_l_1_result').classList='wrong_animated';
		document.getElementById('exercise_1_l_2_result').classList='wrong_animated';
		document.getElementById('exercise_1_l_3_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_l_1_result').classList='wrong';
			document.getElementById('exercise_1_l_2_result').classList='wrong';
			document.getElementById('exercise_1_l_3_result').classList='wrong';
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
	audio.src = 'audio/period_7/exercise_2.mp3';
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
	var l1 = document.getElementById('exercise_2_l_1').value;
	var l2 = document.getElementById('exercise_2_l_2').value;
	var l3 = document.getElementById('exercise_2_l_3').value;

	if(l1=='x' && l2=='y' && l3=='z' ||
		l1=='x' && l3=='y' && l2=='z' ||
		l3=='x' && l1=='y' && l2=='z' ||
		l2=='x' && l1=='y' && l3=='z' ||
		l2=='x' && l3=='y' && l1=='z' ||
		l3=='x' && l2=='y' && l1=='z' ){
		isSuccess&=true;
		document.getElementById('exercise_2_l_1_result').classList='done_animated';
		document.getElementById('exercise_2_l_2_result').classList='done_animated';
		document.getElementById('exercise_2_l_3_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_l_1_result').classList='done';
			document.getElementById('exercise_2_l_2_result').classList='done';
			document.getElementById('exercise_2_l_3_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_2_l_1_result').classList='wrong_animated';
		document.getElementById('exercise_2_l_2_result').classList='wrong_animated';
		document.getElementById('exercise_2_l_3_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_l_1_result').classList='wrong';
			document.getElementById('exercise_2_l_2_result').classList='wrong';
			document.getElementById('exercise_2_l_3_result').classList='wrong';
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
	audio.src = 'audio/period_7/exercise_3.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended = null;
		document.getElementById('exercise_3_block').style.opacity = 1;
		document.getElementById('exercise_3_block').style.animation = 'fadeIn 2s';
	};
}

function evaluateExercise3(){
	var isSuccess=true;
	var l1 = document.getElementById('exercise_3_l_1').value;
	var l2 = document.getElementById('exercise_3_l_2').value;
	var l3 = document.getElementById('exercise_3_l_3').value;

	if(l1=='3' && l2=='y' && l3=='x+4' ||
		l1=='3' && l3=='y' && l2=='x+4' ||
		l3=='3' && l1=='y' && l2=='x+4' ||
		l2=='3' && l1=='y' && l3=='x+4' ||
		l2=='3' && l3=='y' && l1=='x+4' ||
		l3=='3' && l2=='y' && l1=='x+4' ){
		isSuccess&=true;
		document.getElementById('exercise_3_l_1_result').classList='done_animated';
		document.getElementById('exercise_3_l_2_result').classList='done_animated';
		document.getElementById('exercise_3_l_3_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_l_1_result').classList='done';
			document.getElementById('exercise_3_l_2_result').classList='done';
			document.getElementById('exercise_3_l_3_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_3_l_1_result').classList='wrong_animated';
		document.getElementById('exercise_3_l_2_result').classList='wrong_animated';
		document.getElementById('exercise_3_l_3_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_l_1_result').classList='wrong';
			document.getElementById('exercise_3_l_2_result').classList='wrong';
			document.getElementById('exercise_3_l_3_result').classList='wrong';
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
	document.getElementById('exercise_3').style.display='none';
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
			audio.src = 'audio/period_7/home_work.mp3';
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