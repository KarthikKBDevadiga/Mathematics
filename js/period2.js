var audio = document.getElementById('audio');
var title = document.getElementById('title');
var content = document.getElementById('content');
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
    	var b = document.getElementById('wrapper');
        if(window.getComputedStyle(b).getPropertyValue("opacity")==1){
			startUnit2(b);
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

function startUnit2(b){

	b.style.opacity = 0;
	b.style.display = 'none';
	document.getElementById('one').style.display='none';
	document.getElementById('two').style.display="block";
	title.innerHTML='Period 2'
	title.style.opacity = 1;
	title.style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_2/period_2.mp3';
	audio.load();
	audio.play();
	audio.onended=function(){
		document.getElementById('two').style.display='none';
		document.getElementById('three').style.display="block";

		document.getElementById('three_line_1').style.opacity = 1;
		document.getElementById('three_line_1').style.animation = 'fadeIn 2s';
		audio.src = 'audio/period_2/three_line_1.mp3';
		audio.load();
		audio.play();
		audio.onended = function(){
			document.getElementById('three_line_2').style.opacity=1;
			document.getElementById('three_line_2').style.animation = 'fadeIn 2s';
			audio.src = 'audio/period_2/three_line_2.mp3';
			audio.load();
			audio.play();
			audio.onended=function(){
				document.getElementById('three_block_1_1').style.opacity=1;
				document.getElementById('three_block_1_1').style.animation = 'fadeIn 2s';
				document.getElementById('three_block_1_a_1').style.opacity=1;
				document.getElementById('three_block_1_a_1').style.animation = 'fadeIn 2s';
				document.getElementById('three_block_1_2').style.opacity=1;
				document.getElementById('three_block_1_2').style.animation = 'fadeIn 2s';
				setTimeout(function(){
					document.getElementById('three_block_1_a_1').style.animation = '';
					startExample1();
				},2000);
			};
		};
	};
}

function startExample1(){
	document.getElementById('three').style.display="none";
	document.getElementById('example_1').style.display="block";
	document.getElementById('example_1_title').style.opacity=1;
	document.getElementById('example_1_title').style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_2/example_1_title.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		document.getElementById('example_1_1').style.opacity=1;
		document.getElementById('example_1_1').style.animation = 'fadeIn 2s';
		document.getElementById('example_1_a_1').style.opacity=1;
		document.getElementById('example_1_a_1').style.animation = 'fadeIn 2s';
		setTimeout(function(){
			document.getElementById('example_1_a_1').style.animation = '';
		},2000);
		audio.src = 'audio/period_2/example_1_1.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			audio.onended=null;
			document.getElementById('example_1_2').style.opacity=1;
			document.getElementById('example_1_2').style.animation = 'fadeIn 2s';
			document.getElementById('example_1_a_2').style.opacity=1;
			document.getElementById('example_1_a_2').style.animation = 'fadeIn 2s';
			setTimeout(function(){
				document.getElementById('example_1_a_2').style.animation = '';
			},2000);
			audio.src = 'audio/period_2/example_1_2.mp3';
			audio.load();
			audio.play();
			audio.onended = function(){
				audio.onended=null;
				document.getElementById('example_1_b').style.opacity=1;
				document.getElementById('example_1_b').style.animation = 'fadeIn 2s';
				document.getElementById('example_1_a_3').style.opacity=1;
				document.getElementById('example_1_a_3').style.animation = 'fadeIn 2s';

				setTimeout(function(){
					document.getElementById('example_1_a_3').style.animation = '';
				},2000);
				audio.src = 'audio/period_2/example_1_b.mp3';
				audio.load();
				audio.play();
				audio.onended = function(){
					audio.onended=null;
					audio.src='audio/period_2/example_1_b_positive.mp3';
					audio.load();
					audio.play();

					document.getElementById('example_1_b_1').style.background = '#00FF0066';
					document.getElementById('example_1_b_1').style.animation = "positiveBg 2s";
					document.getElementById('example_1_b_2').style.background = '#00FF0066';
					document.getElementById('example_1_b_2').style.animation = "positiveBg 2s";
					document.getElementById('example_1_b_3').style.background = '#00FF0066';
					document.getElementById('example_1_b_3').style.animation = "positiveBg 2s";
					document.getElementById('example_1_b_4').style.background = '#00FF0066';
					document.getElementById('example_1_b_4').style.animation = "positiveBg 2s";
					document.getElementById('example_1_b_5').style.background = '#00FF0066';
					document.getElementById('example_1_b_5').style.animation = "positiveBg 2s";
					audio.onended=function(){
						audio.onended=null;
						audio.src='audio/period_2/example_1_b_negative.mp3';
						audio.load();
						audio.play();
						document.getElementById('example_1_b_6').style.background = '#FF000066';
						document.getElementById('example_1_b_6').style.animation = "negativeBg 2s";
						document.getElementById('example_1_b_7').style.background = '#FF000066';
						document.getElementById('example_1_b_7').style.animation = "negativeBg 2s";
						audio.onended = function(){
							audio.onended=null;
							document.getElementById('example_1_3').style.opacity=1;
							document.getElementById('example_1_3').style.animation = 'fadeIn 2s';
							audio.src='audio/period_2/example_1_3.mp3';
							audio.load();
							audio.play();
							audio.onended = function(){
								audio.onended=null;
								setTimeout(function(){
									startExample2();
								},1000);
							}
						};
					};
				};
			};
		}
	};
}

