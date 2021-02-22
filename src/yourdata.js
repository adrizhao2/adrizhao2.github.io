// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import jsIcon from "./images/javascript.svg"
import figmaIcon from "./images/figma.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

//About profile
import profile from "./images/prof.jpg"

//Project Images
import bostonfoodimage from "./images/bostonfoodvis.png"
import isgmimage from "./images/isgm.png"
import nlpfinal from "./images/nlpfinal.png"
import bccssio from "./images/bccssio.png"
import indianocean from "./images/indianocean.png"
import sortvis from "./images/sortvis.png"

// Social Icon
import resumeIcon from "./images/resume.svg"
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
import behanceIcon from "./images/behance.svg"
import facebookIcon from "./images/facebook.svg"
 

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Adrianna",
  headerTagline: [
    //Line 1 For Header
    "Creating digital",
    //Line 2 For Header
    "designs, brands,",
    //Line 3 For Header
    "and experiences",
  ],
  //   Header Paragraph
  headerParagraph:
    "Developing and designing work that fits for you.",

  //Contact Email
  contactEmail: "zhaocx@bc.edu",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Boston Eats", //Project Title - Add Your Project Title Here
      para:
        "Boston Eats is a visualization made for Nam Wook Kim's Visualization course. Explore the restaurants around Boston using Kaggle datasets and Restaurants API.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        bostonfoodimage,
      //Project URL - Add Your Project Url Here
      url: "https://rogerwangcs.github.io/boston-food-vis/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "ISGM Design Challenge", //Project Title - Add Your Project Title Here
      para:
        "For Chokdee Rutirasiri's Design Thinking class, we were tasked to improve accessability at the Isabella Stewart Gardner Museum using design thinking.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        isgmimage,
      //Project URL - Add Your Project Url Here
      url: "https://docs.google.com/presentation/d/1MGggqvH_-CcZBGslihnuTW09_XwImIOfAWnvbNQ-MgU/edit?usp=sharing",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Natural Language Processing", //Project Title - Add Your Project Title Here
      para:
        "Our group decided to tackle how to distinguish between singing and speaking voices with natural language processing. We used software such as Praat and Audacity to create clean audio and parse through data.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        nlpfinal,
      //Project URL - Add Your Project Url Here
      url: "https://docs.google.com/presentation/d/1z_IqXyZZGA0T7TBT1pjIZIgDrZ_bGJo8o9HZQxn1orE/edit?usp=sharing",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "BCCSS Website", //Project Title - Add Your Project Title Here
      para:
        "The Design Team and the Tech Team for Boston College Computer Science Society teamed up and worked to redesign the outdated website. We worked in Figma to create a working prototype which Tech team then coded into existence.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        bccssio,
      //Project URL - Add Your Project Url Here
      url: "http://bccss.io/",
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Indian Ocean Current", //Project Title - Add Your Project Title Here
      para:
        "I was part of the McMullen Museum of Art team working to digitize the Spring 2020 exhibition, Indian Ocean Current. We used 3D Vista as well as a DSLR camera to shoot the exhibit then create and online exhibition.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        indianocean,
      //Project URL - Add Your Project Url Here
      url: "https://www.bc.edu/sites/artmuseum/exhibitions/ioc/walkthrough/",
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Sorting Algorithms Visualization", //Project Title - Add Your Project Title Here
      para:
        "My group and I coded a single HTML file to run visualizations for bubble, heap, insertion, merge, quick, and selection sort. To see the execution, download the html file and run on a local host.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        sortvis,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/adrizhao2/SortingAlgorithmsVisualization",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hello! My name is Adrianna Zhao and I'm currently a senior at Boston College studying Computer Science and Studio Art. I'm super interested in UI/UX Design and Data Analytics.",
  aboutParaTwo:
    "I've taken a multitude of CS courses such as Algorithms, Object-Oriented Design, Natural Language Processing, Web Application Development, and Visualization. I've also taken many art and design classes, most notably Design Thinking with Chokdee Rutirasiri.",
  aboutParaThree:
    "I've been a part of many projects including Boston Eats visualization, redesigning the BCCSS website, UX Design for the Isabella Stewart Gardner Museum, and more. In my freetime I enjoy reading, drawing & painting, and playing with my dog, Jojo.",
  aboutImage:
    profile,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      title:
        "HTML",
      para:
        "In my Web Application Development course, HTML was one of the first languages learned. Since then, I've used HTML and CSS in front end web development for websites such as the Sorting Algorithms visualization.",
    },
    {
      id: 2,
      img: cssIcon,
      title:
        "CSS",
      para:
        "In my Web Application Development course, CSS was one of the first languages learned. Since then, I've used HTML and CSS in front end web development for websites such as the Boston Eats visualization.",
    },
    {
      id: 3,
      img: jsIcon,
      title:
        "JavaScript",
      para:
        "I've used JavaScript for both front end and back end development for websites, including portfolio websites and other visualizations.",
    },
    {
      id: 4,
      img: figmaIcon,
      title:
        "Figma",
      para:
        "I've been working with Figma for over 2 years now on solo projects and group designs. Most notably, I have worked with the Boston College Computer Science Society to redesign their website.",
    },
    {
      id: 5,
      img: designIcon,
      title:
        "Adobe Creative Suite",
      para:
        "I have created logos, posters, and other brands in Photoshop, Illustrator, and InDesign, as well as my own digital art. I'm also proficient in Procreate and am learning Adobe Dimension.",
    },
    {
      id: 6,
      img: codeIcon,
      title:
        "Coding Languages",
      para:
        "Other coding languages I am proficient in are Python, Java, C, C++, SQL, and R. In software, I am experience with Eclipse, Atom, Git, and the Microsoft Office Suite.",
    },
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    {
      img: resumeIcon,
      url: "https://drive.google.com/file/d/16WoVT_rEUfbAiaziFISEQw3EPu0ze7hD/view?usp=sharing",
    },
    { img: githubIcon, url: "https://github.com/adrizhao2" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/adrianna-zhao-963877164/",
    },
    {
      img: behanceIcon,
      url: "https://www.behance.net/adriannazhao",
    },
    {
      img: facebookIcon,
      url: "https://www.facebook.com/adriannamzhao",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
