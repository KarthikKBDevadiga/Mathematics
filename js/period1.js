var unit1 = document.getElementById('unit_1');
var period1 = document.getElementById('period_1');
var period1Audio = document.getElementById('period_1_audio');

var introTitle = document.getElementById('introduction_title');
var introContent = document.getElementById('introduction_content');

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
    	var b = document.getElementById('wrapper');
        if(window.getComputedStyle(b).getPropertyValue("opacity")==1){
			startUnit1(b);
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

function startUnit1(b) {
	b.style.opacity = 0;
	b.style.display = 'none';
	playPeriodTitle();
}

function playPeriodTitle() {
	setProgress(2);
	period1.style.opacity = 1;
	period1.style.animation = 'fadeIn 2s';
	period1Audio.src = 'audio/period_1/period_1.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			playUnit1Title();
		}, 1000);
	};
}

function playUnit1Title() {
	setProgress(4);
	unit1.style.opacity = 1;
	unit1.style.animation = 'fadeIn 2s';
	period1Audio.src = 'audio/period_1/unit_1_title.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			document.getElementById("one").style.display = "none";
			document.getElementById("two").style.display = "block";
			playIntroTitle();
		}, 1000);
	};
}

function playIntroTitle() {
	setProgress(6);
	introTitle.innerHTML = "INTRODUCTION";
	introTitle.style.animation = 'fadeIn 2s';
	period1Audio.src = 'audio/period_1/introduction_title.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			introTitle.style.animation = 'fadeOut 1s';
			introTitle.style.opacity = 0;
			playIntroLine1();
		}, 1000);
	};
}

function playIntroLine1() {
	setProgress(9);
	introContent.innerHTML = 'Mass of earth is 5,970,000,000,000,000,000,000,000 kg';
	introContent.style.animation = 'fadeIn 2s';
	period1Audio.src = 'audio/period_1/introduction_line_1.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		introContent.style.animation = 'fadeOut 1s';
		introContent.style.opacity = 0;
		period1Audio.onended = null;
		setTimeout(function () {
			playIntroLine2();
		}, 1000);
	};
}

function playIntroLine2() {
	setProgress(13);
	introContent.innerHTML = 'We have already learnt in an earlier class, how to write such large numbers more conveniently using exponents, as, 5.97 × 10<sup>24</sup> kg';
	introContent.style.opacity = 1;
	introContent.style.animation = 'fadeIn 2s';
	period1Audio.src = 'audio/period_1/introduction_line_2.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		introContent.style.animation = 'fadeOut 1s';
		introContent.style.opacity = 0;
		period1Audio.onended = null;
		setTimeout(function () {
			playIntroLine3();
		}, 1000);
	};
}

function playIntroLine3() {
	setProgress(16);
	introContent.innerHTML = 'We will read 10<sup>24</sup> as 10 raised to the power 24';
	introContent.style.animation = 'fadeIn 2s';
	introContent.style.opacity = 1;
	period1Audio.src = 'audio/period_1/introduction_line_3.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		introContent.style.animation = 'fadeOut 1s';
		introContent.style.opacity = 0;
		period1Audio.onended = null;
		setTimeout(function () {
			playIntroLine4();
		}, 1000);
	};
}

function playIntroLine4() {
	setProgress(20);
	introContent.innerHTML = 'We know, 2<sup>5</sup> =  2 × 2 × 2 × 2 × 2, and <br> 2<sup>m</sup> = 2 × 2 × 2 × •  •  • × 2 (m times)';
	introContent.style.animation = 'fadeIn 2s';
	introContent.style.opacity = 1;
	period1Audio.src = 'audio/period_1/introduction_line_4.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		introContent.style.animation = 'fadeOut 1s';
		introContent.style.opacity = 0;
		period1Audio.onended = null;
		setTimeout(function () {
			playIntroLine5();
		}, 1000);
	};
}

function playIntroLine5() {
	setProgress(23);
	introContent.innerHTML = '2 × 2 × 2 × 2 = 2<sup>4</sup><br>Here, in 2<sup>4</sup>';
	introContent.style.animation = 'fadeIn 2s';
	introContent.style.opacity = 1;
	period1Audio.src = 'audio/period_1/introduction_line_5.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			introContent.style.animation = 'fadeOut 1s';
			introContent.style.opacity = 0;
			playPwneTitle();
		}, 1000);
	};
}

function playPwneTitle() {
	setProgress(25);
	introTitle.innerHTML = "POWERS WITH NEGATIVE EXPONENTS";
	introTitle.style.animation = 'fadeIn 2s';
	introTitle.style.opacity = 1;
	period1Audio.src = 'audio/period_1/pwne_title.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			introTitle.style.animation = 'fadeOut 1s';
			introTitle.style.opacity = 0;
			playPwneLine1();
		}, 1000);
	};
}

