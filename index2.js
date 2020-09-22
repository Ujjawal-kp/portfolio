$(document).ready(function(){
  $('#jq').LineProgressbar({
    percentage: 80,
    fillBackgroundColor: 'red',
    backgroundColor: 'white',
    radius: '65px',
    height: '15px',
    width: '100%',
    duration: 4000,
    ShowProgressCount: true
  });
$('#jr').LineProgressbar({
  percentage: 70,
  fillBackgroundColor:'yellow' ,
  backgroundColor: 'white',
  radius: '65px',
  height: '15px',
  width: '100%',
  duration: 4000,
  ShowProgressCount: true
   });
   $('#jp').LineProgressbar({
    percentage: 55,
    fillBackgroundColor:'green' ,
    backgroundColor: 'white',
    radius: '65px',
    height: '15px',
    width: '100%',
    duration: 4000,
    ShowProgressCount: true
     });
   $('#js').LineProgressbar({
      percentage: 75,
      fillBackgroundColor:'blue' ,
      backgroundColor: 'white',
      radius: '65px',
      height: '15px',
      width: '100%',
      duration: 4000,
      ShowProgressCount: true
       });
       $('#jj').LineProgressbar({
        percentage: 10,
        fillBackgroundColor:'teal' ,
        backgroundColor: 'white',
        radius: '65px',
        height: '15px',
        width: '100%',
        duration: 4000,
        ShowProgressCount: true
         });
});