import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public departments = [];
  public _id=0;
  public m_id=0;
  public d_id=0;
  public t_id=0;
  constructor() { }

  ngOnInit() {
  }
  addDepartment(){
    this._id++;
    let pushData = {id:this._id,managers:[],total:0} ; 
    this.departments.push(pushData);
    console.log(this.departments);
  }
  addManager(dp_id,index){
    // alert(dp_id);
    this.departments[index].total=this.departments[index].total+300;
    this.m_id++;

    let pushData = {id:this.m_id,department_id: dp_id,submangers:[],developer:[],tester:[],total:300}; 

    this.departments[index].managers.push(pushData);
    console.log(this.departments);

  }

  addTester(dp_id,m_id,index,m_index){
    this.d_id++;
    this.departments[index].total=this.departments[index].total+500;
    this.departments[index].managers[m_index].total=this.departments[index].managers[m_index].total+500;
    console.log(this.departments[index].managers[m_index].total);
    let pushData = {id:this.d_id,department_id: dp_id,manager_id:m_id}  ; 

    this.departments[index].managers[m_index].tester.push(pushData);
    console.log(pushData);
    console.log(this.departments);
  } 

  addDeveloper(dp_id,m_id,index,m_index){
    this.t_id++;
    this.departments[index].total=this.departments[index].total+1000;
    this.departments[index].managers[m_index].total=this.departments[index].managers[m_index].total+1000;

    let pushData = {id:this.d_id,department_id: dp_id,manager_id:m_id}  ; 

    this.departments[index].managers[m_index].developer.push(pushData);
    console.log(pushData);
    console.log(this.departments);
    
  }
  addSubmanager(dp_id,m_id,index,m_index){
    this.m_id++;
    this.departments[index].total=this.departments[index].total+300;
    this.departments[index].managers[m_index].total=this.departments[index].managers[m_index].total+300;


    let pushData = {id:this.m_id,department_id: dp_id,manager_id:m_id,tester:[],developer:[],total:300}  ; 

    this.departments[index].managers[m_index].submangers.push(pushData);
    // console.log(pushData);
    console.log(this.departments);
  }
  addSubTester(dp_id,m_id,sm_id,index,m_index,sm_index){
    this.t_id++;
    this.departments[index].total=this.departments[index].total+500;
    this.departments[index].managers[m_index].submangers[sm_index].total=this.departments[index].managers[m_index].submangers[sm_index].total+500;
    
    let pushData = {id:this.t_id,department_id: dp_id,manager_id:sm_id}  ; 

    this.departments[index].managers[m_index].submangers[sm_index].tester.push(pushData);
    // console.log(pushData);
    console.log(this.departments)
  }
  addSubDeveloper(dp_id,m_id,sm_id,index,m_index,sm_index){
    this.t_id++;
    this.departments[index].total=this.departments[index].total+1000;
    this.departments[index].managers[m_index].submangers[sm_index].total=this.departments[index].managers[m_index].submangers[sm_index].total+1000;

    let pushData = {id:this.t_id,department_id: dp_id,manager_id:sm_id}  ; 

    this.departments[index].managers[m_index].submangers[sm_index].developer.push(pushData);
    // console.log(pushData);
    console.log(this.departments)

  }
}
