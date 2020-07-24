class Form{
    constructor(){
this.input=createInput("Email");
this.button=createButton("Open");
this.input1=createInput("Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?")

this.button1=createButton("Yes");
this.button2=createButton("No");
this.greeting =createElement("h3");

        
    }

    hide()
        {
            this.greeting.hide()
            this.button.hide()
            this.button1.hide()
            this.button2.hide()
            this.input.hide()
            this.input1.hide()

        }
    
    display()
    {
        var title=createElement('h1')
        title.html("Donation for schools");
        title.position(130,80);
        this.input.position(130,160);
        this.input1.position(130,250,200,20);

        this.button.position(250,200)
        this.button1.position(250,300)
        this.button2.position(290,300)
        this.button.mousePressed(()=>

        {
    this.input.hide()
    this.input1.hide()
    this.button.hide()
    this.button1.hide()
    this.button2.hide()
    people.email= this.input.value();
    people.vote=this.input1.value();
    count=count+1;
    people.index=count;
    people.update();
    people.updatecount(count);
    this.greeting.html("Welcome "+people.email);
    this.greeting.position(150,130);
    this.greeting1.html("Thank You for your response"+people.email);
    this.greeting1.position(160,130);





        })
        
    }
}