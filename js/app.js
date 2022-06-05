
 $(document).ready(function(){

   function autocomplete(inp, arr) {
     /*the autocomplete function takes two arguments,
     the text field element and an array of possible autocompleted values:*/
     var currentFocus;
     /*execute a function when someone writes in the text field:*/
     inp.addEventListener("input", function(e) {
         var a, b, i, val = this.value;
         /*close any already open lists of autocompleted values*/
         closeAllLists();
         if (!val) { return false;}
         currentFocus = -1;
         /*create a DIV element that will contain the items (values):*/
         a = document.createElement("DIV");
         a.setAttribute("id", this.id + "autocomplete-list");
         a.setAttribute("class", "autocomplete-items");
         /*append the DIV element as a child of the autocomplete container:*/
         this.parentNode.appendChild(a);
         /*for each item in the array...*/
         for (i = 0; i < arr.length; i++) {
           /*check if the item starts with the same letters as the text field value:*/
           if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
             /*create a DIV element for each matching element:*/
             b = document.createElement("DIV");
             /*make the matching letters bold:*/
             b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
             b.innerHTML += arr[i].substr(val.length);
             /*insert a input field that will hold the current array item's value:*/
             b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
             /*execute a function when someone clicks on the item value (DIV element):*/
             b.addEventListener("click", function(e) {
                 /*insert the value for the autocomplete text field:*/
                 inp.value = this.getElementsByTagName("input")[0].value;
                 /*close the list of autocompleted values,
                 (or any other open lists of autocompleted values:*/
                 closeAllLists();
             });
             a.appendChild(b);
           }
         }
     });
     /*execute a function presses a key on the keyboard:*/
     inp.addEventListener("keydown", function(e) {
         var x = document.getElementById(this.id + "autocomplete-list");
         if (x) x = x.getElementsByTagName("div");
         if (e.keyCode == 40) {
           /*If the arrow DOWN key is pressed,
           increase the currentFocus variable:*/
           currentFocus++;
           /*and and make the current item more visible:*/
           addActive(x);
         } else if (e.keyCode == 38) { //up
           /*If the arrow UP key is pressed,
           decrease the currentFocus variable:*/
           currentFocus--;
           /*and and make the current item more visible:*/
           addActive(x);
         } else if (e.keyCode == 13) {
           /*If the ENTER key is pressed, prevent the form from being submitted,*/
           e.preventDefault();
           if (currentFocus > -1) {
             /*and simulate a click on the "active" item:*/
             if (x) x[currentFocus].click();
           }
         }
     });
     function addActive(x) {
       /*a function to classify an item as "active":*/
       if (!x) return false;
       /*start by removing the "active" class on all items:*/
       removeActive(x);
       if (currentFocus >= x.length) currentFocus = 0;
       if (currentFocus < 0) currentFocus = (x.length - 1);
       /*add class "autocomplete-active":*/
       x[currentFocus].classList.add("autocomplete-active");
     }
     function removeActive(x) {
       /*a function to remove the "active" class from all autocomplete items:*/
       for (var i = 0; i < x.length; i++) {
         x[i].classList.remove("autocomplete-active");
       }
     }
     function closeAllLists(elmnt) {
       /*close all autocomplete lists in the document,
       except the one passed as an argument:*/
       var x = document.getElementsByClassName("autocomplete-items");
       for (var i = 0; i < x.length; i++) {
         if (elmnt != x[i] && elmnt != inp) {
           x[i].parentNode.removeChild(x[i]);
         }
       }
     }
     /*execute a function when someone clicks in the document:*/
     document.addEventListener("click", function (e) {
         closeAllLists(e.target);
     });
   }

   /*An array containing all the country names in the world:*/
   var countries = ["Badarpur","Begusarai","Din Dayal Upadhyay","Guwahati","Halflong","Kamakhya","Kanpur","Katihar","Khagaria","Lumding","Mansi","New Delhi","New Jalpaiguri","Patna","Prayagraj","Silchar"];

   /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
   autocomplete(document.getElementById("boarding_station"), countries);


     function autocomplete(inp, arr) {
       /*the autocomplete function takes two arguments,
       the text field element and an array of possible autocompleted values:*/
       var currentFocus;
       /*execute a function when someone writes in the text field:*/
       inp.addEventListener("input", function(e) {
           var a, b, i, val = this.value;
           /*close any already open lists of autocompleted values*/
           closeAllLists();
           if (!val) { return false;}
           currentFocus = -1;
           /*create a DIV element that will contain the items (values):*/
           a = document.createElement("DIV");
           a.setAttribute("id", this.id + "autocomplete-list");
           a.setAttribute("class", "autocomplete-items");
           /*append the DIV element as a child of the autocomplete container:*/
           this.parentNode.appendChild(a);
           /*for each item in the array...*/
           for (i = 0; i < arr.length; i++) {
             /*check if the item starts with the same letters as the text field value:*/
             if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
               /*create a DIV element for each matching element:*/
               b = document.createElement("DIV");
               /*make the matching letters bold:*/
               b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
               b.innerHTML += arr[i].substr(val.length);
               /*insert a input field that will hold the current array item's value:*/
               b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
               /*execute a function when someone clicks on the item value (DIV element):*/
               b.addEventListener("click", function(e) {
                   /*insert the value for the autocomplete text field:*/
                   inp.value = this.getElementsByTagName("input")[0].value;
                   /*close the list of autocompleted values,
                   (or any other open lists of autocompleted values:*/
                   closeAllLists();
               });
               a.appendChild(b);
             }
           }
       });
       /*execute a function presses a key on the keyboard:*/
       inp.addEventListener("keydown", function(e) {
           var x = document.getElementById(this.id + "autocomplete-list");
           if (x) x = x.getElementsByTagName("div");
           if (e.keyCode == 40) {
             /*If the arrow DOWN key is pressed,
             increase the currentFocus variable:*/
             currentFocus++;
             /*and and make the current item more visible:*/
             addActive(x);
           } else if (e.keyCode == 38) { //up
             /*If the arrow UP key is pressed,
             decrease the currentFocus variable:*/
             currentFocus--;
             /*and and make the current item more visible:*/
             addActive(x);
           } else if (e.keyCode == 13) {
             /*If the ENTER key is pressed, prevent the form from being submitted,*/
             e.preventDefault();
             if (currentFocus > -1) {
               /*and simulate a click on the "active" item:*/
               if (x) x[currentFocus].click();
             }
           }
       });
       function addActive(x) {
         /*a function to classify an item as "active":*/
         if (!x) return false;
         /*start by removing the "active" class on all items:*/
         removeActive(x);
         if (currentFocus >= x.length) currentFocus = 0;
         if (currentFocus < 0) currentFocus = (x.length - 1);
         /*add class "autocomplete-active":*/
         x[currentFocus].classList.add("autocomplete-active");
       }
       function removeActive(x) {
         /*a function to remove the "active" class from all autocomplete items:*/
         for (var i = 0; i < x.length; i++) {
           x[i].classList.remove("autocomplete-active");
         }
       }
       function closeAllLists(elmnt) {
         /*close all autocomplete lists in the document,
         except the one passed as an argument:*/
         var x = document.getElementsByClassName("autocomplete-items");
         for (var i = 0; i < x.length; i++) {
           if (elmnt != x[i] && elmnt != inp) {
             x[i].parentNode.removeChild(x[i]);
           }
         }
       }
       /*execute a function when someone clicks in the document:*/
       document.addEventListener("click", function (e) {
           closeAllLists(e.target);
       });
     }

     /*An array containing all the country names in the world:*/
     var countries = ["Badarpur","Begusarai","Din Dayal Upadhyay","Guwahati","Halflong","Kamakhya","Kanpur","Katihar","Khagaria","Lumding","Mansi","New Delhi","New Jalpaiguri","Patna","Prayagraj","Silchar"];

     /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
     autocomplete(document.getElementById("destination_station"), countries);

    $('#search_trains').click(function (){


      const trains=[
      ["New Delhi","Kanpur","Prayagraj","Din Dayal Upadhyay","Patna","Katihar","New Jalpaiguri","Guwahati","Lumding","Halflong","Badarpur","Silchar"],
      ["Begusarai","Khagaria","Mansi","Katihar","Kamakhya","Guwahati","Lumding","Dibrugarh"],
      ["New Delhi","Kanpur","Prayagraj","Din Dayal Upadhyay","Patna","Begusarai","Katihar","New Jalpaiguri","Kamakhya"],
      ["New Jalpaiguri","Kamakhya","Guwahati","Lumding","New Halflong","Badarpur","Silchar"],
      ["New Delhi","Kanpur","Prayagraj","Din Dayal Upadhyay","Patna","Katihar","New Jalpaiguri","Guwahati","Lumding"],
      ["Guwahati","Lumding","New Halflong","Badarpur","Silchar"],
      ["New Delhi","Kanpur","Prayagraj","Din Dayal Upadhyay","Patna","New Jalpaiguri","Kamakhya"],
      ["New Delhi","Kanpur","Prayagraj","Din Dayal Upadhyay","Patna","Begusarai","Khagaria","Katihar"]
    ];
     const map2=new Map();
     map2.set("New Delhi", 0);
     map2.set("Kanpur",440);
     map2.set("Prayagraj",635);
     map2.set("Din Dayal Upadhyay",787);
     map2.set("Patna",995);
     map2.set("Begusarai",1118);
     map2.set("Khagaria",1159);
     map2.set("Mansi",1167);
     map2.set("Katihar",1284);
     map2.set("New Jalpaiguri",1468);
     map2.set("Kamakhya",1894);
     map2.set("Guwahati",1901);
     map2.set("Lumding",2082);
     map2.set("Halflong",2180);
     map2.set("Badarpur",2251);
     map2.set("Silchar",2280);

     const map3=new Map();
     map3.set("New Delhi", 0);
     map3.set("Kanpur",265);
     map3.set("Prayagraj",385);
     map3.set("Din Dayal Upadhyay",440);
     map3.set("Patna",510);
     map3.set("Begusarai",525);
     map3.set("Khagaria",545);
     map3.set("Mansi",550);
     map3.set("Katihar",575);
     map3.set("New Jalpaiguri",635);
     map3.set("Kamakhya",735);
     map3.set("Guwahati",740);
     map3.set("Lumding",885);
     map3.set("Halflong",935);
     map3.set("Badarpur",965);
     map3.set("Silchar",980);

    const map1 = new Map();
    map1.set("New Delhi", 1);
    map1.set("Kanpur",2);
    map1.set("Prayagraj",3);
    map1.set("Din Dayal Upadhyay",4);
    map1.set("Patna",5);
    map1.set("Begusarai",6);
    map1.set("Khagaria",7);
    map1.set("Mansi",8);
    map1.set("Katihar",9);
    map1.set("New Jalpaiguri",10);
    map1.set("Kamakhya",11);
    map1.set("Guwahati",12);
    map1.set("Lumding",13);
    map1.set("Halflong",14);
    map1.set("Badarpur",15);
    map1.set("Silchar",16);
      // i1 NewSamparkKranti
      // i2 AwadhAssam
      // i3 NorthEast
      // i4 SealdahSilchar
      // i5 Rajdhani
      // i6 SilcharExpress
      //i7 Brahamputra Express
      //i8 Seemanchal expr
        let source1 = $('#boarding_station').val();
        let destination1 = $('#destination_station').val();
        //console.log(source1);
        let a=1;
        let b=1;
        let c=1;
        let d=1;
        let e=1550;
        var lap;
        var ans=0;
          let blob="";
          var temp;
          var direct=-1;
          var return1 =0;
        function myFunction(source1,destination1) {

        for(var k=0;k<8;k++)
        {
          for(var i=0,temp1=trains[k].length;i<temp1;i++)
          {
            if(trains[k][i]==source1)
            {

              for(var j=0,temp2=trains[k].length;j<temp2;j++)
              {
                if(destination1==trains[k][j])
                {
                   a=source1;
                  b=destination1;
                  if(k==0)
                   c="New Sampark Kranti(14038)";
                   else if(k==1)
                   c="AwadhAssam(15910)";
                   else if(k==2)
                   c="NorthEast(12506)";
                   else if(k==3)
                   c="SealdahSilchar(03175)";
                   else if(k==4)
                   c="Rajdhani(12424)";
                   else if(k==5)
                   c="SilcharExpress(15615)";
                   else if(k==6)
                   c="Brahamputra Express(15657)";
                   else
                   c="Seemanchal Express(12488)";
                  ans=1;
                  direct=k;
                  return1=1;
                  lap="Lap1";
                  d=map2.get(destination1)-map2.get(source1);
                  e=map3.get(destination1)-map3.get(source1);
                //  temp="Direct trains between the given the source and destination";
                //  blob=`<tr>${temp}</tr>`;
                    blob= blob+`<tr><td>${lap}</td><td>${a}</td><td>${b}</td><td>${c}</td><td>${d}</td><td>${e}</td></tr>`;
                }
              }
            }
          }
        }
        $('#display_trains').html(`
        <table class="table">
            <tr>
                <th>Lap</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Train Name</th>
                <th>Distance(in km)</th>
                <th>Fare(in rupees)</th>


            </tr>
            ${blob}
        </table>
        `);

}
function myFunction1(source1,destination1) {

for(var k=0;k<8;k++)
{
  for(var i=0,temp1=trains[k].length;i<temp1;i++)
  {
    if(trains[k][i]==source1)
    {

      for(var j=0,temp2=trains[k].length;j<temp2;j++)
      {
        if(destination1==trains[k][j])
        {
           a=source1;
          b=destination1;
          if(k==0)
           c="New Sampark Kranti(14038)";
           else if(k==1)
           c="AwadhAssam(15910)";
           else if(k==2)
           c="NorthEast(12506)";
           else if(k==3)
           c="SealdahSilchar(03175)";
           else if(k==4)
           c="Rajdhani(12424)";
           else if(k==5)
           c="SilcharExpress(15615)";
           else if(k==6)
           c="Brahamputra Express(15657)";
           else
           c="Seemanchal Express(12488)";
          ans=1;
          direct=k;
          return k;

        }
      }
    }
  }
}
return -1;
}
        myFunction(source1,destination1);
        temp="Indirect Trains";
        //  blob= blob+`<tr>${temp}</tr>`;
        for(var k=0;k<8;k++)
        {
          if(k==direct)
          continue;
          for(var i=0,temp3=trains[k].length;i<temp3;i++)
          {
            if(source1==trains[k][i])
            {
              for(var j=i+1,temp4=trains[k].length;j<temp4;j++)
              {
                console.log(trains[k][j]);
                if(map1.get(trains[k][j])>map1.get(destination1))
                continue;
                if(myFunction1(trains[k][j],destination1)!=-1 && trains[k][j]!=destination1 && myFunction1(trains[k][j],destination1)!=k)
                {
                   a=source1,b=trains[k][j];
                   if(k==0)
                    c="New Sampark Kranti(14038)";
                    else if(k==1)
                    c="AwadhAssam(15910)";
                    else if(k==2)
                    c="NorthEast(12506)";
                    else if(k==3)
                    c="SealdahSilchar(03175)";
                    else if(k==4)
                    c="Rajdhani(12424)";
                    else if(k==5)
                    c="SilcharExpress(15615)";
                    else if(k==6)
                    c="Brahamputra Express(15657)";
                    else
                    c="Seemanchal Express(12488)";
                   lap="Lap1";
                d=map2.get(trains[k][j])-map2.get(source1);
                e=map3.get(trains[k][j])-map3.get(source1);
                    blob= blob+`<tr><td>${lap}</td><td>${a}</td><td>${b}</td><td>${c}</td><td>${d}</td><td>${e}</td></tr>`;
                    var temp=myFunction1(trains[k][j],destination1)
                     a=trains[k][j],b=destination1;
                     if(temp==0)
                      c="New Sampark Kranti(14038)";
                      else if(temp==1)
                      c="AwadhAssam(15910)";
                      else if(temp==2)
                      c="NorthEast(12506)";
                      else if(temp==3)
                      c="SealdahSilchar(03175)";
                      else if(temp==4)
                      c="Rajdhani(12424)";
                      else if(temp==5)
                      c="SilcharExpress(15615)";
                      else if(temp==6)
                      c="Brahamputra Express(15657)";
                      else
                      c="Seemanchal Express(12488)";
                     lap="Lap2"
                     d=map2.get(destination1)-map2.get(trains[k][j]);
                     e=map3.get(destination1)-map3.get(trains[k][j]);
                        blob= blob+`<tr><td>${lap}</td><td>${a}</td><td>${b}</td><td>${c}</td><td>${d}</td><td>${e}</td></tr>`;

                }

              }
            }
          }
        }

        $('#display_trains').html(`
        <table class="table">
            <tr>
                <th>Lap</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Train Name</th>
                <th>Distance(in km)</th>
                <th>Fare(in rupees)</th>
            </tr>
            ${blob}
        </table>
        `);



    });

    $('#fetch_stations').click(function () {
        let trainNo=$('#train_no').val();

        $.ajax({
            url:"https://indianrailapi.com/api/v2/TrainSchedule/apikey/30c382602bfa67c8a7c580e6cfe2becb/TrainNumber/" + trainNo,
            success:function (data) {
                console.log(data);

                let textBlob;
                for(let i=0; i<data.Route.length;i++){
                    textBlob= textBlob + `<tr><td>${data.Route[i].StationName}</td><td>${data.Route[i].ArrivalTime}</td><td>${data.Route[i].DepartureTime}</td><td>${data.Route[i].Distance} kms</td></tr>`;
                }

                $('#display_stations').html(`
                <table class="table">
                    <tr>
                        <th>Station Name</th>
                        <th>Arrival Time</th>
                        <th>Departure Time</th>
                        <th>Distance Travelled</th>
                    </tr>
                    ${textBlob}
                </table>
                `);
            },
            error:function (error) {
                console.log(error);
                alert("Error occured");
            }
        })
    })
      });
