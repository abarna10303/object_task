const passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 3,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
  ];
  let parray=[];
  for(i=0;i<passengers.length;i++){ 
    parray[i]=passengers[i].passengerName;
  }
  console.log("persons :")
  console.log(parray);
 let vegarry=[];
 var b=0;
 for(i=0;i<passengers.length;i++)
 {
    if(passengers[i].isVegetarianOrVegan==true)
    {
        vegarry[b]=passengers[i].passengerName;
        b++;
    }
 }
 
 console.log("Vegetarians : ");
 console.log(vegarry);
 