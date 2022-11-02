import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  public projectIndex!: number;
  public projectCount: number = 0;
  public userInfo: any = {
    firstName: 'Markiian',
    lastName: 'Holets',
    email: 'markgol777@gmail.com',
    phoneNumber: '+390964534566',
    softSkills:
      [{ name: 'Public speaking', description: 'Public speaking, also called oratory or oration, has traditionally meant the act of speaking face to face to a live audience. Today it includes any form of speaking to an audience, including pre-recorded speech delivered over great distance by means of' },
      { name: 'Confidence', description: `Confidence is a state of being clear-headed either that a hypothesis or prediction is correct or that a chosen course of action is the best or most effective. Confidence comes from a Latin word 'fidere' which means "to trust"; therefore, having self-confidence is` },
      { name: 'Decision-making', description: 'In psychology, decision-making is regarded as the cognitive process resulting in the selection of a belief or a course of action among several possible alternative options. It could be either rational or irrational.' },
      { name: 'Team-Building', description: 'Team building is a collective term for various types of activities used to enhance social relations and define roles within teams, often involving collaborative tasks.' },
      { name: 'Reliability', description: 'the quality of being trustworthy or of performing consistently wel' }],
    TechnicalSkills: ['June Full Stuck Developer', 'html', 'css', 'sccs', 'jquarery', 'dom', 'angular', 'work with databases(mongoDB, postgresql)'],
    exprience: [{ name: 'no expriences', description: 'no exprience' }],
    avatar: 'https://static.wikia.nocookie.net/villains/images/5/54/Light_YagamiHD.jpg/revision/latest?cb=20180414020152'
  }

  constructor() { }

  ngOnInit(): void {
  }

  showInfo(event: any) {
    event.target.nextElementSibling.children[0].children[1].classList.add('show');
    event.target.nextElementSibling.classList.toggle('show');
  }

  showDescription(event: any) {
    event.target.nextElementSibling.classList.toggle('show')
  }

  showProjectAdd() {
    document.querySelector<any>('.project-add').classList.toggle('show');
    document.querySelector<any>('.btn-add').classList.add('show');
    document.querySelector<any>('.btn-add').classList.remove('hide');
    document.querySelector<any>('.btn-save-edit').classList.add('hide');
    document.querySelector<any>('.btn-save-edit').classList.remove('show');
  }

  addNewExprience() {
    if (this.userInfo.exprience[0].name === 'no expriences') this.userInfo.exprience.shift()
    const project = {
      name: document.querySelector<any>('.project-name').value,
      description: document.querySelector<any>('.short-description').value
    }
    this.userInfo.exprience.push(project)
    document.querySelector<any>('.project-name').value = '';
    document.querySelector<any>('.short-description').value = '';

    this.getCount();
    document.querySelector<any>('.project-add').classList.toggle('show');
  }

  getCount() {
    for (let i = 0; i < this.userInfo.exprience.length; i++) {
      if (this.userInfo.exprience[i].name === 'no expriences') {
        this.projectCount = this.userInfo.exprience.length - 1;
      } else {
        this.projectCount = this.userInfo.exprience.length;
      }
    }
  }

  editExprience(event: any) {
    if (event.target.nextElementSibling.innerText !== 'no expriences') {
      document.querySelector<any>('.project-add').classList.add('show');
      document.querySelector<any>('.btn-add').classList.add('hide');
      document.querySelector<any>('.btn-save-edit').classList.remove('hide');
      console.log(event.target.nextElementSibling.innerText)
      for (let i = 0; i < this.userInfo.exprience.length; i++) {
        if (event.target.nextElementSibling.innerText == this.userInfo.exprience[i].name) {
          console.log('bingo');
          console.log(i);
          this.projectIndex = i;
          document.querySelector<any>('.project-name').value = this.userInfo.exprience[this.projectIndex].name;
          document.querySelector<any>('.short-description').value = this.userInfo.exprience[this.projectIndex].description;
        }
      }
    }
  }


  saveExprience() {
    const newProject = {
      name: document.querySelector<any>('.project-name').value,
      description: document.querySelector<any>('.short-description').value
    }

    this.userInfo.exprience.splice(this.projectIndex, 1, newProject);
    document.querySelector<any>('.project-name').value = '';
    document.querySelector<any>('.short-description').value = '';
    document.querySelector<any>('.project-add').classList.toggle('show');
  }

  deleteExprience() {
    if (this.userInfo.exprience[0].name !== 'no expriences') {
      const ask = confirm(`are you sure you want to delete this project`);
      console.log(this.projectIndex)
      console.log(this.userInfo.exprience[this.projectIndex]);
      if (ask == true) {
        this.userInfo.exprience.splice(this.projectIndex, 1);
      }
      if (this.userInfo.exprience.length === 0) {
        const project = {
          name: 'no expriences',
          description: 'no expriences'
        }
        this.userInfo.exprience.push(project);
        this.projectCount-1;
      }
    }
  }
}