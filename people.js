class People
{
constructor(){
    this.index=null
    
    this.email=null
    this.vote=null
}

getcount()
{
    var peoplecountref=database.ref('playercount');
    peoplecountref.on("value",function(data)
    {
       count=data.val()
    })

}
updatecount(count)
{
    database.ref ('/').update({
        peoplecount:count
    })
}
update()
{
    var playerindex ="people"+this.index
    database.ref (playerindex).set({
        email:this.email,
        vote:this.vote

        

    })
}
/*static getplayerinfo()
{
    var peopleinforef=database.ref("people");
    peopleinforef.on("value",(data)=>{
    allpersons=data.val();
    })
}*/
}



