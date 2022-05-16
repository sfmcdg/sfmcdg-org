export default `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Matt Cameron and the Salesforce Marketing Cloud Developers Group">
    <title>Salesforce Marketing Cloud Groups</title>

    <link rel="canonical" href="https://sfmcdg.org">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/markdown-it@12.3.0/dist/markdown-it.min.js" integrity="sha256-eQL8iasXjEyQisOn3k1ftQppf1aGpW+frOj9XSMH8Wg=" crossorigin="anonymous"></script>

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .inactive {text-decoration: underline;}

    </style>


  </head>
  <body>


    <div class="container py-3">

      <header>
        <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center text-dark text-decoration-none">


      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">  <image id="image0" width="64" height="64" x="0" y="0"
    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAABdmlDQ1BpY2MAACiRpZCxSwJRHMe/
aqGU4VBEQ8MN0hAKYhCNZYMQImIGWS3neafBnR53SkRjQ6uDS0VLFv0HtUX/QBAE1dRQzQ0FEYRc
3+cJQujUO977ffi+3/fde1/A29AVwx6KAUalZmWTCWk9vyH5XxBACJOYR0xWbHMpk0lh4Ph6gEfU
+6g4a3Bf3zFaVG0F8ATIC4pp1ciL5PROzRTcIE8oZblIPiNHLF6QfCf0gstvgksufwu2ctllwBsk
SyWXI4ILLou3SErZMsg6OWzodaV7H/GSoFpZW2Wd7kwbWSSRgIQC6tiGjhqirBVm1t8X7/jSqNKj
cDWxC4uOEsr0RqjWearKqlFX+ens4BDZ/83U1ubi7h+CK8Dwq+N8zgL+Y6B94Dg/p47TbgG+J+Cm
2fNXm4zznXqjp4VPgNA+cHnd0wrnwBUznno2ZUvuSD5Or6YBHxfAWB4YZ9Yjm//dd/Pu7qP1COT2
gNQtcHgEzLA/tPULmRN051zQrM8AAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgA
ABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAd0SU1FB+UMGBYYHrq/yBgAABsJSURBVGjepXpn
cJ7XdeZz7r1v+SrwoRAASQisIClS7KREkaJFFVMUZceW3CTvxlpFiZ2Ndz07mSQz+2N3MpPZ9WzW
yezam4wdW7bjktixrFiWKdGSLFGFTewdAEESYEEvX3/bvWd/vB9AiFTj7h38w/ude8pz6j3EzLiV
U/uaOTKahQoJRSAPXPTRNYCewerl0fxIsTpZqYYBR9oAsJS0LapP2o2ZVHtzZnFLqrMVC1zUARnA
Bow2liQBuiVO4kO3JAADBggBDQRAFegaDA519Z26NNg/XpwMqAorUq6WioUNUixIMBgGRpMJpI5U
5CUQ1tk8L5dZPr91w9IFi1pkErAABdiAwK3JURMgFuL9f2kAACJkRIQqcNngtePje4539Q5NeFqQ
nSTLZmmBZARiEkwCEEwgrv2c2BAbyYZgSIccBhxUkxbNb667Z9WibasaOwQSgGIougUZPpIADBNB
+EAIDIR4cf/Fl4+e6y8Z361jN8OkmJmZFYwCkwlN6JkwEEYzMxEZEiSUsGyyHU1SQ2oGkSRiYkNe
0a6Od2Tkg2s6d9y1sMWCDTgM66OJcQOEapq+ATYRm4DECPDSyfwv3jjaN1mVqSysRAgZgQAiIgWw
V5BeocnhOVm3rSHTnE2mEq4BFYrl4cnSlYnitaJfhKPdLNspY2r3KhgLGmGVy8X2nP3Y1rXbV9S3
ADZD0Qfj4sMEYCBiBIQA6C7gu785sO/CoJdu1TOul8w2RVwtqbDSObdxy4rO1Yvq5mWQAtQUIQ1E
wDjQPYKDZy8fOHXxar5KyTpWbgBhQAAEQ0gSfskpD901v/kPHrl7SRbOlBj04QK8F4YiIARKwPPd
1Wde2DMWKqRzIVQEAYCZhRCO8VVhcEVL+vPb1m9ckEoCClAzKE0TNkAAhMC4xsuHLv/r/tNXqhKZ
Zg+WYFPjBtomjdJEo2WeeuRjn+h0MlP+fWsCMKABDygCP3i956d7z1ZTLbBS4QxzKRgVVpL+5Ge2
rPnc5tZZQBIgzYJYiOsgnCbMzAasSRigDPQE+N4Lx98+d42zzQHbGmBRu94ikmHVKQ4+sfn2L21b
mAFcQL4Plt47jEaAD4wC33jh3O4TF0R2lkfKQAKiFlKIbL/QymNffXT71nl2GlCA824o0k3uNK2a
EIiAPPCjt/p+vueYVzenKtxpTgRDMDsITH7o46vn/+kjtzcBzrvtEIcHZqY4gBDR9AUG8IBR4G+f
PbSra5RzcwITfy6YmYgVjAq9RpP/i8cfvLuNUoALjtMQT7EfgGdCV94EZQbKQBH42TtD333lcJhp
CWHpKTYEg8BSEk1cfnjJrP/02PpYhpvtIMCYSVkDPqMIfOOFc7u6RmV9S2QYIGIwayJmgs1hXXXo
a4/dd3cbJQEHmE6iBEQcK5iKwDgwCZSAkBAB2mDa3AS4QB3whQ0tj961TBUGbYquW5CgiQLDIte2
q2v0f/76bGEqgd5w3uUeDARAmfDMqz0vHbvIjXM9w9OqJCIBloApjnz23jUf61DJGPczhA+BgDBi
8OaxqycvXBkrloUQsxvrNt2+eN2CdFrUkEZTdyuAgSe3ze8fGNp3NS9TTXoGopmoaqSdm7P7xIXZ
afn0ts7UTUYgYwwRAYYhIkaJ8GxX5X//8tUg3eoLx0yrlojYSGj4xVVNzt/8/p2zABuQuK5UD6gC
B67qb/3q9d58AGGxVMwsdGTp4K7O2V/71JoOCy6gZoA2YPiEoxP402deHrMbWFhmZjwBiE2SQ1Ua
+A+fvu8zS1NphkUxTgUzi5gQM8fK68rjB7ve9FMtobBnch8HTRc6HeYfu3dDPeAYI2doIlb/4SF8
/ce/Pl+xglyHl2n1UrP8dItfN7uaa9/TM/T1f3x1EAiBae4BWASXsSyH+9csscrjjtA3OD5BeKT8
VMsPX3zr3CQCQsi18EBEYopFGQJjwPd2HRgNpFauAV1XriAi6MCvjg+sakncc5uwgOlYSVOOWwS+
s+utQVFnklmtNTPDaBhtjNEMO9dyaKDy49cv+YDhmfxBErvAIxtva0beFMdYR0IICDntD0xCK3c0
kN/btX8M8GdgSMTQDxkB8JsTk/svDslMQ8hkAAEoGJd9lR9Mla4uTemtC5o/t2VNHWC9W0mBQQQc
7Jo4M5APUw2RkTdH56oROtv6+onzQz40wTCux02QDSxN4wtbVm2YnZpnVZyJK3Zl1KVQQAMwoJAJ
6dyBC0O/PjYeACHXtKviuGkIgwGee/OYl5xlOBadBIwMyqko/7ElrdvvXLGszYrL95tToxbwgCPn
+yKymJQhQyDBNf3FHBiQshKjkyOnLo23L2mwAHsKSAasQGnGk1sWP7Fl8UiEI72FF/YfP3RtSGWa
IqqVGyGUTrc89/aJbcvvTVoQgIw5CQAPeHHf+Ut5L8o1GcMCLMGyOjHX5S9/bsc9c5AGHMAYYyBY
IKx5Ug0/BPjAlZEJsq57zs1HkwyhrgyNRUsapoHOgGZigBhSIyORVGhdkr1zyT0/Pzz+898dKFv1
kZU2jIiEctL9E5O79p1/auuiJEMSBJgN0B/i5RPnKZE2hgGW0MIvLEjTf3tq24NzkAYsQDMgRChQ
ASJCAOgZlUII+GEEuu7Yhmrqv+Hky54GmGq/jRia4BM8gUhBE4jZAhqBP1jX8Ge/tzUTFKTx488j
wyKZeeVYT18ETTDGqEhzoOjVE+OXChFyyVgTIvKauPQfP7+jM4mkNkoKH6gSesZ478lzpUp18Zy2
zSvbGqmWHeOgbitpTHQDuzPTfBzNUm5i2u8jICBcKGPvsfMjExOzW5ruWTm/1SEHSAGOxoOdqWv3
3/nMb/dTtlXHV1mJ/vzka8dH561rcgkKSnjAWyd6gkQDWBKgSFKl+NjHVqzPwWIoKeLi4keHh3/y
6oGSsRiCDg+sOVr3X5/Y0m7XkpEFzKpP83CeiGb678yIydpIYHZTVgHECAk+sP9K9b///NVrnhBC
0bFrv9jf89XPfnxrKyw2SgoX+Ny6+jPn6t68lke6mdiELOHm3jzZ+4V1TWkSIgDODoS9I5PsZhhS
Ekzkt9Yltq9vz8S4BzRwuK/0/V1vTybbgrq5ft2cqHnBwcsT/7rnlBdDi+EAKxbeZulIwbxngSgJ
0gQ5RyybP8sGLIIG8sAPf7PnWpSMmuZ79e1R44Iez/4/z+4ei8AkCFBAHbBz00plPGkMM0cQ7GYu
DE+evRYEgCgCh7sveZqYhAZLMHnFO+bPmWWDmBVBAxXg7RPdgUoZ6UaGtdah0SqROdU3UAVAUIAL
bLy9tbXOhV+yiGck6CkBoEV5ZM3CtvY0JEAGGuidQN9kVSXSOoxYR5FhmW68kveP9o76gGZYgAus
WpCam8uYqBpHPyZRjXC4+1IREHng1KVBWO5UZ2Qs7XW2tylAgWPza2CsWIa0NNfyH5NgqaqaPYAB
BZYGLQqf3rzaLg259K5sSoYV4ITVFqp85t4VDiAZDA2g4CFgOR24mEQIEZI1NlmKg7sAJJssMLel
gUI/hiczkZ04c2moAIgLHvrGi2TZMDrGqU2muT4hcT1hSiCZsJg1RPx7jtmypbDiQQiRFHCAz67O
7Vw+1x+7Kgk1goAgCO1RcfgPP75pTT0sgAiSBAFJu1bYxKqqUSZKu45AfBuIBQGN2TR0QLXAoMmy
+yaKvR5E9yDyAbG0pn1OgpW67n+CoYDlC9plWHKgJYEINhhBaW5DJjEj2thAPfAnn1p7/9qlqExY
Ux2WMKEb5J/6xH0Pr56VmNH3SKA9h0ZXyCiIsSGZbe3VSd3Z0aaAKQIQgFJqqmUHAJbWZEDdgxA9
g9UqrKn4zQBCFvmyNqgByCK4wL0r5yxrqzf5IYlQgSkoZMl/+K7VKUAYBgwRSUAy6oCv7ly8rCkB
vwohSSpdze9c2/noqoyakcKJiBhtAg+tX8rFMTKhANsU0cTlB9d0zq+H4LhyNszaAMVSBWQBkLXO
SVRhdQ9UxOXRfKTcaAqFmoRPqu/asAYMBAMEKHAd4auP37uwKcWRDw4zwnz58U8tn+0ohiWIISLA
AyoEDxgJ4HleXO0xsxBqIl8MgAioAt5UBrQJDvDJzYseuX+rCKqKYPzyfas7f/+BxQ7iuZBhCCOk
D1wdmYCyzVQLqUlEyr08mhcjxaqWimtlKRmW2k6d6L1SjdsigKeguSiJT917l/E8EwQLW3KbOiAB
QTBsQoYP5IEjeXz3wNhf/mDfpYrUlgOjjYmQrHvt/PBf/PTEz0975yOU477HwDAIcIAHNjXUWcYE
1awtv/jQ7Y0AGTAzQ4RASLgwir6RCbJThmGoFkW0VOMlT9bt+HIQMUhwbASGUHZhbGhhW8ttDQ6A
EPCIikD3JF7ad7K/ECnbNoVRS1vtuWzKIY+oTDg0qJ956Z0fv3J0X+9gHkl2MxHXGjkGwU4OTZYO
nzp98FjvaMHkWptcB4bAQM9A+dk953uH83BSUeBlWLa1ZB0LhogBHygBP3vz7NGrBZ2oM6jldQKD
hAFk/Y5/r5mnLBD3jwTo4aGBtWs6XCAAXr4U/q/fHPnpntPn8xG7WQGKfH+o/+L9G5c5No4X8a3d
p7//8uGzkxwkGjiZMcKucT9V7TEglCXcdN5Yx/uH9xy/MKmTre2ZBOFk39g/vnIwzLQGUFo6Jy9e
eeVIb/eYn5vdXG8jAvaN4PsvvRMkG8Na1RI7Z0xYyOxDXyEQz6i6GLAsOTo2MVGmhYsafrjr5DO7
D/T7VpBojKyUASkYDipPP7lzXgP+5a2Lf/f83pMjlSDdErjZeOxlbpqmADCgCDKStknUVVme6jp/
7MyVRP2sFcsaRqz20xcuSzcdQRonVRV275XBvYdOprLNojn51z/dO6RtrZIGVCtMCIKImACied88
AUCDZxYtktlCSJGXS9gT+UlK5kKyNMiAIIgr+buXzt15f8dP//nwhasjIpOLlBOxMB84xpxR1Qlh
Ikcw+SXyips2rtl8d+t3fvzOSJVCaQuhyGgltAiqVlROpTJjnmE7GXcU0xUhAMGCiGjx358OonAa
QtNHMIgo0qFSKp4UxL9kgggrS1vqRoaHJ0Ipk/WRNub6TOijTJTj+RJJsCTjFyfmtdQb0JW8DyvB
NTCYeAgSai2lMiBicwMVMmwppWyLgkALSTfozxADTFJNzzlqaZJZWG7XQMFSaXKtSBsWFIeMGTZ8
P2F4ijkAHDeLTrahP+8BIOUYrhVRzASwRm1KSWymxJ7uQhnQjm2pbNItF/OkLDCYWYJALMCKYvrC
cE02RRBsQAYsyHHiqZ4gjmdjBpIJmiHAikwczzQDTMwsBQnSAgZAaOLnj/hLgtG2bTNBG5JMGrVq
QsTEiQUiQGgizdetQEQwQX2yXjVnEsPXImYDCAkisDQmqhZNVBGStJHCTQrHNZE2lQJxVMOfEBpk
JbNhGJqgAoDdDNkJASIT6tIkwWhhWcmsJiWlgFcyQUUi0obZTslEhsmw74VeRXIE4pAknLS004Jr
fZwgIPR0tSARGSZtp0UiQyRqeGZDUdiQdtXcxmxX5DHScStlad8N8huWL1q2qF0JGhsvHDrd3T0y
PntW04P33G1rTzMBYBIRyVf2H+lctmjJrHoGDnT3n708JKXdlLS2b96syBQi+do7x0pRGFXKi5sz
G+/Y0JjL+EF07Gzv8Z6LvnSXLl6wbsFcqf1IqlLVO9t9sffqkE7WayiFyFTyc3Lu5i1bbpuTKFdw
4HjPsZ6LOtGopQ1AshGR195UpzrbknsRVliDJAnISv6PH1yzc01jBAjARn3pzo1/9auuwsTkk2vc
FNxoqhCoAmfeqd6/rHXbXACY29D5rfPnfMgtq9Y+udZVwABw5mAhzE/u2LT+yw/Mz9R+qD6/bMmv
DrjfeeHN1e0bPnuHICQ8gGC5G1f+9tjEd18+rBMZlAobOtu/+ujSNDDEsAgPLVy8+9Ts7758REvL
AATtcrC4Nak6W1Fnc1WH0rJD31s+u/mRNY1p4JX9J0OmdStXiBQmR0dcQWnA0fxO1+VSxCSULy1d
mXSiIAsbwLq5mJ+ha2MTm5e25QABTDJUeWz9bc1PPzA/BQyMh4fO9s5p71h9W2LHnR1vnLkSlUs2
Ut/45j9d8aTtJh+5Z+0Dq2dfra7/9cuvLWrOfuXRpWUPf/ejXf2jRWGpzz38QEdHnW3bJWNISoqi
nIPFLVALXXQ0ZAZGAuFkoP2GbE4BmnH+ysDBMxd+ufeU0zy3ayC/ZsEcBjxNP/jV7mvlQCo7kiqA
LW1bA6TRLLF6bs4JCne0ohZKCDLyH1qzJA2cLuCvf7BroMzKuvDFT27PT473XBtdcsdKDxiO7H6d
0EHi0vNvJjo+/9Cm+gO7J+9ffnsW+C+/eOfkEDupVt/3/+ZXb2tp+VYdOQoAgqCjObMoCVUPrOxo
3Xf1AgAl7YGR8QmgifD4Zz6+A7g4iN/uPa4wThwRoGz88df+sCRACqUKvvmdZ0ODCOjvu7pgwZy1
i9tT0qSB3r7BuR2tGkg5akFrTgF7jvT1VYVqnleM9DMvvmVpLzBkyNJAZCWryAg3GwTBwZND/3Zr
y7xconN2Y0mjZ3BSZ5vTSaulgYgjo9zBUlQKtZDKhJUVHQvqAJUG1nXOSx24UNBG2Im+ibG/3931
pe1LckAT0NaK9Y+ush1r9NoVCVhAexIVwADlLCwibdgDdfddUans6uUdC+e0EnDkTPesjlYNCEG2
FAAKlYqw3EBHkFYgHcu2oSen04tgRGwEiYoXCcC1rISlogCAkGH1Tz6zcXU9FBABf/n8xf3d11Qy
lRRm7dL5GUBZjM7Z1vxZ9ScnSuy4SqnjJ8781YmDt3fMWT63ZdPS2+obMnevvH33QJ8AKhG+/dwb
IwFIWhGLsh+yJAMUPP/Ima5HWtY31js9/aN9AyPx2KsahmNlr74xsbRj9u/2H3Vtq+qF8+c0VwqF
Ia8iSQOwBNukbYq0V5w/u0kDQ4Xq8GRlRUd91gKF3r43Tl6U3oKs2nLPGtuEFiLhl+a11C9tsyyG
EDAJYMvKhQlvzOUgRdF/fvrTj927qf/y1V+++ErXhX49I6lWgYPXSr/r93532dt3uVSBE8PdqMQ7
5y4VgTJw+FxfIahlnKqmQz39EfDQ8rovbV4yTw/f35H4H4+v/tuvbF3WltNBVQFhcZwLwzzct2F2
cucK5/Qo+so4cP4qAzvvWiULw28cOfezVw8dOtMbAgwhOXK8ia0rO11AGFYCbAPbVjW9tld2FSbu
2rT+thyWbFi0ZsMiDTQCZeD4+f4y2xWgohCkmgNpk7ShPZSCUMIHTLL+9MCJ8yHmWNjXfTmdro+f
9ZHMvfRO1+K1q1bm8Pj2dTu2r7OBNDAcoVguQVgAPn7/fSPGyeVy93bKKvCz3xyNsq17zw8s6cP2
O5samv7N4XOXmnLZT2xsLANjZU8YMzctt61qcgApoEAkgA6F+1Z19r517ui5i/+clh9bnZtlwQIG
gTdOlX998EzH3DlXgXwEzwhjjBBaEyDtyRBFYExkBrTzejduX4Az4/7yxvYJYNSgaNUNB+7Xf7zn
iw9t3rhYZYAAeHsEP3n+rb6iXi0cD9iyYY6JbXsVz+0+2D1eVckGL0x9+7k9Ew9uvm+5unPhfANc
ruInz528MFwUrLetXNyhIOPG2rA2EBFwIcDX/uF3V6tEYbUhabXVuVLSWNG/VvCCZKMlqEUGzDyo
3apwDUiyttnPWkgJHfjhRCSEnbAFRdWiK5F07Agy70e+TBoduJWRuXWJprRTDc3FsYqnkqwcV5om
4amwQkTlkEd98p00O3UhkyIhddUpj8zOWK3ZZCXQlyYqZShhJVss/1t/tG2BBSt+L2PmeKWgRPin
4xPffv510TC7HIEjH4CQFlmObwiAZQIDsHKjWmEIYTRYy7hUlCouqxWB4jk8wFIZUgKsOEIU6CiQ
0hLK0aQiMFhLHQo2gAFJspyIlGbEtaNktkTEvocoZEHSTrgCZnLgjx7Z8sSqhszUu62KI5lFZAGP
rModOd321uWyycyKrFS8LMPMcYPlKwuoTbviyllLBSiNqYpXyvidM65339WLkQ3LhkMRg5kEw5AB
yUi68fNhba/FGCKKGw9NFMEi1yaGADPYKw5vntf8yVUNDq6/OgvAxI2KzWgAnt55V6MVybAqjIHh
d41pbxr4E8d/5qZuQ8yUgKfOFEFjaGo5gg2Mrq38TLVscdtU2zUyTIZhtIy8Jls/vXNTI2ABNDXk
mn7kI4vgMDrr8NTDW53ykINAvrsh+YDdrg9e+6Kpg1s8Ux0wJ6Dt0uCXdmxZWg+bYc0Y0cWqEgwT
tywu8Mml7uObOnV+KH7AiTkE4m7IfNBN/+9n5jRbACK2LTMLsBIU5gef2LT0U0tTU+C5buGZrbAB
YDFSwJPbOh+6Yx5NXHYQCfCtMfP/d2Y+5wiwgwjjV7avnPfkts40YL/HrkT8NQRBxDHEBrLAn31y
+cNLmkx+WFL80S3p2Nxsq2mYxfi+ge1p+swaMIJBbJQgkx9+eEnTn39iefy2K2+66cPXbV463mvl
2qpGMH3I4OQjntrA7v3tKsDExuUoKgxtX7ngzz+xrOl91p5q6zbvcceMhacfvt7zk71ng3SrVm7I
tyzAzNfi97iIrwfl6WMRy8izS4NPbFr65LbO7Pss2nyQBWLSmuiGlTPKNAQso/cavH0UAWa+WL6H
Lokka0cYLo43WtG/27n195Yk0x915Wxa87hx8cwHAqCriO+9cGDfhUE/1WLsTMRmentrJgfvIk0f
das2DvlCkPJLbmX4znmzntp517I62B+49McfKkB8DFgzBYQR4MVT+WffOHw5H8LNCCcVQk5v0b2n
dj+KDApG0dTaZZ312NZ1O+6on/UR9hWnBYgL/g9CBQOBQSgQAIMhXtzf+/LR7v4SfLfOOGkIaUDT
L2LTZwo8sWA3SSIkEQtjyCs63kR7Rjy4avHDmxa1WrBucfH1wwXAlLdFoHj1uE/jtRMTbx7v7h2a
8DSRnYhXjxlCk2ASzByHG0O15Z44rgujCQZRYHQIv5qQvLAlt3XlontXz1w9NvSR3ewDnFgT0fQg
dtoU8fJ3/FcGegbCQ119p/sGZi5/G2WxsCFkbZIvwDqC9mcuf9+WS6+Y17p+yfxlbZYz5anW+0eb
WxYAiCtE+Z7/YyDQEc1Yv79QRc8wuq5VrowVhguVgufH6/fMbClpKTSkk7mU095U19mWXNyKhS6y
QBawAL5p/f4D4tUN5/8CFrJGFYEHVkwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMTItMjVUMDY6
MzY6MzYrMDM6MDBv8Sb4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTEyLTI1VDA2OjM2OjM2KzAz
OjAwHqyeRAAAACZ0RVh0aWNjOmNvcHlyaWdodABObyBjb3B5cmlnaHQsIHVzZSBmcmVlbHmnmvCC
AAAAHXRFWHRpY2M6ZGVzY3JpcHRpb24Ac1JHQiBidWlsdC1pbuOFycUAAAAASUVORK5CYII=" />
</svg>
        <span class="fs-4 ms-3">Salesforce Marketing Cloud Developers Group</span>
      </a>

    </div>
  </header>

  <main>

    <section class="p-4 m-2">
      <div class="p-3 pb-md-4 mx-auto text-center">
        <p class="fs-5">Select a location for list of groups &amp; events near you - <span class="text-muted"> getting involved and reaching out to people in a Trailblazer Community Groups can be a great way of helping to learn Salesforce Marketing Cloud.</span></p>
      </div>
      <nav class="nav nav-pills nav-justified">
        <a class="nav-link {{ACTIVE0}}" aria-current="page" href="/asia-pacific"><span class="align-middle">Asia Pacific</span></a>
        <a class="nav-link {{ACTIVE1}}" aria-current="page" href="/europe-middleeast-africa"><span class="align-middle">Europe, Middle East, Africa</span></a>
        <a class="nav-link {{ACTIVE2}}" aria-current="page" href="/north-america"><span class="align-middle">North America</span></a>
      </nav>
      <div class="list-group list-group-flush pt-4">
        {{GROUPS}}
      </div>
    </section>


    <section class="p-4 m-2 border-top readme">
      <div class="p-3 pb-md-4 mx-auto text-center">
        <p class="fs-5">Awesome Salesforce Marketing Cloud links - <span class="text-muted"> a collection of helpful resources for working with Salesforce Marketing Cloud.</span></p>
      </div>
      <div class="list-group list-group-flush">
        <div id="readme" />
      </div>
    </section>

  </main>

  <footer class="pt-4 my-md-5 border-top">
    <div class="row">
      <div class="col-12 col-md">
        <small class="d-block mb-3 text-muted">SFMCDG &copy; 2014–2022</small>
      </div>
    </div>
  </footer>

  </div>

  <script>

    $(document).ready(function() {
      var md = window.markdownit();
      var markdown =
\`
{{README}}
\`;
      $('#readme').html(md.render(markdown));
    });
  </script>

  <script defer src="https://comments.consideration.cloud/js/commento.js"
  data-page-id="/"></script>
  <div id="commento"></div>  

  </body>
</html>`
