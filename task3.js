//immediatly invoked function
function details(){
    //invoked funtion for full name
    (function(First_name,Last_name){
        console.log(`name : ${First_name} ${Last_name}`)
    })('Nani','Poleboyina');

    function working_details(company,role,salary){
        console.log(`company name : ${company}`)
        console.log(`Role : ${role}`)
        console.log(`Salary : ${salary}`)
    }
    working_details('clariont','Python Developer',15000);

}

details();

