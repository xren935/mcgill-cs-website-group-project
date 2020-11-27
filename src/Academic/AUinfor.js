
import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops'
import {Button, Collapse} from 'react-bootstrap'
import "../static/bodycomponent.css";
import ReactPlayer from "react-player"
class AUinfor extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      Undergraduate: true,
      Graduate: false,
      Course: false,
      TeachingAss: false,
      Funding: false
     }
     this.handleUndergraduate = this.handleUndergraduate.bind(this);
     this.handleGraduate = this.handleGraduate.bind(this);
     this.handleFunding = this.handleFunding.bind(this);
     this.handleCourse = this.handleCourse.bind(this);
     this.handleTeachingAss = this.handleTeachingAss.bind(this);
}

handleGraduate() {
  this.setState(state => ({
    Graduate: !state.Graduate
  }));
}

handleCourse() {
  this.setState(state => ({
    Course: !state.Course
  }));
}

handleTeachingAss() {
  this.setState(state => ({
    TeachingAss: !state.TeachingAss
  }));
}

handleFunding() {
  this.setState(state => ({
    Funding: !state.Funding
  }));
}

handleUndergraduate() {
  this.setState(state => ({
    Undergraduate: !state.Undergraduate
  }));
}
    render() { 
        return (  
          <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}>
          {props => 
            <div class="row" style={props}>
                <ScrollToTopOnMount />
            <div class="col-sm-2">
            


           {/*Undergradute button*/}
            <div>
           <Button className="btn btn-blue" onClick={this.handleUndergraduate}>
               Undergraduate
           </Button>

           <Collapse in={this.state.Undergraduate}>
           <div class="nav flex-column nav-pills" id="ColUnder" role="tablist" aria-orientation="vertical">
      <a class="nav-link" id="" data-toggle="pill" href="AcademicUndergrad" role="tab">Overview</a>
      <a class="nav-link active" id="" data-toggle="pill" href="Auinfor" role="tab">Information for incoming students</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Remote Learning</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">FAQ</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Advising</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Comp202/204/208</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Streams</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Bachelor of Science</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Bachelor of Arts</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Bachelor of Arts and Science</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Minor Computer Science</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Games</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Research</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Internship and Career</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Preparation for grad studies</a>

      </div>
           </Collapse>
     </div>






      {/*gradute button*/}
      <div>
           <Button className="btn btn-blue" onClick={this.handleGraduate}>
               Graduate
           </Button>

           <Collapse in={this.state.Graduate}>
           <div class="nav flex-column nav-pills" id="ColUnder" role="tablist" aria-orientation="vertical">
      <a class="nav-link" id="" data-toggle="pill" href="AcademicGrad" role="tab">Overview</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Master</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">P.H.D</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Admission</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Applying</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">FAQ</a>

      </div>
           </Collapse>
     </div>




     {/*Course button*/}
     
      <a href="AcademicCourses"><Button className="btn btn-blue">Course</Button></a>
      
     


     {/*TeachingAss button*/}
     <div>
           <Button className="btn btn-blue" onClick={this.handleTeachingAss}>
               Teaching Assisting
           </Button>

           <Collapse in={this.state.TeachingAss}>
           <div class="nav flex-column nav-pills" id="ColUnder" role="tablist" aria-orientation="vertical">
      <a class="nav-link" id="" data-toggle="pill" href="AcademicTeachingAss" role="tab">TA and Research Assistant</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">TA awards</a>

      </div>
           </Collapse>
     </div>


     {/*Funding button*/}
     <div>
           <Button className="btn btn-blue" onClick={this.handleFunding}>
               Funding
           </Button>

           <Collapse in={this.state.Funding}>
           <div class="nav flex-column nav-pills" id="ColUnder" role="tablist" aria-orientation="vertical">
      <a class="nav-link" id="" data-toggle="pill" href="AcademicFunding" role="tab">Financial Information</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Graduate Scholarships</a>
      <a class="nav-link" id="" data-toggle="pill" href="" role="tab">Expense Reports</a>

      </div>
           </Collapse>
     </div>
     







            </div>





            <div class="col-sm-9">
            <div className = "body">
              <h1 style ={{color: "green"}}>Information for Incoming Undergraduate Students</h1>
              <h2 style ={{color: "red"}}>Welcome to the School of Computer Science!</h2>
              <p>As you plan to begin your studies at McGill, you might have many questions. We hope to answer some of them below.</p>
              <ul>What is Computer Science? Overview / Brochure</ul>
              <ul>I want to study computer science. What courses should I take at McGill during my first year? Streams / U1 Courses / Play Video Below</ul>
              <ul>Computer Science Undergraduate Orientation - Presentation Slides</ul>
              <ul>Computer Science - Quick Tips / Course Prereqs / Software Engineering Courses</ul>
              <ul>If you have any questions, please fill out the following form, and we will get back to you!</ul>
              <br></br>
              
              <ReactPlayer
        url="https://www.youtube.com/watch?v=tXOL13JabH8"
      />

             <br></br>

             <ReactPlayer
        url="https://www.youtube.com/watch?v=LYmOhuw3GSQ"
      />
              </div>
            </div>
        </div>
         }
         </Spring>
        );
    }
}
export default AUinfor;

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 600);
    }
  
    render() {
      return null;
    }
  }