var show = document.getElementById('show');
show.onclick = function () {
    var asist1 = document.getElementById('asist1').value;
    var asist1Number = parseInt(asist1, 10);
    var pcut1 = document.getElementById('pcut1').value;
    var pcut1Number = parseInt(pcut1, 10);
    var count1 = document.getElementById('count1').value;
    var count1Number = parseInt(count1, 10);
    var plcut1 = document.getElementById('plcut1').value;
    var plcut1Number = parseInt(plcut1, 10);
    var hup1 = document.getElementById('hup1').value;
    var hup1Number = parseInt(hup1, 10);
    var psuc1 = document.getElementById('psuc1').value;
    var psuc1Number = parseInt(psuc1, 10);
    var pmiss1 = document.getElementById('pmiss1').value;
    var pmiss1Number = parseInt(pmiss1, 10);
    var faul1 = document.getElementById('faul1').value;
    var faul1Number = parseInt(faul1, 10);
    var pfaul1 = document.getElementById('pfaul1').value;
    var pfaul1Number = parseInt(pfaul1, 10);
    var floot1 = document.getElementById('floot1').value;
    var floot1Number = parseInt(floot1, 10);
    var flotmiss1 = document.getElementById('flotmiss1').value;
    var flotmiss1Number = parseInt(flotmiss1, 10);
    var cutin1 = document.getElementById('cutin1').value;
    var cutin1Number = parseInt(cutin1, 10);
    var bcut1 = document.getElementById('bcut1').value;
    var bcut1Number = parseInt(bcut1, 10);
    var symiss1 = document.getElementById('symiss1').value;
    var symiss1Number = parseInt(symiss1, 10);
    var answer1 = asist1Number + pcut1Number + count1Number + plcut1Number + hup1Number + psuc1Number + floot1Number + cutin1Number + bcut1Number;
    var answer1Number = parseInt(answer1, 10);
    var plus1 = document.getElementById('plus1');
    plus1.value = answer1Number;
    var answeer1 = pmiss1Number + faul1Number + pfaul1Number + flotmiss1Number + symiss1Number;
    var answeer1Number = parseInt(answeer1, 10);
    var minas1 = document.getElementById('minas1');
    minas1.value = answeer1Number;
    var answeeer1 = answer1Number - answeer1Number;
    var answeeer1Number = parseInt(answeeer1, 10);
    var answeeerNumber1 = answeeer1Number * 100;
    var every1 = document.getElementById('every1');
    every1.value = answeeerNumber1;

    var asist2 = document.getElementById('asist2').value;
    var asist2Number = parseInt(asist2, 10);
    var pcut2 = document.getElementById('pcut2').value;
    var pcut2Number = parseInt(pcut2, 10);
    var count2 = document.getElementById('count2').value;
    var count2Number = parseInt(count2, 10);
    var plcut2 = document.getElementById('plcut2').value;
    var plcut2Number = parseInt(plcut2, 10);
    var hup2 = document.getElementById('hup2').value;
    var hup2Number = parseInt(hup2, 10);
    var psuc2 = document.getElementById('psuc2').value;
    var psuc2Number = parseInt(psuc2, 10);
    var pmiss2 = document.getElementById('pmiss2').value;
    var pmiss2Number = parseInt(pmiss2, 10);
    var faul2 = document.getElementById('faul2').value;
    var faul2Number = parseInt(faul2, 10);
    var pfaul2 = document.getElementById('pfaul2').value;
    var pfaul2Number = parseInt(pfaul2, 10);
    var floot2 = document.getElementById('floot2').value;
    var floot2Number = parseInt(floot2, 10);
    var flotmiss2 = document.getElementById('flotmiss2').value;
    var flotmiss2Number = parseInt(flotmiss2, 10);
    var cutin2 = document.getElementById('cutin2').value;
    var cutin2Number = parseInt(cutin2, 10);
    var bcut2 = document.getElementById('bcut2').value;
    var bcut2Number = parseInt(bcut2, 10);
    var symiss2 = document.getElementById('symiss2').value;
    var symiss2Number = parseInt(symiss2, 10);
    var answer2 = asist2Number + pcut2Number + count2Number + plcut2Number + hup2Number + psuc2Number + floot2Number + cutin2Number + bcut2Number;
    var answer2Number = parseInt(answer2, 10);
    var plus2 = document.getElementById('plus2');
    plus2.value = answer2Number;
    var answeer2 = pmiss2Number + faul2Number + pfaul2Number + flotmiss2Number + symiss2Number;
    var answeer2Number = parseInt(answeer2, 10);
    var minas2 = document.getElementById('minas2');
    minas2.value = answeer2Number;
    var answeeer2 = answer2Number - answeer2Number;
    var answeeer2Number = parseInt(answeeer2, 10);
    var answeeerNumber2 = answeeer2Number * 100;
    var every2 = document.getElementById('every2');
    every2.value = answeeerNumber2;

    var asist3 = document.getElementById('asist3').value;
    var asist3Number = parseInt(asist3, 10);
    var pcut3 = document.getElementById('pcut3').value;
    var pcut3Number = parseInt(pcut3, 10);
    var count3 = document.getElementById('count3').value;
    var count3Number = parseInt(count3, 10);
    var plcut3 = document.getElementById('plcut3').value;
    var plcut3Number = parseInt(plcut3, 10);
    var hup3 = document.getElementById('hup3').value;
    var hup3Number = parseInt(hup3, 10);
    var psuc3 = document.getElementById('psuc3').value;
    var psuc3Number = parseInt(psuc3, 10);
    var pmiss3 = document.getElementById('pmiss3').value;
    var pmiss3Number = parseInt(pmiss3, 10);
    var faul3 = document.getElementById('faul3').value;
    var faul3Number = parseInt(faul3, 10);
    var pfaul3 = document.getElementById('pfaul3').value;
    var pfaul3Number = parseInt(pfaul3, 10);
    var floot3 = document.getElementById('floot3').value;
    var floot3Number = parseInt(floot3, 10);
    var flotmiss3 = document.getElementById('flotmiss3').value;
    var flotmiss3Number = parseInt(flotmiss3, 10);
    var cutin3 = document.getElementById('cutin3').value;
    var cutin3Number = parseInt(cutin3, 10);
    var bcut3 = document.getElementById('bcut3').value;
    var bcut3Number = parseInt(bcut3, 10);
    var symiss3 = document.getElementById('symiss3').value;
    var symiss3Number = parseInt(symiss3, 10);
    var answer3 = asist3Number + pcut3Number + count3Number + plcut3Number + hup3Number + psuc3Number + floot3Number + cutin3Number + bcut3Number;
    var answer3Number = parseInt(answer3, 10);
    var plus3 = document.getElementById('plus3');
    plus3.value = answer3Number;
    var answeer3 = pmiss3Number + faul3Number + pfaul3Number + flotmiss3Number + symiss3Number;
    var answeer3Number = parseInt(answeer3, 10);
    var minas3 = document.getElementById('minas3');
    minas3.value = answeer3Number;
    var answeeer3 = answer3Number - answeer3Number;
    var answeeer3Number = parseInt(answeeer3, 10);
    var answeeerNumber3 = answeeer3Number * 100;
    var every3 = document.getElementById('every3');
    every3.value = answeeerNumber3;

    var asist4 = document.getElementById('asist4').value;
    var asist4Number = parseInt(asist4, 10);
    var pcut4 = document.getElementById('pcut4').value;
    var pcut4Number = parseInt(pcut4, 10);
    var count4 = document.getElementById('count4').value;
    var count4Number = parseInt(count4, 10);
    var plcut4 = document.getElementById('plcut4').value;
    var plcut4Number = parseInt(plcut4, 10);
    var hup4 = document.getElementById('hup4').value;
    var hup4Number = parseInt(hup4, 10);
    var psuc4 = document.getElementById('psuc4').value;
    var psuc4Number = parseInt(psuc4, 10);
    var pmiss4 = document.getElementById('pmiss4').value;
    var pmiss4Number = parseInt(pmiss4, 10);
    var faul4 = document.getElementById('faul4').value;
    var faul4Number = parseInt(faul4, 10);
    var pfaul4 = document.getElementById('pfaul4').value;
    var pfaul4Number = parseInt(pfaul4, 10);
    var floot4 = document.getElementById('floot4').value;
    var floot4Number = parseInt(floot4, 10);
    var flotmiss4 = document.getElementById('flotmiss4').value;
    var flotmiss4Number = parseInt(flotmiss4, 10);
    var cutin4 = document.getElementById('cutin4').value;
    var cutin4Number = parseInt(cutin4, 10);
    var bcut4 = document.getElementById('bcut4').value;
    var bcut4Number = parseInt(bcut4, 10);
    var symiss4 = document.getElementById('symiss4').value;
    var symiss4Number = parseInt(symiss4, 10);
    var answer4 = asist4Number + pcut4Number + count4Number + plcut4Number + hup4Number + psuc4Number + floot4Number + cutin4Number + bcut4Number;
    var answer4Number = parseInt(answer4, 10);
    var plus4 = document.getElementById('plus4');
    plus4.value = answer4Number;
    var answeer4 = pmiss4Number + faul4Number + pfaul4Number + flotmiss4Number + symiss4Number;
    var answeer4Number = parseInt(answeer4, 10);
    var minas4 = document.getElementById('minas4');
    minas4.value = answeer4Number;
    var answeeer4 = answer4Number - answeer4Number;
    var answeeer4Number = parseInt(answeeer4, 10);
    var answeeerNumber4 = answeeer4Number * 100;
    var every4 = document.getElementById('every4');
    every4.value = answeeerNumber4;

    var asist5 = document.getElementById('asist5').value;
    var asist5Number = parseInt(asist5, 10);
    var pcut5 = document.getElementById('pcut5').value;
    var pcut5Number = parseInt(pcut5, 10);
    var count5 = document.getElementById('count5').value;
    var count5Number = parseInt(count5, 10);
    var plcut5 = document.getElementById('plcut5').value;
    var plcut5Number = parseInt(plcut5, 10);
    var hup5 = document.getElementById('hup5').value;
    var hup5Number = parseInt(hup5, 10);
    var psuc5 = document.getElementById('psuc5').value;
    var psuc5Number = parseInt(psuc5, 10);
    var pmiss5 = document.getElementById('pmiss5').value;
    var pmiss5Number = parseInt(pmiss5, 10);
    var faul5 = document.getElementById('faul5').value;
    var faul5Number = parseInt(faul5, 10);
    var pfaul5 = document.getElementById('pfaul5').value;
    var pfaul5Number = parseInt(pfaul5, 10);
    var floot5 = document.getElementById('floot5').value;
    var floot5Number = parseInt(floot5, 10);
    var flotmiss5 = document.getElementById('flotmiss5').value;
    var flotmiss5Number = parseInt(flotmiss5, 10);
    var cutin5 = document.getElementById('cutin5').value;
    var cutin5Number = parseInt(cutin5, 10);
    var bcut5 = document.getElementById('bcut5').value;
    var bcut5Number = parseInt(bcut5, 10);
    var symiss5 = document.getElementById('symiss5').value;
    var symiss5Number = parseInt(symiss5, 10);
    var answer5 = asist5Number + pcut5Number + count5Number + plcut5Number + hup5Number + psuc5Number + floot5Number + cutin5Number + bcut5Number;
    var answer5Number = parseInt(answer5, 10);
    var plus5 = document.getElementById('plus5');
    plus5.value = answer5Number;
    var answeer5 = pmiss5Number + faul5Number + pfaul5Number + flotmiss5Number + symiss5Number;
    var answeer5Number = parseInt(answeer5, 10);
    var minas5 = document.getElementById('minas5');
    minas5.value = answeer5Number;
    var answeeer5 = answer5Number - answeer5Number;
    var answeeer5Number = parseInt(answeeer5, 10);
    var answeeerNumber5 = answeeer5Number * 100;
    var every5 = document.getElementById('every5');
    every5.value = answeeerNumber5;

    var asist6 = document.getElementById('asist6').value;
    var asist6Number = parseInt(asist6, 10);
    var pcut6 = document.getElementById('pcut6').value;
    var pcut6Number = parseInt(pcut6, 10);
    var count6 = document.getElementById('count6').value;
    var count6Number = parseInt(count6, 10);
    var plcut6 = document.getElementById('plcut6').value;
    var plcut6Number = parseInt(plcut6, 10);
    var hup6 = document.getElementById('hup6').value;
    var hup6Number = parseInt(hup6, 10);
    var psuc6 = document.getElementById('psuc6').value;
    var psuc6Number = parseInt(psuc6, 10);
    var pmiss6 = document.getElementById('pmiss6').value;
    var pmiss6Number = parseInt(pmiss6, 10);
    var faul6 = document.getElementById('faul6').value;
    var faul6Number = parseInt(faul6, 10);
    var pfaul6 = document.getElementById('pfaul6').value;
    var pfaul6Number = parseInt(pfaul6, 10);
    var floot6 = document.getElementById('floot6').value;
    var floot6Number = parseInt(floot6, 10);
    var flotmiss6 = document.getElementById('flotmiss6').value;
    var flotmiss6Number = parseInt(flotmiss6, 10);
    var cutin6 = document.getElementById('cutin6').value;
    var cutin6Number = parseInt(cutin6, 10);
    var bcut6 = document.getElementById('bcut6').value;
    var bcut6Number = parseInt(bcut6, 10);
    var symiss6 = document.getElementById('symiss6').value;
    var symiss6Number = parseInt(symiss6, 10);
    var answer6 = asist6Number + pcut6Number + count6Number + plcut6Number + hup6Number + psuc6Number + floot6Number + cutin6Number + bcut6Number;
    var answer6Number = parseInt(answer6, 10);
    var plus6 = document.getElementById('plus6');
    plus6.value = answer6Number;
    var answeer6 = pmiss6Number + faul6Number + pfaul6Number + flotmiss6Number + symiss6Number;
    var answeer6Number = parseInt(answeer6, 10);
    var minas6 = document.getElementById('minas6');
    minas6.value = answeer6Number;
    var answeeer6 = answer6Number - answeer6Number;
    var answeeer6Number = parseInt(answeeer6, 10);
    var answeeerNumber6 = answeeer6Number * 100;
    var every6 = document.getElementById('every6');
    every6.value = answeeerNumber6;

    var asist7 = document.getElementById('asist7').value;
    var asist7Number = parseInt(asist7, 10);
    var pcut7 = document.getElementById('pcut7').value;
    var pcut7Number = parseInt(pcut7, 10);
    var count7 = document.getElementById('count7').value;
    var count7Number = parseInt(count7, 10);
    var plcut7 = document.getElementById('plcut7').value;
    var plcut7Number = parseInt(plcut7, 10);
    var hup7 = document.getElementById('hup7').value;
    var hup7Number = parseInt(hup7, 10);
    var psuc7 = document.getElementById('psuc7').value;
    var psuc7Number = parseInt(psuc7, 10);
    var pmiss7 = document.getElementById('pmiss7').value;
    var pmiss7Number = parseInt(pmiss7, 10);
    var faul7 = document.getElementById('faul7').value;
    var faul7Number = parseInt(faul7, 10);
    var pfaul7 = document.getElementById('pfaul7').value;
    var pfaul7Number = parseInt(pfaul7, 10);
    var floot7 = document.getElementById('floot7').value;
    var floot7Number = parseInt(floot7, 10);
    var flotmiss7 = document.getElementById('flotmiss7').value;
    var flotmiss7Number = parseInt(flotmiss7, 10);
    var cutin7 = document.getElementById('cutin7').value;
    var cutin7Number = parseInt(cutin7, 10);
    var bcut7 = document.getElementById('bcut7').value;
    var bcut7Number = parseInt(bcut7, 10);
    var symiss7 = document.getElementById('symiss7').value;
    var symiss7Number = parseInt(symiss7, 10);
    var answer7 = asist7Number + pcut7Number + count7Number + plcut7Number + hup7Number + psuc7Number + floot7Number + cutin7Number + bcut7Number;
    var answer7Number = parseInt(answer7, 10);
    var plus7 = document.getElementById('plus7');
    plus7.value = answer7Number;
    var answeer7 = pmiss7Number + faul7Number + pfaul7Number + flotmiss7Number + symiss7Number;
    var answeer7Number = parseInt(answeer7, 10);
    var minas7 = document.getElementById('minas7');
    minas7.value = answeer7Number;
    var answeeer7 = answer7Number - answeer7Number;
    var answeeer7Number = parseInt(answeeer7, 10);
    var answeeerNumber7 = answeeer7Number * 100;
    var every7 = document.getElementById('every7');
    every7.value = answeeerNumber7;

    var asist8 = document.getElementById('asist8').value;
    var asist8Number = parseInt(asist8, 10);
    var pcut8 = document.getElementById('pcut8').value;
    var pcut8Number = parseInt(pcut8, 10);
    var count8 = document.getElementById('count8').value;
    var count8Number = parseInt(count8, 10);
    var plcut8 = document.getElementById('plcut8').value;
    var plcut8Number = parseInt(plcut8, 10);
    var hup8 = document.getElementById('hup8').value;
    var hup8Number = parseInt(hup8, 10);
    var psuc8 = document.getElementById('psuc8').value;
    var psuc8Number = parseInt(psuc8, 10);
    var pmiss8 = document.getElementById('pmiss8').value;
    var pmiss8Number = parseInt(pmiss8, 10);
    var faul8 = document.getElementById('faul8').value;
    var faul8Number = parseInt(faul8, 10);
    var pfaul8 = document.getElementById('pfaul8').value;
    var pfaul8Number = parseInt(pfaul8, 10);
    var floot8 = document.getElementById('floot8').value;
    var floot8Number = parseInt(floot8, 10);
    var flotmiss8 = document.getElementById('flotmiss8').value;
    var flotmiss8Number = parseInt(flotmiss8, 10);
    var cutin8 = document.getElementById('cutin8').value;
    var cutin8Number = parseInt(cutin8, 10);
    var bcut8 = document.getElementById('bcut8').value;
    var bcut8Number = parseInt(bcut8, 10);
    var symiss8 = document.getElementById('symiss8').value;
    var symiss8Number = parseInt(symiss8, 10);
    var answer8 = asist8Number + pcut8Number + count8Number + plcut8Number + hup8Number + psuc8Number + floot8Number + cutin8Number + bcut8Number;
    var answer8Number = parseInt(answer8, 10);
    var plus8 = document.getElementById('plus8');
    plus8.value = answer8Number;
    var answeer8 = pmiss8Number + faul8Number + pfaul8Number + flotmiss8Number + symiss8Number;
    var answeer8Number = parseInt(answeer8, 10);
    var minas8 = document.getElementById('minas8');
    minas8.value = answeer8Number;
    var answeeer8 = answer8Number - answeer8Number;
    var answeeer8Number = parseInt(answeeer8, 10);
    var answeeerNumber8 = answeeer8Number * 100;
    var every8 = document.getElementById('every8');
    every8.value = answeeerNumber8;

    var asist9 = document.getElementById('asist9').value;
    var asist9Number = parseInt(asist9, 10);
    var pcut9 = document.getElementById('pcut9').value;
    var pcut9Number = parseInt(pcut9, 10);
    var count9 = document.getElementById('count9').value;
    var count9Number = parseInt(count9, 10);
    var plcut9 = document.getElementById('plcut9').value;
    var plcut9Number = parseInt(plcut9, 10);
    var hup9 = document.getElementById('hup9').value;
    var hup9Number = parseInt(hup9, 10);
    var psuc9 = document.getElementById('psuc9').value;
    var psuc9Number = parseInt(psuc9, 10);
    var pmiss9 = document.getElementById('pmiss9').value;
    var pmiss9Number = parseInt(pmiss9, 10);
    var faul9 = document.getElementById('faul9').value;
    var faul9Number = parseInt(faul9, 10);
    var pfaul9 = document.getElementById('pfaul9').value;
    var pfaul9Number = parseInt(pfaul9, 10);
    var floot9 = document.getElementById('floot9').value;
    var floot9Number = parseInt(floot9, 10);
    var flotmiss9 = document.getElementById('flotmiss9').value;
    var flotmiss9Number = parseInt(flotmiss9, 10);
    var cutin9 = document.getElementById('cutin9').value;
    var cutin9Number = parseInt(cutin9, 10);
    var bcut9 = document.getElementById('bcut9').value;
    var bcut9Number = parseInt(bcut9, 10);
    var symiss9 = document.getElementById('symiss9').value;
    var symiss9Number = parseInt(symiss9, 10);
    var answer9 = asist9Number + pcut9Number + count9Number + plcut9Number + hup9Number + psuc9Number + floot9Number + cutin9Number + bcut9Number;
    var answer9Number = parseInt(answer9, 10);
    var plus9 = document.getElementById('plus9');
    plus9.value = answer9Number;
    var answeer9 = pmiss9Number + faul9Number + pfaul9Number + flotmiss9Number + symiss9Number;
    var answeer9Number = parseInt(answeer9, 10);
    var minas9 = document.getElementById('minas9');
    minas9.value = answeer9Number;
    var answeeer9 = answer9Number - answeer9Number;
    var answeeer9Number = parseInt(answeeer9, 10);
    var answeeerNumber9 = answeeer9Number * 100;
    var every9 = document.getElementById('every9');
    every9.value = answeeerNumber9;

    var asist10 = document.getElementById('asist10').value;
    var asist10Number = parseInt(asist10, 10);
    var pcut10 = document.getElementById('pcut10').value;
    var pcut10Number = parseInt(pcut10, 10);
    var count10 = document.getElementById('count10').value;
    var count10Number = parseInt(count10, 10);
    var plcut10 = document.getElementById('plcut10').value;
    var plcut10Number = parseInt(plcut10, 10);
    var hup10 = document.getElementById('hup10').value;
    var hup10Number = parseInt(hup10, 10);
    var psuc10 = document.getElementById('psuc10').value;
    var psuc10Number = parseInt(psuc10, 10);
    var pmiss10 = document.getElementById('pmiss10').value;
    var pmiss10Number = parseInt(pmiss10, 10);
    var faul10 = document.getElementById('faul10').value;
    var faul10Number = parseInt(faul10, 10);
    var pfaul10 = document.getElementById('pfaul10').value;
    var pfaul10Number = parseInt(pfaul10, 10);
    var floot10 = document.getElementById('floot10').value;
    var floot10Number = parseInt(floot10, 10);
    var flotmiss10 = document.getElementById('flotmiss10').value;
    var flotmiss10Number = parseInt(flotmiss10, 10);
    var cutin10 = document.getElementById('cutin10').value;
    var cutin10Number = parseInt(cutin10, 10);
    var bcut10 = document.getElementById('bcut10').value;
    var bcut10Number = parseInt(bcut10, 10);
    var symiss10 = document.getElementById('symiss10').value;
    var symiss10Number = parseInt(symiss10, 10);
    var answer10 = asist10Number + pcut10Number + count10Number + plcut10Number + hup10Number + psuc10Number + floot10Number + cutin10Number + bcut10Number;
    var answer10Number = parseInt(answer10, 10);
    var plus10 = document.getElementById('plus10');
    plus10.value = answer10Number;
    var answeer10 = pmiss10Number + faul10Number + pfaul10Number + flotmiss10Number + symiss10Number;
    var answeer10Number = parseInt(answeer10, 10);
    var minas10 = document.getElementById('minas10');
    minas10.value = answeer10Number;
    var answeeer10 = answer10Number - answeer10Number;
    var answeeer10Number = parseInt(answeeer10, 10);
    var answeeerNumber10 = answeeer10Number * 100;
    var every10 = document.getElementById('every10');
    every10.value = answeeerNumber10;

    var asist11 = document.getElementById('asist11').value;
    var asist11Number = parseInt(asist11, 10);
    var pcut11 = document.getElementById('pcut11').value;
    var pcut11Number = parseInt(pcut11, 10);
    var count11 = document.getElementById('count11').value;
    var count11Number = parseInt(count11, 10);
    var plcut11 = document.getElementById('plcut11').value;
    var plcut11Number = parseInt(plcut11, 10);
    var hup11 = document.getElementById('hup11').value;
    var hup11Number = parseInt(hup11, 10);
    var psuc11 = document.getElementById('psuc11').value;
    var psuc11Number = parseInt(psuc11, 10);
    var pmiss11 = document.getElementById('pmiss11').value;
    var pmiss11Number = parseInt(pmiss11, 10);
    var faul11 = document.getElementById('faul11').value;
    var faul11Number = parseInt(faul11, 10);
    var pfaul11 = document.getElementById('pfaul11').value;
    var pfaul11Number = parseInt(pfaul11, 10);
    var floot11 = document.getElementById('floot11').value;
    var floot11Number = parseInt(floot11, 10);
    var flotmiss11 = document.getElementById('flotmiss11').value;
    var flotmiss11Number = parseInt(flotmiss11, 10);
    var cutin11 = document.getElementById('cutin11').value;
    var cutin11Number = parseInt(cutin11, 10);
    var bcut11 = document.getElementById('bcut11').value;
    var bcut11Number = parseInt(bcut11, 10);
    var symiss11 = document.getElementById('symiss11').value;
    var symiss11Number = parseInt(symiss11, 10);
    var answer11 = asist11Number + pcut11Number + count11Number + plcut11Number + hup11Number + psuc11Number + floot11Number + cutin11Number + bcut11Number;
    var answer11Number = parseInt(answer11, 10);
    var plus11 = document.getElementById('plus11');
    plus11.value = answer11Number;
    var answeer11 = pmiss11Number + faul11Number + pfaul11Number + flotmiss11Number + symiss11Number;
    var answeer11Number = parseInt(answeer11, 10);
    var minas11 = document.getElementById('minas11');
    minas11.value = answeer11Number;
    var answeeer11 = answer11Number - answeer11Number;
    var answeeer11Number = parseInt(answeeer11, 10);
    var answeeerNumber11 = answeeer11Number * 100;
    var every11 = document.getElementById('every11');
    every11.value = answeeerNumber11;

    var asist12 = document.getElementById('asist12').value;
    var asist12Number = parseInt(asist12, 10);
    var pcut12 = document.getElementById('pcut12').value;
    var pcut12Number = parseInt(pcut12, 10);
    var count12 = document.getElementById('count12').value;
    var count12Number = parseInt(count12, 10);
    var plcut12 = document.getElementById('plcut12').value;
    var plcut12Number = parseInt(plcut12, 10);
    var hup12 = document.getElementById('hup12').value;
    var hup12Number = parseInt(hup12, 10);
    var psuc12 = document.getElementById('psuc12').value;
    var psuc12Number = parseInt(psuc12, 10);
    var pmiss12 = document.getElementById('pmiss12').value;
    var pmiss12Number = parseInt(pmiss12, 10);
    var faul12 = document.getElementById('faul12').value;
    var faul12Number = parseInt(faul12, 10);
    var pfaul12 = document.getElementById('pfaul12').value;
    var pfaul12Number = parseInt(pfaul12, 10);
    var floot12 = document.getElementById('floot12').value;
    var floot12Number = parseInt(floot12, 10);
    var flotmiss12 = document.getElementById('flotmiss12').value;
    var flotmiss12Number = parseInt(flotmiss12, 10);
    var cutin12 = document.getElementById('cutin12').value;
    var cutin12Number = parseInt(cutin12, 10);
    var bcut12 = document.getElementById('bcut12').value;
    var bcut12Number = parseInt(bcut12, 10);
    var symiss12 = document.getElementById('symiss12').value;
    var symiss12Number = parseInt(symiss12, 10);
    var answer12 = asist12Number + pcut12Number + count12Number + plcut12Number + hup12Number + psuc12Number + floot12Number + cutin12Number + bcut12Number;
    var answer12Number = parseInt(answer12, 10);
    var plus12 = document.getElementById('plus12');
    plus12.value = answer12Number;
    var answeer12 = pmiss12Number + faul12Number + pfaul12Number + flotmiss12Number + symiss12Number;
    var answeer12Number = parseInt(answeer12, 10);
    var minas12 = document.getElementById('minas12');
    minas12.value = answeer12Number;
    var answeeer12 = answer12Number - answeer12Number;
    var answeeer12Number = parseInt(answeeer12, 10);
    var answeeerNumber12 = answeeer12Number * 100;
    var every12 = document.getElementById('every12');
    every12.value = answeeerNumber12;


    var asist13 = document.getElementById('asist13').value;
    var asist13Number = parseInt(asist13, 10);
    var pcut13 = document.getElementById('pcut13').value;
    var pcut13Number = parseInt(pcut13, 10);
    var count13 = document.getElementById('count13').value;
    var count13Number = parseInt(count13, 10);
    var plcut13 = document.getElementById('plcut13').value;
    var plcut13Number = parseInt(plcut13, 10);
    var hup13 = document.getElementById('hup13').value;
    var hup13Number = parseInt(hup13, 10);
    var psuc13 = document.getElementById('psuc13').value;
    var psuc13Number = parseInt(psuc13, 10);
    var pmiss13 = document.getElementById('pmiss13').value;
    var pmiss13Number = parseInt(pmiss13, 10);
    var faul13 = document.getElementById('faul13').value;
    var faul13Number = parseInt(faul13, 10);
    var pfaul13 = document.getElementById('pfaul13').value;
    var pfaul13Number = parseInt(pfaul13, 10);
    var floot13 = document.getElementById('floot13').value;
    var floot13Number = parseInt(floot13, 10);
    var flotmiss13 = document.getElementById('flotmiss13').value;
    var flotmiss13Number = parseInt(flotmiss13, 10);
    var cutin13 = document.getElementById('cutin13').value;
    var cutin13Number = parseInt(cutin13, 10);
    var bcut13 = document.getElementById('bcut13').value;
    var bcut13Number = parseInt(bcut13, 10);
    var symiss13 = document.getElementById('symiss13').value;
    var symiss13Number = parseInt(symiss13, 10);
    var answer13 = asist13Number + pcut13Number + count13Number + plcut13Number + hup13Number + psuc13Number + floot13Number + cutin13Number + bcut13Number;
    var answer13Number = parseInt(answer13, 10);
    var plus13 = document.getElementById('plus13');
    plus13.value = answer13Number;
    var answeer13 = pmiss13Number + faul13Number + pfaul13Number + flotmiss13Number + symiss13Number;
    var answeer13Number = parseInt(answeer13, 10);
    var minas13 = document.getElementById('minas13');
    minas13.value = answeer13Number;
    var answeeer13 = answer13Number - answeer13Number;
    var answeeer13Number = parseInt(answeeer13, 10);
    var answeeerNumber13 = answeeer13Number * 100;
    var every13 = document.getElementById('every13');
    every13.value = answeeerNumber13;

    var all = document.getElementById('all');
    var allanswer = answer1Number + answer2Number + answer3Number + answer4Number + answer5Number + answer6Number + answer7Number + answer8Number + answer9Number + answer10Number + answer11Number + answer12Number + answer13Number;
    all.value = allanswer;
    var alll = document.getElementById('alll');
    var alllanswer = answeer1Number + answeer2Number + answeer3Number + answeer4Number + answeer5Number + answeer6Number + answeer7Number + answeer8Number + answeer9Number + answeer10Number + answeer11Number + answeer12Number + answeer13Number;
    alll.value = alllanswer;
    var allll = document.getElementById('allll');
    var allllanswer = (answeeer1Number + answeeer2Number + answeeer3Number + answeeer4Number + answeeer5Number + answeeer6Number + answeeer7Number + answeeer8Number + answeeer9Number + answeeer10Number + answeeer11Number + answeeer12Number + answeeer13Number) * 100;
    allll.value = allllanswer;
};

