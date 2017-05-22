

/*
This is empty on purpose! Your code to build the resume will go here.
 */// Bio Information
//==========================================================================



var bio = {
    "name": "Sachin G",
    "role": "Help Desk Analys",
    "message": "Hello, World!",
    "contacts": {
        "mobile": "613 000 0000",
        "email": "sachin@test.com",
        "github": "https://github.com/sachinjg",
        "website": "sachinjg.com",
        "twitter": "https://twitter.com/sachinjg",
        "location": "Ottawa, ON"
    },
    "skills": [
        "HTML", "CSS", "Javascript", "Python"
    ],
    "bioPic": "images/fry.jpg"
};

bio.display = function(){

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
    $("#topContacts").append(formattedGithub);



    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic)
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
    $("#header").append(formattedWelcomeMessage);

    if(bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);

    //footer contact info
    var formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

    var formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
    $("#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
    $("#footerContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace(/%data%/g, bio.contacts.twitter);
    $("#footerContacts").append(formattedTwitter);
    };

}
// Work History
//==========================================================================

var work = {
    "jobs": [
        {
            "employer": "Innovapost",
            "title": "Help Desk Analys",
            "datesWorked": "Feb 2013 - Current",
            "location": "Ottawa, Ontario, Canada",
            "description": "Provides customer support, service and technical support through analysis and problem resolving to enable installation,maintenance,education, implementation and documentation of a variety of software and hardware technologies using remote communication or through phone to the client or the end."
        },
        {
            "employer": "Abott point of care",
            "title": "Inventory deparment",
            "datesWorked": "Oct 2008 - Jan 2013",
            "location": "Ottawa, Ontario, Canada",
            "description": " Track Inventory, Evaluate Suppliers and Prepare Documentation."
        },
        {
            "employer": "Resolve Crop.",
            "title": "Technical support",
            "datesWorked": "Jan 2007 - Sep 2008 ",
            "location": "Ottawa, Ontario, Canada",
            "description": "Deliver service and support to end-users using and operating automated call distribution phone software, via remote connection or over the Internet."
        }

    ]
};

work.display = function(){

    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedJobTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedJobTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates= HTMLworkDates.replace("%data%",work.jobs[job].datesWorked);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation= HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription= HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
};

// Projects
//==========================================================================

var projects = {
    "projects":[{
			"title": "Online Portfolio",
			"datesWorked": "Jan 2017",
			"description": "Using HTML5 and CSS3.This project is the first project of the Udacity Front-end Nonodegree Program. It is a simple one page portfolio featuring responsive design using the bootstrap framework..",
			"images": ["images/Portfoli.png"],
			//"url": "https://github.com/sachinjg/Portfolio"
		},
    {
        "title": "Movie website",
        "datesWorked": "April 2017",
        "description" : "Using python movie trailer website automatically downloads movie information from the Open Movie Database, so Movie objects need only be initialised with an Internet Movie Database ID and a Youtube video ID for the trailer. ",
        "images":["images/movieweb.png"]
      //  "url": "https://github.com/sachinjg/project1"
    }
]};

projects.display = function(){
  if(projects.projects.length > 0) {
    for(project in projects.projects){

        $("#projects").append(HTMLprojectStart);

        formattedProjectTitle= HTMLprojectTitle.replace("%data%",projects.projects[project].title);
            $(".project-entry:last").append(formattedProjectTitle);

        formattedProjectDates= HTMLprojectDates.replace("%data%",projects.projects[project].datesWorked);
            $(".project-entry:last").append(formattedProjectDates);

        if(projects.projects[project].images.length>0){

                for (image in projects.projects[project].images)
                formattedProjectImage= HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedProjectImage);

            }

        formattedProjectDescription= HTMLprojectDescription.replace("%data%",projects.projects[project].description);
            $(".project-entry:last").append(formattedProjectDescription);

        }
        }
}

// Education
//==========================================================================

var education = {
    "schools": [
        {
            "name": "Morden College",
            "degree": "BCom",
            "location": "Navi mumbai, Maharashtra, India",
            "majors": ["Commerce"],
            "datesAttended": "May 1998"
        }
              ],
    "onlineCourses": [
        {
            "title": "Front-End Nanodegree",
            "school": "Udacity",
            "dates": "Sept 2017",
            "url": "https://www.udacity.com"
        },
        ]};

        education.display = function(){
        $("#education").append(HTMLschoolStart);
        for(school in education.schools){

        formattedSchoolName= HTMLschoolName.replace("%data%",education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName);

        formattedSchoolDegree= HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolDegree);

        formattedDates= HTMLschoolDates.replace("%data%",education.schools[school].datesAttended);
        $(".education-entry:last").append(formattedDates);

        formattedSchoolLocation= HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        if(education.schools[school].majors.length>2){
        for (major in education.schools[school].majors){

        formattedSchoolMajor= HTMLschoolMajor.replace("%data%",education.schools[school].majors[major])};
        $(".education-entry:last").append(formattedSchoolMajor);
        }
        }

        $(".education-entry:last").append(HTMLonlineClasses);
        for(course in education.onlineCourses){

        formattedOnlineTitle= HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
        $(".education-entry:last").append(formattedOnlineTitle);

        formattedOnlineSchool= HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedOnlineSchool);

        formattedOnlineDates= HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        formattedOnlineUrl= HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineUrl);
        }
        };



// Internationalize Name
//==========================================================================


// Capitalize all last name and ensure first letter in first name is capitalized
function inName(name){
    var name = bio.name;
    name = name.trim().split(" ");
    console.log(name);
    name[1]= name[1].toUpperCase();
    name[0]= name[0].slice(0,1).toUpperCase()+ name[0].slice(1).toLowerCase();

    return name[0]+" "+name[1];


}

//$("#main").append(internationalizeButton)


// Clicks (Analytics)
//==========================================================================

$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);});

// Call functions
//==========================================================================

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
