function loadjson(file, callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange = function(){
		if(xhr.readyState===4 && xhr.status==200){
			//The responseText property returns 
			//the server response as a text string.
			//The text string can be used to update a web page:
			callback(xhr.responseText);
		}
	}
	xhr.send();	
}

loadjson("resume.json", function(text){
    console.log(text);
    var d  = JSON.parse(text);
    card1(d);
    card2(d);
});

var main = document.querySelector(".resume");
var head = document.createElement("span");
head.className="title";
head.textContent="My Resume";
main.appendChild(head);

var cg_div = document.createElement("div");
cg_div.classList.add("card-view");
main.appendChild(cg_div);
function card1(details){

    var c_div =  document.createElement("div");
    c_div.classList.add("card1");
    cg_div.appendChild(c_div);

    var em =document.createElement("div");
    c_div.appendChild(em);

    var img = document.createElement("img");
    img.src = details.image;
    img.alt = "Profile Image";
    em.appendChild(img);

    var name = document.createElement("h2");
    name.textContent=details.name;
    em.appendChild(name);

    var email = document.createElement("p");
    var bold = document.createElement("b");
    bold.textContent="Email: ";
    email.appendChild(bold);

    var text = document.createElement("span");
    text.textContent = details.email;
    email.appendChild(text);
    em.appendChild(email);

    var carrer = document.createElement("p");
    var bold = document.createElement("b");
    bold.textContent="Carrer Objective: ";
    carrer.appendChild(bold);
    var c_d = document.createElement("p");
    c_d.textContent=details.carrer_objective;
    carrer.appendChild(c_d);

    em.appendChild(carrer);

}

function card2(details){
    var c_div =  document.createElement("div");
    c_div.classList.add("card2");
    cg_div.appendChild(c_div);

    var dl =document.createElement("dl");
    c_div.appendChild(dl);

    var eq = document.createElement("dt");
    eq.classList.add("dt");
    eq.textContent = "Education Qualifications:"
    dl.appendChild(eq);

    tab_div = document.createElement("div");
    tab_div.style = "overflow-x:auto;";
    dl.appendChild(tab_div);

    tab = document.createElement("table");
   

    var row = "<tr><th>Course</th><th>Institution</th><th>University/Board</th><th>Percentage</th><th>Year of Completion</th></tr>";
    for (var i = 0; i < details.edu_qualifs.length; i++) {
		row+= "<tr><td>"+details.edu_qualifs[i].course+"</td><td>"+details.edu_qualifs[i].institution+"</td><td>"+details.edu_qualifs[i].university+"</td><td>"+details.edu_qualifs[i].per+"</td><td>"+details.edu_qualifs[i].year+"</td></tr>";
	}
    tab.innerHTML=row;
    tab_div.appendChild(tab);

    dl.appendChild(document.createElement("br"));

    var ts = document.createElement("dt");
    ts.classList.add("dt");
    ts.textContent= "Technical Skills:";
    dl.appendChild(ts);

    ts_ul = document.createElement("ul");
    dl.appendChild(ts_ul);

    pr_li = document.createElement("li");
    pr_li.innerHTML="<b>Programming Languages: &nbsp;</b>";
    pr_li.innerHTML+=details.technical_skills.programming_skills;
    ts_ul.appendChild(pr_li);

    wt_li = document.createElement("li");
    wt_li.innerHTML="<b>Web Technologies: &nbsp;</b>";
    wt_li.innerHTML+=details.technical_skills.web_technologies;
    ts_ul.appendChild(wt_li);

    db_li = document.createElement("li");
    db_li.innerHTML="<b>Databases: &nbsp;</b>";
    db_li.innerHTML+=details.technical_skills.databases;
    ts_ul.appendChild(db_li);

    dl.appendChild(document.createElement("br"));

    var ac = document.createElement("dt");
    ac.classList.add("dt");
    ac.textContent= "Achievements:";
    dl.appendChild(ac);

    a_ul = document.createElement("ul");
    dl.appendChild(a_ul);
    var lis="";
    details.achievements.forEach(element => {
        lis+=`<li>${element}</li>`;
    });
    a_ul.innerHTML=lis;

    dl.appendChild(document.createElement("br"));

    var hb = document.createElement("dt");
    hb.classList.add("dt");
    hb.textContent= "Hobbies:";
    dl.appendChild(hb);

    hb_dd = document.createElement("dd");
    dl.appendChild(hb_dd);
    var lis="";
    details.hobbies.forEach(element => {
        lis+=`${element}`;
    });
    hb_dd.textContent=lis;
}