function playPwneLine1() {
	setProgress(29);
	introContent.innerHTML = '10<sup>2</sup> = 10 × 10 = 100<br>10<sup>1</sup> = 100 / 10 = 10<br>10<sup>0</sup> = 10 / 10 = 1';
	introContent.style.animation = 'fadeIn 2s';
	introContent.style.opacity = 1;
	period1Audio.src = 'audio/period_1/pwne_line_1.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		introContent.style.animation = 'fadeOut 1s';
		period1Audio.onended = null;
		setTimeout(function () {
			playPwneLine2();
		}, 1000);
	};
}

function playPwneLine2() {
	setProgress(33);
	introContent.innerHTML = 'Continuing the above pattern, we get,<br>10<sup>-1</sup> = 1 / 10<br>10<sup>-2</sup> = 1 / 100<br>10<sup>-3</sup> = 1 / 1000<br>And so on...';
	introContent.style.animation = 'fadeIn 2s';
	period1Audio.src = 'audio/period_1/pwne_line_2.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		introContent.style.animation = 'fadeOut 1s';
		period1Audio.onended = null;
		setTimeout(function () {
			playPwneLine3();
		}, 1000);
	};
}

function playPwneLine3() {
	setProgress(37);
	introContent.innerHTML = 'In general, we can say that for any non zero integer a,<br> a<sup>-m</sup> = 1 / a<sup>m</sup>,<br>where m is a positive integer<br>Also a<sup>-m</sup> is the multiplicative inverse of a<sup>m</sup>';
	introContent.style.animation = 'fadeIn 2s';
	period1Audio.src = 'audio/period_1/pwne_line_3.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		introContent.style.animation = 'fadeOut 1s';
		period1Audio.onended = null;
		setTimeout(function () {
			introContent.style.animation = 'fadeOut 1s';
			introContent.style.opacity = 0;
			playLoeTitle();
		}, 1000);
	};
}

function playLoeTitle() {
	setProgress(39);
	introTitle.innerHTML = "LAWS OF EXPONENTS";
	introTitle.style.animation = 'fadeIn 2s';
	introTitle.style.opacity = 1;
	period1Audio.src = 'audio/period_1/loe_title.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			introTitle.style.animation = 'fadeOut 1s';
			introTitle.style.opacity = 0;
			playLoeLine1();
		}, 1000);
	};
}

function playLoeLine1() {
	setProgress(44);
	introContent.innerHTML = 'We have learnt that, for any non zero integer a,<br>a<sup>m</sup> × a<sup>n</sup> = a<sup>m + n</sup>,<br>where, m and n are natural numbers.<br><br>Does This law also hold if the exponents are negative?';
	introContent.style.animation = 'fadeIn 2s';
	introContent.style.opacity = 1;
	period1Audio.src = 'audio/period_1/loe_line_1.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		introContent.style.animation = 'fadeOut 1s';
		period1Audio.onended = null;
		setTimeout(function () {
			playLoeExample1();
		}, 1000);
	};
}

function playLoeExample1() {
	setProgress(46);
	document.getElementById("two").style.display = "none";
	introContent.innerHTML='';
	introContent.style.opacity=0;
	document.getElementById("example_1").style.display = "block";
	document.getElementById('example_1_title').style.opacity = 1;
	document.getElementById('example_1_title').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/example_1_title.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			playLoeExample1Block1();
		}, 1000);
	};
}

function playLoeExample1Block1() {
	setProgress(50);
	document.getElementById('loe_e_1_b_1').style.opacity = 1;
	document.getElementById('loe_e_1_b_1').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/loe_e_1_b_1.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			playLoeExample1Block2();
		}, 1000);
	};
}

function playLoeExample1Block2() {
	setProgress(54);
	document.getElementById('loe_e_1_a_1').style.opacity = 1;
	document.getElementById('loe_e_1_a_1').style.animation = "fadeIn 2s";
	document.getElementById('loe_e_1_b_2').style.opacity = 1;
	document.getElementById('loe_e_1_b_2').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/loe_e_1_b_2_positive.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onplay = function () {
		document.getElementById('loe_e_1_b_2_1').style.background = '#00FF0066';
		document.getElementById('loe_e_1_b_2_1').style.animation = "positiveBg 2s";
		document.getElementById('loe_e_1_b_2_2').style.background = '#00FF0066';
		document.getElementById('loe_e_1_b_2_2').style.animation = "positiveBg 2s";
		document.getElementById('loe_e_1_b_2_3').style.background = '#00FF0066';
		document.getElementById('loe_e_1_b_2_3').style.animation = "positiveBg 2s";
		document.getElementById('loe_e_1_b_2_4').style.background = '#00FF0066';
		document.getElementById('loe_e_1_b_2_4').style.animation = "positiveBg 2s";
		document.getElementById('loe_e_1_b_2_5').style.background = '#00FF0066';
		document.getElementById('loe_e_1_b_2_5').style.animation = "positiveBg 2s";
		document.getElementById('loe_e_1_b_2_6').style.background = '#00FF0066';
		document.getElementById('loe_e_1_b_2_6').style.animation = "positiveBg 2s";
		period1Audio.onplay = null;
		document.getElementById('loe_e_1_a_1').style.animation = "";
	}
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			period1Audio.src = 'audio/period_1/loe_e_1_b_2_negative.mp3';
			period1Audio.load();
			period1Audio.play();
			document.getElementById('loe_e_1_b_2_7').style.background = '#FF000066';
			document.getElementById('loe_e_1_b_2_7').style.animation = "negativeBg 2s";
			document.getElementById('loe_e_1_b_2_8').style.background = '#FF000066';
			document.getElementById('loe_e_1_b_2_8').style.animation = "negativeBg 2s";
			document.getElementById('loe_e_1_b_2_9').style.background = '#FF000066';
			document.getElementById('loe_e_1_b_2_9').style.animation = "negativeBg 2s";
			document.getElementById('loe_e_1_b_2_10').style.background = '#FF000066';
			document.getElementById('loe_e_1_b_2_10').style.animation = "negativeBg 2s";
			period1Audio.onended = function () {
				period1Audio.onended = null;
				setTimeout(function () {
					playLoeExample1Block3();
				}, 1000);
			};
		}, 1000);
	};
}

