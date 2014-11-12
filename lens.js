// MSDropDown - jquery.dd.js
// author: Marghoob Suleman - http://www.marghoobsuleman.com/
// Date: 10 Nov, 2012 
// Version: 3.5.2
// Revision: 27
// web: www.marghoobsuleman.com
/*
// msDropDown is free jQuery Plugin: you can redistribute it and/or modify
// it under the terms of the either the MIT License or the Gnu General Public License (GPL) Version 2
*/ 
;eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4 1E=1E||{};(9($){1E={3Y:{2o:\'3.5.2\'},3Z:"5D 5E",3q:20,41:9(v){6(v!==14){$(".2X").1m({1w:\'3r\',2b:\'4L\'})}1d{$(".2X").1m({1w:\'4M\',2b:\'3s\'})}},3t:\'\',3u:9(a,b,c){c=c||"42";4 d;25(c.2p()){1i"42":1i"4N":d=$(a).2o(b).1b("1V");1j}15 d}};$.3v={};$.2o={};$.2Y(11,$.3v,1E);$.2Y(11,$.2o,1E);6($.1P.1M===1B){$.1P.1M=$.1P.5F}6($.1P.18===1B){$.1P.18=$.1P.5G;$.1P.1x=$.1P.5H}6(1y $.3w.4O===\'9\'){$.3w[\':\'].43=$.3w.4O(9(b){15 9(a){15 $(a).1p().3x().3y(b.3x())>=0}})}1d{$.3w[\':\'].43=9(a,i,m){15 $(a).1p().3x().3y(m[3].3x())>=0}}9 1V(q,t){4 t=$.2Y(11,{1N:{1b:1g,1n:0,3z:1g,2c:0,1Q:14,2Z:5I},3A:\'1V\',1w:5J,1W:7,3B:0,30:11,1J:5K,26:14,3C:\'5L\',2q:\'1X\',3D:\'3r\',2d:11,1C:\'\',3E:0.7,44:11,3F:0,1u:14,3G:\'5M\',2e:\'\',2f:\'\',2g:11,1F:11,2r:11,18:{3u:1g,2G:1g,3H:1g,28:1g,1G:1g,2H:1g,2I:1g,1X:1g,45:1g,48:1g,2s:1g,2J:1g,31:1g,2t:1g,2u:1g}},t);4 u=1a;4 x={49:\'5N\',1R:\'5O\',4a:\'5P\',2h:\'5Q\',1l:\'5R\'};4 y={1V:t.3A,32:\'32\',4P:\'5S 5T\',4b:\'4b\',3I:\'3I\',2K:\'2K\',1q:\'1q\',2X:\'2X\',4Q:\'4Q\',4R:\'4R\',19:\'19\',4c:\'4c\',3J:"3J",4d:"4d",1h:"1h",33:"5U",34:\'34\',3K:\'3K\'};4 z={12:\'5V\',2v:\'2v\',4S:\'5W 4T\',3L:"3L"};4 A=14,1Y=14,1k=14,3M={},q,35={},36=14;4 B=40,4e=38,4f=37,4g=39,4U=27,4h=13,3a=47,4i=16,4j=17,4V=8,4W=46;4 C=14,2i=14,3b=1g,2L=14,3c,5X=14;4 D=3d,3e=4k.5Y.5Z,4X=3e.60(/61/i);t.2g=t.2g.2j();t.1F=t.1F.2j();4 E=9(a){15(62.4Y.2j.4Z(a)=="[50 51]")?11:14};4 F=9(){4 a=3e.3y("63");6(a>0){15 2w(3e.64(a+5,3e.3y(".",a)))}1d{15 0}};4 G=9(){t.3A=$("#"+q).1b("65")||t.3A;t.1W=$("#"+q).1b("66")||t.1W;6($("#"+q).1b("52")==14){t.30=$("#"+q).1b("52")};t.26=$("#"+q).1b("53")||t.26;t.3C=$("#"+q).1b("67")||t.3C;t.2q=$("#"+q).1b("2q")||t.2q;t.3D=$("#"+q).1b("68")||t.3D;t.2d=$("#"+q).1b("69")||t.2d;t.3E=$("#"+q).1b("6a")||t.3E;t.3F=$("#"+q).1b("54")||t.3F;t.1u=$("#"+q).1b("6b")||t.1u;t.3G=$("#"+q).1b("6c")||t.3G;t.2e=$("#"+q).1b("2e")||t.2e;t.2f=$("#"+q).1b("2f")||t.2f;t.2g=$("#"+q).1b("6d")||t.2g;t.1F=$("#"+q).1b("6e")||t.1F;t.2r=$("#"+q).1b("6f")||t.2r;t.2g=t.2g.2j();t.1F=t.1F.2j();t.2r=t.2r.2j()};4 H=9(a){6(3M[a]===1B){3M[a]=D.6g(a)}15 3M[a]};4 I=9(a){4 b=L("1l");15 $("#"+b+" 12."+z.12).1o(a)};4 J=9(){6(t.1N.1b){4 a=["1h","1D","1r"];2M{6(!q.1H){q.1H="42"+1E.3q};t.1N.1b=55(t.1N.1b);4 b="6h"+(1E.3q++);4 c={};c.1H=b;c.3z=t.1N.3z||q.1H;6(t.1N.2c>0){c.2c=t.1N.2c};c.1Q=t.1N.1Q;4 d=O("4N",c);1Z(4 i=0;i<t.1N.1b.1c;i++){4 f=t.1N.1b[i];4 g=3N 4l(f.1p,f.1f);1Z(4 p 3O f){6(p.2p()!=\'1p\'){4 h=($.6i(p.2p(),a)!=-1)?"1b-":"";g.6j(h+p,f[p])}};d.1K[i]=g};H(q.1H).1s(d);d.1n=t.1N.1n;$(d).1m({2Z:t.1N.2Z+\'2N\'});q=d}2O(e){6k"6l 6m 6n 6o 3O 6p 1b.";}}};4 K=9(){J();6(!q.1H){q.1H="6q"+(1E.3q++)};q=q.1H;u.6r=q;G();1k=H(q).2K;4 a=t.1u;6(a.2j()==="11"){H(q).1Q=11;t.1u=11};A=(H(q).2c>1||H(q).1Q==11)?11:14;6(A){1Y=H(q).1Q};56();57();1v("58",2k());1v("59",$("#"+q+" 1S:19"));4 b=L("1l");3c=$("#"+b+" 12."+y.19);6(t.2g==="11"){$("#"+q).18("2H",9(){21(1a.1n)})};H(q).4m=9(e){$("#"+q).2o().1b("1V").4m()}};4 L=9(a){15 q+x[a]};4 M=9(a){4 s=(a.1C===1B)?"":a.1C.5a;15 s};4 N=9(a){4 b=\'\',1r=\'\',1h=\'\',1f=-1,1p=\'\',1e=\'\',1z=\'\',1o;6(a!==1B){4 c=a.1r||"";6(c!=""){4 d=/^\\{.*\\}$/;4 e=d.6s(c);6(e&&t.2d){4 f=55("["+c+"]")};1r=(e&&t.2d)?f[0].1r:1r;1h=(e&&t.2d)?f[0].1h:1h;b=(e&&t.2d)?f[0].1D:c;1z=(e&&t.2d)?f[0].1z:1z;1o=a.1o};1p=a.1p||\'\';1f=a.1f||\'\';1e=a.1e||"";1r=$(a).1M("1b-1r")||$(a).1b("1r")||(1r||"");1h=$(a).1M("1b-1h")||$(a).1b("1h")||(1h||"");b=$(a).1M("1b-1D")||$(a).1b("1D")||(b||"");1z=$(a).1M("1b-1z")||$(a).1b("1z")||(1z||"");1o=$(a).1o()};4 o={1D:b,1r:1r,1h:1h,1f:1f,1p:1p,1e:1e,1z:1z,1o:1o};15 o};4 O=9(a,b,c){4 d=D.6t(a);6(b){1Z(4 i 3O b){25(i){1i"1C":d.1C.5a=b[i];1j;2P:d[i]=b[i];1j}}};6(c){d.6u=c};15 d};4 P=9(){4 a=L("49");6($("#"+a).1c==0){4 b={1C:\'1w: 4M;4n: 2x;2b: 3s;\',1e:y.2X};b.1H=a;4 c=O("2Q",b);$("#"+q).5b(c);$("#"+q).6v($("#"+a))}1d{$("#"+a).1m({1w:0,4n:\'2x\',2b:\'3s\'})};H(q).3f=-1};4 Q=9(){4 a=(t.1F=="11")?" 2R":"";4 b={1e:y.1V+" 5c"+a};4 c=M(H(q));4 w=$("#"+q).6w();b.1C="2Z: "+w+"2N;";6(c.1c>0){b.1C=b.1C+""+c};b.1H=L("1R");b.3f=H(q).3f;4 d=O("2Q",b);15 d};4 R=9(){4 a;6(H(q).1n>=0){a=H(q).1K[H(q).1n]}1d{a={1f:\'\',1p:\'\'}}4 b="",4o="";4 c=$("#"+q).1b("53");6(c){t.26=c};6(t.26!=14){b=" "+t.26;4o=" "+a.1e};4 d=(t.1F=="11")?" "+z.2v:"";4 e=O("2Q",{1e:y.32+b+d});4 f=O("2l",{1e:y.4c});4 g=O("2l",{1e:y.4P});4 h=L("4a");4 i=O("2l",{1e:y.3I+4o,1H:h});4 j=N(a);4 k=j.1D;4 l=j.1p||"";6(k!=""&&t.30){4 m=O("3P");m.4p=k;6(j.1z!=""){m.1e=j.1z+" "}};4 n=O("2l",{1e:y.33},l);e.1s(f);e.1s(g);6(m){i.1s(m)};i.1s(n);e.1s(i);4 o=O("2l",{1e:y.1h},j.1h);i.1s(o);15 e};4 S=9(){4 a=L("2h");4 b=(t.1F=="11")?"2R":"";4 c=O("2y",{1H:a,5d:\'1p\',1f:\'\',6x:\'1x\',1e:\'1p 4T \'+b,1C:\'22: 2z\'});15 c};4 T=9(a){4 b={};4 c=M(a);6(c.1c>0){b.1C=c};4 d=(a.2K)?y.2K:y.1q;d=(a.19)?(d+" "+y.19):d;d=d+" "+z.12;b.1e=d;6(t.26!=14){b.1e=d+" "+a.1e};4 e=O("12",b);4 f=N(a);6(f.1r!=""){e.1r=f.1r};4 g=f.1D;6(g!=""&&t.30){4 h=O("3P");h.4p=g;6(f.1z!=""){h.1e=f.1z+" "}};6(f.1h!=""){4 i=O("2l",{1e:y.1h},f.1h)};4 j=a.1p||"";4 k=O("2l",{1e:y.33},j);6(t.1u===11){4 l=O("2y",{5d:\'3g\',3z:q+t.3G+\'[]\',1f:a.1f||"",1e:"3g"});e.1s(l);6(t.1u===11){l.29=(a.19)?11:14}};6(h){e.1s(h)};e.1s(k);6(i){e.1s(i)}1d{6(h){h.1e=h.1e+z.3L}};4 m=O("2Q",{1e:\'6y\'});e.1s(m);15 e};4 U=9(){4 a=L("1l");4 b={1e:y.4b+" 6z "+z.4S,1H:a};6(A==14){b.1C="z-1o: "+t.1J}1d{b.1C="z-1o:1"};4 c=$("#"+q).1b("54")||t.3F;6(c){b.1C=(b.1C||"")+";2Z:"+c};4 d=O("2Q",b);4 e=O("4q");6(t.26!=14){e.1e=t.26};4 f=H(q).23;1Z(4 i=0;i<f.1c;i++){4 g=f[i];4 h;6(g.4r.2p()=="3J"){h=O("12",{1e:y.3J});4 k=O("2l",{1e:y.4d},g.33);h.1s(k);4 l=g.23;4 m=O("4q");1Z(4 j=0;j<l.1c;j++){4 n=T(l[j]);m.1s(n)};h.1s(m)}1d{h=T(g)};e.1s(h)};d.1s(e);15 d};4 V=9(a){4 b=L("1l");6(a){6(a==-1){$("#"+b).1m({1w:"3r",4n:"3r"})}1d{$("#"+b).1m("1w",a+"2N")};15 14};4 c;4 d=H(q).1K.1c;6(d>t.1W||t.1W){4 e=$("#"+b+" 12:6A");4 f=2w(e.1m("5e-6B"))+2w(e.1m("5e-2a"));6(t.3B===0){$("#"+b).1m({5f:\'2x\',22:\'3Q\'});t.3B=3h.6C(e.1w());$("#"+b).1m({5f:\'1T\'});6(!A||t.1u===11){$("#"+b).1m({22:\'2z\'})}};c=((t.3B+f)*3h.5g(t.1W,d))+3}1d 6(A){c=$("#"+q).1w()};15 c};4 W=9(){4 j=L("1l");$("#"+j).18("1X",9(e){6(1k===11)15 14;e.1U();e.2m();6(A){3R()}});$("#"+j+" 12."+y.1q).18("1X",9(e){6(e.5h.4r.2p()!=="2y"){2A(1a)}});$("#"+j+" 12."+y.1q).18("2t",9(e){6(1k===11)15 14;3c=$("#"+j+" 12."+y.19);3b=1a;e.1U();e.2m();6(t.1u===11){6(e.5h.4r.2p()==="2y"){2i=11}};6(A===11){6(1Y){6(C===11){$(1a).1t(y.19);4 a=$("#"+j+" 12."+y.19);4 b=I(1a);6(a.1c>1){4 c=$("#"+j+" 12."+z.12);4 d=I(a[0]);4 f=I(a[1]);6(b>f){d=(b);f=f+1};1Z(4 i=3h.5g(d,f);i<=3h.6D(d,f);i++){4 g=c[i];6($(g).3S(y.1q)){$(g).1t(y.19)}}}}1d 6(2i===11){$(1a).6E(y.19);6(t.1u===11){4 h=1a.4s[0];h.29=!h.29}}1d{$("#"+j+" 12."+y.19).1I(y.19);$("#"+j+" 2y:3g").1M("29",14);$(1a).1t(y.19);6(t.1u===11){1a.4s[0].29=11}}}1d{$("#"+j+" 12."+y.19).1I(y.19);$(1a).1t(y.19)}}1d{$("#"+j+" 12."+y.19).1I(y.19);$(1a).1t(y.19)}});$("#"+j+" 12."+y.1q).18("3i",9(e){6(1k===11)15 14;e.1U();e.2m();6(3b!=1g){6(1Y){$(1a).1t(y.19);6(t.1u===11){1a.4s[0].29=11}}}});$("#"+j+" 12."+y.1q).18("2s",9(e){6(1k===11)15 14;$(1a).1t(y.34)});$("#"+j+" 12."+y.1q).18("2J",9(e){6(1k===11)15 14;$("#"+j+" 12."+y.34).1I(y.34)});$("#"+j+" 12."+y.1q).18("2u",9(e){6(1k===11)15 14;e.1U();e.2m();6(t.1u===11){2i=14};4 a=$("#"+j+" 12."+y.19).1c;2L=(3c.1c!=a||a==0)?11:14;3j();3k();3R();3b=1g});6(t.44==14){$("#"+j+" 12."+z.12).18("1X",9(e){6(1k===11)15 14;2B(1a,"1X")});$("#"+j+" 12."+z.12).18("3i",9(e){6(1k===11)15 14;2B(1a,"3i")});$("#"+j+" 12."+z.12).18("2s",9(e){6(1k===11)15 14;2B(1a,"2s")});$("#"+j+" 12."+z.12).18("2J",9(e){6(1k===11)15 14;2B(1a,"2J")});$("#"+j+" 12."+z.12).18("2t",9(e){6(1k===11)15 14;2B(1a,"2t")});$("#"+j+" 12."+z.12).18("2u",9(e){6(1k===11)15 14;2B(1a,"2u")})}};4 X=9(){4 a=L("1l");$("#"+a).1x("1X");$("#"+a+" 12."+y.1q).1x("3i");$("#"+a+" 12."+y.1q).1x("1X");$("#"+a+" 12."+y.1q).1x("2s");$("#"+a+" 12."+y.1q).1x("2J");$("#"+a+" 12."+y.1q).1x("2t");$("#"+a+" 12."+y.1q).1x("2u")};4 Y=9(a,b,c){$("#"+a).1x(b,c);$("#"+a).4t(b);$("#"+a).18(b,c)};4 Z=9(){4 a=L("1R");4 b=L("2h");4 c=L("1l");$("#"+a).18(t.2q,9(e){6(1k===11)15 14;1O(t.2q);e.1U();e.2m();3T(e)});$("#"+a).18("2S",9(e){4 k=e.6F;6(!36&&(k==4h||k==4e||k==B||k==4f||k==4g||(k>=3a&&!A))){3T(e);6(k>=3a){4u()}1d{e.1U();e.6G()}}});$("#"+a).18("31",4v);$("#"+a).18("2I",4w);$("#"+b).18("2I",9(e){Y(a,"31",4v)});W();$("#"+a).18("45",5i);$("#"+a).18("48",5j);$("#"+a).18("3i",5k);$("#"+a).18("6H",5l);$("#"+a).18("2t",5m);$("#"+a).18("2u",5n)};4 4v=9(e){1O("31")};4 4w=9(e){1O("2I")};4 3U=9(){4 a=L("1R");4 b=L("1l");6(A===11&&t.1u===14){$("#"+a+" ."+y.32).3l();$("#"+b).1m({22:\'3Q\',2b:\'4L\'})}1d{6(t.1u===14){1Y=14};$("#"+a+" ."+y.32).2C();$("#"+b).1m({22:\'2z\',2b:\'3s\'});4 c=$("#"+b+" 12."+y.19)[0];$("#"+b+" 12."+y.19).1I(y.19);4 d=I($(c).1t(y.19));21(d)};V(V())};4 4x=9(){4 a=L("1R");4 b=(1k==11)?t.3E:1;6(1k===11){$("#"+a).1t(y.3K)}1d{$("#"+a).1I(y.3K)}};4 5o=9(){4 a=L("2h");6(t.2r=="11"){$("#"+a).18("2T",5p)};3U();4x()};4 57=9(){4 a=Q();4 b=R();a.1s(b);4 c=S();a.1s(c);4 d=U();a.1s(d);$("#"+q).5b(a);P();5o();Z();4 e=L("1l");6(t.2e!=\'\'){$("#"+e).2e(t.2e)};6(t.2f!=\'\'){$("#"+e).2f(t.2f)};6(1y t.18.3u=="9"){t.18.3u.24(u,1A)}};4 4y=9(b){4 c=L("1l");$("#"+c+" 12."+z.12).1I(y.19);6(t.1u===11){$("#"+c+" 12."+z.12+" 2y.3g").1M("29",14)};6(E(b)===11){1Z(4 i=0;i<b.1c;i++){4z(b[i])}}1d{4z(b)};9 4z(a){$($("#"+c+" 12."+z.12)[a]).1t(y.19);6(t.1u===11){$($("#"+c+" 12."+z.12)[a]).3m("2y.3g").1M("29","29")}}};4 4A=9(a,b){4 c=L("1l");4 d=a||$("#"+c+" 12."+y.19);1Z(4 i=0;i<d.1c;i++){4 e=(b===11)?d[i]:I(d[i]);H(q).1K[e].19="19"};21(d)};4 3j=9(){4 a=L("1l");4 b=$("#"+a+" 12."+y.19);6(1Y&&(C||2i)||2L){H(q).1n=-1};4 c;6(b.1c==0){c=-1}1d 6(b.1c>1){4A(b)}1d{c=I($("#"+a+" 12."+y.19))};6((H(q).1n!=c||2L)&&b.1c<=1){2L=14;4 e=3n("2H");H(q).1n=c;21(c);6(1y t.18.2H=="9"){4 d=2k();t.18.2H(d.1b,d.1L)};$("#"+q).4t("2H")}};4 21=9(a,b){6(a!==1B){4 c,1f,2D;6(a==-1){c=-1;1f="";2D="";2E(-1)}1d{6(1y a!="50"){4 d=H(q).1K[a];H(q).1n=a;c=a;1f=N(d);2D=(a>=0)?H(q).1K[a].1p:"";2E(1B,1f);1f=1f.1f}1d{c=(b&&b.1o)||H(q).1n;1f=(b&&b.1f)||H(q).1f;2D=(b&&b.1p)||H(q).1K[H(q).1n].1p||"";2E(c)}};1v("1n",c);1v("1f",1f);1v("2D",2D);1v("23",H(q).23);1v("58",2k());1v("59",$("#"+q+" 1S:19"))}};4 3n=9(a){4 b={2U:14,2V:14,2n:14};4 c=$("#"+q);2M{6(c.1M("18"+a)!==1g){b.2n=11;b.2U=11}}2O(e){}4 d;6(1y $.5q=="9"){d=$.5q(c[0],"4B")}1d{d=c.1b("4B")};6(d&&d[a]){b.2n=11;b.2V=11};15 b};4 3R=9(){3k();$("5r").18("1X",2A);$(3d).18("2S",4C);$(3d).18("2T",4D)};4 3k=9(){$("5r").1x("1X",2A);$(3d).1x("2S",4C);$(3d).1x("2T",4D)};4 5p=9(e){6(e.2W<3a&&e.2W!=4V&&e.2W!=4W){15 14};4 a=L("1l");4 b=L("2h");4 c=H(b).1f;6(c.1c==0){$("#"+a+" 12:2x").2C();V(V())}1d{$("#"+a+" 12").3l();4 d=$("#"+a+" 12:43(\'"+c+"\')").2C();6($("#"+a+" 12:1T").1c<=t.1W){V(-1)};6(d.1c>0&&!A||!1Y){$("#"+a+" ."+y.19).1I(y.19);$(d[0]).1t(y.19)}};6(!A){3o()}};4 4u=9(){6(t.2r=="11"){4 a=L("1R");4 b=L("2h");6($("#"+b+":2x").1c>0&&2i==14){$("#"+b+":2x").2C().6I("");Y(a,"2I",4w);H(b).31()}}};4 5s=9(){4 a=L("2h");6($("#"+a+":1T").1c>0){$("#"+a+":1T").3l();H(a).2I()}};4 4C=9(a){4 b=L("2h");4 c=L("1l");25(a.2W){1i B:1i 4g:a.1U();a.2m();5t();1j;1i 4e:1i 4f:a.1U();a.2m();5u();1j;1i 4U:1i 4h:a.1U();a.2m();2A();4 d=$("#"+c+" 12."+y.19).1c;2L=(3c.1c!=d||d==0)?11:14;3j();3k();3b=1g;1j;1i 4i:C=11;1j;1i 4j:2i=11;1j;2P:6(a.2W>=3a&&A===14){4u()};1j};6(1k===11)15 14;1O("2S")};4 4D=9(a){25(a.2W){1i 4i:C=14;1j;1i 4j:2i=14;1j};6(1k===11)15 14;1O("2T")};4 5i=9(a){6(1k===11)15 14;1O("45")};4 5j=9(a){6(1k===11)15 14;1O("48")};4 5k=9(a){6(1k===11)15 14;a.1U();1O("2s")};4 5l=9(a){6(1k===11)15 14;a.1U();1O("2J")};4 5m=9(a){6(1k===11)15 14;1O("2t")};4 5n=9(a){6(1k===11)15 14;1O("2u")};4 3V=9(a,b){4 c={2U:14,2V:14,2n:14};6($(a).1M("18"+b)!=1B){c.2n=11;c.2U=11};4 d=$(a).1b("4B");6(d&&d[b]){c.2n=11;c.2V=11};15 c};4 2B=9(a,b){6(t.44==14){4 c=H(q).1K[I(a)];6(3V(c,b).2n===11){6(3V(c,b).2U===11){c["18"+b]()};6(3V(c,b).2V===11){25(b){1i"2S":1i"2T":1j;2P:$(c).4t(b);1j}};15 14}}};4 1O=9(a){6(1y t.18[a]=="9"){t.18[a].24(1a,1A)};6(3n(a).2n===11){6(3n(a).2U===11){H(q)["18"+a]()}1d 6(3n(a).2V===11){25(a){1i"2S":1i"2T":1j;2P:$("#"+q).6J(a);1j}};15 14}};4 3W=9(a){4 b=L("1l");a=(a!==1B)?a:$("#"+b+" 12."+y.19);6(a.1c>0){4 c=2w(($(a).2b().2a));4 d=2w($("#"+b).1w());6(c>d){4 e=c+$("#"+b).3p()-(d/2);$("#"+b).5v({3p:e},5w)}}};4 5t=9(){4 b=L("1l");4 c=$("#"+b+" 12:1T."+z.12);4 d=$("#"+b+" 12:1T."+y.19);d=(d.1c==0)?c[0]:d;4 e=$("#"+b+" 12:1T."+z.12).1o(d);6((e<c.1c-1)){e=4E(e);6(e<c.1c){6(!C||!A||!1Y){$("#"+b+" ."+y.19).1I(y.19)};$(c[e]).1t(y.19);2E(e);6(A==11){3j()};3W($(c[e]))};6(!A){3o()}};9 4E(a){a=a+1;6(a>c.1c){15 a};6($(c[a]).3S(y.1q)===11){15 a};15 a=4E(a)}};4 5u=9(){4 b=L("1l");4 c=$("#"+b+" 12:1T."+y.19);4 d=$("#"+b+" 12:1T."+z.12);4 e=$("#"+b+" 12:1T."+z.12).1o(c[0]);6(e>=0){e=4F(e);6(e>=0){6(!C||!A||!1Y){$("#"+b+" ."+y.19).1I(y.19)};$(d[e]).1t(y.19);2E(e);6(A==11){3j()};6(2w(($(d[e]).2b().2a+$(d[e]).1w()))<=0){4 f=($("#"+b).3p()-$("#"+b).1w())-$(d[e]).1w();$("#"+b).5v({3p:f},5w)}};6(!A){3o()}};9 4F(a){a=a-1;6(a<0){15 a};6($(d[a]).3S(y.1q)===11){15 a};15 a=4F(a)}};4 3o=9(){4 a=L("1R");4 b=L("1l");4 c=$("#"+a).5x();4 d=$("#"+a).1w();4 e=$(4k).1w();4 f=$(4k).3p();4 g=$("#"+b).1w();4 h=$("#"+a).1w();4 i=t.3D.2p();6(((e+f)<3h.6K(g+d+c.2a)||i==\'6L\')&&i!=\'6M\'){h=g;$("#"+b).1m({2a:"-"+h+"2N",22:\'3Q\',1J:t.1J});6(t.1F=="11"){$("#"+a).1I("2R 2v").1t("3X")};4 h=$("#"+b).5x().2a;6(h<-10){$("#"+b).1m({2a:(2w($("#"+b).1m("2a"))-h+20+f)+"2N",1J:t.1J});6(t.1F=="11"){$("#"+a).1I("3X 2v").1t("2R")}}}1d{$("#"+b).1m({2a:h+"2N",1J:t.1J});6(t.1F=="11"){$("#"+a).1I("2R 3X").1t("2v")}};6(4X){6(F()<=7){$(\'2Q.5c\').1m("1J",t.1J-10);$("#"+a).1m("1J",t.1J+5)}}};4 3T=9(e){6(1k===11)15 14;4 a=L("1R");4 b=L("1l");6(!36){36=11;6(1E.3t!=\'\'){$("#"+1E.3t).1m({22:"2z"})};1E.3t=b;$("#"+b+" 12:2x").2C();3o();4 c=t.3C;6(c==""||c=="2z"){$("#"+b).1m({22:"3Q"});3W();6(1y t.18.2G=="9"){4 d=2k();t.18.2G(d.1b,d.1L)}}1d{$("#"+b)[c]("6N",9(){3W();6(1y t.18.2G=="9"){4 d=2k();t.18.2G(d.1b,d.1L)}})};3R()}1d{6(t.2q!==\'2s\'){2A()}}};4 2A=9(e){36=14;4 a=L("1R");4 b=L("1l");6(A===14||t.1u===11){$("#"+b).1m({22:"2z"});6(t.1F=="11"){$("#"+a).1I("2v 3X").1t("2R")}};3k();6(1y t.18.3H=="9"){4 d=2k();t.18.3H(d.1b,d.1L)};5s();V(V());$("#"+b).1m({1J:1});2E(H(q).1n)};4 56=9(){2M{35=$.2Y(11,{},H(q));1Z(4 i 3O 35){6(1y 35[i]!="9"){u[i]=35[i]}}}2O(e){};u.2D=(H(q).1n>=0)?H(q).1K[H(q).1n].1p:"";u.3Y=1E.3Y.2o;u.3Z=1E.3Z};4 4G=9(a){6(a!=1g&&1y a!="1B"){4 b=L("1l");4 c=N(a);4 d=$("#"+b+" 12."+z.12+":4H("+(a.1o)+")");15{1b:c,1L:d,1S:a,1o:a.1o}};15 1g};4 2k=9(){4 a=L("1l");4 b=H(q);4 c,1L,1S,1o;6(b.1n==-1){c=1g;1L=1g;1S=1g;1o=-1}1d{1L=$("#"+a+" 12."+y.19);6(1L.1c>1){4 d=[],4I=[],6O=[];1Z(4 i=0;i<1L.1c;i++){4 e=I(1L[i]);d.5y(e);4I.5y(b.1K[e])};c=d;1S=4I;1o=d}1d{1S=b.1K[b.1n];c=N(1S);1o=b.1n}};15{1b:c,1L:1L,1o:1o,1S:1S}};4 2E=9(a,b){4 c=L("4a");4 d={};6(a==-1){d.1p="&6P;";d.1e="";d.1h="";d.1D=""}1d 6(1y a!="1B"){4 e=H(q).1K[a];d=N(e)}1d{d=b};$("#"+c).3m("."+y.33).4J(d.1p);H(c).1e=y.3I+" "+d.1e;6(d.1h!=""){$("#"+c).3m("."+y.1h).4J(d.1h).2C()}1d{$("#"+c).3m("."+y.1h).4J("").3l()};4 f=$("#"+c).3m("3P");6(f.1c>0){$(f).1G()};6(d.1D!=""&&t.30){f=O("3P",{4p:d.1D});$("#"+c).2f(f);6(d.1z!=""){f.1e=d.1z+" "};6(d.1h==""){f.1e=f.1e+z.3L}}};4 1v=9(p,v){u[p]=v};4 4K=9(a,b,i){4 c=L("1l");4 d=14;25(a){1i"28":4 e=T(b||H(q).1K[i]);4 f;6(1A.1c==3){f=i}1d{f=$("#"+c+" 12."+z.12).1c-1};6(f<0||!f){$("#"+c+" 4q").2e(e)}1d{4 g=$("#"+c+" 12."+z.12)[f];$(g).6Q(e)};X();W();6(t.18.28!=1g){t.18.28.24(1a,1A)};1j;1i"1G":d=$($("#"+c+" 12."+z.12)[i]).3S(y.19);$("#"+c+" 12."+z.12+":4H("+i+")").1G();4 h=$("#"+c+" 12."+y.1q);6(d==11){6(h.1c>0){$(h[0]).1t(y.19);4 j=$("#"+c+" 12."+z.12).1o(h[0]);21(j)}};6(h.1c==0){21(-1)};6($("#"+c+" 12."+z.12).1c<t.1W&&!A){V(-1)};6(t.18.1G!=1g){t.18.1G.24(1a,1A)};1j}};1a.6R=9(){4 a=1A[0];51.4Y.6S.4Z(1A);25(a){1i"28":u.28.24(1a,1A);1j;1i"1G":u.1G.24(1a,1A);1j;2P:2M{H(q)[a].24(H(q),1A)}2O(e){};1j}};1a.28=9(){4 a,1f,1r,1D,1h;4 b=1A[0];6(1y b=="6T"){a=b;1f=a;2F=3N 4l(a,1f)}1d{a=b.1p||\'\';1f=b.1f||a;1r=b.1r||\'\';1D=b.1D||\'\';1h=b.1h||\'\';2F=3N 4l(a,1f);$(2F).1b("1h",1h);$(2F).1b("1D",1D);$(2F).1b("1r",1r)};1A[0]=2F;H(q).28.24(H(q),1A);1v("23",H(q)["23"]);1v("1c",H(q).1c);4K("28",2F,1A[1])};1a.1G=9(i){H(q).1G(i);1v("23",H(q)["23"]);1v("1c",H(q).1c);4K("1G",1B,i)};1a.5z=9(a,b){6(1y a=="1B"||1y b=="1B")15 14;a=a.2j();2M{1v(a,b)}2O(e){};25(a){1i"2c":H(q)[a]=b;6(b==0){H(q).1Q=14};A=(H(q).2c>1||H(q).1Q==11)?11:14;3U();1j;1i"1Q":H(q)[a]=b;A=(H(q).2c>1||H(q).1Q==11)?11:14;1Y=H(q).1Q;3U();1v(a,b);1j;1i"2K":H(q)[a]=b;1k=b;4x();1j;1i"1n":1i"1f":6(a=="1n"&&E(b)===11){$("#"+q+" 1S").1M("19",14);4A(b,11);4y(b)}1d{H(q)[a]=b;4y(H(q).1n);21(H(q).1n)};1j;1i"1c":4 c=L("1l");6(b<H(q).1c){H(q)[a]=b;6(b==0){$("#"+c+" 12."+z.12).1G();21(-1)}1d{$("#"+c+" 12."+z.12+":6U("+(b-1)+")").1G();6($("#"+c+" 12."+y.19).1c==0){$("#"+c+" 12."+y.1q+":4H(0)").1t(y.19)}};1v(a,b);1v("23",H(q)["23"])};1j;1i"1H":1j;2P:2M{H(q)[a]=b;1v(a,b)}2O(e){};1j}};1a.6V=9(a){15 u[a]||H(q)[a]};1a.1T=9(a){4 b=L("1R");6(a===11){$("#"+b).2C()}1d 6(a===14){$("#"+b).3l()}1d{15($("#"+b).1m("22")=="2z")?14:11}};1a.41=9(v){1E.41(v)};1a.3H=9(){2A()};1a.2G=9(){3T()};1a.5A=9(r){6(1y r=="1B"||r==0){15 14};t.1W=r;V(V())};1a.1W=1a.5A;1a.18=9(a,b){$("#"+q).18(a,b)};1a.1x=9(a,b){$("#"+q).1x(a,b)};1a.6W=1a.18;1a.6X=9(){15 2k()};1a.5B=9(){4 a=H(q).5B.24(H(q),1A);15 4G(a)};1a.5C=9(){4 a=H(q).5C.24(H(q),1A);15 4G(a)};1a.6Y=9(a){1a.5z("1f",a)};1a.6Z=9(){4 a=L("49");4 b=L("1R");$("#"+b+", #"+b+" *").1x();H(q).3f=H(b).3f;$("#"+b).1G();$("#"+q).70().71($("#"+q));$("#"+q).1b("1V",1g)};1a.4m=9(){21(H(q).1n)};K()};$.1P.2Y({3v:9(b){15 1a.72(9(){6(!$(1a).1b(\'1V\')){4 a=3N 1V(1a,b);$(1a).1b(\'1V\',a)}})}});$.1P.2o=$.1P.3v})(73);',62,438,'||||var||if|||function||||||||||||||||||||||||||||||||||||||||||||||||||||||true|li||false|return|||on|selected|this|data|length|else|className|value|null|description|case|break|isDisabled|postChildID|css|selectedIndex|index|text|enabled|title|appendChild|addClass|enableCheckbox|cy|height|off|typeof|imagecss|arguments|undefined|style|image|msBeautify|roundedCorner|remove|id|removeClass|zIndex|options|ui|prop|byJson|cn|fn|multiple|postID|option|visible|preventDefault|dd|visibleRows|click|isMultiple|for||bW|display|children|apply|switch|useSprite||add|checked|top|position|size|jsonTitle|append|prepend|reverseMode|postTitleTextID|controlHolded|toString|cw|span|stopPropagation|hasEvent|msDropdown|toLowerCase|event|enableAutoFilter|mouseover|mousedown|mouseup|borderRadiusTp|parseInt|hidden|input|none|ct|cm|show|selectedText|cx|opt|open|change|blur|mouseout|disabled|forcedTrigger|try|px|catch|default|div|borderRadius|keydown|keyup|byElement|byJQuery|keyCode|ddOutOfVision|extend|width|showIcon|focus|ddTitle|label|hover|orginial|isOpen||||ALPHABETS_START|lastTarget|oldSelected|document|ua|tabIndex|checkbox|Math|mouseenter|bV|bZ|hide|find|bX|cr|scrollTop|counter|auto|absolute|oldDiv|create|msDropDown|expr|toUpperCase|indexOf|name|mainCSS|rowHeight|animStyle|openDirection|disabledOpacity|childWidth|checkboxNameSuffix|close|ddTitleText|optgroup|disabledAll|fnone|cacheElement|new|in|img|block|bY|hasClass|cs|bP|cl|co|borderRadiusBtm|version|author||debug|dropdown|Contains|disabledOptionEvents|dblclick|||mousemove|postElementHolder|postTitleID|ddChild|divider|optgroupTitle|UP_ARROW|LEFT_ARROW|RIGHT_ARROW|ENTER|SHIFT|CONTROL|window|Option|refresh|overflow|selectedClass|src|ul|nodeName|childNodes|trigger|cb|bN|bO|bQ|bT|updateNow|bU|events|cd|ce|getNext|getPrev|cv|eq|op|html|cz|relative|0px|select|createPseudo|arrow|borderTop|noBorderTop|ddChildMore|shadow|ESCAPE|BACKSPACE|DELETE|isIE|prototype|call|object|Array|showicon|usesprite|childwidth|eval|cu|bS|uiData|selectedOptions|cssText|after|ddcommon|type|padding|visibility|min|target|cf|cg|ch|ci|cj|ck|bR|ca|_data|body|cc|cp|cq|animate|500|offset|push|set|showRows|namedItem|item|Marghoob|Suleman|attr|bind|unbind|250|120|9999|slideDown|_mscheck|_msddHolder|_msdd|_title|_titleText|_child|ddArrow|arrowoff|ddlabel|_msddli_|border|isCreated|navigator|userAgent|match|msie|Object|MSIE|substring|maincss|visiblerows|animstyle|opendirection|jsontitle|disabledopacity|enablecheckbox|checkboxnamesuffix|reversemode|roundedcorner|enableautofilter|getElementById|msdropdown|inArray|setAttribute|throw|There|is|an|error|json|msdrpdd|element|test|createElement|innerHTML|appendTo|outerWidth|autocomplete|clear|ddchild_|first|bottom|ceil|max|toggleClass|which|stopImmediatePropagation|mouseleave|val|triggerHandler|floor|alwaysup|alwaysdown|fast|ind|nbsp|before|act|shift|string|gt|get|addMyEvent|getData|setIndexByValue|destroy|parent|replaceWith|each|jQuery'.split('|'),0,{}));


function round(value, exp) {
  if (typeof exp === 'undefined' || +exp === 0)
    return Math.round(value);

  value = +value;
  exp  = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}


var crypto_data = {
    LTC: {symbol: 'LTC', name: "Litecoin", icon: chrome.extension.getURL("litecoin.png")},
    PPC: {symbol: "PPC", name: "Peercoin", icon: chrome.extension.getURL("peercoin.png")},
    DOGE: {symbol: "DOGE", name: "Dogecoin", icon: chrome.extension.getURL("dogecoin.png")},
    DRK: {symbol: "DRK", name: "Darkcoin", icon: chrome.extension.getURL("darkcoin.png")},
    BTC: {symbol: "BTC", name: "Bitcoin", icon: chrome.extension.getURL("bitcoin.png")},
    NMC: {symbol: "NMC", name: "Namecoin", icon: chrome.extension.getURL("namecoin.png")},
    FTC: {symbol: "FTC", name: "Feathercoin", icon: chrome.extension.getURL("feathercoin.png")},
    BC: {symbol: "BC", name: "Blackcoin", icon: chrome.extension.getURL("blackcoin.png")}
};

var dropdown_data = [
    {
        text: "Peercoin",
        value: 'ppc',
        selected: false,
        description: "Peercoin",
        imageSrc: chrome.extension.getURL("peercoin.png")
    },
    {
        text: "Darkcoin",
        value: 'drk',
        selected: false,
        description: "Darkcoin",
        imageSrc: chrome.extension.getURL("darkcoin.png")
    },
    {
        text: "Litecoin",
        value: 'ltc',
        selected: true,
        description: "Litecoin",
        imageSrc: chrome.extension.getURL("litecoin.png")
    },
    {
        text: "Dogecoin",
        value: 'doge',
        selected: false,
        description: "Dogecoin",
        imageSrc: chrome.extension.getURL("dogecoin.png")
    },
    {
        text: "Namecoin",
        value: 'nmc',
        selected: false,
        description: "Namecoin",
        imageSrc: chrome.extension.getURL("namecoin.png")
    },
    {
        text: "Feathercoin",
        value: 'ftc',
        selected: false,
        description: "Feathercoin",
        imageSrc: chrome.extension.getURL("feathercoin.png")
    },
    {
        text: "Blackcoin",
        value: 'bc',
        selected: false,
        description: "Blackcoin",
        imageSrc: chrome.extension.getURL("blackcoin.png")
    }
];

// Change to "//" when shapeshift.io's api supports HTTPS.
// until then, the extension will break on https pages.
var ssio_protocol = "//";

var btc_regex = /\b[13][a-km-zA-HJ-NP-Z0-9]{26,33}\b/g;

function inject_lens_icon(node) {

    var next;

    if (node.nodeType === 1) {

        // (Element node)

        if (node = node.firstChild) {
            do {
                // Recursively call inject_lens_icon
                // on each child node
                next = node.nextSibling;
                inject_lens_icon(node);
            } while(node = next);
        }

    } else if (node.nodeType === 3) {

        // (Text node)

        if (btc_regex.test(node.data)) {
            //console.log('found node with BTC addresses', node.parentNode.id);
            wrapMatchesInNode(node);
            chrome.runtime.sendMessage({address_present: true});
            inject_modal();
        }
    }
}

function show_error(msg) {
    // At any point in the process, if the shapeshift api returns any kind of error,
    // this text gets placed into the page.

    $("#shapeshift-lens-modal").html(
        "<div class='ui-state-error ui-corner-all ssio-error'>" +
            "ShapeShift.io API returned an Error:<br><br>" +
            "<span class='ui-state-error-text ssio-error-text'>" + msg + "</span>" +
        "</div>"
    );
    $("#shapeshift-lens-modal").dialog("option", "buttons", []);
}

function show_success(msg) {
    // when the enire transaction is complete bring up this page telling them
    // the transaction went successfully.

    $("#shapeshift-lens-modal").html(
        "<div class='ui-state-highlight ui-corner-all ssio-success'>" +
            "Success!<br><br>" +
            "<span class='ssio-success-text'>" + msg + "</span><br><br> " +
            "<input type='email' class='ssio-email ssio-form-control' placeholder='Enter your Email'> <input class='ssio-email-send ssio-btn' style='font-size:14px;border:0;' type='button' value='Send Receipt'>" +
            "<br><span class='ssio-email-status-msg'></span>" +
            "<br><a href='#' class='ssio-finish'>Finish</a>" +
        "</div>"
    );
    $("#shapeshift-lens-modal").dialog("option", "buttons", []);
}

function show_status(msg) {
    $("#shapeshift-lens-modal .ssio-status").html(msg);
}

function send_success_email(email, txid) {
    $.post(ssio_protocol + "shapeshift.io/mail", {
        email: email,
        txid: txid
    }).done(function (response) {
        console.log("sent email", response);
        if(response.error) {
            var to_display = response.error;
        } else {
            var to_display = response.email.message;
        }
        $('#shapeshift-lens-modal .ssio-email-status-msg').text(to_display);
    }).error(function(response) {

        if(response.error == "I'm busy right now, sorry.") {
            // iterate while busy signal until the email gets successfully sent.
            setTimeout(function() {
                send_success_email(email, txid);
            }, 3000);
        }
    });

}

var altcoin_deposit_limit = '' // defined here (globally) because it is used in a bunch of places
var spinner = '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';
var interval_id;

var already_injected = false;
function inject_modal() {
    if(already_injected) {
        return
    }
    $('body').append(
    "<div id='shapeshift-lens-modal'>" +
        "<div class='ssio-all'>" +
            "<div class='rates'>" +
                "<div class='pull-left'>Deposit Limit: <span class='ssio-limit'></span></div>" +
                "<div class='pull-right'>Exchange Rate: <span class='ssio-exchange-rate'></span></div>" +
            "</div>"+
            "<div class='ssio-panel-body'>" +
            "<div class='top-body clearfix'>" +
            "<span class='ssio-label'>Destination:</span>" +
            "<div class='ssio-form-item ssio-col-md-8'><input class='ssio-address ssio-form-control' disabled></div>" +
            "<div class='ssio-form-item ssio-col-md-4'><input class='ssio-amount ssio-form-control' data-trigger='focus' data-toggle='popover' data-placement='left' data-content='Use this to specify an exact amount of Bitcoin for the destination address (useful for paying invoices, etc)' placeholder='Amount (Optional)' disabled></div>" +
            "</div>" +
            "<div class='pay-with'><select class='ssio-currency-dropdown'>" +
                "<option value='---'>Pay with:</option>" +
                "<option value='ltc' data-image='" + chrome.extension.getURL("litecoin.png") + "'>Litecoin</option>" +
                "<option value='ppc' data-image='" + chrome.extension.getURL("peercoin.png") + "'>Peercoin</option>" +
                "<option value='doge' data-image='" + chrome.extension.getURL("dogecoin.png") + "'>Dogecoin</option>" +
                "<option value='drk' data-image='" + chrome.extension.getURL("darkcoin.png") + "'>Darkcoin</option>" +
                "<option value='nmc' data-image='" + chrome.extension.getURL("namecoin.png") + "'>Namecoin</option>" +
                "<option value='ftc' data-image='" + chrome.extension.getURL("feathercoin.png") + "'>Feathercoin</option>" +
                "<option value='bc' data-image='" + chrome.extension.getURL("blackcoin.png") + "'>Blackcoin</option>" +
            "</select></div>" +
	            "<div class='ssio-form-item last'><input class='ssio-form-control ssio-return-address' data-trigger='focus' data-toggle='popover' data-placement='left' data-content='Any deposit greater than the deposit limit will be returned only if a return address has been entered. Otherwise you must contact shapeshift.io support for any returns.' placeholder='Return Address (Optional)' disabled></div>" +
            "</div>" +
        "</div>" +
    "</div>"
    );

    function pay_button_clicked(event) {
        // This function gets fired when the pay button is clicked. It fires off
        // the "shift" api call, then starts the timers.

        $("#shapeshift-lens-modal").dialog("option", "buttons", []);

        var btc_address = $("#shapeshift-lens-modal .ssio-address").val();
        var return_address = $('#shapeshift-lens-modal .ssio-return-address').val();
        var currency = $("#shapeshift-lens-modal .ssio-currency-dropdown").val();
        var altcoin_name = crypto_data[currency.toUpperCase()].name;
        var altcoin_icon = "<img src='" + crypto_data[currency.toUpperCase()].icon + "'>";
        var bitcoin_icon = "<img src='" + crypto_data["BTC"].icon + "'>";

        var pair = currency + "_btc";
        var btc_amount = $("#shapeshift-lens-modal .ssio-amount").val()

        $("#shapeshift-lens-modal").html("Calling ShapeShift.io's API..." + spinner);

        if(btc_amount) {
            data = {withdrawal: btc_address, pair: pair, amount: btc_amount, returnAddress: return_address};
            url = "shapeshift.io/sendamount"
        } else {
            data = {withdrawal: btc_address, pair: pair};
            url = "shapeshift.io/shift"
        }

        $.post(ssio_protocol + url, data).done(function(response) {
            // This gets executed when the call to the API to get the deposit
            // address.

            if(response.error) {
                show_error(response.error);
                return;
            }
            //console.log(response);

            var amount = null;
            var expiration = null;
			var seconds_remaining = null;
            if(response.success) {
                // response came from call to 'sendamount'
                var deposit = response.success.deposit;
                var amount = response.success.depositAmount;
                expiration = response.success.expiration;
            } else {
                // response came from call to 'shift'
                var deposit = response.deposit;
            }

            var deposit_type = response.depositType;

            if(amount) {
                var show_amount = "<b>" + amount + "</b> ";
            } else {
                var show_amount = "up to <b>" + altcoin_deposit_limit + "</b>";
            }

            var final_modal = "<span class='ssio-deposit'>" +
                "Send " + show_amount + " " + altcoin_icon + " " + altcoin_name +
                " to <br>" + "<span class='depo-address'>" + deposit + "</span>" +
                "</span>" +
                "<div id='ssio-qrcode'></div>" +
                "<br>" +
                "<span class='ssio-recipient'>It will be converted into " + bitcoin_icon + " Bitcoin, and sent to<br>" + "<span class='depo-address'>" + btc_address + "</span>";

            if(amount) {
                final_modal += "<br> as <b>" + btc_amount + "</b> BTC";
            }

            final_modal += "</span><div class='ssio-status-outer'><div class='ssio-status ssio-pull-left'></div><div class='ssio-timer ssio-pull-right'></div></div>"

            $("#shapeshift-lens-modal").html(final_modal);

			var qrstring = deposit;
			if(amount)
			{
				qrstring = altcoin_name.toLowerCase()+":"+deposit+"?amount="+amount;
			}
            new QRCode(document.getElementById("ssio-qrcode"), qrstring);

            var ticks = 0;
            interval_id = setInterval(function() {

                if(ticks % 8 == 0) {
                    // every eight seconds get the current status of any deposits.
                    // by making a call to shapeshift's api
                    $.get(ssio_protocol + "shapeshift.io/txStat/" + deposit, {timeout: 4500}).done(function(response) {
                        var status = response.status;

                        if(status == 'no_deposits') {
                            show_status("Status: Awaiting Your " + altcoin_name + " " + spinner);
                        } else if (status == 'received') {
                            show_status("Status: Payment Received, waiting for confirmation. " + spinner);
                            expiration = null;
                        } else if (status == 'complete') {
                            console.log(response);
                            var in_type = response.incomingType;
                            var incoming = response.incomingCoin;
                            var outgoing = response.outgoingCoin;
                            var withdraw = response.withdraw;
                            var txid = response.transaction;

                            show_success("<div class='ssio-in-out'>" + incoming + " " + altcoin_icon + " " + in_type + " was converted to " + outgoing + " " + bitcoin_icon + " BTC and sent to " + "<strong>" + withdraw + "</strong></div>");

                            $('.ssio-email-send').click(function() {
                                var email = $("#shapeshift-lens-modal .ssio-email").val();
                                send_success_email(email, txid);
                            });
                            clearInterval(interval_id);
                            expiration = null;
                            return
                        } else if (status == 'failed') {
                            show_error("ShapeShift.io API returned an error: " + response.error);
                            clearInterval(interval_id); //halt ticking process
                            return
                        }
                    });
						
                }
				
				$.get(ssio_protocol + "shapeshift.io/timeremaining/" + deposit, {timeout: 4500}).done(function(response) {
                        
						seconds_remaining = response.seconds_remaining;
                    });

                if (seconds_remaining || expiration) {
					
                    var seconds = seconds_remaining ? seconds_remaining : ((expiration - new Date()) / 1000).toFixed(0);
					var timeText = ""
					var sec = 0;
					if(seconds > 59)
					{
						var min = Math.floor(seconds / 60);
						sec = seconds - (min * 60);

						if(sec < 10)
						{
							sec = "0"+sec;
						}

						timeText = min+":"+sec;
					}
					else
					{
						if(seconds < 10)
						{
							sec = "0"+seconds;
						}

						timeText ="0:"+sec;
					}
					
                    if(seconds > 0) {
                        $("#shapeshift-lens-modal .ssio-timer").text(timeText + " until expiration");
                    } else {
                        show_error("Time Expired! Please try again.");
                        clearInterval(interval_id);
                        return
                    }
                } else {
                    $("#shapeshift-lens-modal .ssio-timer").text('');
                }

                ticks++;
            }, 1000);

        }).error(function(response) {
            if(response.error) {
                show_error(response.error);
                return;
            }
        });
    }

    $('#shapeshift-lens-modal .ssio-currency-dropdown').change(function(event) {
        $('#shapeshift-lens-modal .pay-with').fadeOut();
        if($(this).val() !== '---') {
	        // When the user selects which currency they want to pay with,
	        // show the further options, and make the pay button appear.
	        $('.ssio-limit, .ssio-exchange-rate').fadeIn();
	        var altcoin_symbol = $(this).val();
	        var pair = "btc_" + altcoin_symbol;
	
	        $("#shapeshift-lens-modal .ssio-exchange-rate").html(spinner);
	        $("#shapeshift-lens-modal .ssio-limit").html(spinner);
			
	        $('#shapeshift-lens-modal .ssio-more-options').show();
	
	        $.get(ssio_protocol + "shapeshift.io/rate/" + pair, function(response) {
	            if(response.error) {
	                show_error("ShapeShift API returned an error: " + response.error);
	                return;
	            }
	            var rate = response.rate;
	            var formatted_rate = round(rate, 2);
	            $("#shapeshift-lens-modal .ssio-exchange-rate").text("1 BTC = " + formatted_rate + " " + altcoin_symbol.toUpperCase());
	
	            $.get(ssio_protocol + "shapeshift.io/limit/" + pair, function(response) {
	                if(response.error) {
	                    show_error(response.error);
	                    return;
	                }
	                var btc_deposit_limit = response.limit;
	                altcoin_deposit_limit = (btc_deposit_limit * rate).toFixed(4);
	
	                $("#shapeshift-lens-modal .ssio-limit").text(altcoin_deposit_limit + " " + altcoin_symbol.toUpperCase());
	                $('#shapeshift-lens-modal .ssio-panel-body').addClass('ssio-active');
	                $('#shapeshift-lens-modal .pay-with').fadeIn();
	                $("#shapeshift-lens-modal .ssio-panel-body input").removeAttr("disabled");
	            }).error(function(response) {
	                show_error("General Ajax failure");
	            });
	
	        }).error(function(response) {
	            show_error("General Ajax failure");
	        });
	
	        $("#shapeshift-lens-modal").dialog("option", "buttons",
	            [ {text: "Cancel", click: function() {$(this).dialog('close');}}, { text: "Pay", click: pay_button_clicked }]
	        );
        };
        if($(this).val() == '---') {
	        $('.ssio-limit, .ssio-exchange-rate').hide();
	        $("#shapeshift-lens-modal .ssio-panel-body input").attr("disabled", "disabled");
	        $('.ssio-panel-body').removeClass('ssio-active');
	        $('#shapeshift-lens-modal .pay-with').fadeIn();
        }
    });

    already_injected = true; // only inject once
}

icon_url = chrome.extension.getURL("19x19_2.png");

function wrapMatchesInNode(textNode) {

    var temp = document.createElement('div');

    temp.innerHTML = textNode.data.replace(btc_regex, '$&<a class="shapeshift-lens-link" href="#" data-address="$&"><img title="Click to send altcoins to this BTC address" src="' + icon_url + '"></a> ');

    // temp.innerHTML is now:
    // "\n    This order's reference number is <a href="/order/RF83297">RF83297</a>.\n"
    // |_______________________________________|__________________________________|___|
    //                     |                                      |                 |
    //                 TEXT NODE                             ELEMENT NODE       TEXT NODE

    // Extract produced nodes and insert them
    // before original textNode:
    while (temp.firstChild) {
        textNode.parentNode.insertBefore(temp.firstChild, textNode);
    }

    // Remove original text-node:
    textNode.parentNode.removeChild(textNode);
}

inject_lens_icon(document.body);
//document.body.addEventListener("DOMNodeInserted", function(event) { inject_lens_icon(event.target); }, false);
//document.body.addEventListener("DOMCharacterDataModified", function(event) { inject_lens_icon(event.target); }, false);

$(function() {
	
    $("body").on("click", '.shapeshift-lens-link', function(event) {
        // When the user clicks on one of the fox icons embedded on the page,
        // this function gets called which launches the modal.
        event.preventDefault();
        var address = $(this).data('address');
        //chrome.runtime.sendMessage({clicked_address: address});
        $("#shapeshift-lens-modal select").msDropDown();
        $("#shapeshift-lens-modal .ssio-address").val(address);
        $("#shapeshift-lens-modal").dialog({
            show: { effect: "fade", duration: 300 },
            dialogClass: 'ssio-dialog',
            width: "600px",
            title: "ShapeShift Lens",
            close: function(event) {
                $("#shapeshift-lens-modal").remove();
                already_injected = false;
                inject_modal();
                clearInterval(interval_id);
            }
        });

        $("body").on("click", ".ssio-finish", function (event) {
            event.preventDefault();
            $("#shapeshift-lens-modal").dialog("close");
        });
        //show_success("induced success");
        $('input[data-toggle="popover"').focus(function(){

        });
		$('input[data-toggle="popover"').on('blur', function(){
		   $('.ssio-popover').fadeOut().remove();
		}).on('focus', function(){
		  	var width = $(this).width() + 10;
	        var content = $(this).attr('data-content');
	        $('<div role="tooltip" class="ssio-popover right" id="popover83172" style="display: none; left:' + width + 'px;"><div class="arrow"></div><div class="popover-content">' + content + '</div></div>').insertAfter(this).fadeIn();
	        var popHeight = $('.ssio-popover').height() + 5;
	        $('.ssio-popover').css({top: '50%', 'margin-top': -popHeight / 2});
		});
    });

});
