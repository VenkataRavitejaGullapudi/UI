import React from 'react';
import './resume.css'
import data,{profiles} from './data.json'

let Resume=(props)=>{
    console.log(props.location);
    var info=profiles[props.location.cardData.id];
    return(
        <div>
        <span className="title">{info.name}&nbsp;Resume</span>
        <div className="card-view">
            <div className="card1">
                <div>
                    <img className="img" src="profile.png" alt="Profile picture"/>
                    <h2>{info.name}</h2>
                    <p><b>Email:&nbsp;</b><a href={`mailto:${info.email}`}>{info.email}</a></p>
                    <p><b>Mobile:&nbsp;</b><a href={`callto:${info.mobile}`}>{info.mobile}</a></p>
                    <b>Career Objective</b><br/>
                    {info.carrer_objective}
                    <br/>
                </div>
            </div>
           
            <div class="card2">
                <dl>
                    <dt class="dt">Education Qualifications:</dt><br/>
                    
                    <div style={{overflowX:"auto"}}>
                        <table>
                        <tr>
                            <th>Course</th>
                            <th> Institution </th>
                             <th>University/Board </th>
                            <th>Percentage </th>
                            <th>Year of completion</th>
                          
                        </tr>
                        {info.edu_qualifs.map((element,index) => (
                            <tr>
                                <td>{element.course}</td>
                                <td>{element.institution} </td>
                                <td>{element.university }</td>
                                <td>{element.per}</td>
                                <td>{element.year}</td>
                            </tr>
                        ))}
    
                    </table>  
                    </div>
                    <br/>            
                    <dt class="dt"> Acheivements: </dt>
                    <ul>
                        {info.achievements.map((element,index) => (
                            <li>{element}</li>
                        ))}
                    </ul>
                    <br/>
                    <dt class="dt">Hobbies:</dt>
                    <dd>Love to play chess, Listening Music</dd>
                </dl>
            </div>
        </div>
        </div>
    );
}

export default Resume;