function playLoeExample1Block3() {
	setProgress(58);
	document.getElementById('loe_e_1_b_3').style.opacity = 1;
	document.getElementById('loe_e_1_b_3').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/loe_e_1_b_3.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			playLoeExample1Block4();
		}, 1000);
	};
}

function playLoeExample1Block4() {
	setProgress(62);
	document.getElementById('loe_e_1_a_2').style.opacity = 1;
	document.getElementById('loe_e_1_a_2').style.animation = "fadeIn 2s";
	document.getElementById('loe_e_1_b_4').style.opacity = 1;
	document.getElementById('loe_e_1_b_4').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/loe_e_1_b_4.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onplay = function () {
		period1Audio.onplay = null;
		document.getElementById('loe_e_1_a_2').style.animation = "";
	}
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			playLoeExample2();
		}, 1000);
	};
}

function playLoeExample2() {
	setProgress(64);
	document.getElementById("example_1").style.display = "none";
	document.getElementById("example_2").style.display = "block";
	document.getElementById('example_2_title').style.opacity = 1;
	document.getElementById('example_2_title').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/example_2_title.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			playLoeExample2Block1();
		}, 1000);
	};
}

function playLoeExample2Block1() {
	setProgress(68);
	document.getElementById('loe_e_2_b_1').style.opacity = 1;
	document.getElementById('loe_e_2_b_1').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/loe_e_2_b_1.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			playLoeExample2Block2();
		}, 1000);
	};
}

function playLoeExample2Block2() {
	setProgress(72);
	document.getElementById('loe_e_2_a_1').style.opacity = 1;
	document.getElementById('loe_e_2_a_1').style.animation = "fadeIn 2s";
	document.getElementById('loe_e_2_b_2').style.opacity = 1;
	document.getElementById('loe_e_2_b_2').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/loe_e_2_b_2_positive_1.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onplay = function () {
		document.getElementById('loe_e_2_b_2_1').style.background = '#00FF0066';
		document.getElementById('loe_e_2_b_2_1').style.animation = "positiveBg 2s";
		document.getElementById('loe_e_2_b_2_2').style.background = '#00FF0066';
		document.getElementById('loe_e_2_b_2_2').style.animation = "positiveBg 2s";
		document.getElementById('loe_e_2_b_2_3').style.background = '#00FF0066';
		document.getElementById('loe_e_2_b_2_3').style.animation = "positiveBg 2s";
		period1Audio.onplay = null;
		document.getElementById('loe_e_2_a_1').style.animation = "";
	}
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			period1Audio.src = 'audio/period_1/loe_e_2_b_2_positive_2.mp3';
			period1Audio.load();
			period1Audio.play();
			document.getElementById('loe_e_2_b_2_4').style.background = '#00FF0066';
			document.getElementById('loe_e_2_b_2_4').style.animation = "positiveBg 2s";
			document.getElementById('loe_e_2_b_2_5').style.background = '#00FF0066';
			document.getElementById('loe_e_2_b_2_5').style.animation = "positiveBg 2s";
			document.getElementById('loe_e_2_b_2_6').style.background = '#00FF0066';
			document.getElementById('loe_e_2_b_2_6').style.animation = "positiveBg 2s";
			document.getElementById('loe_e_2_b_2_7').style.background = '#00FF0066';
			document.getElementById('loe_e_2_b_2_7').style.animation = "positiveBg 2s";
			period1Audio.onended = function () {
				period1Audio.onended = null;
				setTimeout(function () {
					playLoeExample2Block3();
				}, 1000);
			};
		}, 1000);
	};
}

function playLoeExample2Block3() {
	setProgress(76);
	document.getElementById('loe_e_2_b_3').style.opacity = 1;
	document.getElementById('loe_e_2_b_3').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/loe_e_2_b_3.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			playLoeExample2Block4();
		}, 1000);
	};
}

