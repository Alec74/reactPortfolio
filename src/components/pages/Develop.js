import React from 'react';

export default function Blog() {
  return (
    <div>
      <main>
        <div class="container developed">
          {/* <!-- Showcase Project --> */}
          <div class="row align-items-center my-5" id="showcase">
            <div class="col-12">
              <div class="card border-danger" id="recipes">
                <img src="images/project1.png" class="card-img-top"
                  alt="showcase of cocktail and recipe generator"></img>
                <div class="card-body text-center color-card">
                  <h5 class="card-title font-head">Cocktail and Recipe Generator</h5>
                  <a href="https://adamspiegel.github.io/Group-Project-1/" class="btn btn-primary mx-3">Live
                    Webpage</a>
                  <a href="https://github.com/AdamSpiegel/Group-Project-1" class="btn btn-primary mx-3">Github
                    Repo</a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Project 2! --> */}
          <div class="container developed">
            {/* <!-- Showcase Project --> */}
            <div class="row align-items-center my-5" id="showcase">
              <div class="col-12">
                <div class="card border-danger" id="recipes">
                  <img src="images/century.png" class="card-img-top"
                    alt="showcase of 21stcenturyfitness project"></img>
                  <div class="card-body text-center color-card">
                    <h5 class="card-title font-head">21st Century Fitness</h5>
                    <h6>Full Stack Application</h6>
                    <a href="https://centuryfitness.herokuapp.com/" class="btn btn-primary mx-3">Live
                      Webpage</a>
                    <a href="https://github.com/Alec74/21stCenturyFitness" class="btn btn-primary mx-3">Github
                      Repo</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- CodeQuiz --> */}
            <div class="row featured">
              <div class="col-lg-4 col-sm-12 my-5">
                <div class="card border-info" id="codequiz">
                  <img src="images/codeQuiz.png" class="card-img-top" alt="showcase of code quiz"></img>
                  <div class="card-body text-center color-card">
                    <h5 class="card-title font-head">Code Quiz!</h5>
                    <a href="https://alec74.github.io/codeQuiz/" class="btn btn-primary mx-3">Live
                      Webpage</a>
                    <a href="https://github.com/Alec74/codeQuiz" class="btn btn-primary mx-3">Github
                      Repo</a>
                  </div>
                </div>
              </div>
              {/* <!-- Workday Scheduler --> */}
              <div class="col-lg-4 col-sm-12 my-5">
                <div class="card border-info" id="worksched">
                  <img src="images/workDaySched.png" class="card-img-top" alt="showcase of work day scheduler"></img>
                  <div class="card-body text-center color-card">
                    <h5 class="card-title font-head">Workday Planner</h5>
                    <a href="https://alec74.github.io/workdayPlanner/" class="btn btn-primary mx-3">Live
                      Webpage</a>
                    <a href="https://github.com/Alec74/workdayPlanner" class="btn btn-primary mx-3">Github
                      Repo</a>
                  </div>
                </div>
              </div>
              {/* <!-- Weather Dashboard --> */}
              <div class="col-lg-4 col-sm-12 my-5">
                <div class="card border-info" id="weather">
                  <img src="images/dynamicWeather.png" class="card-img-top" alt="showcase of weather dashboard"></img>
                  <div class="card-body text-center color-card">
                    <h5 class="card-title font-head">Weather Dashboard</h5>
                    <a href="https://alec74.github.io/weatherDashboard/" class="btn btn-primary mx-3">Live
                      Webpage</a>
                    <a href="https://github.com/Alec74/weatherDashboard" class="btn btn-primary mx-3">Github
                      Repo</a>
                  </div>
                </div>
              </div>
              {/* <!-- Note Taker --> */}
              <div class="col-lg-4 col-sm-12 my-5">
                <div class="card border-info" id="notes">
                  <img src="images/noteTaker.png" class="card-img-top" alt="showcase of note taker"></img>
                  <div class="card-body text-center color-card">
                    <h5 class="card-title font-head">Note Taker</h5>
                    <a href="https://take-your-note.herokuapp.com/" class="btn btn-primary mx-3">Live
                      Webpage</a>
                    <a href="https://github.com/Alec74/NoteTaker" class="btn btn-primary mx-3">Github
                      Repo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container backend">
            <div class="row featured">
              <div class="card col-lg-4 col-sm-12 my-5" >
                <div class="card-header">
                  Dynamic Readme
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><a href="https://github.com/Alec74/dynamicREADME">Github Repo</a></li>
                </ul>
              </div>
              <div class="card col-lg-4 col-sm-12 my-5 mx-4" >
                <div class="card-header">
                  Team Profile Generator
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><a href="https://github.com/Alec74/TeamProfileGenerator">Github Repo</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