function startExample2(){
	document.getElementById('example_1').style.display="none";
	document.getElementById('example_2').style.display="block";
	document.getElementById('example_2_title').style.opacity=1;
	document.getElementById('example_2_title').style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_2/example_2_title.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		document.getElementById('example_2_1').style.opacity=1;
		document.getElementById('example_2_1').style.animation = 'fadeIn 2s';
		document.getElementById('example_2_a_1').style.opacity=1;
		document.getElementById('example_2_a_1').style.animation = 'fadeIn 2s';
		setTimeout(function(){
			document.getElementById('example_2_a_1').style.animation = '';
		},2000);
		audio.src = 'audio/period_2/example_2_1.mp3';
		audio.load();
		audio.play();
		audio.onended=function(){
			audio.onended=null;
			document.getElementById('example_2_2').style.opacity=1;
			document.getElementById('example_2_2').style.animation = 'fadeIn 2s';
			document.getElementById('example_2_a_2').style.opacity=1;
			document.getElementById('example_2_a_2').style.animation = 'fadeIn 2s';
			setTimeout(function(){
				document.getElementById('example_2_a_2').style.animation = '';
			},2000);
			audio.src = 'audio/period_2/example_2_2.mp3';
			audio.load();
			audio.play();
			audio.onended = function(){
				audio.onended=null;
				document.getElementById('example_2_b').style.opacity=1;
				document.getElementById('example_2_b').style.animation = 'fadeIn 2s';
				document.getElementById('example_2_a_3').style.opacity=1;
				document.getElementById('example_2_a_3').style.animation = 'fadeIn 2s';

				setTimeout(function(){
					document.getElementById('example_2_a_3').style.animation = '';
				},2000);
				audio.src = 'audio/period_2/example_2_b.mp3';
				audio.load();
				audio.play();
				audio.onended = function(){
					audio.onended=null;
					audio.src='audio/period_2/example_2_b_negative.mp3';
					audio.load();
					audio.play();

					document.getElementById('example_2_b_1').style.background = '#FF000066';
					document.getElementById('example_2_b_1').style.animation = "negativeBg 2s";
					document.getElementById('example_2_b_2').style.background = '#FF000066';
					document.getElementById('example_2_b_2').style.animation = "negativeBg 2s";
					document.getElementById('example_2_b_3').style.background = '#FF000066';
					document.getElementById('example_2_b_3').style.animation = "negativeBg 2s";

					
					audio.onended=function(){
						audio.onended=null;
						audio.src='audio/period_2/example_2_b_positive.mp3';
						audio.load();
						audio.play();
						document.getElementById('example_2_b_4').style.background = '#00FF0066';
						document.getElementById('example_2_b_4').style.animation = "positiveBg 2s";
						document.getElementById('example_2_b_5').style.background = '#00FF0066';
						document.getElementById('example_2_b_5').style.animation = "positiveBg 2s";
						audio.onended = function(){
							audio.onended=null;
							document.getElementById('example_2_3').style.opacity=1;
							document.getElementById('example_2_3').style.animation = 'fadeIn 2s';
							audio.src='audio/period_2/example_2_3.mp3';
							audio.load();
							audio.play();
							audio.onended = function(){
								audio.onended=null;
								setTimeout(function(){
									startExercise();
								},1000);
							}
						};
					};
				};
			};
		}
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
	audio.src = 'audio/period_2/exercises.mp3';
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
	audio.src = 'audio/period_2/exercise_1.mp3';
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
	if(document.getElementById('exercise_1_b_1').value=='6-3'){
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
	if(document.getElementById('exercise_1_b_2_1').value=='a' &&
		document.getElementById('exercise_1_b_2_2').value=='a' &&
		document.getElementById('exercise_1_b_2_3').value=='a' &&
		document.getElementById('exercise_1_b_2_4').value=='a' &&
		document.getElementById('exercise_1_b_2_5').value=='a' &&
		document.getElementById('exercise_1_b_2_6').value=='a' &&
		document.getElementById('exercise_1_b_2_7').value=='a' &&
		document.getElementById('exercise_1_b_2_8').value=='a' &&
		document.getElementById('exercise_1_b_2_9').value=='a'){
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
	if(document.getElementById('exercise_1_b_3').value=='3'){
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
	audio.src = 'audio/period_2/exercise_2.mp3';
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
	if(document.getElementById('exercise_2_b_1').value=='6-4'){
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
	if(document.getElementById('exercise_2_b_2_1').value=='a' &&
		document.getElementById('exercise_2_b_2_2').value=='a' &&
		document.getElementById('exercise_2_b_2_3').value=='a' &&
		document.getElementById('exercise_2_b_2_4').value=='a' &&
		document.getElementById('exercise_2_b_2_5').value=='a' &&
		document.getElementById('exercise_2_b_2_6').value=='a' &&
		document.getElementById('exercise_2_b_2_7').value=='a' &&
		document.getElementById('exercise_2_b_2_8').value=='a' &&
		document.getElementById('exercise_2_b_2_9').value=='a'&&
		document.getElementById('exercise_2_b_2_10').value=='a'){
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
	if(document.getElementById('exercise_2_b_3').value=='2'){
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
	audio.src = 'audio/period_2/exercise_3.mp3';
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
	if(document.getElementById('exercise_3_b_1').value=='3+4'){
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
	if(document.getElementById('exercise_3_b_2_1').value=='m' &&
		document.getElementById('exercise_3_b_2_2').value=='m' &&
		document.getElementById('exercise_3_b_2_3').value=='m' &&
		document.getElementById('exercise_3_b_2_4').value=='m' &&
		document.getElementById('exercise_3_b_2_5').value=='m' &&
		document.getElementById('exercise_3_b_2_6').value=='m' &&
		document.getElementById('exercise_3_b_2_7').value=='m'){
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
	if(document.getElementById('exercise_3_b_3').value=='7'){
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
	audio.src = 'audio/period_2/exercise_4.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended = null;
		document.getElementById('exercise_4_block').style.opacity = 1;
		document.getElementById('exercise_4_block').style.animation = 'fadeIn 2s';
	};
}

function evaluateExercise4(){
	var isSuccess=true;
	if(document.getElementById('exercise_4_b_1').value=='3-4'){
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
	if(document.getElementById('exercise_4_b_2_1').value=='m' &&
		document.getElementById('exercise_4_b_2_2').value=='m' &&
		document.getElementById('exercise_4_b_2_3').value=='m' &&
		document.getElementById('exercise_4_b_2_4').value=='m' &&
		document.getElementById('exercise_4_b_2_5').value=='m' &&
		document.getElementById('exercise_4_b_2_6').value=='m' &&
		document.getElementById('exercise_4_b_2_7').value=='m'){
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
	if(document.getElementById('exercise_4_b_3').value=='-1'){
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
			setTimeout(function () {
				startExercise5();
			}, 1000);
		};
	}else{
		audio.src = 'audio/wrong_answer.mp3';
		audio.load();
		audio.play();
	}
}

function startExercise5(){
	document.getElementById('exercise_4').style.display='none';
	document.getElementById('exercise_5').style.display="block";
	document.getElementById('exercise_5_title').style.opacity = 1;
	document.getElementById('exercise_5_title').style.animation = 'fadeIn 2s';
	audio.src = 'audio/period_2/exercise_5.mp3';
	audio.load();
	audio.play();
	audio.onended = function(){
		audio.onended = null;
		document.getElementById('exercise_5_block').style.opacity = 1;
		document.getElementById('exercise_5_block').style.animation = 'fadeIn 2s';
	};
}

function evaluateExercise5(){
	var isSuccess=true;
	if(document.getElementById('exercise_5_b_1').value=='6+4'){
		isSuccess&=true;
		document.getElementById('exercise_5_b_1_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_5_b_1_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_5_b_1_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_5_b_1_result').classList='wrong';
		},300);
	}
	if(document.getElementById('exercise_5_b_2_1').value=='m' &&
		document.getElementById('exercise_5_b_2_2').value=='m' &&
		document.getElementById('exercise_5_b_2_3').value=='m' &&
		document.getElementById('exercise_5_b_2_4').value=='m' &&
		document.getElementById('exercise_5_b_2_5').value=='m' &&
		document.getElementById('exercise_5_b_2_6').value=='m' &&
		document.getElementById('exercise_5_b_2_7').value=='m' &&
		document.getElementById('exercise_5_b_2_8').value=='m' &&
		document.getElementById('exercise_5_b_2_9').value=='m'&&
		document.getElementById('exercise_5_b_2_10').value=='m'){
		isSuccess&=true;
		document.getElementById('exercise_5_b_2_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_5_b_2_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_5_b_2_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_5_b_2_result').classList='wrong';
		},300);
	}
	if(document.getElementById('exercise_5_b_3').value=='10'){
		isSuccess&=true;
		document.getElementById('exercise_5_b_3_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_5_b_3_result').classList='done';
		},300);
	}else{
		isSuccess&=false;
		document.getElementById('exercise_5_b_3_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_5_b_3_result').classList='wrong';
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
	document.getElementById('exercise_5').style.display='none';
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
			audio.src = 'audio/period_2/home_work.mp3';
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