function playLoeExample2Block4() {
	setProgress(80);
	document.getElementById('loe_e_2_a_2').style.opacity = 1;
	document.getElementById('loe_e_2_a_2').style.animation = "fadeIn 2s";
	document.getElementById('loe_e_2_b_4').style.opacity = 1;
	document.getElementById('loe_e_2_b_4').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/loe_e_2_b_4.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onplay = function () {
		period1Audio.onplay = null;
		document.getElementById('loe_e_2_a_2').style.animation = "";
	}
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			playLoeExample3();
		}, 1000);
	};
}

function playLoeExample3() {
	setProgress(82);
	document.getElementById("example_2").style.display = "none";
	document.getElementById("example_3").style.display = "block";
	document.getElementById('example_3_title').style.opacity = 1;
	document.getElementById('example_3_title').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/example_3_title.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			playLoeExample3Block1();
		}, 1000);
	};
}

function playLoeExample3Block1() {
	setProgress(86);
	document.getElementById('loe_e_3_b_1').style.opacity = 1;
	document.getElementById('loe_e_3_b_1').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/loe_e_3_b_1.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			playLoeExample3Block2();
		}, 1000);
	};
}

function playLoeExample3Block2() {
	setProgress(90);
	document.getElementById('loe_e_3_a_1').style.opacity = 1;
	document.getElementById('loe_e_3_a_1').style.animation = "fadeIn 2s";
	document.getElementById('loe_e_3_b_2').style.opacity = 1;
	document.getElementById('loe_e_3_b_2').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/loe_e_3_b_2_positive_1.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onplay = function () {
		document.getElementById('loe_e_3_b_2_1').style.background = '#00FF0066';
		document.getElementById('loe_e_3_b_2_1').style.animation = "positiveBg 2s";
		document.getElementById('loe_e_3_b_2_2').style.background = '#00FF0066';
		document.getElementById('loe_e_3_b_2_2').style.animation = "positiveBg 2s";
		document.getElementById('loe_e_3_b_2_3').style.background = '#00FF0066';
		document.getElementById('loe_e_3_b_2_3').style.animation = "positiveBg 2s";
		period1Audio.onplay = null;
		document.getElementById('loe_e_3_a_1').style.animation = "";
	}
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			period1Audio.src = 'audio/period_1/loe_e_3_b_2_positive_2.mp3';
			period1Audio.load();
			period1Audio.play();
			document.getElementById('loe_e_3_b_2_4').style.background = '#00FF0066';
			document.getElementById('loe_e_3_b_2_4').style.animation = "positiveBg 2s";
			document.getElementById('loe_e_3_b_2_5').style.background = '#00FF0066';
			document.getElementById('loe_e_3_b_2_5').style.animation = "positiveBg 2s";

			period1Audio.onended = function () {
				period1Audio.onended = null;
				setTimeout(function () {
					period1Audio.src = 'audio/period_1/loe_e_3_b_2_positive_3.mp3';
					period1Audio.load();
					period1Audio.play();
					document.getElementById('loe_e_3_b_2_6').style.background = '#00FF0066';
					document.getElementById('loe_e_3_b_2_6').style.animation = "positiveBg 2s";
					document.getElementById('loe_e_3_b_2_7').style.background = '#00FF0066';
					document.getElementById('loe_e_3_b_2_7').style.animation = "positiveBg 2s";
					document.getElementById('loe_e_3_b_2_8').style.background = '#00FF0066';
					document.getElementById('loe_e_3_b_2_8').style.animation = "positiveBg 2s";
					period1Audio.onended = function () {
						period1Audio.onended = null;
						setTimeout(function () {
							playLoeExample3Block3();
						}, 1000);
					};
				}, 1000);
			}

		}, 1000);
	};
}

function playLoeExample3Block3() {
	setProgress(96);
	document.getElementById('loe_e_3_b_3').style.opacity = 1;
	document.getElementById('loe_e_3_b_3').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/loe_e_3_b_3.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			playLoeExample3Block4();
		}, 1000);
	};
}

function playLoeExample3Block4() {
	setProgress(100);
	document.getElementById('loe_e_3_a_2').style.opacity = 1;
	document.getElementById('loe_e_3_a_2').style.animation = "fadeIn 2s";
	document.getElementById('loe_e_3_b_4').style.opacity = 1;
	document.getElementById('loe_e_3_b_4').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/loe_e_3_b_4.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onplay = function () {
		period1Audio.onplay = null;
		document.getElementById('loe_e_3_a_2').style.animation = "";

	}
	period1Audio.onended = function () {
		setTimeout(function () {
			playExerciseTitle();
		}, 1000);
	}
}

