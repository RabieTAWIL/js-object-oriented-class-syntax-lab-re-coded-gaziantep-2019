class BoardMember{
  constructor(name,homeState,training){
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  BoardMember.veto(){
    return "No, I must disagree"
  }
}