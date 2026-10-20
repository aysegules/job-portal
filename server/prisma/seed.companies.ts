import { prisma } from "../lib/prisma.ts";
import { hashPassword } from "../src/utils/hashPassword.ts";

const companies = [
  {
    name: "Abata",
    email: "jbelson0@tinypic.com",
    password: 'vB2"9"?@',
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Linkbridge",
    email: "ccluely1@cargocollective.com",
    password: 'jZ5|",&Wx_4@',
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Digitube",
    email: "jotterwell2@microsoft.com",
    password: "mE5>?Z0bgo0K",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Rhybox",
    email: "ckelsey3@miibeian.gov.cn",
    password: "vG9*C%w!?#UC",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Mydeo",
    email: "mpeppin4@de.vu",
    password: "gY2_PjGfIBq0B",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Skyba",
    email: "wdoumenc5@hhs.gov",
    password: 'rX8=UFv0/6e"4xK',
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Photobug",
    email: "fpedlow6@edublogs.org",
    password: "tH7@'~cWM",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Oyoloo",
    email: "iesel7@about.me",
    password: "qZ9{8Y/8VE@$|.A",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Muxo",
    email: "mivashintsov8@topsy.com",
    password: 'zT3"RF2wQCdDE',
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Tambee",
    email: "bwelman9@cafepress.com",
    password: "nH2!YPbRuD4WNfnW",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Edgetag",
    email: "emighelea@eepurl.com",
    password: "lB5|hqm.Ij,J",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Buzzbean",
    email: "nswofferb@mlb.com",
    password: "aT6=4yX6#2&_",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Divanoodle",
    email: "tbleythingc@myspace.com",
    password: "cD4)5CYUjE|rj",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Eayo",
    email: "omountstephend@tuttocitta.it",
    password: "wV7,jzwp_tX",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Tekfly",
    email: "ikobae@ocn.ne.jp",
    password: "yY8_&6zZn'aH?",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Skilith",
    email: "kruofff@ucoz.ru",
    password: "bF1(TfQ\\1L02",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Twiyo",
    email: "pramsbothamg@phoca.cz",
    password: "wN1`Q(M)5Up6.",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Trudoo",
    email: "astifeh@hatena.ne.jp",
    password: "jR2+06KaH+0!s",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Zoovu",
    email: "helwelli@lulu.com",
    password: "aM3.i=)bFL<$w%",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "LiveZ",
    email: "jdarrelj@dailymotion.com",
    password: "nG6#+PKkho|",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Zooxo",
    email: "tfilinkovk@w3.org",
    password: "fV6||`ce=}?Os>a",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Divanoodle",
    email: "hreddingsl@cbsnews.com",
    password: "pN3}`J&j",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Shuffledrive",
    email: "mstedmondm@sbwire.com",
    password: 'wK6}SD3L"3u',
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Ozu",
    email: "hruxtonn@woothemes.com",
    password: "tP2{#{W_z",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Twinte",
    email: "knollio@spiegel.de",
    password: "aC5?RiKAAM!n+O",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Cogilith",
    email: "scockaymep@scientificamerican.com",
    password: "tY2,GO5bHXS8~r1",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Divavu",
    email: "mknowlysq@clickbank.net",
    password: "lX5>4Q/}",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Yodoo",
    email: "slamarr@ebay.co.uk",
    password: "nN5}ko<mR(u%",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Topicware",
    email: "svaninis@etsy.com",
    password: "xZ8.NJ.Ze7i3t",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Chatterbridge",
    email: "vmcharryt@fotki.com",
    password: "xO0\\Ik6ah=",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Mymm",
    email: "gfalconaru@reverbnation.com",
    password: "jG5\\e9VHS7",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Zoomdog",
    email: "amaciakv@umich.edu",
    password: "dN7,GRPUAa",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Meembee",
    email: "amcreathw@addtoany.com",
    password: "wZ7?&f'It",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Skilith",
    email: "lmaruskax@prlog.org",
    password: "fL3_Avnp",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Skilith",
    email: "llococky@sourceforge.net",
    password: "xP7`UM(8",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Quinu",
    email: "formez@trellian.com",
    password: "mD0'a1A9t~g(",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Browsezoom",
    email: "csiemandl10@1und1.de",
    password: "hT1/nXgsK)tY",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Browsetype",
    email: "csherrard11@addtoany.com",
    password: "qI6~mHMa",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Realblab",
    email: "sbolitho12@mtv.com",
    password: "mB7(8Q@uyUm)V=",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Blogpad",
    email: "awoodyear13@cisco.com",
    password: "wQ7.L%NA&jwT`=.4",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Feedfire",
    email: "epohlak14@yahoo.co.jp",
    password: "uY0_\\+Q*\\@sIF",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Lazz",
    email: "hcraske15@yellowpages.com",
    password: "lV3|4?9~mJXx",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Roomm",
    email: "agoldsby16@feedburner.com",
    password: "fT4!go%r*JU/fsQ>",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Eadel",
    email: "kdeighton17@constantcontact.com",
    password: "yR0*t$?3DYP?",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Gabvine",
    email: "btreen18@forbes.com",
    password: "mD6*0`vqu\\3xv(",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Shuffledrive",
    email: "ssimnor19@webeden.co.uk",
    password: "wX4.thzLq*",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Janyx",
    email: "jseverns1a@tumblr.com",
    password: "iK1.2V_V0S3Qc",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Realpoint",
    email: "kbentall1b@wunderground.com",
    password: "eK1?JHi__&C*,hH/",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Livetube",
    email: "natty1c@arstechnica.com",
    password: "fW9{W5LX$cJ(F",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Meemm",
    email: "pfermer1d@etsy.com",
    password: "kQ3.UsG<x+b\\3",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Meetz",
    email: "gpietrzak1e@blogtalkradio.com",
    password: "hP8&hM&X,OO",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Dynava",
    email: "etrew1f@usnews.com",
    password: "uI6`_S)={*8d",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Twimm",
    email: "availlant1g@europa.eu",
    password: "pE4(IgTna#8%",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Youtags",
    email: "fhort1h@barnesandnoble.com",
    password: "wE7_0{=6J",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Centizu",
    email: "kleal1i@psu.edu",
    password: "wR4*(,m),,_QvV3",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Yamia",
    email: "ibillyeald1j@imdb.com",
    password: "tL1}R?1a",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Livetube",
    email: "dzamboniari1k@facebook.com",
    password: "lP8&xpJqxEO\\,%n",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Meembee",
    email: "bcressar1l@discuz.net",
    password: "rR6(Aux*'Jwg3eTx",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Omba",
    email: "gtrappe1m@uol.com.br",
    password: "sS3}1=6Dt7z#g",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Dabtype",
    email: "bcutbush1n@newyorker.com",
    password: "xL8<bBIX(*C0oy+",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Skynoodle",
    email: "bsemon1o@prlog.org",
    password: "iT1+o11m",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Livefish",
    email: "acestard1p@narod.ru",
    password: "uU5|oFg`2#q*I_",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Ooba",
    email: "zmaccallum1q@nyu.edu",
    password: "nM1}76Ava",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Ozu",
    email: "cbahia1r@moonfruit.com",
    password: "fJ7@<HFc9UBpMj4m",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Kanoodle",
    email: "mleser1s@google.it",
    password: 'nJ4"fOBI=tDxl%w',
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Voonix",
    email: "jtoulson1t@mozilla.org",
    password: "dQ3(d!KsXO*c2",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Kare",
    email: "jsailes1u@cyberchimps.com",
    password: "bD7|F*IvDq56<6",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Topicware",
    email: "ebardwall1v@moonfruit.com",
    password: 'zA4"sa!5aXCS{2`O',
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Realfire",
    email: "osam1w@ftc.gov",
    password: "rQ2*&`sm",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Photospace",
    email: "lwyke1x@1688.com",
    password: "qY4+k!c+u4A|{5&",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Skippad",
    email: "bmiddle1y@boston.com",
    password: "vK3(Fjl*V",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Fivebridge",
    email: "hgrzelak1z@foxnews.com",
    password: "sY7/4$aq(./<PN",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Skyvu",
    email: "dperegrine20@msn.com",
    password: 'tI6?!`yLc")cPQrV',
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Thoughtstorm",
    email: "dfrowde21@mapquest.com",
    password: "jE9(@O2n|j<",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Edgeblab",
    email: "tsommerscales22@webnode.com",
    password: "gP3!N3+|ZTc",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Rhybox",
    email: "mgeraudy23@europa.eu",
    password: "zP0(pc(?A,}=Gf}",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Blognation",
    email: "dbernakiewicz24@ehow.com",
    password: "gS1'\"T'v.",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Jayo",
    email: "rmantrip25@google.de",
    password: "nI4%X#P}gzHj0Z*",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Divavu",
    email: "kredwall26@pcworld.com",
    password: "hU9\\C>weXpb}k)%",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Tazzy",
    email: "jwickenden27@cocolog-nifty.com",
    password: "aE8`>pad+IQ9",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Zoomcast",
    email: "ckilsby28@prweb.com",
    password: "kZ5''F=hft",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Eidel",
    email: "mcardow29@usa.gov",
    password: 'eW0|@o%5"Bze=#/T',
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Kwideo",
    email: "aguillet2a@artisteer.com",
    password: "sL7/7NWJ",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Eire",
    email: "cmacgiollapheadair2b@freewebs.com",
    password: "nM3_a(dWfC%B'%",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Oloo",
    email: "bcankett2c@hhs.gov",
    password: "wS8/Gr!U/H\\",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Trilith",
    email: "smcgready2d@technorati.com",
    password: "dF3@<x$&FW|>~",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Tazz",
    email: "dpullman2e@google.nl",
    password: 'aE3=dwt"H+GrSW',
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "LiveZ",
    email: "gduke2f@sbwire.com",
    password: "iK6`YWV9j$M,",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Innotype",
    email: "nsargant2g@friendfeed.com",
    password: "mO7@O<w)>",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Twitterlist",
    email: "gblinder2h@about.me",
    password: 'lC1<"@d)2',
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Jetpulse",
    email: "mcammish2i@wufoo.com",
    password: "rJ1~TcTi",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Thoughtstorm",
    email: "hskehens2j@symantec.com",
    password: "tB5(25A+<e(_",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Zazio",
    email: "dklimke2k@google.fr",
    password: "rR0>DxoN*m>.",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Realbuzz",
    email: "aquarry2l@joomla.org",
    password: 'wK5,6UFl0)r"',
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Dabvine",
    email: "ldunnion2m@statcounter.com",
    password: "sG5/Jj+CcYt')+`?",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Quimm",
    email: "cdonisi2n@apple.com",
    password: "fB2{wq_{$&{KF`0",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Oba",
    email: "ulaugier2o@shutterfly.com",
    password: "dH1!MDi4{P9~",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Kazio",
    email: "sleven2p@timesonline.co.uk",
    password: "oE8!nlV=i",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Katz",
    email: "jelsmor2q@apple.com",
    password: "nG2*8ZN`*B",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
  {
    name: "Wordify",
    email: "mdorow2r@examiner.com",
    password: "fC5&)'RAiAI}",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265852/jobPortal/companies/images/jf7fd7cq1eaxewm9m0jp.jpg",
  },
];

const main = async () => {
  console.log("Seeding company data...");

  await prisma.company.deleteMany();

  for (const company of companies) {
    await prisma.company.create({
      data: {
        name: company.name,
        email: company.email,
        password: await hashPassword(company.password),
        img: company.img,
      },
    });

    console.log(`Created company ${company.name}`);
  }

  console.log("Seeding completed!");
};

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