function playExerciseTitle(){
	document.getElementById("example_3").style.display = "none";
	document.getElementById("two").style.display = "block";
	introTitle.innerHTML = "Exercise";
	introTitle.style.animation = 'fadeIn 2s';
	introContent.style.opacity = 0;
	period1Audio.src = 'audio/period_1/exercises.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			introTitle.style.animation = 'fadeOut 1s';
			introTitle.style.opacity = 0;
			document.getElementById("two").style.display = "none";
			document.getElementById("exercise_1").style.display = "block";
			playExercise1();
		}, 1000);
	};
}

function playExercise1() {
	document.getElementById('exercise_1_title').style.opacity = 1;
	document.getElementById('exercise_1_title').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/exercise_1.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			document.getElementById('exercise_1_b_1').style.opacity = 1;
			document.getElementById('exercise_1_b_1').style.animation = "fadeIn 2s";
			document.getElementById('exercise_1_a_1').style.opacity = 1;
			document.getElementById('exercise_1_a_1').style.animation = "fadeIn 2s";
			document.getElementById('exercise_1_b_2').style.opacity = 1;
			document.getElementById('exercise_1_b_2').style.animation = "fadeIn 2s";
			document.getElementById('exercise_1_a_2').style.opacity = 1;
			document.getElementById('exercise_1_a_2').style.animation = "fadeIn 2s";
			document.getElementById('exercise_1_b_3').style.opacity = 1;
			document.getElementById('exercise_1_b_3').style.animation = "fadeIn 2s";
			document.getElementById('exercise_1_a_3').style.opacity = 1;
			document.getElementById('exercise_1_a_3').style.animation = "fadeIn 2s";
			document.getElementById('exercise_1_b_4').style.opacity = 1;
			document.getElementById('exercise_1_b_4').style.animation = "fadeIn 2s";
			setTimeout(function(){
				document.getElementById('exercise_1_a_1').style.animation = "";
				document.getElementById('exercise_1_a_2').style.animation = "";
				document.getElementById('exercise_1_a_3').style.animation = "";
			},2000);
		}, 1000);
	};
}
function evaluateExercize1(){
	var isSuccess=true;
	if(document.getElementById('exercise_1_b_2_1').value!='a' ||
		document.getElementById('exercise_1_b_2_2').value!='a' ||
		document.getElementById('exercise_1_b_2_3').value!='a' ||
		document.getElementById('exercise_1_b_2_4').value!='a' ||
		document.getElementById('exercise_1_b_2_5').value!='a' ||
		document.getElementById('exercise_1_b_2_6').value!='a'){
		isSuccess&=false;
		document.getElementById('exercise_1_b_2_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_2_result').classList='wrong';
		},300);
	}else{
		isSuccess&=true;
		document.getElementById('exercise_1_b_2_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_2_result').classList='done';
		},300);
	}
	if(document.getElementById('exercise_1_b_3_1').value!='3+3'){
		isSuccess &= false;
		document.getElementById('exercise_1_b_3_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_3_result').classList='wrong';
		},300);
	}else {
		isSuccess &= true;
		document.getElementById('exercise_1_b_3_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_3_result').classList='done';
		},300);
	}
	if(document.getElementById('exercise_1_b_4_1').value!='6'){
		isSuccess &= false;
		document.getElementById('exercise_1_b_4_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_4_result').classList='wrong';
		},300);
	}else {
		isSuccess &= true;
		document.getElementById('exercise_1_b_4_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_1_b_4_result').classList='done';
		},300);
	}
	if(isSuccess){
		period1Audio.src = 'audio/right_answer.mp3';
		period1Audio.load();
		period1Audio.play();
		period1Audio.onended=function(){
			setTimeout(function () {
				document.getElementById("exercise_1").style.display = "none";
				document.getElementById("exercise_2").style.display = "block";
				playExercise2();
			}, 1000);
		};
	}else{
		period1Audio.src = 'audio/wrong_answer.mp3';
		period1Audio.load();
		period1Audio.play();
	}
	console.log('Result' + isSuccess);
}

