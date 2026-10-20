import { prisma } from "../lib/prisma.ts";
import { hashPassword } from "../src/utils/hashPassword.ts";

const users = [
  {
    name: "Reuben Date",
    email: "rdate0@cargocollective.com",
    password: "lX9\\9XRfpH3P,",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Kelley L' Estrange",
    email: "kl1@springer.com",
    password: "jN2>OiK#95<o",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Cesar Howse",
    email: "chowse2@hao123.com",
    password: "sG0+6/r8eOEj",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Jerrome Stollhofer",
    email: "jstollhofer3@mail.ru",
    password: "fD3/TLdp",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Case Dunthorn",
    email: "cdunthorn4@mysql.com",
    password: "qR7~xFJrk&yinf){",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Haley Petche",
    email: "hpetche5@nps.gov",
    password: 'jO3.DCm"?04t',
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Shaw Tallquist",
    email: "stallquist6@ucoz.ru",
    password: "rA5&vJa?",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Fairfax Ney",
    email: "fney7@microsoft.com",
    password: "sW0}25<21pcfwM",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Jarrett Goodchild",
    email: "jgoodchild8@edublogs.org",
    password: "tL8#o90mTZ`M>Kp",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Paxton Cossey",
    email: "pcossey9@homestead.com",
    password: "iG0~?_FZaYtUwCF*",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Adrianne McShea",
    email: "amcsheaa@loc.gov",
    password: "vJ8/K$&K8bv{",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Deana Cazereau",
    email: "dcazereaub@independent.co.uk",
    password: "jB5**&I*Y/C>xV4\\",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Horatius Biaggiotti",
    email: "hbiaggiottic@posterous.com",
    password: "jS7!dB9,K7Yl",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Haslett Rome",
    email: "hromed@bluehost.com",
    password: "fQ8+(`~tFfT$",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Ashlan Aronow",
    email: "aaronowe@geocities.jp",
    password: "mJ1%K4xwo",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Shannen Pauleit",
    email: "spauleitf@youtu.be",
    password: 'sJ8)YjCS|HO"G',
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Christy Itzhayek",
    email: "citzhayekg@ifeng.com",
    password: "tM0*bpqVq`G",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Virge Lief",
    email: "vliefh@macromedia.com",
    password: "wP8\\V,6&)oSSQ1",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Stacy Lincoln",
    email: "slincolni@mail.ru",
    password: "pX0$gEMC}=P(2TO",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Sam Stalley",
    email: "sstalleyj@vinaora.com",
    password: "tT0{l4Hu(cfkR",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Welbie Conibeer",
    email: "wconibeerk@gov.uk",
    password: 'lM4{K{"PY<B66q',
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Annnora Formigli",
    email: "aformiglil@tmall.com",
    password: "wM9%Qup<%IhohWJF",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Florence Tumilty",
    email: "ftumiltym@smh.com.au",
    password: "hL2/C0{+OEn%",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Gerta Caulliere",
    email: "gcaullieren@google.com.br",
    password: "yZ7#x?\\&Up&x",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Ryley Dossit",
    email: "rdossito@nih.gov",
    password: "hE1>DTW}Kv8#RI{",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Winn Fidelus",
    email: "wfidelusp@i2i.jp",
    password: "nP4@PkiY=tw",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Clare Stroud",
    email: "cstroudq@jiathis.com",
    password: "vF7&Tiq?fA~SE!}v",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Irma Bourbon",
    email: "ibourbonr@dailymotion.com",
    password: "iP7|A!C?HO'N",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Kerwinn Dilliway",
    email: "kdilliways@oracle.com",
    password: "aO5&)Y\\!2t",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Alaster Kingswoode",
    email: "akingswoodet@timesonline.co.uk",
    password: "cD1=,v~i@MP",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Justus McColgan",
    email: "jmccolganu@nbcnews.com",
    password: "dD2*9gQNTH",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Howey Batten",
    email: "hbattenv@flickr.com",
    password: "zP2&q,0{km!&>'",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Rora Otson",
    email: "rotsonw@cpanel.net",
    password: "qD0&&Z!Zhj",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Bridget Ewence",
    email: "bewencex@dagondesign.com",
    password: "uA2=JUvy",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Clarissa Jolliss",
    email: "cjollissy@xing.com",
    password: "bU5!G}'+/TR=",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Conrad Bath",
    email: "cbathz@independent.co.uk",
    password: "iU1!\"M5'4kH",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Bride Mailey",
    email: "bmailey10@aol.com",
    password: 'fY6"y2uZN"',
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Elvis Charer",
    email: "echarer11@intel.com",
    password: "hP2~.VOGT$58aT5",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Cleon Budgeon",
    email: "cbudgeon12@flickr.com",
    password: "aA5%8Nda@&S?pq)",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Christi Aim",
    email: "caim13@kickstarter.com",
    password: "bP3`t}g|IB@w",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Donielle Elsom",
    email: "delsom14@businessinsider.com",
    password: "aW8__{4*",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Sarita Burg",
    email: "sburg15@soundcloud.com",
    password: "fE9=H1PG(RL=Z",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Drusie Knowlson",
    email: "dknowlson16@skype.com",
    password: "kP7{1uKR=s",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Alair Muriel",
    email: "amuriel17@booking.com",
    password: "zT3|dOB_",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Winnie Hardwicke",
    email: "whardwicke18@hhs.gov",
    password: "mY3)$~*)}#CgD'U",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Elisabeth Rumble",
    email: "erumble19@joomla.org",
    password: "mW9)r`,#DM",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Stewart Dundin",
    email: "sdundin1a@diigo.com",
    password: "sC4@Ake=*#@gj}",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Marv Lafford",
    email: "mlafford1b@yahoo.com",
    password: "sV9?7R1%Lh7=9HZP",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Adiana Maciak",
    email: "amaciak1c@nifty.com",
    password: "kB2?G@%cG",
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
  {
    name: "Sharia Brimson",
    email: "sbrimson1d@skype.com",
    password: 'vH7+I#6*"!ED>',
    img: "https://res.cloudinary.com/qyygyuy5/image/upload/v1792265164/jobPortal/users/images/ftob6xeyj1nvzfz3jd8y.avif",
    resume:
      "https://res.cloudinary.com/qyygyuy5/raw/upload/v1792265164/jobPortal/users/resumes/pvt6jtzznurob3uarruo",
  },
];

const main = async () => {
  console.log("Seeding user data...");

  await prisma.user.deleteMany();

  for (const user of users) {
    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: await hashPassword(user.password),
        img: user.img,
        resume: user.resume,
      },
    });

    console.log(`Created user ${user.name}`);
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
