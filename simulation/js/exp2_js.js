var count=0;
var i1,i2,i3,i12,i12,i13,i21,i22,i23;
var c1=0;
var c2=0;
var c3=0;
var dr1,dr2,dr3,dr4,dr5,dr6,dr7,dr8,dr9,dra,drb,drc,drd;
function perform1()
	{
		var r1,r2,r3,v1,v2,s1,s2;
		var flag=0;
r1=parseFloat(document.getElementById('r1').value);
r2=parseFloat(document.getElementById('r2').value);
r3=parseFloat(document.getElementById('r3').value);
v1=parseFloat(document.getElementById('v1').value);
v2=parseFloat(document.getElementById('v2').value);
s1=parseFloat(document.getElementById('s1').value);
s2=parseFloat(document.getElementById('s2').value);
		if (s1==1 && s2==1)
		{c1=1;
			i11 = (v1 * (r2 + r3)) / ((r1 * r2) + (r2 * r3) + (r3 * r1));
			i12 = ((r2 * i11) / (r2 + r3)) * (-1);
			i13 = (r3 * i11) / (r2 + r3);
			i22 = ((v2 * (r2 + r1)) / ((r1 * r2) + (r2 * r3) + (r3 * r1)));
			i21 = ((r2 * i22) / (r2 + r1)) * (-1);
			i23 = ((r1 * i22) / (r2 + r1));
			i1 = i11 + i21;
			i2 = i12 + i22;
			i3 = i13 + i23;
			if (i1 > 5 || isNaN(i2))
				{
					document.getElementById('led1').src = "./images/led_off.png";
					document.getElementById("led1").style["cursor"] = "pointer";
					flag=flag+1;
					alert('Click on the fuse indicator to repair it and increase the resistance value.');
					
				}
			if (i2 > 5 || isNaN(i2))
				{
					document.getElementById('led2').src = "./images/led_off.png";
					document.getElementById("led2").style["cursor"] = "pointer";
					flag=flag+1;
					alert('Click on the fuse indicator to repair it and increase the resistance value.');
				}
			if(flag==0)
			{
				document.f1.A1.value = i1;
			document.f1.A2.value = i2;
			document.f1.A3.value = i3;
			document.f1.A11.value = -1 * (i1 * i1) * r1;
			document.f1.A12.value = -1 * (i2 * i2) * r3;
			document.f1.A13.value = -1 * (i3 * i3) * r2;
			document.f1.A14.value = v1 * i1;
			document.f1.A15.value = v2 * i2;
			document.f1.A16.value = 0.000;
			perform_meter1();
			perform_meter2();
			perform_meter3();
			}
			
		}
		else
		{
			alert("Please select both S1 and S2 to power for case 1.");
		}
	}
function perform2()	{
var r1,r2,r3,v1,v2,rl1,s1,s2;
r1=parseFloat(document.getElementById('r1').value);
r2=parseFloat(document.getElementById('r2').value);
r3=parseFloat(document.getElementById('r3').value);
v1=parseFloat(document.getElementById('v1').value);
v2=parseFloat(document.getElementById('v2').value);
s1=parseFloat(document.getElementById('s1').value);
s2=parseFloat(document.getElementById('s2').value);
		if (s1==1 && s2==2)
		{c2=1;
			if (i11 > 5 || isNaN(i11))
				{
					document.getElementById('led1').src = "./images/led_off.png";
					document.getElementById("led1").style["cursor"] = "pointer";
					alert('Click on the fuse indicator to repair it and increase the resistance value.');
				}
			else
			{
				document.f1.A1.value = i11;
			document.f1.A2.value = i12;
			document.f1.A3.value = i13;
			document.f1.A21.value = -1 * (i11 * i11) * r1;
			document.f1.A22.value = -1 * (i12 * i12) * r3;
			document.f1.A23.value = -1 * (i13 * i13) * r2;
			document.f1.A24.value = v1 * i11;
			document.f1.A25.value = 0.000;
			perform_meter1();
			perform_meter2();
			perform_meter3();
			}
			
		}
		else
		{
			alert("Please select S1 to Power and S2 to Short for case 2.");
		}
	}
function perform3(){	
var r1,r2,r3,v1,v2,rl1,s1,s2;
r1=parseFloat(document.getElementById('r1').value);
r2=parseFloat(document.getElementById('r2').value);
r3=parseFloat(document.getElementById('r3').value);
v1=parseFloat(document.getElementById('v1').value);
v2=parseFloat(document.getElementById('v2').value);
s1=parseFloat(document.getElementById('s1').value);
s2=parseFloat(document.getElementById('s2').value);
		if (s1==2 && s2==1)
		{c3=1;
			if (i22 > 5 || isNaN(i22))
				{
					document.getElementById('led2').src = "./images/led_off.png";
					document.getElementById("led2").style["cursor"] = "pointer";
					alert('Click on the fuse indicator to repair it and increase the resistance value.');
				}
			else
				{
					document.f1.A1.value = i21;
					document.f1.A2.value = i22;
					document.f1.A3.value = i23;
					document.f1.A31.value = -1 * (i21 * i21) * r1;
					document.f1.A32.value = -1 * (i22 * i22) * r3;
					document.f1.A33.value = -1 * (i23 * i23) * r2;
					document.f1.A34.value = v2 * i22;
					document.f1.A35.value = 0.000;
					perform_meter1();
					perform_meter2();
					perform_meter3();
				}
			
		}
		else
		{
			alert("Please select S1 to Short and S2 to Power for case 3.");
		}
	}