function playExercise2(){
	document.getElementById('exercise_2_title').style.opacity = 1;
	document.getElementById('exercise_2_title').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/exercise_2.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			document.getElementById('exercise_2_b_1').style.opacity = 1;
			document.getElementById('exercise_2_b_1').style.animation = "fadeIn 2s";
			document.getElementById('exercise_2_a_1').style.opacity = 1;
			document.getElementById('exercise_2_a_1').style.animation = "fadeIn 2s";
			document.getElementById('exercise_2_b_2').style.opacity = 1;
			document.getElementById('exercise_2_b_2').style.animation = "fadeIn 2s";
			document.getElementById('exercise_2_a_2').style.opacity = 1;
			document.getElementById('exercise_2_a_2').style.animation = "fadeIn 2s";
			document.getElementById('exercise_2_b_3').style.opacity = 1;
			document.getElementById('exercise_2_b_3').style.animation = "fadeIn 2s";
			document.getElementById('exercise_2_a_3').style.opacity = 1;
			document.getElementById('exercise_2_a_3').style.animation = "fadeIn 2s";
			document.getElementById('exercise_2_b_4').style.opacity = 1;
			document.getElementById('exercise_2_b_4').style.animation = "fadeIn 2s";
			setTimeout(function(){
				document.getElementById('exercise_2_a_1').style.animation = "";
				document.getElementById('exercise_2_a_2').style.animation = "";
				document.getElementById('exercise_2_a_3').style.animation = "";
			},2000);
		}, 1000);
	};
}
function evaluateExercize2(){
	var isSuccess=true;
	if(document.getElementById('exercise_2_b_2_1').value!='m' ||
		document.getElementById('exercise_2_b_2_2').value!='m' ||
		document.getElementById('exercise_2_b_2_3').value!='m' ||
		document.getElementById('exercise_2_b_2_4').value!='m' ||
		document.getElementById('exercise_2_b_2_5').value!='m' ||
		document.getElementById('exercise_2_b_2_6').value!='m' ||
		document.getElementById('exercise_2_b_2_7').value!='m' ||
		document.getElementById('exercise_2_b_2_8').value!='m' ){
		isSuccess&=false;
		document.getElementById('exercise_2_b_2_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_2_result').classList='wrong';
		},300);
	}else{
		isSuccess&=true;
		document.getElementById('exercise_2_b_2_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_2_result').classList='done';
		},300);
	}
	if(document.getElementById('exercise_2_b_3_1').value!='4+4'){
		isSuccess &= false;
		document.getElementById('exercise_2_b_3_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_3_result').classList='wrong';
		},300);
	}else {
		isSuccess &= true;
		document.getElementById('exercise_2_b_3_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_3_result').classList='done';
		},300);
	}
	if(document.getElementById('exercise_2_b_4_1').value!='8'){
		isSuccess &= false;
		document.getElementById('exercise_2_b_4_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_4_result').classList='wrong';
		},300);
	}else {
		isSuccess &= true;
		document.getElementById('exercise_2_b_4_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_2_b_4_result').classList='done';
		},300);
	}
	if(isSuccess){
		period1Audio.src = 'audio/right_answer.mp3';
		period1Audio.load();
		period1Audio.play();
		period1Audio.onended=function(){
			setTimeout(function () {
				document.getElementById("exercise_2").style.display = "none";
				document.getElementById("exercise_3").style.display = "block";
				playExercise3();
			}, 1000);
		};
	}else{
		period1Audio.src = 'audio/wrong_answer.mp3';
		period1Audio.load();
		period1Audio.play();
	}
	console.log('Result' + isSuccess);
}


function playExercise3(){
	document.getElementById('exercise_3_title').style.opacity = 1;
	document.getElementById('exercise_3_title').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/exercise_3.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			document.getElementById('exercise_3_b_1').style.opacity = 1;
			document.getElementById('exercise_3_b_1').style.animation = "fadeIn 2s";
			document.getElementById('exercise_3_a_1').style.opacity = 1;
			document.getElementById('exercise_3_a_1').style.animation = "fadeIn 2s";
			document.getElementById('exercise_3_b_2').style.opacity = 1;
			document.getElementById('exercise_3_b_2').style.animation = "fadeIn 2s";
			document.getElementById('exercise_3_a_2').style.opacity = 1;
			document.getElementById('exercise_3_a_2').style.animation = "fadeIn 2s";
			document.getElementById('exercise_3_b_3').style.opacity = 1;
			document.getElementById('exercise_3_b_3').style.animation = "fadeIn 2s";
			document.getElementById('exercise_3_a_3').style.opacity = 1;
			document.getElementById('exercise_3_a_3').style.animation = "fadeIn 2s";
			document.getElementById('exercise_3_b_4').style.opacity = 1;
			document.getElementById('exercise_3_b_4').style.animation = "fadeIn 2s";
			setTimeout(function(){
				document.getElementById('exercise_3_a_1').style.animation = "";
				document.getElementById('exercise_3_a_2').style.animation = "";
				document.getElementById('exercise_3_a_3').style.animation = "";
			},2000);
		}, 1000);
	};
}
function evaluateExercize3(){
	var isSuccess=true;
	if(document.getElementById('exercise_3_b_2_1').value!='-n' ||
		document.getElementById('exercise_3_b_2_2').value!='-n' ||
		document.getElementById('exercise_3_b_2_3').value!='-n' ||
		document.getElementById('exercise_3_b_2_4').value!='-n' ||
		document.getElementById('exercise_3_b_2_5').value!='-n' ||
		document.getElementById('exercise_3_b_2_6').value!='-n' ||
		document.getElementById('exercise_3_b_2_7').value!='-n' ||
		document.getElementById('exercise_3_b_2_8').value!='-n' ){
		isSuccess&=false;
		document.getElementById('exercise_3_b_2_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_b_2_result').classList='wrong';
		},300);
	}else{
		isSuccess&=true;
		document.getElementById('exercise_3_b_2_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_b_2_result').classList='done';
		},300);
	}
	if(document.getElementById('exercise_3_b_3_1').value!='3+2+3' &&
		document.getElementById('exercise_3_b_3_1').value!='3+3+2' &&
		document.getElementById('exercise_3_b_3_1').value!='2+3+3'){
		isSuccess &= false;
		document.getElementById('exercise_3_b_3_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_b_3_result').classList='wrong';
		},300);
	}else {
		isSuccess &= true;
		document.getElementById('exercise_3_b_3_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_b_3_result').classList='done';
		},300);
	}
	if(document.getElementById('exercise_3_b_4_1').value!='8'){
		isSuccess &= false;
		document.getElementById('exercise_3_b_4_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_b_4_result').classList='wrong';
		},300);
	}else {
		isSuccess &= true;
		document.getElementById('exercise_3_b_4_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_3_b_4_result').classList='done';
		},300);
	}
	if(isSuccess){
		period1Audio.src = 'audio/right_answer.mp3';
		period1Audio.load();
		period1Audio.play();
		period1Audio.onended=function(){
			setTimeout(function () {
				document.getElementById("exercise_3").style.display = "none";
				document.getElementById("exercise_4").style.display = "block";
				playExercise4();
			}, 1000);
		};
	}else{
		period1Audio.src = 'audio/wrong_answer.mp3';
		period1Audio.load();
		period1Audio.play();
	}
	console.log('Result' + isSuccess);
}

