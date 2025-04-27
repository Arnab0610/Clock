function clock(){
    let time=new Date();
        let hr=time.getHours();
        let min=time.getMinutes();
        let sec=time.getSeconds();
        let msec=time.getMilliseconds();
        document.getElementById("hour").innerHTML=hr;
        document.getElementById("minute").innerHTML=+min;
        document.getElementById("seconds").innerHTML=+sec;

        setInterval(clock,1);
        

}
clock();

        let time=new Date();
        let day=time.getDay();

        switch(day)
        {
            case 0:
                day="Sunday";
                break;

            case 1:
                day="Monday";
                break;
            
            
            case 2:
                day="Tuesday";
                break;    
                
                
            case 3:
                day="Wednesday";
                break;

            case 4:
                day="Thursday";
                break;

            case 5:
                day="Friday";
                break;

            case 6:
                day="Saturday";
                break;
        }
        document.getElementById("day").innerHTML=day;


        let month=time.getMonth();

        switch(month)
        {
            case 0:
                month="January";
                break;

            case 1:
                day=" February";
                break;
            
            
            case 2:
                month=" March";
                break;    
                
                
            case 3:
                month=" April";
                break;

            case 4:
                month="May";
                break;

            case 5:
                month="June ";
                break;

            case 6:
                month="July";
                break;

            case 7:
                month=" August ";
                break;

            case 8:
                month="September ";
                break;

            case 9:
                month="October";
                break;

            case 10:
                month=" November";
                break;

            case 11:
                month=" December";
                break;

        }
        document.getElementById("month").innerHTML=month;





        // hour.textContent = hr;
        // minute.textContent = min;
        // seconds.textContent = sec;



// .innerHTML=hr+":"+min+":"+sec+":"+msec;
// .innerHTML=hr+":"+min+":"+sec+":"+msec;
// .innerHTML=hr+":"+min+":"+sec+":"+msec;