function perform4(){
		if(c1==1 && c2==1 && c3==1)
		{
			count=count+1;
			c1=0; c2=0; c3=0;
			dr1=document.f1.A11.value; dr2=document.f1.A12.value; dr3=document.f1.A13.value; dr4=document.f1.A14.value; dr5=document.f1.A15.value; 
			dr6=document.f1.A21.value; dr7=document.f1.A22.value; dr8=document.f1.A23.value; dr9=document.f1.A24.value; 
			dra=document.f1.A31.value; drb=document.f1.A32.value; drc=document.f1.A33.value; drd=document.f1.A34.value; 
			document.f1.A1.value = 0; document.f1.A31.value = 0; document.f1.A21.value = 0; document.f1.A11.value = 0; document.f1.A14.value = 0; document.f1.A15.value = 0;
			document.f1.A2.value = 0; document.f1.A32.value = 0; document.f1.A22.value = 0; document.f1.A12.value = 0; document.f1.A24.value=0;
			document.f1.A3.value = 0; document.f1.A33.value = 0; document.f1.A23.value = 0; document.f1.A13.value = 0; document.f1.A34.value = 0;
			alert("The observation table is updated. Change the resistance and voltage source values to take another observation.");
			perform_meter1();
			perform_meter2();
			perform_meter3();
			if(count==1)
			{document.f1.tr1.value=dr1; document.f1.tr2.value=dr2; document.f1.tr3.value=dr3; document.f1.tr4.value=dr4;
			document.f1.tr5.value=dr5; document.f1.tr6.value=dr6; document.f1.tr7.value=dr7; document.f1.tr8.value=dr8; document.f1.tr9.value=dr9;
			document.f1.tra.value=dra; document.f1.trb.value=drb; document.f1.trc.value=drc; document.f1.trd.value=drd;}
			else if(count==2)
			{document.f1.tr10.value=dr1; document.f1.tr20.value=dr2; document.f1.tr30.value=dr3; document.f1.tr40.value=dr4;
			document.f1.tr50.value=dr5; document.f1.tr60.value=dr6; document.f1.tr70.value=dr7; document.f1.tr80.value=dr8; document.f1.tr90.value=dr9;
			document.f1.tra0.value=dra; document.f1.trb0.value=drb; document.f1.trc0.value=drc; document.f1.trd0.value=drd;}
			else if(count==3)
			{document.f1.tr11.value=dr1; document.f1.tr21.value=dr2; document.f1.tr31.value=dr3; document.f1.tr41.value=dr4;
			document.f1.tr51.value=dr5; document.f1.tr61.value=dr6; document.f1.tr71.value=dr7; document.f1.tr81.value=dr8; document.f1.tr91.value=dr9;
			document.f1.tra1.value=dra; document.f1.trb1.value=drb; document.f1.trc1.value=drc; document.f1.trd1.value=drd;}
			else if(count==4)
			{document.f1.tr12.value=dr1; document.f1.tr22.value=dr2; document.f1.tr32.value=dr3; document.f1.tr42.value=dr4;
			document.f1.tr52.value=dr5; document.f1.tr62.value=dr6; document.f1.tr72.value=dr7; document.f1.tr82.value=dr8; document.f1.tr92.value=dr9;
			document.f1.tra2.value=dra; document.f1.trb2.value=drb; document.f1.trc2.value=drc; document.f1.trd2.value=drd;}
			else if(count==5)
			{document.f1.tr13.value=dr1; document.f1.tr23.value=dr2; document.f1.tr33.value=dr3; document.f1.tr43.value=dr4;
			document.f1.tr53.value=dr5; document.f1.tr63.value=dr6; document.f1.tr73.value=dr7; document.f1.tr83.value=dr8; document.f1.tr93.value=dr9;
			document.f1.tra3.value=dra; document.f1.trb3.value=drb; document.f1.trc3.value=drc; document.f1.trd3.value=drd;}
			else{alert("The observation table is full. Refresh the page to continue");
			}
			
		}
		else
		{
			alert("Please simulate all the 3 cases first.");
		}
	}	
	function change_led1() {
		var fuse = document.getElementById('led1');
		if(fuse.src.match("led_off"))
		{
			fuse.src = "./images/led_on.png"; 
		document.f1.r2.value = 200;
		}
		
	}
	function change_led2() {
		var fuse = document.getElementById('led2');
		if(fuse.src.match("led_off"))
		{
		fuse.src = "./images/led_on.png"; 
		document.f1.r2.value = 200;
		}
	}