var know = document.getElementById('know');
know.onclick = function () {
    var psuc1 = document.getElementById('psuc1').value;
    var psuc1Number = parseInt(psuc1, 10);
    var pmiss1 = document.getElementById('pmiss1').value;
    var pmiss1Number = parseInt(pmiss1, 10);
    var pass1 = document.getElementById('pass1');
    var pas1 = psuc1Number / (psuc1Number + pmiss1Number) * 100;
    pass1.value = pas1;

    var psuc2 = document.getElementById('psuc2').value;
    var psuc2Number = parseInt(psuc2, 10);
    var pmiss2 = document.getElementById('pmiss2').value;
    var pmiss2Number = parseInt(pmiss2, 10);
    var pass2 = document.getElementById('pass2');
    var pas2 = psuc2Number / (psuc2Number + pmiss2Number) * 100;
    pass2.value = pas2;

    var psuc3 = document.getElementById('psuc3').value;
    var psuc3Number = parseInt(psuc3, 10);
    var pmiss3 = document.getElementById('pmiss3').value;
    var pmiss3Number = parseInt(pmiss3, 10);
    var pass3 = document.getElementById('pass3');
    var pas3 = psuc3Number / (psuc3Number + pmiss3Number) * 100;
    pass3.value = pas3;

    var psuc4 = document.getElementById('psuc4').value;
    var psuc4Number = parseInt(psuc4, 10);
    var pmiss4 = document.getElementById('pmiss4').value;
    var pmiss4Number = parseInt(pmiss4, 10);
    var pass4 = document.getElementById('pass4');
    var pas4 = psuc4Number / (psuc4Number + pmiss4Number) * 100;
    pass4.value = pas4;

    var psuc5 = document.getElementById('psuc5').value;
    var psuc5Number = parseInt(psuc5, 10);
    var pmiss5 = document.getElementById('pmiss5').value;
    var pmiss5Number = parseInt(pmiss5, 10);
    var pass5 = document.getElementById('pass5');
    var pas5 = psuc5Number / (psuc5Number + pmiss5Number) * 100;
    pass5.value = pas5;

    var psuc6 = document.getElementById('psuc6').value;
    var psuc6Number = parseInt(psuc6, 10);
    var pmiss6 = document.getElementById('pmiss6').value;
    var pmiss6Number = parseInt(pmiss6, 10);
    var pass6 = document.getElementById('pass6');
    var pas6 = psuc6Number / (psuc6Number + pmiss6Number) * 100;
    pass6.value = pas6;

    var psuc7 = document.getElementById('psuc7').value;
    var psuc7Number = parseInt(psuc7, 10);
    var pmiss7 = document.getElementById('pmiss7').value;
    var pmiss7Number = parseInt(pmiss7, 10);
    var pass7 = document.getElementById('pass7');
    var pas7 = psuc7Number / (psuc7Number + pmiss7Number) * 100;
    pass7.value = pas7;

    var psuc8 = document.getElementById('psuc8').value;
    var psuc8Number = parseInt(psuc8, 10);
    var pmiss8 = document.getElementById('pmiss8').value;
    var pmiss8Number = parseInt(pmiss8, 10);
    var pass8 = document.getElementById('pass8');
    var pas8 = psuc8Number / (psuc8Number + pmiss8Number) * 100;
    pass8.value = pas8;

    var psuc9 = document.getElementById('psuc9').value;
    var psuc9Number = parseInt(psuc9, 10);
    var pmiss9 = document.getElementById('pmiss9').value;
    var pmiss9Number = parseInt(pmiss9, 10);
    var pass9 = document.getElementById('pass9');
    var pas9 = psuc9Number / (psuc9Number + pmiss9Number) * 100;
    pass9.value = pas9;

    var psuc10 = document.getElementById('psuc10').value;
    var psuc10Number = parseInt(psuc10, 10);
    var pmiss10 = document.getElementById('pmiss10').value;
    var pmiss10Number = parseInt(pmiss10, 10);
    var pass10 = document.getElementById('pass10');
    var pas10 = psuc10Number / (psuc10Number + pmiss10Number) * 100;
    pass10.value = pas10;

    var psuc11 = document.getElementById('psuc11').value;
    var psuc11Number = parseInt(psuc11, 10);
    var pmiss11 = document.getElementById('pmiss11').value;
    var pmiss11Number = parseInt(pmiss11, 10);
    var pass11 = document.getElementById('pass11');
    var pas11 = psuc11Number / (psuc11Number + pmiss11Number) * 100;
    pass11.value = pas11;

    var psuc12 = document.getElementById('psuc12').value;
    var psuc12Number = parseInt(psuc12, 10);
    var pmiss12 = document.getElementById('pmiss12').value;
    var pmiss12Number = parseInt(pmiss12, 10);
    var pass12 = document.getElementById('pass12');
    var pas12 = psuc12Number / (psuc12Number + pmiss12Number) * 100;
    pass12.value = pas12;

    var psuc13 = document.getElementById('psuc13').value;
    var psuc13Number = parseInt(psuc13, 10);
    var pmiss13 = document.getElementById('pmiss13').value;
    var pmiss13Number = parseInt(pmiss13, 10);
    var pass13 = document.getElementById('pass13');
    var pas13 = psuc13Number / (psuc13Number + pmiss13Number) * 100;
    pass13.value = pas13;
};