function playExercise4(){
	document.getElementById('exercise_4_title').style.opacity = 1;
	document.getElementById('exercise_4_title').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/exercise_4.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			document.getElementById('exercise_4_b_1').style.opacity = 1;
			document.getElementById('exercise_4_b_1').style.animation = "fadeIn 2s";
			document.getElementById('exercise_4_a_1').style.opacity = 1;
			document.getElementById('exercise_4_a_1').style.animation = "fadeIn 2s";
			document.getElementById('exercise_4_b_2').style.opacity = 1;
			document.getElementById('exercise_4_b_2').style.animation = "fadeIn 2s";
			document.getElementById('exercise_4_a_2').style.opacity = 1;
			document.getElementById('exercise_4_a_2').style.animation = "fadeIn 2s";
			document.getElementById('exercise_4_b_3').style.opacity = 1;
			document.getElementById('exercise_4_b_3').style.animation = "fadeIn 2s";
			document.getElementById('exercise_4_a_3').style.opacity = 1;
			document.getElementById('exercise_4_a_3').style.animation = "fadeIn 2s";
			document.getElementById('exercise_4_b_4').style.opacity = 1;
			document.getElementById('exercise_4_b_4').style.animation = "fadeIn 2s";
			setTimeout(function(){
				document.getElementById('exercise_4_a_1').style.animation = "";
				document.getElementById('exercise_4_a_2').style.animation = "";
				document.getElementById('exercise_4_a_3').style.animation = "";
			},2000);
		}, 1000);
	};
}
function evaluateExercize4(){
	var isSuccess=true;
	if(document.getElementById('exercise_4_b_2_1').value!='a' ||
		document.getElementById('exercise_4_b_2_2').value!='a' ||
		document.getElementById('exercise_4_b_2_3').value!='a' ||
		document.getElementById('exercise_4_b_2_4').value!='a' ||
		document.getElementById('exercise_4_b_2_5').value!='a' ||
		document.getElementById('exercise_4_b_2_6').value!='a' ||
		document.getElementById('exercise_4_b_2_7').value!='a' ){
		isSuccess&=false;
		document.getElementById('exercise_4_b_2_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_b_2_result').classList='wrong';
		},300);
	}else{
		isSuccess&=true;
		document.getElementById('exercise_4_b_2_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_b_2_result').classList='done';
		},300);
	}
	if(document.getElementById('exercise_4_b_3_1').value!='2+2+3' &&
		document.getElementById('exercise_4_b_3_1').value!='3+2+2' &&
		document.getElementById('exercise_4_b_3_1').value!='2+3+2'){
		isSuccess &= false;
		document.getElementById('exercise_4_b_3_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_b_3_result').classList='wrong';
		},300);
	}else {
		isSuccess &= true;
		document.getElementById('exercise_4_b_3_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_b_3_result').classList='done';
		},300);
	}
	if(document.getElementById('exercise_4_b_4_1').value!='7'){
		isSuccess &= false;
		document.getElementById('exercise_4_b_4_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_b_4_result').classList='wrong';
		},300);
	}else {
		isSuccess &= true;
		document.getElementById('exercise_4_b_4_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_4_b_4_result').classList='done';
		},300);
	}
	if(isSuccess){
		period1Audio.src = 'audio/right_answer.mp3';
		period1Audio.load();
		period1Audio.play();
		period1Audio.onended=function(){
			setTimeout(function () {
				document.getElementById("exercise_4").style.display = "none";
				document.getElementById("exercise_5").style.display = "block";
				playExercise5();
			}, 1000);
		};
	}else{
		period1Audio.src = 'audio/wrong_answer.mp3';
		period1Audio.load();
		period1Audio.play();
	}
	console.log('Result' + isSuccess);
}

