
function go() {
    var things_love = document.getElementById("input_love").value;
    things_love = things_love.replace(/[^a-zA-Z0-9,]/g, "").toLowerCase();
    love_arr = things_love.split(",");
    love_arr = Array.from(love_arr);


    var things_good = document.getElementById("input_good").value;
    things_good = things_good.replace(/[^a-zA-Z0-9,]/g, "").toLowerCase();
    good_arr = things_good.split(",");
    good_arr = Array.from(good_arr);

    var things_paid = document.getElementById("input_paid").value;
    things_paid = things_paid.replace(/[^a-zA-Z0-9,]/g, "").toLowerCase();
    paid_arr = things_paid.split(",");
    paid_arr = Array.from(paid_arr);

    var things_world = document.getElementById("input_world").value;
    things_world = things_world.replace(/[^a-zA-Z0-9,]/g, "").toLowerCase();
    world_arr = things_world.split(",");
    world_arr = Array.from(world_arr);


    console.log(love_arr);
    console.log("printing paid arr ");
    console.log(paid_arr);
    console.log("printing paid arr ");
    console.log(good_arr);
    console.log("printing paid arr ");
    console.log(world_arr);
    //here i have taken the values and converted them into the the lowercase. Removed all the extra new line etc.
    //then i did save them in the array 

    //now i will find the intersections of the array 
    //let intersections = things_good.filter(x => things_love.includes(x));


    let passion_love_good = love_arr.filter(x => good_arr.includes(x));
    let mission_love_world = love_arr.filter(x => world_arr.includes(x));
    let profession_good_paid = good_arr.filter(x => paid_arr.includes(x));
    let vocation_world_paid = world_arr.filter(x => paid_arr.includes(x));
    console.log(passion_love_good);
    console.log(mission_love_world);
    console.log(profession_good_paid);
    console.log(vocation_world_paid);
    let final1 = passion_love_good.filter(x => mission_love_world.includes(x));
    let final2 = profession_good_paid.filter(x => vocation_world_paid.includes(x));
    let dream_job = final1.filter(x => final2.includes(x));

    console.log(dream_job);
    if (passion_love_good.length === 1 && passion_love_good[0] == "" || passion_love_good.length===0) {
        document.getElementById("passion_ans_field").innerHTML = "None";
    }
    else
        document.getElementById("passion_ans_field").innerHTML = passion_love_good;



    if (mission_love_world.length === 1 && mission_love_world[0] == "" || mission_love_world.length===0) {
        document.getElementById("mission_ans_field").innerHTML = "None";
    }
    else
        document.getElementById("mission_ans_field").innerHTML = mission_love_world;


    if (vocation_world_paid.length === 1 && vocation_world_paid[0] == "" || vocation_world_paid.length===0) {
        document.getElementById("vocation_ans_field").innerHTML = "None";
    }
    else
        document.getElementById("vocation_ans_field").innerHTML = vocation_world_paid;


    if (profession_good_paid.length === 1 && profession_good_paid[0] == "" || profession_good_paid.length===0) {
        document.getElementById("profession_ans_field").innerHTML = "None";
    }
    else
        document.getElementById("profession_ans_field").innerHTML = profession_good_paid;

    console.log(dream_job.length);


    if (dream_job.length === 1 && dream_job[0] == "" || dream_job.length===0) {
        document.getElementById("dream_job_final").innerHTML = "You need to work on above Areas.";
    }
    else
        document.getElementById("dream_job_final").innerHTML = dream_job;




}