var fact = document.getElementById('fact');
fact.onclick = function () {
    var bcut1 = document.getElementById('bcut1').value;
    var bcut1Number = parseInt(bcut1, 10);
    var symiss1 = document.getElementById('symiss1').value;
    var symiss1Number = parseInt(symiss1, 10);
    var shoot1 = document.getElementById('shoot1');
    var shot1 = bcut1Number / (bcut1Number + symiss1Number) * 100;
    shoot1.value = shot1;

    var bcut2 = document.getElementById('bcut2').value;
    var bcut2Number = parseInt(bcut2, 10);
    var symiss2 = document.getElementById('symiss2').value;
    var symiss2Number = parseInt(symiss2, 10);
    var shoot2 = document.getElementById('shoot2');
    var shot2 = bcut2Number / (bcut2Number + symiss2Number) * 100;
    shoot2.value = shot2;

    var bcut3 = document.getElementById('bcut3').value;
    var bcut3Number = parseInt(bcut3, 10);
    var symiss3 = document.getElementById('symiss3').value;
    var symiss3Number = parseInt(symiss3, 10);
    var shoot3 = document.getElementById('shoot3');
    var shot3 = bcut3Number / (bcut3Number + symiss3Number) * 100;
    shoot3.value = shot3;

    var bcut4 = document.getElementById('bcut4').value;
    var bcut4Number = parseInt(bcut4, 10);
    var symiss4 = document.getElementById('symiss4').value;
    var symiss4Number = parseInt(symiss4, 10);
    var shoot4 = document.getElementById('shoot4');
    var shot4 = bcut4Number / (bcut4Number + symiss4Number) * 100;
    shoot4.value = shot4;

    var bcut5 = document.getElementById('bcut5').value;
    var bcut5Number = parseInt(bcut5, 10);
    var symiss5 = document.getElementById('symiss5').value;
    var symiss5Number = parseInt(symiss5, 10);
    var shoot5 = document.getElementById('shoot5');
    var shot5 = bcut5Number / (bcut5Number + symiss5Number) * 100;
    shoot5.value = shot5;

    var bcut6 = document.getElementById('bcut6').value;
    var bcut6Number = parseInt(bcut6, 10);
    var symiss6 = document.getElementById('symiss6').value;
    var symiss6Number = parseInt(symiss6, 10);
    var shoot6 = document.getElementById('shoot6');
    var shot6 = bcut6Number / (bcut6Number + symiss6Number) * 100;
    shoot6.value = shot6;

    var bcut7 = document.getElementById('bcut7').value;
    var bcut7Number = parseInt(bcut7, 10);
    var symiss7 = document.getElementById('symiss7').value;
    var symiss7Number = parseInt(symiss7, 10);
    var shoot7 = document.getElementById('shoot7');
    var shot7 = bcut7Number / (bcut7Number + symiss7Number) * 100;
    shoot7.value = shot7;

    var bcut8 = document.getElementById('bcut8').value;
    var bcut8Number = parseInt(bcut8, 10);
    var symiss8 = document.getElementById('symiss8').value;
    var symiss8Number = parseInt(symiss8, 10);
    var shoot8 = document.getElementById('shoot8');
    var shot8 = bcut8Number / (bcut8Number + symiss8Number) * 100;
    shoot8.value = shot8;

    var bcut9 = document.getElementById('bcut9').value;
    var bcut9Number = parseInt(bcut9, 10);
    var symiss9 = document.getElementById('symiss9').value;
    var symiss9Number = parseInt(symiss9, 10);
    var shoot9 = document.getElementById('shoot9');
    var shot9 = bcut9Number / (bcut9Number + symiss9Number) * 100;
    shoot9.value = shot9;

    var bcut10 = document.getElementById('bcut10').value;
    var bcut10Number = parseInt(bcut10, 10);
    var symiss10 = document.getElementById('symiss10').value;
    var symiss10Number = parseInt(symiss10, 10);
    var shoot10 = document.getElementById('shoot10');
    var shot10 = bcut10Number / (bcut10Number + symiss10Number) * 100;
    shoot10.value = shot10;

    var bcut11 = document.getElementById('bcut11').value;
    var bcut11Number = parseInt(bcut11, 10);
    var symiss11 = document.getElementById('symiss11').value;
    var symiss11Number = parseInt(symiss11, 10);
    var shoot11 = document.getElementById('shoot11');
    var shot11 = bcut11Number / (bcut11Number + symiss11Number) * 100;
    shoot11.value = shot11;

    var bcut12 = document.getElementById('bcut12').value;
    var bcut12Number = parseInt(bcut12, 10);
    var symiss12 = document.getElementById('symiss12').value;
    var symiss12Number = parseInt(symiss12, 10);
    var shoot12 = document.getElementById('shoot12');
    var shot12 = bcut12Number / (bcut12Number + symiss12Number) * 100;
    shoot12.value = shot12;

    var bcut13 = document.getElementById('bcut13').value;
    var bcut13Number = parseInt(bcut13, 10);
    var symiss13 = document.getElementById('symiss13').value;
    var symiss13Number = parseInt(symiss13, 10);
    var shoot13 = document.getElementById('shoot13');
    var shot13 = bcut13Number / (bcut13Number + symiss13Number) * 100;
    shoot13.value = shot13;
};