function playExercise5(){
	document.getElementById('exercise_5_title').style.opacity = 1;
	document.getElementById('exercise_5_title').style.animation = "fadeIn 2s";
	period1Audio.src = 'audio/period_1/exercise_5.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			document.getElementById('exercise_5_b_1').style.opacity = 1;
			document.getElementById('exercise_5_b_1').style.animation = "fadeIn 2s";
			document.getElementById('exercise_5_a_1').style.opacity = 1;
			document.getElementById('exercise_5_a_1').style.animation = "fadeIn 2s";
			document.getElementById('exercise_5_b_2').style.opacity = 1;
			document.getElementById('exercise_5_b_2').style.animation = "fadeIn 2s";
			document.getElementById('exercise_5_a_2').style.opacity = 1;
			document.getElementById('exercise_5_a_2').style.animation = "fadeIn 2s";
			document.getElementById('exercise_5_b_3').style.opacity = 1;
			document.getElementById('exercise_5_b_3').style.animation = "fadeIn 2s";
			document.getElementById('exercise_5_a_3').style.opacity = 1;
			document.getElementById('exercise_5_a_3').style.animation = "fadeIn 2s";
			document.getElementById('exercise_5_b_4').style.opacity = 1;
			document.getElementById('exercise_5_b_4').style.animation = "fadeIn 2s";
			setTimeout(function(){
				document.getElementById('exercise_5_a_1').style.animation = "";
				document.getElementById('exercise_5_a_2').style.animation = "";
				document.getElementById('exercise_5_a_3').style.animation = "";
			},2000);
		}, 1000);
	};
}
function evaluateExercize5(){
	var isSuccess=true;
	if(document.getElementById('exercise_5_b_2_1').value!='m' ||
		document.getElementById('exercise_5_b_2_2').value!='m' ||
		document.getElementById('exercise_5_b_2_3').value!='m' ||
		document.getElementById('exercise_5_b_2_4').value!='m' ||
		document.getElementById('exercise_5_b_2_5').value!='m' ||
		document.getElementById('exercise_5_b_2_6').value!='m' ||
		document.getElementById('exercise_5_b_2_7').value!='m' ||
		document.getElementById('exercise_5_b_2_8').value!='m' ){
		isSuccess&=false;
		document.getElementById('exercise_5_b_2_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_5_b_2_result').classList='wrong';
		},300);
	}else{
		isSuccess&=true;
		document.getElementById('exercise_5_b_2_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_5_b_2_result').classList='done';
		},300);
	}
	if(document.getElementById('exercise_5_b_3_1').value!='4-4'){
		isSuccess &= false;
		document.getElementById('exercise_5_b_3_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_5_b_3_result').classList='wrong';
		},300);
	}else {
		isSuccess &= true;
		document.getElementById('exercise_5_b_3_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_5_b_3_result').classList='done';
		},300);
	}
	if(document.getElementById('exercise_5_b_4_1').value!='0'){
		isSuccess &= false;
		document.getElementById('exercise_5_b_4_result').classList='wrong_animated';
		setTimeout(function(){
			document.getElementById('exercise_5_b_4_result').classList='wrong';
		},300);
	}else {
		isSuccess &= true;
		document.getElementById('exercise_5_b_4_result').classList='done_animated';
		setTimeout(function(){
			document.getElementById('exercise_5_b_4_result').classList='done';
		},300);
	}
	if(isSuccess){
		period1Audio.src = 'audio/right_answer.mp3';
		period1Audio.load();
		period1Audio.play();
		period1Audio.onended=function(){
			setTimeout(function () {
				document.getElementById('exercise_5').style.display='none';
				document.getElementById('home_work').style.display='block';
				playHomeWork();
			}, 1000);
		};	
	}else{
		period1Audio.src = 'audio/wrong_answer.mp3';
		period1Audio.load();
		period1Audio.play();
	}
	console.log('Result' + isSuccess);
}

function playHomeWork(){
	document.getElementById('home_work_title').style.animation='fadeIn 2s';
	document.getElementById('home_work_title').style.opacity=1;
	period1Audio.src = 'audio/period_1/home_work_title.mp3';
	period1Audio.load();
	period1Audio.play();
	period1Audio.onended = function () {
		period1Audio.onended = null;
		setTimeout(function () {
			document.getElementById('home_work_questions').style.animation='fadeIn 2s';
			document.getElementById('home_work_questions').style.opacity=1;
			period1Audio.src = 'audio/period_1/home_work.mp3';
			period1Audio.load();
			period1Audio.play();
			period1Audio.onended = function () {
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
	period1Audio.src = 'audio/bell.mp3';
	period1Audio.load();
	period1Audio.play();
	setProgress(100);
	period1Audio.onended = function () {
		period1Audio.play();
	};
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
		if (c.p == n)
			answer = c.c;
	});
	document.getElementById('completed').style.background = answer;
	document.getElementById('completed').style.width = percentage + '%';
}